module.exports = {
    "email": {
        "fullname": "textext",
        "speciality": "texttext",
        "faculty": "text",
        "trims": [
            {
                "subjects": {
                    // Accessing subject by name is much faster, than trying to find subject by name in array
                    "subject_name":
                        {
                            // subject full name - OOP, ASD etc.
                            "teacher": "textext",
                            // subject full rating
                            "mark_numerical": 88,
                            "mark": "B",
                            // same with theme
                            "themes": {
                                "theme_name":
                                    {
                                        "name": "texttext",
                                        "mark": 6,
                                        //unix time
                                        "date": 2315325231
                                    }
                            },


                        }
                }
            }
        ]
    }
};