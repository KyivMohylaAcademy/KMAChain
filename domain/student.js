module.exports = {
    "gradebook_number": {
        "name": "Name",
        "surname": "Surname",
        "faculty": "Faculty",
        "speciality": "Specialty",
        "year_of_study": 1,
        "trimesters": [
            {
                "subjects": {
                    "name_of_subject":
                        {
                            "assignments": [{
                                "first_lab": {
                                    "maximum": 25,
                                    "grade": 25,
                                    "comment": "Comment"
                                },
                                "second_lab": {
                                    "maximum": 25,
                                    "grade": 6,
                                    "comment": "Comment"
                                },
                                "exam": {
                                    "maximum": 50,
                                    "grade": 40,
                                    "comment": "Comment"
                                },
                                "summary": {
                                    "grade": 71
                                },
                            }],
                            "teacher": "Teacher",
                            "mark_numerical": 71,
                            "mark": "C",
                        },
                }
            }
        ]
    }
};