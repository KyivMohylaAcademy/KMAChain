const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/workers', (req, res) => {
  res.send(model.workers)
})
app.get('/subjects', (req, res) => {
  res.send(model.subjects)
})
app.get('/faculties', (req, res) => {
  res.send(model.faculties)
})
app.get('/students', (req, res) => {
  res.send(model.students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

model={
      subjects:{
        "Blockchain":{
          id: 1,
          fullName:"Основи блокчейн та криптовалют",
          credits:2,
          workload:4,
          facultyId: 1,
        }  
      },
      faculties: {
        "FI": {
          id: 1,
          fullName: "Факультет Інформатики",
        }
      },
      workers: {
        "First": {
          id: 1, 
          fullName: "Є.І. Невмержицький"
        },
        "Second": {
          id:2,
          fullName: "К.С.  Гороховський"
        }
      },
      students:{
          "Pavlo Vlasenko":{
            name:"Pavlo Vlasenko",
            id: 1,
            facultyId: 1,
            semesters:{
              "autumn":{
                subjects:{
                  "Blockchain":{
                    subjId: 1,
                    lectorId: 1,
                    practiceId:2,
                    marks:[2,2,2,1],
                    bonusMarks:[0,0],
                    attendance:{
                      practice:0,
                      lecture: 0
                    },
                    finalMark:61,
                  }                            
                }                        
              }          
            }                  
          }
      }    
    }

