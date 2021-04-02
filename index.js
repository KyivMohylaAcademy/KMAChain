require('dotenv').config()

const Web3 = require('web3')
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx')
const log = require('ololog').configure({ time: true })
const ansi = require('ansicolor').nice


const testnet = `https://ropsten.infura.io/v3/${process.env.INFURA_ACCESS_TOKEN}`
const web3 = new Web3( new Web3.providers.HttpProvider(testnet) )
web3.eth.defaultAccount = process.env.WALLET_ADDRESS
const amountToSend = 0.00100000

//fetching the current transaction gas prices from https://ethgasstation.info/
const getCurrentGasPrices = async () => {
  let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json')
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10
  }
 
  console.log("\r\n")
  log (`Current ETH Gas Prices (in GWEI):`.cyan)
  console.log("\r\n")
  log(`Low: ${prices.low} (transaction completes in < 30 minutes)`.green)
  log(`Standard: ${prices.medium} (transaction completes in < 5 minutes)`.yellow)
  log(`Fast: ${prices.high} (transaction completes in < 2 minutes)`.red)
  console.log("\r\n")
 
  return prices
}


const main = async () => {
  let destinationBalanceWei = web3.eth.getBalance(process.env.DESTINATION_WALLET_ADDRESS).toNumber()
  let destinationBalance = web3.fromWei(destinationBalanceWei, 'ether')

  log(`Destination wallet balance is currently ${destinationBalance} ETH`.green)

  let myBalanceWei = web3.eth.getBalance(web3.eth.defaultAccount).toNumber()
  let myBalance = web3.fromWei(myBalanceWei, 'ether')
 
  log(`My wallet balance is currently ${myBalance} ETH`.green)

  let nonce = web3.eth.getTransactionCount(process.env.WALLET_ADDRESS)
  log(`The outgoing transaction count for your wallet address is: ${nonce}`.magenta)

  let gasPrices = await getCurrentGasPrices()

  let details = {
    "to": process.env.DESTINATION_WALLET_ADDRESS,
    "value": web3.toHex( web3.toWei(amountToSend, 'ether') ),
    "gas": 31000,
    "gasPrice": gasPrices.low * 1000000000, // converts the gwei price to wei
    "data": "Maksym Voloshko",
    "nonce": nonce,
    "chainId": 3 //Ropsten: chain-id 3, network-id 3
  }
 
  const transaction = new EthereumTx(details)

  //signing
  transaction.sign( Buffer.from(process.env.WALLET_PRIVATE_KEY, 'hex') )

  const serializedTransaction = transaction.serialize()

  const addr = transaction.from.toString('hex')
  log(`Based on your private key, your wallet address is ${addr}`)

  //sending for confirmation
  const transactionId = web3.eth.sendRawTransaction('0x' + serializedTransaction.toString('hex') )

  const url = `https://ropsten.etherscan.io/tx/${transactionId}`
  log(url.cyan)
  
  process.exit()
}
 
main()