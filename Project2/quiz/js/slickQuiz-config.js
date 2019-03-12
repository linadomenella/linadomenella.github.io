// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Colors Rule!!!",
        "main":    "<p>Think you are an expert on colors now?</p>",
//        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        // if you get all of them right = level1//
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Red, Blue and Orange are Primary Colors",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true},
            ],
            "correct": "<p><span>That's right! </span> Red, Blue and Yellow are  the primary colors! Orange is a secondary color, but you already knew that.</p>",
            "incorrect": "<p><span>Uhh no.</span> Red, Blue and Yellow are  actually the primary colors. Orange is a secondary color.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What kind of color is blue-green?",
            "a": [
                {"option": "Primary",               "correct": false},
                {"option": "Secondary",   "correct": false},
                {"option": "Tertiary",               "correct": true},
                {"option": "Quaternary", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Blue-green is a Tertiary Color!</p>",
            "incorrect": "<p><span>Hmmm.</span> Blue-green is actually a Tertiary Color</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What colors make green",
            "a": [
                {"option": "Blue and Red",           "correct": false},
                {"option": "Blue and Yellow",                  "correct": true},
                {"option": "Yellow and Orange",  "correct": false},
                {"option": "Yellow and Red",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Blue and Yellow make green!</p>",
            "incorrect": "<p><span>Not Quite.</span> Blue and Yellow actually make green.</p>" // no comma here
        },
        { // Question 4
            "q": "What kind of color is Purple?",
            "a": [
                {"option": "Primary",    "correct": false},
                {"option": "Secondary",     "correct": true},
                {"option": "Tertiary",      "correct": false},
                {"option": "Quaternary",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Purple is a Secondary Color</p>",
            "incorrect": "<p><span>Sorry.</span> Purple is actually a secondary color </p>" // no comma here
        },
        { // Question 5
            "q": "Violet-Red, Yellow-Green, and Red-Orange make up all of the tertiary colors.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> Violet-Red, Yellow-Green, and Red-Orange are only three of the tertiary colors, Yellow-Orange, Blue-Green, and Blue-Violet make up the rest of the tertiary colors</p>" // no comma here
        } // no comma here
    ]
};
