;(function(angular) {
/*SOME Polyfills*/
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith*/
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}
/*https://babeljs.io/repl, needed for mojs animation in ES5 */
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 
window.addEventListener("load", function() { 
   
    

    angular.bootstrap(document, ['app']);
    
}, false);


document.addEventListener("touchstart", function(ev) { 
    console.log('document touched:'+ ev.target.innerText);
}, false);

var DB = {
    "3": [
        {
            "gameType": "ordinal",
            "sentences": [
                "We wonder why.",
                "Just a minute."
            ],
            "levelNumber": 1
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You work hard.",
                "Make your choice.",
                "Look about you."
            ],
            "levelNumber": 2
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You go first.",
                "Lock the safe.",
                "Please turn over."
            ],
            "levelNumber": 3
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You drink tea.",
                "Speak your mind.",
                "Take it easy."
            ],
            "levelNumber": 4
        },
        {
            "alts": [
                "Please turn over.",
                "Please over turn."
            ],
            "correct": "Please turn over.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You look green.",
                "Wash your face.",
                "Please make sure."
            ],
            "levelNumber": 5
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "External application only.",
                "Anything will do.",
                "Draw a circle."
            ],
            "levelNumber": 6
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "make",
                        "sure"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "arouse",
                        "wish",
                        "effect",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Look",
                        "about",
                        "you"
                    ],
                    "targetWord": "about",
                    "alts": [
                        "convey",
                        "become",
                        "move",
                        "about"
                    ]
                },
                {
                    "words": [
                        "Draw",
                        "a",
                        "circle"
                    ],
                    "targetWord": "circle",
                    "alts": [
                        "remove",
                        "entertainer",
                        "score",
                        "circle"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please try one.",
                "Leave me alone.",
                "Burn with desire."
            ],
            "levelNumber": 7
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take your time.",
                "Speak more slowly.",
                "Raise your voice."
            ],
            "levelNumber": 8
        },
        {
            "sentences": [
                {
                    "words": [
                        "Raise",
                        "your",
                        "voice"
                    ],
                    "targetWord": "voice"
                },
                {
                    "words": [
                        "Burn",
                        "with",
                        "desire"
                    ],
                    "targetWord": "desire"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Look up more.",
                "Come if possible.",
                "That will do.",
                "Have another cup."
            ],
            "levelNumber": 9
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Read the meter.",
                "Look straight ahead.",
                "Please come again.",
                "Until next time."
            ],
            "levelNumber": 10
        },
        {
            "sentences": [
                {
                    "words": [
                        "Have",
                        "another",
                        "cup"
                    ],
                    "targetWord": "another",
                    "alts": [
                        "person",
                        "nucleotide",
                        "interact",
                        "another"
                    ]
                },
                {
                    "words": [
                        "Until",
                        "next",
                        "time"
                    ],
                    "targetWord": "Until",
                    "alts": [
                        "suffer",
                        "undergo",
                        "make",
                        "Until"
                    ]
                },
                {
                    "words": [
                        "Just",
                        "a",
                        "minute"
                    ],
                    "targetWord": "minute",
                    "alts": [
                        "experience",
                        "score",
                        "change",
                        "minute"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "See you around.",
                "Make your bed.",
                "Eat and drink.",
                "Wherever you say."
            ],
            "levelNumber": 11
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please drive carefully.",
                "Be my guest.",
                "Please enter now.",
                "Make yourself comfortable."
            ],
            "levelNumber": 12
        },
        {
            "alts": [
                "Make comfortable yourself.",
                "Make yourself comfortable."
            ],
            "correct": "Make yourself comfortable.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please step back.",
                "Shut the door.",
                "Bit cold though.",
                "They live there."
            ],
            "levelNumber": 13
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Pick it up.",
                "Count me in.",
                "Keep it up.",
                "Please hold on."
            ],
            "levelNumber": 14
        },
        {
            "sentences": [
                {
                    "words": [
                        "Wherever",
                        "you",
                        "say"
                    ],
                    "targetWord": "Wherever",
                    "alts": [
                        "enclosure",
                        "continue",
                        "appendage",
                        "Wherever"
                    ]
                },
                {
                    "words": [
                        "They",
                        "live",
                        "there"
                    ],
                    "targetWord": "there",
                    "alts": [
                        "wish",
                        "prevent",
                        "restrain",
                        "there"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "hold",
                        "on"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "include",
                        "stop",
                        "confinement",
                        "Please"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Open the bottle.",
                "Turn right there.",
                "Yes and no.",
                "Strike the set."
            ],
            "levelNumber": 15
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come at once.",
                "But not really.",
                "Now tell me.",
                "Here we go."
            ],
            "levelNumber": 16
        },
        {
            "sentences": [
                {
                    "words": [
                        "Strike",
                        "the",
                        "set"
                    ],
                    "targetWord": "Strike"
                },
                {
                    "words": [
                        "Take",
                        "it",
                        "easy"
                    ],
                    "targetWord": "easy"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "For your information.",
                "Please fix this.",
                "Overseas service here.",
                "In the kitchen."
            ],
            "levelNumber": 17
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Sit up straight.",
                "Come right in.",
                "You always sing.",
                "Cut the engine."
            ],
            "levelNumber": 18
        },
        {
            "sentences": [
                {
                    "words": [
                        "Cut",
                        "the",
                        "engine"
                    ],
                    "targetWord": "engine",
                    "alts": [
                        "excerpt",
                        "absence",
                        "cope",
                        "engine"
                    ]
                },
                {
                    "words": [
                        "In",
                        "the",
                        "kitchen"
                    ],
                    "targetWord": "kitchen",
                    "alts": [
                        "extinguish",
                        "meat",
                        "move",
                        "kitchen"
                    ]
                },
                {
                    "words": [
                        "Here",
                        "we",
                        "go"
                    ],
                    "targetWord": "Here",
                    "alts": [
                        "stop",
                        "transit",
                        "shorten",
                        "Here"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let me see.",
                "Cut it out.",
                "Not at all.",
                "Follow the car."
            ],
            "levelNumber": 19
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You look busy.",
                "Check your order.",
                "Do it yourself.",
                "Move along now."
            ],
            "levelNumber": 20
        },
        {
            "alts": [
                "Move now along.",
                "Move along now."
            ],
            "correct": "Move along now.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You be quiet.",
                "Face the music.",
                "Blood will tell.",
                "Speak plain truth."
            ],
            "levelNumber": 21
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You look down.",
                "Rise and shine.",
                "Fall from reality.",
                "Save your breath."
            ],
            "levelNumber": 22
        },
        {
            "sentences": [
                {
                    "words": [
                        "Speak",
                        "plain",
                        "truth"
                    ],
                    "targetWord": "truth",
                    "alts": [
                        "prevention",
                        "originate",
                        "play",
                        "truth"
                    ]
                },
                {
                    "words": [
                        "Save",
                        "your",
                        "breath"
                    ],
                    "targetWord": "breath",
                    "alts": [
                        "prevent",
                        "obey",
                        "result",
                        "breath"
                    ]
                },
                {
                    "words": [
                        "Follow",
                        "the",
                        "car"
                    ],
                    "targetWord": "Follow",
                    "alts": [
                        "understand",
                        "land",
                        "imitate",
                        "Follow"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Watch your language.",
                "Think about it.",
                "Catch a signal.",
                "Start this moment."
            ],
            "levelNumber": 23
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Turn hard left.",
                "Let me finish.",
                "Stick it out.",
                "Never say die."
            ],
            "levelNumber": 24
        },
        {
            "sentences": [
                {
                    "words": [
                        "Start",
                        "this",
                        "moment"
                    ],
                    "targetWord": "moment"
                },
                {
                    "words": [
                        "Never",
                        "say",
                        "die"
                    ],
                    "targetWord": "Never"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Do or die.",
                "We like music.",
                "Read after me.",
                "We know him."
            ],
            "levelNumber": 25
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We seek happiness.",
                "Give me time.",
                "Solve the problem."
            ],
            "levelNumber": 26
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Sweep my room.",
                "Please take one.",
                "Answer the question."
            ],
            "levelNumber": 27
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Ask your question.",
                "Pull it open.",
                "Please get in."
            ],
            "levelNumber": 28
        },
        {
            "alts": [
                "Answer the question.",
                "Answer question the."
            ],
            "correct": "Answer the question.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go on board.",
                "Just leave it.",
                "Let dinner wait."
            ],
            "levelNumber": 29
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Time for bed.",
                "Act your place.",
                "Go straight ahead."
            ],
            "levelNumber": 30
        },
        {
            "sentences": [
                {
                    "words": [
                        "Go",
                        "straight",
                        "ahead"
                    ],
                    "targetWord": "straight",
                    "alts": [
                        "shift",
                        "section",
                        "calculate",
                        "straight"
                    ]
                },
                {
                    "words": [
                        "Solve",
                        "the",
                        "problem"
                    ],
                    "targetWord": "problem",
                    "alts": [
                        "compare",
                        "understand",
                        "meal",
                        "problem"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "dinner",
                        "wait"
                    ],
                    "targetWord": "dinner",
                    "alts": [
                        "person",
                        "harmonize",
                        "party",
                        "dinner"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "All shall die.",
                "People love freedom.",
                "Break a leg."
            ],
            "levelNumber": 31
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Do be quiet.",
                "Please explain it.",
                "Come here soon."
            ],
            "levelNumber": 32
        },
        {
            "sentences": [
                {
                    "words": [
                        "Come",
                        "here",
                        "soon"
                    ],
                    "targetWord": "soon"
                },
                {
                    "words": [
                        "Please",
                        "get",
                        "in"
                    ],
                    "targetWord": "Please"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come home early.",
                "Get ready quickly."
            ],
            "levelNumber": 33
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Same as usual.",
                "Open the window."
            ],
            "levelNumber": 34
        },
        {
            "sentences": [
                {
                    "words": [
                        "Get",
                        "ready",
                        "quickly"
                    ],
                    "targetWord": "quickly",
                    "alts": [
                        "arise",
                        "become",
                        "move",
                        "quickly"
                    ]
                },
                {
                    "words": [
                        "Open",
                        "the",
                        "window"
                    ],
                    "targetWord": "window",
                    "alts": [
                        "return",
                        "sicken",
                        "decay",
                        "window"
                    ]
                },
                {
                    "words": [
                        "Break",
                        "a",
                        "leg"
                    ],
                    "targetWord": "Break",
                    "alts": [
                        "destroy",
                        "start",
                        "stroke",
                        "Break"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Close the window.",
                "No other way."
            ],
            "levelNumber": 35
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Save your strength.",
                "Room for rent."
            ],
            "levelNumber": 36
        },
        {
            "alts": [
                "Room rent for.",
                "Room for rent."
            ],
            "correct": "Room for rent.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Run for president.",
                "Anybody will do."
            ],
            "levelNumber": 37
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Wear warm clothes.",
                "Let me in.",
                "Please listen carefully."
            ],
            "levelNumber": 38
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "listen",
                        "carefully"
                    ],
                    "targetWord": "carefully",
                    "alts": [
                        "ordain",
                        "wish",
                        "negative",
                        "carefully"
                    ]
                },
                {
                    "words": [
                        "Anybody",
                        "will",
                        "do"
                    ],
                    "targetWord": "Anybody",
                    "alts": [
                        "purpose",
                        "decide",
                        "obey",
                        "Anybody"
                    ]
                },
                {
                    "words": [
                        "No",
                        "other",
                        "way"
                    ],
                    "targetWord": "other",
                    "alts": [
                        "perceive",
                        "give",
                        "concentrate",
                        "other"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please be gentle.",
                "Cross the street.",
                "Leave him alone."
            ],
            "levelNumber": 39
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give it up.",
                "Answer the phone.",
                "Have him come."
            ],
            "levelNumber": 40
        },
        {
            "sentences": [
                {
                    "words": [
                        "Leave",
                        "him",
                        "alone"
                    ],
                    "targetWord": "alone"
                },
                {
                    "words": [
                        "Have",
                        "him",
                        "come"
                    ],
                    "targetWord": "come"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "He left immediately.",
                "Laugh with them.",
                "They study industry."
            ],
            "levelNumber": 41
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They live nearby.",
                "Follow his example.",
                "Show him in."
            ],
            "levelNumber": 42
        },
        {
            "sentences": [
                {
                    "words": [
                        "They",
                        "study",
                        "industry"
                    ],
                    "targetWord": "industry",
                    "alts": [
                        "indicate",
                        "contemplation",
                        "demonstration",
                        "industry"
                    ]
                },
                {
                    "words": [
                        "Show",
                        "him",
                        "in"
                    ],
                    "targetWord": "Show",
                    "alts": [
                        "examination",
                        "convey",
                        "inform",
                        "Show"
                    ]
                },
                {
                    "words": [
                        "We",
                        "know",
                        "him"
                    ],
                    "targetWord": "know",
                    "alts": [
                        "room",
                        "think",
                        "concentration",
                        "know"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Bring him in.",
                "You look sick.",
                "Keep the secret."
            ],
            "levelNumber": 43
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Some fish fly.",
                "Change your clothes.",
                "Business as usual."
            ],
            "levelNumber": 44
        },
        {
            "alts": [
                "Business as usual.",
                "Business usual as."
            ],
            "correct": "Business as usual.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Remove your hat.",
                "Make it real.",
                "Have everything ready."
            ],
            "levelNumber": 45
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Fill it up.",
                "Get the dream.",
                "Business before pleasure."
            ],
            "levelNumber": 46
        },
        {
            "sentences": [
                {
                    "words": [
                        "Business",
                        "before",
                        "pleasure"
                    ],
                    "targetWord": "pleasure",
                    "alts": [
                        "commerce",
                        "prolong",
                        "activity",
                        "pleasure"
                    ]
                },
                {
                    "words": [
                        "Have",
                        "everything",
                        "ready"
                    ],
                    "targetWord": "everything",
                    "alts": [
                        "inhibit",
                        "cook",
                        "score",
                        "everything"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "the",
                        "secret"
                    ],
                    "targetWord": "secret",
                    "alts": [
                        "lodge",
                        "person",
                        "interact",
                        "secret"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Time for dinner.",
                "Until next week.",
                "Play it cool."
            ],
            "levelNumber": 47
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Good for you.",
                "Please step aside.",
                "Come on in."
            ],
            "levelNumber": 48
        },
        {
            "sentences": [
                {
                    "words": [
                        "Play",
                        "it",
                        "cool"
                    ],
                    "targetWord": "cool"
                },
                {
                    "words": [
                        "Come",
                        "on",
                        "in"
                    ],
                    "targetWord": "Come"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Keep the change.",
                "We shall see.",
                "Clean the room."
            ],
            "levelNumber": 49
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You seem distant.",
                "What a bore.",
                "Please eat something."
            ],
            "levelNumber": 50
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please speak slowly.",
                "Close the door.",
                "You must leave."
            ],
            "levelNumber": 51
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Open your heart.",
                "Please sit down.",
                "You need this."
            ],
            "levelNumber": 52
        },
        {
            "alts": [
                "Please eat something.",
                "Please something eat."
            ],
            "correct": "Please eat something.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let well alone.",
                "We need fire.",
                "What horrible weather."
            ],
            "levelNumber": 53
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just do it.",
                "Come with us.",
                "Continue straight ahead."
            ],
            "levelNumber": 54
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give a way.",
                "Please come in."
            ],
            "levelNumber": 55
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Do it now.",
                "Clean your room."
            ],
            "levelNumber": 56
        },
        {
            "sentences": [
                {
                    "words": [
                        "Clean",
                        "your",
                        "room"
                    ],
                    "targetWord": "Clean"
                },
                {
                    "words": [
                        "Please",
                        "come",
                        "in"
                    ],
                    "targetWord": "Please"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You must go.",
                "Choose one person."
            ],
            "levelNumber": 57
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Follow my advice.",
                "Please be quiet."
            ],
            "levelNumber": 58
        },
        {
            "sentences": [
                {
                    "words": [
                        "Choose",
                        "one",
                        "person"
                    ],
                    "targetWord": "person",
                    "alts": [
                        "digit",
                        "evaluate",
                        "take",
                        "person"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "be",
                        "quiet"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "wish",
                        "groom",
                        "satisfy",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Clean",
                        "the",
                        "room"
                    ],
                    "targetWord": "Clean",
                    "alts": [
                        "weightlift",
                        "tidy",
                        "change",
                        "Clean"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Clean the mirror.",
                "Sit near here.",
                "Most people agree."
            ],
            "levelNumber": 59
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please bill me.",
                "Raise your hand.",
                "See you soon."
            ],
            "levelNumber": 60
        },
        {
            "alts": [
                "Most agree people.",
                "Most people agree."
            ],
            "correct": "Most people agree.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Mind your head.",
                "Take me home.",
                "Tea without ice."
            ],
            "levelNumber": 61
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They become nervous.",
                "Let him in.",
                "Drink some tea."
            ],
            "levelNumber": 62
        },
        {
            "sentences": [
                {
                    "words": [
                        "Tea",
                        "without",
                        "ice"
                    ],
                    "targetWord": "without",
                    "alts": [
                        "consumption",
                        "herb",
                        "steep",
                        "without"
                    ]
                },
                {
                    "words": [
                        "Drink",
                        "some",
                        "tea"
                    ],
                    "targetWord": "Drink",
                    "alts": [
                        "consume",
                        "reception",
                        "meal",
                        "Drink"
                    ]
                },
                {
                    "words": [
                        "You",
                        "need",
                        "this"
                    ],
                    "targetWord": "this",
                    "alts": [
                        "condition",
                        "helping",
                        "shrub",
                        "this"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We drink everything.",
                "Please sign here.",
                "Take me away."
            ],
            "levelNumber": 63
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Message me online.",
                "Break the silence.",
                "He should come."
            ],
            "levelNumber": 64
        },
        {
            "sentences": [
                {
                    "words": [
                        "He",
                        "should",
                        "come"
                    ],
                    "targetWord": "should"
                },
                {
                    "words": [
                        "Take",
                        "me",
                        "away"
                    ],
                    "targetWord": "away"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We need money.",
                "Never say never.",
                "Bring the key.",
                "Never lose hope."
            ],
            "levelNumber": 65
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "If you want.",
                "Close your book.",
                "Let him enter.",
                "Forget about her."
            ],
            "levelNumber": 66
        },
        {
            "sentences": [
                {
                    "words": [
                        "Forget",
                        "about",
                        "her"
                    ],
                    "targetWord": "Forget",
                    "alts": [
                        "understand",
                        "detect",
                        "tour",
                        "Forget"
                    ]
                },
                {
                    "words": [
                        "Never",
                        "lose",
                        "hope"
                    ],
                    "targetWord": "Never",
                    "alts": [
                        "receive",
                        "lose",
                        "care",
                        "Never"
                    ]
                },
                {
                    "words": [
                        "See",
                        "you",
                        "soon"
                    ],
                    "targetWord": "soon",
                    "alts": [
                        "seat",
                        "experience",
                        "think",
                        "soon"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Time will tell.",
                "We eat here.",
                "Quality over quantity.",
                "They get nervous."
            ],
            "levelNumber": 67
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Fix the watch.",
                "She just left.",
                "Stay at home.",
                "Nobody will know."
            ],
            "levelNumber": 68
        },
        {
            "alts": [
                "Nobody will know.",
                "Nobody know will."
            ],
            "correct": "Nobody will know.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Have a drink.",
                "Just like here.",
                "Go right ahead.",
                "Please calm down."
            ],
            "levelNumber": 69
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Pause the game.",
                "You look awful.",
                "Do not eat.",
                "Leave the room."
            ],
            "levelNumber": 70
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "calm",
                        "down"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "effect",
                        "affect",
                        "stabilize",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "They",
                        "get",
                        "nervous"
                    ],
                    "targetWord": "nervous",
                    "alts": [
                        "wish",
                        "mean",
                        "move",
                        "nervous"
                    ]
                },
                {
                    "words": [
                        "Leave",
                        "the",
                        "room"
                    ],
                    "targetWord": "Leave",
                    "alts": [
                        "understand",
                        "lose",
                        "score",
                        "Leave"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Stay with us.",
                "Let me be.",
                "They always complain.",
                "Walk every day.",
                "Please pay attention."
            ],
            "levelNumber": 71
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "It will burn.",
                "Rest in peace.",
                "You will fail.",
                "Wait a minute.",
                "So be it."
            ],
            "levelNumber": 72
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "pay",
                        "attention"
                    ],
                    "targetWord": "attention"
                },
                {
                    "words": [
                        "So",
                        "be",
                        "it"
                    ],
                    "targetWord": "it"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Health over wealth.",
                "Enjoy your flight.",
                "Everyone must die.",
                "Follow your desire.",
                "They left early."
            ],
            "levelNumber": 73
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let it be.",
                "Please call again.",
                "Take him away.",
                "Do not disturb.",
                "Think about death."
            ],
            "levelNumber": 74
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just say no.",
                "Tie your shoe.",
                "Exercise every day.",
                "Sorry about that.",
                "Follow behind me."
            ],
            "levelNumber": 75
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please telephone him.",
                "Drink and eat.",
                "They love coffee.",
                "Wait and see.",
                "Drink the medicine."
            ],
            "levelNumber": 76
        },
        {
            "alts": [
                "Drink the medicine.",
                "Drink medicine the."
            ],
            "correct": "Drink the medicine.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Make a wish.",
                "You look beautiful.",
                "Come back home.",
                "Please repair this.",
                "Let me die."
            ],
            "levelNumber": 77
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Many will die.",
                "Please sit here.",
                "You seem busy.",
                "Take the medicine.",
                "Man must work."
            ],
            "levelNumber": 78
        },
        {
            "sentences": [
                {
                    "words": [
                        "Think",
                        "about",
                        "death"
                    ],
                    "targetWord": "death",
                    "alts": [
                        "originate",
                        "deliberation",
                        "play",
                        "death"
                    ]
                },
                {
                    "words": [
                        "Follow",
                        "behind",
                        "me"
                    ],
                    "targetWord": "behind",
                    "alts": [
                        "result",
                        "obey",
                        "imitate",
                        "behind"
                    ]
                },
                {
                    "words": [
                        "They",
                        "left",
                        "early"
                    ],
                    "targetWord": "early",
                    "alts": [
                        "understand",
                        "lose",
                        "move",
                        "early"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Leave that there.",
                "Come over here.",
                "Check this out.",
                "Go on ahead.",
                "Write a report."
            ],
            "levelNumber": 79
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Cook for me.",
                "Believe in yourself.",
                "Look around you.",
                "Get a life.",
                "We wish friendship."
            ],
            "levelNumber": 80
        },
        {
            "sentences": [
                {
                    "words": [
                        "We",
                        "wish",
                        "friendship"
                    ],
                    "targetWord": "friendship"
                },
                {
                    "words": [
                        "Write",
                        "a",
                        "report"
                    ],
                    "targetWord": "report"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You see me.",
                "Breathe in deeply.",
                "Home sweet home.",
                "You observe me.",
                "Weak people lose."
            ],
            "levelNumber": 81
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We hate violence.",
                "Bring my hat.",
                "They give nothing.",
                "Get enough sleep.",
                "Please wake up."
            ],
            "levelNumber": 82
        },
        {
            "sentences": [
                {
                    "words": [
                        "Weak",
                        "people",
                        "lose"
                    ],
                    "targetWord": "people",
                    "alts": [
                        "arouse",
                        "wish",
                        "hominid",
                        "people"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "wake",
                        "up"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "necessity",
                        "lover",
                        "staleness",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Man",
                        "must",
                        "work"
                    ],
                    "targetWord": "work",
                    "alts": [
                        "adult",
                        "person",
                        "satisfy",
                        "work"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Bring that here.",
                "By the way.",
                "Tell me everything.",
                "Turn it up.",
                "Tell us more."
            ],
            "levelNumber": 83
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please remain calm.",
                "You scare me.",
                "Read and reply.",
                "You should exercise.",
                "Let me pay."
            ],
            "levelNumber": 84
        },
        {
            "alts": [
                "Tell more us.",
                "Tell us more."
            ],
            "correct": "Tell us more.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You eat food.",
                "People walk naturally.",
                "Everybody must know.",
                "Father and brother.",
                "Just forget it."
            ],
            "levelNumber": 85
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Tell us something.",
                "Try the cake.",
                "Mind over matter.",
                "You look content.",
                "Find the cat."
            ],
            "levelNumber": 86
        },
        {
            "sentences": [
                {
                    "words": [
                        "Just",
                        "forget",
                        "it"
                    ],
                    "targetWord": "forget",
                    "alts": [
                        "pronounce",
                        "neglect",
                        "induce",
                        "forget"
                    ]
                },
                {
                    "words": [
                        "Find",
                        "the",
                        "cat"
                    ],
                    "targetWord": "Find",
                    "alts": [
                        "perceive",
                        "experience",
                        "insight",
                        "Find"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "pay"
                    ],
                    "targetWord": "pay",
                    "alts": [
                        "make",
                        "reason",
                        "leave",
                        "pay"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Do not fold.",
                "A little more.",
                "Wake me up.",
                "Leave this here.",
                "Feed the bird."
            ],
            "levelNumber": 87
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You never know.",
                "Call the manager.",
                "Come help me.",
                "Please try again.",
                "Go home now."
            ],
            "levelNumber": 88
        },
        {
            "sentences": [
                {
                    "words": [
                        "Feed",
                        "the",
                        "bird"
                    ],
                    "targetWord": "bird"
                },
                {
                    "words": [
                        "Go",
                        "home",
                        "now"
                    ],
                    "targetWord": "home"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We must party.",
                "Lead the way.",
                "You hurt me.",
                "Open your mind."
            ],
            "levelNumber": 89
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We love beauty.",
                "Fire at will.",
                "Go exercise outside.",
                "You should resign."
            ],
            "levelNumber": 90
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "should",
                        "resign"
                    ],
                    "targetWord": "resign",
                    "alts": [
                        "expose",
                        "outside",
                        "start",
                        "resign"
                    ]
                },
                {
                    "words": [
                        "Open",
                        "your",
                        "mind"
                    ],
                    "targetWord": "mind",
                    "alts": [
                        "area",
                        "arise",
                        "induce",
                        "mind"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "die"
                    ],
                    "targetWord": "die",
                    "alts": [
                        "make",
                        "leave",
                        "move",
                        "die"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We should leave.",
                "A good question.",
                "Please shut up.",
                "He would laugh."
            ],
            "levelNumber": 91
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "People stay outside.",
                "Eat your food.",
                "Let me explain.",
                "You need it."
            ],
            "levelNumber": 92
        },
        {
            "alts": [
                "He laugh would.",
                "He would laugh."
            ],
            "correct": "He would laugh.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We must go.",
                "Take the bus.",
                "Please study here.",
                "Wait your turn."
            ],
            "levelNumber": 93
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Write your name.",
                "Show us around.",
                "Put it there.",
                "Help me out."
            ],
            "levelNumber": 94
        },
        {
            "sentences": [
                {
                    "words": [
                        "Wait",
                        "your",
                        "turn"
                    ],
                    "targetWord": "turn",
                    "alts": [
                        "refrain",
                        "work",
                        "support",
                        "turn"
                    ]
                },
                {
                    "words": [
                        "Help",
                        "me",
                        "out"
                    ],
                    "targetWord": "Help",
                    "alts": [
                        "worker",
                        "condition",
                        "activity",
                        "Help"
                    ]
                },
                {
                    "words": [
                        "You",
                        "need",
                        "it"
                    ],
                    "targetWord": "need",
                    "alts": [
                        "pause",
                        "promote",
                        "helpfulness",
                        "need"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Have a seat.",
                "Hand it over.",
                "Get some rest.",
                "Let me try."
            ],
            "levelNumber": 95
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Here and there.",
                "Never look back.",
                "What ugly hair."
            ],
            "levelNumber": 96
        },
        {
            "sentences": [
                {
                    "words": [
                        "What",
                        "ugly",
                        "hair"
                    ],
                    "targetWord": "hair"
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "try"
                    ],
                    "targetWord": "try"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please move back.",
                "He will wait.",
                "See for yourself."
            ],
            "levelNumber": 97
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Catch the ball.",
                "Come here boy.",
                "Watch the rear."
            ],
            "levelNumber": 98
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Watch the front.",
                "Show me everything.",
                "Just ignore him."
            ],
            "levelNumber": 99
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just ignore her.",
                "They smell bad.",
                "Not so well."
            ],
            "levelNumber": 100
        }
    ],
    "4": [
        {
            "gameType": "ordinal",
            "sentences": [
                "You make me dream.",
                "Write your address here."
            ],
            "levelNumber": 101
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just follow your heart.",
                "Do as you like."
            ],
            "levelNumber": 102
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You deserve the prize.",
                "Ready money will away."
            ],
            "levelNumber": 103
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take a short cut.",
                "Sit near at hand."
            ],
            "levelNumber": 104
        },
        {
            "sentences": [
                {
                    "words": [
                        "Write",
                        "your",
                        "address",
                        "here"
                    ],
                    "targetWord": "address"
                },
                {
                    "words": [
                        "Ready",
                        "money",
                        "will",
                        "away"
                    ],
                    "targetWord": "money"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Turn on your back.",
                "Try and calm down."
            ],
            "levelNumber": 105
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "As you already know.",
                "Wipe your face clean."
            ],
            "levelNumber": 106
        },
        {
            "sentences": [
                {
                    "words": [
                        "Wipe",
                        "your",
                        "face",
                        "clean"
                    ],
                    "targetWord": "clean",
                    "alts": [
                        "consume",
                        "affect",
                        "stabilize",
                        "clean"
                    ]
                },
                {
                    "words": [
                        "Try",
                        "and",
                        "calm",
                        "down"
                    ],
                    "targetWord": "down",
                    "alts": [
                        "activity",
                        "disclose",
                        "convene",
                        "down"
                    ]
                },
                {
                    "words": [
                        "Sit",
                        "near",
                        "at",
                        "hand"
                    ],
                    "targetWord": "hand",
                    "alts": [
                        "pain",
                        "travel",
                        "contact",
                        "hand"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Survey the landscape below.",
                "You will hurt yourself."
            ],
            "levelNumber": 107
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We stand for democracy.",
                "Stay here with us."
            ],
            "levelNumber": 108
        },
        {
            "alts": [
                "You hurt will yourself.",
                "You yourself hurt will.",
                "You yourself will hurt.",
                "You will hurt yourself.",
                "You will yourself hurt.",
                "You hurt yourself will."
            ],
            "correct": "You will hurt yourself.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Keep the fire alive.",
                "Let us go home."
            ],
            "levelNumber": 109
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Eat whatever you like.",
                "Keep away from me."
            ],
            "levelNumber": 110
        },
        {
            "sentences": [
                {
                    "words": [
                        "Keep",
                        "away",
                        "from",
                        "me"
                    ],
                    "targetWord": "from",
                    "alts": [
                        "inhibit",
                        "prolong",
                        "shift",
                        "from"
                    ]
                },
                {
                    "words": [
                        "Stay",
                        "here",
                        "with",
                        "us"
                    ],
                    "targetWord": "with",
                    "alts": [
                        "compare",
                        "cook",
                        "stop",
                        "with"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "us",
                        "go",
                        "home"
                    ],
                    "targetWord": "home",
                    "alts": [
                        "lodge",
                        "nucleotide",
                        "strip",
                        "home"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Push the door open.",
                "We season with salt."
            ],
            "levelNumber": 111
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go ahead and talk.",
                "Sail along the coast."
            ],
            "levelNumber": 112
        },
        {
            "sentences": [
                {
                    "words": [
                        "Sail",
                        "along",
                        "the",
                        "coast"
                    ],
                    "targetWord": "coast"
                },
                {
                    "words": [
                        "We",
                        "season",
                        "with",
                        "salt"
                    ],
                    "targetWord": "season"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should do exercise.",
                "Raise your right hand."
            ],
            "levelNumber": 113
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take the right road.",
                "Let me go alone."
            ],
            "levelNumber": 114
        },
        {
            "sentences": [
                {
                    "words": [
                        "Raise",
                        "your",
                        "right",
                        "hand"
                    ],
                    "targetWord": "right",
                    "alts": [
                        "multiply",
                        "abstraction",
                        "shift",
                        "right"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "go",
                        "alone"
                    ],
                    "targetWord": "alone",
                    "alts": [
                        "cultivate",
                        "delegate",
                        "propulsion",
                        "alone"
                    ]
                },
                {
                    "words": [
                        "Do",
                        "as",
                        "you",
                        "like"
                    ],
                    "targetWord": "like",
                    "alts": [
                        "compare",
                        "intensify",
                        "move",
                        "like"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take me with you.",
                "Please sing a song."
            ],
            "levelNumber": 115
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come home before dark.",
                "Have a safe trip."
            ],
            "levelNumber": 116
        },
        {
            "alts": [
                "Please song sing a.",
                "Please sing song a.",
                "Please song a sing.",
                "Please a song sing.",
                "Please sing a song.",
                "Please a sing song."
            ],
            "correct": "Please sing a song.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Stay quiet and rest.",
                "Deliver us from evil."
            ],
            "levelNumber": 117
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "That would be lovely.",
                "Shut off the radio."
            ],
            "levelNumber": 118
        },
        {
            "sentences": [
                {
                    "words": [
                        "Deliver",
                        "us",
                        "from",
                        "evil"
                    ],
                    "targetWord": "Deliver",
                    "alts": [
                        "strongbox",
                        "prevent",
                        "cupboard",
                        "Deliver"
                    ]
                },
                {
                    "words": [
                        "Shut",
                        "off",
                        "the",
                        "radio"
                    ],
                    "targetWord": "radio",
                    "alts": [
                        "score",
                        "interact",
                        "kill",
                        "radio"
                    ]
                },
                {
                    "words": [
                        "Have",
                        "a",
                        "safe",
                        "trip"
                    ],
                    "targetWord": "trip",
                    "alts": [
                        "person",
                        "nucleotide",
                        "expel",
                        "trip"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Turn on the radio.",
                "Thank you in advance."
            ],
            "levelNumber": 119
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We want further information.",
                "Mind your own business.",
                "Speak slowly and clearly."
            ],
            "levelNumber": 120
        },
        {
            "sentences": [
                {
                    "words": [
                        "Speak",
                        "slowly",
                        "and",
                        "clearly"
                    ],
                    "targetWord": "clearly"
                },
                {
                    "words": [
                        "Thank",
                        "you",
                        "in",
                        "advance"
                    ],
                    "targetWord": "advance"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let well enough alone.",
                "Just take it easy.",
                "Move forward one step."
            ],
            "levelNumber": 121
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We have no time.",
                "Please take another one.",
                "Read it once more."
            ],
            "levelNumber": 122
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Try it once again.",
                "Day will break soon.",
                "Sit at the table."
            ],
            "levelNumber": 123
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Drink up your milk.",
                "Spring will soon come.",
                "There you go again."
            ],
            "levelNumber": 124
        },
        {
            "alts": [
                "Move forward one step.",
                "Move one step forward.",
                "Move step forward one.",
                "Move forward step one.",
                "Move one forward step.",
                "Move step one forward."
            ],
            "correct": "Move forward one step.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Drop me a line.",
                "Come and join us.",
                "Please just focus it."
            ],
            "levelNumber": 125
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Perhaps he will come.",
                "Please open your bag.",
                "Any book will do."
            ],
            "levelNumber": 126
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "just",
                        "focus",
                        "it"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "indicate",
                        "shift",
                        "adjust",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "There",
                        "you",
                        "go",
                        "again"
                    ],
                    "targetWord": "again",
                    "alts": [
                        "compare",
                        "wish",
                        "sharpen",
                        "again"
                    ]
                },
                {
                    "words": [
                        "Read",
                        "it",
                        "once",
                        "more"
                    ],
                    "targetWord": "more",
                    "alts": [
                        "understand",
                        "publication",
                        "align",
                        "more"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Any paper will do.",
                "Nothing would persuade him.",
                "Please keep it secret.",
                "Knock on the door."
            ],
            "levelNumber": 127
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The door burst open.",
                "Then let us begin.",
                "Clear off the table.",
                "That would be difficult."
            ],
            "levelNumber": 128
        },
        {
            "sentences": [
                {
                    "words": [
                        "That",
                        "would",
                        "be",
                        "difficult"
                    ],
                    "targetWord": "difficult"
                },
                {
                    "words": [
                        "Knock",
                        "on",
                        "the",
                        "door"
                    ],
                    "targetWord": "Knock"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Excuse me a minute.",
                "Just turn this handle.",
                "Appear before us now.",
                "Most people think so."
            ],
            "levelNumber": 129
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Sleep off the problem.",
                "Send it by mail.",
                "Let the matter drop.",
                "Please read that book."
            ],
            "levelNumber": 130
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "read",
                        "that",
                        "book"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "indicate",
                        "section",
                        "deliberation",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Most",
                        "people",
                        "think",
                        "so"
                    ],
                    "targetWord": "people",
                    "alts": [
                        "understand",
                        "wish",
                        "publication",
                        "people"
                    ]
                },
                {
                    "words": [
                        "Any",
                        "book",
                        "will",
                        "do"
                    ],
                    "targetWord": "will",
                    "alts": [
                        "ordain",
                        "register",
                        "satisfy",
                        "will"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give me the book.",
                "That day shall come.",
                "The news upset me.",
                "Keep it in mind."
            ],
            "levelNumber": 131
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go over it again.",
                "Sign your name there.",
                "Few people think so.",
                "Please answer the phone."
            ],
            "levelNumber": 132
        },
        {
            "alts": [
                "Please phone the answer.",
                "Please answer phone the.",
                "Please answer the phone.",
                "Please the phone answer.",
                "Please the answer phone.",
                "Please phone answer the."
            ],
            "correct": "Please answer the phone.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "All people breathe air.",
                "Please write back soon.",
                "Come home at once.",
                "Please iron the shirt."
            ],
            "levelNumber": 133
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "But very very difficult.",
                "We appreciate your help.",
                "Do not come here.",
                "Put on your coat."
            ],
            "levelNumber": 134
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "iron",
                        "the",
                        "shirt"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "press",
                        "implement",
                        "expose",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Put",
                        "on",
                        "your",
                        "coat"
                    ],
                    "targetWord": "coat",
                    "alts": [
                        "wish",
                        "organize",
                        "spend",
                        "coat"
                    ]
                },
                {
                    "words": [
                        "Sit",
                        "at",
                        "the",
                        "table"
                    ],
                    "targetWord": "table",
                    "alts": [
                        "move",
                        "convene",
                        "estimate",
                        "table"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take off your coat.",
                "You make me happy.",
                "Shut the door tight.",
                "See you at lunch."
            ],
            "levelNumber": 135
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please let us know.",
                "Take care of yourself.",
                "Let me help you.",
                "Please leave some money.",
                "Glad you like it."
            ],
            "levelNumber": 136
        },
        {
            "sentences": [
                {
                    "words": [
                        "Glad",
                        "you",
                        "like",
                        "it"
                    ],
                    "targetWord": "like"
                },
                {
                    "words": [
                        "See",
                        "you",
                        "at",
                        "lunch"
                    ],
                    "targetWord": "lunch"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please take your seat.",
                "Wait until further notice.",
                "Please wish me luck.",
                "We take a newspaper.",
                "Business will recover soon."
            ],
            "levelNumber": 137
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The police keep order.",
                "Never judge by appearance.",
                "She will fail eventually.",
                "Keep the dog out.",
                "Let me check it."
            ],
            "levelNumber": 138
        },
        {
            "sentences": [
                {
                    "words": [
                        "Business",
                        "will",
                        "recover",
                        "soon"
                    ],
                    "targetWord": "Business",
                    "alts": [
                        "commerce",
                        "prolong",
                        "activity",
                        "Business"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "check",
                        "it"
                    ],
                    "targetWord": "check",
                    "alts": [
                        "inhibit",
                        "restrain",
                        "draw",
                        "check"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "it",
                        "in",
                        "mind"
                    ],
                    "targetWord": "mind",
                    "alts": [
                        "cook",
                        "stop",
                        "move",
                        "mind"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Clear up the cause.",
                "You should face reality.",
                "Settle the argument soon.",
                "Live and let live.",
                "Please leave nothing behind."
            ],
            "levelNumber": 139
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Open your mouth wide.",
                "Do what you like.",
                "Cut and come again.",
                "Read whatever you like.",
                "Set off right now."
            ],
            "levelNumber": 140
        },
        {
            "alts": [
                "Please leave nothing behind.",
                "Please behind nothing leave.",
                "Please nothing behind leave.",
                "Please leave behind nothing.",
                "Please nothing leave behind.",
                "Please behind leave nothing."
            ],
            "correct": "Please leave nothing behind.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Call me this evening.",
                "Raise your left hand.",
                "We have no sugar.",
                "Please save my place.",
                "We go there often."
            ],
            "levelNumber": 141
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Eat and drink up.",
                "Do your work quickly.",
                "We found trouble everywhere.",
                "Sit down with me.",
                "Please take my advice."
            ],
            "levelNumber": 142
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "take",
                        "my",
                        "advice"
                    ],
                    "targetWord": "advice",
                    "alts": [
                        "originate",
                        "shift",
                        "abstraction",
                        "advice"
                    ]
                },
                {
                    "words": [
                        "We",
                        "go",
                        "there",
                        "often"
                    ],
                    "targetWord": "often",
                    "alts": [
                        "bury",
                        "adjust",
                        "filming",
                        "often"
                    ]
                },
                {
                    "words": [
                        "Set",
                        "off",
                        "right",
                        "now"
                    ],
                    "targetWord": "right",
                    "alts": [
                        "compare",
                        "wish",
                        "become",
                        "right"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please see my people.",
                "Come along after me.",
                "Please answer my question.",
                "Let me step inside.",
                "We depend on you."
            ],
            "levelNumber": 143
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We need the money.",
                "Next time phone ahead.",
                "Do your own work.",
                "Try it out yourself.",
                "Go about your business."
            ],
            "levelNumber": 144
        },
        {
            "sentences": [
                {
                    "words": [
                        "Go",
                        "about",
                        "your",
                        "business"
                    ],
                    "targetWord": "business"
                },
                {
                    "words": [
                        "We",
                        "depend",
                        "on",
                        "you"
                    ],
                    "targetWord": "depend"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Show your own business.",
                "Have confidence in yourself.",
                "Keep off the grass.",
                "Young people love adventure.",
                "Lend me a hand."
            ],
            "levelNumber": 145
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Keep your hand still.",
                "Let me do this.",
                "Spring will be late.",
                "Please send for help.",
                "Have it your way."
            ],
            "levelNumber": 146
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Draw a small circle.",
                "Give me some milk.",
                "Laugh and be fat.",
                "Give me some credit.",
                "Clothes make the man."
            ],
            "levelNumber": 147
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "People learn from experience.",
                "A man must work.",
                "Behave yourself in company.",
                "We have water enough.",
                "Mark the right answer."
            ],
            "levelNumber": 148
        },
        {
            "alts": [
                "Mark the right answer.",
                "Mark answer the right.",
                "Mark answer right the.",
                "Mark the answer right.",
                "Mark right the answer.",
                "Mark right answer the."
            ],
            "correct": "Mark the right answer.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "He must not live.",
                "Please pay the tax.",
                "Look before you leap.",
                "Hold the baby gently.",
                "Please reply by return."
            ],
            "levelNumber": 149
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The snow lay deep.",
                "Get ready in advance.",
                "The good die young.",
                "Every member must attend."
            ],
            "levelNumber": 150
        },
        {
            "sentences": [
                {
                    "words": [
                        "Every",
                        "member",
                        "must",
                        "attend"
                    ],
                    "targetWord": "attend",
                    "alts": [
                        "wish",
                        "statement",
                        "become",
                        "attend"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "reply",
                        "by",
                        "return"
                    ],
                    "targetWord": "return",
                    "alts": [
                        "create",
                        "score",
                        "part",
                        "return"
                    ]
                },
                {
                    "words": [
                        "Clothes",
                        "make",
                        "the",
                        "man"
                    ],
                    "targetWord": "Clothes",
                    "alts": [
                        "assemble",
                        "necessity",
                        "reordering",
                        "Clothes"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Have a nice holiday.",
                "Nobody bore me out.",
                "Fold up the map.",
                "Hot water burst out."
            ],
            "levelNumber": 151
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Get on a horse.",
                "Let him do it.",
                "His remark hit home.",
                "He lay without movement."
            ],
            "levelNumber": 152
        },
        {
            "sentences": [
                {
                    "words": [
                        "He",
                        "lay",
                        "without",
                        "movement"
                    ],
                    "targetWord": "movement"
                },
                {
                    "words": [
                        "Hot",
                        "water",
                        "burst",
                        "out"
                    ],
                    "targetWord": "burst"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "He left just now.",
                "Get off his back.",
                "He will also go.",
                "Follow close behind them."
            ],
            "levelNumber": 153
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They look pretty close.",
                "Let them come in.",
                "They love each other.",
                "Keep watch on him."
            ],
            "levelNumber": 154
        },
        {
            "sentences": [
                {
                    "words": [
                        "Follow",
                        "close",
                        "behind",
                        "them"
                    ],
                    "targetWord": "behind",
                    "alts": [
                        "fill",
                        "shift",
                        "section",
                        "behind"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "watch",
                        "on",
                        "him"
                    ],
                    "targetWord": "watch",
                    "alts": [
                        "inhibit",
                        "watchman",
                        "play",
                        "watch"
                    ]
                },
                {
                    "words": [
                        "Have",
                        "it",
                        "your",
                        "way"
                    ],
                    "targetWord": "your",
                    "alts": [
                        "prolong",
                        "result",
                        "imitate",
                        "your"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "She shall serve tea.",
                "Do not disturb her.",
                "She will come soon.",
                "Defend her from danger."
            ],
            "levelNumber": 155
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Forget the sad affair.",
                "Show me another camera.",
                "Mom spread the table.",
                "Walk ahead of me."
            ],
            "levelNumber": 156
        },
        {
            "alts": [
                "Defend her from danger.",
                "Defend danger from her.",
                "Defend from her danger.",
                "Defend her danger from.",
                "Defend from danger her.",
                "Defend danger her from."
            ],
            "correct": "Defend her from danger.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Choose a book carefully.",
                "Should it rain now.",
                "Put out the light.",
                "Let them all come."
            ],
            "levelNumber": 157
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Bring along your friend.",
                "Come and see me.",
                "None of your business.",
                "Sheep feed on grass."
            ],
            "levelNumber": 158
        },
        {
            "sentences": [
                {
                    "words": [
                        "Sheep",
                        "feed",
                        "on",
                        "grass"
                    ],
                    "targetWord": "grass",
                    "alts": [
                        "promote",
                        "consume",
                        "play",
                        "grass"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "them",
                        "all",
                        "come"
                    ],
                    "targetWord": "come",
                    "alts": [
                        "exploit",
                        "provide",
                        "move",
                        "come"
                    ]
                },
                {
                    "words": [
                        "Walk",
                        "ahead",
                        "of",
                        "me"
                    ],
                    "targetWord": "ahead",
                    "alts": [
                        "pace",
                        "score",
                        "travel",
                        "ahead"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take anything you want.",
                "Come and help us.",
                "Check back next week."
            ],
            "levelNumber": 159
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We must keep calm.",
                "Please help me cook.",
                "Find a good job."
            ],
            "levelNumber": 160
        },
        {
            "sentences": [
                {
                    "words": [
                        "Check",
                        "back",
                        "next",
                        "week"
                    ],
                    "targetWord": "Check"
                },
                {
                    "words": [
                        "Find",
                        "a",
                        "good",
                        "job"
                    ],
                    "targetWord": "good"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The train just left.",
                "Do it by yourself.",
                "Please explain in detail."
            ],
            "levelNumber": 161
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "With all due respect.",
                "You should behave carefully.",
                "No place like home."
            ],
            "levelNumber": 162
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "explain",
                        "in",
                        "detail"
                    ],
                    "targetWord": "explain",
                    "alts": [
                        "condition",
                        "wish",
                        "station",
                        "explain"
                    ]
                },
                {
                    "words": [
                        "No",
                        "place",
                        "like",
                        "home"
                    ],
                    "targetWord": "place",
                    "alts": [
                        "vicinity",
                        "move",
                        "inform",
                        "place"
                    ]
                },
                {
                    "words": [
                        "Lend",
                        "me",
                        "a",
                        "hand"
                    ],
                    "targetWord": "hand",
                    "alts": [
                        "order",
                        "item",
                        "satisfy",
                        "hand"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let me introduce myself.",
                "Enough for one day.",
                "We should sit down."
            ],
            "levelNumber": 163
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Take this or that.",
                "Stay for a while.",
                "He will come soon."
            ],
            "levelNumber": 164
        },
        {
            "alts": [
                "We should down sit.",
                "We down sit should.",
                "We down should sit.",
                "We sit should down.",
                "We sit down should.",
                "We should sit down."
            ],
            "correct": "We should sit down.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please do that again.",
                "Stay away from me.",
                "Put on your cap."
            ],
            "levelNumber": 165
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We sometimes see them.",
                "And a little bread.",
                "Do as you please."
            ],
            "levelNumber": 166
        },
        {
            "sentences": [
                {
                    "words": [
                        "He",
                        "will",
                        "come",
                        "soon"
                    ],
                    "targetWord": "soon",
                    "alts": [
                        "become",
                        "result",
                        "organize",
                        "soon"
                    ]
                },
                {
                    "words": [
                        "Do",
                        "as",
                        "you",
                        "please"
                    ],
                    "targetWord": "please",
                    "alts": [
                        "create",
                        "party",
                        "move",
                        "please"
                    ]
                },
                {
                    "words": [
                        "Put",
                        "on",
                        "your",
                        "cap"
                    ],
                    "targetWord": "your",
                    "alts": [
                        "ordain",
                        "travel",
                        "satisfy",
                        "your"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We need your help.",
                "Hurt people hurt people.",
                "We only have tea."
            ],
            "levelNumber": 167
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please wait a bit.",
                "We know this song.",
                "Please wait a moment."
            ],
            "levelNumber": 168
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "wait",
                        "a",
                        "moment"
                    ],
                    "targetWord": "moment"
                },
                {
                    "words": [
                        "We",
                        "only",
                        "have",
                        "tea"
                    ],
                    "targetWord": "have"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come again any time.",
                "Please leave right away.",
                "Try it once more."
            ],
            "levelNumber": 169
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please let me go.",
                "They shall not pass.",
                "Come along with us."
            ],
            "levelNumber": 170
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Always count your change.",
                "Handle this very carefully.",
                "Have a good night."
            ],
            "levelNumber": 171
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Wait just a moment.",
                "Please choose one person.",
                "Take a deep breath."
            ],
            "levelNumber": 172
        },
        {
            "alts": [
                "Take a deep breath.",
                "Take breath deep a.",
                "Take breath a deep.",
                "Take deep a breath.",
                "Take deep breath a.",
                "Take a breath deep."
            ],
            "correct": "Take a deep breath.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We will bury you.",
                "Please open the bottle.",
                "They love that song."
            ],
            "levelNumber": 173
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just a small portion.",
                "Line up for lunch.",
                "Old people walk slowly."
            ],
            "levelNumber": 174
        },
        {
            "sentences": [
                {
                    "words": [
                        "Old",
                        "people",
                        "walk",
                        "slowly"
                    ],
                    "targetWord": "slowly",
                    "alts": [
                        "result",
                        "become",
                        "play",
                        "slowly"
                    ]
                },
                {
                    "words": [
                        "They",
                        "love",
                        "that",
                        "song"
                    ],
                    "targetWord": "song",
                    "alts": [
                        "pace",
                        "lover",
                        "score",
                        "song"
                    ]
                },
                {
                    "words": [
                        "Come",
                        "along",
                        "with",
                        "us"
                    ],
                    "targetWord": "along",
                    "alts": [
                        "past",
                        "travel",
                        "copulate",
                        "along"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please speak more slowly.",
                "Push the door carefully.",
                "Think before you speak."
            ],
            "levelNumber": 175
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They try the rice.",
                "God be with us.",
                "Write down his address."
            ],
            "levelNumber": 176
        },
        {
            "sentences": [
                {
                    "words": [
                        "Write",
                        "down",
                        "his",
                        "address"
                    ],
                    "targetWord": "address"
                },
                {
                    "words": [
                        "Think",
                        "before",
                        "you",
                        "speak"
                    ],
                    "targetWord": "before"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "He shut the door.",
                "Come sit with us.",
                "We sugar our tea."
            ],
            "levelNumber": 177
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "These clothes suit you.",
                "Just a little more.",
                "You should meet him."
            ],
            "levelNumber": 178
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "should",
                        "meet",
                        "him"
                    ],
                    "targetWord": "should",
                    "alts": [
                        "cope",
                        "score",
                        "provide",
                        "should"
                    ]
                },
                {
                    "words": [
                        "Have",
                        "a",
                        "good",
                        "night"
                    ],
                    "targetWord": "night",
                    "alts": [
                        "sweetening",
                        "interact",
                        "sweeten",
                        "night"
                    ]
                },
                {
                    "words": [
                        "We",
                        "sugar",
                        "our",
                        "tea"
                    ],
                    "targetWord": "sugar",
                    "alts": [
                        "person",
                        "nucleotide",
                        "macromolecule",
                        "sugar"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We all trust you.",
                "Dig a deep hole.",
                "This should be plenty."
            ],
            "levelNumber": 179
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We must sit down.",
                "Draw me a sheep.",
                "Please do not forget."
            ],
            "levelNumber": 180
        },
        {
            "alts": [
                "This plenty be should.",
                "This plenty should be.",
                "This be should plenty.",
                "This should be plenty.",
                "This be plenty should.",
                "This should plenty be."
            ],
            "correct": "This should be plenty.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come sing with me.",
                "Turn off the radio.",
                "People should wash themselves."
            ],
            "levelNumber": 181
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give peace a chance.",
                "You only live once.",
                "Please go right away."
            ],
            "levelNumber": 182
        },
        {
            "sentences": [
                {
                    "words": [
                        "People",
                        "should",
                        "wash",
                        "themselves"
                    ],
                    "targetWord": "themselves",
                    "alts": [
                        "shift",
                        "watercolor",
                        "abstraction",
                        "themselves"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "go",
                        "right",
                        "away"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "compare",
                        "wish",
                        "move",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "do",
                        "not",
                        "forget"
                    ],
                    "targetWord": "forget",
                    "alts": [
                        "remove",
                        "clean",
                        "travel",
                        "forget"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give me a minute.",
                "Remember you must die.",
                "Please have a drink."
            ],
            "levelNumber": 183
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please speak more clearly.",
                "You always destroy everything.",
                "Give me the key.",
                "You must start immediately."
            ],
            "levelNumber": 184
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "must",
                        "start",
                        "immediately"
                    ],
                    "targetWord": "immediately"
                },
                {
                    "words": [
                        "Please",
                        "have",
                        "a",
                        "drink"
                    ],
                    "targetWord": "Please"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Clear up a doubt.",
                "We need another member.",
                "Please correct my bill.",
                "Some people like danger."
            ],
            "levelNumber": 185
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They need some direction.",
                "Breath through the bag.",
                "That will change nothing.",
                "Give her the book."
            ],
            "levelNumber": 186
        },
        {
            "sentences": [
                {
                    "words": [
                        "Some",
                        "people",
                        "like",
                        "danger"
                    ],
                    "targetWord": "danger",
                    "alts": [
                        "elasticity",
                        "activity",
                        "consume",
                        "danger"
                    ]
                },
                {
                    "words": [
                        "Give",
                        "her",
                        "the",
                        "book"
                    ],
                    "targetWord": "book",
                    "alts": [
                        "permit",
                        "provide",
                        "move",
                        "book"
                    ]
                },
                {
                    "words": [
                        "Try",
                        "it",
                        "once",
                        "more"
                    ],
                    "targetWord": "more",
                    "alts": [
                        "pain",
                        "submit",
                        "offer",
                        "more"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Somebody set him up.",
                "They never drink beer.",
                "Let the game begin.",
                "You trust him completely."
            ],
            "levelNumber": 187
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "It will grow old.",
                "Warm up some water.",
                "Please add more coffee.",
                "You must do it."
            ],
            "levelNumber": 188
        },
        {
            "alts": [
                "You completely him trust.",
                "You completely trust him.",
                "You him trust completely.",
                "You him completely trust.",
                "You trust completely him.",
                "You trust him completely."
            ],
            "correct": "You trust him completely.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go there with me.",
                "We found her alive.",
                "Only time will tell.",
                "Hang on a minute."
            ],
            "levelNumber": 189
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "It will probably rain.",
                "Give me the number.",
                "We should break up.",
                "Play us a tune."
            ],
            "levelNumber": 190
        },
        {
            "sentences": [
                {
                    "words": [
                        "Hang",
                        "on",
                        "a",
                        "minute"
                    ],
                    "targetWord": "minute",
                    "alts": [
                        "re-create",
                        "move",
                        "activity",
                        "minute"
                    ]
                },
                {
                    "words": [
                        "Play",
                        "us",
                        "a",
                        "tune"
                    ],
                    "targetWord": "tune",
                    "alts": [
                        "discharge",
                        "grasp",
                        "exploit",
                        "tune"
                    ]
                },
                {
                    "words": [
                        "You",
                        "must",
                        "do",
                        "it"
                    ],
                    "targetWord": "must",
                    "alts": [
                        "measure",
                        "movability",
                        "compete",
                        "must"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They should know it.",
                "Please make your bed.",
                "It must come soon.",
                "Step on the scale."
            ],
            "levelNumber": 191
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Call me this afternoon.",
                "Get off my back.",
                "Do not do that.",
                "Never borrow a car.",
                "They often see us."
            ],
            "levelNumber": 192
        },
        {
            "sentences": [
                {
                    "words": [
                        "They",
                        "often",
                        "see",
                        "us"
                    ],
                    "targetWord": "often"
                },
                {
                    "words": [
                        "Step",
                        "on",
                        "the",
                        "scale"
                    ],
                    "targetWord": "scale"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "She hit him hard.",
                "Please come home sometimes.",
                "There will be blood.",
                "Fight for your right.",
                "Let us sit down."
            ],
            "levelNumber": 193
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "All will be fine.",
                "You have no taste.",
                "Save me a seat.",
                "Please come this way.",
                "Leave the door open."
            ],
            "levelNumber": 194
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give me a little.",
                "Do not watch television.",
                "You borrow a book.",
                "Go play in traffic.",
                "Buy the full version."
            ],
            "levelNumber": 195
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We never use sugar.",
                "Ask her for advice.",
                "No chance in hell.",
                "We appreciate your cooperation.",
                "Be careful out there."
            ],
            "levelNumber": 196
        },
        {
            "alts": [
                "Be there careful out.",
                "Be out careful there.",
                "Be careful out there.",
                "Be careful there out.",
                "Be out there careful.",
                "Be there out careful."
            ],
            "correct": "Be careful out there.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go on without me.",
                "Write a short essay.",
                "They fill you alone.",
                "Please take me home.",
                "You catch on quickly."
            ],
            "levelNumber": 197
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You go on alone.",
                "All in good time.",
                "Do what you want.",
                "Forget the last line.",
                "See you at school."
            ],
            "levelNumber": 198
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "catch",
                        "on",
                        "quickly"
                    ],
                    "targetWord": "quickly",
                    "alts": [
                        "play",
                        "fastener",
                        "witness",
                        "quickly"
                    ]
                },
                {
                    "words": [
                        "Buy",
                        "the",
                        "full",
                        "version"
                    ],
                    "targetWord": "version",
                    "alts": [
                        "attach",
                        "capture",
                        "move",
                        "version"
                    ]
                },
                {
                    "words": [
                        "Leave",
                        "the",
                        "door",
                        "open"
                    ],
                    "targetWord": "Leave",
                    "alts": [
                        "understand",
                        "lose",
                        "erupt",
                        "Leave"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We do not forget.",
                "Help me stand up.",
                "Have a great weekend.",
                "We all find them.",
                "Drop of my blood."
            ],
            "levelNumber": 199
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We need your support.",
                "Nothing should prevent divorce.",
                "Surely he left already.",
                "Wash your mouth out.",
                "Go get some water."
            ],
            "levelNumber": 200
        }
    ],
    "5": [
        {
            "gameType": "ordinal",
            "sentences": [
                "You need not telephone me.",
                "Check your answer with his.",
                "You shall want for nothing.",
                "Gold will not buy everything."
            ],
            "levelNumber": 201
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Thank you for your interest.",
                "Please make yourself at home.",
                "You must feed the machine.",
                "Never confuse art with life."
            ],
            "levelNumber": 202
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Some people pursue only pleasure.",
                "Call me at the office.",
                "We want freedom from poverty.",
                "Let us do the work.",
                "Read it again and again."
            ],
            "levelNumber": 203
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Thank you all the same.",
                "There must be another way.",
                "Please clean the dirty floor.",
                "You should rest after exercise.",
                "Stay out of the rain."
            ],
            "levelNumber": 204
        },
        {
            "alts": [
                "Gold not will buy everything.",
                "Gold buy not will everything.",
                "Gold will not buy everything.",
                "Gold will buy not everything.",
                "Gold not buy will everything.",
                "Gold buy will not everything."
            ],
            "correct": "Gold will not buy everything.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Lie on your right side.",
                "You should stay in bed.",
                "Set your mind at ease.",
                "Keep away from bad company.",
                "We should respect the old."
            ],
            "levelNumber": 205
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We should keep our promise.",
                "Love will come in time.",
                "You must gather further information.",
                "Please send me another copy.",
                "Do it a second time."
            ],
            "levelNumber": 206
        },
        {
            "sentences": [
                {
                    "words": [
                        "Never",
                        "confuse",
                        "art",
                        "with",
                        "life"
                    ],
                    "targetWord": "confuse",
                    "alts": [
                        "assemble",
                        "indicate",
                        "creation",
                        "confuse"
                    ]
                },
                {
                    "words": [
                        "We",
                        "should",
                        "respect",
                        "the",
                        "old"
                    ],
                    "targetWord": "respect",
                    "alts": [
                        "understand",
                        "affection",
                        "attitude",
                        "respect"
                    ]
                },
                {
                    "words": [
                        "Read",
                        "it",
                        "again",
                        "and",
                        "again"
                    ],
                    "targetWord": "again",
                    "alts": [
                        "accept",
                        "publication",
                        "honor",
                        "again"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please show me another one.",
                "With a little more effort.",
                "Dinner will be ready soon.",
                "Try the board surface first.",
                "You will have little trouble."
            ],
            "levelNumber": 207
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Give me just a little.",
                "They have no more wine.",
                "Bill will return next week.",
                "Please show me your bag.",
                "Take whatever cake you want."
            ],
            "levelNumber": 208
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "will",
                        "have",
                        "little",
                        "trouble"
                    ],
                    "targetWord": "trouble"
                },
                {
                    "words": [
                        "Take",
                        "whatever",
                        "cake",
                        "you",
                        "want"
                    ],
                    "targetWord": "whatever"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Wear what clothes you please.",
                "A truck hit the dog.",
                "Tell me which you want.",
                "Drop in now and again."
            ],
            "levelNumber": 209
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please tell me the truth.",
                "Walk as fast as possible.",
                "Please help me with this.",
                "Just look in the mirror."
            ],
            "levelNumber": 210
        },
        {
            "sentences": [
                {
                    "words": [
                        "Just",
                        "look",
                        "in",
                        "the",
                        "mirror"
                    ],
                    "targetWord": "mirror",
                    "alts": [
                        "failure",
                        "elide",
                        "move",
                        "mirror"
                    ]
                },
                {
                    "words": [
                        "Drop",
                        "in",
                        "now",
                        "and",
                        "again"
                    ],
                    "targetWord": "again",
                    "alts": [
                        "convey",
                        "hang",
                        "remove",
                        "again"
                    ]
                },
                {
                    "words": [
                        "Stay",
                        "out",
                        "of",
                        "the",
                        "rain"
                    ],
                    "targetWord": "rain",
                    "alts": [
                        "lose",
                        "stop",
                        "strip",
                        "rain"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Be quiet for a moment.",
                "Let me dance with you.",
                "Everyone must keep the law.",
                "Someone will do that job."
            ],
            "levelNumber": 211
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Probably he will come soon.",
                "Let me have a cigarette.",
                "Go through fire and water.",
                "We must act at once."
            ],
            "levelNumber": 212
        },
        {
            "alts": [
                "Someone that will do job.",
                "Someone will do that job.",
                "Someone do will that job.",
                "Someone will that do job.",
                "Someone do that will job.",
                "Someone that do will job."
            ],
            "correct": "Someone will do that job.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We have no such example.",
                "Pack them in the box.",
                "That will do me well.",
                "Please think about the problem."
            ],
            "levelNumber": 213
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Record the broadcast on tape.",
                "Those clothes suit you well.",
                "Fill the bottle with water.",
                "Post that letter right away."
            ],
            "levelNumber": 214
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "think",
                        "about",
                        "the",
                        "problem"
                    ],
                    "targetWord": "problem",
                    "alts": [
                        "abstraction",
                        "deliberation",
                        "re-create",
                        "problem"
                    ]
                },
                {
                    "words": [
                        "Post",
                        "that",
                        "letter",
                        "right",
                        "away"
                    ],
                    "targetWord": "letter",
                    "alts": [
                        "wish",
                        "affix",
                        "owner",
                        "letter"
                    ]
                },
                {
                    "words": [
                        "We",
                        "must",
                        "act",
                        "at",
                        "once"
                    ],
                    "targetWord": "once",
                    "alts": [
                        "necessity",
                        "staleness",
                        "move",
                        "once"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Describe that accident in detail.",
                "The result will satisfy him.",
                "Tell me everything about it.",
                "The engine will not pull."
            ],
            "levelNumber": 215
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should not go there.",
                "Do come and visit us.",
                "Then you will be happy.",
                "Do your room at once."
            ],
            "levelNumber": 216
        },
        {
            "sentences": [
                {
                    "words": [
                        "The",
                        "engine",
                        "will",
                        "not",
                        "pull"
                    ],
                    "targetWord": "engine"
                },
                {
                    "words": [
                        "Do",
                        "your",
                        "room",
                        "at",
                        "once"
                    ],
                    "targetWord": "once"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Enter the room at once.",
                "It will soon grow dark.",
                "Please come back at once.",
                "Take this box away soon."
            ],
            "levelNumber": 217
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Send me somebody right away.",
                "Please take off your shirt.",
                "Let me tell you something.",
                "Wait here for a while."
            ],
            "levelNumber": 218
        },
        {
            "sentences": [
                {
                    "words": [
                        "Take",
                        "this",
                        "box",
                        "away",
                        "soon"
                    ],
                    "targetWord": "soon",
                    "alts": [
                        "rectangle",
                        "attendant",
                        "compartment",
                        "soon"
                    ]
                },
                {
                    "words": [
                        "Wait",
                        "here",
                        "for",
                        "a",
                        "while"
                    ],
                    "targetWord": "while",
                    "alts": [
                        "time",
                        "support",
                        "filming",
                        "while"
                    ]
                },
                {
                    "words": [
                        "Do",
                        "it",
                        "a",
                        "second",
                        "time"
                    ],
                    "targetWord": "second",
                    "alts": [
                        "sicken",
                        "become",
                        "move",
                        "second"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Stand still and keep silent.",
                "But people have little hope.",
                "Please give me your attention.",
                "Send this by special delivery."
            ],
            "levelNumber": 219
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Choose one from among these.",
                "This will be his car.",
                "Please let me off here.",
                "Fill a glass with water."
            ],
            "levelNumber": 220
        },
        {
            "alts": [
                "Send by special this delivery.",
                "Send this by special delivery.",
                "Send by this special delivery.",
                "Send special by this delivery.",
                "Send this special by delivery.",
                "Send special this by delivery."
            ],
            "correct": "Send this by special delivery.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Put yourself in my position.",
                "Come here and help me.",
                "Please lay down your coat.",
                "You need not do so."
            ],
            "levelNumber": 221
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Mind you come on time.",
                "Watch my camera for me.",
                "Please come whenever you like.",
                "Just say yes or no."
            ],
            "levelNumber": 222
        },
        {
            "sentences": [
                {
                    "words": [
                        "Fill",
                        "a",
                        "glass",
                        "with",
                        "water"
                    ],
                    "targetWord": "water",
                    "alts": [
                        "solid",
                        "enough",
                        "consume",
                        "water"
                    ]
                },
                {
                    "words": [
                        "Just",
                        "say",
                        "yes",
                        "or",
                        "no"
                    ],
                    "targetWord": "Just",
                    "alts": [
                        "condition",
                        "material",
                        "provide",
                        "Just"
                    ]
                },
                {
                    "words": [
                        "You",
                        "need",
                        "not",
                        "do",
                        "so"
                    ],
                    "targetWord": "need",
                    "alts": [
                        "convey",
                        "amphetamine",
                        "necessity",
                        "need"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You have a good camera.",
                "Just step right over there.",
                "Take the medicine every hour."
            ],
            "levelNumber": 223
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Come back within a month.",
                "Let me go with you.",
                "Take care of your health."
            ],
            "levelNumber": 224
        },
        {
            "sentences": [
                {
                    "words": [
                        "Take",
                        "the",
                        "medicine",
                        "every",
                        "hour"
                    ],
                    "targetWord": "medicine"
                },
                {
                    "words": [
                        "Take",
                        "care",
                        "of",
                        "your",
                        "health"
                    ],
                    "targetWord": "health"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Look at the dog jump.",
                "Come on out with it.",
                "Lock the door without fail."
            ],
            "levelNumber": 225
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You keep out of this.",
                "Please bring the master key.",
                "Get me out of here."
            ],
            "levelNumber": 226
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You will yet regret it.",
                "Let me go just once.",
                "We have enough food now."
            ],
            "levelNumber": 227
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Bring your sister next time.",
                "Be at home this evening.",
                "Keep the rest for yourself."
            ],
            "levelNumber": 228
        },
        {
            "alts": [
                "Keep rest for the yourself.",
                "Keep the for rest yourself.",
                "Keep for rest the yourself.",
                "Keep for the rest yourself.",
                "Keep rest the for yourself.",
                "Keep the rest for yourself."
            ],
            "correct": "Keep the rest for yourself.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go ahead with your work.",
                "We believe in that man.",
                "All of us like her."
            ],
            "levelNumber": 229
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Sing a song with me.",
                "We do not all go.",
                "Look at the next page."
            ],
            "levelNumber": 230
        },
        {
            "sentences": [
                {
                    "words": [
                        "Lock",
                        "the",
                        "door",
                        "without",
                        "fail"
                    ],
                    "targetWord": "without",
                    "alts": [
                        "enclosure",
                        "solid",
                        "fastener",
                        "without"
                    ]
                },
                {
                    "words": [
                        "We",
                        "have",
                        "enough",
                        "food",
                        "now"
                    ],
                    "targetWord": "enough",
                    "alts": [
                        "convey",
                        "score",
                        "move",
                        "enough"
                    ]
                },
                {
                    "words": [
                        "Look",
                        "at",
                        "the",
                        "next",
                        "page"
                    ],
                    "targetWord": "page",
                    "alts": [
                        "embrace",
                        "care",
                        "interact",
                        "page"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We should keep ourselves clean.",
                "Put your room in order.",
                "Young people like popular music."
            ],
            "levelNumber": 231
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please contact me by letter.",
                "We make sake from rice.",
                "Drink less and sleep more."
            ],
            "levelNumber": 232
        },
        {
            "sentences": [
                {
                    "words": [
                        "Young",
                        "people",
                        "like",
                        "popular",
                        "music"
                    ],
                    "targetWord": "popular"
                },
                {
                    "words": [
                        "Drink",
                        "less",
                        "and",
                        "sleep",
                        "more"
                    ],
                    "targetWord": "sleep"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Be quiet during the lesson.",
                "Handle it with great care.",
                "Give yourself plenty of time."
            ],
            "levelNumber": 233
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Call me before you leave.",
                "Drink water from a stream.",
                "Please send us more information."
            ],
            "levelNumber": 234
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "send",
                        "us",
                        "more",
                        "information"
                    ],
                    "targetWord": "information",
                    "alts": [
                        "elasticity",
                        "wish",
                        "abundance",
                        "information"
                    ]
                },
                {
                    "words": [
                        "Give",
                        "yourself",
                        "plenty",
                        "of",
                        "time"
                    ],
                    "targetWord": "yourself",
                    "alts": [
                        "permit",
                        "provide",
                        "move",
                        "yourself"
                    ]
                },
                {
                    "words": [
                        "All",
                        "of",
                        "us",
                        "like",
                        "her"
                    ],
                    "targetWord": "like",
                    "alts": [
                        "submit",
                        "offer",
                        "satisfy",
                        "like"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Try a new hat on.",
                "Let in some fresh air.",
                "You should tell the truth."
            ],
            "levelNumber": 235
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The truth will clear soon.",
                "Risk all and gain all.",
                "Remember your station in life."
            ],
            "levelNumber": 236
        },
        {
            "alts": [
                "Remember in your station life.",
                "Remember your station in life.",
                "Remember in station your life.",
                "Remember station your in life.",
                "Remember station in your life.",
                "Remember your in station life."
            ],
            "correct": "Remember your station in life.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Every man in his way.",
                "People believe this report true.",
                "Look at the clear sky."
            ],
            "levelNumber": 237
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please check the correct answer.",
                "Send this by sea mail.",
                "Please fill up the front."
            ],
            "levelNumber": 238
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "should",
                        "tell",
                        "the",
                        "truth"
                    ],
                    "targetWord": "should",
                    "alts": [
                        "wish",
                        "enough",
                        "consume",
                        "should"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "fill",
                        "up",
                        "the",
                        "front"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "permit",
                        "provide",
                        "inform",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Look",
                        "at",
                        "the",
                        "clear",
                        "sky"
                    ],
                    "targetWord": "clear",
                    "alts": [
                        "material",
                        "convey",
                        "remove",
                        "clear"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You must pay in advance.",
                "Look out of the window.",
                "Thank you ever so much."
            ],
            "levelNumber": 239
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should keep yourself warm.",
                "Lunch will be ready soon.",
                "Please wake me for breakfast."
            ],
            "levelNumber": 240
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "wake",
                        "me",
                        "for",
                        "breakfast"
                    ],
                    "targetWord": "breakfast"
                },
                {
                    "words": [
                        "Thank",
                        "you",
                        "ever",
                        "so",
                        "much"
                    ],
                    "targetWord": "Thank"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We shall start after breakfast.",
                "Let the bird fly away.",
                "Wear warm clothes in winter."
            ],
            "levelNumber": 241
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We will soon take off.",
                "Never tell a lie again.",
                "Give me half of it."
            ],
            "levelNumber": 242
        },
        {
            "sentences": [
                {
                    "words": [
                        "Wear",
                        "warm",
                        "clothes",
                        "in",
                        "winter"
                    ],
                    "targetWord": "clothes",
                    "alts": [
                        "elasticity",
                        "effect",
                        "failure",
                        "clothes"
                    ]
                },
                {
                    "words": [
                        "Give",
                        "me",
                        "half",
                        "of",
                        "it"
                    ],
                    "targetWord": "half",
                    "alts": [
                        "part",
                        "provide",
                        "move",
                        "half"
                    ]
                },
                {
                    "words": [
                        "Get",
                        "me",
                        "out",
                        "of",
                        "here"
                    ],
                    "targetWord": "here",
                    "alts": [
                        "permit",
                        "mean",
                        "dress",
                        "here"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The door shut after him.",
                "He will come all right.",
                "Have him wait a moment."
            ],
            "levelNumber": 243
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should not trust him.",
                "Imagine yourself in her place.",
                "She must be well off."
            ],
            "levelNumber": 244
        },
        {
            "alts": [
                "Have wait him a moment.",
                "Have wait a him moment.",
                "Have him a wait moment.",
                "Have him wait a moment.",
                "Have a wait him moment.",
                "Have a him wait moment."
            ],
            "correct": "Have him wait a moment.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "She should help her mother.",
                "Please show me another example.",
                "Study will do you good."
            ],
            "levelNumber": 245
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "My mother cut the cake.",
                "Save me some ice cream.",
                "Look at my new car."
            ],
            "levelNumber": 246
        },
        {
            "sentences": [
                {
                    "words": [
                        "Study",
                        "will",
                        "do",
                        "you",
                        "good"
                    ],
                    "targetWord": "Study",
                    "alts": [
                        "convey",
                        "compartment",
                        "contemplation",
                        "Study"
                    ]
                },
                {
                    "words": [
                        "She",
                        "must",
                        "be",
                        "well",
                        "off"
                    ],
                    "targetWord": "well",
                    "alts": [
                        "necessity",
                        "care",
                        "party",
                        "well"
                    ]
                },
                {
                    "words": [
                        "Look",
                        "at",
                        "my",
                        "new",
                        "car"
                    ],
                    "targetWord": "Look",
                    "alts": [
                        "examination",
                        "travel",
                        "staleness",
                        "Look"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We have nothing in common.",
                "My sister will prepare breakfast.",
                "You should take it easy.",
                "Write your name in full."
            ],
            "levelNumber": 247
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Explain it in plain language.",
                "Oil will float on water.",
                "Go jump in the lake.",
                "You should take liquid food."
            ],
            "levelNumber": 248
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "should",
                        "take",
                        "liquid",
                        "food"
                    ],
                    "targetWord": "liquid"
                },
                {
                    "words": [
                        "Write",
                        "your",
                        "name",
                        "in",
                        "full"
                    ],
                    "targetWord": "Write"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Behave yourself during my absence.",
                "Bring me some cold water.",
                "The train left on time.",
                "Please accept this little gift."
            ],
            "levelNumber": 249
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let go of your hate.",
                "She left here right away.",
                "Accept both good and bad.",
                "He must be the principal."
            ],
            "levelNumber": 250
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please come and help me.",
                "You should wear a coat.",
                "Let me say one thing.",
                "We miss you a lot."
            ],
            "levelNumber": 251
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We still have more time.",
                "My watch must be slow.",
                "Sit down or seat yourself.",
                "Thank you for your help."
            ],
            "levelNumber": 252
        },
        {
            "alts": [
                "Please this accept little gift.",
                "Please accept this little gift.",
                "Please this little accept gift.",
                "Please accept little this gift.",
                "Please little accept this gift.",
                "Please little this accept gift."
            ],
            "correct": "Please accept this little gift.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They live in a house.",
                "Come over and help out.",
                "You should do that soon.",
                "Please make a right turn."
            ],
            "levelNumber": 253
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should begin right away.",
                "Please keep your voice down.",
                "It should be like this.",
                "Please pass me the sugar."
            ],
            "levelNumber": 254
        },
        {
            "sentences": [
                {
                    "words": [
                        "Please",
                        "pass",
                        "me",
                        "the",
                        "sugar"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "abstraction",
                        "wish",
                        "become",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "make",
                        "a",
                        "right",
                        "turn"
                    ],
                    "targetWord": "Please",
                    "alts": [
                        "permit",
                        "convey",
                        "move",
                        "Please"
                    ]
                },
                {
                    "words": [
                        "He",
                        "must",
                        "be",
                        "the",
                        "principal"
                    ],
                    "targetWord": "principal",
                    "alts": [
                        "assemble",
                        "score",
                        "reordering",
                        "principal"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please do not buy it.",
                "Show us the straight path.",
                "He will pay for everything.",
                "Please send me a letter."
            ],
            "levelNumber": 255
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "My mother set the table.",
                "He will be here soon.",
                "Ordinary people possess enormous power.",
                "We should call the police.",
                "Time must take its course."
            ],
            "levelNumber": 256
        },
        {
            "sentences": [
                {
                    "words": [
                        "Time",
                        "must",
                        "take",
                        "its",
                        "course"
                    ],
                    "targetWord": "course"
                },
                {
                    "words": [
                        "Please",
                        "send",
                        "me",
                        "a",
                        "letter"
                    ],
                    "targetWord": "letter"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "She must be very happy.",
                "Please talk about your family.",
                "Tell me how you feel.",
                "Please mark the correct answer.",
                "She will pay for everything."
            ],
            "levelNumber": 257
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please show me the schedule.",
                "Old people wake up early.",
                "Let the coin throw decide.",
                "Family should always come first.",
                "They have old construction equipment."
            ],
            "levelNumber": 258
        },
        {
            "sentences": [
                {
                    "words": [
                        "They",
                        "have",
                        "old",
                        "construction",
                        "equipment"
                    ],
                    "targetWord": "construction",
                    "alts": [
                        "convey",
                        "requite",
                        "score",
                        "construction"
                    ]
                },
                {
                    "words": [
                        "She",
                        "will",
                        "pay",
                        "for",
                        "everything"
                    ],
                    "targetWord": "everything",
                    "alts": [
                        "ordain",
                        "person",
                        "interact",
                        "everything"
                    ]
                },
                {
                    "words": [
                        "Thank",
                        "you",
                        "for",
                        "your",
                        "help"
                    ],
                    "targetWord": "Thank",
                    "alts": [
                        "constituent",
                        "think",
                        "interpretation",
                        "Thank"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They live near the beach.",
                "Press and wait for green.",
                "Please tell me your opinion.",
                "We need some more coffee.",
                "Open the door for love."
            ],
            "levelNumber": 259
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Let me work in peace.",
                "We aim at that objective.",
                "Fill out the form below.",
                "Please tell me about it.",
                "His memory will live forever."
            ],
            "levelNumber": 260
        },
        {
            "alts": [
                "His live will memory forever.",
                "His will memory live forever.",
                "His memory will live forever.",
                "His will live memory forever.",
                "His memory live will forever.",
                "His live memory will forever."
            ],
            "correct": "His memory will live forever.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "The issue split the party.",
                "Neither side would give up.",
                "That should do the trick.",
                "Please sit here and wait.",
                "You will never be alone."
            ],
            "levelNumber": 261
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Good night and sleep well.",
                "Lie on your left side.",
                "Please show me another camera.",
                "You do not look well.",
                "Let me have a taste."
            ],
            "levelNumber": 262
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "will",
                        "never",
                        "be",
                        "alone"
                    ],
                    "targetWord": "alone",
                    "alts": [
                        "arise",
                        "score",
                        "move",
                        "alone"
                    ]
                },
                {
                    "words": [
                        "Open",
                        "the",
                        "door",
                        "for",
                        "love"
                    ],
                    "targetWord": "love",
                    "alts": [
                        "ordain",
                        "person",
                        "interact",
                        "love"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "have",
                        "a",
                        "taste"
                    ],
                    "targetWord": "taste",
                    "alts": [
                        "room",
                        "start",
                        "take",
                        "taste"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should take it off.",
                "Please give me a break.",
                "We love you so much.",
                "Please contact me by mail.",
                "The dog bit my hand."
            ],
            "levelNumber": 263
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please just leave me alone.",
                "They left their house quickly.",
                "Tell me one more thing.",
                "Take a look at this.",
                "Get us out of here."
            ],
            "levelNumber": 264
        },
        {
            "sentences": [
                {
                    "words": [
                        "The",
                        "dog",
                        "bit",
                        "my",
                        "hand"
                    ],
                    "targetWord": "hand"
                },
                {
                    "words": [
                        "Get",
                        "us",
                        "out",
                        "of",
                        "here"
                    ],
                    "targetWord": "here"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Stay out of my way.",
                "Little people watch big people.",
                "They must really hate me.",
                "The sun will rise soon.",
                "Blood and violence fascinate them."
            ],
            "levelNumber": 265
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Put your mind at ease.",
                "We will be in trouble.",
                "Please turn off the radio.",
                "We have not much time.",
                "Please take a deep breath."
            ],
            "levelNumber": 266
        },
        {
            "sentences": [
                {
                    "words": [
                        "Blood",
                        "and",
                        "violence",
                        "fascinate",
                        "them"
                    ],
                    "targetWord": "fascinate",
                    "alts": [
                        "libertine",
                        "failure",
                        "filming",
                        "fascinate"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "take",
                        "a",
                        "deep",
                        "breath"
                    ],
                    "targetWord": "breath",
                    "alts": [
                        "wish",
                        "become",
                        "title",
                        "breath"
                    ]
                },
                {
                    "words": [
                        "We",
                        "miss",
                        "you",
                        "a",
                        "lot"
                    ],
                    "targetWord": "miss",
                    "alts": [
                        "daub",
                        "woman",
                        "move",
                        "miss"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please turn up the sound.",
                "They love each other deeply.",
                "Get out of the way.",
                "Say well or be still.",
                "People believe what they see."
            ],
            "levelNumber": 267
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We live near the border.",
                "Contact me by ordinary mail.",
                "We have no second choice.",
                "Let me fix the car.",
                "You should run for president."
            ],
            "levelNumber": 268
        },
        {
            "alts": [
                "You run should for president.",
                "You should run for president.",
                "You for should run president.",
                "You run for should president.",
                "You should for run president.",
                "You for run should president."
            ],
            "correct": "You should run for president.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Get out or come in.",
                "They left one after another.",
                "Please wait outside the house.",
                "Make yourself some hot tea.",
                "You have a beautiful name."
            ],
            "levelNumber": 269
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please let me go home.",
                "We have a tight schedule.",
                "Very many people know him.",
                "You should go home now.",
                "Hurry up and get in."
            ],
            "levelNumber": 270
        },
        {
            "sentences": [
                {
                    "words": [
                        "People",
                        "believe",
                        "what",
                        "they",
                        "see"
                    ],
                    "targetWord": "believe",
                    "alts": [
                        "credit",
                        "effect",
                        "urge",
                        "believe"
                    ]
                },
                {
                    "words": [
                        "You",
                        "have",
                        "a",
                        "beautiful",
                        "name"
                    ],
                    "targetWord": "beautiful",
                    "alts": [
                        "understand",
                        "mean",
                        "score",
                        "beautiful"
                    ]
                },
                {
                    "words": [
                        "Hurry",
                        "up",
                        "and",
                        "get",
                        "in"
                    ],
                    "targetWord": "Hurry",
                    "alts": [
                        "speed",
                        "return",
                        "sicken",
                        "Hurry"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should help your father.",
                "Read as much as possible.",
                "You must be more patient.",
                "Take the money and run.",
                "We already know each other."
            ],
            "levelNumber": 271
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "This will protect your skin.",
                "Get ready for some action.",
                "You left the door open.",
                "Come and keep me company.",
                "You must accept your role."
            ],
            "levelNumber": 272
        },
        {
            "sentences": [
                {
                    "words": [
                        "We",
                        "already",
                        "know",
                        "each",
                        "other"
                    ],
                    "targetWord": "already"
                },
                {
                    "words": [
                        "You",
                        "must",
                        "accept",
                        "your",
                        "role"
                    ],
                    "targetWord": "accept"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please revise regularly every day.",
                "You do a great job.",
                "Let us go right away.",
                "Just shut up and listen.",
                "We must fuel the machine."
            ],
            "levelNumber": 273
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Thank you for your consideration.",
                "Do not call him master.",
                "If you will need anything.",
                "Let me deal with him.",
                "You must not give up."
            ],
            "levelNumber": 274
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You should call the police.",
                "No one will believe him.",
                "Tell me about your job.",
                "They live in constant fear.",
                "Nobody read about my country."
            ],
            "levelNumber": 275
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "He must be very happy.",
                "Her mouth hurt a lot.",
                "You pay us every week.",
                "Green green green green green.",
                "Please keep it a secret."
            ],
            "levelNumber": 276
        },
        {
            "alts": [
                "Nobody about read my country.",
                "Nobody my read about country.",
                "Nobody about my read country.",
                "Nobody read about my country.",
                "Nobody read my about country.",
                "Nobody my about read country."
            ],
            "correct": "Nobody read about my country.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Eat everything on your plate.",
                "Let me read you something.",
                "Get out of the van.",
                "We live in one world.",
                "Get out of my room."
            ],
            "levelNumber": 277
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Get out of my office.",
                "Call me at this number.",
                "Get out of the car.",
                "Please do this for me.",
                "Keep out of my way."
            ],
            "levelNumber": 278
        },
        {
            "sentences": [
                {
                    "words": [
                        "We",
                        "must",
                        "fuel",
                        "the",
                        "machine"
                    ],
                    "targetWord": "machine",
                    "alts": [
                        "inhibit",
                        "prolong",
                        "wish",
                        "machine"
                    ]
                },
                {
                    "words": [
                        "Please",
                        "keep",
                        "it",
                        "a",
                        "secret"
                    ],
                    "targetWord": "secret",
                    "alts": [
                        "elasticity",
                        "provide",
                        "move",
                        "secret"
                    ]
                },
                {
                    "words": [
                        "You",
                        "must",
                        "not",
                        "give",
                        "up"
                    ],
                    "targetWord": "give",
                    "alts": [
                        "permit",
                        "cook",
                        "necessity",
                        "give"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Just use mine for now.",
                "Go wait in the car.",
                "Come here and sit down.",
                "They have their own culture.",
                "Outside advice may be necessary."
            ],
            "levelNumber": 279
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You can from the outside.",
                "Society could not care less.",
                "They that hide can find.",
                "Fight with all your might.",
                "You can rely on me."
            ],
            "levelNumber": 280
        },
        {
            "sentences": [
                {
                    "words": [
                        "Outside",
                        "advice",
                        "may",
                        "be",
                        "necessary"
                    ],
                    "targetWord": "necessary"
                },
                {
                    "words": [
                        "You",
                        "can",
                        "rely",
                        "on",
                        "me"
                    ],
                    "targetWord": "rely"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Anybody can solve that problem.",
                "Nobody could refuse their invitation.",
                "You may not come in.",
                "My son can tell time."
            ],
            "levelNumber": 281
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Catch me if you can.",
                "No one could buy anything.",
                "We can deal with this.",
                "Your ad could be here."
            ],
            "levelNumber": 282
        },
        {
            "sentences": [
                {
                    "words": [
                        "Your",
                        "ad",
                        "could",
                        "be",
                        "here"
                    ],
                    "targetWord": "could",
                    "alts": [
                        "inhibit",
                        "prolong",
                        "failure",
                        "could"
                    ]
                },
                {
                    "words": [
                        "My",
                        "son",
                        "can",
                        "tell",
                        "time"
                    ],
                    "targetWord": "time",
                    "alts": [
                        "remove",
                        "cook",
                        "inform",
                        "time"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "out",
                        "of",
                        "my",
                        "way"
                    ],
                    "targetWord": "Keep",
                    "alts": [
                        "room",
                        "lodge",
                        "take",
                        "Keep"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You may go in now.",
                "People can actually understand them.",
                "Nothing could please us more.",
                "You can forget about that."
            ],
            "levelNumber": 283
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "They can burn more easily.",
                "Go back to your seat.",
                "Never too much of anything.",
                "You seem to like fruit."
            ],
            "levelNumber": 284
        },
        {
            "alts": [
                "You forget about can that.",
                "You can about forget that.",
                "You about can forget that.",
                "You about forget can that.",
                "You can forget about that.",
                "You forget can about that."
            ],
            "correct": "You can forget about that.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Tell me what to do.",
                "Reach out and touch someone.",
                "Help yourself to a drink.",
                "Keep in touch by mail."
            ],
            "levelNumber": 285
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Read after me all together.",
                "Glad to see you again.",
                "The bus left the stop.",
                "Keep in touch with me."
            ],
            "levelNumber": 286
        },
        {
            "sentences": [
                {
                    "words": [
                        "You",
                        "seem",
                        "to",
                        "like",
                        "fruit"
                    ],
                    "targetWord": "fruit",
                    "alts": [
                        "somatosense",
                        "color",
                        "consume",
                        "fruit"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "in",
                        "touch",
                        "with",
                        "me"
                    ],
                    "targetWord": "touch",
                    "alts": [
                        "inhibit",
                        "prolong",
                        "affect",
                        "touch"
                    ]
                },
                {
                    "words": [
                        "Keep",
                        "in",
                        "touch",
                        "by",
                        "mail"
                    ],
                    "targetWord": "touch",
                    "alts": [
                        "cook",
                        "contact",
                        "compete",
                        "touch"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Go ahead with your story.",
                "Perhaps it will snow tomorrow.",
                "Leave the matter to me.",
                "You trust people too much."
            ],
            "levelNumber": 287
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please lie on your stomach.",
                "Tell me when to start.",
                "You will be busy tomorrow.",
                "Watch out for your tongue."
            ],
            "levelNumber": 288
        },
        {
            "sentences": [
                {
                    "words": [
                        "Watch",
                        "out",
                        "for",
                        "your",
                        "tongue"
                    ],
                    "targetWord": "tongue"
                },
                {
                    "words": [
                        "You",
                        "trust",
                        "people",
                        "too",
                        "much"
                    ],
                    "targetWord": "people"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please stand face to face.",
                "We have a holiday today.",
                "Please take me home tonight.",
                "We will be together forever."
            ],
            "levelNumber": 289
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "We work to get money.",
                "The letter will arrive tomorrow.",
                "We have to gather information.",
                "Let me see your tongue."
            ],
            "levelNumber": 290
        },
        {
            "sentences": [
                {
                    "words": [
                        "We",
                        "will",
                        "be",
                        "together",
                        "forever"
                    ],
                    "targetWord": "together",
                    "alts": [
                        "effect",
                        "tour",
                        "failure",
                        "together"
                    ]
                },
                {
                    "words": [
                        "Let",
                        "me",
                        "see",
                        "your",
                        "tongue"
                    ],
                    "targetWord": "tongue",
                    "alts": [
                        "detect",
                        "mean",
                        "score",
                        "tongue"
                    ]
                },
                {
                    "words": [
                        "Get",
                        "out",
                        "of",
                        "my",
                        "room"
                    ],
                    "targetWord": "room",
                    "alts": [
                        "care",
                        "understand",
                        "return",
                        "room"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Nobody would listen to me.",
                "He burst into the room.",
                "Refuse to take no answer.",
                "Come here tomorrow without fail."
            ],
            "levelNumber": 291
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Mail this letter tomorrow morning.",
                "Every man to his trade.",
                "Probably it will snow tomorrow.",
                "Take me to your leader."
            ],
            "levelNumber": 292
        },
        {
            "alts": [
                "Come here tomorrow without fail.",
                "Come without tomorrow here fail.",
                "Come here without tomorrow fail.",
                "Come tomorrow here without fail.",
                "Come without here tomorrow fail.",
                "Come tomorrow without here fail."
            ],
            "correct": "Come here tomorrow without fail.",
            "gameType": "word_order_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Please allow me to go.",
                "It will be snow tomorrow.",
                "Please tell him to wait.",
                "We should call the doctor."
            ],
            "levelNumber": 293
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Some people hate to argue.",
                "Let us go forward together.",
                "We have to act quickly.",
                "Hand back the tape tomorrow."
            ],
            "levelNumber": 294
        },
        {
            "sentences": [
                {
                    "words": [
                        "Hand",
                        "back",
                        "the",
                        "tape",
                        "tomorrow"
                    ],
                    "targetWord": "tomorrow",
                    "alts": [
                        "indicate",
                        "forepaw",
                        "support",
                        "tomorrow"
                    ]
                },
                {
                    "words": [
                        "We",
                        "should",
                        "call",
                        "the",
                        "doctor"
                    ],
                    "targetWord": "doctor",
                    "alts": [
                        "filming",
                        "decision",
                        "play",
                        "doctor"
                    ]
                },
                {
                    "words": [
                        "Take",
                        "me",
                        "to",
                        "your",
                        "leader"
                    ],
                    "targetWord": "leader",
                    "alts": [
                        "order",
                        "become",
                        "move",
                        "leader"
                    ]
                }
            ],
            "gameType": "four_alternatives"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Too good to be true.",
                "Put it onto the table.",
                "Have to go back now.",
                "Tomorrow will be another day."
            ],
            "levelNumber": 295
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "You want to help me.",
                "Please come into my home.",
                "We must sleep outside today."
            ],
            "levelNumber": 296
        },
        {
            "sentences": [
                {
                    "words": [
                        "Tomorrow",
                        "will",
                        "be",
                        "another",
                        "day"
                    ],
                    "targetWord": "Tomorrow"
                },
                {
                    "words": [
                        "We",
                        "must",
                        "sleep",
                        "outside",
                        "today"
                    ],
                    "targetWord": "outside"
                }
            ],
            "gameType": "scrambled_letters"
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Allow me to replace it.",
                "Please come into the room.",
                "We have to do something."
            ],
            "levelNumber": 297
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Stop next to the school.",
                "They get on well together.",
                "Drive me to the store."
            ],
            "levelNumber": 298
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Tell her to help him.",
                "Let me eat something today.",
                "We should all stick together."
            ],
            "levelNumber": 299
        },
        {
            "gameType": "ordinal",
            "sentences": [
                "Very happy to see you.",
                "His story may be true.",
                "You can visit me tomorrow.",
                "One must pay for freedom."
            ],
            "levelNumber": 300
        }
    ]
};var DEFINITIONS = {
    "the": {
        "def": "used to point to something already mentioned",
        "rank": 1
    },
    "be": {
        "def": "used to show the identity of a thing",
        "rank": 2
    },
    "of": {
        "def": "belonging to or connected with something",
        "rank": 3
    },
    "and": {
        "def": "used to join words or groups of words",
        "rank": 4
    },
    "to": {
        "def": "used to indicate place or direction",
        "rank": 5
    },
    "a": {
        "def": "something that is being considered",
        "rank": 6
    },
    "in": {
        "def": "used to indicate being inside of or surrounded by something else",
        "rank": 7
    },
    "have": {
        "def": "to own, possess, or hold something",
        "rank": 8
    },
    "it": {
        "def": "a thing that has been previously mentioned",
        "rank": 9
    },
    "you": {
        "def": "used to refer to the person the speaker is addressing",
        "rank": 10
    },
    "for": {
        "def": "indicating the purpose or need of something",
        "rank": 11
    },
    "not": {
        "def": "used to make an expression negative",
        "rank": 12
    },
    "that": {
        "def": "used to identify a specific person, thing, fact or idea",
        "rank": 13
    },
    "on": {
        "def": "touching and being supported or physically in contact by something",
        "rank": 14
    },
    "with": {
        "def": "used to express that people or things are together",
        "rank": 15
    },
    "do": {
        "def": "to perform an action or activity; to work on something",
        "rank": 16
    },
    "as": {
        "def": "used to refer to the same degree or amount",
        "rank": 17
    },
    "he": {
        "def": "used to refer to a male person that is the subject",
        "rank": 18
    },
    "we": {
        "def": "used to refer to the speaker and another person as the subject",
        "rank": 19
    },
    "this": {
        "def": "used to identify a specific person, thing, or idea that is close",
        "rank": 20
    },
    "at": {
        "def": "used to indicate place, location, or arrival",
        "rank": 21
    },
    "they": {
        "def": "used to refer to two or more people, animals, or things",
        "rank": 22
    },
    "but": {
        "def": "used to contrast a statement with a to previous one",
        "rank": 23
    },
    "from": {
        "def": "indicating the starting point of motion or action ",
        "rank": 24
    },
    "by": {
        "def": "close to or next to, up to and beyond, beside a place",
        "rank": 25
    },
    "will": {
        "def": "expressing the future, to say something is expected to happen",
        "rank": 26
    },
    "or": {
        "def": "used to link alternatives, to introduce another choice",
        "rank": 27
    },
    "his": {
        "def": "belonging to or relating to a male who has already been talked about",
        "rank": 28
    },
    "say": {
        "def": "to use your voice to express something with words",
        "rank": 29
    },
    "go": {
        "def": "to move or travel from one place to another",
        "rank": 30
    },
    "she": {
        "def": "used to refer to a female that is the subject",
        "rank": 31
    },
    "so": {
        "def": "to a  degree that is suggested or stated",
        "rank": 32
    },
    "all": {
        "def": "the whole, entire or total amount",
        "rank": 33
    },
    "about": {
        "def": "on the subject of, or concerning something",
        "rank": 34
    },
    "if": {
        "def": "introducing a condition for something to happen",
        "rank": 35
    },
    "one": {
        "def": "the number 1, a single person or thing",
        "rank": 36
    },
    "my": {
        "def": "belonging to or relating to the person who is speaking or writing",
        "rank": 37
    },
    "know": {
        "def": "to have in your mind, be aware of something",
        "rank": 38
    },
    "there": {
        "def": "in that place or position, at that location",
        "rank": 39
    },
    "which": {
        "def": "what one or ones of a group, one or more people or things",
        "rank": 40
    },
    "can": {
        "def": "to be able to do something",
        "rank": 41
    },
    "get": {
        "def": "to obtain, receive or be given something",
        "rank": 42
    },
    "her": {
        "def": "used to refer to a female who has already been talked about",
        "rank": 43
    },
    "would": {
        "def": "indicating someone thinking about what will happen",
        "rank": 44
    },
    "think": {
        "def": "to believe or have a particular idea",
        "rank": 45
    },
    "like": {
        "def": "to find something agreeable or enjoyable",
        "rank": 46
    },
    "more": {
        "def": "greater in amount, number, or size",
        "rank": 47
    },
    "their": {
        "def": "belonging to or relating to a group that have already been talked about",
        "rank": 48
    },
    "your": {
        "def": "belonging or relating to the person or people you are talking to",
        "rank": 49
    },
    "when": {
        "def": "at what time, at, in, during which, how soon",
        "rank": 50
    },
    "what": {
        "def": "asking for information about someone or something",
        "rank": 51
    },
    "make": {
        "def": "to build, create, or produce something",
        "rank": 52
    },
    "time": {
        "def": "something measured in minutes, hours, days, etc.",
        "rank": 53
    },
    "who": {
        "def": "what or which person or people, to ask about, talking about",
        "rank": 54
    },
    "see": {
        "def": "to notice or become aware of with the eyes",
        "rank": 55
    },
    "up": {
        "def": "to move towards a high place from a lower one",
        "rank": 56
    },
    "people": {
        "def": "human beings in general, plural of person",
        "rank": 57
    },
    "some": {
        "def": "used to refer to an unspecified amount or number",
        "rank": 58
    },
    "out": {
        "def": "in a direction or movement away from the inside or center",
        "rank": 59
    },
    "me": {
        "def": "the person who is speaking or writing",
        "rank": 60
    },
    "good": {
        "def": "of high quality",
        "rank": 61
    },
    "other": {
        "def": "used to mention a person or thing is different from already mentioned",
        "rank": 62
    },
    "year": {
        "def": "a unit of time equal to 12 months or 365 days",
        "rank": 63
    },
    "well": {
        "def": "in a successful way, in a good or satisfactory way",
        "rank": 64
    },
    "our": {
        "def": "belonging to or relating to the person who is speaking and one or more other people",
        "rank": 65
    },
    "very": {
        "def": "to a high degree",
        "rank": 66
    },
    "just": {
        "def": "exactly, to an exact degree or manner",
        "rank": 67
    },
    "them": {
        "def": "a group of people, animals, or things that have already been talked about",
        "rank": 68
    },
    "no": {
        "def": "not at all, in a way that shows a negative response",
        "rank": 69
    },
    "take": {
        "def": "to carry or move with one's hands, to reach for",
        "rank": 70
    },
    "because": {
        "def": "for a reason",
        "rank": 71
    },
    "come": {
        "def": "to move toward someone, to approach",
        "rank": 72
    },
    "could": {
        "def": "used as the past tense of can, to indicate possibility",
        "rank": 73
    },
    "use": {
        "def": "to do something with another thing",
        "rank": 74
    },
    "work": {
        "def": "to have a job or activity involving mental or physical effort",
        "rank": 75
    },
    "then": {
        "def": "at that time, at the time mentioned, after that",
        "rank": 76
    },
    "now": {
        "def": "at the present time or moment",
        "rank": 77
    },
    "also": {
        "def": "in addition, too, in a similar way",
        "rank": 78
    },
    "than": {
        "def": "used to introduce a second part that is being compared",
        "rank": 79
    },
    "him": {
        "def": "someone male who has already been talked about",
        "rank": 80
    },
    "into": {
        "def": "introduce movement toward the inside of something",
        "rank": 81
    },
    "only": {
        "def": "alone in a class or category",
        "rank": 82
    },
    "want": {
        "def": "to desire or wish for",
        "rank": 83
    },
    "look": {
        "def": "to direct one's gaze in a particular direction",
        "rank": 84
    },
    "these": {
        "def": "plural form of THIS",
        "rank": 85
    },
    "its": {
        "def": "belonging to or relating to the thing that has already been talked about",
        "rank": 86
    },
    "new": {
        "def": "not old, recently born, built or created",
        "rank": 87
    },
    "give": {
        "def": "to hand over or present something to another",
        "rank": 88
    },
    "first": {
        "def": "coming before all others in time or place",
        "rank": 89
    },
    "way": {
        "def": "a manner or characteristic of something",
        "rank": 90
    },
    "thing": {
        "def": "an object, animal, or quality doesn't have a specific name",
        "rank": 91
    },
    "any": {
        "def": "used to refer to something not particular or specific",
        "rank": 92
    },
    "over": {
        "def": "in an upward direction across something",
        "rank": 93
    },
    "right": {
        "def": "to be true, correct or acceptable",
        "rank": 94
    },
    "after": {
        "def": "following in time, at a later time",
        "rank": 95
    },
    "find": {
        "def": "to discover something",
        "rank": 96
    },
    "day": {
        "def": "each of the 24 hours beginning at midnight",
        "rank": 97
    },
    "where": {
        "def": "to be in at or in what place?",
        "rank": 98
    },
    "most": {
        "def": "almost all of something",
        "rank": 99
    },
    "should": {
        "def": "used to indicate what is proper or reasonable",
        "rank": 100
    },
    "need": {
        "def": "require because it is essential or important",
        "rank": 101
    },
    "much": {
        "def": "large in amount or extent",
        "rank": 102
    },
    "how": {
        "def": "by what means or manner?",
        "rank": 103
    },
    "back": {
        "def": "the rear surface of something",
        "rank": 104
    },
    "mean": {
        "def": "to have in mind as your purpose or intention",
        "rank": 105
    },
    "may": {
        "def": "used to express possibility or probability",
        "rank": 106
    },
    "such": {
        "def": "like or similar",
        "rank": 107
    },
    "us": {
        "def": "the person who is speaking or writing and one or more other people",
        "rank": 108
    },
    "here": {
        "def": "in this place, at this location or position",
        "rank": 109
    },
    "really": {
        "def": "very or very much",
        "rank": 110
    },
    "even": {
        "def": "being flat, equal or smooth ",
        "rank": 111
    },
    "company": {
        "def": "a business that sells thing or provides services",
        "rank": 112
    },
    "those": {
        "def": "plural of THAT",
        "rank": 113
    },
    "many": {
        "def": "used to refer a large number of things",
        "rank": 114
    },
    "child": {
        "def": "a young person",
        "rank": 115
    },
    "tell": {
        "def": "to say or communicate information to someone",
        "rank": 116
    },
    "last": {
        "def": "coming after others, final",
        "rank": 117
    },
    "call": {
        "def": "to speak, announce or shout in a loud voice",
        "rank": 118
    },
    "down": {
        "def": "going from a higher position to a lower position",
        "rank": 119
    },
    "yes": {
        "def": "used to give a positive answer or reply to a question, request, or offer ",
        "rank": 120
    },
    "before": {
        "def": "at an earlier time, in front of",
        "rank": 121
    },
    "man": {
        "def": "an adult male human being",
        "rank": 122
    },
    "through": {
        "def": "into one side and out of the other side",
        "rank": 123
    },
    "show": {
        "def": "to cause or allow to be seen",
        "rank": 124
    },
    "life": {
        "def": "the existence of a human being or animal",
        "rank": 125
    },
    "between": {
        "def": "in the space that separates to objects",
        "rank": 126
    },
    "lot": {
        "def": "a small piece of land that is or could be used for building something or for some other purpose ",
        "rank": 127
    },
    "feel": {
        "def": "to be aware of or experience an emotion or sensation",
        "rank": 128
    },
    "place": {
        "def": "a particular area or region",
        "rank": 129
    },
    "change": {
        "def": "to make or become different",
        "rank": 130
    },
    "long": {
        "def": "extending a great distance ",
        "rank": 131
    },
    "too": {
        "def": "in addition, also",
        "rank": 132
    },
    "pause": {
        "def": "a temporary stop : a period of time in which something is stopped before it is started again ",
        "rank": 133
    },
    "still": {
        "def": "used to express that an action or condition continues",
        "rank": 134
    },
    "write": {
        "def": "to compose letters and words on a surface",
        "rank": 135
    },
    "problem": {
        "def": "something that is difficult to deal with or needs to overcome",
        "rank": 136
    },
    "talk": {
        "def": "using words to express opinions or give information",
        "rank": 137
    },
    "try": {
        "def": "to make an effort, to attempt to do something",
        "rank": 138
    },
    "something": {
        "def": "a thing that is not yet know, specified or named",
        "rank": 139
    },
    "unclear": {
        "def": "not easy to understand",
        "rank": 140
    },
    "same": {
        "def": "identical, not different",
        "rank": 141
    },
    "great": {
        "def": "very large in size, extent or amount",
        "rank": 142
    },
    "number": {
        "def": "a word or symbol that stands for a specific amount or quantity",
        "rank": 143
    },
    "leave": {
        "def": "to go away from, depart from",
        "rank": 144
    },
    "little": {
        "def": "small in size, amount, or degree",
        "rank": 145
    },
    "both": {
        "def": "used to emphasis two things at the same time",
        "rank": 146
    },
    "meet": {
        "def": "to be introduced for the first time",
        "rank": 147
    },
    "help": {
        "def": "to assist in order to make it easier for someone to do a job",
        "rank": 148
    },
    "own": {
        "def": "when something belongs to someone",
        "rank": 149
    },
    "ask": {
        "def": "to request",
        "rank": 150
    },
    "part": {
        "def": "one of the pieces of a whole",
        "rank": 151
    },
    "country": {
        "def": "an area, nation that is controlled by government",
        "rank": 152
    },
    "put": {
        "def": "to move or place in a particular position",
        "rank": 153
    },
    "point": {
        "def": "an idea that you try to make others accept or understand",
        "rank": 154
    },
    "start": {
        "def": "to begin doing something",
        "rank": 155
    },
    "school": {
        "def": "a place where children go to learn",
        "rank": 156
    },
    "each": {
        "def": "every one of two more things",
        "rank": 157
    },
    "become": {
        "def": "to begin to be, grow to be, develop into",
        "rank": 158
    },
    "interest": {
        "def": "a feeling of wanting to know or learn about something",
        "rank": 159
    },
    "old": {
        "def": "having lived for many years, no longer young",
        "rank": 160
    },
    "off": {
        "def": "away from a place or at a distance",
        "rank": 161
    },
    "another": {
        "def": "one more in addition",
        "rank": 162
    },
    "different": {
        "def": "not of the same kind, unlike in nature",
        "rank": 163
    },
    "high": {
        "def": "rising upward a great distance",
        "rank": 164
    },
    "next": {
        "def": "coming immediately after this time",
        "rank": 165
    },
    "include": {
        "def": "to have as a part of a group",
        "rank": 166
    },
    "late": {
        "def": "happening near the end of a given time",
        "rank": 167
    },
    "why": {
        "def": "for what reason or purpose",
        "rank": 168
    },
    "live": {
        "def": "to be alive, to remain or continue to be alive",
        "rank": 169
    },
    "end": {
        "def": "a point that marks the limit of something",
        "rank": 170
    },
    "world": {
        "def": "the earth and all people and things on it",
        "rank": 171
    },
    "week": {
        "def": "a period of seven days,  starts on Sunday and end on Saturday",
        "rank": 172
    },
    "must": {
        "def": "used to say that something is required or necessary",
        "rank": 173
    },
    "while": {
        "def": "during the time that, at the same time",
        "rank": 174
    },
    "never": {
        "def": "not ever, not at any time",
        "rank": 175
    },
    "study": {
        "def": "devoting time to learn about something",
        "rank": 176
    },
    "kind": {
        "def": "having a friendly, gentle nature",
        "rank": 177
    },
    "report": {
        "def": "a story given about a particular matter",
        "rank": 178
    },
    "play": {
        "def": "to do activities for fun or enjoyment",
        "rank": 179
    },
    "house": {
        "def": "a building in which a family lives",
        "rank": 180
    },
    "group": {
        "def": "a number of people or things located or gathered together",
        "rank": 181
    },
    "might": {
        "def": "to say something is possible",
        "rank": 182
    },
    "home": {
        "def": "the place where a person or a family lives",
        "rank": 183
    },
    "course": {
        "def": "the route or direction that something moves along",
        "rank": 184
    },
    "let": {
        "def": "to allow or permit to do something",
        "rank": 185
    },
    "case": {
        "def": "an example or instance of something",
        "rank": 186
    },
    "system": {
        "def": "a set of related parts that move or work together",
        "rank": 187
    },
    "again": {
        "def": "one more time, once more",
        "rank": 188
    },
    "hear": {
        "def": "to be aware of sound, to perceive with the ear",
        "rank": 189
    },
    "woman": {
        "def": "an adult female human being",
        "rank": 190
    },
    "family": {
        "def": "a group of people who are related to each other",
        "rank": 191
    },
    "book": {
        "def": "a printed or written work that is bound together and has a cover",
        "rank": 192
    },
    "seem": {
        "def": "to appear to be something",
        "rank": 193
    },
    "around": {
        "def": "located on every side or along something",
        "rank": 194
    },
    "during": {
        "def": "throughout the entire time",
        "rank": 195
    },
    "keep": {
        "def": "to continue holding or retaining possession of",
        "rank": 196
    },
    "big": {
        "def": "large in size or extent",
        "rank": 197
    },
    "follow": {
        "def": "to come after, to move or travel behind",
        "rank": 198
    },
    "every": {
        "def": "including each person or thing in a group",
        "rank": 199
    },
    "question": {
        "def": "to ask for or elicit information",
        "rank": 200
    },
    "under": {
        "def": "to be below something",
        "rank": 201
    },
    "important": {
        "def": "having great significance",
        "rank": 202
    },
    "always": {
        "def": "at all times",
        "rank": 203
    },
    "friend": {
        "def": "a person who you like and enjoy being with",
        "rank": 204
    },
    "however": {
        "def": "used to introduce a different statement",
        "rank": 205
    },
    "set": {
        "def": "to put or stand something in a place or position",
        "rank": 206
    },
    "hand": {
        "def": "the body parts at the end of a person's arm",
        "rank": 207
    },
    "provide": {
        "def": "to make available, to supply for use",
        "rank": 208
    },
    "small": {
        "def": "little in size, not great in amount",
        "rank": 209
    },
    "turn": {
        "def": "to move around a central point",
        "rank": 210
    },
    "state": {
        "def": "a way of living or existing",
        "rank": 211
    },
    "begin": {
        "def": "to do the first part of an action, to start",
        "rank": 212
    },
    "run": {
        "def": "to move with your legs at a speed that is faster than walking",
        "rank": 213
    },
    "since": {
        "def": "because, for the reason that",
        "rank": 214
    },
    "early": {
        "def": "at or near the beginning of time, done before the expected time",
        "rank": 215
    },
    "money": {
        "def": "something used to pay for goods and services",
        "rank": 216
    },
    "few": {
        "def": "not many, a small number",
        "rank": 217
    },
    "bring": {
        "def": "to take or go with to a place,",
        "rank": 218
    },
    "market": {
        "def": "a place that products are bought and sold",
        "rank": 219
    },
    "information": {
        "def": "facts or data about a situation, person, event, etc.",
        "rank": 220
    },
    "area": {
        "def": "a part or section in a large place",
        "rank": 221
    },
    "move": {
        "def": "to cause to go in a specified direction or manner",
        "rank": 222
    },
    "business": {
        "def": "the activity of making, buying, selling or providing goods",
        "rank": 223
    },
    "service": {
        "def": "the action of helping or doing work for someone",
        "rank": 224
    },
    "government": {
        "def": "the group of people who officially control a country",
        "rank": 225
    },
    "fact": {
        "def": "something that is known or proved to be true",
        "rank": 226
    },
    "issue": {
        "def": "problems that people are talking or thinking about",
        "rank": 227
    },
    "thank": {
        "def": "to tell (someone) that you are grateful for something that he or she has done or given",
        "rank": 228
    },
    "large": {
        "def": "great in size, extent, or capacity",
        "rank": 229
    },
    "result": {
        "def": "a thing that is caused by something else that happened",
        "rank": 230
    },
    "read": {
        "def": "to look at and comprehend the meaning of something written",
        "rank": 231
    },
    "month": {
        "def": "one of the 12 periods of time a year is broken into  ",
        "rank": 232
    },
    "order": {
        "def": "an instruction or direction that must be obeyed",
        "rank": 233
    },
    "increase": {
        "def": "to become larger or greater in size, amount, or degree",
        "rank": 234
    },
    "name": {
        "def": "a word that addressed or refers to a specific person",
        "rank": 235
    },
    "love": {
        "def": "feel great affection for",
        "rank": 236
    },
    "word": {
        "def": "a unit of language that has a meaning",
        "rank": 237
    },
    "without": {
        "def": "not having or including something, in the absence of",
        "rank": 238
    },
    "open": {
        "def": "not closed",
        "rank": 239
    },
    "pay": {
        "def": "give money for goods or work done",
        "rank": 240
    },
    "offer": {
        "def": "to give someone the opportunity to accept something",
        "rank": 241
    },
    "build": {
        "def": "to construct by putting parts or materials together",
        "rank": 242
    },
    "I": {
        "def": "the person who is speaking or writing",
        "rank": 243
    },
    "hold": {
        "def": "to have or keep in your hand",
        "rank": 244
    },
    "happen": {
        "def": "to take place or occur",
        "rank": 245
    },
    "against": {
        "def": "in opposition to",
        "rank": 246
    },
    "away": {
        "def": "at a distance from a particular person or place",
        "rank": 247
    },
    "job": {
        "def": "the regular work of earning money",
        "rank": 248
    },
    "buy": {
        "def": "to get something by paying money for it;  purchase",
        "rank": 249
    },
    "though": {
        "def": "although, despite the fact that",
        "rank": 250
    },
    "today": {
        "def": "this day, this present day, at the present time",
        "rank": 251
    },
    "example": {
        "def": "a thing which is seen as a model",
        "rank": 252
    },
    "believe": {
        "def": "to accept that something is true",
        "rank": 253
    },
    "plan": {
        "def": "a set of actions as a way to do, detailed proposal for doing",
        "rank": 254
    },
    "second": {
        "def": "a unit of time, one sixtieth of a minute",
        "rank": 255
    },
    "program": {
        "def": "a plan of things that are done to achieve a result",
        "rank": 256
    },
    "student": {
        "def": "a person who attends a school",
        "rank": 257
    },
    "form": {
        "def": "a type or kind of something, the visible shape, style",
        "rank": 258
    },
    "young": {
        "def": "in an early stage of life  or growth",
        "rank": 259
    },
    "lead": {
        "def": "to guide someone to a place , to go with, be in charge",
        "rank": 260
    },
    "face": {
        "def": "the front part of a person's head, the surface of a thing",
        "rank": 261
    },
    "close": {
        "def": "to move so that things cannot path through",
        "rank": 262
    },
    "room": {
        "def": "a space that can be occupied which has its own floor and ceiling",
        "rank": 263
    },
    "hope": {
        "def": "a feeling of expectation, to want something to happen",
        "rank": 264
    },
    "cost": {
        "def": "the price of something",
        "rank": 265
    },
    "head": {
        "def": "the upper part of the body",
        "rank": 266
    },
    "car": {
        "def": "a vehicle with four wheels and engine that can carry things",
        "rank": 267
    },
    "understand": {
        "def": "to know, to perceive or comprehend something",
        "rank": 268
    },
    "hour": {
        "def": "a period of time equal to 60 minutes",
        "rank": 269
    },
    "far": {
        "def": "to a great distance in space or time",
        "rank": 270
    },
    "actually": {
        "def": "used when you are saying what is the truth of a situation",
        "rank": 271
    },
    "spend": {
        "def": "to use money to pay for something",
        "rank": 272
    },
    "level": {
        "def": "a specific height or line",
        "rank": 273
    },
    "city": {
        "def": "many people living in a place larger than a town",
        "rank": 274
    },
    "present": {
        "def": "existing or happening now, not in the past or future",
        "rank": 275
    },
    "less": {
        "def": "not so much, a smaller amount of",
        "rank": 276
    },
    "idea": {
        "def": "a thought, suggestion, opinion or plan",
        "rank": 277
    },
    "reason": {
        "def": "a cause for an action or event",
        "rank": 278
    },
    "learn": {
        "def": "to acquire knowledge by study or experience",
        "rank": 279
    },
    "until": {
        "def": "up to, to indicate the point in time when a particular situation",
        "rank": 280
    },
    "member": {
        "def": "a person or country belonging to a group or team",
        "rank": 281
    },
    "process": {
        "def": "a series of actions that produce achievement",
        "rank": 282
    },
    "person": {
        "def": "a human being",
        "rank": 283
    },
    "experience": {
        "def": "the act of having things happen to you",
        "rank": 284
    },
    "night": {
        "def": "the period of time of darkness between sunset and sunrise",
        "rank": 285
    },
    "support": {
        "def": "to give assistance to",
        "rank": 286
    },
    "sure": {
        "def": "completely confident of being right, not having any doubt",
        "rank": 287
    },
    "sort": {
        "def": "a group of people or things that have some shared quality",
        "rank": 288
    },
    "quite": {
        "def": "to a very large degree, very",
        "rank": 289
    },
    "bad": {
        "def": "low or poor in quality, not correct or proper",
        "rank": 290
    },
    "once": {
        "def": "one time only",
        "rank": 291
    },
    "enough": {
        "def": "equal to what is needed, as much as required",
        "rank": 292
    },
    "although": {
        "def": "despite the fact that, however, ",
        "rank": 293
    },
    "within": {
        "def": "inside something",
        "rank": 294
    },
    "age": {
        "def": "the amount of time a person has lived",
        "rank": 295
    },
    "term": {
        "def": "a word or phrase that describes something else",
        "rank": 296
    },
    "whether": {
        "def": "expressing a doubt between alternatives",
        "rank": 297
    },
    "able": {
        "def": "having the power, skill, money, or means to do something",
        "rank": 298
    },
    "share": {
        "def": "to have or use something with others",
        "rank": 299
    },
    "line": {
        "def": "a long narrow mark or band on a surface ",
        "rank": 300
    },
    "product": {
        "def": "something that is made or grown to be sold or used",
        "rank": 301
    },
    "speak": {
        "def": "to use words to tell information or express thoughts",
        "rank": 302
    },
    "side": {
        "def": "a position or direction that is away from the center",
        "rank": 303
    },
    "train": {
        "def": "a group of connected vehicles traveling on railways",
        "rank": 304
    },
    "soon": {
        "def": "at a time not long from now",
        "rank": 305
    },
    "low": {
        "def": "not rising or extending upward",
        "rank": 306
    },
    "price": {
        "def": "the amount of money that you pay for something or that something costs",
        "rank": 307
    },
    "public": {
        "def": "concerning or affecting all or most of the people in a group",
        "rank": 308
    },
    "often": {
        "def": "many times, frequently, on many occasions",
        "rank": 309
    },
    "possible": {
        "def": "to be able to be done",
        "rank": 310
    },
    "least": {
        "def": "smallest in amount, extent or degree",
        "rank": 311
    },
    "parent": {
        "def": "a person who is a father or mother",
        "rank": 312
    },
    "consider": {
        "def": "to think about carefully",
        "rank": 313
    },
    "effect": {
        "def": "a change or results of something being done",
        "rank": 314
    },
    "rather": {
        "def": "to a certain extent",
        "rank": 315
    },
    "control": {
        "def": "to direct or influence the behavior of something or someone",
        "rank": 316
    },
    "view": {
        "def": "an opinion or way of thinking",
        "rank": 317
    },
    "story": {
        "def": "a description of how something happened",
        "rank": 318
    },
    "local": {
        "def": "relating or restricted to a particular area, city, or town",
        "rank": 319
    },
    "anything": {
        "def": "a thing of any kind, used to refer to a thing, no matter what",
        "rank": 320
    },
    "together": {
        "def": "to be with each other or in one group",
        "rank": 321
    },
    "value": {
        "def": "the amount of money something is worth",
        "rank": 322
    },
    "hard": {
        "def": "something that is firm or difficult to bend",
        "rank": 323
    },
    "stand": {
        "def": "to be in an upright position supported by on your feet",
        "rank": 324
    },
    "visit": {
        "def": "to go somewhere to spend time with",
        "rank": 325
    },
    "watch": {
        "def": "to pay attention to what is happening",
        "rank": 326
    },
    "color": {
        "def": "a quality such as red, blue, green, etc.",
        "rank": 327
    },
    "party": {
        "def": "an organization of people who have the same political beliefs ",
        "rank": 328
    },
    "bit": {
        "def": "a small piece of something",
        "rank": 329
    },
    "continue": {
        "def": "to do something without stopping",
        "rank": 330
    },
    "ever": {
        "def": "at any time, at all times",
        "rank": 331
    },
    "eye": {
        "def": "the part of the body that you see with",
        "rank": 332
    },
    "base": {
        "def": "the bottom or lowest part of something : the part on which something rests or is supported ",
        "rank": 333
    },
    "concern": {
        "def": "a feeling of worry or anxiety",
        "rank": 334
    },
    "letter": {
        "def": "a written, typed or printed message",
        "rank": 335
    },
    "center": {
        "def": "the middle point or part",
        "rank": 336
    },
    "lose": {
        "def": "to be unable to find something you once had",
        "rank": 337
    },
    "yet": {
        "def": "until now, up until the present",
        "rank": 338
    },
    "almost": {
        "def": "only a little less than, nearly, not quite",
        "rank": 339
    },
    "development": {
        "def": "when someone or something grows or changes and becomes more advanced",
        "rank": 340
    },
    "already": {
        "def": "before this time",
        "rank": 341
    },
    "test": {
        "def": "a set of questions designed to measure a person's ability",
        "rank": 342
    },
    "probably": {
        "def": "used to mean that something is very likely",
        "rank": 343
    },
    "sale": {
        "def": "the act of selling something or exchanging for money",
        "rank": 344
    },
    "rate": {
        "def": "the measure of speed or frequency over a particular period of time ",
        "rank": 345
    },
    "nothing": {
        "def": "not anything, no a single thing",
        "rank": 346
    },
    "whole": {
        "def": "complete or full, all of something",
        "rank": 347
    },
    "suggest": {
        "def": "to mention something as a possible thing to be done",
        "rank": 348
    },
    "language": {
        "def": "the system of words or signs that people use to express thoughts and feelings to each other ",
        "rank": 349
    },
    "deal": {
        "def": "to trade or do business with someone",
        "rank": 350
    },
    "send": {
        "def": "to cause to go to another destination",
        "rank": 351
    },
    "expect": {
        "def": "to be regarded as likely to happen",
        "rank": 352
    },
    "fall": {
        "def": "to come or go down from a higher to a lower place",
        "rank": 353
    },
    "return": {
        "def": "to come back to a place again",
        "rank": 354
    },
    "water": {
        "def": "the clear liquid which forms the seas, rivers and rain",
        "rank": 355
    },
    "per": {
        "def": "for each one, by means of, as directed by or stated in",
        "rank": 356
    },
    "allow": {
        "def": "to permit or treat as acceptable",
        "rank": 357
    },
    "cause": {
        "def": "something that produces an effect",
        "rank": 358
    },
    "power": {
        "def": "the ability, capacity or right to control things",
        "rank": 359
    },
    "sit": {
        "def": "to be in a resting position on a chair or couch",
        "rank": 360
    },
    "walk": {
        "def": "to move with your legs, to go on foot",
        "rank": 361
    },
    "mother": {
        "def": "a female who has a child or children",
        "rank": 362
    },
    "among": {
        "def": "situated centrally, in relation to several things",
        "rank": 363
    },
    "care": {
        "def": "effort made to do something correctly or well",
        "rank": 364
    },
    "subject": {
        "def": "the thing being discussed or described",
        "rank": 365
    },
    "develop": {
        "def": "to cause to grow or bigger or more advanced",
        "rank": 366
    },
    "stay": {
        "def": "to continue to be in the same place;  remain",
        "rank": 367
    },
    "record": {
        "def": "an official piece of evidence or document about past events",
        "rank": 368
    },
    "mind": {
        "def": "the part of person that enables us to think, feel, and reason",
        "rank": 369
    },
    "remember": {
        "def": "to bring a previous image or idea to your mind",
        "rank": 370
    },
    "past": {
        "def": "a time before the present",
        "rank": 371
    },
    "office": {
        "def": "a building of set of rooms used to do business or professional activities",
        "rank": 372
    },
    "force": {
        "def": "to use physical strength, power, or energy used on something",
        "rank": 373
    },
    "grow": {
        "def": "to become larger",
        "rank": 374
    },
    "town": {
        "def": "a place people live, larger than a village, smaller than a city",
        "rank": 375
    },
    "light": {
        "def": "the form of energy that makes things visible",
        "rank": 376
    },
    "stop": {
        "def": "to not move or come to an end",
        "rank": 377
    },
    "several": {
        "def": "more than two but not many",
        "rank": 378
    },
    "period": {
        "def": "a length or portion of time during a series of events",
        "rank": 379
    },
    "class": {
        "def": "a group of students who often meet and are taught together",
        "rank": 380
    },
    "matter": {
        "def": "the physical substance things are made of",
        "rank": 381
    },
    "food": {
        "def": "the things that people and animals eat",
        "rank": 382
    },
    "social": {
        "def": "involving activities among people",
        "rank": 383
    },
    "require": {
        "def": "to need something, to make it necessary",
        "rank": 384
    },
    "political": {
        "def": "relating to government or public affairs",
        "rank": 385
    },
    "win": {
        "def": "to achieve victory in a fight or game",
        "rank": 386
    },
    "decide": {
        "def": "to make a choice about something or choose after thinking",
        "rank": 387
    },
    "staff": {
        "def": "a group of people who work for an organization or business",
        "rank": 388
    },
    "figure": {
        "def": "a an amount that is expressed in numbers",
        "rank": 389
    },
    "real": {
        "def": "actually existing or happening, not imagined or supposed",
        "rank": 390
    },
    "future": {
        "def": "the period of time coming after the present",
        "rank": 391
    },
    "policy": {
        "def": "a course of action proposed by an organization",
        "rank": 392
    },
    "answer": {
        "def": "a reaction to a question someone asks",
        "rank": 393
    },
    "laugh": {
        "def": "to show that you are happy or that you think something is funny by smiling and making a sound from your throat",
        "rank": 394
    },
    "remain": {
        "def": "to be left behind, to continue to exist",
        "rank": 395
    },
    "ago": {
        "def": "in the past",
        "rank": 396
    },
    "type": {
        "def": "a particular category of people or objects with a common characteristic",
        "rank": 397
    },
    "shop": {
        "def": "a building or room where goods and services are sold",
        "rank": 398
    },
    "security": {
        "def": "the things that are done to keep someone or something safe",
        "rank": 399
    },
    "receive": {
        "def": "to get or be presented with something",
        "rank": 400
    },
    "note": {
        "def": "a brief, short record of something",
        "rank": 401
    },
    "minute": {
        "def": "a period of time equal to 60 seconds",
        "rank": 402
    },
    "fund": {
        "def": "a sum of money that is used for a special purpose",
        "rank": 403
    },
    "top": {
        "def": "the highest part, point, or level of something",
        "rank": 404
    },
    "game": {
        "def": "one of the games that are part of a larger contest",
        "rank": 405
    },
    "involve": {
        "def": "to have or include in a part of something",
        "rank": 406
    },
    "account": {
        "def": "a story or report about something",
        "rank": 407
    },
    "half": {
        "def": "one of two equal parts something can be divided into",
        "rank": 408
    },
    "history": {
        "def": "the study of past event",
        "rank": 409
    },
    "create": {
        "def": "to make, cause, or bring into existence",
        "rank": 410
    },
    "break": {
        "def": "to separate into pieces",
        "rank": 411
    },
    "moment": {
        "def": "a very short or brief period of time",
        "rank": 412
    },
    "individual": {
        "def": "existing as just one member",
        "rank": 413
    },
    "across": {
        "def": "from one side to the other of something",
        "rank": 414
    },
    "either": {
        "def": "one or the other of two",
        "rank": 415
    },
    "music": {
        "def": "the art of making sounds that are sung or played",
        "rank": 416
    },
    "further": {
        "def": "at a more distant place than here",
        "rank": 417
    },
    "reach": {
        "def": "to come to or arrive at a goal or destination",
        "rank": 418
    },
    "clear": {
        "def": "very obvious or easy to perceive",
        "rank": 419
    },
    "rule": {
        "def": "something that is not allowed in some situations",
        "rank": 420
    },
    "computer": {
        "def": "an electronic machine that can store and process large amounts of information",
        "rank": 421
    },
    "wait": {
        "def": "to stay or remain until an expected event happens",
        "rank": 422
    },
    "sound": {
        "def": "something that is heard",
        "rank": 423
    },
    "team": {
        "def": "a group of people who compete in a sport, game",
        "rank": 424
    },
    "along": {
        "def": "at a point on something",
        "rank": 425
    },
    "research": {
        "def": "careful study to find and report new knowledge",
        "rank": 426
    },
    "appear": {
        "def": "come into sight",
        "rank": 427
    },
    "drive": {
        "def": "to control the movement of a car",
        "rank": 428
    },
    "activity": {
        "def": "something which you do for enjoyment; action",
        "rank": 429
    },
    "black": {
        "def": "having the very dark color of coal or the night sky",
        "rank": 430
    },
    "produce": {
        "def": "to use machines to make something from raw materials",
        "rank": 431
    },
    "free": {
        "def": "without control by others",
        "rank": 432
    },
    "general": {
        "def": "widespread, normal or usual",
        "rank": 433
    },
    "body": {
        "def": "a person's physical self",
        "rank": 434
    },
    "toward": {
        "def": "in the direction of",
        "rank": 435
    },
    "please": {
        "def": "used to ask for something in a polite way",
        "rank": 436
    },
    "sense": {
        "def": "one of our natural abilities for receiving information",
        "rank": 437
    },
    "perhaps": {
        "def": "possibly but not certainly, maybe",
        "rank": 438
    },
    "add": {
        "def": "to put something together with another thing",
        "rank": 439
    },
    "everything": {
        "def": "every thing there is or all that exists",
        "rank": 440
    },
    "law": {
        "def": "the system or rules made by the government",
        "rank": 441
    },
    "easy": {
        "def": "not hard to do, not difficult",
        "rank": 442
    },
    "sell": {
        "def": "to exchange (something) for money",
        "rank": 443
    },
    "full": {
        "def": "containing or holding as much as possible",
        "rank": 444
    },
    "film": {
        "def": "movie or a special material that is used for taking photographs ",
        "rank": 445
    },
    "model": {
        "def": "a usually small copy of something ",
        "rank": 446
    },
    "war": {
        "def": "a period of fighting or conflict between countries, ",
        "rank": 447
    },
    "forward": {
        "def": "toward the front : to or toward what is ahead or in front ",
        "rank": 448
    },
    "himself": {
        "def": "the reflexive form of the pronoun 'he'",
        "rank": 449
    },
    "maybe": {
        "def": "possibly but not certainly : perhaps",
        "rank": 450
    },
    "design": {
        "def": "to make something for a specific use or purpose",
        "rank": 451
    },
    "morning": {
        "def": "the early part of the day",
        "rank": 452
    },
    "pass": {
        "def": "to move past something",
        "rank": 453
    },
    "condition": {
        "def": "a way or quality of living or existing",
        "rank": 454
    },
    "near": {
        "def": "close to something",
        "rank": 455
    },
    "door": {
        "def": "a movable entrance to a building or room",
        "rank": 456
    },
    "human": {
        "def": "relating to or characteristic of people",
        "rank": 457
    },
    "above": {
        "def": "in a higher place",
        "rank": 458
    },
    "available": {
        "def": "when something is there to be used easily",
        "rank": 459
    },
    "position": {
        "def": "the place something is located in",
        "rank": 460
    },
    "agree": {
        "def": "to  the same opinion about something",
        "rank": 461
    },
    "short": {
        "def": "a small distance from one end to the other ",
        "rank": 462
    },
    "situation": {
        "def": "a condition, location or position",
        "rank": 463
    },
    "paper": {
        "def": "the material that is used in the form of thin sheets for writing",
        "rank": 464
    },
    "cover": {
        "def": "put something over or on top of something else",
        "rank": 465
    },
    "major": {
        "def": "important, serious,  or large in number",
        "rank": 466
    },
    "customer": {
        "def": "someone who buys goods or services from a business ",
        "rank": 467
    },
    "father": {
        "def": "a male parent",
        "rank": 468
    },
    "bear": {
        "def": "to accept or endure difficulties",
        "rank": 469
    },
    "choose": {
        "def": "to decide that a particular person or thing is the one that you want",
        "rank": 470
    },
    "main": {
        "def": " most important",
        "rank": 471
    },
    "describe": {
        "def": "to tell someone the appearance, sound or smell of",
        "rank": 472
    },
    "someone": {
        "def": "some person;  somebody",
        "rank": 473
    },
    "date": {
        "def": "a particular day of a month or year ",
        "rank": 474
    },
    "event": {
        "def": "something especially something important or notable that happens",
        "rank": 475
    },
    "nice": {
        "def": "giving pleasure or joy : good and enjoyable ",
        "rank": 476
    },
    "special": {
        "def": "different from what is usual, better or greater than normal",
        "rank": 477
    },
    "certain": {
        "def": "not having any doubt about something",
        "rank": 478
    },
    "phone": {
        "def": "a communication system that is used to talk to someone who is in another place",
        "rank": 479
    },
    "join": {
        "def": "to put or bring (two or more things) together ",
        "rank": 480
    },
    "else": {
        "def": "in a different or additional manner or place",
        "rank": 481
    },
    "girl": {
        "def": "a female child,  a young woman",
        "rank": 482
    },
    "sometimes": {
        "def": "occasionally; only at certain times,",
        "rank": 483
    },
    "table": {
        "def": "a piece of furniture with a flat top and legs",
        "rank": 484
    },
    "community": {
        "def": "a group of people who share a common idea or area",
        "rank": 485
    },
    "carry": {
        "def": "to move something from one place to another",
        "rank": 486
    },
    "decision": {
        "def": "a choice that you make about something after thinking about it",
        "rank": 487
    },
    "role": {
        "def": "the character played by an actor",
        "rank": 488
    },
    "president": {
        "def": "the head of a government",
        "rank": 489
    },
    "particular": {
        "def": "used to single out an individual member",
        "rank": 490
    },
    "cut": {
        "def": "to use a sharp tool or object to open or divide something",
        "rank": 491
    },
    "difference": {
        "def": "a quality that is unlike something else",
        "rank": 492
    },
    "die": {
        "def": "to stop living or end life",
        "rank": 493
    },
    "eat": {
        "def": "to take food into your mouth and swallow it",
        "rank": 494
    },
    "enjoy": {
        "def": "to take pleasure in (something) ",
        "rank": 495
    },
    "rise": {
        "def": "to move from a lower position to a higher one",
        "rank": 496
    },
    "especially": {
        "def": "more than usually;  very, extremely",
        "rank": 497
    },
    "detail": {
        "def": "a small part of something",
        "rank": 498
    },
    "data": {
        "def": "facts or information used usually to calculate or analyze",
        "rank": 499
    },
    "charge": {
        "def": "to ask for money as a price for a service or goods",
        "rank": 500
    },
    "practice": {
        "def": "to do something again and again in order to become better at it",
        "rank": 501
    },
    "cell": {
        "def": "the smallest living part of an animal or a plant",
        "rank": 502
    },
    "improve": {
        "def": "to make or to become something better",
        "rank": 503
    },
    "kid": {
        "def": "a child or young person",
        "rank": 504
    },
    "action": {
        "def": "something that a person does",
        "rank": 505
    },
    "strong": {
        "def": "having physical power or strength",
        "rank": 506
    },
    "happy": {
        "def": "feeling pleasure and enjoyment because of your life",
        "rank": 507
    },
    "health": {
        "def": "the condition of being well or free from disease",
        "rank": 508
    },
    "economic": {
        "def": "relating to trade, industry, and money",
        "rank": 509
    },
    "difficult": {
        "def": "not easy : requiring much work or skill to do or make ",
        "rank": 510
    },
    "regard": {
        "def": "to care or think about something in a specific way",
        "rank": 511
    },
    "travel": {
        "def": "to go on a trip or journey : to go to a place and especially one that is far away ",
        "rank": 512
    },
    "approach": {
        "def": "to get close to reaching something or somewhere",
        "rank": 513
    },
    "amount": {
        "def": "a quantity of something",
        "rank": 514
    },
    "investment": {
        "def": "the money that you put in a bank, business, etc. in order to make a profit",
        "rank": 515
    },
    "white": {
        "def": "having the color of snow, to be light or pale in color",
        "rank": 516
    },
    "draw": {
        "def": "to produce by making lines on a paper",
        "rank": 517
    },
    "site": {
        "def": "the place where something is, was, or will be located",
        "rank": 518
    },
    "round": {
        "def": "shaped like a circle or ball ",
        "rank": 519
    },
    "behind": {
        "def": "in or toward the back",
        "rank": 520
    },
    "claim": {
        "def": "to say something is true when others may not agree",
        "rank": 521
    },
    "step": {
        "def": "moving by lifting  a foot and putting it down in a different place",
        "rank": 522
    },
    "patient": {
        "def": "able to remain calm and not become annoyed when waiting for a long time or when dealing with problems or difficult people",
        "rank": 523
    },
    "true": {
        "def": "agreeing with the facts, not false, real or actual",
        "rank": 524
    },
    "teacher": {
        "def": "someone whose job is to teach in a school, college, etc.",
        "rank": 525
    },
    "range": {
        "def": "the area of variation on a particular scale",
        "rank": 526
    },
    "percent": {
        "def": "a certain part of a whole ",
        "rank": 527
    },
    "themselves": {
        "def": "the reflexive form of the pronoun 'they'",
        "rank": 528
    },
    "organization": {
        "def": "an official group of people who work together for the same purpose",
        "rank": 529
    },
    "vote": {
        "def": "to make an official choice for or against someone or something",
        "rank": 530
    },
    "front": {
        "def": "the forward part of an object",
        "rank": 531
    },
    "measure": {
        "def": "an amount or degree of something, ascertain in size or degree",
        "rank": 532
    },
    "trade": {
        "def": "the activity of buying, selling, or exchanging",
        "rank": 533
    },
    "therefore": {
        "def": "for that reason or because of that",
        "rank": 534
    },
    "finally": {
        "def": "after a long time or some difficulty;  the last point or idea",
        "rank": 535
    },
    "raise": {
        "def": "to lift or move something to a higher position",
        "rank": 536
    },
    "wear": {
        "def": "to use or have as clothing over part of your body",
        "rank": 537
    },
    "industry": {
        "def": "referring to the making of all products in a given field",
        "rank": 538
    },
    "explain": {
        "def": "to make clear or easy to understand by describing",
        "rank": 539
    },
    "relationship": {
        "def": "a connection between two or more people or things",
        "rank": 540
    },
    "quality": {
        "def": "how good or bad something is ",
        "rank": 541
    },
    "accord": {
        "def": "a formal or official agreement",
        "rank": 542
    },
    "outside": {
        "def": "an area around or near something such as a building",
        "rank": 543
    },
    "wish": {
        "def": "to want something to be true or to happen",
        "rank": 544
    },
    "death": {
        "def": "the end of life, the fact of dying, being killed",
        "rank": 545
    },
    "project": {
        "def": "a planned piece of work for specific purpose",
        "rank": 546
    },
    "land": {
        "def": "the solid part of the surface of the Earth",
        "rank": 547
    },
    "sign": {
        "def": "something which shows that something else exists, is true, or will happen",
        "rank": 548
    },
    "boy": {
        "def": "a male child or youth, a young man",
        "rank": 549
    },
    "news": {
        "def": " new information or a report about something that has happened recently",
        "rank": 550
    },
    "risk": {
        "def": "the possibility that something bad or unpleasant (such as an injury or a loss) will happen ",
        "rank": 551
    },
    "total": {
        "def": "the whole number or amount of something",
        "rank": 552
    },
    "couple": {
        "def": "two people or things being together",
        "rank": 553
    },
    "national": {
        "def": "relating to the whole of a country",
        "rank": 554
    },
    "list": {
        "def": "a series of written names, words or numbers ",
        "rank": 555
    },
    "opportunity": {
        "def": "an amount of time or a situation in which something can be done",
        "rank": 556
    },
    "act": {
        "def": "take action",
        "rank": 557
    },
    "sport": {
        "def": "a contest or game in which people do certain physical activities according to a specific set of rules and compete against each other",
        "rank": 558
    },
    "road": {
        "def": "a hard flat surface for people or vehicles can use",
        "rank": 559
    },
    "kill": {
        "def": "to cause the death of a person, animal or plant",
        "rank": 560
    },
    "serve": {
        "def": "to give or provide something to another person",
        "rank": 561
    },
    "education": {
        "def": "the process of giving or receiving instruction",
        "rank": 562
    },
    "picture": {
        "def": "a painting, drawing or photograph on paper or screen ",
        "rank": 563
    },
    "likely": {
        "def": "used to indicate the chance that something will happen",
        "rank": 564
    },
    "standard": {
        "def": "a level of quality or achievement that is considered acceptable",
        "rank": 565
    },
    "benefit": {
        "def": "a good result or effect, something helpful",
        "rank": 566
    },
    "stage": {
        "def": "a particular point in a process",
        "rank": 567
    },
    "performance": {
        "def": " an activity (such as singing a song or acting in a play) that a person or group does to entertain an audience ",
        "rank": 568
    },
    "rest": {
        "def": "not at work, to have time to relax, sleep or do nothing",
        "rank": 569
    },
    "certainly": {
        "def": "used to emphasize something and show that there is no doubt about it; used to agree to a request",
        "rank": 570
    },
    "culture": {
        "def": "the beliefs and customs of a particular group",
        "rank": 571
    },
    "focus": {
        "def": "the main purpose or center of interest or activity",
        "rank": 572
    },
    "itself": {
        "def": "the reflexive form of the pronoun 'it'",
        "rank": 573
    },
    "arrive": {
        "def": "to come to or reach a place after traveling, being sent, etc.",
        "rank": 574
    },
    "employee": {
        "def": "a person who works for another person or for a company for wages or a salary ",
        "rank": 575
    },
    "upon": {
        "def": "more formal term for \"on\"",
        "rank": 576
    },
    "voice": {
        "def": "the sound a person produces with their mouth",
        "rank": 577
    },
    "due": {
        "def": "required or expected to happen : expected to be in a particular place at a particular time ",
        "rank": 578
    },
    "technology": {
        "def": "the use, knowledge of science in industry, engineering",
        "rank": 579
    },
    "field": {
        "def": "an open area of land, especially without trees or buildings",
        "rank": 580
    },
    "air": {
        "def": "the invisible mixture of gases that we breathe",
        "rank": 581
    },
    "material": {
        "def": "a substance from which a thing is made of",
        "rank": 582
    },
    "current": {
        "def": "happening or existing now :belonging to or existing in the present time ",
        "rank": 583
    },
    "teach": {
        "def": "to instruct or help to learn",
        "rank": 584
    },
    "financial": {
        "def": "relating to money or how money is managed",
        "rank": 585
    },
    "century": {
        "def": "a period of 100 years",
        "rank": 586
    },
    "society": {
        "def": "a community of people living together",
        "rank": 587
    },
    "analysis": {
        "def": "the process of analyzing something",
        "rank": 588
    },
    "limit": {
        "def": "a point beyond which it is not possible to pass",
        "rank": 589
    },
    "evidence": {
        "def": "something that makes you believe that something is true or exists",
        "rank": 590
    },
    "reduce": {
        "def": "to make something smaller in size, amount or number",
        "rank": 591
    },
    "listen": {
        "def": "to pay attention to someone or something in order to hear what is being said, sung, played, etc. ",
        "rank": 592
    },
    "usually": {
        "def": "in the way that most often happens",
        "rank": 593
    },
    "lie": {
        "def": "to be in a horizontal or flat position",
        "rank": 594
    },
    "foot": {
        "def": "the part of the leg below ankle",
        "rank": 595
    },
    "single": {
        "def": "not having or including another, only one",
        "rank": 596
    },
    "common": {
        "def": "something that is found or done often",
        "rank": 597
    },
    "space": {
        "def": "the amount of an area, room, or surface",
        "rank": 598
    },
    "realize": {
        "def": "to understand or become aware of something",
        "rank": 599
    },
    "former": {
        "def": "used to say what someone or something was in the past",
        "rank": 600
    },
    "animal": {
        "def": " a living thing that is not a human being or plant ",
        "rank": 601
    },
    "instead": {
        "def": "used to say that one thing is done or is chosen when another is not chosen",
        "rank": 602
    },
    "similar": {
        "def": "almost the same, alike as something else",
        "rank": 603
    },
    "thus": {
        "def": "as a result, in this way",
        "rank": 604
    },
    "address": {
        "def": "the words and numbers that are used to describe the location of a building and that are written on letters, envelopes, and packages so that they can be mailed to that location ",
        "rank": 605
    },
    "leader": {
        "def": "a person in control of a group, country, or situation",
        "rank": 606
    },
    "complete": {
        "def": "having all necessary parts",
        "rank": 607
    },
    "arm": {
        "def": "each of the two long body parts from shoulder to the hand",
        "rank": 608
    },
    "function": {
        "def": "a particular purpose for which something is used",
        "rank": 609
    },
    "chance": {
        "def": "an opportunity to do something;  an amount of time or a situation in which something can be done",
        "rank": 610
    },
    "mention": {
        "def": "to talk about, write about, or refer to (something or someone) especially in a brief way ",
        "rank": 611
    },
    "factor": {
        "def": "something that influences a result",
        "rank": 612
    },
    "contact": {
        "def": "the state or condition where two things are touching",
        "rank": 613
    },
    "response": {
        "def": " an answer or reaction to something that has been said or done",
        "rank": 614
    },
    "demand": {
        "def": "forcefully saying that something must be done or given to you",
        "rank": 615
    },
    "exist": {
        "def": "to have actual being or to be real",
        "rank": 616
    },
    "accept": {
        "def": "to receive or take something that is offered",
        "rank": 617
    },
    "save": {
        "def": "to keep (someone or something) safe : to stop (someone or something) from dying or being hurt, damaged, or lost ",
        "rank": 618
    },
    "opinion": {
        "def": "a belief, judgment, or way of thinking about something : what someone thinks about a particular thing",
        "rank": 619
    },
    "pick": {
        "def": "to choose or select (someone or something) from a group ",
        "rank": 620
    },
    "wrong": {
        "def": " not agreeing with the facts or truth : incorrect ",
        "rank": 621
    },
    "apply": {
        "def": "to ask formally for something such as a job",
        "rank": 622
    },
    "compare": {
        "def": "to say that (something) is similar to something else ",
        "rank": 623
    },
    "suppose": {
        "def": "to think of something as happening or being true in order to imagine what might happen",
        "rank": 624
    },
    "choice": {
        "def": " the act of choosing : the act of picking or deciding between two or more possibilities ",
        "rank": 625
    },
    "structure": {
        "def": "the way that something is built, arranged, or organized",
        "rank": 626
    },
    "fight": {
        "def": "take part in a battle to defeat an enemy",
        "rank": 627
    },
    "relate": {
        "def": "to show or make a connection between (two or more things) ",
        "rank": 628
    },
    "firm": {
        "def": "fairy hard or solid; not soft",
        "rank": 629
    },
    "feature": {
        "def": "a distinctive or important point of something",
        "rank": 630
    },
    "ground": {
        "def": "the solid surface of the earth that we stand on",
        "rank": 631
    },
    "effort": {
        "def": "work done by the mind or body",
        "rank": 632
    },
    "source": {
        "def": "produces or provides what is wanted or needed",
        "rank": 633
    },
    "pretty": {
        "def": "large or impressive",
        "rank": 634
    },
    "campaign": {
        "def": "a series of organized activities or events intended to achieve a result",
        "rank": 635
    },
    "check": {
        "def": "to look at (something) carefully to find mistakes, problems, etc.",
        "rank": 636
    },
    "okay": {
        "def": "used when agreeing to do something or when allowing someone to do something",
        "rank": 637
    },
    "street": {
        "def": "a public road in a city or town",
        "rank": 638
    },
    "foreign": {
        "def": "coming from or belonging to a different place or country",
        "rank": 639
    },
    "attention": {
        "def": "an act or power of carefully thinking about",
        "rank": 640
    },
    "personal": {
        "def": "relating to or belonging to a particular person; someone's private information",
        "rank": 641
    },
    "particularly": {
        "def": "especially",
        "rank": 642
    },
    "park": {
        "def": "a piece of public land in or near a city that can be used for pleasure and exercise",
        "rank": 643
    },
    "whose": {
        "def": "used in questions to ask who owns something, has something, etc. ",
        "rank": 644
    },
    "knowledge": {
        "def": "information, understanding, or skill that you get from experience or education",
        "rank": 645
    },
    "contain": {
        "def": "to have something inside or include something",
        "rank": 646
    },
    "official": {
        "def": "of or relating to the job or work of someone in a position of authority ",
        "rank": 647
    },
    "court": {
        "def": "a formal legal meeting place that judges about crimes",
        "rank": 648
    },
    "bank": {
        "def": " the higher ground that is along the edge of a river, stream, etc. ",
        "rank": 649
    },
    "article": {
        "def": " a piece of writing about a particular subject that is included in a magazine, newspaper, etc. ",
        "rank": 650
    },
    "wife": {
        "def": "a married woman",
        "rank": 651
    },
    "management": {
        "def": "the people who are in control of an office, shop, team, etc.",
        "rank": 652
    },
    "manager": {
        "def": "someone in control of an office, shop, team, etc.",
        "rank": 653
    },
    "section": {
        "def": "one of the parts that form something",
        "rank": 654
    },
    "finish": {
        "def": " to reach the end of (something) : to stop doing (something) because it is completed",
        "rank": 655
    },
    "guy": {
        "def": "a man",
        "rank": 656
    },
    "fine": {
        "def": "good, acceptable, or satisfactory",
        "rank": 657
    },
    "store": {
        "def": "a building or room where things are sold ",
        "rank": 658
    },
    "attack": {
        "def": "to act violently against or to try to hurt, injure or destroy",
        "rank": 659
    },
    "discuss": {
        "def": " to talk about (something) with another person or group ",
        "rank": 660
    },
    "stock": {
        "def": "the supply of goods available for sale in a store",
        "rank": 661
    },
    "prepare": {
        "def": "to make something ready for use ",
        "rank": 662
    },
    "fire": {
        "def": "the light, heat and the flame produced by burning something",
        "rank": 663
    },
    "piece": {
        "def": "a part that is cut or separated from a whole",
        "rank": 664
    },
    "heart": {
        "def": "the organ in your chest that pumps blood through your body",
        "rank": 665
    },
    "forget": {
        "def": "to be unable to think of or remember (something)",
        "rank": 666
    },
    "police": {
        "def": "the people or the department of people who enforce laws, investigate crimes, and make arrests",
        "rank": 667
    },
    "recent": {
        "def": "happening or beginning not long ago, close to the present",
        "rank": 668
    },
    "behavior": {
        "def": "the way a person or animal acts or behaves",
        "rank": 669
    },
    "represent": {
        "def": "to act or speak officially for someone or something",
        "rank": 670
    },
    "growth": {
        "def": "the process of growing",
        "rank": 671
    },
    "page": {
        "def": "one side of a sheet of paper especially in a book, magazine, etc. ",
        "rank": 672
    },
    "holiday": {
        "def": "a special day of celebration ",
        "rank": 673
    },
    "affect": {
        "def": "to make an effect on someone or something",
        "rank": 674
    },
    "establish": {
        "def": "to set or create something that last for a long time",
        "rank": 675
    },
    "wonder": {
        "def": "something that is very surprising or amazing",
        "rank": 676
    },
    "poor": {
        "def": "having little money or few possessions : not having enough money for the basic things that people need to live properly ",
        "rank": 677
    },
    "manage": {
        "def": "to control or be in charge of something",
        "rank": 678
    },
    "addition": {
        "def": "a new or extra thing which is added to something",
        "rank": 679
    },
    "bed": {
        "def": "a piece of furniture that people sleep on",
        "rank": 680
    },
    "simply": {
        "def": "in a way which is not complicated or difficult to understand",
        "rank": 681
    },
    "recently": {
        "def": "not long ago",
        "rank": 682
    },
    "yesterday": {
        "def": "the day before today",
        "rank": 683
    },
    "surprise": {
        "def": "an unexpected event, piece of information, etc.",
        "rank": 684
    },
    "sorry": {
        "def": "feeling sorrow or regret ",
        "rank": 685
    },
    "art": {
        "def": "a human creative skill using the imagination",
        "rank": 686
    },
    "method": {
        "def": "a way of doing something",
        "rank": 687
    },
    "fast": {
        "def": "moving or able to move quickly ",
        "rank": 688
    },
    "stuff": {
        "def": "materials, supplies, or equipment ",
        "rank": 689
    },
    "international": {
        "def": "involving two or more countries",
        "rank": 690
    },
    "drink": {
        "def": "to take a liquid into your mouth and swallow it",
        "rank": 691
    },
    "purchase": {
        "def": "to buy something, to get by paying money for it",
        "rank": 692
    },
    "myself": {
        "def": "the reflexive form of the pronouns 'me' or 'I'",
        "rank": 693
    },
    "worry": {
        "def": "to think about problems or fears",
        "rank": 694
    },
    "whatever": {
        "def": "anything or everything that or no matter what",
        "rank": 695
    },
    "private": {
        "def": "for the use of a single person or group",
        "rank": 696
    },
    "determine": {
        "def": "cause to occur in a particular way",
        "rank": 697
    },
    "summer": {
        "def": "the warmest season of the year that is after spring and before autumn",
        "rank": 698
    },
    "evening": {
        "def": "the last part of the day and early part of the night ",
        "rank": 699
    },
    "influence": {
        "def": " the power to change or affect someone or something",
        "rank": 700
    },
    "exactly": {
        "def": "completely correct",
        "rank": 701
    },
    "average": {
        "def": "a number that is calculated by adding quantities together and then dividing the total by the number of quantities",
        "rank": 702
    },
    "everyone": {
        "def": "every person;  everybody",
        "rank": 703
    },
    "drop": {
        "def": "to let something fall",
        "rank": 704
    },
    "miss": {
        "def": "to fail to hit, catch, reach, or get (something)",
        "rank": 705
    },
    "significant": {
        "def": "large enough to be noticed or have an effect",
        "rank": 706
    },
    "production": {
        "def": "the process of making or growing something for sale or use",
        "rank": 707
    },
    "inside": {
        "def": "an inner side, edge, or surface of something",
        "rank": 708
    },
    "tomorrow": {
        "def": "the day after today",
        "rank": 709
    },
    "attempt": {
        "def": "to try to do something or to accomplish or complete",
        "rank": 710
    },
    "region": {
        "def": "a part of a country, of the world, area, etc.",
        "rank": 711
    },
    "cent": {
        "def": "a unit of money that is equal to 1/100 of the basic unit of money",
        "rank": 712
    },
    "race": {
        "def": "one of the groups that people can be divided into based on certain physical qualities (such as skin color)",
        "rank": 713
    },
    "shall": {
        "def": "expressing the future tense, to expect to happen",
        "rank": 714
    },
    "contract": {
        "def": "a legal written agreement between people",
        "rank": 715
    },
    "smile": {
        "def": "an expression on your face that shows happiness, amusement or pleasure",
        "rank": 716
    },
    "skill": {
        "def": "the ability to do something that comes from training, experience, or practice",
        "rank": 717
    },
    "medium": {
        "def": "a middle size, something between other things",
        "rank": 718
    },
    "necessary": {
        "def": "needing to be done",
        "rank": 719
    },
    "economy": {
        "def": "a large system of production and consumption",
        "rank": 720
    },
    "various": {
        "def": "used to refer to several different or many different things",
        "rank": 721
    },
    "notice": {
        "def": "to become aware of (something or someone) by seeing, hearing, etc. ",
        "rank": 722
    },
    "nature": {
        "def": "the physical world and everything in it",
        "rank": 723
    },
    "population": {
        "def": "the number of people who live in a place",
        "rank": 724
    },
    "key": {
        "def": "a device that is used to open a lock or start an automobile \u25caThe usual type of key is a small metal object that you insert into a narrow opening and turn. ",
        "rank": 725
    },
    "nation": {
        "def": "a large area of land controlled by government, territory",
        "rank": 726
    },
    "hit": {
        "def": "to move your hand, a bat, etc., quickly so that it touches someone or something in a forceful or violent way",
        "rank": 727
    },
    "occur": {
        "def": "to happen, to take place",
        "rank": 728
    },
    "plant": {
        "def": "a living thing that grows in the ground such as a tree or flower",
        "rank": 729
    },
    "catch": {
        "def": "to use your hands to stop and hold",
        "rank": 730
    },
    "election": {
        "def": "the act or process of choosing someone for a public office by voting ",
        "rank": 731
    },
    "director": {
        "def": "a person who manages an organized group of people or a part of an organization ",
        "rank": 732
    },
    "review": {
        "def": "an act of carefully looking at or examining the quality or condition of something or someone",
        "rank": 733
    },
    "military": {
        "def": "of or relating to soldiers or the armed forces",
        "rank": 734
    },
    "statement": {
        "def": "something that someone says or writes officially",
        "rank": 735
    },
    "worker": {
        "def": "someone who works for a company or organization but does not have a powerful position",
        "rank": 736
    },
    "respect": {
        "def": "a feeling of admiring someone that is good or valuable",
        "rank": 737
    },
    "paint": {
        "def": "a liquid that dries to form a thin colored layer",
        "rank": 738
    },
    "capital": {
        "def": "having the main offices of a government",
        "rank": 739
    },
    "player": {
        "def": "someone who plays a sport or game",
        "rank": 740
    },
    "press": {
        "def": "newspapers, magazines, and TV news reports",
        "rank": 741
    },
    "movie": {
        "def": "a film or video",
        "rank": 742
    },
    "tax": {
        "def": "money that a government requires people to pay",
        "rank": 743
    },
    "environment": {
        "def": "the conditions that surround people, animals or plants",
        "rank": 744
    },
    "son": {
        "def": "a male child",
        "rank": 745
    },
    "hotel": {
        "def": "a place that has rooms in which people can stay especially when they are traveling :a place that provides food, lodging, and other services for paying guests ",
        "rank": 746
    },
    "size": {
        "def": "the total amount of physical space that a person or thing occupies",
        "rank": 747
    },
    "item": {
        "def": "an individual article, unit or piece of information",
        "rank": 748
    },
    "image": {
        "def": "a picture, sculpture or painting of something",
        "rank": 749
    },
    "drug": {
        "def": "a chemical substance used as a medicine; an illegal substance taken for recreation",
        "rank": 750
    },
    "simple": {
        "def": "not hard to understand or do",
        "rank": 751
    },
    "indeed": {
        "def": "without any question- used to stress the truth of a statement",
        "rank": 752
    },
    "series": {
        "def": "a number of things that happen one after another",
        "rank": 753
    },
    "final": {
        "def": "happening or coming at the end of a series",
        "rank": 754
    },
    "purpose": {
        "def": "the reason for which something is done",
        "rank": 755
    },
    "window": {
        "def": "an opening in a wall or door that usually contains a sheet of glass",
        "rank": 756
    },
    "treatment": {
        "def": "something which you do to try to cure an illness or injury, especially something suggested or done by a doctor",
        "rank": 757
    },
    "club": {
        "def": "a group of people who meet to participate in an activity",
        "rank": 758
    },
    "file": {
        "def": "a folder or box for documents that are similar",
        "rank": 759
    },
    "department": {
        "def": " a division of a larger part or organization",
        "rank": 760
    },
    "bus": {
        "def": "a large vehicle that is used for carrying passengers especially along a particular route at particular times",
        "rank": 761
    },
    "wall": {
        "def": "the layer of brick or stone that separates areas",
        "rank": 762
    },
    "direct": {
        "def": "to cause to turn or move in a desired way",
        "rank": 763
    },
    "character": {
        "def": "the way someone thinks, feels and behaves",
        "rank": 764
    },
    "gain": {
        "def": "to get something wanted or valued",
        "rank": 765
    },
    "fit": {
        "def": "proper or acceptable : morally or socially correct",
        "rank": 766
    },
    "enter": {
        "def": "to go or come into something",
        "rank": 767
    },
    "agreement": {
        "def": "a promise or decision made between two or more people",
        "rank": 768
    },
    "fail": {
        "def": "to not succeed : to end without success",
        "rank": 769
    },
    "season": {
        "def": "one of the four periods (spring, summer, autumn, and winter) into which the year is commonly divided ",
        "rank": 770
    },
    "college": {
        "def": "an school or educational institution for adults",
        "rank": 771
    },
    "seek": {
        "def": "to search for;  to try to find;  look for",
        "rank": 772
    },
    "achieve": {
        "def": "to reach a goal, to get something",
        "rank": 773
    },
    "beautiful": {
        "def": "very attractive",
        "rank": 774
    },
    "station": {
        "def": "a place where buses or trains regularly stop",
        "rank": 775
    },
    "alone": {
        "def": "not including or without anyone or anything else",
        "rank": 776
    },
    "below": {
        "def": "in or to a lower place",
        "rank": 777
    },
    "clothes": {
        "def": "items such as shirts and trousers that you wear on your body",
        "rank": 778
    },
    "attend": {
        "def": "to go to and be present at (an event, meeting, etc.)",
        "rank": 779
    },
    "success": {
        "def": "to accomplish a purpose or achieving something",
        "rank": 780
    },
    "argue": {
        "def": " give reasons for or against something : to say or write things in order to change someone's opinion about what is true, what should be done, etc.",
        "rank": 781
    },
    "lack": {
        "def": "to not have something",
        "rank": 782
    },
    "comment": {
        "def": "to discuss or write an opinion on something",
        "rank": 783
    },
    "option": {
        "def": "something which may be chosen",
        "rank": 784
    },
    "pull": {
        "def": "to hold onto and move (someone or something) in a particular direction and especially toward yourself",
        "rank": 785
    },
    "church": {
        "def": "a building used for Christian religious worship or services",
        "rank": 786
    },
    "herself": {
        "def": "the reflexive form of the pronoun 'she'",
        "rank": 787
    },
    "advantage": {
        "def": "something (such as a good position or condition) that helps to make someone or something better or more likely to succeed than others ",
        "rank": 788
    },
    "identify": {
        "def": "to indicate who  or what someone or something is",
        "rank": 789
    },
    "link": {
        "def": "to join or connect together, a relationship",
        "rank": 790
    },
    "indicate": {
        "def": "to show something, direct attention to or point out",
        "rank": 791
    },
    "aim": {
        "def": "to have a specified goal or purpose",
        "rank": 792
    },
    "income": {
        "def": "earned money from work, investments or business",
        "rank": 793
    },
    "specific": {
        "def": "special or particular, clearly presented or stated",
        "rank": 794
    },
    "floor": {
        "def": "the part of a room on which you stand",
        "rank": 795
    },
    "discussion": {
        "def": "the act of talking about something with another person or a group of people : a conversation about something",
        "rank": 796
    },
    "associate": {
        "def": "to relate two things, people, etc. in your mind",
        "rank": 797
    },
    "recognize": {
        "def": "to know and remember because of previous knowledge or experience",
        "rank": 798
    },
    "tree": {
        "def": "a usually tall plant that has a thick, wooden stem and many large branches ",
        "rank": 799
    },
    "unit": {
        "def": "a single thing, person or group that is a part of something larger",
        "rank": 800
    },
    "loss": {
        "def": "failure to keep or to continue to have something",
        "rank": 801
    },
    "mark": {
        "def": "to make or leave a visible mark on something",
        "rank": 802
    },
    "challenge": {
        "def": "to try, to say or show that something may not be true",
        "rank": 803
    },
    "depend": {
        "def": "to need (someone or something) for support, help, etc. ",
        "rank": 804
    },
    "wide": {
        "def": "extending a great distance from one side to the other;  not narrow",
        "rank": 805
    },
    "anyway": {
        "def": "despite something that has been stated before ",
        "rank": 806
    },
    "mile": {
        "def": "a unit of measurement used in the US that is about 1600 meters",
        "rank": 807
    },
    "board": {
        "def": "a long, thin, flat piece of wood ",
        "rank": 808
    },
    "solution": {
        "def": "something that is used or done to deal with and end a problem : something that solves a problem ",
        "rank": 809
    },
    "clearly": {
        "def": "in a way that is easy to see, hear, read, or understand",
        "rank": 810
    },
    "anyone": {
        "def": "any person",
        "rank": 811
    },
    "machine": {
        "def": "a piece of equipment with moving parts that does work when it is given power from electricity, gasoline, etc. ",
        "rank": 812
    },
    "relation": {
        "def": "a person who is a member of your family",
        "rank": 813
    },
    "marry": {
        "def": "to become the husband or wife of (someone)",
        "rank": 814
    },
    "despite": {
        "def": "without being affected by something: in spite of",
        "rank": 815
    },
    "theory": {
        "def": "an idea that is explain facts or events academically",
        "rank": 816
    },
    "introduce": {
        "def": "to make (someone) known to someone else by name ",
        "rank": 817
    },
    "prove": {
        "def": "to show the existence, truth, or correctness of (something) by using evidence, logic, etc. ",
        "rank": 818
    },
    "ability": {
        "def": "the power or skill to do something",
        "rank": 819
    },
    "popular": {
        "def": "liked or enjoyed by many people ",
        "rank": 820
    },
    "modern": {
        "def": "relating to the present or recent time ",
        "rank": 821
    },
    "doctor": {
        "def": "a person who skilled to treat people who are ill, sick and injured",
        "rank": 822
    },
    "release": {
        "def": "to allow to leave a jail, cage, prison, etc.",
        "rank": 823
    },
    "score": {
        "def": "the number of points someone gets in a game or test",
        "rank": 824
    },
    "access": {
        "def": "a way of getting near to somewhere",
        "rank": 825
    },
    "television": {
        "def": "a piece of equipment with a screen on the front, used for watching programs",
        "rank": 826
    },
    "target": {
        "def": "something that you are trying to do or achieve",
        "rank": 827
    },
    "ready": {
        "def": "prepared to do something",
        "rank": 828
    },
    "strike": {
        "def": "to hit something in a forceful way",
        "rank": 829
    },
    "card": {
        "def": "a small piece of stiff paper that is marked with symbols or pictures to show its value, comes in a set, and is used for playing games",
        "rank": 830
    },
    "potential": {
        "def": "having or showing a capacity for the future",
        "rank": 831
    },
    "pattern": {
        "def": "a repeated form or design especially that is used to decorate something",
        "rank": 832
    },
    "clock": {
        "def": "a device that shows what time it is and that is usually placed in a room or attached to a wall ",
        "rank": 833
    },
    "organize": {
        "def": "to arrange systematically",
        "rank": 834
    },
    "village": {
        "def": " a small town in the country ",
        "rank": 835
    },
    "nearly": {
        "def": "almost",
        "rank": 836
    },
    "prefer": {
        "def": "to like (someone or something) better than someone or something else ",
        "rank": 837
    },
    "movement": {
        "def": "a change of position or place",
        "rank": 838
    },
    "propose": {
        "def": "to suggest (something, such as a plan or theory) to a person or group of people to consider ",
        "rank": 839
    },
    "guess": {
        "def": " to form an opinion or give an answer about something when you do not know much or anything about it ",
        "rank": 840
    },
    "operation": {
        "def": "when a doctor cuts into someone's body to remove a sick part",
        "rank": 841
    },
    "fear": {
        "def": "an unpleasant feeling caused by being aware of danger",
        "rank": 842
    },
    "hair": {
        "def": "a thin threadlike growth from the skin of a person or animal",
        "rank": 843
    },
    "trip": {
        "def": "a journey to a place ",
        "rank": 844
    },
    "supply": {
        "def": "the amount of something that is available to be used",
        "rank": 845
    },
    "quickly": {
        "def": "fast or in a short time",
        "rank": 846
    },
    "application": {
        "def": "a formal and usually written request for something (such as a job",
        "rank": 847
    },
    "sleep": {
        "def": "to rest your mind and body by closing your eyes and becoming unconscious ",
        "rank": 848
    },
    "network": {
        "def": "a system of lines, wires, etc., that are connected to each other ",
        "rank": 849
    },
    "strategy": {
        "def": "a careful plan or method for reaching a goal ",
        "rank": 850
    },
    "interview": {
        "def": "a meeting in which someone asks you questions to see if you are suitable for a job or course",
        "rank": 851
    },
    "hospital": {
        "def": "a place where sick or injured people are given care or treatment and where children are often born ",
        "rank": 852
    },
    "husband": {
        "def": "a married man : the man someone is married to",
        "rank": 853
    },
    "red": {
        "def": "having the color of blood",
        "rank": 854
    },
    "degree": {
        "def": "a unit for measuring temperature or the size of an angle",
        "rank": 855
    },
    "star": {
        "def": "any one of the objects in space that are made of burning gas and that look like points of light in the night sky ",
        "rank": 856
    },
    "restaurant": {
        "def": "a place where you can buy and eat a meal",
        "rank": 857
    },
    "generally": {
        "def": "usually, or in most situations",
        "rank": 858
    },
    "author": {
        "def": "a person who writes book",
        "rank": 859
    },
    "yourself": {
        "def": "the reflexive form of the pronoun 'you'",
        "rank": 860
    },
    "pressure": {
        "def": "the weight or force that is produced when something presses or pushes against something",
        "rank": 861
    },
    "task": {
        "def": "a piece of work to have done given by a person",
        "rank": 862
    },
    "express": {
        "def": "to talk or write about (something that you are thinking or feeling) ",
        "rank": 863
    },
    "competition": {
        "def": "the act or process of trying to get or win something (such as a prize or a higher level of success) that someone else is also trying to get or win",
        "rank": 864
    },
    "serious": {
        "def": "having an important or dangerous possible result",
        "rank": 865
    },
    "reference": {
        "def": " the act of mentioning something in speech or in writing",
        "rank": 866
    },
    "treat": {
        "def": "the way you behave towards someone",
        "rank": 867
    },
    "conclusion": {
        "def": "the opinion you have after considering all the information about something; the final part of something",
        "rank": 868
    },
    "brother": {
        "def": " a boy or man who has one or both of the same parents as you ",
        "rank": 869
    },
    "natural": {
        "def": "something that exists or happens because of nature; not made or done by people",
        "rank": 870
    },
    "touch": {
        "def": "to put your hand, fingers, etc., on someone or something",
        "rank": 871
    },
    "everybody": {
        "def": "every person;  everyone",
        "rank": 872
    },
    "beyond": {
        "def": "on or to the farther part or side, in addition",
        "rank": 873
    },
    "define": {
        "def": "to state the meaning of a word, phrase, etc.",
        "rank": 874
    },
    "basis": {
        "def": "something from which another thing develops",
        "rank": 875
    },
    "trouble": {
        "def": "problems or difficulties",
        "rank": 876
    },
    "deep": {
        "def": "having a large distance to the bottom from the surface or highest point",
        "rank": 877
    },
    "energy": {
        "def": "having physical or mental strength",
        "rank": 878
    },
    "fish": {
        "def": "a cold-blooded animal that lives in water, breathes with gills, and usually has fins and scales ",
        "rank": 879
    },
    "dark": {
        "def": "having very little light, not light in color",
        "rank": 880
    },
    "sing": {
        "def": "to use your voice to make musical sounds in the form of a song or tune",
        "rank": 881
    },
    "sample": {
        "def": "a small amount of something that gives you information about the thing it was taken from ",
        "rank": 882
    },
    "refer": {
        "def": "to talk about or write about (someone or something) especially briefly : to mention (someone or something) in speech or in writing ",
        "rank": 883
    },
    "adult": {
        "def": "a person or animal that is grown up",
        "rank": 884
    },
    "positive": {
        "def": "good or useful in qualities, constructive, confident",
        "rank": 885
    },
    "except": {
        "def": "not including or other than",
        "rank": 886
    },
    "disease": {
        "def": " an illness that affects a person, animal, or plant",
        "rank": 887
    },
    "promise": {
        "def": "a statement telling someone that you will definitely do something or that something will definitely happen in the future ",
        "rank": 888
    },
    "throw": {
        "def": "to cause (something) to move out of your hand and through the air by quickly moving your arm forward",
        "rank": 889
    },
    "dress": {
        "def": "a piece of clothing for a woman or a girl that has a top part that covers the upper body and a skirt that hangs down to cover the legs ",
        "rank": 890
    },
    "worth": {
        "def": "used to indicate the value of something",
        "rank": 891
    },
    "clean": {
        "def": "free from dirt, marks, etc. : not dirty ",
        "rank": 892
    },
    "fill": {
        "def": "to make something full or to spread through",
        "rank": 893
    },
    "property": {
        "def": "something that is owned by a person or business",
        "rank": 894
    },
    "profit": {
        "def": "money that is made in a business, through investing, etc.",
        "rank": 895
    },
    "somebody": {
        "def": "person who is not known, named, or specified",
        "rank": 896
    },
    "operate": {
        "def": "to function or behave in a proper or particular way",
        "rank": 897
    },
    "bar": {
        "def": "a building or room where alcoholic drinks and sometimes food are served ",
        "rank": 898
    },
    "advance": {
        "def": "to move forward",
        "rank": 899
    },
    "goal": {
        "def": "something you try to do or achieve, an aim or result",
        "rank": 900
    },
    "quarter": {
        "def": "one of four equal parts of something ",
        "rank": 901
    },
    "central": {
        "def": "in or near the center of a place or object",
        "rank": 902
    },
    "cold": {
        "def": "having a very low temperature",
        "rank": 903
    },
    "object": {
        "def": "a thing that you can see and touch and that is not alive ",
        "rank": 904
    },
    "style": {
        "def": "a particular way something is done or created",
        "rank": 905
    },
    "obviously": {
        "def": "in a way that is easy to understand or see",
        "rank": 906
    },
    "push": {
        "def": " to use force to move (someone or something) forward or away from you",
        "rank": 907
    },
    "tend": {
        "def": "used to describe what often happens or what someone often does or is likely to do",
        "rank": 908
    },
    "assume": {
        "def": "to accept a responsibility or debt",
        "rank": 909
    },
    "normal": {
        "def": "conforming to a standard, usual, ordinary, not strange",
        "rank": 910
    },
    "exchange": {
        "def": "an occurrence in which people give things of similar value to each other ",
        "rank": 911
    },
    "suffer": {
        "def": "to experience pain, illness, or injury ",
        "rank": 912
    },
    "middle": {
        "def": "equally distant from the ends or sides : halfway between two points ",
        "rank": 913
    },
    "blue": {
        "def": " having the color of the clear sky ",
        "rank": 914
    },
    "match": {
        "def": "someone or something that is equal to or as good as another person or thing ",
        "rank": 915
    },
    "officer": {
        "def": "a person who has an important position in a company or organization",
        "rank": 916
    },
    "avoid": {
        "def": " to stay away from (someone or something) ",
        "rank": 917
    },
    "reflect": {
        "def": " to move in one direction, hit a surface, and then quickly move in a different and usually opposite direction",
        "rank": 918
    },
    "useful": {
        "def": "helpful for doing or achieving something",
        "rank": 919
    },
    "fun": {
        "def": "someone or something that is amusing or enjoyable",
        "rank": 920
    },
    "huge": {
        "def": "extremely large",
        "rank": 921
    },
    "instance": {
        "def": "an example of a particular action or situation",
        "rank": 922
    },
    "seat": {
        "def": "something (such as a chair) that you sit on",
        "rank": 923
    },
    "document": {
        "def": "an official record that gives information",
        "rank": 924
    },
    "oil": {
        "def": "a thick, black liquid that comes from the ground and that is used in making various products (such as gasoline)",
        "rank": 925
    },
    "message": {
        "def": "a piece of information that is sent or given to someone ",
        "rank": 926
    },
    "net": {
        "def": "a device that is used for catching or holding things or for keeping things out of a space and that is made of pieces of string, rope, wire, etc., woven together with spaces in between ",
        "rank": 927
    },
    "successful": {
        "def": "achieving what you want to achieve",
        "rank": 928
    },
    "box": {
        "def": "a container that is made of a hard material (such as wood, metal, or cardboard) and that usually has four straight sides",
        "rank": 929
    },
    "resource": {
        "def": "an essential supply of something",
        "rank": 930
    },
    "pound": {
        "def": " a unit of weight that is equal to 16 ounces or 0.4536 kilograms ",
        "rank": 931
    },
    "throughout": {
        "def": "in every part of a place; during the whole of a period of time",
        "rank": 932
    },
    "facility": {
        "def": "a place where a particular activity happens",
        "rank": 933
    },
    "argument": {
        "def": "an angry discussion with someone in which you both disagree",
        "rank": 934
    },
    "bill": {
        "def": "a document that says how much money you owe for something you have bought or used ",
        "rank": 935
    },
    "debate": {
        "def": "a formal discussion between people",
        "rank": 936
    },
    "speech": {
        "def": "a spoken expression of ideas, opinions, etc., that is made by someone who is speaking in front of a group of people ",
        "rank": 937
    },
    "separate": {
        "def": "not joined, connected, or combined : placed or kept apart ",
        "rank": 938
    },
    "male": {
        "def": "characteristic of boys or men ",
        "rank": 939
    },
    "baby": {
        "def": "a very young child",
        "rank": 940
    },
    "earn": {
        "def": "to get (money, a salary, etc.) for work that you have done ",
        "rank": 941
    },
    "maintain": {
        "def": "to keep exist or continue without changing",
        "rank": 942
    },
    "career": {
        "def": "a job that you do for a long period of your life",
        "rank": 943
    },
    "hot": {
        "def": "having a high temperature ",
        "rank": 944
    },
    "billion": {
        "def": "the number 1,000,000,000",
        "rank": 945
    },
    "doubt": {
        "def": "to be uncertain about something",
        "rank": 946
    },
    "exercise": {
        "def": "physical activity that is done in order to become stronger and healthier ",
        "rank": 947
    },
    "previous": {
        "def": "existing or happening before the present time",
        "rank": 948
    },
    "daily": {
        "def": "happening, done, made, used, or existing every day ",
        "rank": 949
    },
    "search": {
        "def": " to carefully look for someone or something ",
        "rank": 950
    },
    "suddenly": {
        "def": "quickly and unexpectedly",
        "rank": 951
    },
    "fly": {
        "def": "to move through the air with wings ",
        "rank": 952
    },
    "basic": {
        "def": "forming or relating to the most important part of something",
        "rank": 953
    },
    "ring": {
        "def": "a piece of jewelry that is worn usually on a finger ",
        "rank": 954
    },
    "asset": {
        "def": "a person, skill, or quality which is useful or helps you to succeed; something valuable which is owned",
        "rank": 955
    },
    "science": {
        "def": "knowledge about or study of the natural world based on facts",
        "rank": 956
    },
    "dog": {
        "def": "a type of animal that is often kept as a pet or trained to work for people by guarding buildings, hunting, etc. ",
        "rank": 957
    },
    "perform": {
        "def": "to do an action or activity that usually requires training or skill",
        "rank": 958
    },
    "balance": {
        "def": "the state of having your weight spread equally so that you do not fall ",
        "rank": 959
    },
    "song": {
        "def": "a short piece of music with words that are sung ",
        "rank": 960
    },
    "weekend": {
        "def": " Saturday and Sunday",
        "rank": 961
    },
    "dead": {
        "def": "no longer alive or living , no longer having life",
        "rank": 962
    },
    "encourage": {
        "def": "to make (someone) more determined, hopeful, or confident ",
        "rank": 963
    },
    "protect": {
        "def": "to keep (someone or something) from being harmed, lost, etc. ",
        "rank": 964
    },
    "damage": {
        "def": "physical harm that is done to something or to someone's body",
        "rank": 965
    },
    "imagine": {
        "def": "to think of or create something in one's mind that is not real ",
        "rank": 966
    },
    "afternoon": {
        "def": "the middle part of the day : the part of the day between noon and evening ",
        "rank": 967
    },
    "estimate": {
        "def": "a rough idea or guess",
        "rank": 968
    },
    "photo": {
        "def": "a picture produced with a camera",
        "rank": 969
    },
    "context": {
        "def": "a set of facts surrounding a person or event",
        "rank": 970
    },
    "newspaper": {
        "def": "a set of large sheets of paper that have news stories, information about local events, advertisements, etc., and that are folded together and sold every day",
        "rank": 971
    },
    "credit": {
        "def": "the quality of being believed or having a good reputation",
        "rank": 972
    },
    "daughter": {
        "def": " a female child",
        "rank": 973
    },
    "variety": {
        "def": "a number or collection of different things or people ",
        "rank": 974
    },
    "version": {
        "def": "a particular form of something and other forms ",
        "rank": 975
    },
    "extend": {
        "def": "to cause (something, such as your arm or leg) to straighten out or to stretch out ",
        "rank": 976
    },
    "proposal": {
        "def": "something (such as a plan or suggestion) that is presented to a person or group of people to consider ",
        "rank": 977
    },
    "professional": {
        "def": "relating to a job that requires special skill",
        "rank": 978
    },
    "dollar": {
        "def": "a basic unit of money in the U.S., Canada, Australia, and other countries that is equal to 100 cents",
        "rank": 979
    },
    "sister": {
        "def": "a girl or woman who has one or both of the same parents as you",
        "rank": 980
    },
    "whom": {
        "def": "used in formal writing or speech",
        "rank": 981
    },
    "memory": {
        "def": " the power or process of remembering what has been learned",
        "rank": 982
    },
    "mine": {
        "def": "that which belongs to me : my one : my ones ",
        "rank": 983
    },
    "ahead": {
        "def": "in or toward the front ",
        "rank": 984
    },
    "nor": {
        "def": "used after neither to show something is also not true or possible",
        "rank": 985
    },
    "request": {
        "def": "an act of politely or formally asking for something",
        "rank": 986
    },
    "post": {
        "def": "letters or packages sent by post",
        "rank": 987
    },
    "original": {
        "def": "special and interesting because of not being the same as others; the earliest form of something",
        "rank": 988
    },
    "female": {
        "def": "characteristic of girls or women ",
        "rank": 989
    },
    "green": {
        "def": "having the color of growing grass",
        "rank": 990
    },
    "dance": {
        "def": "to move your body with rhythm to music ",
        "rank": 991
    },
    "dream": {
        "def": "a series of thoughts, visions, or feelings that happen during sleep",
        "rank": 992
    },
    "observe": {
        "def": "to notice or perceive carefully",
        "rank": 993
    },
    "inform": {
        "def": "to give information or facts about something",
        "rank": 994
    },
    "communication": {
        "def": "the act of communicating with other people",
        "rank": 995
    },
    "discover": {
        "def": "to see, find, or become aware of (something) for the first time ",
        "rank": 996
    },
    "track": {
        "def": "a path or trail that is made by people or animals walking through a field, forest, etc.",
        "rank": 997
    },
    "garden": {
        "def": " an area of ground where plants (such as flowers or vegetables) are grown ",
        "rank": 998
    },
    "agency": {
        "def": " a business that provides a particular service ",
        "rank": 999
    },
    "screen": {
        "def": "the usually flat part of a television or computer monitor that shows the images or text : the part of a television or computer that you look at when you are using it ",
        "rank": 1000
    },
    "possibility": {
        "def": "a chance that something may happen or be true",
        "rank": 1001
    },
    "examine": {
        "def": "to look at (something) closely and carefully in order to learn more about it, to find problems, etc. ",
        "rank": 1002
    },
    "legal": {
        "def": "of or relating to the law, required by the law",
        "rank": 1003
    },
    "recommend": {
        "def": "to say that (someone or something) is good and deserves to be chosen ",
        "rank": 1004
    },
    "university": {
        "def": "a high-level educational school where academic research is done",
        "rank": 1005
    },
    "text": {
        "def": "the original words in main writing or speech",
        "rank": 1006
    },
    "direction": {
        "def": "the course or path on which something is moving or pointing",
        "rank": 1007
    },
    "responsibility": {
        "def": "something that it is your job or duty to do or deal with",
        "rank": 1008
    },
    "conversation": {
        "def": "an informal talk involving two people or a small group of people",
        "rank": 1009
    },
    "magazine": {
        "def": "a thin book published every week or month, that has shiny, colorful pages with articles and pictures",
        "rank": 1010
    },
    "easily": {
        "def": "with no difficulty",
        "rank": 1011
    },
    "favorite": {
        "def": "most liked ",
        "rank": 1012
    },
    "rock": {
        "def": "to move (someone or something) back and forth or from side to side",
        "rank": 1013
    },
    "independent": {
        "def": "not controlled or ruled by anyone else",
        "rank": 1014
    },
    "additional": {
        "def": "extra to what already exists",
        "rank": 1015
    },
    "agent": {
        "def": "a person who does business for another person : a person who acts on behalf of another ",
        "rank": 1016
    },
    "complex": {
        "def": "difficult, not easy to understand or explain",
        "rank": 1017
    },
    "appropriate": {
        "def": "right or suited for some situation or purpose",
        "rank": 1018
    },
    "invite": {
        "def": "to ask (someone) to go somewhere or do something ",
        "rank": 1019
    },
    "traditional": {
        "def": "following the customs or ways of behaving that have continued in a group of people or society for a long time",
        "rank": 1020
    },
    "cross": {
        "def": "to go from one side of (something) to the other : to go across (something)",
        "rank": 1021
    },
    "sea": {
        "def": "the salt water that covers much of the Earth's surface",
        "rank": 1022
    },
    "famous": {
        "def": "known or recognized by many people",
        "rank": 1023
    },
    "reply": {
        "def": " to say, write, or do something as an answer or response",
        "rank": 1024
    },
    "software": {
        "def": "programs that you use to make a computer do different things",
        "rank": 1025
    },
    "weight": {
        "def": "a measurement that indicates how heavy a person or thing is ",
        "rank": 1026
    },
    "shape": {
        "def": "the form or outline of an object",
        "rank": 1027
    },
    "completely": {
        "def": "in every way or as much as possible",
        "rank": 1028
    },
    "trial": {
        "def": "a formal meeting in a court in which evidence about crimes",
        "rank": 1029
    },
    "weather": {
        "def": "the state of the air and atmosphere at a particular time and place",
        "rank": 1030
    },
    "administration": {
        "def": "the work of organizing and arranging the operation of something, such as a company",
        "rank": 1031
    },
    "fix": {
        "def": "to make (something) whole or able to work properly again ",
        "rank": 1032
    },
    "shoot": {
        "def": "to cause a bullet, arrow, etc., to move forward with great force from a weapon",
        "rank": 1033
    },
    "judge": {
        "def": "a person who has the power to make a decision",
        "rank": 1034
    },
    "absolutely": {
        "def": "completely",
        "rank": 1035
    },
    "user": {
        "def": "someone who uses a product, machine, or service",
        "rank": 1036
    },
    "welcome": {
        "def": "used as a friendly greeting to someone who has arrived at a place",
        "rank": 1037
    },
    "element": {
        "def": "an essential or particular part of something",
        "rank": 1038
    },
    "announce": {
        "def": "to tell people about something officially or with force or confidence",
        "rank": 1039
    },
    "requirement": {
        "def": "something that is needed or demanded",
        "rank": 1040
    },
    "glass": {
        "def": "a hard usually transparent material that is used for making windows and other products ",
        "rank": 1041
    },
    "laughter": {
        "def": "the action or sound of laughing ",
        "rank": 1042
    },
    "stick": {
        "def": "a cut or broken branch or twig ",
        "rank": 1043
    },
    "difficulty": {
        "def": "the quality of something that makes it hard to do : the difficult nature of something ",
        "rank": 1044
    },
    "effective": {
        "def": "producing a result that is wanted or having an intended effect",
        "rank": 1045
    },
    "survey": {
        "def": "an act of studying to make a judgment about it",
        "rank": 1046
    },
    "majority": {
        "def": "more than half of a group of people or things",
        "rank": 1047
    },
    "invest": {
        "def": "to use money to earn more money",
        "rank": 1048
    },
    "primary": {
        "def": "most important, most basic or essential",
        "rank": 1049
    },
    "generation": {
        "def": "people born and living during about the same time",
        "rank": 1050
    },
    "federal": {
        "def": "a system of  government",
        "rank": 1051
    },
    "wind": {
        "def": "a natural movement of air outside",
        "rank": 1052
    },
    "replace": {
        "def": "to be used instead of (something) ",
        "rank": 1053
    },
    "writer": {
        "def": "someone whose job is writing books, stories, articles, etc.",
        "rank": 1054
    },
    "stress": {
        "def": "a state of mental tension and worry caused by problems",
        "rank": 1055
    },
    "committee": {
        "def": "a group of people who are chosen to make decisions about something",
        "rank": 1056
    },
    "principle": {
        "def": "a moral rule or belief that governs person's behavior",
        "rank": 1057
    },
    "content": {
        "def": " the things that are in something ",
        "rank": 1058
    },
    "immediately": {
        "def": "now or without waiting or thinking about something",
        "rank": 1059
    },
    "unless": {
        "def": "used to say what will happen, be done, or be true if something else does not happen, is not done, or is not true",
        "rank": 1060
    },
    "percentage": {
        "def": "an amount of something, expressed as a number out of 100",
        "rank": 1061
    },
    "equipment": {
        "def": "the things that are used for a particular activity or purpose",
        "rank": 1062
    },
    "telephone": {
        "def": "a system that uses wires and radio signals to send sounds (such as people's voices) over long distances",
        "rank": 1063
    },
    "title": {
        "def": "the name given to something (such as a book, song, or movie) to identify or describe it ",
        "rank": 1064
    },
    "budget": {
        "def": "a plan of how you will spend your money; the amount of money you have for something",
        "rank": 1065
    },
    "transfer": {
        "def": "to move from one place to another",
        "rank": 1066
    },
    "blood": {
        "def": "the red liquid that flows through the bodies of people and animals ",
        "rank": 1067
    },
    "scene": {
        "def": "a division of an act in a play during which the action takes place in a single place without a break in time",
        "rank": 1068
    },
    "conduct": {
        "def": "to direct, lead or guide something ",
        "rank": 1069
    },
    "chair": {
        "def": "a seat for one person that has a back and usually four legs ",
        "rank": 1070
    },
    "sector": {
        "def": "an area that includes certain kinds of job",
        "rank": 1071
    },
    "expensive": {
        "def": "costing a lot of money ",
        "rank": 1072
    },
    "executive": {
        "def": "people who have important jobs in business",
        "rank": 1073
    },
    "beat": {
        "def": "to hit (something) repeatedly",
        "rank": 1074
    },
    "wonderful": {
        "def": "very good",
        "rank": 1075
    },
    "warm": {
        "def": "somewhat hot : not cool or cold ",
        "rank": 1076
    },
    "copy": {
        "def": "something that is or looks exactly or almost exactly like something else",
        "rank": 1077
    },
    "none": {
        "def": "not any of a group of people or things",
        "rank": 1078
    },
    "negative": {
        "def": "not having enthusiasm or positive opinions about something; an amount less than zero",
        "rank": 1079
    },
    "annual": {
        "def": "happening once a year",
        "rank": 1080
    },
    "prevent": {
        "def": "to stop (something) from happening or existing ",
        "rank": 1081
    },
    "rich": {
        "def": "having a lot of money and possessions",
        "rank": 1082
    },
    "block": {
        "def": "a solid piece of material (such as rock or wood) that has flat sides and is usually square or rectangular in shape",
        "rank": 1083
    },
    "payment": {
        "def": "the act of paying; the amount of money that is paid",
        "rank": 1084
    },
    "collection": {
        "def": "the act or process of getting things from different places and bringing them together ",
        "rank": 1085
    },
    "advice": {
        "def": "an opinion or suggestion about what someone should do ",
        "rank": 1086
    },
    "remove": {
        "def": "to move, erase or take away from a place",
        "rank": 1087
    },
    "ensure": {
        "def": "to make something sure, certain, or safe",
        "rank": 1088
    },
    "hang": {
        "def": "to attach or place something so that it is held up without support from below",
        "rank": 1089
    },
    "politics": {
        "def": "activities that relate to influencing the actions and policies of a government or getting and keeping power in a government ",
        "rank": 1090
    },
    "medical": {
        "def": "of or relating to the treatment of diseases and injuries",
        "rank": 1091
    },
    "relative": {
        "def": "compared to someone or something else or to each other ",
        "rank": 1092
    },
    "directly": {
        "def": "with no other person or thing involved or between",
        "rank": 1093
    },
    "count": {
        "def": "to add (people or things) together to find the total number",
        "rank": 1094
    },
    "safe": {
        "def": "not able or likely to be hurt or harmed in any way : not in danger ",
        "rank": 1095
    },
    "transport": {
        "def": "to carry things from one place to another ",
        "rank": 1096
    },
    "e-mail": {
        "def": "a system for sending messages electronically, especially from one computer to another using the Internet",
        "rank": 1097
    },
    "mix": {
        "def": "to combine (two or more things) to make one thing that is the same throughout",
        "rank": 1098
    },
    "display": {
        "def": "to put  where people can see it",
        "rank": 1099
    },
    "ride": {
        "def": "to sit on and control the movements of a horse or vehicle",
        "rank": 1100
    },
    "flow": {
        "def": "to move in a steady and continuous way",
        "rank": 1101
    },
    "highly": {
        "def": "very or to a large degree",
        "rank": 1102
    },
    "flat": {
        "def": "having a smooth, level, or even surface : not having curves or bumps ",
        "rank": 1103
    },
    "leg": {
        "def": "one of the long body parts that are used especially for standing, walking, and running ",
        "rank": 1104
    },
    "contrast": {
        "def": "to compare, the state of being different",
        "rank": 1105
    },
    "procedure": {
        "def": "the official or usual way of doing something",
        "rank": 1106
    },
    "straight": {
        "def": "not having curves, bends, or angles ",
        "rank": 1107
    },
    "correct": {
        "def": "true or accurate;  agreeing with facts",
        "rank": 1108
    },
    "connection": {
        "def": "something that joins or connects two or more things ",
        "rank": 1109
    },
    "institution": {
        "def": "a large and important organization, such as a university or bank",
        "rank": 1110
    },
    "admit": {
        "def": " to say usually in an unwilling way that you accept or do not deny the truth or existence of (something) ",
        "rank": 1111
    },
    "consumer": {
        "def": "someone who buys or uses goods or services",
        "rank": 1112
    },
    "reveal": {
        "def": "to make known, to show or prove",
        "rank": 1113
    },
    "video": {
        "def": "a film or television program recorded on videotape",
        "rank": 1114
    },
    "radio": {
        "def": "the system or process that is used for sending and receiving signals through the air without using wires ",
        "rank": 1115
    },
    "otherwise": {
        "def": "in a different way or  in all ways except the one mentioned",
        "rank": 1116
    },
    "nobody": {
        "def": "no person, no one",
        "rank": 1117
    },
    "aware": {
        "def": "knowing or feeling that something exists",
        "rank": 1118
    },
    "appeal": {
        "def": "when a lot of people are asked to give money, information, or help; a request to change an official decision",
        "rank": 1119
    },
    "alternative": {
        "def": "to give or express a choice",
        "rank": 1120
    },
    "status": {
        "def": "the position or rank compared in a society",
        "rank": 1121
    },
    "heavy": {
        "def": "having great weight or difficult to lift or move",
        "rank": 1122
    },
    "award": {
        "def": "a prize given to someone for something they have achieved",
        "rank": 1123
    },
    "surface": {
        "def": "an outside or upper layer of something",
        "rank": 1124
    },
    "handle": {
        "def": "a part of something that is designed to be held by your hand ",
        "rank": 1125
    },
    "sex": {
        "def": "the state of being male or female mostly biological",
        "rank": 1126
    },
    "introduction": {
        "def": "the act of making a person known to others by name",
        "rank": 1127
    },
    "deliver": {
        "def": "to take (something) to a person or place",
        "rank": 1128
    },
    "cry": {
        "def": " to produce tears from your eyes often while making loud sounds because of pain, sorrow, or other strong emotions",
        "rank": 1129
    },
    "pair": {
        "def": " two things that are the same and are meant to be used together ",
        "rank": 1130
    },
    "tour": {
        "def": "a journey through the different parts of a country, region, etc.",
        "rank": 1131
    },
    "collect": {
        "def": "to get (things) from different places and bring them together ",
        "rank": 1132
    },
    "extra": {
        "def": "more than is usual or necessary : additional ",
        "rank": 1133
    },
    "crowd": {
        "def": "a large group of people who are together in one place ",
        "rank": 1134
    },
    "intend": {
        "def": "to plan or want to do (something) : to have (something) in your mind as a purpose or goal ",
        "rank": 1135
    },
    "reader": {
        "def": "someone who reads",
        "rank": 1136
    },
    "cheap": {
        "def": "not costing a lot of money ",
        "rank": 1137
    },
    "decade": {
        "def": "a period of 10 years",
        "rank": 1138
    },
    "sentence": {
        "def": "a group of words that expresses a statement, question, command, or wish Sentences usually contain a subject and verb.",
        "rank": 1139
    },
    "farm": {
        "def": "land that is used for growing crops or raising animals",
        "rank": 1140
    },
    "overall": {
        "def": "when everything is included",
        "rank": 1141
    },
    "moreover": {
        "def": "in addition to what has been said ",
        "rank": 1142
    },
    "concert": {
        "def": "a performance of music and singing",
        "rank": 1143
    },
    "expression": {
        "def": "the act of making your thoughts, feelings, etc., known by speech, writing, or some other method : the act of expressing something",
        "rank": 1144
    },
    "dinner": {
        "def": "the main meal of the day",
        "rank": 1145
    },
    "print": {
        "def": "to cause (words, images, etc.) to appear on paper or cloth by using a machine",
        "rank": 1146
    },
    "decline": {
        "def": "to become lower, smaller or fewer in amount",
        "rank": 1147
    },
    "responsible": {
        "def": "having the duty of dealing with something important",
        "rank": 1148
    },
    "grant": {
        "def": "to agree to do, give, or allow something",
        "rank": 1149
    },
    "physical": {
        "def": "relating to the body of a person ",
        "rank": 1150
    },
    "trust": {
        "def": "belief that someone or something is reliable, good, honest, effective, etc. ",
        "rank": 1151
    },
    "ship": {
        "def": "a large boat used for traveling long distances over the sea",
        "rank": 1152
    },
    "speed": {
        "def": "the rate at which someone or something moves or travels",
        "rank": 1153
    },
    "south": {
        "def": "the direction that is the opposite of north",
        "rank": 1154
    },
    "select": {
        "def": "to choose from a group, something most suitable",
        "rank": 1155
    },
    "category": {
        "def": "a group of people or things that are similar in some way",
        "rank": 1156
    },
    "fair": {
        "def": "agreeing with what is thought to be right or acceptable",
        "rank": 1157
    },
    "attitude": {
        "def": "the way you act, think and feel about something",
        "rank": 1158
    },
    "peace": {
        "def": "freedom from any disturbance; when there is no war or fighting",
        "rank": 1159
    },
    "truth": {
        "def": "the real facts about something : the things that are true",
        "rank": 1160
    },
    "band": {
        "def": "a group of people or animals",
        "rank": 1161
    },
    "lay": {
        "def": "to place (someone or something) down gently in a flat position ",
        "rank": 1162
    },
    "importance": {
        "def": "the quality or state of being important",
        "rank": 1163
    },
    "perfect": {
        "def": "having no mistakes or flaws",
        "rank": 1164
    },
    "launch": {
        "def": "to send a spacecraft or missile into the sky, or a ship into the water; to start to sell a new product",
        "rank": 1165
    },
    "wave": {
        "def": "an area of moving water that is raised above the main surface of an ocean, a lake, etc. ",
        "rank": 1166
    },
    "presence": {
        "def": "the fact of being in a particular place : the state of being present",
        "rank": 1167
    },
    "crime": {
        "def": "an illegal act for which someone can be punished by the government",
        "rank": 1168
    },
    "horse": {
        "def": "a large animal that is used for riding and for carrying and pulling things",
        "rank": 1169
    },
    "progress": {
        "def": "movement forward or toward a place ",
        "rank": 1170
    },
    "global": {
        "def": "relating to the whole world",
        "rank": 1171
    },
    "advertise": {
        "def": "to make the public aware of something (such as a product) that is being sold",
        "rank": 1172
    },
    "chief": {
        "def": "the person who is the leader of a group of people, of an organization, etc.",
        "rank": 1173
    },
    "slightly": {
        "def": "a little",
        "rank": 1174
    },
    "scale": {
        "def": "a device that is used for weighing people or things ",
        "rank": 1175
    },
    "double": {
        "def": "made of two parts that are similar or exactly the same ",
        "rank": 1176
    },
    "nuclear": {
        "def": "relating to atomic power",
        "rank": 1177
    },
    "warn": {
        "def": "to tell (someone) about possible danger or trouble",
        "rank": 1178
    },
    "extent": {
        "def": "the range, distance, or space that is covered or affected by something or included in something ",
        "rank": 1179
    },
    "labor": {
        "def": "work, especially the type of work that needs a lot of physical effort; workers",
        "rank": 1180
    },
    "library": {
        "def": "a place where books, magazines, and other materials (such as videos and musical recordings) are available for people to use or borrow ",
        "rank": 1181
    },
    "respond": {
        "def": "to say or write to answer the question",
        "rank": 1182
    },
    "edge": {
        "def": "the line or part where an object or area begins or ends ",
        "rank": 1183
    },
    "partner": {
        "def": "someone's husband or wife or the person someone has sexual relations with ",
        "rank": 1184
    },
    "experiment": {
        "def": "a scientific test to observe the effect in order to learn",
        "rank": 1185
    },
    "satisfy": {
        "def": " to cause (someone) to be happy or pleased ",
        "rank": 1186
    },
    "pain": {
        "def": "the physical feeling caused by disease, injury, or something that hurts the body",
        "rank": 1187
    },
    "slow": {
        "def": "not moving quickly or not able to move quickly",
        "rank": 1188
    },
    "taxi": {
        "def": "a car that carries passengers to a place for an amount of money that is based on the distance traveled",
        "rank": 1189
    },
    "suit": {
        "def": "a set of clothes that usually consists of a jacket and a skirt or pair of pants that are made out of the same material ",
        "rank": 1190
    },
    "spot": {
        "def": " a small area of a surface that is different from other areas ",
        "rank": 1191
    },
    "regular": {
        "def": "happening over and over again at the same time or in the same way",
        "rank": 1192
    },
    "excite": {
        "def": "to cause feelings of enthusiasm in (someone)",
        "rank": 1193
    },
    "concept": {
        "def": "an abstract idea of something or how it works",
        "rank": 1194
    },
    "guide": {
        "def": "a person who leads or directs other people on a journey ",
        "rank": 1195
    },
    "initial": {
        "def": "existing or occurring at the beginning",
        "rank": 1196
    },
    "speaker": {
        "def": "the part of a radio, CD player, etc. which the sound comes out of; a person who is speaking",
        "rank": 1197
    },
    "dry": {
        "def": "having no or very little water or liquid",
        "rank": 1198
    },
    "secretary": {
        "def": "a person whose job is to do routine work for someone else",
        "rank": 1199
    },
    "photograph": {
        "def": "a picture made by a camera ",
        "rank": 1200
    },
    "scheme": {
        "def": "a clever plan to do or get something",
        "rank": 1201
    },
    "shake": {
        "def": " to move sometimes violently back and forth or up and down with short, quick movements ",
        "rank": 1202
    },
    "technique": {
        "def": "a way of doing by using special knowledge or skill",
        "rank": 1203
    },
    "tonight": {
        "def": "this night or the night following this day ",
        "rank": 1204
    },
    "apart": {
        "def": "separated by an amount of space ",
        "rank": 1205
    },
    "rain": {
        "def": "water that falls in drops from clouds in the sky",
        "rank": 1206
    },
    "cool": {
        "def": "somewhat cold : not warm or hot",
        "rank": 1207
    },
    "suggestion": {
        "def": "an idea about what someone should do or how someone should behave ",
        "rank": 1208
    },
    "defense": {
        "def": "the act of defending someone from attack",
        "rank": 1209
    },
    "distance": {
        "def": "the amount of space between two places or things",
        "rank": 1210
    },
    "north": {
        "def": "the direction that is to your left when you are facing the rising sun",
        "rank": 1211
    },
    "lift": {
        "def": "to move (something or someone) to a higher position",
        "rank": 1212
    },
    "conflict": {
        "def": "a struggle or fight for an idea, power, property, etc.",
        "rank": 1213
    },
    "excellent": {
        "def": "very good : extremely good ",
        "rank": 1214
    },
    "river": {
        "def": "a large natural flow of water that crosses an area of land that goes into the ocean",
        "rank": 1215
    },
    "expert": {
        "def": "a person who is very skillful or knowledgeable",
        "rank": 1216
    },
    "favor": {
        "def": "a kind or helpful act that you do for someone ",
        "rank": 1217
    },
    "funny": {
        "def": "causing laughter ",
        "rank": 1218
    },
    "eventually": {
        "def": "in the end, especially after a long time",
        "rank": 1219
    },
    "football": {
        "def": "a game in which two teams of players try to kick, run with, or throw an oval ball across each other's goal line; a ball used to play football",
        "rank": 1220
    },
    "heat": {
        "def": "energy that causes things to become warmer",
        "rank": 1221
    },
    "mistake": {
        "def": "something that is not correct : a wrong action, statement, or judgment",
        "rank": 1222
    },
    "dear": {
        "def": " loved or valued very much ",
        "rank": 1223
    },
    "improvement": {
        "def": "when something gets better or when you make it better",
        "rank": 1224
    },
    "chapter": {
        "def": "one of the main sections, periods of a book",
        "rank": 1225
    },
    "emerge": {
        "def": "to become known or prominent",
        "rank": 1226
    },
    "demonstrate": {
        "def": "to prove by showing examples ",
        "rank": 1227
    },
    "artist": {
        "def": "someone who creates art, especially paintings and drawings",
        "rank": 1228
    },
    "reform": {
        "def": "when changes are made to improve a system, organization, or law, or a change that is made",
        "rank": 1229
    },
    "adopt": {
        "def": "to begin to use or have (a different manner, method, etc.) ",
        "rank": 1230
    },
    "corner": {
        "def": " the point or area where two lines, edges, or sides of something meet ",
        "rank": 1231
    },
    "audience": {
        "def": "a group of people who gather together to listen to something (such as a concert) or watch something (such as a movie or play)",
        "rank": 1232
    },
    "struggle": {
        "def": " to try very hard to do, achieve, or deal with something that is difficult or that causes problems",
        "rank": 1233
    },
    "decrease": {
        "def": " to become smaller in size, amount, number, etc. ",
        "rank": 1234
    },
    "roll": {
        "def": "to move across the ground or another surface by turning over and over",
        "rank": 1235
    },
    "island": {
        "def": "an area of land that is surrounded by water",
        "rank": 1236
    },
    "camp": {
        "def": "a place that is usually far away from cities and that has tents, small houses, etc., that people can live in for a short period of time",
        "rank": 1237
    },
    "feed": {
        "def": "to give food to someone or something",
        "rank": 1238
    },
    "surround": {
        "def": " to be on every side of (someone or something)",
        "rank": 1239
    },
    "investor": {
        "def": "someone who puts money in a bank, business, etc. in order to make a profit",
        "rank": 1240
    },
    "fully": {
        "def": "completely",
        "rank": 1241
    },
    "fee": {
        "def": "an amount of money  paid for a particular action",
        "rank": 1242
    },
    "senior": {
        "def": "having a higher level job or position than someone else; older",
        "rank": 1243
    },
    "arrange": {
        "def": "to move and organize (things) into a particular order or position",
        "rank": 1244
    },
    "expense": {
        "def": "the amount of money that is needed to pay for or buy something ",
        "rank": 1245
    },
    "combine": {
        "def": "to cause (two or more things) to be together or to work together ",
        "rank": 1246
    },
    "cook": {
        "def": " someone who prepares and cooks food for eating at home, in a restaurant, etc.",
        "rank": 1247
    },
    "cultural": {
        "def": "relating to the habits, traditions, art, beliefs, etc. of a society",
        "rank": 1248
    },
    "map": {
        "def": " a picture or chart that shows the rivers, mountains, streets, etc., in a particular area ",
        "rank": 1249
    },
    "meal": {
        "def": "the foods eaten or prepared for eating at one time ",
        "rank": 1250
    },
    "shift": {
        "def": "to move or to cause a different place, position",
        "rank": 1251
    },
    "contribution": {
        "def": "something that you do or give to help produce or develop something, or to help make something successful",
        "rank": 1252
    },
    "weapon": {
        "def": " something (such as a gun, knife, club, or bomb) that is used for fighting or attacking someone or for defending yourself when someone is attacking you ",
        "rank": 1253
    },
    "ball": {
        "def": "a usually round object that is used in a game or sport or as a toy",
        "rank": 1254
    },
    "cash": {
        "def": "money in the form of coins or notes (= paper money)",
        "rank": 1255
    },
    "entire": {
        "def": "complete or full, with no part left out, whole",
        "rank": 1256
    },
    "reality": {
        "def": "the way things or situations really are",
        "rank": 1257
    },
    "solve": {
        "def": "to find a way to deal with and end (a problem) ",
        "rank": 1258
    },
    "lesson": {
        "def": "an activity that you do in order to learn something ",
        "rank": 1259
    },
    "kitchen": {
        "def": "a room in which food is cooked ",
        "rank": 1260
    },
    "circumstance": {
        "def": "a condition or fact affects a situation, environment",
        "rank": 1261
    },
    "confirm": {
        "def": "to make sure something is true or correct",
        "rank": 1262
    },
    "failure": {
        "def": "the act or result of failing",
        "rank": 1263
    },
    "busy": {
        "def": "actively doing something ",
        "rank": 1264
    },
    "contribute": {
        "def": "to give (money) or help to something",
        "rank": 1265
    },
    "tool": {
        "def": "something (such as a hammer, saw, shovel, etc.) that you hold in your hand and use for a particular task ",
        "rank": 1266
    },
    "mouth": {
        "def": "the opening through which food passes into the body ",
        "rank": 1267
    },
    "objective": {
        "def": "based on facts not influenced by feelings or opinions",
        "rank": 1268
    },
    "gas": {
        "def": " a substance (such as oxygen or hydrogen) that is like air and has no fixed shape",
        "rank": 1269
    },
    "lady": {
        "def": "a woman who behaves in a polite way",
        "rank": 1270
    },
    "quick": {
        "def": "done or happening in a short amount of time",
        "rank": 1271
    },
    "currently": {
        "def": "happening or existing now",
        "rank": 1272
    },
    "glad": {
        "def": "feeling pleasure, joy, or delight",
        "rank": 1273
    },
    "driver": {
        "def": "someone who drives a vehicle",
        "rank": 1274
    },
    "beach": {
        "def": "an area of sand or rocks next to the sea",
        "rank": 1275
    },
    "commercial": {
        "def": "related to or used in the buying and selling of goods and services ",
        "rank": 1276
    },
    "basically": {
        "def": "in the most important or fundamental ways",
        "rank": 1277
    },
    "spread": {
        "def": "to open, arrange, or place (something) over a large area ",
        "rank": 1278
    },
    "pop": {
        "def": "to make a short sound like a small explosion, or to make something do this by breaking it (like a balloon)",
        "rank": 1279
    },
    "variable": {
        "def": "changing often",
        "rank": 1280
    },
    "cancer": {
        "def": "a serious disease that is caused when cells in the body grow in a way that is uncontrolled and not normal",
        "rank": 1281
    },
    "brain": {
        "def": "the organ of the body in the head that controls functions, movements, sensations, and thoughts ",
        "rank": 1282
    },
    "reaction": {
        "def": "something you say, feel, or do because of something that has happened",
        "rank": 1283
    },
    "proceed": {
        "def": "to continue to do something\u3001carry on",
        "rank": 1284
    },
    "crisis": {
        "def": "a situation or time that is extremely dangerous or difficult",
        "rank": 1285
    },
    "neither": {
        "def": "not one or the other of two people or things ",
        "rank": 1286
    },
    "hide": {
        "def": " to put (something) in a place where it cannot be seen or found ",
        "rank": 1287
    },
    "refuse": {
        "def": "to say that you will not accept (something, such as a gift or offer) ",
        "rank": 1288
    },
    "consequence": {
        "def": "the result of an action or situation, especially a bad result",
        "rank": 1289
    },
    "volume": {
        "def": "the amount of sound,  a book forming part, series",
        "rank": 1290
    },
    "trend": {
        "def": "a general direction of developing, proceeding",
        "rank": 1291
    },
    "bag": {
        "def": "a container made of thin material (such as paper, plastic, or cloth) that opens at the top and is used for holding or carrying things ",
        "rank": 1292
    },
    "traffic": {
        "def": "the cars, trucks, etc. using a road",
        "rank": 1293
    },
    "mass": {
        "def": "a usually large amount of a substance that has no particular shape ",
        "rank": 1294
    },
    "left": {
        "def": "located on the same side of your body as your heart ",
        "rank": 1295
    },
    "owner": {
        "def": "someone who legally owns something",
        "rank": 1296
    },
    "length": {
        "def": "the distance from one end of something to the other end ",
        "rank": 1297
    },
    "vary": {
        "def": "to be different or to be different, have variation",
        "rank": 1298
    },
    "revenue": {
        "def": "money that is made by or paid to a business",
        "rank": 1299
    },
    "duty": {
        "def": "something that is done as part of a job",
        "rank": 1300
    },
    "repeat": {
        "def": "to say (something) again ",
        "rank": 1301
    },
    "mountain": {
        "def": " an area of land that rises very high above the land around it and that is higher than a hill ",
        "rank": 1302
    },
    "unfortunately": {
        "def": "used to say that you wish something was not true or that something had not happened",
        "rank": 1303
    },
    "survive": {
        "def": "to remain alive;  to continue to live",
        "rank": 1304
    },
    "schedule": {
        "def": "a plan of things that will be done ",
        "rank": 1305
    },
    "bedroom": {
        "def": " a room used for sleeping ",
        "rank": 1306
    },
    "employ": {
        "def": "to provide someone with a job that pays wages or a salary",
        "rank": 1307
    },
    "marriage": {
        "def": "the relationship that exists between a husband and a wife",
        "rank": 1308
    },
    "essential": {
        "def": "extremely important and necessary ",
        "rank": 1309
    },
    "critical": {
        "def": "used to describe negative comments or judgments about something or someone",
        "rank": 1310
    },
    "ticket": {
        "def": "a piece of paper that allows you to see a show, participate in an event, travel on a vehicle, etc.",
        "rank": 1311
    },
    "smoke": {
        "def": "the cloud of black, gray, or white gases and dust that is produced by burning something ",
        "rank": 1312
    },
    "fan": {
        "def": "a machine or device that is used to move the air and make people or things cooler",
        "rank": 1313
    },
    "flight": {
        "def": "a journey in an aircraft; the act of flying",
        "rank": 1314
    },
    "relatively": {
        "def": "quite, when compared to other things or people",
        "rank": 1315
    },
    "equal": {
        "def": "the same in number, amount, degree or quality",
        "rank": 1316
    },
    "egg": {
        "def": "a hard-shelled oval thing from which a young bird is born ",
        "rank": 1317
    },
    "bottom": {
        "def": "the lowest part, point, or level of something",
        "rank": 1318
    },
    "novel": {
        "def": "a book that tells a story about imaginary people and events",
        "rank": 1319
    },
    "somewhere": {
        "def": "in, at, or to a place not known, named, or specified ",
        "rank": 1320
    },
    "plus": {
        "def": "having a value that is above zero",
        "rank": 1321
    },
    "coach": {
        "def": "someone whose job is to teach people to improve at a sport, skill, or school subject",
        "rank": 1322
    },
    "pleasure": {
        "def": " a feeling of happiness, enjoyment, or satisfaction : a pleasant or pleasing feeling ",
        "rank": 1323
    },
    "promote": {
        "def": "to raise the rank or position to a higher",
        "rank": 1324
    },
    "background": {
        "def": "Sounds or images that are not the main focus; a persons life experience up to now",
        "rank": 1325
    },
    "union": {
        "def": "an organization of workers formed to protect the rights",
        "rank": 1326
    },
    "neighbor": {
        "def": " a person who lives next to or near another person ",
        "rank": 1327
    },
    "provision": {
        "def": "a rule that is part of a law or an agreement",
        "rank": 1328
    },
    "appreciate": {
        "def": "to be grateful, thankful for (something)",
        "rank": 1329
    },
    "plane": {
        "def": "a vehicle that flies and has an engine and wings",
        "rank": 1330
    },
    "topic": {
        "def": "a matter people talk or write about",
        "rank": 1331
    },
    "enable": {
        "def": "to make it possible to do something",
        "rank": 1332
    },
    "package": {
        "def": "a box or large envelope that is sent or delivered usually through the mail or by another delivery service ",
        "rank": 1333
    },
    "code": {
        "def": "a set of letters or numbers that identifies information",
        "rank": 1334
    },
    "secret": {
        "def": " kept hidden from others",
        "rank": 1335
    },
    "manufacture": {
        "def": "to make (something) usually in large amounts by using machines ",
        "rank": 1336
    },
    "shareholder": {
        "def": "someone who owns shares (stock) in a company",
        "rank": 1337
    },
    "investigation": {
        "def": "when officials try to discover all the facts about something, especially a crime or an accident",
        "rank": 1338
    },
    "attract": {
        "def": " to cause (someone) to like or be interested in something ",
        "rank": 1339
    },
    "path": {
        "def": "a track that is made by people or animals walking over the ground ",
        "rank": 1340
    },
    "bird": {
        "def": "an animal that has wings and is covered with feathers ",
        "rank": 1341
    },
    "bond": {
        "def": "something that is shared between people or groups",
        "rank": 1342
    },
    "swim": {
        "def": "to move through water by moving your arms and legs ",
        "rank": 1343
    },
    "afraid": {
        "def": "worried that something will cause pain or injury ",
        "rank": 1344
    },
    "environmental": {
        "def": "relating to the environment",
        "rank": 1345
    },
    "finger": {
        "def": "one of the five long parts of the hand that are used for holding things",
        "rank": 1346
    },
    "anybody": {
        "def": "any person : anyone ",
        "rank": 1347
    },
    "colleague": {
        "def": "a person you work together or cooperate with",
        "rank": 1348
    },
    "insurance": {
        "def": "an agreement in which a person makes regular payments to a company and the company promises to pay money if the person is injured or dies, or to pay money equal to the value of something (such as a house or car) if it is damaged, lost, or stolen ",
        "rank": 1349
    },
    "flower": {
        "def": "the part of a plant that is often brightly colored, that usually lasts a short time, and from which the seed or fruit develops ",
        "rank": 1350
    },
    "consideration": {
        "def": "something that you have to think about when you make decisions or plans; the act of thinking about something carefully",
        "rank": 1351
    },
    "settle": {
        "def": "to end (something, such as an argument) by reaching an agreement",
        "rank": 1352
    },
    "powerful": {
        "def": "having a lot of strength or force",
        "rank": 1353
    },
    "quiet": {
        "def": "making very little noise ",
        "rank": 1354
    },
    "burn": {
        "def": "to give off heat, light, and gases ",
        "rank": 1355
    },
    "engineer": {
        "def": "a person who has scientific training and who designs and builds complicated products, machines, systems, or structures",
        "rank": 1356
    },
    "component": {
        "def": "one of the parts that consists something",
        "rank": 1357
    },
    "waste": {
        "def": "to use (something valuable) in a way that is not necessary or effective",
        "rank": 1358
    },
    "aid": {
        "def": "to provide what is useful or needed",
        "rank": 1359
    },
    "extremely": {
        "def": "very, or much more than usual",
        "rank": 1360
    },
    "earth": {
        "def": "the planet on which we live",
        "rank": 1361
    },
    "desire": {
        "def": "to want or wish for something",
        "rank": 1362
    },
    "apparently": {
        "def": "used to say that something seems to be true, although it is not certain",
        "rank": 1363
    },
    "tire": {
        "def": "to lose energy and begin to feel that you need to rest",
        "rank": 1364
    },
    "breath": {
        "def": "the air that you take into your lungs and send out from your lungs when you breathe",
        "rank": 1365
    },
    "delay": {
        "def": "a situation in which something happens later than it should ",
        "rank": 1366
    },
    "strength": {
        "def": "the quality or state of being physically strong",
        "rank": 1367
    },
    "connect": {
        "def": "to join (two or more things) together",
        "rank": 1368
    },
    "nurse": {
        "def": "a person who is trained to care for sick or injured people and who usually works in a hospital or doctor's office ",
        "rank": 1369
    },
    "sum": {
        "def": "the result of adding two or more numbers together",
        "rank": 1370
    },
    "brief": {
        "def": "lasting , having only a short period of time",
        "rank": 1371
    },
    "soldier": {
        "def": "a person who is in the military",
        "rank": 1372
    },
    "hardly": {
        "def": "used to say that something was almost not possible or almost did not happen",
        "rank": 1373
    },
    "lunch": {
        "def": "a light meal eaten in the middle of the day",
        "rank": 1374
    },
    "religious": {
        "def": "relating to religion; having a belief in religion",
        "rank": 1375
    },
    "strange": {
        "def": "different from what is usual, normal, or expected",
        "rank": 1376
    },
    "whereas": {
        "def": "in contrast, comparison, show the differences",
        "rank": 1377
    },
    "battle": {
        "def": "a military fight between groups of soldiers, ships, airplanes, etc.",
        "rank": 1378
    },
    "construction": {
        "def": "the work of building houses, offices, bridges, etc.",
        "rank": 1379
    },
    "engage": {
        "def": "to interest someone in something and keep them thinking about it",
        "rank": 1380
    },
    "district": {
        "def": "an area or section of a country, city, or town",
        "rank": 1381
    },
    "hate": {
        "def": "a very strong feeling of dislike",
        "rank": 1382
    },
    "boat": {
        "def": "a small vehicle that is used for traveling on water",
        "rank": 1383
    },
    "stone": {
        "def": "a hard substance that comes from the ground and is used for building, carving, etc. ",
        "rank": 1384
    },
    "gather": {
        "def": " to bring (things or people) together into a group or collect things",
        "rank": 1385
    },
    "tourist": {
        "def": "someone who visits a place for pleasure and does not live there",
        "rank": 1386
    },
    "divide": {
        "def": " to separate (something) into two or more parts or pieces",
        "rank": 1387
    },
    "expand": {
        "def": "to become bigger or larger in size and amount",
        "rank": 1388
    },
    "historical": {
        "def": "relating to events or people in the past, or the study of history",
        "rank": 1389
    },
    "delivery": {
        "def": "the act of taking something to a person or place",
        "rank": 1390
    },
    "tradition": {
        "def": "a way of thinking, behaving that used for a long time",
        "rank": 1391
    },
    "museum": {
        "def": "a building where you can look at important objects connected with art, history, or science",
        "rank": 1392
    },
    "mostly": {
        "def": "mainly or most of the time",
        "rank": 1393
    },
    "host": {
        "def": "a person (especially a man) who is entertaining guests socially or as a job ",
        "rank": 1394
    },
    "broad": {
        "def": " large from one side to the other side",
        "rank": 1395
    },
    "spring": {
        "def": "the season between winter and summer",
        "rank": 1396
    },
    "council": {
        "def": "a group of people who are chosen to make rules, laws, or decisions about something ",
        "rank": 1397
    },
    "shoulder": {
        "def": "the part of your body where your arm is connected ",
        "rank": 1398
    },
    "troop": {
        "def": "a group of people, especially soldiers or theater actors",
        "rank": 1399
    },
    "jump": {
        "def": "to move your body upward from the ground and often forward, backward, or sideways through the air by pushing with your legs ",
        "rank": 1400
    },
    "healthy": {
        "def": "physically strong and well; good for your health",
        "rank": 1401
    },
    "fresh": {
        "def": "newly produced, made, gathered, etc. : not preserved by being frozen, canned, etc. ",
        "rank": 1402
    },
    "conclude": {
        "def": "to stop or finish: to come to the end of something",
        "rank": 1403
    },
    "furthermore": {
        "def": "in addition to what has been said",
        "rank": 1404
    },
    "finance": {
        "def": "management of money that a company uses",
        "rank": 1405
    },
    "threat": {
        "def": "someone or something that could cause trouble, harm, etc.",
        "rank": 1406
    },
    "studio": {
        "def": "a room where an artist or photographer works; a place where TV, radio, or movies are made or broadcast",
        "rank": 1407
    },
    "bomb": {
        "def": "a weapon that explodes and causes damage",
        "rank": 1408
    },
    "safety": {
        "def": "freedom from harm or danger : the state of being safe ",
        "rank": 1409
    },
    "active": {
        "def": "requiring physical movement or energy",
        "rank": 1410
    },
    "winter": {
        "def": "the coldest season of the year that is after autumn and before spring",
        "rank": 1411
    },
    "export": {
        "def": "to send goods to be sold in another country",
        "rank": 1412
    },
    "acquire": {
        "def": "to get something ",
        "rank": 1413
    },
    "blow": {
        "def": "to cause (air or something carried by air) to move ",
        "rank": 1414
    },
    "sun": {
        "def": "the star that the Earth moves around and that gives the Earth heat and light ",
        "rank": 1415
    },
    "obvious": {
        "def": "easy to see notice or understand",
        "rank": 1416
    },
    "coffee": {
        "def": "a dark brown drink made from ground coffee beans and boiled water",
        "rank": 1417
    },
    "generate": {
        "def": "to produce, create or be produced",
        "rank": 1418
    },
    "visitor": {
        "def": "someone who visits a person or place ",
        "rank": 1419
    },
    "bind": {
        "def": "to tie or wrap (something) with rope, string, etc. ",
        "rank": 1420
    },
    "tape": {
        "def": "a long, narrow piece of material used to stick things",
        "rank": 1421
    },
    "cycle": {
        "def": "a series of regular and repeated actions",
        "rank": 1422
    },
    "assess": {
        "def": "to judge something",
        "rank": 1423
    },
    "editor": {
        "def": "someone whose job is to prepare text, film, etc. by deciding what to include and making mistakes correct",
        "rank": 1424
    },
    "spirit": {
        "def": "the non-physical part of a person, our emotions and soul",
        "rank": 1425
    },
    "scientist": {
        "def": "a person who is trained in a science and whose job involves doing scientific research or solving scientific problems",
        "rank": 1426
    },
    "monitor": {
        "def": "to observe, watch or check something",
        "rank": 1427
    },
    "tear": {
        "def": "a drop of liquid that comes from your eyes especially when you cry",
        "rank": 1428
    },
    "location": {
        "def": "a place or position",
        "rank": 1429
    },
    "actual": {
        "def": "to be real or existing in fact",
        "rank": 1430
    },
    "actor": {
        "def": "a person who acts in a play, movie, etc.",
        "rank": 1431
    },
    "corporate": {
        "def": "involving or associated with large group",
        "rank": 1432
    },
    "twice": {
        "def": "two times",
        "rank": 1433
    },
    "minister": {
        "def": "an official who heads a government department or a major section of a department in some countries",
        "rank": 1434
    },
    "murder": {
        "def": "the crime of deliberately killing a person",
        "rank": 1435
    },
    "comfortable": {
        "def": "Comfortable furniture, clothes, rooms, etc. make you feel relaxed and do not cause any pain",
        "rank": 1436
    },
    "pool": {
        "def": "a small area of water ",
        "rank": 1437
    },
    "wash": {
        "def": "to clean (something) with water and usually soap",
        "rank": 1438
    },
    "assessment": {
        "def": "to make a judgment about the quality, size, value, etc. of something",
        "rank": 1439
    },
    "register": {
        "def": "an official list, book or system for keeping records",
        "rank": 1440
    },
    "regulation": {
        "def": "an official rule that controls how something is done",
        "rank": 1441
    },
    "temperature": {
        "def": "a measurement that indicates how hot or cold something is",
        "rank": 1442
    },
    "violence": {
        "def": "the use of physical force to harm someone, to damage property, etc.",
        "rank": 1443
    },
    "hurt": {
        "def": "to cause pain or injury to (yourself, someone else, or a part of your body) ",
        "rank": 1444
    },
    "route": {
        "def": "a way to get from one place to another place",
        "rank": 1445
    },
    "recall": {
        "def": "to remember something",
        "rank": 1446
    },
    "impossible": {
        "def": "unable to be done or to happen : not possible ",
        "rank": 1447
    },
    "army": {
        "def": "a large group of soldiers organized to fight battles on land ",
        "rank": 1448
    },
    "sight": {
        "def": "the ability to see ",
        "rank": 1449
    },
    "accident": {
        "def": "a sudden event (such as a crash) that is not planned or intended and that causes damage or injury ",
        "rank": 1450
    },
    "error": {
        "def": "something that is not correct, a mistake",
        "rank": 1451
    },
    "usual": {
        "def": "the way things occur most of time, in most cases",
        "rank": 1452
    },
    "tough": {
        "def": "very difficult to do or deal with ",
        "rank": 1453
    },
    "opposite": {
        "def": "located at the other end, side, or corner of something",
        "rank": 1454
    },
    "wine": {
        "def": "an alcoholic drink made from the juice of grapes",
        "rank": 1455
    },
    "relax": {
        "def": "to become or free from tense, tight, or stiff",
        "rank": 1456
    },
    "characteristic": {
        "def": "a typical or obvious quality that makes one person or thing different from others",
        "rank": 1457
    },
    "noise": {
        "def": "a loud or unpleasant sound ",
        "rank": 1458
    },
    "carefully": {
        "def": "giving a lot of attention to what you are doing so that you do not have an accident, make a mistake, or damage something",
        "rank": 1459
    },
    "camera": {
        "def": "a device that is used for taking photographs or for making movies, television programs, etc.",
        "rank": 1460
    },
    "possibly": {
        "def": "used when something is not certain",
        "rank": 1461
    },
    "convince": {
        "def": "to cause someone to believe that something is true",
        "rank": 1462
    },
    "arrangement": {
        "def": "an agreement between two people or groups; a plan",
        "rank": 1463
    },
    "shock": {
        "def": "a sudden usually unpleasant or upsetting feeling caused by something unexpected ",
        "rank": 1464
    },
    "oppose": {
        "def": "to disagree with or disapprove of (something or someone) ",
        "rank": 1465
    },
    "climb": {
        "def": "to move or go up (something) using your feet and often your hands ",
        "rank": 1466
    },
    "slowly": {
        "def": "at a low speed",
        "rank": 1467
    },
    "relevant": {
        "def": "relating to a subject in an considerable way",
        "rank": 1468
    },
    "consist": {
        "def": "to have as an essential, necessary or main part",
        "rank": 1469
    },
    "principal": {
        "def": "most important person, main importance",
        "rank": 1470
    },
    "lawyer": {
        "def": "a person whose job is to guide and assist people in matters relating to the law",
        "rank": 1471
    },
    "manner": {
        "def": "the way that something is done or happens ",
        "rank": 1472
    },
    "gun": {
        "def": "a weapon that shoots bullets or shells",
        "rank": 1473
    },
    "locate": {
        "def": "to discover the place or position of something",
        "rank": 1474
    },
    "onto": {
        "def": "to a position that is on (something, such as a surface, area, or object) ",
        "rank": 1475
    },
    "commit": {
        "def": "to decide to do something for a particular purpose",
        "rank": 1476
    },
    "domestic": {
        "def": "of, relating to, or made in your own family, country",
        "rank": 1477
    },
    "pack": {
        "def": "to put (something) into a bag, suitcase, etc., so that you can take it with you",
        "rank": 1478
    },
    "kiss": {
        "def": "to touch (someone) with your lips as a greeting or as a way of showing love or sexual attraction",
        "rank": 1479
    },
    "protein": {
        "def": "food such as meat, cheese, fish, or eggs that is necessary for the body to grow and be strong",
        "rank": 1480
    },
    "branch": {
        "def": "a part of a tree that grows out from the trunk ",
        "rank": 1481
    },
    "rat": {
        "def": "an animal that looks like a large mouse and has a long tail",
        "rank": 1482
    },
    "voter": {
        "def": "someone who votes or who is officially allowed to vote",
        "rank": 1483
    },
    "vehicle": {
        "def": "a machine (such as a car) that is used to carry things ",
        "rank": 1484
    },
    "civil": {
        "def": "related to the people who live in a country",
        "rank": 1485
    },
    "literature": {
        "def": "written works (such as poems, plays, and novels) that are considered to be very good and to have lasting importance",
        "rank": 1486
    },
    "mainly": {
        "def": "mostly or to a large degree",
        "rank": 1487
    },
    "theater": {
        "def": "a building where plays, shows, etc., are performed on a stage ",
        "rank": 1488
    },
    "stare": {
        "def": "to look at someone or something for a long time and not move your eyes",
        "rank": 1489
    },
    "totally": {
        "def": "completely",
        "rank": 1490
    },
    "freedom": {
        "def": "the state of being free: such as a : the power to do what you want to do : the ability to move or act freely ",
        "rank": 1491
    },
    "quote": {
        "def": "to repeat exactly, to copy out",
        "rank": 1492
    },
    "industrial": {
        "def": "connected with industry; with a lot of factories",
        "rank": 1493
    },
    "significantly": {
        "def": "in a way that is easy to see or by a large amount",
        "rank": 1494
    },
    "guest": {
        "def": "a person who is invited to visit or stay in someone's home ",
        "rank": 1495
    },
    "commitment": {
        "def": "a promise or firm decision to do something; something that you must do that takes your time",
        "rank": 1496
    },
    "description": {
        "def": "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone",
        "rank": 1497
    },
    "capacity": {
        "def": "ability to hold, involve or contain people or things",
        "rank": 1498
    },
    "fifty": {
        "def": "the number 50",
        "rank": 1499
    },
    "skin": {
        "def": "the natural outer layer of tissue that covers the body of a person or animal ",
        "rank": 1500
    },
    "taste": {
        "def": "the sweet, sour, bitter, or salty quality of a thing that you can sense when it is in your mouth ",
        "rank": 1501
    },
    "perspective": {
        "def": "a way of thinking, an attitude toward something",
        "rank": 1502
    },
    "belong": {
        "def": "used to say that someone or something should be in a particular place or situation",
        "rank": 1503
    },
    "normally": {
        "def": "usually",
        "rank": 1504
    },
    "ought": {
        "def": "used to indicate what is expected",
        "rank": 1505
    },
    "participant": {
        "def": "someone who is involved in an activity",
        "rank": 1506
    },
    "comparison": {
        "def": " the act of looking at things to see how they are similar or different ",
        "rank": 1507
    },
    "till": {
        "def": "until",
        "rank": 1508
    },
    "belief": {
        "def": "a feeling of being sure that someone or something exists or that something is true ",
        "rank": 1509
    },
    "dangerous": {
        "def": "If someone or something is dangerous, they could harm you; not safe",
        "rank": 1510
    },
    "representative": {
        "def": "typical of a particular group of people or of a particular thing ",
        "rank": 1511
    },
    "signal": {
        "def": " an event or act which shows that something exists or that gives information about something",
        "rank": 1512
    },
    "fashion": {
        "def": "a popular way of dressing during a particular time or among a particular group of people ",
        "rank": 1513
    },
    "technical": {
        "def": "the practical use of machines or science in industry",
        "rank": 1514
    },
    "interaction": {
        "def": "the activity of talking and doing things with other people, or the way you do this",
        "rank": 1515
    },
    "deny": {
        "def": "to refuse to accept",
        "rank": 1516
    },
    "friendly": {
        "def": "acting like a friend : kind and helpful ",
        "rank": 1517
    },
    "previously": {
        "def": "before the present time or the time referred to",
        "rank": 1518
    },
    "gold": {
        "def": "a soft yellow metal that is very valuable and that is used especially in jewelry",
        "rank": 1519
    },
    "danger": {
        "def": "the possibility that you will be hurt or killed ",
        "rank": 1520
    },
    "participate": {
        "def": "to take part with others in doing something",
        "rank": 1521
    },
    "occasion": {
        "def": "a special event or time",
        "rank": 1522
    },
    "square": {
        "def": "a four-sided shape that is made up of four straight sides that are the same length",
        "rank": 1523
    },
    "leadership": {
        "def": "a position as a leader of a group, organization, etc. ",
        "rank": 1524
    },
    "gift": {
        "def": "something that is given to another person or to a group or organization ",
        "rank": 1525
    },
    "mobile": {
        "def": "able to move or be moved easily",
        "rank": 1526
    },
    "border": {
        "def": "a line separating one country or state from another ",
        "rank": 1527
    },
    "shoe": {
        "def": "an outer covering for your foot that usually has a stiff bottom part called a sole with a thicker part called a heel attached to it and an upper part that covers part or all of the top of your foot ",
        "rank": 1528
    },
    "label": {
        "def": "an attached piece of paper used to identify something",
        "rank": 1529
    },
    "load": {
        "def": "something that is lifted and carried ",
        "rank": 1530
    },
    "prison": {
        "def": "a building where people are kept as punishment for a crime or while they are waiting to go to court",
        "rank": 1531
    },
    "wood": {
        "def": " the hard substance that makes up the stems and branches of trees and shrubs ",
        "rank": 1532
    },
    "ad": {
        "def": "an advertisement",
        "rank": 1533
    },
    "internal": {
        "def": "existing or situated on the inside of something",
        "rank": 1534
    },
    "suitable": {
        "def": "acceptable or right for someone or something",
        "rank": 1535
    },
    "west": {
        "def": "the direction where the sun sets; opposite of east",
        "rank": 1536
    },
    "affair": {
        "def": "work or activities done for a purpose",
        "rank": 1537
    },
    "discount": {
        "def": "a reduction in price",
        "rank": 1538
    },
    "outcome": {
        "def": "something that happens as a result, consequence",
        "rank": 1539
    },
    "advertisement": {
        "def": "a picture, short film, song, etc. which tries to persuade people to buy a product or service:",
        "rank": 1540
    },
    "ignore": {
        "def": "to pay no attention to something or someone",
        "rank": 1541
    },
    "cup": {
        "def": "a small round container that often has a handle and that is used for drinking liquids (such as tea and coffee) ",
        "rank": 1542
    },
    "suspect": {
        "def": " to think that (someone) is possibly guilty of a crime or of doing something wrong ",
        "rank": 1543
    },
    "citizen": {
        "def": "a person who legally belongs to a country and has the rights and protection of that country ",
        "rank": 1544
    },
    "definition": {
        "def": "an explanation of the meaning of a word or phrase",
        "rank": 1545
    },
    "arrest": {
        "def": "to use the power of the law to take and keep (someone, such as a criminal) ",
        "rank": 1546
    },
    "largely": {
        "def": "mainly",
        "rank": 1547
    },
    "destroy": {
        "def": "to cause (something) to end or no longer exist",
        "rank": 1548
    },
    "hall": {
        "def": "the area inside the entrance of a building ",
        "rank": 1549
    },
    "investigate": {
        "def": "to try to find out the facts, to carry out research",
        "rank": 1550
    },
    "desk": {
        "def": "a piece of furniture that is like a table and often has drawers \u25caPeople often sit at desks when they are writing or using a computer. ",
        "rank": 1551
    },
    "remind": {
        "def": "to make (someone) think about something again : to cause (someone) to remember something ",
        "rank": 1552
    },
    "familiar": {
        "def": " frequently seen, heard, or experienced ",
        "rank": 1553
    },
    "loan": {
        "def": "an amount of money that is given to someone for a period of time with a promise that it will be paid back",
        "rank": 1554
    },
    "explore": {
        "def": "to look at (something) in a careful way to learn more about it;  to study or analyze (something) ",
        "rank": 1555
    },
    "tea": {
        "def": "a drink that is made by soaking the dried leaves of an Asian plant in hot water ",
        "rank": 1556
    },
    "index": {
        "def": "a written or printed order list",
        "rank": 1557
    },
    "recommendation": {
        "def": "a piece of advice about what to do in a particular situation; a suggestion about something that is good in a certain situation",
        "rank": 1558
    },
    "complain": {
        "def": "to say or write that you are unhappy, sick, uncomfortable, etc., or that you do not like something ",
        "rank": 1559
    },
    "poll": {
        "def": "when people are asked questions to discover what they think about a subject; a survey",
        "rank": 1560
    },
    "hi": {
        "def": "hello",
        "rank": 1561
    },
    "wed": {
        "def": "to marry someone",
        "rank": 1562
    },
    "switch": {
        "def": "to change from one thing to another",
        "rank": 1563
    },
    "escape": {
        "def": "to get away from a place (such as a prison) where you are being held or kept ",
        "rank": 1564
    },
    "fairly": {
        "def": "more than average, but less than very; something done in a fair way",
        "rank": 1565
    },
    "lovely": {
        "def": "attractive or beautiful especially in a graceful way ",
        "rank": 1566
    },
    "permit": {
        "def": "to allow something to happen or to give permission for",
        "rank": 1567
    },
    "import": {
        "def": "to bring something into your country from another country for people to buy",
        "rank": 1568
    },
    "association": {
        "def": "an organized group of people who have the same interest",
        "rank": 1569
    },
    "dad": {
        "def": "father",
        "rank": 1570
    },
    "bright": {
        "def": "producing a lot of light ",
        "rank": 1571
    },
    "predict": {
        "def": "say or estimate that will or might happen",
        "rank": 1572
    },
    "division": {
        "def": "to say that (someone or something) is good and deserves to be chosen ",
        "rank": 1573
    },
    "debt": {
        "def": "an amount of money that you owe to a person, bank, company, etc.",
        "rank": 1574
    },
    "shout": {
        "def": "to say (something) very loudly",
        "rank": 1575
    },
    "device": {
        "def": "an object, machine, or equipment for a specific use",
        "rank": 1576
    },
    "wake": {
        "def": "to cause (a person or animal) to be awake after sleeping ",
        "rank": 1577
    },
    "proper": {
        "def": "correct according to social or moral rules ",
        "rank": 1578
    },
    "definitely": {
        "def": "without any doubt",
        "rank": 1579
    },
    "analyze": {
        "def": "to examine the details of something carefully, in order to understand or explain it",
        "rank": 1580
    },
    "victim": {
        "def": "someone who has suffered the effects of violence, illness, or bad luck",
        "rank": 1581
    },
    "necessarily": {
        "def": "(esp. in negatives) in all cases; as an expected result",
        "rank": 1582
    },
    "commission": {
        "def": "people who are given the job of doing something",
        "rank": 1583
    },
    "amaze": {
        "def": "to make someone very surprised",
        "rank": 1584
    },
    "combination": {
        "def": "a mixture of different people or things",
        "rank": 1585
    },
    "employment": {
        "def": "when someone is paid to work for a person or company",
        "rank": 1586
    },
    "conservative": {
        "def": "not trusting sudden changes or new ideas",
        "rank": 1587
    },
    "guarantee": {
        "def": "a assurance that the quality of something is good",
        "rank": 1588
    },
    "rank": {
        "def": "a position in a society, organization, group, etc.",
        "rank": 1589
    },
    "protection": {
        "def": "the state of being kept from harm, loss, etc.",
        "rank": 1590
    },
    "mouse": {
        "def": "a very small animal that has a pointed nose and a long, thin tail ",
        "rank": 1591
    },
    "nevertheless": {
        "def": "in spite of that, notwithstanding",
        "rank": 1592
    },
    "abuse": {
        "def": "violent, cruel treatment of someone",
        "rank": 1593
    },
    "researcher": {
        "def": " a person who studies a subject in detail in order to discover new information about it",
        "rank": 1594
    },
    "yield": {
        "def": "to produce or provide (something, such as a plant or crop)",
        "rank": 1595
    },
    "root": {
        "def": "the part of a plant that grows underground, gets water from the ground, and holds the plant in place",
        "rank": 1596
    },
    "secure": {
        "def": "protected from danger or harm, keep things safe",
        "rank": 1597
    },
    "elect": {
        "def": "to select (someone) for a position, job, etc., by voting ",
        "rank": 1598
    },
    "chain": {
        "def": "a series of usually metal links or rings that are connected to each other in a line and used for supporting heavy things, for holding things together, for decoration, etc.",
        "rank": 1599
    },
    "forest": {
        "def": "a thick growth of trees and bushes that covers a large area",
        "rank": 1600
    },
    "confidence": {
        "def": "a feeling or belief that you can do something well or succeed at something",
        "rank": 1601
    },
    "frame": {
        "def": "the basic structure and shape of the body of a person or animal ",
        "rank": 1602
    },
    "shot": {
        "def": "when a bullet is fired from a gun; a photograph; an attempt to score in sports by throwing or kicking a ball",
        "rank": 1603
    },
    "identity": {
        "def": "who someone is; the things that make one person or group of people different from others",
        "rank": 1604
    },
    "arise": {
        "def": "to begin to occur or to exist",
        "rank": 1605
    },
    "afford": {
        "def": "to be able to pay for (something) ",
        "rank": 1606
    },
    "birth": {
        "def": "the time when a baby comes out from the body of its mother",
        "rank": 1607
    },
    "tie": {
        "def": "to attach (someone or something) to something with a string, rope, etc. ",
        "rank": 1608
    },
    "brand": {
        "def": "a product that is made by a particular company",
        "rank": 1609
    },
    "instrument": {
        "def": " a tool or device used for a particular purpose ",
        "rank": 1610
    },
    "hole": {
        "def": " an opening into or through something",
        "rank": 1611
    },
    "grade": {
        "def": "a level of study that is completed by a student",
        "rank": 1612
    },
    "threaten": {
        "def": "to say that you will harm someone or do something unpleasant or unwanted especially in order to make someone do what you want",
        "rank": 1613
    },
    "hire": {
        "def": "to give work or a job to (someone) in exchange for wages or a salary",
        "rank": 1614
    },
    "moral": {
        "def": "concerning or relating to what is right and wrong in human behavior",
        "rank": 1615
    },
    "latter": {
        "def": "coming or happening near the end of a process, activity, series, life, etc.",
        "rank": 1616
    },
    "phase": {
        "def": "a distinct part or step in a process",
        "rank": 1617
    },
    "approve": {
        "def": " to believe that something or someone is good or acceptable ",
        "rank": 1618
    },
    "typical": {
        "def": "having all the qualities you expect a particular person, object, place, etc. to have",
        "rank": 1619
    },
    "strongly": {
        "def": "very much or in a very serious way",
        "rank": 1620
    },
    "channel": {
        "def": "a station of TV, or radio",
        "rank": 1621
    },
    "factory": {
        "def": "a building or group of buildings where products are made ",
        "rank": 1622
    },
    "judgment": {
        "def": "an opinion about someone or something that is decided after thinking carefully",
        "rank": 1623
    },
    "proportion": {
        "def": "an amount that is a part of a whole thing",
        "rank": 1624
    },
    "concentration": {
        "def": "the ability to think carefully about something you are doing and nothing else",
        "rank": 1625
    },
    "resident": {
        "def": "someone who lives in a particular place",
        "rank": 1626
    },
    "selection": {
        "def": "when someone or something is chosen; a thing or person who is chosen",
        "rank": 1627
    },
    "empty": {
        "def": "containing nothing",
        "rank": 1628
    },
    "opposition": {
        "def": "actions or opinions that show that you disagree with or disapprove of someone or something ",
        "rank": 1629
    },
    "entirely": {
        "def": "completely",
        "rank": 1630
    },
    "session": {
        "def": "a period during which you do one activity",
        "rank": 1631
    },
    "sexual": {
        "def": "relating to the activity of sex",
        "rank": 1632
    },
    "ice": {
        "def": "frozen water ",
        "rank": 1633
    },
    "master": {
        "def": "someone who has control or power over others",
        "rank": 1634
    },
    "narrow": {
        "def": " long and not wide : small from one side to the other side ",
        "rank": 1635
    },
    "graduate": {
        "def": "someone who has studied for and received a degree (= qualification) from a school, college, or university",
        "rank": 1636
    },
    "increasingly": {
        "def": "more and more",
        "rank": 1637
    },
    "insist": {
        "def": "to say firmly that something is true, especially when other people do not believe you; to demand that something be done",
        "rank": 1638
    },
    "bridge": {
        "def": "a structure built over something (such as a river) so that people or vehicles can get across ",
        "rank": 1639
    },
    "license": {
        "def": "to give someone official permission to do or have something",
        "rank": 1640
    },
    "concentrate": {
        "def": "to think about or give attention to something",
        "rank": 1641
    },
    "plenty": {
        "def": "a large number or amount of something;  a number or amount of something that is enough for a particular purpose ",
        "rank": 1642
    },
    "entry": {
        "def": "when you come into or go into a place",
        "rank": 1643
    },
    "reduction": {
        "def": " the act of making something smaller in size, amount, number, etc. : the act of reducing something",
        "rank": 1644
    },
    "respectively": {
        "def": "in the same order as the people or things you have just talked about",
        "rank": 1645
    },
    "farmer": {
        "def": "someone who owns or looks after a farm",
        "rank": 1646
    },
    "notion": {
        "def": "an idea or opinion about doing something",
        "rank": 1647
    },
    "rent": {
        "def": "to pay money in return for being able to use",
        "rank": 1648
    },
    "odd": {
        "def": "to be strange or different from what is usual or expected",
        "rank": 1649
    },
    "musical": {
        "def": "relating to music; skilled at music",
        "rank": 1650
    },
    "appearance": {
        "def": "the way that someone or something looks",
        "rank": 1651
    },
    "bore": {
        "def": "to make someone feel bored",
        "rank": 1652
    },
    "faithfully": {
        "def": "in a loyal way or a way that can be trusted",
        "rank": 1653
    },
    "adviser": {
        "def": "someone whose job is to give advice about a subject",
        "rank": 1654
    },
    "reasonable": {
        "def": "fair and sensible ",
        "rank": 1655
    },
    "rely": {
        "def": "rely on;  to need for support, depend on",
        "rank": 1656
    },
    "presidential": {
        "def": "relating to the president of a country",
        "rank": 1657
    },
    "sequence": {
        "def": "the order in which things (should) happen",
        "rank": 1658
    },
    "soft": {
        "def": "easy to press, bend, cut, etc. : not hard or firm ",
        "rank": 1659
    },
    "stretch": {
        "def": "to make (something) wider or longer by pulling it ",
        "rank": 1660
    },
    "considerable": {
        "def": "something large in size, amount, or quantity",
        "rank": 1661
    },
    "fuel": {
        "def": "a substance that is burned to provide heat or power",
        "rank": 1662
    },
    "bottle": {
        "def": "a glass or plastic container that has a narrow neck and usually has no handle Bottles are usually used to store liquid or tablets.",
        "rank": 1663
    },
    "unique": {
        "def": "something is unlike anything, being the only one",
        "rank": 1664
    },
    "atmosphere": {
        "def": "the feeling which exists in a place or situation",
        "rank": 1665
    },
    "practical": {
        "def": "relating to what is real rather than to what is possible or imagined ",
        "rank": 1666
    },
    "presentation": {
        "def": "a talk giving information about something",
        "rank": 1667
    },
    "theme": {
        "def": "the main subject to discuss or describe",
        "rank": 1668
    },
    "hell": {
        "def": "according to some religions, the place where bad people go when they die; a very unpleasant experience",
        "rank": 1669
    },
    "lock": {
        "def": "a device that keeps something (such as a door, window, or box) from being opened and that is usually opened by using a key",
        "rank": 1670
    },
    "prior": {
        "def": "existing or coming earlier in time",
        "rank": 1671
    },
    "secondly": {
        "def": "used for introducing the second reason, idea, etc.",
        "rank": 1672
    },
    "peak": {
        "def": "the highest level or value of something; the top of a mountain",
        "rank": 1673
    },
    "mechanism": {
        "def": "a piece of machinery : a mechanical part or group of parts having a particular function ",
        "rank": 1674
    },
    "explanation": {
        "def": "the details or reasons that someone gives to make something clear or easy to understand",
        "rank": 1675
    },
    "nowadays": {
        "def": "at the present time ",
        "rank": 1676
    },
    "native": {
        "def": " born in a particular place ",
        "rank": 1677
    },
    "succeed": {
        "def": "to do what you are trying to do : to achieve the correct or desired result ",
        "rank": 1678
    },
    "mail": {
        "def": "the system used for sending letters and packages from one person to another ",
        "rank": 1679
    },
    "cast": {
        "def": "to choose an actor for a particular part in a film or play",
        "rank": 1680
    },
    "wild": {
        "def": "living in nature without human control or care : not tame",
        "rank": 1681
    },
    "folk": {
        "def": "people",
        "rank": 1682
    },
    "intelligence": {
        "def": "the ability to learn things or to consider situations",
        "rank": 1683
    },
    "sheet": {
        "def": " a large piece of cloth that is used to cover something ",
        "rank": 1684
    },
    "ear": {
        "def": "the part of the body that you hear with ",
        "rank": 1685
    },
    "journey": {
        "def": "an act of traveling from one place to another : trip ",
        "rank": 1686
    },
    "tiny": {
        "def": "extremely small",
        "rank": 1687
    },
    "terrible": {
        "def": "very shocking and upsetting ",
        "rank": 1688
    },
    "online": {
        "def": "connected to a system of computers, especially the Internet",
        "rank": 1689
    },
    "multiple": {
        "def": "with several parts",
        "rank": 1690
    },
    "declare": {
        "def": "to say or state (something) in an official or public way ",
        "rank": 1691
    },
    "engine": {
        "def": "a machine that changes energy (such as heat from burning fuel) into mechanical motion ",
        "rank": 1692
    },
    "besides": {
        "def": "other than or in addition to",
        "rank": 1693
    },
    "chairman": {
        "def": "he person (especially a man) who is in charge of a meeting, committee, or event ",
        "rank": 1694
    },
    "mental": {
        "def": "of or relating to the mind",
        "rank": 1695
    },
    "specifically": {
        "def": "for a particular reason, purpose, etc.",
        "rank": 1696
    },
    "relief": {
        "def": "a pleasant and relaxed feeling that someone has when something unpleasant stops or does not happen",
        "rank": 1697
    },
    "professor": {
        "def": "a teacher of high rank in a university or college",
        "rank": 1698
    },
    "yard": {
        "def": "an outdoor area that is next to a house and is usually covered by grass",
        "rank": 1699
    },
    "celebrate": {
        "def": "to do something enjoyable because it is a special day, or because something good has happened",
        "rank": 1700
    },
    "personality": {
        "def": " the way you are as a person",
        "rank": 1701
    },
    "construct": {
        "def": "to build or create something",
        "rank": 1702
    },
    "joint": {
        "def": "a point where two bones meet in the body ",
        "rank": 1703
    },
    "via": {
        "def": "by going through, by way of",
        "rank": 1704
    },
    "row": {
        "def": "a straight line of people or things that are next to each other ",
        "rank": 1705
    },
    "capture": {
        "def": "to catch someone and make them your prisoner; to get control of a place with force",
        "rank": 1706
    },
    "justice": {
        "def": "the process or result of using laws to fairly judge and punish crimes and criminals ",
        "rank": 1707
    },
    "constant": {
        "def": "things happening always or at a regular rate",
        "rank": 1708
    },
    "youth": {
        "def": "the time of life when someone is young : the time when a young person has not yet become an adult ",
        "rank": 1709
    },
    "coast": {
        "def": "the land along or near a sea or ocean",
        "rank": 1710
    },
    "expectation": {
        "def": "when you expect something to happen",
        "rank": 1711
    },
    "witness": {
        "def": ": a person who sees something (such as a crime) happen ",
        "rank": 1712
    },
    "blame": {
        "def": "to say or think that a person or thing is responsible for something bad that has happened ",
        "rank": 1713
    },
    "tone": {
        "def": "the quality of a sound, especially of someone's voice",
        "rank": 1714
    },
    "seriously": {
        "def": "in a serious way; not joking",
        "rank": 1715
    },
    "honor": {
        "def": "respect that is given to someone who is admired",
        "rank": 1716
    },
    "ourselves": {
        "def": "the reflexive form of the pronoun 'we'",
        "rank": 1717
    },
    "electronic": {
        "def": "Electronic equipment consists of things such as computers, televisions, and radios",
        "rank": 1718
    },
    "dealer": {
        "def": "a person or company that buys and sells things for profit",
        "rank": 1719
    },
    "disk": {
        "def": "a flat, round shape or object; a CD or DVD",
        "rank": 1720
    },
    "northern": {
        "def": " located in or toward the north ",
        "rank": 1721
    },
    "chemical": {
        "def": "something relating to chemistry",
        "rank": 1722
    },
    "somehow": {
        "def": " in a way that is not known or certain ",
        "rank": 1723
    },
    "hill": {
        "def": "a usually rounded area of land that is higher than the land around it but that is not as high as a mountain ",
        "rank": 1724
    },
    "fruit": {
        "def": "a usually sweet food (such as a blueberry, orange, or apple) that grows on a tree or bush ",
        "rank": 1725
    },
    "fellow": {
        "def": "used to describe people who belong to the same group or class or who share a situation, experience, etc.",
        "rank": 1726
    },
    "guard": {
        "def": " a state in which someone is carefully looking for possible danger, threats, problems, etc. ",
        "rank": 1727
    },
    "sky": {
        "def": "the space over the Earth where the sun, moon, stars, and clouds appear",
        "rank": 1728
    },
    "vision": {
        "def": "the ability to see, sight, eyesight",
        "rank": 1729
    },
    "impose": {
        "def": "to make someone to do or endure something",
        "rank": 1730
    },
    "reserve": {
        "def": "to make arrangements so that you will be able to use or have (something, such as a room, table, or seat) at a later time",
        "rank": 1731
    },
    "minimum": {
        "def": "the lowest number or amount that is possible",
        "rank": 1732
    },
    "surely": {
        "def": "used to express surprise that something has happened or is going to happen",
        "rank": 1733
    },
    "thin": {
        "def": "having a small distance between the top and bottom or front and back surfaces",
        "rank": 1734
    },
    "variation": {
        "def": "a difference in amount or quality",
        "rank": 1735
    },
    "formal": {
        "def": " requiring or using serious and proper clothes and manners ",
        "rank": 1736
    },
    "frequently": {
        "def": "often",
        "rank": 1737
    },
    "verb": {
        "def": "a word (such as jump, think, happen, or exist) that is usually one of the main parts of a sentence and that expresses an action, an occurrence, or a state of being",
        "rank": 1738
    },
    "acquisition": {
        "def": "the process of learning or getting something; something you have bought",
        "rank": 1739
    },
    "retire": {
        "def": "to stop a job or career because you have reached the age when you are not allowed to work anymore or do not need or want to work anymore",
        "rank": 1740
    },
    "recover": {
        "def": "to revive, become healthy after an illness or injury",
        "rank": 1741
    },
    "seed": {
        "def": "a small object produced by a plant from which a new plant can grow ",
        "rank": 1742
    },
    "tip": {
        "def": "the end of something that is usually long and thin",
        "rank": 1743
    },
    "instruction": {
        "def": "something that you have been told to do",
        "rank": 1744
    },
    "chart": {
        "def": "a table or diagram that shows information",
        "rank": 1745
    },
    "mission": {
        "def": "an important job, usually traveling somewhere",
        "rank": 1746
    },
    "absence": {
        "def": "a state or condition in which something expected, wanted, or looked for is not present or does not exist",
        "rank": 1747
    },
    "fat": {
        "def": "having a lot of extra flesh on your body : having a lot of body fat ",
        "rank": 1748
    },
    "east": {
        "def": "the direction where the sun rises",
        "rank": 1749
    },
    "derive": {
        "def": "to take, obtain or get from something",
        "rank": 1750
    },
    "ordinary": {
        "def": "normal or usual : not unusual, different, or special ",
        "rank": 1751
    },
    "critic": {
        "def": "a person who gives opinions about something",
        "rank": 1752
    },
    "helpful": {
        "def": "useful; willing to help",
        "rank": 1753
    },
    "gene": {
        "def": "a part of a cell that is passed on from a parent to a child and that controls particular characteristics",
        "rank": 1754
    },
    "anywhere": {
        "def": "in, at, or to any place ",
        "rank": 1755
    },
    "lean": {
        "def": "to bend or move from a straight position ",
        "rank": 1756
    },
    "glance": {
        "def": "to look somewhere for a short time",
        "rank": 1757
    },
    "ideal": {
        "def": "exactly right for a particular purpose, situation, or person",
        "rank": 1758
    },
    "neighborhood": {
        "def": "the people who live near each other or a section of a town or city",
        "rank": 1759
    },
    "smell": {
        "def": "the quality of a thing that you can sense with your nose",
        "rank": 1760
    },
    "silence": {
        "def": " a lack of sound or noise",
        "rank": 1761
    },
    "disappear": {
        "def": "to stop being visible : to pass out of sight ",
        "rank": 1762
    },
    "cat": {
        "def": "a small animal that is related to lions and tigers and that is often kept by people as a pet ",
        "rank": 1763
    },
    "lip": {
        "def": "either one of the two soft parts that surround the mouth ",
        "rank": 1764
    },
    "passenger": {
        "def": " a person who is traveling from one place to another in a car, bus, train, ship, airplane, etc., and who is not driving or working on it ",
        "rank": 1765
    },
    "compete": {
        "def": "to try to get or win something (such as a prize or reward) that someone else is also trying to win",
        "rank": 1766
    },
    "representation": {
        "def": "speaking or doing something officially for another person",
        "rank": 1767
    },
    "rush": {
        "def": " to move or do something very quickly or in a way that shows you are in a hurry ",
        "rank": 1768
    },
    "disorder": {
        "def": "a disease or mental problem; uncontrolled, bad behavior, especially by large groups of people",
        "rank": 1769
    },
    "shut": {
        "def": "to close (something) ",
        "rank": 1770
    },
    "complaint": {
        "def": "a statement that you are unhappy or not satisfied with something ",
        "rank": 1771
    },
    "careful": {
        "def": "giving a lot of attention to what you are doing so that you do not have an accident, make a mistake, or damage something",
        "rank": 1772
    },
    "column": {
        "def": "one of the vertical blocks of print into which a page of a newspaper, magazine, dictionary or spreadsheet, is divided",
        "rank": 1773
    },
    "religion": {
        "def": "the belief in a god",
        "rank": 1774
    },
    "legislation": {
        "def": "a law or a set of laws",
        "rank": 1775
    },
    "employer": {
        "def": "a person or company that pays people to work for them",
        "rank": 1776
    },
    "widely": {
        "def": "including a lot of different places, people, subjects, etc.",
        "rank": 1777
    },
    "protest": {
        "def": "when people show that they disagree with something by standing somewhere, shouting, carrying signs, etc.",
        "rank": 1778
    },
    "ancient": {
        "def": "very old : having lived or existed for a very long time",
        "rank": 1779
    },
    "illustrate": {
        "def": "explain with examples to make easier to understand",
        "rank": 1780
    },
    "faith": {
        "def": "strong belief or trust in someone or something ",
        "rank": 1781
    },
    "observation": {
        "def": "when someone watches someone or something carefully",
        "rank": 1782
    },
    "reject": {
        "def": "to refuse, deny to believe, accept, or consider",
        "rank": 1783
    },
    "imply": {
        "def": "to express in an indirect way",
        "rank": 1784
    },
    "ban": {
        "def": "to officially say that someone must not do something",
        "rank": 1785
    },
    "implement": {
        "def": "to put something in place",
        "rank": 1786
    },
    "command": {
        "def": "to give (someone) an order",
        "rank": 1787
    },
    "approximately": {
        "def": "close to a particular number or time although not exactly that number or time",
        "rank": 1788
    },
    "maximum": {
        "def": "The maximum amount of something is the largest amount that is allowed or possible",
        "rank": 1789
    },
    "qualify": {
        "def": "to give (someone) the necessary skill or knowledge to do a particular job or activity ",
        "rank": 1790
    },
    "somewhat": {
        "def": "in a small amount or degree;  to some degree",
        "rank": 1791
    },
    "regional": {
        "def": "relating to a region (= particular area)",
        "rank": 1792
    },
    "assumption": {
        "def": "something that you think is true without having any proof",
        "rank": 1793
    },
    "temporary": {
        "def": "continuing for a limited time, not permanent",
        "rank": 1794
    },
    "attractive": {
        "def": "having a pleasing appearance ",
        "rank": 1795
    },
    "plate": {
        "def": "a flat and usually round dish that is used for eating or serving food ",
        "rank": 1796
    },
    "sad": {
        "def": "not happy : feeling or showing grief or unhappiness ",
        "rank": 1797
    },
    "frequency": {
        "def": "the fact or condition of happening often : common occurrence ",
        "rank": 1798
    },
    "weak": {
        "def": "having little physical power or ability : not strong ",
        "rank": 1799
    },
    "slip": {
        "def": "to slide out of the proper position ",
        "rank": 1800
    },
    "victory": {
        "def": "success in defeating an opponent or enemy",
        "rank": 1801
    },
    "academic": {
        "def": "related to education, schools, universities, etc.",
        "rank": 1802
    },
    "county": {
        "def": "an area of Britain, Ireland, or the US that has its own local government",
        "rank": 1803
    },
    "circle": {
        "def": "a perfectly round shape : a line that is curved so that its ends meet and every point on the line is the same distance from the center ",
        "rank": 1804
    },
    "joke": {
        "def": "something said or done to cause laughter",
        "rank": 1805
    },
    "hat": {
        "def": "a covering for the head that often has a brim and a rounded or flat top ",
        "rank": 1806
    },
    "dozen": {
        "def": "a group of 12 people or things ",
        "rank": 1807
    },
    "kick": {
        "def": " to hit (someone or something) with your foot",
        "rank": 1808
    },
    "steal": {
        "def": "to secretly take something that does not belong to you, without intending to return it",
        "rank": 1809
    },
    "unable": {
        "def": "to not be able to do something",
        "rank": 1810
    },
    "settlement": {
        "def": "an official agreement that finishes an argument",
        "rank": 1811
    },
    "symptom": {
        "def": "a problem that is caused by and shows a more serious problem",
        "rank": 1812
    },
    "reporter": {
        "def": "describes the news on television, radio, or in a newspaper",
        "rank": 1813
    },
    "accommodation": {
        "def": "a place where you live or stay",
        "rank": 1814
    },
    "household": {
        "def": "a family or group of people who live together in a house",
        "rank": 1815
    },
    "tennis": {
        "def": "a sport in which two or four people hit a small ball to each other over a net",
        "rank": 1816
    },
    "merely": {
        "def": "used to emphasize that something is not large, important, or effective when compared to something else",
        "rank": 1817
    },
    "emotion": {
        "def": "a feeling such as love or anger, or strong feelings in general",
        "rank": 1818
    },
    "tall": {
        "def": "greater in height than the average person, building, etc.",
        "rank": 1819
    },
    "sick": {
        "def": "affected with a disease or illness",
        "rank": 1820
    },
    "calculate": {
        "def": " to find (a number, answer, etc.) by using mathematical processes ",
        "rank": 1821
    },
    "accuse": {
        "def": "to blame (someone) for something wrong or illegal : to say that someone is guilty of a fault or crime",
        "rank": 1822
    },
    "criminal": {
        "def": "involving illegal activity : relating to crime ",
        "rank": 1823
    },
    "scientific": {
        "def": "of or relating to science ",
        "rank": 1824
    },
    "estate": {
        "def": "land that a person owns",
        "rank": 1825
    },
    "unlike": {
        "def": "different from someone or something",
        "rank": 1826
    },
    "interpretation": {
        "def": "an explanation or opinion of what something means",
        "rank": 1827
    },
    "corporation": {
        "def": "a large company or group of companies",
        "rank": 1828
    },
    "appoint": {
        "def": "to choose (someone) to have a particular job : to give (someone) a position or duty ",
        "rank": 1829
    },
    "enemy": {
        "def": " someone who hates another : someone who attacks or tries to harm another",
        "rank": 1830
    },
    "criterion": {
        "def": "a fact or level of quality that you use when making a choice or decision",
        "rank": 1831
    },
    "beside": {
        "def": "by the side of (someone or something) : next to (someone or something) ",
        "rank": 1832
    },
    "firstly": {
        "def": "used to introduce the first idea, reason, etc. in a series",
        "rank": 1833
    },
    "assistant": {
        "def": "someone whose job is to help a person who has a more important job",
        "rank": 1834
    },
    "sweet": {
        "def": " containing a lot of sugar ",
        "rank": 1835
    },
    "competitive": {
        "def": "wanting to win or to be more successful than other people",
        "rank": 1836
    },
    "consistent": {
        "def": "always behaving or happening in a similar, usually positive, way",
        "rank": 1837
    },
    "closely": {
        "def": "If you look at or listen to something closely, you look at it or listen to it very carefully.",
        "rank": 1838
    },
    "equally": {
        "def": "to the same degree or level; into amounts or parts that are the same size",
        "rank": 1839
    },
    "advise": {
        "def": "to give an opinion or suggestion to someone about what should be done",
        "rank": 1840
    },
    "liberal": {
        "def": "believing government should actively support social needs",
        "rank": 1841
    },
    "meanwhile": {
        "def": "at or during the same time : in the meantime ",
        "rank": 1842
    },
    "impression": {
        "def": "an idea, feeling, or opinion about something or someone",
        "rank": 1843
    },
    "existence": {
        "def": "the state of being real ",
        "rank": 1844
    },
    "accompany": {
        "def": "to visit somewhere with someone",
        "rank": 1845
    },
    "output": {
        "def": "the amount of something that is produced",
        "rank": 1846
    },
    "exhibition": {
        "def": "when objects such as paintings are shown to the public",
        "rank": 1847
    },
    "salary": {
        "def": "an amount of money that an employee is paid each year",
        "rank": 1848
    },
    "attach": {
        "def": "to be associated or connected with",
        "rank": 1849
    },
    "acknowledge": {
        "def": "to consider or regard something",
        "rank": 1850
    },
    "snow": {
        "def": "soft, white pieces of frozen water that fall to the ground from the sky in cold weather ",
        "rank": 1851
    },
    "properly": {
        "def": "correctly, or in a satisfactory way",
        "rank": 1852
    },
    "breast": {
        "def": "one of the two soft, round parts on a woman's chest",
        "rank": 1853
    },
    "prime": {
        "def": "most important, chief importance in value",
        "rank": 1854
    },
    "intention": {
        "def": " the thing that you plan to do or achieve : an aim or purpose ",
        "rank": 1855
    },
    "ill": {
        "def": "not well or healthy : sick or unhealthy ",
        "rank": 1856
    },
    "reward": {
        "def": "money or another kind of payment that is given or received for something that has been done or that is offered for something that might be done",
        "rank": 1857
    },
    "bother": {
        "def": "to make someone feel worried or upset",
        "rank": 1858
    },
    "primarily": {
        "def": "mainly",
        "rank": 1859
    },
    "gray": {
        "def": " having a color between black and white : having a color that is like the color of smoke",
        "rank": 1860
    },
    "expose": {
        "def": "to make visible, without any covering or protection",
        "rank": 1861
    },
    "childhood": {
        "def": "the period of time when a person is a child",
        "rank": 1862
    },
    "discipline": {
        "def": "control that is gained by requiring that rules or orders be obeyed and punishing bad behavior ",
        "rank": 1863
    },
    "everywhere": {
        "def": " in or to every place ",
        "rank": 1864
    },
    "medicine": {
        "def": "a substance that is used in treating disease or relieving pain and that is usually in the form of a pill or a liquid",
        "rank": 1865
    },
    "differ": {
        "def": "to be different; to have a different opinion",
        "rank": 1866
    },
    "input": {
        "def": "to put in information, advice or opinions",
        "rank": 1867
    },
    "politician": {
        "def": " someone who is active in government usually as an elected official",
        "rank": 1868
    },
    "wage": {
        "def": "an amount of money that a worker is paid based on the number of hours, days, etc., that are worked ",
        "rank": 1869
    },
    "implication": {
        "def": "a result or effect that seems likely in the future; something suggested without being said directly",
        "rank": 1870
    },
    "substantial": {
        "def": "large in size or amount",
        "rank": 1871
    },
    "infant": {
        "def": "a baby or very young child",
        "rank": 1872
    },
    "permanent": {
        "def": "lasting or continuing for a very long time or forever : not temporary or changing ",
        "rank": 1873
    },
    "rare": {
        "def": "not common or usual, not often",
        "rank": 1874
    },
    "remark": {
        "def": "the act of noticing or making a comment about something",
        "rank": 1875
    },
    "angry": {
        "def": " filled with anger : having a strong feeling of being upset or annoyed ",
        "rank": 1876
    },
    "knock": {
        "def": "to hit something (such as a door) with the knuckles of your hand or with a hard object (such as a knocker) in order to get people's attention",
        "rank": 1877
    },
    "injury": {
        "def": "damage to someone's body in an accident or attack",
        "rank": 1878
    },
    "producer": {
        "def": "a company, country, or person that makes goods or grows food; someone who controls how a film, play, program, or musical recording is made",
        "rank": 1879
    },
    "pocket": {
        "def": " a usually small cloth bag that is sewn into a piece of clothing, a larger bag, etc., and that is open at the top or side so that you can put things into it ",
        "rank": 1880
    },
    "alive": {
        "def": "having life : living : not dead ",
        "rank": 1881
    },
    "currency": {
        "def": "the money system that a country uses ",
        "rank": 1882
    },
    "manufacturer": {
        "def": "a company that manufactures something",
        "rank": 1883
    },
    "king": {
        "def": " a male ruler of a country who usually inherits his position and rules for life",
        "rank": 1884
    },
    "obligation": {
        "def": "something that you do because it is your duty or because you feel you have to",
        "rank": 1885
    },
    "initiative": {
        "def": "a plan or activity that is done to solve a problem or improve a situation",
        "rank": 1886
    },
    "talent": {
        "def": "a natural ability to do something",
        "rank": 1887
    },
    "breakfast": {
        "def": "the first meal of the day",
        "rank": 1888
    },
    "resolution": {
        "def": "an official decision that is made after a group or organization have voted",
        "rank": 1889
    },
    "emotional": {
        "def": "showing strong feelings, or making people have strong feelings",
        "rank": 1890
    },
    "enhance": {
        "def": "make effect to increase or improve",
        "rank": 1891
    },
    "core": {
        "def": "the central part of something that is important",
        "rank": 1892
    },
    "framework": {
        "def": "the basic structure of something ",
        "rank": 1893
    },
    "found": {
        "def": "to start an organization, especially by providing money",
        "rank": 1894
    },
    "phrase": {
        "def": "a group of words which are often used together and have a particular meaning",
        "rank": 1895
    },
    "southern": {
        "def": "in or from the south part of an area",
        "rank": 1896
    },
    "gap": {
        "def": "a space between two people or things ",
        "rank": 1897
    },
    "storm": {
        "def": "an occurrence of bad weather in which there is a lot of rain, snow, etc., and often strong winds",
        "rank": 1898
    },
    "undertake": {
        "def": "to begin or attempt, commit oneself to and begin",
        "rank": 1899
    },
    "distinguish": {
        "def": "to notice or recognize a difference between people or things ",
        "rank": 1900
    },
    "draft": {
        "def": "a former version of something to make final",
        "rank": 1901
    },
    "priority": {
        "def": "the fact that is more important than other things",
        "rank": 1902
    },
    "democracy": {
        "def": "a system of government in which people elect their leaders, or a country with this system",
        "rank": 1903
    },
    "pursue": {
        "def": "to follow and try to catch or to reach a goal",
        "rank": 1904
    },
    "urge": {
        "def": "to try to persuade (someone) in a serious way to do something ",
        "rank": 1905
    },
    "pilot": {
        "def": "someone who flies an aircraft",
        "rank": 1906
    },
    "shirt": {
        "def": " a piece of clothing for the upper body that has sleeves and usually a collar and buttons down the front ",
        "rank": 1907
    },
    "coat": {
        "def": "an outer piece of clothing that can be long or short and that is worn to keep warm or dry ",
        "rank": 1908
    },
    "lake": {
        "def": "a large area of water that is surrounded by land ",
        "rank": 1909
    },
    "emphasize": {
        "def": "to show that something is especially important or needs special attention",
        "rank": 1910
    },
    "habit": {
        "def": "a usual way of behaving : something that a person does often in a regular and repeated ",
        "rank": 1911
    },
    "immediate": {
        "def": "happening or done without delay or existing now",
        "rank": 1912
    },
    "yellow": {
        "def": "having the color of the sun or of ripe lemons ",
        "rank": 1913
    },
    "communicate": {
        "def": "to give and exchange information by speaking or writing",
        "rank": 1914
    },
    "neck": {
        "def": "the part of the body between the head and the shoulders ",
        "rank": 1915
    },
    "vast": {
        "def": "extremely big",
        "rank": 1916
    },
    "breathe": {
        "def": " to move air into and out of your lungs",
        "rank": 1917
    },
    "origin": {
        "def": "the point or place where something begins or is created",
        "rank": 1918
    },
    "stable": {
        "def": "in a good situation or condition not likely changed",
        "rank": 1919
    },
    "sir": {
        "def": "used without a name as a form of polite address to a man you do not know",
        "rank": 1920
    },
    "enormous": {
        "def": "very large in size or amount",
        "rank": 1921
    },
    "negotiation": {
        "def": "when people try to make or change an agreement by discussion",
        "rank": 1922
    },
    "resolve": {
        "def": "to find an answer to solve problems",
        "rank": 1923
    },
    "terrorist": {
        "def": " someone who is involved in terrorism",
        "rank": 1924
    },
    "bloody": {
        "def": "covered in blood; violent and involving a lot of blood and injuries",
        "rank": 1925
    },
    "retain": {
        "def": "to continue to have or use, keep the quality",
        "rank": 1926
    },
    "bone": {
        "def": "any one of the hard pieces that form the frame (called a skeleton) inside a person's or animal's body ",
        "rank": 1927
    },
    "mathematics": {
        "def": "the study or science of numbers and shapes",
        "rank": 1928
    },
    "supplier": {
        "def": "a company or person who provides things that people want or need",
        "rank": 1929
    },
    "milk": {
        "def": "a white liquid produced by a woman to feed her baby or by female animals to feed their young ",
        "rank": 1930
    },
    "passage": {
        "def": "a long, narrow space that connects one place to another ",
        "rank": 1931
    },
    "fundamental": {
        "def": "forming a necessary part, base, or core",
        "rank": 1932
    },
    "pupil": {
        "def": "a child or young person who is being taught : student ",
        "rank": 1933
    },
    "publication": {
        "def": "the process of producing a book, magazine",
        "rank": 1934
    },
    "winner": {
        "def": "someone who wins a game, competition, or election",
        "rank": 1935
    },
    "elsewhere": {
        "def": "in or to another place ",
        "rank": 1936
    },
    "examination": {
        "def": "when someone looks at something very carefully; an exam",
        "rank": 1937
    },
    "gentleman": {
        "def": "a man who treats other people in a proper and polite way ",
        "rank": 1938
    },
    "soul": {
        "def": "the spiritual part of a person that is believed to give life to the body and in many religions is believed to live forever ",
        "rank": 1939
    },
    "forth": {
        "def": "out into notice or view",
        "rank": 1940
    },
    "contemporary": {
        "def": "happening or beginning currently or now",
        "rank": 1941
    },
    "urban": {
        "def": "belonging or relating to a town or city",
        "rank": 1942
    },
    "incident": {
        "def": "an event, especially one that is bad or unusual",
        "rank": 1943
    },
    "integrate": {
        "def": "to combine, join or create something",
        "rank": 1944
    },
    "swing": {
        "def": "to move backward and forward or from side to side while hanging from something",
        "rank": 1945
    },
    "panel": {
        "def": "a group of people who answer questions or give opinions",
        "rank": 1946
    },
    "ratio": {
        "def": "the quantitative relationship in size, etc.",
        "rank": 1947
    },
    "borrow": {
        "def": "to take and use (something that belongs to someone else) for a period of time before returning it",
        "rank": 1948
    },
    "sufficient": {
        "def": "having or providing enough when needed",
        "rank": 1949
    },
    "motion": {
        "def": " an act or process of moving",
        "rank": 1950
    },
    "exam": {
        "def": "a test of how much you know about something, or how well you can do something;  a series of medical tests",
        "rank": 1951
    },
    "governor": {
        "def": "a person who is the leader of the government of a state, province, etc. ",
        "rank": 1952
    },
    "boss": {
        "def": "someone who is responsible for employees and tells them what to do",
        "rank": 1953
    },
    "effectively": {
        "def": "in a way that is successful and achieves what you want",
        "rank": 1954
    },
    "install": {
        "def": "to put a piece of equipment somewhere and make it ready to use;  to put software on a computer",
        "rank": 1955
    },
    "premise": {
        "def": "an idea that you use to support another theory",
        "rank": 1956
    },
    "abroad": {
        "def": "in or to a foreign country ",
        "rank": 1957
    },
    "diet": {
        "def": "the type of food that someone usually eats; when someone eats less food to lose weight or because of a medical problem",
        "rank": 1958
    },
    "hence": {
        "def": "from now, later than the present time",
        "rank": 1959
    },
    "convention": {
        "def": "a large formal meeting of people with the same interest or work",
        "rank": 1960
    },
    "metal": {
        "def": "a substance (such as gold, tin, or copper) that usually has a shiny appearance, is a good conductor of electricity and heat, can be melted, and is usually capable of being shaped ",
        "rank": 1961
    },
    "layer": {
        "def": "referring to one of several sheets of a material or object",
        "rank": 1962
    },
    "typically": {
        "def": "used for saying that something is usual type of a person, thing, place, etc.",
        "rank": 1963
    },
    "grateful": {
        "def": "feeling or showing thanks",
        "rank": 1964
    },
    "crash": {
        "def": "to hit something hard enough to cause serious damage or destruction ",
        "rank": 1965
    },
    "incorporate": {
        "def": "to include or involve as part of something else",
        "rank": 1966
    },
    "formation": {
        "def": "the development of something into a particular thing or shape",
        "rank": 1967
    },
    "classic": {
        "def": "something popular or famous for a long time ",
        "rank": 1968
    },
    "aircraft": {
        "def": "a vehicle that can fly",
        "rank": 1969
    },
    "highlight": {
        "def": "the best or most interesting part of something",
        "rank": 1970
    },
    "sharp": {
        "def": "having a thin edge that is able to cut things or a fine point that is able to make a hole in things",
        "rank": 1971
    },
    "climate": {
        "def": "the weather conditions that an area usually has",
        "rank": 1972
    },
    "disappoint": {
        "def": "to make (someone) unhappy by not being as good as expected or by not doing something that was hoped for or expected",
        "rank": 1973
    },
    "fifteen": {
        "def": "the number 15",
        "rank": 1974
    },
    "defeat": {
        "def": "to win a victory over (someone or something) in a war, contest, game, etc. ",
        "rank": 1975
    },
    "retirement": {
        "def": "when you leave your job and stop working, usually because you are old",
        "rank": 1976
    },
    "defend": {
        "def": "to fight in order to keep (someone or something) safe ",
        "rank": 1977
    },
    "truly": {
        "def": "used to emphasize a description of something",
        "rank": 1978
    },
    "self": {
        "def": "the person that someone normally or truly is \u2014 used to describe the way someone acts or feels",
        "rank": 1979
    },
    "clinical": {
        "def": "relating to medical treatment and tests",
        "rank": 1980
    },
    "nearby": {
        "def": "not far away",
        "rank": 1981
    },
    "distribute": {
        "def": "to hand in or deliver something to people",
        "rank": 1982
    },
    "reputation": {
        "def": "the common opinion that people have about someone or something : the way in which people think of someone or something",
        "rank": 1983
    },
    "underlie": {
        "def": "to lie or be situated under something",
        "rank": 1984
    },
    "creation": {
        "def": "when someone makes something happen or exist; something that someone has made",
        "rank": 1985
    },
    "specify": {
        "def": "to state, name or mention exactly and clearly",
        "rank": 1986
    },
    "exclude": {
        "def": "to prevent someone from access to a group",
        "rank": 1987
    },
    "exhibit": {
        "def": "to display or make available for people to see",
        "rank": 1988
    },
    "extreme": {
        "def": "very great in degree",
        "rank": 1989
    },
    "appointment": {
        "def": "a time you have arranged to meet someone or go somewhere",
        "rank": 1990
    },
    "brown": {
        "def": "having a color like coffee or chocolate",
        "rank": 1991
    },
    "journalist": {
        "def": "someone whose job is journalism",
        "rank": 1992
    },
    "lucky": {
        "def": "having good things happen to you;  something that is believed to give good luck",
        "rank": 1993
    },
    "occupy": {
        "def": "to live in, fill or take up something",
        "rank": 1994
    },
    "soil": {
        "def": "the top layer of earth in which plants grow",
        "rank": 1995
    },
    "educational": {
        "def": "providing education, or relating to education",
        "rank": 1996
    },
    "upper": {
        "def": "located above another or others of the same kind ",
        "rank": 1997
    },
    "slide": {
        "def": "to move smoothly along a surface ",
        "rank": 1998
    },
    "correspond": {
        "def": "to have similarity or equality with something",
        "rank": 1999
    },
    "sudden": {
        "def": "happening, coming, or done very quickly in a way that is not expected",
        "rank": 2000
    },
    "gay": {
        "def": " sexually attracted to someone who is the same sex",
        "rank": 2001
    },
    "plastic": {
        "def": "a light, artificial substance that can be made into different shapes when it is soft and is used in a lot of different ways",
        "rank": 2002
    },
    "freeze": {
        "def": "to be become a hard substance (such as ice) because of cold",
        "rank": 2003
    },
    "peer": {
        "def": "someone who is the same age, or who has the same social position or abilities as other members of a group",
        "rank": 2004
    },
    "tooth": {
        "def": "one of the hard white objects inside the mouth that are used for biting and chewing",
        "rank": 2005
    },
    "exception": {
        "def": " someone or something that is different from others : someone or something that is not included ",
        "rank": 2006
    },
    "excuse": {
        "def": "to forgive someone for making a mistake, doing something wrong, etc.,",
        "rank": 2007
    },
    "bet": {
        "def": "to risk money on the result of a game, competition, etc.",
        "rank": 2008
    },
    "plain": {
        "def": "having no pattern or decoration, easy to see or understand ",
        "rank": 2009
    },
    "crop": {
        "def": "a plant or plant product that is grown by farmers ",
        "rank": 2010
    },
    "equivalent": {
        "def": "having equality in value, use or meaning",
        "rank": 2011
    },
    "rural": {
        "def": "relating to the countryside and not to towns",
        "rank": 2012
    },
    "complicate": {
        "def": "to make (something) more difficult or less simple ",
        "rank": 2013
    },
    "meat": {
        "def": "the flesh of an animal used as food ",
        "rank": 2014
    },
    "collapse": {
        "def": "to break down and fall apart suddenly",
        "rank": 2015
    },
    "dish": {
        "def": "a shallow container that you cook or serve food in ",
        "rank": 2016
    },
    "enterprise": {
        "def": "a business or organization",
        "rank": 2017
    },
    "luck": {
        "def": " the things that happen to a person because of chance",
        "rank": 2018
    },
    "restrict": {
        "def": "to prevent from doing something",
        "rank": 2019
    },
    "subsequent": {
        "def": "happening or coming after, later ",
        "rank": 2020
    },
    "originally": {
        "def": "at the beginning or before any changes",
        "rank": 2021
    },
    "perfectly": {
        "def": "used to emphasize the word that follows it; in a perfect way",
        "rank": 2022
    },
    "thick": {
        "def": "having a large distance between the top and bottom or front and back surfaces",
        "rank": 2023
    },
    "encounter": {
        "def": "unexpectedly be faced with or experience",
        "rank": 2024
    },
    "invitation": {
        "def": "when someone invites you to do something or go somewhere",
        "rank": 2025
    },
    "proud": {
        "def": "very happy and pleased because of something you have done, something you own, someone you know or are related to, etc.",
        "rank": 2026
    },
    "chip": {
        "def": "a piece of potato that is cooked in oil; a microchip in a computer",
        "rank": 2027
    },
    "analyst": {
        "def": "someone whose job is to examine the details of a situation carefully, and give their opinion about it",
        "rank": 2028
    },
    "valuable": {
        "def": "worth a lot of money, very useful or helpful",
        "rank": 2029
    },
    "bike": {
        "def": "bicycle; motorbike / motorcycle",
        "rank": 2030
    },
    "retail": {
        "def": "when products are sold to customers from shops",
        "rank": 2031
    },
    "calm": {
        "def": "not angry, upset, excited, etc. ",
        "rank": 2032
    },
    "unusual": {
        "def": "different and not ordinary, often in a way that is interesting or exciting",
        "rank": 2033
    },
    "criticism": {
        "def": "a negative comment; judgments and opinions on books, plays, films, etc.",
        "rank": 2034
    },
    "personally": {
        "def": "done by you and not someone else",
        "rank": 2035
    },
    "plot": {
        "def": "the things that happen in a story; a plan to do something bad",
        "rank": 2036
    },
    "beauty": {
        "def": "the quality of being physically attractive",
        "rank": 2037
    },
    "preserve": {
        "def": "to keep (something) in its original state or in good condition ",
        "rank": 2038
    },
    "emergency": {
        "def": "a serious or dangerous situation that needs immediate action",
        "rank": 2039
    },
    "comfort": {
        "def": "a state or situation in which you are relaxed and do not have any physically unpleasant feelings caused by pain, heat, cold, etc. ",
        "rank": 2040
    },
    "deserve": {
        "def": "used to say that someone or something should or should not have or be given ",
        "rank": 2041
    },
    "repair": {
        "def": "to put (something that is broken or damaged) back into good condition : fix ",
        "rank": 2042
    },
    "update": {
        "def": "to add new information",
        "rank": 2043
    },
    "severe": {
        "def": "very bad, serious, or unpleasant ",
        "rank": 2044
    },
    "recognition": {
        "def": "the act of accepting that something is true or important or that it exists ",
        "rank": 2045
    },
    "secondary": {
        "def": "less important than something else",
        "rank": 2046
    },
    "proof": {
        "def": "something which shows that something else is true or correct",
        "rank": 2047
    },
    "capable": {
        "def": "having the ability to do something",
        "rank": 2048
    },
    "outline": {
        "def": "a written list or description of only the most important parts of an essay, speech, plan, etc. ",
        "rank": 2049
    },
    "depression": {
        "def": "when you feel very unhappy, or a mental illness that makes you feel very unhappy",
        "rank": 2050
    },
    "evaluate": {
        "def": "to form an idea to judge something carefully",
        "rank": 2051
    },
    "pension": {
        "def": "money that a person receives after retirement",
        "rank": 2052
    },
    "external": {
        "def": "to be outside of something",
        "rank": 2053
    },
    "cope": {
        "def": "to deal successfully with a difficult situation",
        "rank": 2054
    },
    "emphasis": {
        "def": "a special quality in the way something is said",
        "rank": 2055
    },
    "restriction": {
        "def": "a rule or law that limits what people can do",
        "rank": 2056
    },
    "partly": {
        "def": "used to show that something is true to some degree but not completely",
        "rank": 2057
    },
    "aside": {
        "def": "to or toward the side",
        "rank": 2058
    },
    "massive": {
        "def": "very big",
        "rank": 2059
    },
    "intellectual": {
        "def": "using or relating to your ability to think and understand things",
        "rank": 2060
    },
    "minority": {
        "def": "a part of a group which is less than half of the whole group, often much less",
        "rank": 2061
    },
    "revolution": {
        "def": "the\u3000attempt by many people to end the rule of one government",
        "rank": 2062
    },
    "submit": {
        "def": "accept to a superior force, obey to someone",
        "rank": 2063
    },
    "prospect": {
        "def": "the possibility that something will happen",
        "rank": 2064
    },
    "equation": {
        "def": "when you show that two amounts are equal using mathematical symbols",
        "rank": 2065
    },
    "unemployment": {
        "def": "the number of people who are without jobs; not having a job",
        "rank": 2066
    },
    "intervention": {
        "def": "when someone intervenes, especially to prevent something from happening",
        "rank": 2067
    },
    "delight": {
        "def": "a strong feeling of happiness : great pleasure or satisfaction ",
        "rank": 2068
    },
    "mom": {
        "def": "mother",
        "rank": 2069
    },
    "anymore": {
        "def": "If you do not do something or something does not happen any more, you have stopped doing it or it does not now happen",
        "rank": 2070
    },
    "smart": {
        "def": "intelligent",
        "rank": 2071
    },
    "numerous": {
        "def": "existing in large numbers ",
        "rank": 2072
    },
    "illness": {
        "def": "a disease of the body or mind; sickness",
        "rank": 2073
    },
    "abandon": {
        "def": "to give up or quit, something not finished yet",
        "rank": 2074
    },
    "confuse": {
        "def": "to make (someone) uncertain or unable to understand something ",
        "rank": 2075
    },
    "wheel": {
        "def": "one of the round parts underneath a car, wagon, etc., that rolls and allows something to move ",
        "rank": 2076
    },
    "crucial": {
        "def": "extremely important",
        "rank": 2077
    },
    "efficient": {
        "def": "capable of producing desired results without wasting materials, time, or energy ",
        "rank": 2078
    },
    "dominate": {
        "def": "to have power or influence over",
        "rank": 2079
    },
    "database": {
        "def": "information stored in a computer in an organized structure so that it can be searched in different ways",
        "rank": 2080
    },
    "split": {
        "def": " to break apart or into pieces especially along a straight line",
        "rank": 2081
    },
    "trace": {
        "def": "find, describe or discover by investigation",
        "rank": 2082
    },
    "isolate": {
        "def": "to keep in a place or situation apart from others",
        "rank": 2083
    },
    "port": {
        "def": "a town or an area of a town next to water where ships arrive and leave from",
        "rank": 2084
    },
    "drama": {
        "def": "a play that is performed on stage, theater, or TV",
        "rank": 2085
    },
    "nose": {
        "def": "the part of the face or head through which a person or animal smells and breathes ",
        "rank": 2086
    },
    "rapidly": {
        "def": "happening or moving very quickly",
        "rank": 2087
    },
    "dispute": {
        "def": "a disagreement, especially one that lasts a long time",
        "rank": 2088
    },
    "landscape": {
        "def": "the appearance of an area of land, especially in the countryside",
        "rank": 2089
    },
    "spell": {
        "def": "to say, write, or print the letters of (a word or name) ",
        "rank": 2090
    },
    "ultimately": {
        "def": "finally, after a series of things have happened; in the end",
        "rank": 2091
    },
    "inch": {
        "def": " a unit of measurement equal to 1\u204436 yard or 1\u204412 of a foot (2.54 centimeters)",
        "rank": 2092
    },
    "profile": {
        "def": "a short description of someone's life, character, work, etc.",
        "rank": 2093
    },
    "phenomenon": {
        "def": "a fact that can observed and studied",
        "rank": 2094
    },
    "entertainment": {
        "def": "shows, films, television, or other performances or activities that entertain people",
        "rank": 2095
    },
    "boundary": {
        "def": "something (such as a river, a fence, or an imaginary line) that shows where an area ends and another area begins ",
        "rank": 2096
    },
    "gender": {
        "def": "the state of being male or female",
        "rank": 2097
    },
    "assistance": {
        "def": "help",
        "rank": 2098
    },
    "dramatic": {
        "def": "very sudden or noticeable; full of action and excitement",
        "rank": 2099
    },
    "educate": {
        "def": "to teach (someone) especially in a school, college, or university",
        "rank": 2100
    },
    "edition": {
        "def": "a book, newspaper, etc. that is one of several that are the same and were produced at the same time",
        "rank": 2101
    },
    "wing": {
        "def": "a part of an animal's body that is used for flying or gliding",
        "rank": 2102
    },
    "similarly": {
        "def": "in a similar way",
        "rank": 2103
    },
    "specialist": {
        "def": "someone who has a lot of experience, knowledge, or skill in a particular subject",
        "rank": 2104
    },
    "formula": {
        "def": "a plan, rule or method for doing or making something",
        "rank": 2105
    },
    "achievement": {
        "def": "when you succeed in doing something good, usually by working hard",
        "rank": 2106
    },
    "innovation": {
        "def": "a new idea or method that is being tried for the first time, or the use of such ideas or methods",
        "rank": 2107
    },
    "festival": {
        "def": "a series of special events, performances, etc. that often takes place over several days",
        "rank": 2108
    },
    "coverage": {
        "def": "the way a newspaper, television program, etc. reports an event or subject",
        "rank": 2109
    },
    "pitch": {
        "def": "in baseball, to throw the ball towards the hitter; to try to persuade someone to buy or decide something",
        "rank": 2110
    },
    "gate": {
        "def": "a place in a wall or a fence that has a movable part which can be opened or closed like a door ",
        "rank": 2111
    },
    "unknown": {
        "def": "not known; not famous",
        "rank": 2112
    },
    "distinction": {
        "def": "a difference between two similar things",
        "rank": 2113
    },
    "slight": {
        "def": " very small in degree or amount ",
        "rank": 2114
    },
    "roof": {
        "def": " the cover or top of a building, vehicle, etc. ",
        "rank": 2115
    },
    "scream": {
        "def": "to make a loud, high noise with your voice, or to shout something in a loud, high voice because you are afraid, hurt, or angry",
        "rank": 2116
    },
    "convert": {
        "def": "to change into a different form, character, or function",
        "rank": 2117
    },
    "minor": {
        "def": "not so large in size, not important or valuable",
        "rank": 2118
    },
    "negotiate": {
        "def": "to try to make or change an agreement by discussion",
        "rank": 2119
    },
    "era": {
        "def": "a period of time in history that is special for a particular reason",
        "rank": 2120
    },
    "episode": {
        "def": "one program of a series shown on television; a single event or period of time",
        "rank": 2121
    },
    "volunteer": {
        "def": "to offer to do something without being asked or told to do it",
        "rank": 2122
    },
    "infection": {
        "def": "a disease in a part of your body that is caused by bacteria or a virus",
        "rank": 2123
    },
    "preparation": {
        "def": "the things that you do or the time that you spend preparing for something",
        "rank": 2124
    },
    "arrival": {
        "def": "when someone or something arrives somewhere",
        "rank": 2125
    },
    "silver": {
        "def": "a soft grayish-white metal that is very valuable and is used to make jewelry, coins, knives, forks, etc. ",
        "rank": 2126
    },
    "electricity": {
        "def": "a type of energy that can produce light and heat, or make machines work",
        "rank": 2127
    },
    "sink": {
        "def": "to go down below the surface of water, mud, etc. ",
        "rank": 2128
    },
    "unlikely": {
        "def": "not expected to happen",
        "rank": 2129
    },
    "grand": {
        "def": "involving or including many people or things : very large in scope ",
        "rank": 2130
    },
    "web": {
        "def": "part of the Internet that consists of all the connected websites (= pages of text and pictures); a spider's net used to catch insects",
        "rank": 2131
    },
    "transition": {
        "def": "when something changes from one system or method to another, often gradually",
        "rank": 2132
    },
    "upset": {
        "def": "angry or unhappy ",
        "rank": 2133
    },
    "forecast": {
        "def": "a report saying what is likely to happen in the future",
        "rank": 2134
    },
    "pollution": {
        "def": "damage caused to water, air, etc. by harmful substances or waste",
        "rank": 2135
    },
    "eliminate": {
        "def": "completely remove,  to get rid of ",
        "rank": 2136
    },
    "agenda": {
        "def": "a list of subjects that people will discuss at a meeting",
        "rank": 2137
    },
    "wire": {
        "def": "a thin, flexible thread of metal ",
        "rank": 2138
    },
    "prize": {
        "def": " something that is won in a contest or given as an award ",
        "rank": 2139
    },
    "crack": {
        "def": "to break (something) so that there are lines in its surface but it is usually not separated into pieces",
        "rank": 2140
    },
    "deeply": {
        "def": "very much",
        "rank": 2141
    },
    "cable": {
        "def": "a wire covered by plastic that carries electricity, telephone signals, etc.",
        "rank": 2142
    },
    "apparent": {
        "def": "easy to see or clearly understand",
        "rank": 2143
    },
    "zone": {
        "def": "an area where a particular thing happens:",
        "rank": 2144
    },
    "fault": {
        "def": "responsibility for a problem, mistake, bad situation, etc. ",
        "rank": 2145
    },
    "cooperation": {
        "def": "when you work together with someone or do what they ask you",
        "rank": 2146
    },
    "pub": {
        "def": "a place where you can get drinks such as beer and usually food",
        "rank": 2147
    },
    "characterize": {
        "def": "to be typical of someone or something; to describe or show someone or something in a particular way",
        "rank": 2148
    },
    "honest": {
        "def": "good and truthful : not lying, stealing, or cheating ",
        "rank": 2149
    },
    "supporter": {
        "def": "someone who supports a particular idea, group, or person; a sports fan",
        "rank": 2150
    },
    "inspire": {
        "def": "to make someone feel that they want to do something and can do it",
        "rank": 2151
    },
    "whisper": {
        "def": "to speak very softly or quietly",
        "rank": 2152
    },
    "hunt": {
        "def": "to chase and kill (wild animals) for food or pleasure",
        "rank": 2153
    },
    "toy": {
        "def": "something a child plays with ",
        "rank": 2154
    },
    "welfare": {
        "def": "a program for poor or unemployed people help living",
        "rank": 2155
    },
    "everyday": {
        "def": "used or seen every day : suitable for every day ",
        "rank": 2156
    },
    "cloud": {
        "def": "a white or gray mass in the sky that is made of many very small drops of water",
        "rank": 2157
    },
    "constraint": {
        "def": "something that limits what you can do",
        "rank": 2158
    },
    "perceive": {
        "def": "to notice or become aware of something",
        "rank": 2159
    },
    "ease": {
        "def": "freedom from pain or trouble : comfort of body or mind ",
        "rank": 2160
    },
    "solid": {
        "def": "firm or hard : not having the form of a gas or liquid ",
        "rank": 2161
    },
    "prisoner": {
        "def": "someone who is being kept in prison as a punishment, or because they have been caught by an enemy",
        "rank": 2162
    },
    "expansion": {
        "def": "when something increases in size or amount",
        "rank": 2163
    },
    "agricultural": {
        "def": "the work and methods of growing crops and looking after animals which are then used for food",
        "rank": 2164
    },
    "virtually": {
        "def": "almost",
        "rank": 2165
    },
    "knee": {
        "def": "the joint that bends at the middle of your leg",
        "rank": 2166
    },
    "album": {
        "def": "several songs or pieces of music on a CD or record; a book in which you keep photographs, stamps, etc.",
        "rank": 2167
    },
    "bend": {
        "def": "to use force to cause (something, such as a wire or pipe) to become curved ",
        "rank": 2168
    },
    "exposure": {
        "def": "when someone experiences something or is affected by it because they are in a particular situation or place",
        "rank": 2169
    },
    "alter": {
        "def": "to change a part of something",
        "rank": 2170
    },
    "digital": {
        "def": "electronic systems that change sounds or images into signals in the form of binary numbers",
        "rank": 2171
    },
    "pour": {
        "def": "to cause (something) to flow in a steady stream from or into a container or place ",
        "rank": 2172
    },
    "satisfaction": {
        "def": "a happy or pleased feeling because of something that you did or something that happened to you",
        "rank": 2173
    },
    "tension": {
        "def": "a feeling that you are nervous, worried, and not relaxed",
        "rank": 2174
    },
    "wet": {
        "def": "covered or soaked with water or another liquid : not dry ",
        "rank": 2175
    },
    "perception": {
        "def": "what you think or believe about someone or something",
        "rank": 2176
    },
    "dimension": {
        "def": "a measurable extent of length, width, or height",
        "rank": 2177
    },
    "tight": {
        "def": "difficult to move : fastened, attached, or held in a position that is not easy to move ",
        "rank": 2178
    },
    "restore": {
        "def": "to put or bring back into existence or use, mend",
        "rank": 2179
    },
    "beer": {
        "def": "an alcoholic drink made from grain, or a glass or container of this drink",
        "rank": 2180
    },
    "sweep": {
        "def": "to remove (something, such as dust or dirt) from a surface with a broom or brush or with a quick movement of your hand, fingers, etc. ",
        "rank": 2181
    },
    "interpret": {
        "def": "to understand or translate the meaning of something",
        "rank": 2182
    },
    "assist": {
        "def": "to support or help someone",
        "rank": 2183
    },
    "crew": {
        "def": "a team of people with special skills who work together",
        "rank": 2184
    },
    "essay": {
        "def": "a short piece of writing about a particular subject, especially one written by a student",
        "rank": 2185
    },
    "assure": {
        "def": "to make sure of something",
        "rank": 2186
    },
    "anger": {
        "def": " a strong feeling of being upset or annoyed because of something wrong or bad",
        "rank": 2187
    },
    "deposit": {
        "def": "a payment that you make immediately when you decide to buy something, as proof that you will really buy it",
        "rank": 2188
    },
    "shower": {
        "def": "a device that produces a spray of water for you to stand under and wash your body ",
        "rank": 2189
    },
    "string": {
        "def": " a long, thin piece of twisted thread that you use to attach things, tie things together, or hang things",
        "rank": 2190
    },
    "elderly": {
        "def": "a more polite word for 'old', used to describe people",
        "rank": 2191
    },
    "extensive": {
        "def": "large in size or amount : very full or complete ",
        "rank": 2192
    },
    "truck": {
        "def": "a large road vehicle for carrying goods from place to place",
        "rank": 2193
    },
    "uniform": {
        "def": "same designed clothing that identifies belongings",
        "rank": 2194
    },
    "mood": {
        "def": "the way someone feels at a particular time",
        "rank": 2195
    },
    "detect": {
        "def": "to discover or identify the presence of something",
        "rank": 2196
    },
    "beneath": {
        "def": "in or to a lower position : below ",
        "rank": 2197
    },
    "shadow": {
        "def": "a dark shape that appears on a surface when someone or something moves between the surface and a source of light ",
        "rank": 2198
    },
    "mode": {
        "def": "a particular form, way or type of something",
        "rank": 2199
    },
    "territory": {
        "def": "land that is owned or controlled by a particular country",
        "rank": 2200
    },
    "trail": {
        "def": "a path through the countryside, often where people walk",
        "rank": 2201
    },
    "nervous": {
        "def": "worried and anxious",
        "rank": 2202
    },
    "parallel": {
        "def": "very similar and often occurring at the same time",
        "rank": 2203
    },
    "sail": {
        "def": "to travel on water in a ship or boat",
        "rank": 2204
    },
    "sensitive": {
        "def": "easily upset by the things that people think or say about you ",
        "rank": 2205
    },
    "hero": {
        "def": "someone who does something brave or good which people respect or admire them for",
        "rank": 2206
    },
    "competitor": {
        "def": "someone who is trying to win or do better than all others especially in business or sports : someone who is competing ",
        "rank": 2207
    },
    "initially": {
        "def": "at the beginning",
        "rank": 2208
    },
    "transform": {
        "def": "to change the shape completely in a good way",
        "rank": 2209
    },
    "strip": {
        "def": " to remove your clothing",
        "rank": 2210
    },
    "stream": {
        "def": "a natural flow of water that is smaller than a river ",
        "rank": 2211
    },
    "breed": {
        "def": "a type of dog, sheep, pig, etc.",
        "rank": 2212
    },
    "attribute": {
        "def": "to say that something is because of something else",
        "rank": 2213
    },
    "vital": {
        "def": "necessary",
        "rank": 2214
    },
    "awful": {
        "def": "very bad, of low quality, or unpleasant",
        "rank": 2215
    },
    "devote": {
        "def": "to decide to use or give something for something else",
        "rank": 2216
    },
    "stem": {
        "def": "the main long and thin part of a plant that rises above the soil and supports the leaves and flowers ",
        "rank": 2217
    },
    "height": {
        "def": "a measurement of how tall a person or thing is;  the distance from the bottom to the top of a person or thing",
        "rank": 2218
    },
    "apologize": {
        "def": "to tell someone that you are sorry about something you have done",
        "rank": 2219
    },
    "alright": {
        "def": "good enough, although not very good; safe or well",
        "rank": 2220
    },
    "owe": {
        "def": "to need to pay or repay money to a person, bank, business, etc.",
        "rank": 2221
    },
    "genetic": {
        "def": "relating to genes (= parts of cells which control particular characteristics)",
        "rank": 2222
    },
    "persuade": {
        "def": "to cause (someone) to do something by asking, arguing, or giving reasons",
        "rank": 2223
    },
    "recruit": {
        "def": " to try to persuade someone to work for a company or to join an organization",
        "rank": 2224
    },
    "vice": {
        "def": "something bad that someone often does; crime that involves sex or drugs",
        "rank": 2225
    },
    "steady": {
        "def": "not shaking or moving : held firmly in one place or position",
        "rank": 2226
    },
    "heavily": {
        "def": "a lot or to a great degree",
        "rank": 2227
    },
    "entrance": {
        "def": " the act of entering something",
        "rank": 2228
    },
    "furniture": {
        "def": "chairs, tables, beds, etc., that are used to make a room ready for use ",
        "rank": 2229
    },
    "strain": {
        "def": "when you feel worried and nervous about something; an injury to part of your body that is caused by using it too much",
        "rank": 2230
    },
    "random": {
        "def": "chosen, done without a particular plan or pattern",
        "rank": 2231
    },
    "justify": {
        "def": "giving reasons for doing something",
        "rank": 2232
    },
    "measurement": {
        "def": "the process of measuring something; the size and shape of something",
        "rank": 2233
    },
    "rarely": {
        "def": "not often",
        "rank": 2234
    },
    "meter": {
        "def": "a piece of equipment for measuring the amount of something such as electricity, time, or light",
        "rank": 2235
    },
    "pace": {
        "def": "the speed at which someone or something moves or does something",
        "rank": 2236
    },
    "western": {
        "def": "located in or toward the west ",
        "rank": 2237
    },
    "constitute": {
        "def": "to make up or form something",
        "rank": 2238
    },
    "spare": {
        "def": "kept as something extra that can be used if it is needed ",
        "rank": 2239
    },
    "designer": {
        "def": "someone who draws and plans how something will be made",
        "rank": 2240
    },
    "mature": {
        "def": "being an adult, being fully developed physically",
        "rank": 2241
    },
    "evil": {
        "def": "morally bad, causing harm or injury to someone",
        "rank": 2242
    },
    "curve": {
        "def": "a smooth, rounded line, shape, path, etc. ",
        "rank": 2243
    },
    "guilty": {
        "def": "ashamed because you have done something wrong; having broken a law",
        "rank": 2244
    },
    "jacket": {
        "def": "a short coat",
        "rank": 2245
    },
    "false": {
        "def": "not real or genuine \u2014 used to say that something is not really what it seems to be",
        "rank": 2246
    },
    "demonstration": {
        "def": "a protest in which people march or stand together; showing how to do something, or how something works",
        "rank": 2247
    },
    "wound": {
        "def": "an injury that is caused when a knife, bullet, etc., cuts or breaks the skin ",
        "rank": 2248
    },
    "frighten": {
        "def": "to cause (someone) to become afraid ",
        "rank": 2249
    },
    "muscle": {
        "def": "one of many pieces of tissue in the body that are connected to bones and which produce movement by becoming longer or shorter",
        "rank": 2250
    },
    "grass": {
        "def": " plants that have narrow green leaves, that are eaten by cows, sheep, horses, etc., and that are commonly grown on lawns and in gardens ",
        "rank": 2251
    },
    "substance": {
        "def": " a material of a particular kind ",
        "rank": 2252
    },
    "pink": {
        "def": "a pale red color : a color that is a mixture of red and white",
        "rank": 2253
    },
    "symbol": {
        "def": "an action, object that represents a particular idea or quality",
        "rank": 2254
    },
    "foundation": {
        "def": "the action of establishing an organization",
        "rank": 2255
    },
    "cite": {
        "def": "to write or say the words from a book or other source",
        "rank": 2256
    },
    "extension": {
        "def": "the act of making something longer or greater ",
        "rank": 2257
    },
    "tank": {
        "def": "a large container for storing liquid or gas",
        "rank": 2258
    },
    "disaster": {
        "def": "something that causes a lot of harm or damage; a very bad situation or result",
        "rank": 2259
    },
    "sigh": {
        "def": "to breathe out slowly and noisily, often because you are annoyed or unhappy",
        "rank": 2260
    },
    "routine": {
        "def": "the things you regularly do and how and when you do them",
        "rank": 2261
    },
    "cake": {
        "def": "a sweet baked food made from a mixture of flour, sugar, and other ingredients (such as eggs and butter) ",
        "rank": 2262
    },
    "efficiency": {
        "def": "the ability to do something or produce something without wasting materials, time, or energy",
        "rank": 2263
    },
    "membership": {
        "def": "the state of belonging to or being a part of a group or an organization : the state of being a member",
        "rank": 2264
    },
    "smooth": {
        "def": "having a flat, even surface : not rough : not having any bumps, ridges, or uneven parts ",
        "rank": 2265
    },
    "portion": {
        "def": "a part of a whole",
        "rank": 2266
    },
    "mirror": {
        "def": "a piece of glass with a shiny metallic material on one side which produces an image of anything that is in front of it",
        "rank": 2267
    },
    "resort": {
        "def": "a place where many people go for a holiday",
        "rank": 2268
    },
    "withdraw": {
        "def": "to take money out of a bank account;  to move out of a position, competition, area, etc.",
        "rank": 2269
    },
    "resistance": {
        "def": "refusal to accept something new or different",
        "rank": 2270
    },
    "giant": {
        "def": "extremely big, or much bigger than other similar things",
        "rank": 2271
    },
    "bid": {
        "def": "an attempt to achieve something; an offer to pay a particular amount of money for something",
        "rank": 2272
    },
    "naturally": {
        "def": "as you would expect; something that happens because of nature",
        "rank": 2273
    },
    "summary": {
        "def": "a brief statement that gives the most important info",
        "rank": 2274
    },
    "radical": {
        "def": "a very new and different from what is traditional",
        "rank": 2275
    },
    "tune": {
        "def": "a series of musical notes that produce a pleasing sound when played or sung ",
        "rank": 2276
    },
    "van": {
        "def": "a vehicle that is used for carrying things but which is smaller than a truck",
        "rank": 2277
    },
    "mutual": {
        "def": "shared between two or more people",
        "rank": 2278
    },
    "boot": {
        "def": "a strong shoe that covers your foot and part of your leg",
        "rank": 2279
    },
    "fascinate": {
        "def": "to interest someone a lot",
        "rank": 2280
    },
    "entitle": {
        "def": "to give someone the right to do or have something",
        "rank": 2281
    },
    "god": {
        "def": " the creator and ruler of the universe",
        "rank": 2282
    },
    "broadcast": {
        "def": "to send out (signals, programs, etc.) by radio or television ",
        "rank": 2283
    },
    "singer": {
        "def": "someone who sings",
        "rank": 2284
    },
    "platform": {
        "def": "a raised surface for people to stand on, especially when they are speaking to a lot of people; the area in a railway station where you get on and off the train",
        "rank": 2285
    },
    "whenever": {
        "def": "at any or every time that ",
        "rank": 2286
    },
    "apartment": {
        "def": "a set of rooms for someone to live in on one level of a building or house",
        "rank": 2287
    },
    "conventional": {
        "def": "Usual or traditional",
        "rank": 2288
    },
    "independence": {
        "def": "when someone looks after themselves and does not need money, help, or permission from other people",
        "rank": 2289
    },
    "reverse": {
        "def": "to change to an opposite state ,way or condition",
        "rank": 2290
    },
    "illustration": {
        "def": "a picture in a book, magazine, etc.; an example that explains or proves something",
        "rank": 2291
    },
    "loud": {
        "def": "making or causing a lot of noise : strong and noticeable in sound",
        "rank": 2292
    },
    "loose": {
        "def": "not tightly fastened, attached, or held ",
        "rank": 2293
    },
    "quantity": {
        "def": "an amount or number of something",
        "rank": 2294
    },
    "poem": {
        "def": " a piece of writing that usually has figurative language and that is written in separate lines that often have a repeated rhythm and sometimes rhyme ",
        "rank": 2295
    },
    "damn": {
        "def": "used to express anger",
        "rank": 2296
    },
    "pose": {
        "def": "to put someone in a position to be photographed",
        "rank": 2297
    },
    "depth": {
        "def": "a distance below a surface",
        "rank": 2298
    },
    "significance": {
        "def": "the importance or meaning of something",
        "rank": 2299
    },
    "planet": {
        "def": "a large, round object in space that moves around the sun or another star",
        "rank": 2300
    },
    "iron": {
        "def": "a heavy type of metal that is very common, occurs naturally in blood, and is used to make steel and in many products ",
        "rank": 2301
    },
    "gradually": {
        "def": "slowly over a period of time",
        "rank": 2302
    },
    "approval": {
        "def": "when you think that something or someone is good or right; official permission",
        "rank": 2303
    },
    "evaluation": {
        "def": "to consider or study something carefully and decide how good or bad it is",
        "rank": 2304
    },
    "wealth": {
        "def": "a large amount of money and possessions ",
        "rank": 2305
    },
    "visual": {
        "def": "relating to seeing or to the eyes, sight",
        "rank": 2306
    },
    "consult": {
        "def": "to talk about something to make a decision",
        "rank": 2307
    },
    "sponsor": {
        "def": "to give money to someone to support an activity, event, or organization, sometimes as a way to advertise your company or product",
        "rank": 2308
    },
    "stupid": {
        "def": "not intelligent : having or showing a lack of ability to learn and understand things ",
        "rank": 2309
    },
    "trap": {
        "def": "a device that is used for catching animals ",
        "rank": 2310
    },
    "badly": {
        "def": "very seriously; in a way that is of low quality or in an unpleasant way",
        "rank": 2311
    },
    "log": {
        "def": "a long, heavy section of a tree that has fallen or been cut down ",
        "rank": 2312
    },
    "crazy": {
        "def": "stupid or strange",
        "rank": 2313
    },
    "adjust": {
        "def": "to change a position to be comfortable",
        "rank": 2314
    },
    "dirty": {
        "def": "not clean",
        "rank": 2315
    },
    "zero": {
        "def": "the number 0",
        "rank": 2316
    },
    "gaze": {
        "def": "to look for a long time at someone or something or in a particular direction",
        "rank": 2317
    },
    "button": {
        "def": "a small, usually round piece of plastic, glass, metal, etc., that is sewn to a piece of clothing and is pushed through a loop or hole to fasten one part of the clothing to another part ",
        "rank": 2318
    },
    "extraordinary": {
        "def": "very unusual : very different from what is normal or ordinary ",
        "rank": 2319
    },
    "hesitate": {
        "def": "to stop briefly before you do something especially because you are nervous or unsure about what to do ",
        "rank": 2320
    },
    "establishment": {
        "def": "an organization or business; when an organization, school, business, etc. is started",
        "rank": 2321
    },
    "creative": {
        "def": "good at thinking of new ideas or using imagination to create new and unusual things",
        "rank": 2322
    },
    "constantly": {
        "def": "happening a lot or all the time",
        "rank": 2323
    },
    "probability": {
        "def": "how likely it is that something will happen",
        "rank": 2324
    },
    "vegetable": {
        "def": "a plant that you eat, for example potatoes, onions, beans, etc.",
        "rank": 2325
    },
    "alcohol": {
        "def": "drinks such as wine and beer that can make you drunk",
        "rank": 2326
    },
    "remarkable": {
        "def": "very unusual or noticeable in a way that you admire",
        "rank": 2327
    },
    "throat": {
        "def": "the tube inside the neck that leads to the stomach and lungs ",
        "rank": 2328
    },
    "dependent": {
        "def": "decided or controlled by something else",
        "rank": 2329
    },
    "steel": {
        "def": "a strong, hard metal made of iron and carbon ",
        "rank": 2330
    },
    "sustain": {
        "def": "to keep providing what is needed ",
        "rank": 2331
    },
    "ally": {
        "def": "someone who supports you, especially when other people are against you; a country that has agreed to help another country, especially in a war",
        "rank": 2332
    },
    "ethnic": {
        "def": "connected with people who shares a cultural tradition",
        "rank": 2333
    },
    "pleasant": {
        "def": "causing a feeling of happiness or pleasure ",
        "rank": 2334
    },
    "exceed": {
        "def": "to be greater in number than something",
        "rank": 2335
    },
    "historian": {
        "def": "someone who studies or writes about history",
        "rank": 2336
    },
    "sugar": {
        "def": " a sweet substance usually in the form of white or brown crystals or white powder that comes from plants and is used to make foods sweeter",
        "rank": 2337
    },
    "brilliant": {
        "def": "very good; extremely clever; full of light or color",
        "rank": 2338
    },
    "involvement": {
        "def": "when someone or something is involved in an activity or event",
        "rank": 2339
    },
    "philosophy": {
        "def": "a study of ideas about the fundamental nature of life",
        "rank": 2340
    },
    "hypothesis": {
        "def": "an idea that leads to further study or discussion",
        "rank": 2341
    },
    "bread": {
        "def": "a baked food made from a mixture of flour and water",
        "rank": 2342
    },
    "drag": {
        "def": "to pull (someone or something that is heavy or difficult to move) ",
        "rank": 2343
    },
    "edit": {
        "def": "to make changes so that something can be used",
        "rank": 2344
    },
    "inner": {
        "def": "on the inside, or near the middle of something",
        "rank": 2345
    },
    "statistic": {
        "def": "a number that represents a piece of information",
        "rank": 2346
    },
    "liability": {
        "def": "when you are legally responsible for something; a debt; a disadvantage",
        "rank": 2347
    },
    "anticipate": {
        "def": "to expect or look ahead to something positively",
        "rank": 2348
    },
    "league": {
        "def": "a group of teams which compete against each other in a sport",
        "rank": 2349
    },
    "seal": {
        "def": "an animal with smooth fur that eats fish and lives near the sea",
        "rank": 2350
    },
    "grab": {
        "def": "to take hold of something or someone suddenly",
        "rank": 2351
    },
    "flood": {
        "def": "a large amount of water covering an area of land that is usually dry ",
        "rank": 2352
    },
    "compensation": {
        "def": "money that you pay to someone because you are responsible for injuring them or damaging something; money paid for work",
        "rank": 2353
    },
    "segment": {
        "def": "one of the parts that something can be divided into",
        "rank": 2354
    },
    "compound": {
        "def": "combining two or more parts to form something new",
        "rank": 2355
    },
    "occasionally": {
        "def": "not happening often",
        "rank": 2356
    },
    "spin": {
        "def": "to turn or cause someone or something to turn around repeatedly",
        "rank": 2357
    },
    "desert": {
        "def": "an area of very dry land that is usually covered with sand and is very hot ",
        "rank": 2358
    },
    "operator": {
        "def": "a person who uses and controls something (such as a machine, device, or business): someone who operates something",
        "rank": 2359
    },
    "tower": {
        "def": "a tall, narrow building or structure that may stand apart from or be attached to another building or structure",
        "rank": 2360
    },
    "newly": {
        "def": "recently",
        "rank": 2361
    },
    "paragraph": {
        "def": "a section of writing that usually deals with one subject",
        "rank": 2362
    },
    "advocate": {
        "def": "to push for something positive",
        "rank": 2363
    },
    "bath": {
        "def": "the act of washing the body usually by sitting or lying in a container filled with water ",
        "rank": 2364
    },
    "blind": {
        "def": "unable to see ",
        "rank": 2365
    },
    "confident": {
        "def": "having a feeling or belief that you can do something well or succeed at something : having confidence ",
        "rank": 2366
    },
    "overcome": {
        "def": "to defeat (someone or something) ",
        "rank": 2367
    },
    "briefly": {
        "def": "lasting only for a short time",
        "rank": 2368
    },
    "pure": {
        "def": "not mixed with anything else ",
        "rank": 2369
    },
    "regularly": {
        "def": "often; at the same time each day, week, month, etc.",
        "rank": 2370
    },
    "counsel": {
        "def": "a lawyer; advice",
        "rank": 2371
    },
    "disturb": {
        "def": "to stop (someone) from working, sleeping, etc.",
        "rank": 2372
    },
    "burden": {
        "def": "something difficult or unpleasant that you have to deal with or worry about",
        "rank": 2373
    },
    "silent": {
        "def": "not speaking or making noise",
        "rank": 2374
    },
    "behave": {
        "def": "to act in an acceptable way : to act properly",
        "rank": 2375
    },
    "tap": {
        "def": "to hit (someone or something) lightly especially with a small sound",
        "rank": 2376
    },
    "alarm": {
        "def": "a loud noise that warns you of danger or is used to wake you",
        "rank": 2377
    },
    "fantastic": {
        "def": "very good",
        "rank": 2378
    },
    "valley": {
        "def": "an area of low land between hills or mountains ",
        "rank": 2379
    },
    "preference": {
        "def": "a feeling of liking or wanting one person or thing more than another person or thing",
        "rank": 2380
    },
    "discovery": {
        "def": "the act of finding or learning something for the first time",
        "rank": 2381
    },
    "dare": {
        "def": "to have enough courage or confidence to do something",
        "rank": 2382
    },
    "skirt": {
        "def": "a piece of clothing worn by women and girls that hangs from the waist down",
        "rank": 2383
    },
    "eastern": {
        "def": "located toward the east ",
        "rank": 2384
    },
    "poverty": {
        "def": " the state of being poor ",
        "rank": 2385
    },
    "registration": {
        "def": "when a name or information is recorded on an official list",
        "rank": 2386
    },
    "cigarette": {
        "def": "a thin tube of paper filled with tobacco, that people smoke",
        "rank": 2387
    },
    "criticize": {
        "def": "to make negative comments about something or someone",
        "rank": 2388
    },
    "bowl": {
        "def": "a round container that has tall, curving sides and that is used for preparing or serving foods and liquids ",
        "rank": 2389
    },
    "cousin": {
        "def": "a child of your uncle or aunt",
        "rank": 2390
    },
    "offense": {
        "def": " a criminal act; something that causes a person to be hurt, angry, or upset ",
        "rank": 2391
    },
    "clause": {
        "def": "a part of a sentence that has its own subject",
        "rank": 2392
    },
    "impress": {
        "def": "to make someone admire or respect you",
        "rank": 2393
    },
    "jury": {
        "def": "a group of people in a court of law who decide if someone is guilty or not",
        "rank": 2394
    },
    "venture": {
        "def": "a new activity that may not be successful",
        "rank": 2395
    },
    "virus": {
        "def": "an infectious organism too small to be seen that causes disease, or an illness that it causes; a harmful computer program",
        "rank": 2396
    },
    "anxiety": {
        "def": "fear or nervousness about what might happen",
        "rank": 2397
    },
    "illegal": {
        "def": "not allowed by law",
        "rank": 2398
    },
    "wrap": {
        "def": "to cover (something) by winding or folding a piece of material around it ",
        "rank": 2399
    },
    "harm": {
        "def": "physical or mental damage or injury : something that causes someone or something to be hurt, broken, made less valuable or successful, etc. ",
        "rank": 2400
    },
    "survival": {
        "def": "when someone or something continues to live or exist, especially after a difficult or dangerous situation",
        "rank": 2401
    },
    "teenager": {
        "def": "someone who is between 13 and 19 years old",
        "rank": 2402
    },
    "specialize": {
        "def": "to spend most of your time studying one particular subject or doing one type of business",
        "rank": 2403
    },
    "moderate": {
        "def": "average in size or amount;  neither too much nor too little ",
        "rank": 2404
    },
    "limitation": {
        "def": "when something is controlled so that it is less than a particular amount or number",
        "rank": 2405
    },
    "modify": {
        "def": "to make minor change to something",
        "rank": 2406
    },
    "accurate": {
        "def": "there is no mistake or error ",
        "rank": 2407
    },
    "angle": {
        "def": "the difference between the direction of two lines or surfaces that come together: the space or shape formed when two lines or surfaces meet each other ",
        "rank": 2408
    },
    "comprehensive": {
        "def": "including most or all things",
        "rank": 2409
    },
    "rival": {
        "def": "a person or thing that tries to defeat or be more successful than another ",
        "rank": 2410
    },
    "adequate": {
        "def": "enough for someone's needs",
        "rank": 2411
    },
    "universal": {
        "def": "done or experienced by everyone ",
        "rank": 2412
    },
    "tourism": {
        "def": "the business of providing services for tourists, including organizing their travel, hotels, entertainment, etc.",
        "rank": 2413
    },
    "chest": {
        "def": "the front part of the body between the neck and the stomach ",
        "rank": 2414
    },
    "expenditure": {
        "def": "when you use energy, time, or money",
        "rank": 2415
    },
    "margin": {
        "def": "the edge or border of a page on above, below",
        "rank": 2416
    },
    "recovery": {
        "def": "when a system or situation or person returns to the way it was before something bad happened",
        "rank": 2417
    },
    "mount": {
        "def": "to increase in amount or level",
        "rank": 2418
    },
    "mate": {
        "def": "a friend; an animal's sexual partner",
        "rank": 2419
    },
    "admire": {
        "def": " to feel respect or approval for (someone or something) ",
        "rank": 2420
    },
    "gesture": {
        "def": "a movement you make with your hand, arm, or head to express what you are thinking or feeling",
        "rank": 2421
    },
    "musician": {
        "def": "a person who writes, sings, or plays music",
        "rank": 2422
    },
    "rapid": {
        "def": "happening in a short amount of time",
        "rank": 2423
    },
    "stair": {
        "def": "a series of steps that go from one level or floor to another ",
        "rank": 2424
    },
    "charm": {
        "def": "a quality that causes someone or something to be very likable : an attractive quality ",
        "rank": 2425
    },
    "slave": {
        "def": "someone who is legally owned by another person and is forced to work for that person without pay",
        "rank": 2426
    },
    "scare": {
        "def": "to frighten a person or animal",
        "rank": 2427
    },
    "amendment": {
        "def": "a change in the words of a document, or the process of doing this",
        "rank": 2428
    },
    "incentive": {
        "def": "something that encourages a person to work hard",
        "rank": 2429
    },
    "format": {
        "def": "the form, design, or arrangement of something",
        "rank": 2430
    },
    "consultant": {
        "def": "someone who advises people about a particular subject",
        "rank": 2431
    },
    "deficit": {
        "def": "the amount by which the money that you spend is more than the money that you receive",
        "rank": 2432
    },
    "mortgage": {
        "def": "money that you borrow to buy a home",
        "rank": 2433
    },
    "abstract": {
        "def": "relating to something that doesn't exist",
        "rank": 2434
    },
    "overseas": {
        "def": "in or to a foreign country that is across a sea",
        "rank": 2435
    },
    "literary": {
        "def": "of or relating to literature ",
        "rank": 2436
    },
    "experimental": {
        "def": "relating to tests, especially scientific ones",
        "rank": 2437
    },
    "architecture": {
        "def": "the design and style of buildings; the profession of designing buildings",
        "rank": 2438
    },
    "possess": {
        "def": "to have or own (something) ",
        "rank": 2439
    },
    "dig": {
        "def": "to move soil, sand, snow, etc., in order to create a hole ",
        "rank": 2440
    },
    "opponent": {
        "def": "someone who you compete against in a game or competition; someone who disagrees with an idea or action",
        "rank": 2441
    },
    "evolution": {
        "def": "the way in which living things gradually change and develop over millions of years; a gradual process of change and development",
        "rank": 2442
    },
    "versus": {
        "def": "used to say that one team or person is competing against another; used to compare two things or ideas",
        "rank": 2443
    },
    "lend": {
        "def": "to give (something) to (someone) to be used for a period of time and then returned ",
        "rank": 2444
    },
    "custom": {
        "def": "an action or way of behaving that is usual and traditional among the people in a particular group or place",
        "rank": 2445
    },
    "keen": {
        "def": "very interested or enthusiastic; very good or well developed",
        "rank": 2446
    },
    "translate": {
        "def": "to change words from one language into another language",
        "rank": 2447
    },
    "cough": {
        "def": "to force air through your throat with a short, loud noise often because you are sick",
        "rank": 2448
    },
    "distinct": {
        "def": "recognizably different in nature from something else",
        "rank": 2449
    },
    "rough": {
        "def": "having a surface that is not even ",
        "rank": 2450
    },
    "surgery": {
        "def": "when a doctor cuts your body open and repairs or removes something",
        "rank": 2451
    },
    "buyer": {
        "def": "someone who buys something",
        "rank": 2452
    },
    "burst": {
        "def": " to break open or into pieces in a sudden and violent way ",
        "rank": 2453
    },
    "pen": {
        "def": "a writing instrument that uses ink ",
        "rank": 2454
    },
    "quietly": {
        "def": "making little or no noise",
        "rank": 2455
    },
    "laboratory": {
        "def": "a room used for scientific work",
        "rank": 2456
    },
    "tube": {
        "def": "a long, hollow object that is used especially to control the flow of a liquid or gas ",
        "rank": 2457
    },
    "capability": {
        "def": "the ability or power to do something",
        "rank": 2458
    },
    "province": {
        "def": "one of the large areas which some countries are divided into because of the type of government they have",
        "rank": 2459
    },
    "twin": {
        "def": "one of two children who are born to the same mother at the same time",
        "rank": 2460
    },
    "adapt": {
        "def": "to change something to fit a new purpose",
        "rank": 2461
    },
    "chicken": {
        "def": "a bird that is raised by people for its eggs and meat ",
        "rank": 2462
    },
    "scholar": {
        "def": "someone who has studied a subject and knows a lot about it",
        "rank": 2463
    },
    "mess": {
        "def": "Someone or something that is a mess, or is in a mess, is dirty or untidy; a confused or difficult situation",
        "rank": 2464
    },
    "precisely": {
        "def": "exactly",
        "rank": 2465
    },
    "therapy": {
        "def": "the work of treating mental or physical illness without using an operation",
        "rank": 2466
    },
    "frequent": {
        "def": "happening often ",
        "rank": 2467
    },
    "wealthy": {
        "def": "rich",
        "rank": 2468
    },
    "journal": {
        "def": "a book for recording personal experiences and thoughts",
        "rank": 2469
    },
    "composition": {
        "def": " the way in which something is put together or arranged ",
        "rank": 2470
    },
    "mad": {
        "def": "very angry ",
        "rank": 2471
    },
    "tissue": {
        "def": "the material that animals and plants are made of; a soft piece of paper that you use for cleaning your nose",
        "rank": 2472
    },
    "flash": {
        "def": "a sudden bright light ",
        "rank": 2473
    },
    "stroke": {
        "def": "a serious illness caused when a blood vessel in your brain suddenly breaks or is blocked ",
        "rank": 2474
    },
    "champion": {
        "def": "a person, animal, or team that wins a competition",
        "rank": 2475
    },
    "sand": {
        "def": " the very tiny, loose pieces of rock that cover beaches, deserts, etc. ",
        "rank": 2476
    },
    "promotion": {
        "def": "when someone is given a more important job in the same organization; an advertising campaign or sale",
        "rank": 2477
    },
    "charity": {
        "def": "an official organization that gives money, food, or help to people who need it; money, food, or other help",
        "rank": 2478
    },
    "bury": {
        "def": "to put (a dead person or animal) in a grave ",
        "rank": 2479
    },
    "tendency": {
        "def": "something that someone often does, or something that often happens",
        "rank": 2480
    },
    "barrier": {
        "def": "something that prevents people from doing what they want to do",
        "rank": 2481
    },
    "cream": {
        "def": "a very thick liquid or soft substance that is rubbed into the skin to make it softer or is used as a medicine for the skin",
        "rank": 2482
    },
    "rid": {
        "def": "to no longer have or be affected or bothered by (someone or something that is unwanted or annoying) ",
        "rank": 2483
    },
    "brush": {
        "def": "a tool with many stiff hairs, fibers, etc., that is used for cleaning, smoothing, or painting something",
        "rank": 2484
    },
    "dialog": {
        "def": "a short conversation, especially written",
        "rank": 2485
    },
    "publisher": {
        "def": "a company or person who prepares and prints books, newspapers, magazines, etc.",
        "rank": 2486
    },
    "consequently": {
        "def": "as a result",
        "rank": 2487
    },
    "democratic": {
        "def": "following or supporting the political system of democracy; where everyone has equal rights and can help to make decisions",
        "rank": 2488
    },
    "abortion": {
        "def": "a medical operation to end a pregnancy when the baby is still too small to live",
        "rank": 2489
    },
    "govern": {
        "def": "to officially control and lead, conduct the policy, make decisions",
        "rank": 2490
    },
    "exact": {
        "def": "fully and completely correct or accurate ",
        "rank": 2491
    },
    "hurry": {
        "def": "to move, act, or go quickly ",
        "rank": 2492
    },
    "whilst": {
        "def": "during the same time; used to compare two different facts or situations",
        "rank": 2493
    },
    "privilege": {
        "def": "an advantage that only one person or group has, usually because of their position or because they are rich",
        "rank": 2494
    },
    "creature": {
        "def": "an animal of any type ",
        "rank": 2495
    },
    "dismiss": {
        "def": "to send (someone) away : to cause or allow (someone) to leave ",
        "rank": 2496
    },
    "cap": {
        "def": "a small, soft hat that often has a hard curved part (called a visor) that extends out over your eyes ",
        "rank": 2497
    },
    "participation": {
        "def": "to be involved with other people in an activity",
        "rank": 2498
    },
    "visible": {
        "def": "can see , easily seen or understood",
        "rank": 2499
    },
    "narrative": {
        "def": "a story or description of a series of events",
        "rank": 2500
    },
    "classical": {
        "def": "music by people like Mozart and Stravinsky; traditional in style",
        "rank": 2501
    },
    "assign": {
        "def": "to give someone a particular job or something to do",
        "rank": 2502
    },
    "regret": {
        "def": " to feel sad or sorry about (something that you did or did not do) : to have regrets about (something) ",
        "rank": 2503
    },
    "twist": {
        "def": "to bend or turn (something) in order to change its shape",
        "rank": 2504
    },
    "impressive": {
        "def": "Someone or something that is impressive makes you admire and respect them",
        "rank": 2505
    },
    "motor": {
        "def": "a machine that produces motion or power for doing work",
        "rank": 2506
    },
    "prompt": {
        "def": "to cause (someone) to do something ",
        "rank": 2507
    },
    "ruin": {
        "def": "to damage (something) so badly that it is no longer useful, valuable, enjoyable, etc.: to spoil or destroy (something)",
        "rank": 2508
    },
    "density": {
        "def": "the number of people or things in a place when compared with the size of the place;  the relationship between the weight of a substance and its size",
        "rank": 2509
    },
    "resist": {
        "def": "to fight against (something) : to try to stop or prevent (something) ",
        "rank": 2510
    },
    "rescue": {
        "def": "to save (someone or something) from danger or harm ",
        "rank": 2511
    },
    "implementation": {
        "def": "to make a law, system, plan, etc. start to happen or operate",
        "rank": 2512
    },
    "coal": {
        "def": "a black or brownish-black hard substance within the earth that is used as a fuel",
        "rank": 2513
    },
    "lecture": {
        "def": "a talk or speech about a particular subject",
        "rank": 2514
    },
    "awareness": {
        "def": "when you know about something",
        "rank": 2515
    },
    "maintenance": {
        "def": "the work that is done to keep something in good condition",
        "rank": 2516
    },
    "greatly": {
        "def": "very much",
        "rank": 2517
    },
    "inflation": {
        "def": "the rate at which prices increase, or a continuing increase in prices",
        "rank": 2518
    },
    "psychological": {
        "def": "relating to the human mind and feelings",
        "rank": 2519
    },
    "institutional": {
        "def": "relating to a large and important organization, such as a government, university or bank",
        "rank": 2520
    },
    "dust": {
        "def": " fine dry powder that builds up inside buildings on surfaces that have not recently been cleaned ",
        "rank": 2521
    },
    "successfully": {
        "def": "in a way that acomplishes what you want to achieve",
        "rank": 2522
    },
    "cancel": {
        "def": "to say that an organized event will not now happen; to stop an order for goods or services",
        "rank": 2523
    },
    "functional": {
        "def": "designed to be practical or useful and not only attractive; operating correctly",
        "rank": 2524
    },
    "scope": {
        "def": "the area that is included in or dealt with",
        "rank": 2525
    },
    "species": {
        "def": "a group of plants or animals which share similar characteristics",
        "rank": 2526
    },
    "float": {
        "def": "to rest on top of a liquid ",
        "rank": 2527
    },
    "absolute": {
        "def": "complete and total ",
        "rank": 2528
    },
    "passion": {
        "def": "a strong belief in something or a strong feeling about a subject; sexual feelings",
        "rank": 2529
    },
    "airline": {
        "def": "a company that provides regular flights to places",
        "rank": 2530
    },
    "motivate": {
        "def": "to make someone enthusiastic about doing something",
        "rank": 2531
    },
    "module": {
        "def": "a part of an object that can operate alone, especially a part of a spacecraft; part of a course or a textbook",
        "rank": 2532
    },
    "fold": {
        "def": " to bend one part of (something) over or against another part ",
        "rank": 2533
    },
    "theoretical": {
        "def": "related to an explanation that has not been proved",
        "rank": 2534
    },
    "react": {
        "def": "to behave or make change in a particular way",
        "rank": 2535
    },
    "wooden": {
        "def": "made of wood ",
        "rank": 2536
    },
    "poet": {
        "def": "a person who writes poems",
        "rank": 2537
    },
    "insight": {
        "def": "the capacity to understand something very clearly ",
        "rank": 2538
    },
    "partnership": {
        "def": "when two people or organizations work together to achieve something",
        "rank": 2539
    },
    "counter": {
        "def": "to prevent something or reduce the bad effect that it has",
        "rank": 2540
    },
    "stain": {
        "def": "to leave a mark on something",
        "rank": 2541
    },
    "automatically": {
        "def": "without human control",
        "rank": 2542
    },
    "penalty": {
        "def": "a punishment for doing something which is against a law or rule",
        "rank": 2543
    },
    "rail": {
        "def": "a bar that goes from one post or support to another and that is used to form a barrier ",
        "rank": 2544
    },
    "salt": {
        "def": "a natural white substance that is used especially to flavor or preserve food ",
        "rank": 2545
    },
    "contest": {
        "def": "a competition or election",
        "rank": 2546
    },
    "bin": {
        "def": "a container that is used to put waste in; a container for storing things",
        "rank": 2547
    },
    "violent": {
        "def": "using or involving the use of physical force to cause harm or damage to someone or something ",
        "rank": 2548
    },
    "aggressive": {
        "def": "behaving in an angry and violent way towards others; using forceful methods in order to achieve",
        "rank": 2549
    },
    "sake": {
        "def": "the benefit of someone or something \u2014 used in phrases with for to say that something is done to help a particular person or thing",
        "rank": 2550
    },
    "opera": {
        "def": "a musical play in which most of the words are sung",
        "rank": 2551
    },
    "undergo": {
        "def": "to experience or endure, be subjected to",
        "rank": 2552
    },
    "embrace": {
        "def": "to hold, or hug, someone; to accept new ideas, beliefs, etc. in an enthusiastic way",
        "rank": 2553
    },
    "divorce": {
        "def": "when two people officially stop being married",
        "rank": 2554
    },
    "pile": {
        "def": "a group of things that are put one on top of another ",
        "rank": 2555
    },
    "march": {
        "def": "to walk with regular steps as a group : to walk in the regular and organized way of soldiers ",
        "rank": 2556
    },
    "pale": {
        "def": "light in color",
        "rank": 2557
    },
    "acceptable": {
        "def": "good enough; allowed or approved of",
        "rank": 2558
    },
    "literally": {
        "def": "having the real or original meaning of a word or phrase",
        "rank": 2559
    },
    "allege": {
        "def": "to say that someone has done something wrong or illegal, but not prove it",
        "rank": 2560
    },
    "grammar": {
        "def": "the set of rules that explain how words are used in a language",
        "rank": 2561
    },
    "permission": {
        "def": "the right or ability to do something that is given by someone who has the power to decide if it will be allowed or permitted ",
        "rank": 2562
    },
    "regulate": {
        "def": "to set or adjust the amount, restrict something",
        "rank": 2563
    },
    "cluster": {
        "def": "a group of similar things that are close together",
        "rank": 2564
    },
    "compromise": {
        "def": "when you agree to something which is not exactly what you want",
        "rank": 2565
    },
    "diversity": {
        "def": "when many different types of things or people are included in something",
        "rank": 2566
    },
    "immigrant": {
        "def": "someone who comes to live in a different country",
        "rank": 2567
    },
    "historic": {
        "def": "important in history or likely to be important in history",
        "rank": 2568
    },
    "gallery": {
        "def": "a room or building that is used for showing paintings and other art to the public",
        "rank": 2569
    },
    "dedicate": {
        "def": "to give energy and time to something",
        "rank": 2570
    },
    "pretend": {
        "def": " to act as if something is true when it is not true",
        "rank": 2571
    },
    "castle": {
        "def": "a large building usually with high, thick walls and towers that was built in the past to protect against attack",
        "rank": 2572
    },
    "tackle": {
        "def": "to try to deal with a problem; in sports, to try to take the ball from someone or knock them down",
        "rank": 2573
    },
    "golf": {
        "def": "a game on grass where players try to hit a small ball into a series of holes using a long, thin stick",
        "rank": 2574
    },
    "celebration": {
        "def": "when you celebrate a special day or event",
        "rank": 2575
    },
    "embarrass": {
        "def": "to make someone feel ashamed or shy",
        "rank": 2576
    },
    "personnel": {
        "def": "the people who work for an organization",
        "rank": 2577
    },
    "boost": {
        "def": "something that makes you feel more confident and happy, or that helps something increase or improve",
        "rank": 2578
    },
    "extract": {
        "def": "to remove or take out ",
        "rank": 2579
    },
    "pig": {
        "def": "an animal that has a fat body with short legs, a small tail, and a wide nose and that is raised on a farm or lives in the wild",
        "rank": 2580
    },
    "roughly": {
        "def": "approximately",
        "rank": 2581
    },
    "injure": {
        "def": "do physical harm or damage",
        "rank": 2582
    },
    "mixture": {
        "def": "something made by combining two or more ingredients ",
        "rank": 2583
    },
    "announcement": {
        "def": "something that someone says officially, giving information about something",
        "rank": 2584
    },
    "biological": {
        "def": "relating to the study of living things such as plants and animals",
        "rank": 2585
    },
    "praise": {
        "def": " to say or write good things about (someone or something) : to express approval of (someone or something)",
        "rank": 2586
    },
    "disagree": {
        "def": "to have a different opinion : to fail to agree ",
        "rank": 2587
    },
    "electric": {
        "def": "of or relating to electricity ",
        "rank": 2588
    },
    "excess": {
        "def": "an amount that is more than the usual or necessary amount ",
        "rank": 2589
    },
    "fulfill": {
        "def": "to do something that you have promised to do or that you are expected to do",
        "rank": 2590
    },
    "depress": {
        "def": "to make feel sad or depressed",
        "rank": 2591
    },
    "fancy": {
        "def": "to want to have or do (something)",
        "rank": 2592
    },
    "compose": {
        "def": "to come together to form or make (something) ",
        "rank": 2593
    },
    "continuous": {
        "def": "happening or existing without stopping",
        "rank": 2594
    },
    "complexity": {
        "def": "involving a lot of different but connected parts in a way that is difficult to understand",
        "rank": 2595
    },
    "friendship": {
        "def": "the state of being friends : the relationship between friends",
        "rank": 2596
    },
    "stability": {
        "def": "when something is not likely to change or move",
        "rank": 2597
    },
    "accomplish": {
        "def": "to succeed in doing something good",
        "rank": 2598
    },
    "comprise": {
        "def": "to make up or form something",
        "rank": 2599
    },
    "holder": {
        "def": "someone who officially owns something",
        "rank": 2600
    },
    "inquiry": {
        "def": "a request for information ",
        "rank": 2601
    },
    "weakness": {
        "def": "when someone or something is not strong or powerful; a part of something or someone that is not good",
        "rank": 2602
    },
    "noun": {
        "def": " a word that is the name of something (such as a person, animal, place, thing, quality, idea, or action) and is typically used in a sentence as subject or object of a verb or as object of a preposition ",
        "rank": 2603
    },
    "civilian": {
        "def": "someone who is not a member of a military organization or the police",
        "rank": 2604
    },
    "racial": {
        "def": "relating to people's race",
        "rank": 2605
    },
    "tail": {
        "def": "the part of an animal's body that extends from the animal's back end ",
        "rank": 2606
    },
    "tale": {
        "def": "a story, especially one which is not true or is difficult to believe",
        "rank": 2607
    },
    "weigh": {
        "def": "to find how heavy (someone or something) is : to measure the weight of ",
        "rank": 2608
    },
    "evolve": {
        "def": "to slowly change or develop into something better",
        "rank": 2609
    },
    "potentially": {
        "def": "possibly",
        "rank": 2610
    },
    "mere": {
        "def": "used to say that something is small, unimportant, etc.",
        "rank": 2611
    },
    "fortune": {
        "def": "a very large amount of money",
        "rank": 2612
    },
    "gently": {
        "def": "in a kind and careful way as not to hurt or upset anyone or anything",
        "rank": 2613
    },
    "poetry": {
        "def": "poems in general, or the writing of poetry",
        "rank": 2614
    },
    "server": {
        "def": "a computer that is used only for storing and managing programs and information used by other computers",
        "rank": 2615
    },
    "sanction": {
        "def": "a punishment for not obeying a rule or a law",
        "rank": 2616
    },
    "guitar": {
        "def": "a musical instrument with strings that you play by pulling the strings with your fingers or a piece of plastic",
        "rank": 2617
    },
    "profession": {
        "def": "a type of job that requires special education or skill",
        "rank": 2618
    },
    "pump": {
        "def": "a device that forces liquid, air, or gas into or out of something ",
        "rank": 2619
    },
    "chamber": {
        "def": "a room used for an official or special purpose",
        "rank": 2620
    },
    "veteran": {
        "def": "someone who has been in the military; someone who has done a job or activity for a long time",
        "rank": 2621
    },
    "shine": {
        "def": "to give off light ",
        "rank": 2622
    },
    "championship": {
        "def": "a competition to find the best team or player in a particular game or sport",
        "rank": 2623
    },
    "stake": {
        "def": "If something is at stake, it is in a situation where it might be lost or damaged; an amount of money invested in a business",
        "rank": 2624
    },
    "gear": {
        "def": "a set of parts in a vehicle or bicycle that control how fast the wheels turn; the clothes and equipment used for a particular purpose",
        "rank": 2625
    },
    "joy": {
        "def": " a feeling of great happiness",
        "rank": 2626
    },
    "remote": {
        "def": "far away",
        "rank": 2627
    },
    "entertain": {
        "def": " to have people as guests in your home or in a public place ",
        "rank": 2628
    },
    "reliable": {
        "def": "able to be trusted or believed",
        "rank": 2629
    },
    "strengthen": {
        "def": "to make (someone or something) stronger, more forceful, more effective, etc. ",
        "rank": 2630
    },
    "orange": {
        "def": "a citrus fruit that is round and that has an orange skin ",
        "rank": 2631
    },
    "cheek": {
        "def": "the soft part of your face below your eye",
        "rank": 2632
    },
    "jail": {
        "def": "a place where criminals are kept as a punishment",
        "rank": 2633
    },
    "forever": {
        "def": "for all time in the future",
        "rank": 2634
    },
    "imagination": {
        "def": "the ability to create ideas or pictures in your mind",
        "rank": 2635
    },
    "bias": {
        "def": "a tendency to believe certain people or ideas",
        "rank": 2636
    },
    "possession": {
        "def": "the condition of having or owning something ",
        "rank": 2637
    },
    "chat": {
        "def": "to talk with someone in a friendly and informal way",
        "rank": 2638
    },
    "dramatically": {
        "def": "suddenly or unexpectedly; with much drama",
        "rank": 2639
    },
    "carbon": {
        "def": "a chemical element present in all animals and plants and in coal and oil (symbol C)",
        "rank": 2640
    },
    "servant": {
        "def": "a person who is hired to do household or personal duties such as cleaning and cooking ",
        "rank": 2641
    },
    "curious": {
        "def": "having a desire to learn or know more about something or someone ",
        "rank": 2642
    },
    "structural": {
        "def": "relating to the structure of something",
        "rank": 2643
    },
    "neglect": {
        "def": "to fail to take care of or to give attention to (someone or something)",
        "rank": 2644
    },
    "compute": {
        "def": "to find out by calculating or estimating",
        "rank": 2645
    },
    "rear": {
        "def": "the back part of something",
        "rank": 2646
    },
    "ski": {
        "def": "one of a pair of long, thin pieces of wood or plastic that you wear on the bottom of boots to move over snow",
        "rank": 2647
    },
    "pot": {
        "def": "a deep, round container that is used for cooking ",
        "rank": 2648
    },
    "revise": {
        "def": "to make changes, add something to improve",
        "rank": 2649
    },
    "snap": {
        "def": "to break something, such as a pencil, making a short, loud sound",
        "rank": 2650
    },
    "stimulate": {
        "def": "to make something happen or develop more; to make someone feel interested and excited",
        "rank": 2651
    },
    "grin": {
        "def": "to smile a big smile",
        "rank": 2652
    },
    "adjustment": {
        "def": "a slight change that you make to something so that it works better, fits better, or is more suitable",
        "rank": 2653
    },
    "printer": {
        "def": "a machine which is connected to a computer and which produces writing or images on paper",
        "rank": 2654
    },
    "moon": {
        "def": "the large round object that circles the Earth and that shines at night by reflecting light from the sun ",
        "rank": 2655
    },
    "boom": {
        "def": "a period when there is a big increase in sales or profits; a loud, deep sound",
        "rank": 2656
    },
    "scan": {
        "def": "to examine something with a machine; to use a machine that copies a document into a computer",
        "rank": 2657
    },
    "cheese": {
        "def": "a yellow or white solid food that is made from milk",
        "rank": 2658
    },
    "shell": {
        "def": "the hard outer covering of an animal, insect, etc., that protects it ",
        "rank": 2659
    },
    "pride": {
        "def": "a feeling that you respect yourself and deserve to be respected by other people",
        "rank": 2660
    },
    "grandmother": {
        "def": "the mother of your mother or father",
        "rank": 2661
    },
    "situate": {
        "def": "to put something in a particular position",
        "rank": 2662
    },
    "resign": {
        "def": "to give up (a job or position) in a formal or official way",
        "rank": 2663
    },
    "supplement": {
        "def": "something that is added to make it complete, help understanding",
        "rank": 2664
    },
    "bunch": {
        "def": "a group of things of the same kind that are held or tied together or that grow together ",
        "rank": 2665
    },
    "clothing": {
        "def": "clothes, especially of a particular type",
        "rank": 2666
    },
    "barely": {
        "def": "only just",
        "rank": 2667
    },
    "ceremony": {
        "def": "a formal act or event that is a part of a social or religious occasion ",
        "rank": 2668
    },
    "firmly": {
        "def": "not gently, with some force",
        "rank": 2669
    },
    "pipe": {
        "def": "a long, hollow tube for carrying water, steam, gas, etc. ",
        "rank": 2670
    },
    "maker": {
        "def": "the person or company that makes a product",
        "rank": 2671
    },
    "hopefully": {
        "def": "used, often at the start of a sentence, to express what you would like to happen",
        "rank": 2672
    },
    "trigger": {
        "def": "a lever on a gun that you pull to fire",
        "rank": 2673
    },
    "stomach": {
        "def": "the organ in your body where food goes and begins to be digested after you swallow it ",
        "rank": 2674
    },
    "destruction": {
        "def": "the act or process of damaging something so badly that it no longer exists or cannot be repaired ",
        "rank": 2675
    },
    "craft": {
        "def": "an activity in which you make something using a lot of skill, especially with your hands; a boat, airplane, or spaceship",
        "rank": 2676
    },
    "intense": {
        "def": "very strong, great or extreme in degree",
        "rank": 2677
    },
    "pregnant": {
        "def": "A pregnant woman has a baby developing inside her uterus",
        "rank": 2678
    },
    "logic": {
        "def": "a proper or linear way of thinking about something",
        "rank": 2679
    },
    "indication": {
        "def": "a sign showing that something exists or is likely to be true",
        "rank": 2680
    },
    "subsequently": {
        "def": "happening after something else",
        "rank": 2681
    },
    "presumably": {
        "def": "used to say what you think is the likely situation",
        "rank": 2682
    },
    "happiness": {
        "def": "the feeling of being happy",
        "rank": 2683
    },
    "interior": {
        "def": "the inside part of something",
        "rank": 2684
    },
    "magic": {
        "def": "special powers that can make things happen that seem impossible",
        "rank": 2685
    },
    "menu": {
        "def": "a list of food and drinks that you can order in a restaurant; a list of choices on a computer or electronic device",
        "rank": 2686
    },
    "mystery": {
        "def": "something that is not known ",
        "rank": 2687
    },
    "pro": {
        "def": "someone who earns money for playing a sport",
        "rank": 2688
    },
    "greet": {
        "def": "to meet (someone who has just arrived) with usually friendly and polite words and actions : welcome ",
        "rank": 2689
    },
    "humor": {
        "def": "the ability to laugh and recognize that something is funny",
        "rank": 2690
    },
    "concrete": {
        "def": "a hard substance that is used in building and is made by mixing sand, water, small stones, and cement",
        "rank": 2691
    },
    "flag": {
        "def": "a piece of cloth with a special design that is used as a symbol of a nation or group ",
        "rank": 2692
    },
    "chocolate": {
        "def": "a sweet, brown food that is made from cocoa",
        "rank": 2693
    },
    "shelter": {
        "def": "a structure that covers or protects people or things",
        "rank": 2694
    },
    "guideline": {
        "def": "a rule, instruction or principle",
        "rank": 2695
    },
    "cow": {
        "def": "a large animal that is raised by people for milk or meat usually on a farm ",
        "rank": 2696
    },
    "ownership": {
        "def": " the state or fact of owning something",
        "rank": 2697
    },
    "summarize": {
        "def": "to describe briefly the main facts or ideas of something",
        "rank": 2698
    },
    "knife": {
        "def": "a usually sharp blade attached to a handle that is used for cutting or as a weapon ",
        "rank": 2699
    },
    "bless": {
        "def": "to make (something or someone) holy by saying a special prayer ",
        "rank": 2700
    },
    "trick": {
        "def": "an action that is meant to deceive someone",
        "rank": 2701
    },
    "wise": {
        "def": "having or showing wisdom or knowledge usually from learning or experiencing many things ",
        "rank": 2702
    },
    "motivation": {
        "def": "enthusiasm for doing something; the need or reason for doing something",
        "rank": 2703
    },
    "attachment": {
        "def": "a feeling strong connection to someone or something; a computer file which is sent together with an email message",
        "rank": 2704
    },
    "pray": {
        "def": "to hope or wish very much for something to happen",
        "rank": 2705
    },
    "strict": {
        "def": "used to describe a command, rule, etc., that must be obeyed",
        "rank": 2706
    },
    "silly": {
        "def": "stupid, small and not important",
        "rank": 2707
    },
    "catalog": {
        "def": "a book with a list of all the goods that you can buy from a shop, or of all the books, paintings, etc. that you can find in a place",
        "rank": 2708
    },
    "organic": {
        "def": "not using artificial chemicals when keeping animals or growing plants for food",
        "rank": 2709
    },
    "reckon": {
        "def": "to think that something is probably true",
        "rank": 2710
    },
    "uncle": {
        "def": " the brother of your father or mother or the husband of your aunt ",
        "rank": 2711
    },
    "surprisingly": {
        "def": "in an unexpected way that makes someone feel surprised",
        "rank": 2712
    },
    "regardless": {
        "def": "without thinking about problems or difficulties",
        "rank": 2713
    },
    "coin": {
        "def": "a small, flat, and usually round piece of metal issued by a government as money",
        "rank": 2714
    },
    "attraction": {
        "def": " something interesting or enjoyable that people want to visit, see, or do ",
        "rank": 2715
    },
    "athlete": {
        "def": "someone who is very good at a sport and who competes with others in organized events",
        "rank": 2716
    },
    "harbor": {
        "def": " a part of the ocean, a lake, etc., that is next to land and that is protected and deep enough to provide safety for ships",
        "rank": 2717
    },
    "darkness": {
        "def": "when there is little or no light",
        "rank": 2718
    },
    "stir": {
        "def": "to mix (something) by making circular movements in it with a spoon or similar object ",
        "rank": 2719
    },
    "filter": {
        "def": "to pass a liquid or gas through a piece of equipment in order to remove solid pieces or other substances",
        "rank": 2720
    },
    "romantic": {
        "def": "relating to feelings or stories of love",
        "rank": 2721
    },
    "determination": {
        "def": "when someone continues trying to do something, although it is very difficult",
        "rank": 2722
    },
    "shelf": {
        "def": " a flat board which is attached to a wall, frame, etc., and on which objects can be placed ",
        "rank": 2723
    },
    "tongue": {
        "def": "the soft, movable part in the mouth that is used for tasting and eating food and in human beings for speaking",
        "rank": 2724
    },
    "reasonably": {
        "def": "in a fair way, showing good judgment",
        "rank": 2725
    },
    "transportation": {
        "def": "a vehicle or system of vehicles, such as buses, trains, etc. for getting from one place to another",
        "rank": 2726
    },
    "tender": {
        "def": "very loving and gentle : showing affection and love for someone or something ",
        "rank": 2727
    },
    "vessel": {
        "def": "a ship or large boat ",
        "rank": 2728
    },
    "piano": {
        "def": "a large wooden musical instrument with strings inside and black and white bars that produce sounds when you press them",
        "rank": 2729
    },
    "envelope": {
        "def": "an enclosing cover for a letter, card, etc.",
        "rank": 2730
    },
    "slope": {
        "def": "ground that slants downward or upward : ground that slopes ",
        "rank": 2731
    },
    "golden": {
        "def": "made of gold ",
        "rank": 2732
    },
    "belt": {
        "def": "a band of material (such as leather) that is worn around a person's waist",
        "rank": 2733
    },
    "attendance": {
        "def": "the number of people who go to an event, meeting, etc.",
        "rank": 2734
    },
    "storage": {
        "def": "when you put things in a safe place until they are needed",
        "rank": 2735
    },
    "pregnancy": {
        "def": "when a woman is pregnant",
        "rank": 2736
    },
    "invent": {
        "def": "to create or produce (something useful) for the first time ",
        "rank": 2737
    },
    "controversial": {
        "def": "causing a lot of disagreement or argument",
        "rank": 2738
    },
    "horrible": {
        "def": "very unpleasant or bad",
        "rank": 2739
    },
    "ocean": {
        "def": "the salt water that covers much of the Earth's surface ",
        "rank": 2740
    },
    "uncertainty": {
        "def": "not known, or not completely certain",
        "rank": 2741
    },
    "fiction": {
        "def": "literature and stories about imaginary people or events; not real",
        "rank": 2742
    },
    "lover": {
        "def": "If two people are lovers, they have a sexual relationship but they are not married",
        "rank": 2743
    },
    "hint": {
        "def": "when you say something that suggests what you think or want, but not in a direct way; a clue",
        "rank": 2744
    },
    "liquid": {
        "def": "a substance that is able to flow freely",
        "rank": 2745
    },
    "nowhere": {
        "def": "not in or at any place ",
        "rank": 2746
    },
    "anxious": {
        "def": "afraid or nervous especially about what may happen :feeling anxiety ",
        "rank": 2747
    },
    "stranger": {
        "def": "someone you have never met before",
        "rank": 2748
    },
    "leap": {
        "def": "to jump from one place to another",
        "rank": 2749
    },
    "fool": {
        "def": " a person who lacks good sense or judgment : a stupid or silly person ",
        "rank": 2750
    },
    "adventure": {
        "def": "an exciting or dangerous experience ",
        "rank": 2751
    },
    "carpet": {
        "def": "thick material for covering floors, often made of wool",
        "rank": 2752
    },
    "shade": {
        "def": "an area of slight darkness that is produced when something blocks the light of the sun ",
        "rank": 2753
    },
    "portrait": {
        "def": "a painting, drawing, or photograph of someone",
        "rank": 2754
    },
    "hook": {
        "def": " a curved or bent tool for catching, holding, or pulling something ",
        "rank": 2755
    },
    "potato": {
        "def": "a round vegetable with a brown, yellow, or red skin that grows in the ground",
        "rank": 2756
    },
    "reflection": {
        "def": "an image that is seen in a mirror or on a shiny surface ",
        "rank": 2757
    },
    "nerve": {
        "def": "one of the threads in your body which carry messages between your brain and other parts of the body",
        "rank": 2758
    },
    "leather": {
        "def": "animal skin that is chemically treated to preserve it and that is used in making clothes, shoes, furniture, etc.",
        "rank": 2759
    },
    "qualification": {
        "def": " a special skill or type of experience or knowledge that makes someone suitable to do a particular job or activity ",
        "rank": 2760
    },
    "exhaust": {
        "def": "to finish all of the supply of something; to make someone very tired",
        "rank": 2761
    },
    "fragment": {
        "def": "a small piece of something",
        "rank": 2762
    },
    "wander": {
        "def": "to move around or go to different places usually without having a particular purpose or direction",
        "rank": 2763
    },
    "distant": {
        "def": "existing or happening far away in space",
        "rank": 2764
    },
    "unite": {
        "def": "to join together, to come together for the same goal",
        "rank": 2765
    },
    "bell": {
        "def": " a hollow usually cup-shaped metal object that makes a ringing sound when it is hit ",
        "rank": 2766
    },
    "grain": {
        "def": "the seeds of plants (such as wheat, corn, and rice) that are used for food ",
        "rank": 2767
    },
    "monthly": {
        "def": "happening or produced once a month",
        "rank": 2768
    },
    "altogether": {
        "def": "completely and fully : totally, entirely ",
        "rank": 2769
    },
    "differently": {
        "def": "not in the same way as someone or something else",
        "rank": 2770
    },
    "universe": {
        "def": "all of space and everything in it including stars, planets, galaxies, etc.",
        "rank": 2771
    },
    "weekly": {
        "def": "happening once a week or every week",
        "rank": 2772
    },
    "empire": {
        "def": " a group of countries or regions that are controlled by one ruler or one government ",
        "rank": 2773
    },
    "royal": {
        "def": "of or relating to a king or queen ",
        "rank": 2774
    },
    "fence": {
        "def": "a structure like a wall built outdoors usually of wood or metal that separates two areas or prevents people or animals from entering or leaving",
        "rank": 2775
    },
    "luxury": {
        "def": "something expensive that you enjoy but do not need",
        "rank": 2776
    },
    "bite": {
        "def": "to press down on or cut into (someone or something) with the teeth",
        "rank": 2777
    },
    "comedy": {
        "def": "entertainment such as a film, play, etc. which is funny",
        "rank": 2778
    },
    "confusion": {
        "def": "a situation in which people are uncertain about what to do or are unable to understand something clearly",
        "rank": 2779
    },
    "curtain": {
        "def": " a piece of cloth that hangs down from above a window and can be used to cover the window ",
        "rank": 2780
    },
    "consume": {
        "def": "to eat, drink, buy or use up something",
        "rank": 2781
    },
    "flexible": {
        "def": "capable of being easily bent changed without breaking",
        "rank": 2782
    },
    "innocent": {
        "def": "not guilty of committing a crime",
        "rank": 2783
    },
    "tent": {
        "def": "a portable shelter that is used outdoors, is made of cloth (such as canvas or nylon), and is held up with poles and ropes ",
        "rank": 2784
    },
    "stamp": {
        "def": "a small piece of paper that you buy and then stick to an envelope or package to pay the cost of mailing it ",
        "rank": 2785
    },
    "shore": {
        "def": "the land along the edge of an area of water (such as an ocean, lake, etc.)",
        "rank": 2786
    },
    "voluntary": {
        "def": "done or given by their own will and not forced to do",
        "rank": 2787
    },
    "genuine": {
        "def": "If a person or their feelings are genuine, they are sincere and honest; real",
        "rank": 2788
    },
    "swear": {
        "def": "to state (something) very strongly and sincerely",
        "rank": 2789
    },
    "panic": {
        "def": "a sudden, strong feeling of worry or fear that makes you unable to think or behave calmly",
        "rank": 2790
    },
    "sheep": {
        "def": "an animal with a thick woolly coat that is often raised for meat or for its wool and skin ",
        "rank": 2791
    },
    "mayor": {
        "def": "the person who is elected to be the leader of the group that governs a town or city",
        "rank": 2792
    },
    "gentle": {
        "def": "having or showing a kind and quiet nature : not harsh or violent ",
        "rank": 2793
    },
    "precise": {
        "def": "very accurate and exact expression or detail",
        "rank": 2794
    },
    "raw": {
        "def": "not cooked, or in a natural state;  not treated or prepared",
        "rank": 2795
    },
    "wherever": {
        "def": "in what place;  where - used in questions that express surprise or confusion",
        "rank": 2796
    },
    "refugee": {
        "def": "someone who has been forced to leave their country, especially because of a war",
        "rank": 2797
    },
    "listener": {
        "def": "someone who listens",
        "rank": 2798
    },
    "weird": {
        "def": "very strange",
        "rank": 2799
    },
    "substitute": {
        "def": "a person or thing that makes the place instead of something",
        "rank": 2800
    },
    "rice": {
        "def": "small white or brown grains that come from a southeast Asian plant and that are used for food ",
        "rank": 2801
    },
    "aunt": {
        "def": " the sister of your father or mother or the wife of your uncle ",
        "rank": 2802
    },
    "excitement": {
        "def": "a happy and enthusiastic feeling",
        "rank": 2803
    },
    "fade": {
        "def": " to lose strength or freshness ",
        "rank": 2804
    },
    "wipe": {
        "def": " to clean or dry (something) by using a towel, your hand, etc.",
        "rank": 2805
    },
    "chase": {
        "def": "to run after someone or something in order to catch them",
        "rank": 2806
    },
    "slice": {
        "def": "a flat piece of something that has been cut from a larger piece",
        "rank": 2807
    },
    "alongside": {
        "def": "next to someone or something",
        "rank": 2808
    },
    "suspend": {
        "def": "to stop something for a usually short period of time",
        "rank": 2809
    },
    "autumn": {
        "def": "the season between summer and winter ",
        "rank": 2810
    },
    "ugly": {
        "def": "unpleasant to look at : not pretty or attractive ",
        "rank": 2811
    },
    "hello": {
        "def": "used as a greeting",
        "rank": 2812
    },
    "fortunate": {
        "def": "having good luck : enjoying good fortune : lucky ",
        "rank": 2813
    },
    "insure": {
        "def": "to buy insurance for (something, such as property or health)",
        "rank": 2814
    },
    "lazy": {
        "def": "not liking to work hard or to be active ",
        "rank": 2815
    },
    "ashamed": {
        "def": "feeling shame, guilt or embarrassment ",
        "rank": 2816
    },
    "hunger": {
        "def": "a very great need for food : a severe lack of food ",
        "rank": 2817
    },
    "thirst": {
        "def": "an uncomfortable feeling that is caused by the need for something to drink",
        "rank": 2818
    }
};
/**
 * 
 * @name: mnTouch
 * @version: 1.3.2
 * @description: Ultrafast AngularJS touch events directive (tap, hold and swipe)
 * @author: Alessandro Bellini - ilmente
 * @license: MIT
 *
 */
"use strict";angular.module("mn",[]).directive("mnTouch",["$timeout",function(e){var t=function(t,n,o){t.$event={name:"",isSecure:!1,isRunning:!1,target:n[0],threshold:o.threshold?o.threshold:10,holdfor:o.holdfor?o.holdfor:500,types:{start:"mousedown",move:"mousemove",end:"mouseup",cancel:""},time:{},coords:{},events:{},directionX:0,directionY:0,offsetX:0,offsetY:0};var v=function(e){t.$event.name=e,o[e]&&(t.$eval(o[e]),t.$apply())},s=function(e){return{x:e.pageX||0,y:e.pageY||0}};if("undefined"!=typeof window.ontouchstart&&"undefined"!=typeof window.ontouchend&&"undefined"!=typeof window.ontouchcancel?(t.$event.types.start="touchstart",t.$event.types.move="touchmove",t.$event.types.end="touchend",t.$event.types.cancel="touchcancel",s=function(e){var t=e&&e.changedTouches&&!!e.changedTouches.length>0?e.changedTouches[0]:{};return{x:t.pageX||e.pageX||0,y:t.pageY||e.pageY||0}}):window.navigator.pointerEnabled?(t.$event.types.start="pointerdown",t.$event.types.move="pointermove",t.$event.types.end="pointerup"):window.navigator.msPointerEnabled&&(t.$event.types.start="MSPointerDown",t.$event.types.move="MSPointerMove",t.$event.types.end="MSPointerUp",t.$event.types.cancel="MSPointerOut"),o.tap){t.$event.isSecure=!1,t.$event.isRunning=!1;var i=function(e){t.$event.events.start=e,t.$event.coords.start=s(e),v("tap")};t.$event.target.addEventListener(t.$event.types.start,i,!1)}else{t.$event.isSecure=!0;var r=null,i=function(n){t.$event.isRunning=!0,t.$event.time.start=(new Date).getTime(),t.$event.events.start=n,t.$event.coords.start=s(n),o.hold&&(r=e(function(){a(t.$event.events.move||n)},t.$event.holdfor,!1))},d=function(e){t.$event.isRunning&&(t.$event.events.move=e)},a=function(n){r&&e.cancel(r),t.$event.isRunning&&(t.$event.isRunning=!1,t.$event.time.end=(new Date).getTime(),t.$event.time.duration=t.$event.time.end-t.$event.time.start,t.$event.events.end=n,t.$event.coords.end=s(n),t.$event.directionX=t.$event.coords.end.x-t.$event.coords.start.x,t.$event.directionY=t.$event.coords.end.y-t.$event.coords.start.y,t.$event.offsetX=Math.abs(t.$event.directionX),t.$event.offsetY=Math.abs(t.$event.directionY),v(t.$event.offsetX<=t.$event.threshold&&t.$event.offsetY<=t.$event.threshold?o.hold&&t.$event.time.duration>=t.$event.holdfor?"hold":"secureTap":t.$event.offsetX>=t.$event.offsetY?t.$event.directionX>0?"swipeRight":"swipeLeft":t.$event.directionY>0?"swipeDown":"swipeUp"))};t.$event.target.addEventListener(t.$event.types.start,i,!1),t.$event.target.addEventListener(t.$event.types.end,a,!1),t.$event.types.cancel&&t.$event.target.addEventListener(t.$event.types.cancel,a,!1),o.hold&&t.$event.target.addEventListener(t.$event.types.move,d,!1)}};return{restrict:"A",link:t}}]);
//# sourceMappingURL=./mn-touch.min.js.map

 /*NOTE: After defining a new module make sure that you add it to 'app' dependencies in the last line*/
 angular.module('app.dashboard', []);

 angular.module('app.game', ['mn']);

 angular.module('app.resource', ['ngResource']);

 angular.module('app.leaderboard', ['app.resource']);

 angular.module('app.levellist', ['app.resource']);
 
 angular.module('app.review', ['mn']);

 angular.module('app',['app.templates',
 'app.dashboard','app.game','app.resource','app.leaderboard','app.levellist','app.review',
 'ngRoute','ngSanitize','ngResource']);

angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/components/game/gameView','<div et-modal="" modal-object="modalObject"></div><div><div id="game-bar" class="container-fluid"><div class="row"><div class="col-xs-8"><div et-username-avatar="" username="gameData.username" level="levelData.gameType==\'ordinal\'?\'Level \' + levelNumber:\'Review\'" avatar-key="gameData.avatarKey" score="gameData.score"></div></div><div class="col-xs-4 game-bar-right"><div class="game-bar-right-inner"><div et-reward="" class="hint" icon-html="hintIconHtml" count="gameData.rewards.hint.count" left-percent="50" top-percent="50" mn-touch="" tap="hintTap()"></div><div class="hearts" et-hearts="" value="gameData.timeOutStart?0:hearts" hearts-number="3"></div></div></div></div></div><div id="game-container" ng-switch="levelData.gameType" ng-hide="gameData.timeOutStart"><div ng-switch-when="ordinal" et-ordinal-game=""></div><div ng-switch-when="scrambled_letters" et-scrambled-letters-game=""></div><div ng-switch-when="four_alternatives" et-four-alternatives-game=""></div><div ng-switch-when="word_order_alternatives" et-word-order-alternatives-game=""></div></div><div id="feedback-container" ng-if="levelData.gameType!=\'ordinal\'"></div><div id="timeout-container" timeout-time="timeoutTime" et-timeout="" timeout-visible="gameData.timeOutStart"></div><div id="help-bar"><div ng-click="showHelp()" ng-bind-html="::trustAsHtml(\'hint\'|emoji)"></div></div></div>');
$templateCache.put('app/components/game/ordinalGameView','<div id="tiles-container" ng-style="{display:\'table\'}"><div et-tile="" class="tile-wrap" ng-repeat="tile in tiles | orderBy : \'myid\' track by $index" tile="tile" on-short-touch-end="tileTap(tile)" on-touch-start="tileTouchStart(tile)" on-box-close="tileDefClose(tile)"></div></div>');
$templateCache.put('app/components/game/scrambledLettersGameView-Backup','<div class="container-fluid scrambled-letters-game"><div class="row sentence" ng-repeat="s in sentences" ng-style="$index <= currentSentenceIndex?{opacity:1, height:\'initial\'}:{opacity:0, height:0}"><div class="word" ng-repeat="w in s.words track by $index" ng-switch="w==s.targetWord && s.answer!=s.targetWord"><div ng-switch-when="true"><div class="letter-placeholder" ng-repeat="letter in w track by $index"><span ng-bind="s.answer[$index] || \'\'" class="letter"></span></div></div><div class="regular-word" ng-switch-when="false">{{w}}</div></div></div><div class="scrambled-wrap row"><div class="letter-wrap" mn-touch="" tap="tapLetter(l.value)" ng-repeat="l in scrambledLetters | orderBy : \'order\' track by $index"><span ng-bind="l.value" class="letter"></span></div></div></div>');
$templateCache.put('app/components/dashboard/dashboardView','<div class="dashboard"><div class="jelly-fish-container" ng-style="{height:viewH/2+\'px\'}"><div ng-bind-html="jellyFish" id="jellyfish-container" class="jelly-fish" style="opacity:0;"></div></div><ul><li id="item_{{$index}}" ng-repeat="item in menu" ng-style="getLiStyle($index)" mn-touch="" tap="tapItem( $index, item.path)" style="opacity: 0"><p>{{item.text}}</p><div ng-if="item.svg" class="icon" ng-bind-html="item.svg"></div></li></ul></div>');
$templateCache.put('app/components/leaderboard/avatarsView','<div class="avatars"><div class="container-fluid"><div class="row" ng-hide="username || avatarKey"><div class="col-xs-12"><p>Please pick a nickname and an avatar:</p></div></div><div class="row"><div class="col-xs-8 col-xs-offset-2 username-input-wrap"><input id="username-input" class="username-input" ng-maxlength="12" type="text" ng-model="username"><div class="username-available" ng-show="usernamePrecheck.usernameAvailable" ng-bind-html="trustAsHtml(oksvg)"></div></div></div><div class="row avatars-scrollable-outer"><div class="avatars-scrollable-inner"><div ng-repeat="(k, v) in avatars" class="col-xs-1 col-sm-1 col-lg-1"><div class="avatar"><div ng-bind-html="trustAsHtml(v)" mn-touch="" tap="tapAvatar(k)"></div></div></div></div></div><div class="row"><div id="ok-username" class="ok col-xs-8 col-xs-offset-2" ng-click="saveUsernameAvatar()">OK</div></div></div></div>');
$templateCache.put('app/components/leaderboard/leaderboardView','<div class="username-avatar" et-username-avatar="" username="username" avatar-key="avatarKey" score="gameData.score" level="gameData.level"></div><div id="connect-container" ng-hide="data"><h3 ng-show="failMessage">{{failMessage}}</h3><button ng-show="failMessage" class="tile-inner" ng-click="tryConnect()">Try again</button></div><div ng-show="data" class="container" ng-style="{height:viewH-110+\'px\',overflow:\'scroll\'}"><div class="top"><h2>Top Scores</h2><div class="header row"><div class="col-xs-4">Name</div><div class="col-xs-4">Level</div><div class="col-xs-4">Score</div></div><div ng-repeat="g in data.global" class="row"><div class="col-xs-4">{{g.username}}</div><div class="col-xs-4">{{g.levelNumber}}</div><div class="col-xs-4">{{g.score}}</div></div></div><div class="top-month"><h2>Top Monthly Progress</h2><div class="header row"><div class="col-xs-4">Name</div><div class="col-xs-4">Progress</div><div class="col-xs-4">Score</div></div><div ng-repeat="m in data.monthly" class="row"><div class="col-xs-4">{{m.username}}</div><div class="col-xs-4">{{m.progress}}</div><div class="col-xs-4">{{m.score}}</div></div></div><div class="near" ng-show="angular.isDefined(data) && data.near.length>1"><h2>Near You</h2><div class="header row"><div class="col-xs-4">Name</div><div class="col-xs-4">Level</div><div class="col-xs-4">Score</div></div><div ng-repeat="n in data.near" class="row" ng-class="{you:n.key==deviceUuid}"><div class="col-xs-4">{{n.username}}</div><div class="col-xs-4">{{n.levelNumber}}</div><div class="col-xs-4">{{n.score}}</div></div></div></div><div et-avatars="" ng-show="showAvatarPopup"></div>');
$templateCache.put('app/components/levellist/REMOVE_levellistView','<div class="levellist container"><div ng-repeat="(n, b) in ::db" class="block row"><div ng-repeat="l in ::b" class="col-xs-3 col-sm-2 col-lg-1"><div class="level {{l.gameType}}" ng-style="l.style" mn-touch="" ng-click="tapLevel(n, $index)"><span class="level-num">{{::l.levelNumber}}</span></div></div></div></div>');
$templateCache.put('app/components/levellist/levelTemplate','<div class="level-wrap col-xs-3 col-sm-2" id="level_n{{n}}i{{i}}"><div class="level {{gameType}}" style="color: {{style.color}}; background: {{style.background}}; border:{{style.border}}"><span class="level-num" level-n="{{n}}" ,="" level-i="{{i}}">{{levelNumber}}</span></div></div>');
$templateCache.put('app/components/review/reviewView','<div et-scrambled-letters-game="" ng-if="reviewType==\'scrambled_letters\'"></div>');
$templateCache.put('app/components/game/fourAlternatives/fourAltView','<div class="container-fluid four-alternatives-game"><div class="row sentence" ng-repeat="s in sentences" ng-style="$index <= currentSentenceIndex?{opacity:1, height:\'initial\',margin:\'15px 10px;\'}:{opacity:0, height:0,margin:0}"><div class="col-xs-12"><div class="word" ng-repeat="w in s.words" ng-bind="(w==s.targetWord && !s.isDone)?\'\':w" ng-class="{\'placeholder\':w==s.targetWord && !s.isDone }"></div></div></div><div class="alternatives row"><div class="col-xs-6 col-sm-3 alt-wrap" ng-repeat="a in sentences[currentSentenceIndex].alts"><div class="alt" mn-touch="" tap="tapAlt(a)">{{::a}}</div></div></div></div>');
$templateCache.put('app/components/game/hearts/heartsTemplate','<div class="single-heart" et-single-heart="" value="value - $index" ng-repeat="h in [].constructor(heartsNumber) track by $index"></div>');
$templateCache.put('app/components/game/hearts/singleHeartTemplate','<div ng-bind-html="svg"></div>');
$templateCache.put('app/components/game/modal/modalView','<div class="modal-overlay"></div><div id="modal-box" ng-style="boxStyle"><div class="close-button" ng-mousedown="close()"><svg height="25" width="25"><line x1="5" y1="5" x2="20" y2="20" style="stroke:gray; stroke-width:5"></line><line x1="20" y1="5" x2="5" y2="20" style="stroke:gray; stroke-width:5"></line></svg></div><div class="modal-box-inner" ng-bind-html="html" ng-mousedown="close()"></div></div>');
$templateCache.put('app/components/game/progressPie/progressPieView','<svg class="progress-ring" width="{{cx*2}}" height="{{cy*2}}"><circle class="progress-ring__circle" stroke="white" stroke-width="{{strokeWidth}}" fill="transparent" r="{{radius}}" cx="{{cx}}" cy="{{cy}}" ng-style="{\'stroke\':\'crimson\', \'stroke-dasharray\':circumference+\', \'+circumference,\'stroke-dashoffset\':strokeDashoffset+\'\'}"></circle></svg>');
$templateCache.put('app/components/game/tile/tileTemplate','<div ng-bind="tile.word" class="tile-inner" ng-class="{selected:tile.selected}" ng-style="{padding:tile.padding/2 + \'px \'+tile.padding + \'px\',\'-webkit-transform\':tile.transformInner, transform:tile.transformInner}"></div><span ng-style="{opacity: tile.notifyOpacity, position:\'absolute\', color:tile.notifyColor}" class="notify">{{tile.notifyText}}</span><div class="def-box" ng-style="{bottom:tile.boxBottom+\'px\', top:tile.boxTop+\'px\',left:tile.boxLeft+\'px\', right:tile.boxRight+\'px\',opacity:tile.boxOpacity,\'padding-top\':tile.boxPaddingTop+\'px\', \'-webkit-transform\':tile.transformBox, transform:tile.transformBox}"><div class="close-button" mn-touch="" tap="boxClose()"><svg height="25" width="25"><line x1="5" y1="5" x2="20" y2="20" style="stroke:gray; stroke-width:5"></line><line x1="20" y1="5" x2="5" y2="20" style="stroke:gray; stroke-width:5"></line></svg></div>{{tile.def}}</div>');
$templateCache.put('app/components/game/scrambledLetters/scrambledLettersGameView','<div class="container-fluid scrambled-letters-game"><div class="row sentence" ng-repeat="s in sentences" ng-style="$index <= currentSentenceIndex?{opacity:1, height:\'initial\'}:{opacity:0, height:0}"><div class="word-or-letter" ng-repeat="item in s.viewItems track by $index" ng-show="getItemVisible(item, s)" ng-class="{\'letter-placeholder\':item.isLetter,\'word\':!item.isLetter}"><span ng-bind="getItemText(item, s)" ng-class="{letter:item.isLetter}"></span></div></div><div class="scrambled-wrap row"><div class="col-xs-12"><div class="row"><div class="col-xs-2" mn-touch="" tap="tapLetter(l.value)" ng-repeat="l in scrambledLetters | orderBy : \'value\' track by $index"><div class="letter-wrap"><span ng-bind="l.value" class="letter"></span></div></div></div></div></div></div>');
$templateCache.put('app/components/game/timeout/timeoutTemplate','<h1>Timeout</h1><div ng-show="counter==0" class="timeout-text">You should wait a little bit before playing again!</div><div ng-show="counter>0" class="timeout-text">{{counter>=redButtonTexts.length?redButtonTexts[redButtonTexts.length-1]:redButtonTexts[counter]}}</div><div class="timeout-time magic-center-formula" ng-bind="timeoutTime"></div><div id="red-button" class="red-button" mn-touch="" tap="tapRedButton()"></div>');
$templateCache.put('app/components/game/wordOrderAlternatives/wordOrderAltView','<div class="container-fluid word-order-alternatives-game"><div class="row"><div class="col-xs-12 col-sm-6 alt-wrap" ng-repeat="a in alts"><div et-radio="" class="alt" id="alt_{{$index}}" on-select="selectAlt($index)" ng-style="{background:a.bg}">{{a.text}}</div></div></div></div>');
$templateCache.put('app/components/game/tour/firstFirstWordWrong','<p>Oops! <span class="word">{{word}}</span> does not begin with a capital letter. Try another word that starts with a capital letter (A,B,C, ... as opposed to a, b, c, ...).</p>');
$templateCache.put('app/components/game/tour/firstLevelCompleted','<h3>Congratulations! {{\'grinn2\'|emoji}}</h3><p>You have completed the first level! Wasn\'t it fun?</p><p>What\'s more, you learned two sentences.</p><p>Keep playing, learn english and enjoy!</p>');
$templateCache.put('app/components/game/tour/firstTouch','<p>Now touch one of the words you guess it can be beginning of a sentence.</p>');
$templateCache.put('app/components/game/tour/greetingsTemplate','<h3>Greetings!{{\'smile\'|emoji}}</h3><p>Let\'s have some fun learning short sentences.</p>');
$templateCache.put('app/components/game/tour/help3WTemplate','<p>Create sentences with only <em>3 words</em> like <span class="word">Please</span><span class="word">take</span> <span class="word">care</span>.</p><p>Make sentences by tapping the words in their order.</p>');}]);

angular.module('app')
.filter('xlat', ['XlatService', function (XlatService) {
    return function (label, parameters) {
        return XlatService.xlat(label, parameters);
    }
}])
.filter('emoji',  ["appConstants", function (appConstants) {
    return function (label, parameters) {
        var sp = label.split('-');
        var is2x = sp[1] == '2x';
        var w = Math.round(360/9,3)*(is2x?2:1);
        var h = Math.round(118/3,3)*(is2x?2:1);
        var emoji =appConstants.emojis[sp[0]];
        var r = emoji[0];
        var c = emoji[1];
        var style = 'display:inline-block; vertical-align:middle; width:'+w+'px; height:'+h+'px; background: url(./img/emojis-openclipart.org-qubodup'+(is2x? '2x':'')+'.png) '+(-1*(c-1)*w)+'px '+(-1*(r-1)*h)+'px;';
        console.log(style);
        return '<div style="'+style+'"></div>';
    }
}])
.filter('readableRelativeTime',function(){
    return function(inputDate){
    // Make a fuzzy time
    var delta = Math.round((+new Date - inputDate) / 1000);

    var minute = 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    var fuzzy;

    if (delta < 30) {
        fuzzy = 'just then.';
    } else if (delta < minute) {
        fuzzy = delta + ' seconds ago.';
    } else if (delta < 2 * minute) {
        fuzzy = 'a minute ago.'
    } else if (delta < hour) {
        fuzzy = Math.floor(delta / minute) + ' minutes ago.';
    } else if (Math.floor(delta / hour) == 1) {
        fuzzy = '1 hour ago.'
    } else if (delta < day) {
        fuzzy = Math.floor(delta / hour) + ' hours ago.';
    } else if (delta < day * 2) {
        fuzzy = 'yesterday';
    }
}});

'use strict';
angular.module('app').constant('translateProvider', {
    "fa": {
        "_ui_key_Description": "توضیحات",
        "_ui_key_Goal": "هدف",
        "_ui_key_Edit":"ویرایش",
        "_ui_key_FirstName": "نام",
        "_ui_key_LastName": "نام خانوادگی",
        "_ui_key_Date": "تاریخ",
        "interested":"مجذوب و علاقه مندم",
        "excited":"هیجان زده ام",
        "upset":"ناراحت و آشفته ام",
        "strong":"احساس قدرت می کنم",
        "guilty":"احساس گناه می کنم",
        "scared":"وحشت زده ام",
        "hostile":"احساس خصومت می کنم",
        "enthusiastic":"شوق و شور دارم",
        "proud":"احساس غرور می کنم",
        "irritable":"حساس و زودرنج هستم",
        "nervous":"مضطربم",
        "afraid":"ترسیدم",
        "angry":"عصبانی هستم",
        "anxious":"نگرانم",
        "ashamed":"احساس خجالت می کنم",
        "empty":"احساس خالی بودن می کنم",
        "surprised":"احساس تعجب می کنم",
        "hopeless":"ناامیدم",
        "sad":"غمگینم",
        "worthless":"احساس بی ارزشی می کنم",
        "joy":"احساس شادی می کنم",
        "happy":"خوشحالم",
        "alert":"سرحالم",
        "content":"احساس رضایت می کنم"
    },
    "en": {}
});
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'app/components/dashboard/dashboardView',
            controller: 'DashboardController'
        })
        .when('/list', {
            template: '<div et-level-list></div>'
        })
        .when('/game', {
            templateUrl: 'app/components/game/gameView',
            controller: 'GameController'
        })
        .when('/review',{
            templateUrl:'app/components/review/reviewView',
            controller:'ReviewController'
        })
        .when('/board', {
            templateUrl: 'app/components/leaderboard/leaderboardView',
            controller: 'LeaderboardController'
        })
        .when('/', { redirectTo: '/dashboard' });

    // use the HTML5 History API
   /* $locationProvider.html5Mode(true);*/

}]);


angular.module('app')
    .run(['$rootScope', '$anchorScroll', '$location', 'appConstants', 'gameDataManager', '$templateCache', '$compile', '$timeout', function ($rootScope, $anchorScroll, $location, appConstants, gameDataManager, $templateCache, $compile, $timeout) {
        $rootScope.ISDEBUG = ~window.location.href.indexOf('localhost'); //a global variable for debug

        if ($rootScope.ISDEBUG) {
            $rootScope.deviceUuid = 'test_' + Math.floor(Math.random() * 5);
        } else {
            $rootScope.deviceUuid = 'browser_game';
        }

        $rootScope.isCurrentViewScrollable = function () {
            var scrollables = ['list', 'board'];
            return ~scrollables.indexOf($rootScope.getCurrentViewClass());
        }
        $rootScope.getCurrentViewClass = function () {
            var loc = $location.path();
            return loc.substr(1).replace(/\//g, '-');
        };

        $rootScope.saveFilePath = 'ET_' + $rootScope.deviceUuid;

        function getViewportDims() {
            var viewElement = window.document.getElementsByClassName("view")[0];
            
            $rootScope.viewH = viewElement['clientHeight'];
            $rootScope.viewW = lientW = viewElement['clientWidth'];
            $rootScope.$broadcast("ViewportDimensionsChanged");
        };
        getViewportDims();
        document.addEventListener('resume', getViewportDims);
        window.addEventListener('orientationchange', getViewportDims);

        var networkState = navigator.connection.type;
        
        if(networkState!= undefined && networkState != Connection.NONE){
            onOnline();
        }else {onOffline()};
        
        document.addEventListener("offline", onOffline);
        document.addEventListener("online", onOnline);

        /*NOTE that we don't have to get username when we are online, 
        they already exist in gameData and if they exist in the gameData we know
        that the user has picked a username */
        function onOnline() {
            $rootScope.isOnline = true;
        }

        function onOffline() {
            $rootScope.isOnline = false;
        }

        function setDefaultGameData() {
            $rootScope.gameData = {
                level: { n: 3, i: 0 },
                rewards: { hint: {} },
                score: 0,
                usedSentences: [],
                scoreLevelRecordsBatch: []
            };
            gameDataLoaded();
        }

        function gameDataLoaded() {
            console.log('gameDataLoaded:' + JSON.stringify($rootScope.gameData) + ", ready to $broadcast.");
            
            $rootScope.$broadcast("GameDataLoadedEvent");
            setupGameDataWatch();
            /*TODO add to gameData loaded or one of its captures what to do when $scope.gameData.purchaseStatus == 'begin'*/
        }

        function setupGameDataWatch(){
            $rootScope.$watch('gameData', function (newValue, oldValue) {

                /*NOTE that it watches like this you the variable being watched now equals to newValue
                so you could use both the variable or newValue */
                if (JSON.stringify(newValue) != JSON.stringify(oldValue)) { //only data change
                    if ($rootScope.ISDEBUG){
                        console.log('gameData watch fired.');
                    }
                    //console.log('    oldVal:'+JSON.stringify(oldValue));
                    //console.log('    newVal:'+JSON.stringify(newValue));
                    //NOTE that currently we save game whenever anything (eg score, level, records batch) in gameData changes
                    // if you don't like it you can compare oldValue.x and newValue.x for x property and
                    // prevent saving
                    gameDataManager.saveGame($rootScope.saveFilePath, $rootScope.gameData, function(){
                        $rootScope.$broadcast("GameDataSaveSuccessEvent");
                    },function(){
                        $rootScope.$broadcast("GameDataSaveFailureEvent");
                    });

                    //When there are new records in the batch
                    if (newValue.scoreLevelRecordsBatch.length > oldValue.scoreLevelRecordsBatch.length) {
                        console.log('New batch records detected in $watch')
                        if ($rootScope.isOnline && $rootScope.gameData.username) {
                            console.log('Ready to upload.');
                            var uploadPromise = gameDataManager.uploadRecordsBatchPromise($rootScope.deviceUuid, $rootScope.gameData);
                            uploadPromise.then(function (uploadedLevels) { // sucess function
                                //update scoreLevelRecordsBatch; i.e. remove uploaded levels from it
                                //note that this solution allows for new records in the batch in the async upload process
                                $rootScope.gameData.scoreLevelRecordsBatch = $rootScope.gameData.scoreLevelRecordsBatch.filter(
                                    function (x) {
                                        return !~uploadedLevels.indexOf(x.levelNumber)
                                    });
                            }); //no failure function so far
                        }
                    }
                }
            }, true)
        }



        function loadGameToRootScope() {
            gameDataManager.loadGame($rootScope.saveFilePath, function (gd) {

                if (angular.isDefined(gd)) {
                    $rootScope.gameData = gd;
                    gameDataLoaded();
                } else {
                    setDefaultGameData();
                }
            }, function () {
                console.log("Failed to load game data");
                setDefaultGameData();
            });

        }
       
        loadGameToRootScope();




        $rootScope.$on("$locationChangeStart", function (event, newUrl, oldUrl, newState, oldState) {

            console.log('location change start:' + $location.absUrl());
            /* NOTE: no need to detect back this way, because if we do not need back between levels
            we can use replace and adjust the location history cleanly. So we have levellist in our history
            and only one game page after that. Note that we use replace only in nextLevel function.
             if (~oldUrl.indexOf('game') && ~newUrl.indexOf('game')) {
                 var newLevel = appConstants.getLevelFromUrl(newUrl);
                 var oldLevel = appConstants.getLevelFromUrl(oldUrl);
 
                 console.log(newLevel);
                 console.log(oldLevel);
                 //detect back button
                 if (newLevel.n < oldLevel.n || (newLevel.n == oldLevel.n && newLevel.i < oldLevel.i) ){
                 $location.replace();
                 $location.url('/list');
                 }
             }*/
             
                if (angular.isDefined($rootScope.tileWithDefShown)){
                    event.preventDefault();
                    $rootScope.$broadcast('LocationChangePreventedEvent');
                }

        });
        $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl, newState, oldState) {
            //$anchorScroll();
        });

      


    }]);

angular.module('app').factory('XlatService', ['$interpolate', 'translateProvider', function ($interpolate, translateProvider) {
    var currentLanguage = 'fa';
    return {
        setCurrentLanguage: function () {
            currentLanguage = newCurrentLanguage;
        },
        getCurrentLanguage: function () {
            return currentLanguage;
        },
        xlat: function (label, parameters) {
            var transText = translateProvider[currentLanguage][label];
              if (transText == undefined){
                transText = label;
                }
            //  console.log(parameters);
            if (parameters == null || $.isEmptyObject(parameters)) {
                return transText;
            }
            else {
                for (var prop in parameters) {
                    parameters[prop] = '<span class="'+prop+'">'+ parameters[prop]+'</span>';
                }
                return $interpolate(transText)(parameters);
            }
        }

    }
}])
.factory('powerSet',function(){
        return function ( list ){
        var set = [],
            listSize = list.length,
            combinationsCount = (1 << listSize),
            combination;

        for (var i = 1; i < combinationsCount ; i++ ){
            var combination = [];
            for (var j=0;j<listSize;j++){
                if ((i & (1 << j))){
                    combination.push(list[j]);
                }
            }
            set.push(combination);
        }
        return set;
    };
});

// Adapted from gradColor by David Merfield under the CC0 license by Ehsan Abd
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (typeof exports === 'object') {
    var gradColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = gradColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.gradColor = gradColor;

  // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);

  // Support vanilla script loading
  } else {
    root.gradColor = factory();
  }

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  var gradColor = function (options) {

    options = options || {};

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [], grad=0;

      options.count = null;

      while (totalColors > colors.length) {

        grad+=1/(totalColors+1);
        options.grad=grad;
        colors.push(gradColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue (options) {

    var hueRange = getHueRange(options.hue),
        hue = gradWithin(options.grad, hueRange);

    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (hue < 0) {hue = 360 + hue;}

    return hue;

  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return gradWithin(options.grad, [0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return gradWithin(options.grad, [sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return gradWithin(options.grad, [bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {

    if (seed === null) {
      return Math.floor(range[0] + Math.random()*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }

  function gradWithin (grad, range) {
      return Math.floor(range[0] + grad*(range[1] + 1 - range[0]));
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }


  return gradColor;
}));

/*! 
	:: mo · js :: motion graphics toolbelt for the web
	Oleg Solomka @LegoMushroom 2015 MIT
	0.288.1 
*/

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var s=r[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="build/",e(0)}([function(t,e,r){t.exports=r(53)},function(t,e,r){r(59),r(58),t.exports=r(61)("iterator")},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(28),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(16),f=i(c),d=r(12),_=(i(d),r(13)),y=i(_),m=r(11),g=(i(m),r(8)),v=(i(g),r(9)),w=(i(v),r(19)),b=(r(26),r(20)),S=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){this._defaults={parent:document.body,className:"",shape:"circle",stroke:"transparent",strokeOpacity:1,strokeLinecap:"",strokeWidth:2,strokeDasharray:0,strokeDashoffset:0,fill:"deeppink",fillOpacity:1,isSoftHide:!0,isForce3d:!1,left:"50%",top:"50%",x:0,y:0,angle:0,scale:1,scaleX:null,scaleY:null,origin:"50% 50%",opacity:1,rx:0,ry:0,points:3,radius:50,radiusX:null,radiusY:null,isShowStart:!1,isShowEnd:!0,isRefreshState:!0,duration:400,width:null,height:null,isWithShape:!0,callbacksContext:this}},e.prototype.tune=function(e){return t.prototype.tune.call(this,e),this._getMaxSizeInChain(),this},e.prototype.then=function(e){return t.prototype.then.call(this,e),this._getMaxSizeInChain(),this},e.prototype._vars=function(){return t.prototype._vars.call(this),this._lastSet={},this._prevChainModule=this._o.prevChainModule,this.isForeign=!!this._o.ctx,this.isForeignBit=!!this._o.shape},e.prototype._render=function(){return this._isRendered||this._isChained?this._isChained&&(this.el=this._masterModule.el,this.shapeModule=this._masterModule.shapeModule):(this.el=document.createElement("div"),this.el.setAttribute("data-name","mojs-shape"),this.el.setAttribute("class",this._props.className),this._createShape(),this._props.parent.appendChild(this.el),this._setElStyles(),this._setProgress(0,0),this._props.isShowStart?this._show():this._hide(),this._isRendered=!0),this},e.prototype._setElStyles=function(){if(this.el){var t=this._props,e=this.el.style,r=t.shapeWidth,i=t.shapeHeight;if(e.position="absolute",this._setElSizeStyles(r,i),t.isForce3d){var s="backface-visibility";e[""+s]="hidden",e[""+w.prefix.css+s]="hidden"}}},e.prototype._setElSizeStyles=function(t,e){var r=this.el.style;r.width=t+"px",r.height=e+"px",r["margin-left"]=-t/2+"px",r["margin-top"]=-e/2+"px"},e.prototype._draw=function(){if(this.shapeModule){var t=this._props,e=this.shapeModule._props;e.rx=t.rx,e.ry=t.ry,e.stroke=t.stroke,e["stroke-width"]=t.strokeWidth,e["stroke-opacity"]=t.strokeOpacity,e["stroke-dasharray"]=t.strokeDasharray,e["stroke-dashoffset"]=t.strokeDashoffset,e["stroke-linecap"]=t.strokeLinecap,e.fill=t.fill,e["fill-opacity"]=t.fillOpacity,e.radius=t.radius,e.radiusX=t.radiusX,e.radiusY=t.radiusY,e.points=t.points,this.shapeModule._draw(),this._drawEl()}},e.prototype._drawEl=function(){if(null==this.el)return!0;var t=this._props,e=this.el.style;if(this._isPropChanged("opacity")&&(e.opacity=t.opacity),!this.isForeign){this._isPropChanged("left")&&(e.left=t.left),this._isPropChanged("top")&&(e.top=t.top);var r=this._isPropChanged("x"),i=this._isPropChanged("y"),s=r||i,n=this._isPropChanged("scaleX"),o=this._isPropChanged("scaleY"),a=this._isPropChanged("scale"),a=a||n||o,p=this._isPropChanged("angle");if(s||a||p){var u=this._fillTransform();e[w.prefix.css+"transform"]=u,e.transform=u}if(this._isPropChanged("origin")||this._deltas.origin){var l=this._fillOrigin();e[w.prefix.css+"transform-origin"]=l,e["transform-origin"]=l}}},e.prototype._isPropChanged=function(t){return null==this._lastSet[t]&&(this._lastSet[t]={}),this._lastSet[t].value!==this._props[t]?(this._lastSet[t].value=this._props[t],!0):!1},e.prototype._tuneNewOptions=function(e){return t.prototype._tuneNewOptions.call(this,e),null!=e&&n["default"](e).length?void this._setElStyles():1},e.prototype._getMaxRadius=function(t){var e;return e=this._getRadiusSize("radius"),this._getRadiusSize(t,e)},e.prototype._increaseSizeWithEasing=function(){var t=this._props,e=this._o.easing,r=e&&"string"==typeof e;switch(r&&e.toLowerCase()){case"elastic.out":case"elastic.inout":t.size*=1.25;break;case"back.out":case"back.inout":t.size*=1.1}},e.prototype._getRadiusSize=function(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=this._deltas[t];return null!=r?Math.max(Math.abs(r.end),Math.abs(r.start)):null!=this._props[t]?parseFloat(this._props[t]):e},e.prototype._getShapeSize=function(){var t=this._props,e=this._getMaxStroke();t.shapeWidth=null!=t.width?t.width:2*this._getMaxRadius("radiusX")+e,t.shapeHeight=null!=t.height?t.height:2*this._getMaxRadius("radiusY")+e},e.prototype._createShape=function(){if(this._getShapeSize(),this._props.isWithShape){var t=this._props,e=b.getShape(this._props.shape);this.shapeModule=new e({width:t.shapeWidth,height:t.shapeHeight,parent:this.el})}},e.prototype._getMaxSizeInChain=function(){for(var t=(this._props,0),e=0,r=0;r<this._modules.length;r++)this._modules[r]._getShapeSize(),t=Math.max(t,this._modules[r]._props.shapeWidth),e=Math.max(e,this._modules[r]._props.shapeHeight);this.shapeModule&&this.shapeModule._setSize(t,e),this._setElSizeStyles(t,e)},e.prototype._getMaxStroke=function(){var t=this._props,e=this._deltas.strokeWidth;return null!=e?Math.max(e.start,e.end):t.strokeWidth},e.prototype._setProgress=function(t,e){f["default"].prototype._setProgress.call(this,t,e),this._draw(t)},e.prototype._applyCallbackOverrides=function(t){var e=this,r=this._props;t.callbackOverrides={onUpdate:function(t,r){return e._setProgress(t,r)},onStart:function(t){e._isChained||(t?e._show():r.isShowStart||e._hide())},onComplete:function(t){e._isLastInChain()&&(t?r.isShowEnd||e._hide():e._show())},onRefresh:function(t){r.isRefreshState&&t&&e._refreshBefore()}}},e.prototype._transformTweenOptions=function(){this._applyCallbackOverrides(this._o)},e.prototype._fillTransform=function(){var t=this._props,e=null!=t.scaleX?t.scaleX:t.scale,r=null!=t.scaleY?t.scaleY:t.scale,i=e+", "+r;return"translate("+t.x+", "+t.y+") rotate("+t.angle+"deg) scale("+i+")"},e.prototype._fillOrigin=function(){for(var t=this._props,e="",r=0;r<t.origin.length;r++)e+=t.origin[r].string+" ";return e},e.prototype._refreshBefore=function(){this._setProgress(this.tween._props.easing(0),0),this._props.isShowStart?this._show():this._hide()},e.prototype._showByTransform=function(){this._lastSet.scale=null,this._drawEl()},e}(y["default"]);e["default"]=S},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(24),a=i(o),p=r(25),u=i(p),l=r(2),h=i(l),c=r(19),f=i(c),d=function(t){function e(){return n["default"](this,e),a["default"](this,t.apply(this,arguments))}return u["default"](e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.isSwirl=!0,this._defaults.swirlSize=10,this._defaults.swirlFrequency=3,this._defaults.pathScale=1,this._defaults.degreeShift=0,this._defaults.radius=5,this._defaults.x=0,this._defaults.y=0,this._defaults.scale={1:0},this._defaults.direction=1},e.prototype._extendDefaults=function(){t.prototype._extendDefaults.call(this),this._calcPosData()},e.prototype._tuneNewOptions=function(e){null!=e&&(t.prototype._tuneNewOptions.call(this,e),(null!=e.x||null!=e.y)&&this._calcPosData())},e.prototype._calcPosData=function(){var t=this._getPosValue("x"),e=this._getPosValue("y"),r=90+Math.atan(e.delta/t.delta||0)*f["default"].RAD_TO_DEG;this._posData={radius:Math.sqrt(t.delta*t.delta+e.delta*e.delta),angle:t.delta<0?r+180:r,x:t,y:e}},e.prototype._getPosValue=function(t){var e=this._deltas[t];if(e)return delete this._deltas[t],{start:e.start.value,end:e.end.value,delta:e.delta,units:e.end.unit};var r=f["default"].parseUnit(this._props[t]);return{start:r.value,end:r.value,delta:0,units:r.unit}},e.prototype._setProgress=function(t,e){this._progress=t,this._calcCurrentProps(t,e),this._calcSwirlXY(t),this._draw(t)},e.prototype._calcSwirlXY=function(t){var e=this._props,r=this._posData.angle+e.degreeShift,i=f["default"].getRadialPoint({angle:e.isSwirl?r+this._getSwirl(t):r,radius:t*this._posData.radius*e.pathScale,center:{x:this._posData.x.start,y:this._posData.y.start}}),s=i.x,n=i.y,o=1e-6;s>0&&o>s&&(s=o),n>0&&o>n&&(n=o),0>s&&s>-o&&(s=-o),0>n&&n>-o&&(n=-o),e.x=this._o.ctx?s:""+s+this._posData.x.units,e.y=this._o.ctx?n:""+n+this._posData.y.units},e.prototype._getSwirl=function(t){var e=this._props;return e.direction*e.swirlSize*Math.sin(e.swirlFrequency*t)},e.prototype._draw=function(){var t=this._props.isWithShape?"_draw":"_drawEl";h["default"].prototype[t].call(this)},e}(h["default"]);e["default"]=d},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(28),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(9),f=i(c),d=r(3),_=i(d),y=r(13),m=i(y),g=r(19),v=i(g),w=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){this._defaults={count:5,degree:360,radius:{0:50},radiusX:null,radiusY:null,width:0,height:0}},e.prototype.then=function(t){this._removeTweenProperties(t);var e=this._masterThen(t),r=this._childThen(t);return this._setSwirlDuration(e,this._calcPackTime(r)),this.timeline._recalcTotalDuration(),this},e.prototype.tune=function(t){return null==t?this:(this._saveTimelineOptions(t),this.timeline._setProp(this._timelineOptions),this._removeTweenProperties(t),this._tuneNewOptions(t),this.masterSwirl.tune(t),this._tuneSwirls(t),this._recalcModulesTime(),this)},e.prototype._extendDefaults=function(){this._removeTweenProperties(this._o),t.prototype._extendDefaults.call(this)},e.prototype._removeTweenProperties=function(t){for(var e in v["default"].tweenOptionMap)null==this._defaults[e]&&delete t[e]},e.prototype._recalcModulesTime=function(){for(var t=this.masterSwirl._modules,e=this._swirls,r=0,i=0;i<t.length;i++){var s=t[i].tween,n=this._calcPackTime(e[i]);s._setProp({duration:n,shiftTime:r}),r+=n}this.timeline._recalcTotalDuration()},e.prototype._tuneSwirls=function(t){for(var e=this._swirls[0],r=0;r<e.length;r++){var i=e[r],s=this._getChildOption(t||{},r),n=null!=s.degreeShift;n||(s.degreeShift=this._swirls[0][r]._props.degreeShift),this._addBurstProperties(s,r),n||delete s.degreeShift,i.tune(s),this._refreshBurstOptions(i._modules,r)}},e.prototype._refreshBurstOptions=function(t,e){for(var r=1;r<t.length;r++){var i=t[r],s={};this._addBurstProperties(s,e,r),i._tuneNewOptions(s)}},e.prototype._masterThen=function(t){this.masterSwirl.then(t);var e=v["default"].getLastItem(this.masterSwirl._modules);return this._masterSwirls.push(e),e},e.prototype._childThen=function(t){for(var e=this._swirls[0],r=[],i=0;i<e.length;i++){{var s=this._getChildOption(t,i),n=e[i];v["default"].getLastItem(n._modules)}s.parent=this.el,this._addBurstProperties(s,i,this._masterSwirls.length-1),n.then(s),r.push(v["default"].getLastItem(n._modules))}return this._swirls[this._masterSwirls.length-1]=r,r},e.prototype._vars=function(){t.prototype._vars.call(this),this._bufferTimeline=new f["default"]},e.prototype._render=function(){this._o.isWithShape=!1,this._o.isSwirl=this._props.isSwirl,this._o.callbacksContext=this,this._saveTimelineOptions(this._o),this.masterSwirl=new S(this._o),this._masterSwirls=[this.masterSwirl],this.el=this.masterSwirl.el,this._renderSwirls()},e.prototype._renderSwirls=function(){for(var t=this._props,e=[],r=0;r<t.count;r++){var i=this._getChildOption(this._o,r);e.push(new b(this._addOptionalProps(i,r)))}this._swirls={0:e},this._setSwirlDuration(this.masterSwirl,this._calcPackTime(e))},e.prototype._saveTimelineOptions=function(t){this._timelineOptions=t.timeline,delete t.timeline},e.prototype._calcPackTime=function(t){for(var e=0,r=0;r<t.length;r++){var i=t[r].tween,s=i._props;e=Math.max(s.repeatTime/s.speed,e)}return e},e.prototype._setSwirlDuration=function(t,e){t.tween._setProp("duration",e);var r=t.timeline&&t.timeline._recalcTotalDuration;r&&t.timeline._recalcTotalDuration()},e.prototype._getChildOption=function(t,e){var r={};for(var i in t.children)r[i]=this._getPropByMod(i,e,t.children);return r},e.prototype._getPropByMod=function(t,e){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],i=r[t];return v["default"].isArray(i)?i[e%i.length]:i},e.prototype._addOptionalProps=function(t,e){return t.index=e,t.parent=this.masterSwirl.el,this._addBurstProperties(t,e),t},e.prototype._addBurstProperties=function(t,e,r){var i=this._index;this._index=e;var s=this._parseProperty("degreeShift",t.degreeShift||0);this._index=i;var n=this._props,o=n.degree%360===0?n.count:n.count-1||1,a=n.degree/o,p=this._getSidePoint("start",e*a+s,r),u=this._getSidePoint("end",e*a+s,r);t.x=this._getDeltaFromPoints("x",p,u),t.y=this._getDeltaFromPoints("y",p,u),t.angle=this._getBitAngle(t.angle||0,s,e)},e.prototype._getBitAngle=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments[2],i=this._props,s=i.degree%360===0?i.count:i.count-1||1,o=i.degree/s,a=r*o+90;if(a+=e,this._isDelta(t)){var p={},u=n["default"](t),l=u[0],h=t[l];l=v["default"].parseStringOption(l,r),h=v["default"].parseStringOption(h,r),p[parseFloat(l)+a]=parseFloat(h)+a,t=p}else t+=a;return t},e.prototype._getSidePoint=function(t,e,r){var i=(this._props,this._getSideRadius(t,r));return v["default"].getRadialPoint({radius:i.radius,radiusX:i.radiusX,radiusY:i.radiusY,angle:e,center:{x:0,y:0}})},e.prototype._getSideRadius=function(t,e){return{radius:this._getRadiusByKey("radius",t,e),radiusX:this._getRadiusByKey("radiusX",t,e),radiusY:this._getRadiusByKey("radiusY",t,e)}},e.prototype._getRadiusByKey=function(t,e){var r=arguments.length<=2||void 0===arguments[2]?0:arguments[2],i=this._masterSwirls[r],s=i._deltas,n=i._props;return null!=s[t]?s[t][e]:null!=n[t]?n[t]:void 0},e.prototype._getDeltaFromPoints=function(t,e,r){var i={};return e[t]===r[t]?i=e[t]:i[e[t]]=r[t],i},e.prototype._makeTimeline=function(){this._o.timeline=this._timelineOptions,t.prototype._makeTimeline.call(this),this.timeline.add(this.masterSwirl,this._swirls[0])},e.prototype._makeTween=function(){},e.prototype._hide=function(){},e.prototype._show=function(){},e}(m["default"]),b=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.isSwirl=!1,this._o.duration=null!=this._o.duration?this._o.duration:700},e.prototype._calcSwirlXY=function(e){var r=this._props.degreeShift;this._props.degreeShift=0,t.prototype._calcSwirlXY.call(this,e),this._props.degreeShift=r},e}(_["default"]),S=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.scale=1,this._defaults.width=0,this._defaults.height=0,this._defaults.radius={25:75}},e}(b);w.ChildSwirl=b,w.MainSwirl=S,e["default"]=w},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(27),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(28),f=i(c),d=r(12),_=i(d),y=r(8),m=i(y),g=r(15),v=i(g),w=r(19),b={};m["default"].prototype._declareDefaults.call(b);for(var S=f["default"](b._defaults),P=0;P<S.length;P++)b._defaults[S[P]]=1;b._defaults.timeline=1;var x=b._defaults,T=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){this._defaults={x:0,y:0,z:0,skewX:0,skewY:0,angleX:0,angleY:0,angleZ:0,scale:1,scaleX:1,scaleY:1,isSoftHide:!0,isShowStart:!0,isShowEnd:!0,isForce3d:!1,isRefreshState:!0},this._drawExclude={el:1},this._3dProperties=["angleX","angleY","z"],this._arrayPropertyMap={transformOrigin:1,backgroundPosition:1},this._numberPropertyMap={opacity:1,scale:1,scaleX:1,scaleY:1,angleX:1,angleY:1,angleZ:1,skewX:1,skewY:1},this._prefixPropertyMap={transform:1,transformOrigin:1},this._prefix=w.prefix.css},e.prototype.then=function(e){if(null==e||!f["default"](e).length)return 1;var r=w.getLastItem(this._modules);return r.deltas.refresh(!1),this._history[this._history.length-1]=r._o,t.prototype.then.call(this,e),r.deltas.restore(),this},e.prototype._checkStartValue=function(t,e){return null==e?null!=this._defaults[t]?this._defaults[t]:null!=this._customProps[t]?this._customProps[t]:null!=w.defaultStyles[t]?w.defaultStyles[t]:0:e},e.prototype._draw=function(){for(var t=this._props,e=0;e<this._drawProps.length;e++){var r=this._drawProps[e];this._setStyle(r,t[r])}this._drawTransform(),this._customDraw&&this._customDraw(this._props.el,this._props)},e.prototype._drawTransform=function(){var t=this._props,e=this._is3d?"translate3d("+t.x+", "+t.y+", "+t.z+")\n          rotateX("+t.angleX+"deg)\n          rotateY("+t.angleY+"deg)\n          rotateZ("+t.angleZ+"deg)\n          skew("+t.skewX+"deg, "+t.skewY+"deg)\n          scale("+t.scaleX+", "+t.scaleY+")":"translate("+t.x+", "+t.y+")\n          rotate("+t.angleZ+"deg)\n          skew("+t.skewX+"deg, "+t.skewY+"deg)\n          scale("+t.scaleX+", "+t.scaleY+")";this._setStyle("transform",e)},e.prototype._render=function(){if(!this._o.prevChainModule){for(var t=this._props,e=0;e<this._renderProps.length;e++){var r=this._renderProps[e],i=t[r];i="number"==typeof i?i+"px":i,this._setStyle(r,i)}this._draw(),t.isShowStart||this._hide()}},e.prototype._setStyle=function(t,e){if(this._state[t]!==e){var r=this._props.el.style;r[t]=e,this._prefixPropertyMap[t]&&(r[""+this._prefix+t]=e),this._state[t]=e}},e.prototype._extendDefaults=function(){this._props=this._o.props||{},this._renderProps=[],this._drawProps=[],this._saveCustomProperties(this._o);var t=n["default"]({},this._o);t=this._addDefaults(t);for(var e=f["default"](t),r=0;r<e.length;r++){var i=e[r],s=!this._drawExclude[i]&&null==this._defaults[i]&&!x[i],o=this._customProps[i];w.isDelta(t[i])||x[i]?s&&!o&&this._drawProps.push(i):(this._parseOption(i,t[i]),"el"===i&&(this._props.el=w.parseEl(t.el),this.el=this._props.el),s&&!o&&this._renderProps.push(i))}this._createDeltas(t)},e.prototype._saveCustomProperties=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this._customProps=t.customProperties||{},this._customProps=n["default"]({},this._customProps),this._customDraw=this._customProps.draw,delete this._customProps.draw,delete t.customProperties,this._copyDefaultCustomProps()},e.prototype._copyDefaultCustomProps=function(){for(var t in this._customProps)null==this._o[t]&&(this._o[t]=this._customProps[t])},e.prototype._resetMergedFlags=function(e){return t.prototype._resetMergedFlags.call(this,e),e.props=this._props,e.customProperties=this._customProps,e},e.prototype._parseOption=function(e,r){t.prototype._parseOption.call(this,e,r);var i=this._props[e];w.isArray(i)&&(this._props[e]=this._arrToString(i))},e.prototype._arrToString=function(t){for(var e="",r=0;r<t.length;r++)e+=t[r].string+" ";return e},e.prototype._addDefaults=function(t){this._is3d=!1;for(var e in this._defaults)null==t[e]?t[e]="scaleX"===e||"scaleY"===e?null!=t.scale?t.scale:this._defaults.scale:this._defaults[e]:-1!==this._3dProperties.indexOf(e)&&(this._is3d=!0);return this._o.isForce3d&&(this._is3d=!0),t},e.prototype._vars=function(){this.deltas.refresh(!1),t.prototype._vars.call(this),this._state={},this.deltas.restore(!1)},e.prototype._createDeltas=function(t){this.deltas=new v["default"]({options:t,props:this._props,arrayPropertyMap:this._arrayPropertyMap,numberPropertyMap:this._numberPropertyMap,customProps:this._customProps,callbacksContext:t.callbacksContext||this,isChained:!!this._o.prevChainModule}),this._o.prevChainModule&&(this.timeline=this.deltas.timeline)},e.prototype._makeTween=function(){},e.prototype._makeTimeline=function(){this._o.prevChainModule||(this._o.timeline=this._o.timeline||{},this._addCallbackOverrides(this._o.timeline),t.prototype._makeTimeline.call(this),this.timeline.add(this.deltas))},e.prototype._addCallbackOverrides=function(t){var e=this,r=this._props;t.callbackOverrides={onUpdate:this._draw,onRefresh:this._props.isRefreshState?this._draw:void 0,onStart:function(t){e._isChained||(t&&!r.isShowStart?e._show():r.isShowStart||e._hide())},onComplete:function(t){e._isChained||(t?r.isShowEnd||e._hide():r.isShowEnd||e._show())}}},e.prototype._showByTransform=function(){this._drawTransform()},e.prototype._mergeThenProperty=function(t,e,r){var i="boolean"==typeof r;if(w.isTweenProp(t)||this._nonMergeProps[t]||i)return r;var s={};if(w.isObject(r)&&null!=r.to){for(var o in r)(x[o]||"curve"===o)&&(s[o]=r[o],delete r[o]);r=r.to}if(this._isDelta(r)){var a={};for(var p in r)(x[p]||"curve"===p)&&(a[p]=r[p],delete r[p]);var u=this._parseDeltaValues(t,r);return n["default"]({},u,a)}var l=this._parsePreArrayProperty(t,r);if(this._isDelta(e)){var h;return n["default"]((h={},h[w.getDeltaEnd(e)]=l,h),s)}var c;return n["default"]((c={},c[e]=l,c),s)},e}(_["default"]);e["default"]=T},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var s=r(28),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(19),f=i(c),d=r(9),_=i(d),y=r(13),m=i(y),g=function(t){function e(r,i){var s;a["default"](this,e);var n=u["default"](this,t.call(this));return s=n._init(r,i),u["default"](n,s)}return h["default"](e,t),e.prototype.then=function(t){if(null==t)return this;for(var e=0;e<this._modules.length;e++)this._modules[e].then(this._getOptionByIndex(e,t));return this.timeline._recalcTotalDuration(),this},e.prototype.tune=function(t){if(null==t)return this;for(var e=0;e<this._modules.length;e++)this._modules[e].tune(this._getOptionByIndex(e,t));return this.timeline._recalcTotalDuration(),this},e.prototype.generate=function(){for(var t=0;t<this._modules.length;t++)this._modules[t].generate();return this.timeline._recalcTotalDuration(),this},e.prototype._getOptionByMod=function(t,e,r){var i=r[t];(i+""=="[object NodeList]"||i+""=="[object HTMLCollection]")&&(i=Array.prototype.slice.call(i,0));var s=f["default"].isArray(i)?i[e%i.length]:i;return f["default"].parseIfStagger(s,e)},e.prototype._getOptionByIndex=function(t,e){var r=this,i={};return n["default"](e).forEach(function(s){return i[s]=r._getOptionByMod(s,t,e)}),i},e.prototype._getChildQuantity=function(t,e){if("number"==typeof t)return t;var r=e[t];return f["default"].isArray(r)?r.length:r+""=="[object NodeList]"?r.length:r+""=="[object HTMLCollection]"?Array.prototype.slice.call(r,0).length:r instanceof HTMLElement?1:"string"==typeof r?1:void 0},e.prototype._init=function(t,e){var r=this._getChildQuantity(t.quantifier||"el",t);this._createTimeline(t),this._modules=[];for(var i=0;r>i;i++){var s=this._getOptionByIndex(i,t);s.isRunLess=!0,s.index=i;var n=new e(s);this._modules.push(n),this.timeline.add(n)}return this},e.prototype._createTimeline=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.timeline=new _["default"](t.timeline)},e.prototype._makeTween=function(){},e.prototype._makeTimeline=function(){},e}(m["default"]);t.exports=function(t){return function(e){return new g(e,t)}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(19),a=i(o),p=r(8),u=i(p),l=r(9),h=i(l),c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return n["default"](this,t),this.o=e,this.o.el?(this._vars(),this._declareDefaults(),this._extendDefaults(),this._parseFrames(),this._frames.length<=2&&a["default"].warn("Spriter: only "+this._frames.length+" frames found"),this._frames.length<1&&a["default"].error("Spriter: there is no frames to animate, aborting"),this._createTween(),this):a["default"].error('No "el" option specified, aborting')}return t.prototype._declareDefaults=function(){this._defaults={duration:500,delay:0,easing:"linear.none",repeat:0,yoyo:!1,isRunLess:!1,isShowEnd:!1,onStart:null,onUpdate:null,onComplete:null}},t.prototype._vars=function(){this._props=a["default"].cloneObj(this.o),this.el=this.o.el,this._frames=[]},t.prototype.run=function(t){return this.timeline.play()},t.prototype._extendDefaults=function(){return a["default"].extend(this._props,this._defaults)},t.prototype._parseFrames=function(){this._frames=Array.prototype.slice.call(this.el.children,0),this._frames.forEach(function(t,e){return t.style.opacity=0}),this._frameStep=1/this._frames.length},t.prototype._createTween=function(){var t=this;this._tween=new u["default"]({duration:this._props.duration,delay:this._props.delay,yoyo:this._props.yoyo,repeat:this._props.repeat,easing:this._props.easing,onStart:function(){return t._props.onStart&&t._props.onStart()},onComplete:function(){return t._props.onComplete&&t._props.onComplete()},onUpdate:function(e){return t._setProgress(e)}}),this.timeline=new h["default"],this.timeline.add(this._tween),this._props.isRunLess||this._startTween()},t.prototype._startTween=function(){var t=this;setTimeout(function(){return t.timeline.play()},1)},t.prototype._setProgress=function(t){var e=Math.floor(t/this._frameStep);if(this._prevFrame!=this._frames[e]){this._prevFrame&&(this._prevFrame.style.opacity=0);var r=1===t&&this._props.isShowEnd?e-1:e;this._frames[r]&&(this._frames[r].style.opacity=1),this._prevFrame=this._frames[e]}this._props.onUpdate&&this._props.onUpdate(t)},t}();e["default"]=c},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(24),a=i(o),p=r(25),u=i(p),l=r(19),h=(i(l),r(10)),c=i(h),f=r(22),d=i(f),_=r(16),y=i(_),m=function(t){function e(){var r,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n["default"](this,e);var s=a["default"](this,t.call(this,i));return null==s._props.name&&s._setSelfName(),r=s,a["default"](s,r)}return u["default"](e,t),e.prototype._declareDefaults=function(){this._defaults={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,name:null,nameBase:"Tween",onProgress:null,onStart:null,onRefresh:null,onComplete:null,onRepeatStart:null,onRepeatComplete:null,onFirstUpdate:null,onUpdate:null,isChained:!1,onPlaybackStart:null,onPlaybackPause:null,onPlaybackStop:null,onPlaybackComplete:null,callbacksContext:null}},e.prototype.play=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return"play"===this._state&&this._isRunning?this:(this._props.isReversed=!1,this._subPlay(t,"play"),this._setPlaybackState("play"),this)},e.prototype.playBackward=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return"reverse"===this._state&&this._isRunning?this:(this._props.isReversed=!0,this._subPlay(t,"reverse"),this._setPlaybackState("reverse"),this)},e.prototype.pause=function(){return"pause"===this._state||"stop"===this._state?this:(this._removeFromTweener(),this._setPlaybackState("pause"),this)},e.prototype.stop=function(t){if("stop"===this._state)return this;this._wasUknownUpdate=void 0;var e=null!=t?t:"reverse"===this._state?1:0;return this.setProgress(e),this.reset(),this},e.prototype.replay=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return this.reset(),this.play(t),this},e.prototype.replayBackward=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return this.reset(),this.playBackward(t),this},e.prototype.resume=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];if("pause"!==this._state)return this;switch(this._prevState){case"play":this.play(t);break;case"reverse":this.playBackward(t)}return this},e.prototype.setProgress=function(t){var e=this._props;return!e.startTime&&this._setStartTime(),this._playTime=null,0>t&&(t=0),t>1&&(t=1),this._update(e.startTime-e.delay+t*e.repeatTime),this},e.prototype.setSpeed=function(t){return this._props.speed=t,("play"===this._state||"reverse"===this._state)&&this._setResumeTime(this._state),this},e.prototype.reset=function(){return this._removeFromTweener(),this._setPlaybackState("stop"),this._progressTime=0,this._isCompleted=!1,this._isStarted=!1,this._isFirstUpdate=!1,this._wasUknownUpdate=void 0,this._prevTime=void 0,this._prevYoyo=void 0,this._props.isReversed=!1,this},e.prototype._subPlay=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments[1],r=this._props,i=this._state,s=this._prevState,n="pause"===i,o="play"===i||n&&"play"===s,a="reverse"===i||n&&"reverse"===s,p=o&&"reverse"===e||a&&"play"===e;return this._progressTime=this._progressTime>=r.repeatTime?0:this._progressTime,p&&(this._progressTime=r.repeatTime-this._progressTime),this._setResumeTime(e,t),c["default"].add(this),this},e.prototype._setResumeTime=function(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1];this._resumeTime=performance.now();var r=this._resumeTime-Math.abs(e)-this._progressTime;this._setStartTime(r,!1),null!=this._prevTime&&(this._prevTime="play"===t?this._normPrevTimeForward():this._props.endTime-this._progressTime)},e.prototype._normPrevTimeForward=function(){var t=this._props;return t.startTime+this._progressTime-t.delay},e.prototype._setSelfName=function(){var t="_"+this._props.nameBase+"s";c["default"][t]=null==c["default"][t]?1:++c["default"][t],this._props.name=this._props.nameBase+" "+c["default"][t]},e.prototype._setPlaybackState=function(t){this._prevState=this._state,this._state=t;var e="pause"===this._prevState,r="stop"===this._prevState,i="play"===this._prevState,s="reverse"===this._prevState,n=i||s,o=r||e;"play"!==t&&"reverse"!==t||!o||this._playbackStart(),"pause"===t&&n&&this._playbackPause(),"stop"===t&&(n||e)&&this._playbackStop()},e.prototype._vars=function(){return this.progress=0,this._prevTime=void 0,this._progressTime=0,this._negativeShift=0,this._state="stop",this._props.delay<0&&(this._negativeShift=this._props.delay,this._props.delay=0),this._calcDimentions()},e.prototype._calcDimentions=function(){this._props.time=this._props.duration+this._props.delay,this._props.repeatTime=this._props.time*(this._props.repeat+1)},e.prototype._extendDefaults=function(){this._callbackOverrides=this._o.callbackOverrides||{},delete this._o.callbackOverrides,t.prototype._extendDefaults.call(this);var e=this._props;e.easing=d["default"].parseEasing(e.easing),e.easing._parent=this,null!=e.backwardEasing&&(e.backwardEasing=d["default"].parseEasing(e.backwardEasing),e.backwardEasing._parent=this)},e.prototype._setStartTime=function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],r=this._props,i=r.shiftTime||0;e&&(this._isCompleted=!1,this._isRepeatCompleted=!1,this._isStarted=!1);var s=null==t?performance.now():t;return r.startTime=s+r.delay+this._negativeShift+i,r.endTime=r.startTime+r.repeatTime-r.delay,this._playTime=null!=this._resumeTime?this._resumeTime:s+i,this._resumeTime=null,this},e.prototype._update=function(t,e,r,i){var s=this._props;null==this._prevTime&&null!=e&&(this._props.speed&&this._playTime&&(this._prevTime=this._playTime+this._props.speed*(e-this._playTime)),this._wasUknownUpdate=!0);var n=s.startTime-s.delay;if(s.speed&&this._playTime&&(t=this._playTime+s.speed*(t-this._playTime)),Math.abs(s.endTime-t)<1e-8&&(t=s.endTime),i&&null!=r){var o=this._getPeriod(t),a=!(!s.isYoyo||!this._props.repeat||o%2!==1);if(this._timelines)for(var p=0;p<this._timelines.length;p++)this._timelines[p]._update(t,e,r,i);1===i?r?(this._prevTime=t+1,this._repeatStart(t,a),this._start(t,a)):(this._prevTime=t-1,this._repeatComplete(t,a),this._complete(t,a)):-1===i&&(r?(this._prevTime=t-1,
this._repeatComplete(t,a),this._complete(t,a)):this._prevTime>=s.startTime&&this._prevTime<=s.endTime&&(this._prevTime=t+1,this._repeatStart(t,a),this._start(t,a),this._isCompleted=!0)),this._prevTime=void 0}return t>n&&t<s.endTime?this._progressTime=t-n:n>=t?this._progressTime=0:t>=s.endTime&&(this._progressTime=s.repeatTime+1e-11),s.isReversed&&(t=s.endTime-this._progressTime),null==this._prevTime?(this._prevTime=t,this._wasUknownUpdate=!0,!1):(t>=n&&t<=s.endTime&&this._progress((t-n)/s.repeatTime,t),t>=s.startTime&&t<=s.endTime?this._updateInActiveArea(t):this._isInActiveArea?this._updateInInactiveArea(t):this._isRefreshed||t<s.startTime&&0!==this.progress&&(this._refresh(!0),this._isRefreshed=!0),this._prevTime=t,t>=s.endTime||n>=t)},e.prototype._updateInInactiveArea=function(t){if(this._isInActiveArea){var e=this._props;if(t>e.endTime&&!this._isCompleted){this._progress(1,t);var r=this._getPeriod(e.endTime),i=e.isYoyo&&r%2===0;this._setProgress(i?0:1,t,i),this._repeatComplete(t,i),this._complete(t,i)}t<this._prevTime&&t<e.startTime&&!this._isStarted&&!this._isCompleted&&(this._progress(0,t,!1),this._setProgress(0,t,!1),this._isRepeatStart=!1,this._repeatStart(t,!1),this._start(t,!1)),this._isInActiveArea=!1}},e.prototype._updateInActiveArea=function(t){var e=this._props,r=e.delay+e.duration,i=e.startTime-e.delay,s=(t-e.startTime+e.delay)%r,n=Math.round((e.endTime-e.startTime+e.delay)/r),o=this._getPeriod(t),a=this._delayT,p=this._getPeriod(this._prevTime),u=this._delayT,l=e.isYoyo&&o%2===1,h=e.isYoyo&&p%2===1,c=l?1:0;if(t===e.endTime){this._wasUknownUpdate=!1;var l=e.isYoyo&&(o-1)%2===1;return this._setProgress(l?0:1,t,l),t>this._prevTime&&(this._isRepeatCompleted=!1),this._repeatComplete(t,l),this._complete(t,l)}if(this._isCompleted=!1,this._isRefreshed=!1,i+s>=e.startTime){this._isInActiveArea=!0,this._isRepeatCompleted=!1,this._isRepeatStart=!1,this._isStarted=!1;var f=(t-e.startTime)%r,d=f/e.duration,_=o>0&&o>p,y=p>o;if(this._onEdge=0,_&&(this._onEdge=1),y&&(this._onEdge=-1),this._wasUknownUpdate&&(t>this._prevTime&&(this._start(t,l),this._repeatStart(t,l),this._firstUpdate(t,l)),t<this._prevTime&&(this._complete(t,l),this._repeatComplete(t,l),this._firstUpdate(t,l),this._isCompleted=!1)),_){if(1!==this.progress){var m=e.isYoyo&&(o-1)%2===1;this._repeatComplete(t,m)}p>=0&&this._repeatStart(t,l)}t>this._prevTime&&(!this._isStarted&&this._prevTime<=e.startTime&&(this._start(t,l),this._repeatStart(t,l),this._isStarted=!1,this._isRepeatStart=!1),this._firstUpdate(t,l)),y&&(0!==this.progress&&1!==this.progress&&p!=n&&this._repeatStart(t,h),p!==n||this._wasUknownUpdate||(this._complete(t,l),this._repeatComplete(t,l),this._firstUpdate(t,l),this._isCompleted=!1),this._repeatComplete(t,l)),"delay"===p&&(u>o&&this._repeatComplete(t,l),o===u&&o>0&&this._repeatStart(t,l)),t>this._prevTime?(0===d&&this._repeatStart(t,l),t!==e.endTime&&this._setProgress(l?1-d:d,t,l)):(t!==e.endTime&&this._setProgress(l?1-d:d,t,l),0===d&&this._repeatStart(t,l)),t===e.startTime&&this._start(t,l)}else if(this._isInActiveArea){var g="delay"===o?a:o,v=t>this._prevTime;v&&g--,c=e.isYoyo&&g%2===1?1:0,t<this._prevTime&&(this._setProgress(c,t,1===c),this._repeatStart(t,1===c)),this._setProgress(v?1-c:c,t,1===c),t>this._prevTime&&(0!==this.progress||1===c)&&this._repeatComplete(t,1===c),this._isInActiveArea=!1}this._wasUknownUpdate=!1},e.prototype._removeFromTweener=function(){return c["default"].remove(this),this},e.prototype._getPeriod=function(t){var e=this._props,r=e.delay+e.duration,i=e.delay+t-e.startTime,s=i/r,n=t<e.endTime?i%r:0;return s=t>=e.endTime?Math.round(s):Math.floor(s),t>e.endTime?s=Math.round((e.endTime-e.startTime+e.delay)/r):n>0&&n<e.delay&&(this._delayT=s,s="delay"),s},e.prototype._setProgress=function(t,e,r){var i=this._props,s=i.wasYoyo!==r,n=e>this._prevTime;if(this.progress=t,n&&!r||!n&&r)this.easedProgress=i.easing(t);else if(!n&&!r||n&&r){var o=null!=i.backwardEasing?i.backwardEasing:i.easing;this.easedProgress=o(t)}return(i.prevEasedProgress!==this.easedProgress||s)&&null!=i.onUpdate&&"function"==typeof i.onUpdate&&i.onUpdate.call(i.callbacksContext||this,this.easedProgress,this.progress,n,r),i.prevEasedProgress=this.easedProgress,i.wasYoyo=r,this},e.prototype._start=function(t,e){if(!this._isStarted){var r=this._props;null!=r.onStart&&"function"==typeof r.onStart&&r.onStart.call(r.callbacksContext||this,t>this._prevTime,e),this._isCompleted=!1,this._isStarted=!0,this._isFirstUpdate=!1}},e.prototype._playbackStart=function(){var t=this._props;null!=t.onPlaybackStart&&"function"==typeof t.onPlaybackStart&&t.onPlaybackStart.call(t.callbacksContext||this)},e.prototype._playbackPause=function(){var t=this._props;null!=t.onPlaybackPause&&"function"==typeof t.onPlaybackPause&&t.onPlaybackPause.call(t.callbacksContext||this)},e.prototype._playbackStop=function(){var t=this._props;null!=t.onPlaybackStop&&"function"==typeof t.onPlaybackStop&&t.onPlaybackStop.call(t.callbacksContext||this)},e.prototype._playbackComplete=function(){var t=this._props;null!=t.onPlaybackComplete&&"function"==typeof t.onPlaybackComplete&&t.onPlaybackComplete.call(t.callbacksContext||this)},e.prototype._complete=function(t,e){if(!this._isCompleted){var r=this._props;null!=r.onComplete&&"function"==typeof r.onComplete&&r.onComplete.call(r.callbacksContext||this,t>this._prevTime,e),this._isCompleted=!0,this._isStarted=!1,this._isFirstUpdate=!1,this._prevYoyo=void 0}},e.prototype._firstUpdate=function(t,e){if(!this._isFirstUpdate){var r=this._props;null!=r.onFirstUpdate&&"function"==typeof r.onFirstUpdate&&(r.onFirstUpdate.tween=this,r.onFirstUpdate.call(r.callbacksContext||this,t>this._prevTime,e)),this._isFirstUpdate=!0}},e.prototype._repeatComplete=function(t,e){if(!this._isRepeatCompleted){var r=this._props;null!=r.onRepeatComplete&&"function"==typeof r.onRepeatComplete&&r.onRepeatComplete.call(r.callbacksContext||this,t>this._prevTime,e),this._isRepeatCompleted=!0}},e.prototype._repeatStart=function(t,e){if(!this._isRepeatStart){var r=this._props;null!=r.onRepeatStart&&"function"==typeof r.onRepeatStart&&r.onRepeatStart.call(r.callbacksContext||this,t>this._prevTime,e),this._isRepeatStart=!0}},e.prototype._progress=function(t,e){var r=this._props;null!=r.onProgress&&"function"==typeof r.onProgress&&r.onProgress.call(r.callbacksContext||this,t,e>this._prevTime)},e.prototype._refresh=function(t){var e=this._props;if(null!=e.onRefresh){var r=e.callbacksContext||this,i=t?0:1;e.onRefresh.call(r,t,e.easing(i),i)}},e.prototype._onTweenerRemove=function(){},e.prototype._onTweenerFinish=function(){this._setPlaybackState("stop"),this._playbackComplete()},e.prototype._setProp=function(e,r){t.prototype._setProp.call(this,e,r),this._calcDimentions()},e.prototype._assignProp=function(e,r){null==r&&(r=this._defaults[e]),"easing"===e&&(r=d["default"].parseEasing(r),r._parent=this);var i=this._callbackOverrides[e],s=!r||!r.isMojsCallbackOverride;i&&s&&(r=this._overrideCallback(r,i)),t.prototype._assignProp.call(this,e,r)},e.prototype._overrideCallback=function(t,e){var r=t&&"function"==typeof t,i=function(){r&&t.apply(this,arguments),e.apply(this,arguments)};return i.isMojsCallbackOverride=!0,i},e}(y["default"]);e["default"]=m},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(29),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(19),f=i(c),d=r(10),_=(i(d),r(8)),y=i(_),m=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return a["default"](this,e),u["default"](this,t.call(this,r))}return h["default"](e,t),e.prototype.add=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return this._pushTimelineArray(e),this._calcDimentions(),this},e.prototype.append=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];for(var i=e,s=Array.isArray(i),o=0,i=s?i:n["default"](i);;){var a;if(s){if(o>=i.length)break;a=i[o++]}else{if(o=i.next(),o.done)break;a=o.value}var p=a;f["default"].isArray(p)?this._appendTimelineArray(p):this._appendTimeline(p,this._timelines.length),this._calcDimentions()}return this},e.prototype.stop=function(e){return t.prototype.stop.call(this,e),this._stopChildren(e),this},e.prototype.reset=function(){return t.prototype.reset.call(this),this._resetChildren(),this},e.prototype._resetChildren=function(){for(var t=0;t<this._timelines.length;t++)this._timelines[t].reset()},e.prototype._stopChildren=function(t){for(var e=this._timelines.length-1;e>=0;e--)this._timelines[e].stop(t)},e.prototype._appendTimelineArray=function(t){for(var e=t.length,r=this._props.repeatTime-this._props.delay,i=this._timelines.length;e--;)this._appendTimeline(t[e],i,r)},e.prototype._appendTimeline=function(t,r,i){t.timeline instanceof e&&(t=t.timeline),t.tween instanceof y["default"]&&(t=t.tween);var s=null!=i?i:this._props.duration;s+=t._props.shiftTime||0,t.index=r,this._pushTimeline(t,s)},e.prototype._pushTimelineArray=function(t){for(var e=0;e<t.length;e++){var r=t[e];f["default"].isArray(r)?this._pushTimelineArray(r):this._pushTimeline(r)}},e.prototype._pushTimeline=function(t,r){t.timeline instanceof e&&(t=t.timeline),t.tween instanceof y["default"]&&(t=t.tween),null!=r&&t._setProp({shiftTime:r}),this._timelines.push(t),this._recalcDuration(t)},e.prototype._setProgress=function(t,e,r){this._updateChildren(t,e,r),y["default"].prototype._setProgress.call(this,t,e)},e.prototype._updateChildren=function(t,e,r){var i=e>this._prevTime?-1:1;this._props.isYoyo&&r&&(i*=-1);for(var s=this._props.startTime+t*this._props.duration,n=s+i,o=this._timelines.length,a=0;o>a;a++){var p=s>n?a:o-1-a;this._timelines[p]._update(s,n,this._prevYoyo,this._onEdge)}this._prevYoyo=r},e.prototype._recalcDuration=function(t){var e=t._props,r=e.repeatTime/e.speed+(e.shiftTime||0)+t._negativeShift;this._props.duration=Math.max(r,this._props.duration)},e.prototype._recalcTotalDuration=function(){var t=this._timelines.length;for(this._props.duration=0;t--;){var e=this._timelines[t];e._recalcTotalDuration&&e._recalcTotalDuration(),this._recalcDuration(e)}this._calcDimentions()},e.prototype._setStartTime=function(e){var r=arguments.length<=1||void 0===arguments[1]?!0:arguments[1];t.prototype._setStartTime.call(this,e),this._startTimelines(this._props.startTime,r)},e.prototype._startTimelines=function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],r=(this._props,"stop"===this._state);null==t&&(t=this._props.startTime);for(var i=0;i<this._timelines.length;i++){var s=this._timelines[i];s._setStartTime(t,e),e||null==s._prevTime||r||(s._prevTime=s._normPrevTimeForward())}},e.prototype._refresh=function(e){for(var r=this._timelines.length,i=0;r>i;i++)this._timelines[i]._refresh(e);t.prototype._refresh.call(this,e)},e.prototype._declareDefaults=function(){null!=this._o.duration&&(f["default"].error('Duration can not be declared on Timeline, but "'+this._o.duration+'" is. You probably want to use Tween instead.'),this._o.duration=0),t.prototype._declareDefaults.call(this),this._defaults.duration=0,this._defaults.easing="Linear.None",this._defaults.backwardEasing="Linear.None",this._defaults.nameBase="Timeline"},e.prototype._vars=function(){this._timelines=[],t.prototype._vars.call(this)},e}(y["default"]);e["default"]=m},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s);r(30),r(31);var o=r(19),a=(i(o),function(){function t(){return n["default"](this,t),this._vars(),this._listenVisibilityChange(),this}return t.prototype._vars=function(){this.tweens=[],this._loop=this._loop.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this)},t.prototype._loop=function(){return this._isRunning?(this._update(window.performance.now()),this.tweens.length?(requestAnimationFrame(this._loop),this):this._isRunning=!1):!1},t.prototype._startLoop=function(){this._isRunning||(this._isRunning=!0,requestAnimationFrame(this._loop))},t.prototype._stopLoop=function(){this._isRunning=!1},t.prototype._update=function(t){for(var e=this.tweens.length;e--;){var r=this.tweens[e];r&&r._update(t)===!0&&(this.remove(r),r._onTweenerFinish(),r._prevTime=void 0)}},t.prototype.add=function(t){t._isRunning||(t._isRunning=!0,this.tweens.push(t),this._startLoop())},t.prototype.removeAll=function(){this.tweens.length=0},t.prototype.remove=function(t){var e="number"==typeof t?t:this.tweens.indexOf(t);-1!==e&&(t=this.tweens[e],t&&(t._isRunning=!1,this.tweens.splice(e,1),t._onTweenerRemove()))},t.prototype._listenVisibilityChange=function(){"undefined"!=typeof document.hidden?(this._visibilityHidden="hidden",this._visibilityChange="visibilitychange"):"undefined"!=typeof document.mozHidden?(this._visibilityHidden="mozHidden",this._visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(this._visibilityHidden="msHidden",this._visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(this._visibilityHidden="webkitHidden",this._visibilityChange="webkitvisibilitychange"),document.addEventListener(this._visibilityChange,this._onVisibilityChange,!1)},t.prototype._onVisibilityChange=function(){document[this._visibilityHidden]?this._savePlayingTweens():this._restorePlayingTweens()},t.prototype._savePlayingTweens=function(){this._savedTweens=this.tweens.slice(0);for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].pause()},t.prototype._restorePlayingTweens=function(){for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].resume()},t}()),p=new a;e["default"]=p},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(24),a=i(o),p=r(25),u=i(p),l=r(8),h=i(l),c=r(9),f=i(c),d=r(16),_=i(d),y=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n["default"](this,e);var i=a["default"](this,t.call(this,r));return i._transformTweenOptions(),!i._o.isTweenLess&&i._makeTween(),!i._o.isTimelineLess&&i._makeTimeline(),i}return u["default"](e,t),e.prototype.play=function(){return this.timeline.play.apply(this.timeline,arguments),this},e.prototype.playBackward=function(){return this.timeline.playBackward.apply(this.timeline,arguments),this},e.prototype.pause=function(){return this.timeline.pause.apply(this.timeline,arguments),this},e.prototype.stop=function(){return this.timeline.stop.apply(this.timeline,arguments),this},e.prototype.reset=function(){return this.timeline.reset.apply(this.timeline,arguments),this},e.prototype.replay=function(){return this.timeline.replay.apply(this.timeline,arguments),this},e.prototype.replayBackward=function(){return this.timeline.replayBackward.apply(this.timeline,arguments),this},e.prototype.resume=function(){arguments.length<=0||void 0===arguments[0]?0:arguments[0];return this.timeline.resume.apply(this.timeline,arguments),this},e.prototype.setProgress=function(){return this.timeline.setProgress.apply(this.timeline,arguments),this},e.prototype.setSpeed=function(t){return this.timeline.setSpeed.apply(this.timeline,arguments),this},e.prototype._transformTweenOptions=function(){},e.prototype._makeTween=function(){this._o.callbacksContext=this._o.callbacksContext||this,this.tween=new h["default"](this._o),this._o.isTimelineLess&&(this.timeline=this.tween)},e.prototype._makeTimeline=function(){this._o.timeline=this._o.timeline||{},this._o.timeline.callbacksContext=this._o.callbacksContext||this,this.timeline=new f["default"](this._o.timeline),this._isTimeline=!0,this.tween&&this.timeline.add(this.tween)},e}(_["default"]);e["default"]=y},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(28),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(11),f=i(c),d=r(19),_=i(d),y=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype.then=function(t){if(null==t||!n["default"](t).length)return 1;var e=this._history[this._history.length-1],r=(this._modules[this._modules.length-1],this._mergeThenOptions(e,t));this._resetMergedFlags(r);var i=new this.constructor(r);return i._masterModule=this,this._modules.push(i),this.timeline.append(i),this},e.prototype._resetMergedFlags=function(t){return t.isTimelineLess=!0,t.isShowStart=!1,t.isRefreshState=!1,t.callbacksContext=this._props.callbacksContext||this,t.prevChainModule=_["default"].getLastItem(this._modules),t.masterModule=this,t},e.prototype._vars=function(){t.prototype._vars.call(this),this._masterModule=this._o.masterModule,this._isChained=!!this._masterModule;var e=_["default"].cloneObj(this._props);for(var r in this._arrayPropertyMap)if(this._o[r]){var i=this._parsePreArrayProperty(r,this._o[r]);e[r]=i}this._history=[e],this._modules=[this],this._nonMergeProps={shape:1}},e.prototype._mergeThenOptions=function(t,e){var r={};return this._mergeStartLoop(r,t),this._mergeEndLoop(r,t,e),this._history.push(r),r},e.prototype._checkStartValue=function(t,e){return e},e.prototype._mergeStartLoop=function(t,e){for(var r in e){var i=e[r];null!=e[r]&&(_["default"].isTweenProp(r)&&"duration"!==r||(t[r]=this._isDelta(i)?_["default"].getDeltaEnd(i):i))}},e.prototype._mergeEndLoop=function(t,e,r){n["default"](r);for(var i in r)if("parent"!=i){var s=r[i],o=null!=e[i]?e[i]:this._defaults[i];if(o=this._checkStartValue(i,o),null!=s){var a="radiusX"===i||"radiusY"===i;a&&null==o&&(o=e.radius);var a="scaleX"===i||"scaleY"===i;a&&null==o&&(o=e.scale),t[i]=this._mergeThenProperty(i,o,s)}}else t[i]=r[i]},e.prototype._mergeThenProperty=function(t,e,r){var i,s,n="boolean"==typeof r;if(_["default"].isTweenProp(t)||this._nonMergeProps[t]||n)return r;if(_["default"].isObject(r)&&null!=r.to&&(i=r.curve,s=r.easing,r=r.to),this._isDelta(r))return this._parseDeltaValues(t,r);var o=this._parsePreArrayProperty(t,r);if(this._isDelta(e)){var a;return a={},a[_["default"].getDeltaEnd(e)]=o,a.easing=s,a.curve=i,a}var p;return p={},p[e]=o,p.easing=s,p.curve=i,p},e.prototype._getArrayLength=function(t){return _["default"].isArray(t)?t.length:-1},e.prototype._isDelta=function(t){var e=_["default"].isObject(t);return e=e&&!t.unit,!(!e||_["default"].isArray(t)||_["default"].isDOM(t))},e.prototype._isFirstInChain=function(){return!this._masterModule},e.prototype._isLastInChain=function(){var t=this._masterModule;return t?this===_["default"].getLastItem(t._modules):1===this._modules.length},e}(f["default"]);e["default"]=y},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(28),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(19),f=i(c),d=r(12),_=i(d),y=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype.tune=function(t){if(t&&n["default"](t).length){this._transformHistory(t),this._tuneNewOptions(t),this._history[0]=f["default"].cloneObj(this._props);for(var e in this._arrayPropertyMap)null!=t[e]&&(this._history[0][e]=this._preparsePropValue(e,t[e]));this._tuneSubModules(),this._resetTweens()}return this},e.prototype.generate=function(){return this.tune(this._o)},e.prototype._transformHistory=function(t){for(var e in t){var r=t[e];this._transformHistoryFor(e,this._preparsePropValue(e,r))}},e.prototype._transformHistoryFor=function(t,e){for(var r=0;r<this._history.length&&(!(e=this._transformHistoryRecord(r,t,e))||null!=e);r++);},e.prototype._transformHistoryRecord=function(t,e,r,i,s){if(null==r)return null;i=null==i?this._history[t]:i,s=null==s?this._history[t+1]:s;var n=i[e],o=null==s?null:s[e];if(0===t){if(i[e]=r,f["default"].isTweenProp(e)&&"duration"!==e)return null;var a=this._isRewriteNext(n,o),p=this._isDelta(r)?f["default"].getDeltaEnd(r):r;return a?p:null}if(this._isDelta(n)){var u;return i[e]=(u={},u[r]=f["default"].getDeltaEnd(n),u),null}return i[e]=r,this._isRewriteNext(n,o)?r:null},e.prototype._isRewriteNext=function(t,e){if(null==e&&null!=t)return!1;var r=t===e,i=this._isDelta(e),s=this._isDelta(t),n=!1,o=!1;return s&&i?f["default"].getDeltaEnd(t)==f["default"].getDeltaStart(e)&&(o=!0):i&&(n=f["default"].getDeltaStart(e)===""+t),r||n||o},e.prototype._tuneSubModules=function(){for(var t=1;t<this._modules.length;t++)this._modules[t]._tuneNewOptions(this._history[t])},e.prototype._resetTweens=function(){var t=0,e=0,r=this.timeline._timelines;if(null!=r){for(var t=0;t<r.length;t++){var i=r[t],s=r[t-1];e+=s?s._props.repeatTime:0,this._resetTween(i,this._history[t],e)}this.timeline._setProp(this._props.timeline),this.timeline._recalcTotalDuration()}},e.prototype._resetTween=function(t,e){var r=arguments.length<=2||void 0===arguments[2]?0:arguments[2];e.shiftTime=r,t._setProp(e)},e}(_["default"]);e["default"]=y},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(8),a=i(o),p=(r(19),function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n["default"](this,t),this._o=e,this._createTween(e.tweenOptions),!this._o.isChained&&this.refresh(!0)}return t.prototype.refresh=function(t){this._previousValues=[];for(var e=this._o.deltas,r=0;r<e.length;r++){var i=e[r].name;this._previousValues.push({name:i,value:this._o.props[i]})}return this.tween._refresh(t),this},t.prototype.restore=function(){for(var t=this._previousValues,e=0;e<t.length;e++){var r=t[e];this._o.props[r.name]=r.value}return this},t.prototype._createTween=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this;t.callbackOverrides={onUpdate:function(t,r){e._calcCurrentProps(t,r)}},this._o.isChained||(t.callbackOverrides.onRefresh=function(t,r,i){e._calcCurrentProps(r,i)}),t.callbacksContext=this._o.callbacksContext,this.tween=new a["default"](t)},t.prototype._calcCurrentProps=function(t,e){for(var r=this._o.deltas,i=0;i<r.length;i++){var s=r[i].type;this["_calcCurrent_"+s](r[i],t,e)}},t.prototype._calcCurrent_color=function(t,e,r){var i,s,n,o,a=t.start,p=t.delta;if(t.curve){var u=t.curve(r);i=parseInt(u*(a.r+r*p.r),10),s=parseInt(u*(a.g+r*p.g),10),n=parseInt(u*(a.b+r*p.b),10),o=parseFloat(u*(a.a+r*p.a))}else i=parseInt(a.r+e*p.r,10),s=parseInt(a.g+e*p.g,10),n=parseInt(a.b+e*p.b,10),o=parseFloat(a.a+e*p.a);this._o.props[t.name]="rgba("+i+","+s+","+n+","+o+")"},t.prototype._calcCurrent_number=function(t,e,r){this._o.props[t.name]=t.curve?t.curve(r)*(t.start+r*t.delta):t.start+e*t.delta},t.prototype._calcCurrent_unit=function(t,e,r){var i=t.curve?t.curve(r)*(t.start.value+r*t.delta):t.start.value+e*t.delta;this._o.props[t.name]=""+i+t.end.unit},t.prototype._calcCurrent_array=function(t,e,r){for(var i=t.name,s=this._o.props,n="",o=t.curve?t.curve(r):null,a=0;a<t.delta.length;a++){var p=t.delta[a],u=t.curve?o*(t.start[a].value+r*p.value):t.start[a].value+e*p.value;n+=""+u+p.unit+" "}s[i]=n},t}());e["default"]=p},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(27),n=i(s),o=r(23),a=i(o),p=r(28),u=i(p),l=r(9),h=i(l),c=r(8),f=i(c),d=r(14),_=i(d),y=r(22),m=r(19),g={};f["default"].prototype._declareDefaults.call(g);for(var v=u["default"](g._defaults),w=0;w<v.length;w++)g._defaults[v[w]]=1;g._defaults.timeline=1;var b=g._defaults,S=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];a["default"](this,t),this._o=e,this._shortColors={transparent:"rgba(0,0,0,0)",none:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},this._ignoreDeltasMap={prevChainModule:1,masterModule:1},this._parseDeltas(e.options),this._createDeltas(),this._createTimeline(this._mainTweenOptions)}return t.prototype.refresh=function(t){for(var e=0;e<this._deltas.length;e++)this._deltas[e].refresh(t);return this},t.prototype.restore=function(){for(var t=0;t<this._deltas.length;t++)this._deltas[t].restore();return this},t.prototype._createTimeline=function(){arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.timeline=new h["default"],this.timeline.add(this._deltas)},t.prototype._createDeltas=function(){this._deltas=[],this._deltas.push(this._createDelta(this._mainDeltas,this._mainTweenOptions));for(var t=0;t<this._childDeltas.length;t++){var e=this._childDeltas[t];this._deltas.push(this._createDelta([e.delta],e.tweenOptions))}},t.prototype._createDelta=function(t,e){var r=this._o;return new _["default"]({deltas:t,tweenOptions:e,props:r.props,isChained:r.isChained,callbacksContext:r.callbacksContext})},t.prototype._parseDeltas=function(t){var e=this._splitTweenOptions(t),r=e.delta;this._mainTweenOptions=e.tweenOptions,this._mainDeltas=[],this._childDeltas=[];for(var i=u["default"](r),s=0;s<i.length;s++){var n=i[s];if(this._isDelta(r[n])&&!this._ignoreDeltasMap[n]){var o=this._splitAndParseDelta(n,r[n]);o.tweenOptions?this._childDeltas.push(o):this._mainDeltas.push(o.delta)}}},t.prototype._splitAndParseDelta=function(t,e){var r=this._splitTweenOptions(e);return r.delta=this._parseDelta(t,r.delta),r},t.prototype._parseDelta=function(t,e,r){return this._o.customProps&&null!=this._o.customProps[t]?this._parseDeltaByCustom(t,e,r):this._parseDeltaByGuess(t,e,r)},t.prototype._parseDeltaByCustom=function(t,e,r){return this._parseNumberDelta(t,e,r)},t.prototype._parseDeltaByGuess=function(t,e,r){var i=this._preparseDelta(e),s=i.start,n=this._o;return!isNaN(parseFloat(s))||s.match(/rand\(/)||s.match(/stagger\(/)?n.arrayPropertyMap&&n.arrayPropertyMap[t]?this._parseArrayDelta(t,e):n.numberPropertyMap&&n.numberPropertyMap[t]?this._parseNumberDelta(t,e,r):this._parseUnitDelta(t,e,r):this._parseColorDelta(t,e)},t.prototype._splitTweenOptions=function(t){t=n["default"]({},t);for(var e=u["default"](t),r={},i=null,s=0;s<e.length;s++){var o=e[s];b[o]&&(null!=t[o]&&(r[o]=t[o],i=!0),delete t[o])}return{delta:t,tweenOptions:i?r:void 0}},t.prototype._isDelta=function(t){var e=m.isObject(t);return e=e&&!t.unit,!(!e||m.isArray(t)||m.isDOM(t))},t.prototype._parseColorDelta=function(t,e){if("strokeLinecap"===t)return m.warn("Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead",e),{};var r=this._preparseDelta(e),i=this._makeColorObj(r.start),s=this._makeColorObj(r.end),n={type:"color",name:t,start:i,end:s,curve:r.curve,delta:{r:s.r-i.r,g:s.g-i.g,b:s.b-i.b,a:s.a-i.a}};return n},t.prototype._parseArrayDelta=function(t,e){var r=this._preparseDelta(e),i=this._strToArr(r.start),s=this._strToArr(r.end);m.normDashArrays(i,s);for(var n=0;n<i.length;n++){var o=s[n];m.mergeUnits(i[n],o,t)}var a={type:"array",name:t,start:i,end:s,delta:m.calcArrDelta(i,s),curve:r.curve};return a},t.prototype._parseUnitDelta=function(t,e,r){var i=this._preparseDelta(e),s=m.parseUnit(m.parseStringOption(i.end,r)),n=m.parseUnit(m.parseStringOption(i.start,r));m.mergeUnits(n,s,t);var o={type:"unit",name:t,start:n,end:s,delta:s.value-n.value,curve:i.curve};return o},t.prototype._parseNumberDelta=function(t,e,r){var i=this._preparseDelta(e),s=parseFloat(m.parseStringOption(i.end,r)),n=parseFloat(m.parseStringOption(i.start,r)),o={type:"number",name:t,start:n,end:s,delta:s-n,curve:i.curve};return o},t.prototype._preparseDelta=function(t){t=n["default"]({},t);var e=t.curve;null!=e&&(e=y.parseEasing(e),e._parent=this),delete t.curve;var r=u["default"](t)[0],i=t[r];return{start:r,end:i,curve:e}},t.prototype._makeColorObj=function(t){var e={};if("#"===t[0]){var r=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t);if(r){var i=2===r[1].length?r[1]:r[1]+r[1],s=2===r[2].length?r[2]:r[2]+r[2],n=2===r[3].length?r[3]:r[3]+r[3];e={r:parseInt(i,16),g:parseInt(s,16),b:parseInt(n,16),a:1}}}if("#"!==t[0]){var o="r"===t[0]&&"g"===t[1]&&"b"===t[2],a=void 0;o&&(a=t),o||(this._shortColors[t]?a=this._shortColors[t]:(m.div.style.color=t,a=m.computedStyle(m.div).color));var p="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",u="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",r=new RegExp(p+u,"gi").exec(a),l=parseFloat(r[4]||1);r&&(e={r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:null==l||isNaN(l)?1:l})}return e},t.prototype._strToArr=function(t){var e=[];return"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){e.push(m.parseUnit(m.parseIfRand(t)))}),e):(e.push(m.parseUnit(t)),e)},t}();e["default"]=S},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(18),n=i(s),o=r(23),a=i(o),p=r(19),u=i(p),l=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];a["default"](this,t),this._o=e,this._index=this._o.index||0,this._arrayPropertyMap={strokeDashoffset:1,strokeDasharray:1,origin:1},this._skipPropsDelta={timeline:1,prevChainModule:1,callbacksContext:1},this._declareDefaults(),this._extendDefaults(),this._vars(),this._render()}return t.prototype._declareDefaults=function(){this._defaults={}},t.prototype._vars=function(){this._progress=0,this._strokeDasharrayBuffer=[]},t.prototype._render=function(){},t.prototype._setProp=function(t,e){if("object"===("undefined"==typeof t?"undefined":n["default"](t)))for(var r in t)this._assignProp(r,t[r]);else this._assignProp(t,e)},t.prototype._assignProp=function(t,e){this._props[t]=e},t.prototype._show=function(){var t=this._props;this.el&&(t.isSoftHide?this._showByTransform():this.el.style.display="block",this._isShown=!0)},t.prototype._hide=function(){this.el&&(this._props.isSoftHide?u["default"].setPrefixedStyle(this.el,"transform","scale(0)"):this.el.style.display="none",this._isShown=!1)},t.prototype._showByTransform=function(){},t.prototype._parseOptionString=function(t){return"string"==typeof t&&t.match(/stagger/)&&(t=u["default"].parseStagger(t,this._index)),"string"==typeof t&&t.match(/rand/)&&(t=u["default"].parseRand(t)),t},t.prototype._parsePositionOption=function(t,e){return u["default"].unitOptionMap[t]&&(e=u["default"].parseUnit(e).string),e},t.prototype._parseStrokeDashOption=function(t,e){var r=e;if(this._arrayPropertyMap[t]){var r=[];switch("undefined"==typeof e?"undefined":n["default"](e)){case"number":r.push(u["default"].parseUnit(e));break;case"string":for(var i=e.split(" "),s=0;s<i.length;s++)r.push(u["default"].parseUnit(i[s]))}}return r},t.prototype._isDelta=function(t){var e=u["default"].isObject(t);return e=e&&!t.unit,!(!e||u["default"].isArray(t)||u["default"].isDOM(t))},t.prototype._getDelta=function(t,e){var r;if("left"!==t&&"top"!==t||this._o.ctx||u["default"].warn("Consider to animate x/y properties instead of left/top,\n        as it would be much more performant",e),!this._skipPropsDelta||!this._skipPropsDelta[t]){r=u["default"].parseDelta(t,e,this._index),null!=r.type&&(this._deltas[t]=r);var i="object"===n["default"](r.end)?0===r.end.value?0:r.end.string:r.end;this._props[t]=i}},t.prototype._extendDefaults=function(){this._props={},this._deltas={};for(var t in this._defaults){var e=null!=this._o[t]?this._o[t]:this._defaults[t];this._parseOption(t,e)}},t.prototype._tuneNewOptions=function(t){this._hide();for(var e in t)t&&delete this._deltas[e],this._o[e]=t[e],this._parseOption(e,t[e])},t.prototype._parseOption=function(t,e){if(this._isDelta(e)&&!this._skipPropsDelta[t]){this._getDelta(t,e);var r=u["default"].getDeltaEnd(e);return this._assignProp(t,this._parseProperty(t,r))}this._assignProp(t,this._parseProperty(t,e))},t.prototype._parsePreArrayProperty=function(t,e){return e=this._parseOptionString(e),this._parsePositionOption(t,e)},t.prototype._parseProperty=function(t,e){return"parent"===t?u["default"].parseEl(e):(e=this._parsePreArrayProperty(t,e),this._parseStrokeDashOption(t,e))},t.prototype._parseDeltaValues=function(t,e){var r={};for(var i in e){var s=e[i],n=this._parsePreArrayProperty(t,s);r[this._parsePreArrayProperty(t,i)]=n;

}return r},t.prototype._preparsePropValue=function(t,e){return this._isDelta(e)?this._parseDeltaValues(t,e):this._parsePreArrayProperty(t,e)},t.prototype._calcCurrentProps=function(t,e){for(var r in this._deltas){var i=this._deltas[r],s=!!i.curve,n=null==i.easing||s?t:i.easing(e);if("array"===i.type){var o;u["default"].isArray(this._props[r])?(o=this._props[r],o.length=0):o=[];for(var a=s?i.curve(e):null,p=0;p<i.delta.length;p++){var l=i.delta[p],h=s?a*(i.start[p].value+e*l.value):i.start[p].value+n*l.value;o.push({string:""+h+l.unit,value:h,unit:l.unit})}this._props[r]=o}else if("number"===i.type)this._props[r]=s?i.curve(e)*(i.start+e*i.delta):i.start+n*i.delta;else if("unit"===i.type){var c=s?i.curve(e)*(i.start.value+e*i.delta):i.start.value+n*i.delta;this._props[r]=""+c+i.end.unit}else if("color"===i.type){var f,d,_,y;if(s){var m=i.curve(e);f=parseInt(m*(i.start.r+e*i.delta.r),10),d=parseInt(m*(i.start.g+e*i.delta.g),10),_=parseInt(m*(i.start.b+e*i.delta.b),10),y=parseFloat(m*(i.start.a+e*i.delta.a))}else f=parseInt(i.start.r+n*i.delta.r,10),d=parseInt(i.start.g+n*i.delta.g,10),_=parseInt(i.start.b+n*i.delta.b,10),y=parseFloat(i.start.a+n*i.delta.a);this._props[r]="rgba("+f+","+d+","+_+","+y+")"}}},t.prototype._setProgress=function(t,e){this._progress=t,this._calcCurrentProps(t,e)},t}();e["default"]=l},function(t,e,r){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var s="function"==typeof _Symbol&&"symbol"==typeof _Symbol$iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof _Symbol&&t.constructor===_Symbol?"symbol":typeof t};e.__esModule=!0;var n=r(32),o=i(n),a=r(33),p=i(a);e["default"]="function"==typeof p["default"]&&"symbol"===s(o["default"])?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof p["default"]&&t.constructor===p["default"]?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e,r){var i,s;i=function(){function t(){this.vars()}return t.prototype.NS="http://www.w3.org/2000/svg",t.prototype.logBadgeCss="background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;",t.prototype.shortColors={transparent:"rgba(0,0,0,0)",none:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},t.prototype.chainOptionMap={},t.prototype.callbacksMap={onRefresh:1,onStart:1,onComplete:1,onFirstUpdate:1,onUpdate:1,onProgress:1,onRepeatStart:1,onRepeatComplete:1,onPlaybackStart:1,onPlaybackPause:1,onPlaybackStop:1,onPlaybackComplete:1},t.prototype.tweenOptionMap={duration:1,delay:1,speed:1,repeat:1,easing:1,backwardEasing:1,isYoyo:1,shiftTime:1,isReversed:1,callbacksContext:1},t.prototype.unitOptionMap={left:1,top:1,x:1,y:1,rx:1,ry:1},t.prototype.RAD_TO_DEG=180/Math.PI,t.prototype.vars=function(){var t;return this.prefix=this.getPrefix(),this.getRemBase(),this.isFF="moz"===this.prefix.lowercase,this.isIE="ms"===this.prefix.lowercase,t=navigator.userAgent,this.isOldOpera=t.match(/presto/gim),this.isSafari=t.indexOf("Safari")>-1,this.isChrome=t.indexOf("Chrome")>-1,this.isOpera=t.toLowerCase().indexOf("op")>-1,this.isChrome&&this.isSafari&&(this.isSafari=!1),t.match(/PhantomJS/gim)&&(this.isSafari=!1),this.isChrome&&this.isOpera&&(this.isChrome=!1),this.is3d=this.checkIf3d(),this.uniqIDs=-1,this.div=document.createElement("div"),document.body.appendChild(this.div),this.defaultStyles=this.computedStyle(this.div)},t.prototype.cloneObj=function(t,e){var r,i,s,n;for(s=Object.keys(t),n={},r=s.length;r--;)i=s[r],null!=e?e[i]||(n[i]=t[i]):n[i]=t[i];return n},t.prototype.extend=function(t,e){var r,i;for(r in e)i=e[r],null==t[r]&&(t[r]=e[r]);return t},t.prototype.getRemBase=function(){var t,e;return t=document.querySelector("html"),e=getComputedStyle(t),this.remBase=parseFloat(e.fontSize)},t.prototype.clamp=function(t,e,r){return e>t?e:t>r?r:t},t.prototype.setPrefixedStyle=function(t,e,r){return"transform"===e&&(t.style[""+this.prefix.css+e]=r),t.style[e]=r},t.prototype.style=function(t,e,r){var i,s,n,o;if("object"==typeof e){for(s=Object.keys(e),n=s.length,o=[];n--;)i=s[n],r=e[i],o.push(this.setPrefixedStyle(t,i,r));return o}return this.setPrefixedStyle(t,e,r)},t.prototype.prepareForLog=function(t){return t=Array.prototype.slice.apply(t),t.unshift("::"),t.unshift(this.logBadgeCss),t.unshift("%cmo·js%c"),t},t.prototype.log=function(){return mojs.isDebug!==!1?console.log.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.warn=function(){return mojs.isDebug!==!1?console.warn.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.error=function(){return mojs.isDebug!==!1?console.error.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.parseUnit=function(t){var e,r,i,s,n,o;return"number"==typeof t?n={unit:"px",isStrict:!1,value:t,string:0===t?""+t:t+"px"}:"string"==typeof t?(s=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim,o=null!=(i=t.match(s))?i[0]:void 0,r=!0,o||(o="px",r=!1),e=parseFloat(t),n={unit:o,isStrict:r,value:e,string:0===e?""+e:""+e+o}):t},t.prototype.bind=function(t,e){var r,i;return i=function(){var i,s;return i=Array.prototype.slice.call(arguments),s=r.concat(i),t.apply(e,s)},r=Array.prototype.slice.call(arguments,2),i},t.prototype.getRadialPoint=function(t){var e,r,i,s;return null==t&&(t={}),r=.017453292519943295*(t.angle-90),i=null!=t.radiusX?t.radiusX:t.radius,s=null!=t.radiusY?t.radiusY:t.radius,e={x:t.center.x+Math.cos(r)*i,y:t.center.y+Math.sin(r)*s}},t.prototype.getPrefix=function(){var t,e,r,i;return r=window.getComputedStyle(document.documentElement,""),i=Array.prototype.slice.call(r).join("").match(/-(moz|webkit|ms)-/),e=(i||""===r.OLink&&["","o"])[1],t="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],{dom:t,lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}},t.prototype.strToArr=function(t){var e;return e=[],"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){return function(r){return e.push(t.parseUnit(t.parseIfRand(r)))}}(this)),e):(e.push(this.parseUnit(t)),e)},t.prototype.calcArrDelta=function(t,e){var r,i,s,n,o;for(r=[],i=s=0,n=t.length;n>s;i=++s)o=t[i],r[i]=this.parseUnit(""+(e[i].value-t[i].value)+e[i].unit);return r},t.prototype.isArray=function(t){return t instanceof Array},t.prototype.normDashArrays=function(t,e){var r,i,s,n,o,a,p,u,l,h;if(r=t.length,i=e.length,r>i)for(p=r-i,h=e.length,n=o=0,u=p;u>=0?u>o:o>u;n=u>=0?++o:--o)s=n+h,e.push(this.parseUnit("0"+t[s].unit));else if(i>r)for(p=i-r,h=t.length,n=a=0,l=p;l>=0?l>a:a>l;n=l>=0?++a:--a)s=n+h,t.push(this.parseUnit("0"+e[s].unit));return[t,e]},t.prototype.makeColorObj=function(t){var e,r,i,s,n,o,a,p,u,l;return"#"===t[0]&&(u=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t),i={},u&&(o=2===u[1].length?u[1]:u[1]+u[1],s=2===u[2].length?u[2]:u[2]+u[2],r=2===u[3].length?u[3]:u[3]+u[3],i={r:parseInt(o,16),g:parseInt(s,16),b:parseInt(r,16),a:1})),"#"!==t[0]&&(n="r"===t[0]&&"g"===t[1]&&"b"===t[2],n&&(l=t),n||(l=this.shortColors[t]?this.shortColors[t]:(this.div.style.color=t,this.computedStyle(this.div).color)),a="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",p="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",u=new RegExp(a+p,"gi").exec(l),i={},e=parseFloat(u[4]||1),u&&(i={r:parseInt(u[1],10),g:parseInt(u[2],10),b:parseInt(u[3],10),a:null==e||isNaN(e)?1:e})),i},t.prototype.computedStyle=function(t){return getComputedStyle(t)},t.prototype.capitalize=function(t){if("string"!=typeof t)throw Error("String expected - nothing to capitalize");return t.charAt(0).toUpperCase()+t.substring(1)},t.prototype.parseRand=function(t){var e,r,i;return r=t.split(/rand\(|\,|\)/),i=this.parseUnit(r[2]),e=this.rand(parseFloat(r[1]),parseFloat(r[2])),i.unit&&r[2].match(i.unit)?e+i.unit:e},t.prototype.parseStagger=function(t,e){var r,i,s,n,o,a;return a=t.split(/stagger\(|\)$/)[1].toLowerCase(),s=a.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim),a=s.length>3?(r=this.parseUnit(this.parseIfRand(s[1])),s[3]):(r=this.parseUnit(0),s[1]),a=this.parseIfRand(a),o=this.parseUnit(a),i=e*o.value+r.value,n=r.isStrict?r.unit:o.isStrict?o.unit:"",n?""+i+n:i},t.prototype.parseIfStagger=function(t,e){return"string"==typeof t&&t.match(/stagger/g)?this.parseStagger(t,e):t},t.prototype.parseIfRand=function(t){return"string"==typeof t&&t.match(/rand\(/)?this.parseRand(t):t},t.prototype.parseDelta=function(t,e,r){var i,s,n,o,a,p,u,l,h,c,f,d;if(e=this.cloneObj(e),n=e.easing,null!=n&&(n=mojs.easing.parseEasing(n)),delete e.easing,i=e.curve,null!=i&&(i=mojs.easing.parseEasing(i)),delete e.curve,c=Object.keys(e)[0],o=e[c],s={start:c},!isNaN(parseFloat(c))||c.match(/rand\(/)||c.match(/stagger\(/))if("strokeDasharray"===t||"strokeDashoffset"===t||"origin"===t){for(f=this.strToArr(c),a=this.strToArr(o),this.normDashArrays(f,a),u=l=0,h=f.length;h>l;u=++l)c=f[u],o=a[u],this.mergeUnits(c,o,t);s={type:"array",name:t,start:f,end:a,delta:this.calcArrDelta(f,a),easing:n,curve:i}}else this.callbacksMap[t]||this.tweenOptionMap[t]||(this.unitOptionMap[t]?(o=this.parseUnit(this.parseStringOption(o,r)),c=this.parseUnit(this.parseStringOption(c,r)),this.mergeUnits(c,o,t),s={type:"unit",name:t,start:c,end:o,delta:o.value-c.value,easing:n,curve:i}):(o=parseFloat(this.parseStringOption(o,r)),c=parseFloat(this.parseStringOption(c,r)),s={type:"number",name:t,start:c,end:o,delta:o-c,easing:n,curve:i}));else{if("strokeLinecap"===t)return this.warn("Sorry, stroke-linecap property is not animatable yet, using the start("+c+") value instead",e),s;d=this.makeColorObj(c),p=this.makeColorObj(o),s={type:"color",name:t,start:d,end:p,easing:n,curve:i,delta:{r:p.r-d.r,g:p.g-d.g,b:p.b-d.b,a:p.a-d.a}}}return s},t.prototype.mergeUnits=function(t,e,r){return!e.isStrict&&t.isStrict?(e.unit=t.unit,e.string=""+e.value+e.unit):e.isStrict&&!t.isStrict?(t.unit=e.unit,t.string=""+t.value+t.unit):e.isStrict&&t.isStrict&&e.unit!==t.unit?(t.unit=e.unit,t.string=""+t.value+t.unit,this.warn('Two different units were specified on "'+r+'" delta property, mo · js will fallback to end "'+e.unit+'" unit ')):void 0},t.prototype.rand=function(t,e){return Math.random()*(e-t)+t},t.prototype.isDOM=function(t){var e;return null==t?!1:(e="number"==typeof t.nodeType&&"string"==typeof t.nodeName,"object"==typeof t&&e)},t.prototype.getChildElements=function(t){var e,r,i;for(e=t.childNodes,r=[],i=e.length;i--;)1===e[i].nodeType&&r.unshift(e[i]);return r},t.prototype.delta=function(t,e){var r,i,s,n,o;return n=typeof t,o=typeof e,r="string"===n||"number"===n&&!isNaN(t),i="string"===o||"number"===o&&!isNaN(e),r&&i?(s={},s[t]=e,s):void this.error("delta method expects Strings or Numbers at input but got - "+t+", "+e)},t.prototype.getUniqID=function(){return++this.uniqIDs},t.prototype.parsePath=function(t){var e;return"string"==typeof t?"m"===t.charAt(0).toLowerCase()?(e=document.createElementNS(this.NS,"path"),e.setAttributeNS(null,"d",t),e):document.querySelector(t):t.style?t:void 0},t.prototype.closeEnough=function(t,e,r){return Math.abs(t-e)<r},t.prototype.checkIf3d=function(){var t,e,r,i;return t=document.createElement("div"),this.style(t,"transform","translateZ(0)"),r=t.style,e=this.prefix.css+"transform",i=null!=r[e]?r[e]:r.transform,""!==i},t.prototype.isObject=function(t){return null!==t&&"object"==typeof t},t.prototype.getDeltaEnd=function(t){var e;return e=Object.keys(t)[0],t[e]},t.prototype.getDeltaStart=function(t){var e;return e=Object.keys(t)[0]},t.prototype.isTweenProp=function(t){return this.tweenOptionMap[t]||this.callbacksMap[t]},t.prototype.parseStringOption=function(t,e){return null==e&&(e=0),"string"==typeof t&&(t=this.parseIfStagger(t,e),t=this.parseIfRand(t)),t},t.prototype.getLastItem=function(t){return t[t.length-1]},t.prototype.parseEl=function(t){return s.isDOM(t)?t:("string"==typeof t&&(t=document.querySelector(t)),null===t&&s.error("Can't parse HTML element: ",t),t)},t.prototype.force3d=function(t){return this.setPrefixedStyle(t,"backface-visibility","hidden"),t},t.prototype.isDelta=function(t){var e;return e=this.isObject(t),e=e&&!t.unit,!(!e||this.isArray(t)||this.isDOM(t))},t}(),s=new i,t.exports=s},function(t,e,r){var i,s,n,o,a,p,u,l,h,c,f,d;i=r(26)["default"]||r(26),p=r(36)["default"]||r(36),n=r(37),l=r(38),f=r(39),c=r(35),h=r(40),o=r(41),a=r(42)["default"]||r(42),u=r(43),d=r(19),s=function(){function t(){this.addShape=d.bind(this.addShape,this)}return t.prototype.bit=i,t.prototype.custom=p,t.prototype.circle=n,t.prototype.line=l,t.prototype.zigzag=f,t.prototype.rect=c,t.prototype.polygon=h,t.prototype.cross=o,t.prototype.equal=u,t.prototype.curve=a,t.prototype.getShape=function(t){return this[t]||d.error('no "'+t+'" shape available yet, please choose from this list:',["circle","line","zigzag","rect","polygon","cross","equal","curve"])},t.prototype.addShape=function(t,e){return this[t]=e},t}(),t.exports=new s},function(t,e,r){var i,s,n,o,a,p=function(t,e){return function(){return t.apply(e,arguments)}};o=r(19),a=r(34),n=r(8)["default"],s=r(9)["default"],i=function(){function t(t){this.o=null!=t?t:{},this.calcHeight=p(this.calcHeight,this),this.vars()||this.createTween()}return t.prototype.defaults={path:null,curvature:{x:"75%",y:"50%"},isCompositeLayer:!0,delay:0,duration:1e3,easing:null,repeat:0,yoyo:!1,onStart:null,onComplete:null,onUpdate:null,offsetX:0,offsetY:0,angleOffset:null,pathStart:0,pathEnd:1,motionBlur:0,transformOrigin:null,isAngle:!1,isReverse:!1,isRunLess:!1,isPresetPosition:!0},t.prototype.vars=function(){return this.getScaler=o.bind(this.getScaler,this),this.resize=a,this.props=o.cloneObj(this.defaults),this.extendOptions(this.o),this.isMotionBlurReset=o.isSafari||o.isIE,this.isMotionBlurReset&&(this.props.motionBlur=0),this.history=[o.cloneObj(this.props)],this.postVars()},t.prototype.curveToPath=function(t){var e,r,i,s,n,a,p,u,l,h,c,f,d;return h=document.createElementNS(o.NS,"path"),d=t.start,l={x:d.x+t.shift.x,y:d.x+t.shift.y},r=t.curvature,p=t.shift.x,u=t.shift.y,f=Math.sqrt(p*p+u*u),c=f/100,e=Math.atan(u/p)*(180/Math.PI)+90,t.shift.x<0&&(e+=180),i=o.parseUnit(r.x),i="%"===i.unit?i.value*c:i.value,a=o.getRadialPoint({center:{x:d.x,y:d.y},radius:i,angle:e}),s=o.parseUnit(r.y),s="%"===s.unit?s.value*c:s.value,n=o.getRadialPoint({center:{x:a.x,y:a.y},radius:s,angle:e+90}),h.setAttribute("d","M"+d.x+","+d.y+" Q"+n.x+","+n.y+" "+l.x+","+l.y),h},t.prototype.postVars=function(){return this.props.pathStart=o.clamp(this.props.pathStart,0,1),this.props.pathEnd=o.clamp(this.props.pathEnd,this.props.pathStart,1),this.angle=0,this.speedX=0,this.speedY=0,this.blurX=0,this.blurY=0,this.prevCoords={},this.blurAmount=20,this.props.motionBlur=o.clamp(this.props.motionBlur,0,1),this.onUpdate=this.props.onUpdate,this.o.el?(this.el=this.parseEl(this.props.el),this.props.motionBlur>0&&this.createFilter(),this.path=this.getPath(),this.path.getAttribute("d")?(this.len=this.path.getTotalLength(),this.slicedLen=this.len*(this.props.pathEnd-this.props.pathStart),this.startLen=this.props.pathStart*this.len,this.fill=this.props.fill,null!=this.fill&&(this.container=this.parseEl(this.props.fill.container),this.fillRule=this.props.fill.fillRule||"all",this.getScaler(),null!=this.container)?(this.removeEvent(this.container,"onresize",this.getScaler),this.addEvent(this.container,"onresize",this.getScaler)):void 0):(o.error("Path has no coordinates to work with, aborting"),!0)):(o.error('Missed "el" option. It could be a selector, DOMNode or another module.'),!0)},t.prototype.addEvent=function(t,e,r){return t.addEventListener(e,r,!1)},t.prototype.removeEvent=function(t,e,r){return t.removeEventListener(e,r,!1)},t.prototype.createFilter=function(){var t,e;return t=document.createElement("div"),this.filterID="filter-"+o.getUniqID(),t.innerHTML='<svg id="svg-'+this.filterID+'"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="'+this.filterID+'" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>',e=t.querySelector("#svg-"+this.filterID),this.filter=e.querySelector("#blur"),this.filterOffset=e.querySelector("#blur-offset"),document.body.insertBefore(e,document.body.firstChild),this.el.style.filter="url(#"+this.filterID+")",this.el.style[o.prefix.css+"filter"]="url(#"+this.filterID+")"},t.prototype.parseEl=function(t){return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:null!=t._setProp?(this.isModule=!0,t):void 0},t.prototype.getPath=function(){var t;return t=o.parsePath(this.props.path),t?t:this.props.path.x||this.props.path.y?this.curveToPath({start:{x:0,y:0},shift:{x:this.props.path.x||0,y:this.props.path.y||0},curvature:{x:this.props.curvature.x||this.defaults.curvature.x,y:this.props.curvature.y||this.defaults.curvature.y}}):void 0},t.prototype.getScaler=function(){var t,e,r;switch(this.cSize={width:this.container.offsetWidth||0,height:this.container.offsetHeight||0},r=this.path.getPointAtLength(0),t=this.path.getPointAtLength(this.len),e={},this.scaler={},e.width=t.x>=r.x?t.x-r.x:r.x-t.x,e.height=t.y>=r.y?t.y-r.y:r.y-t.y,this.fillRule){case"all":return this.calcWidth(e),this.calcHeight(e);case"width":return this.calcWidth(e),this.scaler.y=this.scaler.x;case"height":return this.calcHeight(e),this.scaler.x=this.scaler.y}},t.prototype.calcWidth=function(t){return this.scaler.x=this.cSize.width/t.width,!isFinite(this.scaler.x)&&(this.scaler.x=1)},t.prototype.calcHeight=function(t){return this.scaler.y=this.cSize.height/t.height,!isFinite(this.scaler.y)&&(this.scaler.y=1)},t.prototype.run=function(t){var e,r,i;if(t){e=this.history[0];for(r in t)i=t[r],o.callbacksMap[r]||o.tweenOptionMap[r]?(o.warn('the property "'+r+'" property can not be overridden on run yet'),delete t[r]):this.history[0][r]=i;this.tuneOptions(t)}return this.startTween()},t.prototype.createTween=function(){return this.tween=new n({duration:this.props.duration,delay:this.props.delay,yoyo:this.props.yoyo,repeat:this.props.repeat,easing:this.props.easing,onStart:function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onComplete:function(t){return function(){var e;return t.props.motionBlur&&t.setBlur({blur:{x:0,y:0},offset:{x:0,y:0}}),null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onFirstUpdate:function(t){return function(e,r){return e?void 0:t.history.length>1&&t.tuneOptions(t.history[0])}}(this)}),this.timeline=new s,this.timeline.add(this.tween),!this.props.isRunLess&&this.startTween(),this.props.isPresetPosition&&this.setProgress(0,!0)},t.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.timeline)?e.play():void 0}}(this),1)},t.prototype.setProgress=function(t,e){var r,i,s,n;return r=this.startLen+(this.props.isReverse?(1-t)*this.slicedLen:t*this.slicedLen),i=this.path.getPointAtLength(r),s=i.x+this.props.offsetX,n=i.y+this.props.offsetY,this._getCurrentAngle(i,r,t),this._setTransformOrigin(t),this._setTransform(s,n,t,e),this.props.motionBlur&&this.makeMotionBlur(s,n)},t.prototype.setElPosition=function(t,e,r){var i,s,n,a;return n=0!==this.angle?"rotate("+this.angle+"deg)":"",s=this.props.isCompositeLayer&&o.is3d,i=s?"translateZ(0)":"",a="translate("+t+"px,"+e+"px) "+n+" "+i,o.setPrefixedStyle(this.el,"transform",a)},t.prototype.setModulePosition=function(t,e){return this.el._setProp({shiftX:t+"px",shiftY:e+"px",angle:this.angle}),this.el._draw()},t.prototype._getCurrentAngle=function(t,e,r){var i,s,n,a,p;return s="function"==typeof this.props.transformOrigin,this.props.isAngle||null!=this.props.angleOffset||s?(n=this.path.getPointAtLength(e-1),a=t.y-n.y,p=t.x-n.x,i=Math.atan(a/p),!isFinite(i)&&(i=0),this.angle=i*o.RAD_TO_DEG,"function"!=typeof this.props.angleOffset?this.angle+=this.props.angleOffset||0:this.angle=this.props.angleOffset.call(this,this.angle,r)):this.angle=0},t.prototype._setTransform=function(t,e,r,i){var s;return this.scaler&&(t*=this.scaler.x,e*=this.scaler.y),s=null,i||(s="function"==typeof this.onUpdate?this.onUpdate(r,{x:t,y:e,angle:this.angle}):void 0),this.isModule?this.setModulePosition(t,e):"string"!=typeof s?this.setElPosition(t,e,r):o.setPrefixedStyle(this.el,"transform",s)},t.prototype._setTransformOrigin=function(t){var e,r;return this.props.transformOrigin?(e="function"==typeof this.props.transformOrigin,r=e?this.props.transformOrigin(this.angle,t):this.props.transformOrigin,o.setPrefixedStyle(this.el,"transform-origin",r)):void 0},t.prototype.makeMotionBlur=function(t,e){var r,i,s,n,a,p,u;return u=0,a=1,p=1,null==this.prevCoords.x||null==this.prevCoords.y?(this.speedX=0,this.speedY=0):(s=t-this.prevCoords.x,n=e-this.prevCoords.y,s>0&&(a=-1),0>a&&(p=-1),this.speedX=Math.abs(s),this.speedY=Math.abs(n),u=Math.atan(n/s)*(180/Math.PI)+90),r=u-this.angle,i=this.angToCoords(r),this.blurX=o.clamp(this.speedX/16*this.props.motionBlur,0,1),this.blurY=o.clamp(this.speedY/16*this.props.motionBlur,0,1),this.setBlur({blur:{x:3*this.blurX*this.blurAmount*Math.abs(i.x),y:3*this.blurY*this.blurAmount*Math.abs(i.y)},offset:{x:3*a*this.blurX*i.x*this.blurAmount,y:3*p*this.blurY*i.y*this.blurAmount}}),this.prevCoords.x=t,this.prevCoords.y=e},t.prototype.setBlur=function(t){return this.isMotionBlurReset?void 0:(this.filter.setAttribute("stdDeviation",t.blur.x+","+t.blur.y),this.filterOffset.setAttribute("dx",t.offset.x),this.filterOffset.setAttribute("dy",t.offset.y))},t.prototype.extendDefaults=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this[e]=i);return r},t.prototype.extendOptions=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this.props[e]=i);return r},t.prototype.then=function(t){var e,r,i,s,a;s=this.history[this.history.length-1],i={};for(r in s)a=s[r],!o.callbacksMap[r]&&!o.tweenOptionMap[r]||"duration"===r?null==t[r]&&(t[r]=a):null==t[r]&&(t[r]=void 0),o.tweenOptionMap[r]&&(i[r]="duration"!==r?t[r]:null!=t[r]?t[r]:s[r]);return this.history.push(t),e=this,i.onUpdate=function(t){return function(e){return t.setProgress(e)}}(this),i.onStart=function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),i.onComplete=function(t){return function(){var e;return null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),i.onFirstUpdate=function(){return e.tuneOptions(e.history[this.index])},i.isChained=!t.delay,this.timeline.append(new n(i)),this},t.prototype.tuneOptions=function(t){return this.extendOptions(t),this.postVars()},t.prototype.angToCoords=function(t){var e,r,i;return t%=360,e=(t-90)*Math.PI/180,r=Math.cos(e),i=Math.sin(e),r=0>r?Math.max(r,-.7):Math.min(r,.7),i=0>i?Math.max(i,-.7):Math.min(i,.7),{x:1.428571429*r,y:1.428571429*i}},t}(),t.exports=i},function(t,e,r){var i,s,n,o,a,p,u,l,h;a=r(44),n=r(45),l=r(46),u=r(19),o=r(47)["default"]||r(47),h=Math.sin,s=Math.PI,i=function(){function t(){}return t.prototype.bezier=a,t.prototype.PathEasing=n,t.prototype.path=new n("creator").create,t.prototype.approximate=o,t.prototype.inverse=function(t){return 1-t},t.prototype.linear={none:function(t){return t}},t.prototype.ease={"in":a.apply(t,[.42,0,1,1]),out:a.apply(t,[0,0,.58,1]),inout:a.apply(t,[.42,0,.58,1])},t.prototype.sin={"in":function(t){return 1-Math.cos(t*s/2)},out:function(t){return h(t*s/2)},inout:function(t){return.5*(1-Math.cos(s*t))}},t.prototype.quad={"in":function(t){return t*t},out:function(t){return t*(2-t)},inout:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},t.prototype.cubic={"in":function(t){return t*t*t},out:function(t){return--t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},t.prototype.quart={"in":function(t){return t*t*t*t},out:function(t){return 1- --t*t*t*t},inout:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},t.prototype.quint={"in":function(t){return t*t*t*t*t},out:function(t){return--t*t*t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},t.prototype.expo={"in":function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},t.prototype.circ={"in":function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.prototype.back={"in":function(t){var e;return e=1.70158,t*t*((e+1)*t-e)},out:function(t){var e;return e=1.70158,--t*t*((e+1)*t+e)+1},inout:function(t){var e;return e=2.5949095,(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)}},t.prototype.elastic={"in":function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,-(e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r)))},out:function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,e*Math.pow(2,-10*t)*Math.sin(2*(t-i)*Math.PI/r)+1)},inout:function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,(t*=2)<1?-.5*e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r):e*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r)*.5+1)}},t.prototype.bounce={"in":function(t){return 1-p.bounce.out(1-t)},out:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return.5>t?.5*p.bounce["in"](2*t):.5*p.bounce.out(2*t-1)+.5}},t.prototype.parseEasing=function(t){var e,r;return null==t&&(t="linear.none"),r=typeof t,"string"===r?"m"===t.charAt(0).toLowerCase()?this.path(t):(t=this._splitEasing(t),e=this[t[0]],e?e[t[1]]:(u.error('Easing with name "'+t[0]+'" was not found, fallback to "linear.none" instead'),this.linear.none)):u.isArray(t)?this.bezier.apply(this,t):t},t.prototype._splitEasing=function(t){var e,r,i;return"function"==typeof t?t:"string"==typeof t&&t.length?(i=t.split("."),e=i[0].toLowerCase()||"linear",r=i[1].toLowerCase()||"none",[e,r]):["linear","none"]},t}(),p=new i,p.mix=l(p),t.exports=p},function(t,e,r){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(18),n=i(s);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":n["default"](e))&&"function"!=typeof e?t:e}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(48),n=i(s),o=r(49),a=i(o),p=r(18),u=i(p);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":u["default"](e)));t.prototype=a["default"](e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(n["default"]?n["default"](t,e):t.__proto__=e)}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(18),n=i(s),o=r(23),a=i(o),p=r(24),u=i(p),l=r(25),h=i(l),c=r(16),f=i(c),d=r(19),_=i(d),y=function(t){function e(){return a["default"](this,e),u["default"](this,t.apply(this,arguments))}return h["default"](e,t),e.prototype._declareDefaults=function(){this._defaults={ns:"http://www.w3.org/2000/svg",tag:"ellipse",parent:document.body,ratio:1,radius:50,radiusX:null,radiusY:null,stroke:"hotpink","stroke-dasharray":"","stroke-dashoffset":"","stroke-linecap":"","stroke-width":2,"stroke-opacity":1,fill:"transparent","fill-opacity":1,width:0,height:0},this._drawMap=["stroke","stroke-width","stroke-opacity","stroke-dasharray","fill","stroke-dashoffset","stroke-linecap","fill-opacity","transform"]},e.prototype._vars=function(){this._state={},this._drawMapLength=this._drawMap.length},e.prototype._render=function(){this._isRendered||(this._isRendered=!0,this._createSVGCanvas(),this._setCanvasSize(),this._props.parent.appendChild(this._canvas))},e.prototype._createSVGCanvas=function(){var t=this._props;this._canvas=document.createElementNS(t.ns,"svg"),this.el=document.createElementNS(t.ns,t.tag),this._canvas.appendChild(this.el)},e.prototype._setCanvasSize=function(){var t=(this._props,this._canvas.style);t.display="block",t.width="100%",t.height="100%",t.left="0px",t.top="0px"},e.prototype._draw=function(){this._props.length=this._getLength();for(var t=(this._state,this._props,this._drawMapLength);t--;){var e=this._drawMap[t];switch(e){case"stroke-dasharray":case"stroke-dashoffset":this.castStrokeDash(e)}this._setAttrIfChanged(e,this._props[e])}this._state.radius=this._props.radius},e.prototype.castStrokeDash=function(t){var e=this._props;if(_["default"].isArray(e[t])){for(var r="",i=0;i<e[t].length;i++){var s=e[t][i],o="%"===s.unit?this.castPercent(s.value):s.value;r+=o+" "}return e[t]="0 "===r?r="":r,e[t]=r}"object"===n["default"](e[t])&&(r="%"===e[t].unit?this.castPercent(e[t].value):e[t].value,e[t]=0===r?r="":r)},e.prototype.castPercent=function(t){return t*(this._props.length/100)},e.prototype._setAttrIfChanged=function(t,e){this._state[t]!==e&&(this.el.setAttribute(t,e),this._state[t]=e)},e.prototype._getLength=function(){var t=this._props,e=0,r=!(!this.el||!this.el.getTotalLength);return e=r&&this.el.getAttribute("d")?this.el.getTotalLength():2*(null!=t.radiusX?t.radiusX:t.radius)},e.prototype._getPointsPerimiter=function(t){for(var e=0,r=1;r<t.length;r++)e+=this._pointsDelta(t[r-1],t[r]);return e+=this._pointsDelta(t[0],_["default"].getLastItem(t))},e.prototype._pointsDelta=function(t,e){var r=Math.abs(t.x-e.x),i=Math.abs(t.y-e.y);return Math.sqrt(r*r+i*i)},e.prototype._setSize=function(t,e){var r=this._props;r.width=t,r.height=e,this._draw()},e}(f["default"]);e["default"]=y},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(50),n=i(s);e["default"]=n["default"]||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}},function(t,e,r){t.exports={"default":r(52),__esModule:!0}},function(t,e,r){t.exports={"default":r(51),__esModule:!0}},function(t,e,r){!function(){"use strict";var t,e,r,i,s,n,o;for(s=["webkit","moz"],e=0,o=window;e<s.length&&!o.requestAnimationFrame;)n=s[e],o.requestAnimationFrame=o[n+"RequestAnimationFrame"],t=o[n+"CancelAnimationFrame"],o.cancelAnimationFrame=t||o[n+"CancelRequestAnimationFrame"],++e;r=!o.requestAnimationFrame||!o.cancelAnimationFrame,(/iP(ad|hone|od).*OS 6/.test(o.navigator.userAgent)||r)&&(i=0,o.requestAnimationFrame=function(t){var e,r;return r=Date.now(),e=Math.max(i+16,r),setTimeout(function(){t(i=e)},e-r)},o.cancelAnimationFrame=clearTimeout)}()},function(t,e,r){!function(t){var e,r,i;return null==t.performance&&(t.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},null==t.performance.now?(e=(null!=(r=t.performance)&&null!=(i=r.timing)?i.navigationStart:void 0)?performance.timing.navigationStart:Date.now(),t.performance.now=function(){return Date.now()-e}):void 0}(window)},function(t,e,r){t.exports={"default":r(1),__esModule:!0}},function(t,e,r){t.exports={"default":r(54),__esModule:!0}},function(t,e,r){var i,s;!function(){var r;return r=function(){function t(t){this.o=null!=t?t:{},window.isAnyResizeEventInited||(this.vars(),this.redefineProto())}return t.prototype.vars=function(){
return window.isAnyResizeEventInited=!0,this.allowedProtos=[HTMLDivElement,HTMLFormElement,HTMLLinkElement,HTMLBodyElement,HTMLParagraphElement,HTMLFieldSetElement,HTMLLegendElement,HTMLLabelElement,HTMLButtonElement,HTMLUListElement,HTMLOListElement,HTMLLIElement,HTMLHeadingElement,HTMLQuoteElement,HTMLPreElement,HTMLBRElement,HTMLFontElement,HTMLHRElement,HTMLModElement,HTMLParamElement,HTMLMapElement,HTMLTableElement,HTMLTableCaptionElement,HTMLImageElement,HTMLTableCellElement,HTMLSelectElement,HTMLInputElement,HTMLTextAreaElement,HTMLAnchorElement,HTMLObjectElement,HTMLTableColElement,HTMLTableSectionElement,HTMLTableRowElement],this.timerElements={img:1,textarea:1,input:1,embed:1,object:1,svg:1,canvas:1,tr:1,tbody:1,thead:1,tfoot:1,a:1,select:1,option:1,optgroup:1,dl:1,dt:1,br:1,basefont:1,font:1,col:1,iframe:1}},t.prototype.redefineProto=function(){var t,e,r,i;return e=this,i=function(){var i,s,n,o;for(n=this.allowedProtos,o=[],t=i=0,s=n.length;s>i;t=++i)r=n[t],null!=r.prototype&&o.push(function(t){var r,i;return r=t.prototype.addEventListener||t.prototype.attachEvent,function(r){var i;return i=function(){var t;return(this!==window||this!==document)&&(t="onresize"===arguments[0]&&!this.isAnyResizeEventInited,t&&e.handleResize({args:arguments,that:this})),r.apply(this,arguments)},t.prototype.addEventListener?t.prototype.addEventListener=i:t.prototype.attachEvent?t.prototype.attachEvent=i:void 0}(r),i=t.prototype.removeEventListener||t.prototype.detachEvent,function(e){var r;return r=function(){return this.isAnyResizeEventInited=!1,this.iframe&&this.removeChild(this.iframe),e.apply(this,arguments)},t.prototype.removeEventListener?t.prototype.removeEventListener=r:t.prototype.detachEvent?t.prototype.detachEvent=wrappedListener:void 0}(i)}(r));return o}.call(this)},t.prototype.handleResize=function(t){var e,r,i,s,n,o,a;return r=t.that,this.timerElements[r.tagName.toLowerCase()]?this.initTimer(r):(i=document.createElement("iframe"),r.appendChild(i),i.style.width="100%",i.style.height="100%",i.style.position="absolute",i.style.zIndex=-999,i.style.opacity=0,i.style.top=0,i.style.left=0,e=window.getComputedStyle?getComputedStyle(r):r.currentStyle,n=""===r.style.position,o="static"===e.position&&n,s=""===e.position&&""===r.style.position,(o||s)&&(r.style.position="relative"),null!=(a=i.contentWindow)&&(a.onresize=function(t){return function(e){return t.dispatchEvent(r)}}(this)),r.iframe=i),r.isAnyResizeEventInited=!0},t.prototype.initTimer=function(t){var e,r;return r=0,e=0,this.interval=setInterval(function(i){return function(){var s,n;return n=t.offsetWidth,s=t.offsetHeight,n!==r||s!==e?(i.dispatchEvent(t),r=n,e=s):void 0}}(this),this.o.interval||62.5)},t.prototype.dispatchEvent=function(t){var e;return document.createEvent?(e=document.createEvent("HTMLEvents"),e.initEvent("onresize",!1,!1),t.dispatchEvent(e)):document.createEventObject?(e=document.createEventObject(),t.fireEvent("onresize",e)):!1},t.prototype.destroy=function(){var t,e,r,i,s,n,o;for(clearInterval(this.interval),this.interval=null,window.isAnyResizeEventInited=!1,e=this,n=this.allowedProtos,o=[],t=r=0,i=n.length;i>r;t=++r)s=n[t],null!=s.prototype&&o.push(function(t){var e;return e=t.prototype.addEventListener||t.prototype.attachEvent,t.prototype.addEventListener?t.prototype.addEventListener=Element.prototype.addEventListener:t.prototype.attachEvent&&(t.prototype.attachEvent=Element.prototype.attachEvent),t.prototype.removeEventListener?t.prototype.removeEventListener=Element.prototype.removeEventListener:t.prototype.detachEvent?t.prototype.detachEvent=Element.prototype.detachEvent:void 0}(s));return o},t}(),i=[],s=function(){return new r}.apply(e,i),!(void 0!==s&&(t.exports=s))}()},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="rect",this._defaults.rx=0,this._defaults.ry=0},e.prototype._draw=function(){var t,r,i;return e.__super__._draw.apply(this,arguments),t=this._props,r=null!=t.radiusX?t.radiusX:t.radius,i=null!=t.radiusY?t.radiusY:t.radius,this._setAttrIfChanged("width",2*r),this._setAttrIfChanged("height",2*i),this._setAttrIfChanged("x",t.width/2-r),this._setAttrIfChanged("y",t.height/2-i),this._setAttrIfChanged("rx",t.rx),this._setAttrIfChanged("ry",t.ry)},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*(2*t+2*e)},e}(i),t.exports=s},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(24),a=i(o),p=r(25),u=i(p),l=r(26),h=i(l),c=function(t){function e(){return n["default"](this,e),a["default"](this,t.apply(this,arguments))}return u["default"](e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.tag="path",this._defaults.parent=null;for(var e=0;e<this._drawMap.length;e++)"stroke-width"===this._drawMap[e]&&this._drawMap.splice(e,1)},e.prototype.getShape=function(){return""},e.prototype.getLength=function(){return 100},e.prototype._draw=function(){var e=this._props,r=this._state,i=r.radiusX!==e.radiusX,s=r.radiusY!==e.radiusY,n=r.radius!==e.radius;(i||s||n)&&(this.el.setAttribute("transform",this._getScale()),r.radiusX=e.radiusX,r.radiusY=e.radiusY,r.radius=e.radius),this._setAttrIfChanged("stroke-width",e["stroke-width"]/e.maxScale),t.prototype._draw.call(this)},e.prototype._render=function(){if(!this._isRendered){this._isRendered=!0,this._length=this.getLength();var t=this._props;t.parent.innerHTML='<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">'+this.getShape()+"</g></svg>",this._canvas=t.parent.querySelector("#js-mojs-shape-canvas"),this.el=t.parent.querySelector("#js-mojs-shape-el"),this._setCanvasSize()}},e.prototype._getScale=function(){var t=this._props,e=t.radiusX?t.radiusX:t.radius,r=t.radiusY?t.radiusY:t.radius;t.scaleX=2*e/100,t.scaleY=2*r/100,t.maxScale=Math.max(t.scaleX,t.scaleY),t.shiftX=t.width/2-50*t.scaleX,t.shiftY=t.height/2-50*t.scaleY;var i="translate("+t.shiftX+", "+t.shiftY+")";return i+" scale("+t.scaleX+", "+t.scaleY+")"},e.prototype._getLength=function(){return this._length},e}(h["default"]);e["default"]=c},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.shape="ellipse"},e.prototype._draw=function(){var t,r;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,r=null!=this._props.radiusY?this._props.radiusY:this._props.radius,this._setAttrIfChanged("rx",t),this._setAttrIfChanged("ry",r),this._setAttrIfChanged("cx",this._props.width/2),this._setAttrIfChanged("cy",this._props.height/2),e.__super__._draw.apply(this,arguments)},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*Math.PI*Math.sqrt((t*t+e*e)/2)},e}(i),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="line"},e.prototype._draw=function(){var t,r,i;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,r=this._props.width/2,i=this._props.height/2,this._setAttrIfChanged("x1",r-t),this._setAttrIfChanged("x2",r+t),this._setAttrIfChanged("y1",i),this._setAttrIfChanged("y2",i),e.__super__._draw.apply(this,arguments)},e}(i),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=3},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f,d,_,y,m,g;if(e.__super__._draw.apply(this,arguments),l=this._props,this._props.points&&(c=null!=this._props.radiusX?this._props.radiusX:this._props.radius,f=null!=this._props.radiusY?this._props.radiusY:this._props.radius,o=c===this._prevRadiusX,a=f===this._prevRadiusY,n=l.points===this._prevPoints,!(o&&a&&n))){for(y=l.width/2,m=l.height/2,t=y-c,r=m,_=2*c/(l.points-1),g=-1,i=Math.sqrt(_*_+f*f),u=-i,h="M"+t+", "+m+" ",s=p=0,d=l.points;d>=0?d>p:p>d;s=d>=0?++p:--p)h+="L"+t+", "+r+" ",t+=_,u+=i,r=-1===g?m-f:m,g=-g;return this._length=u,this.el.setAttribute("d",h),this._prevPoints=l.points,this._prevRadiusX=c,this._prevRadiusY=f}},e.prototype._getLength=function(){return this._length},e}(i),t.exports=s},function(t,e,r){var i,s,n,o=function(t,e){function r(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},a={}.hasOwnProperty;i=r(26)["default"]||r(26),n=r(19),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=3},e.prototype._draw=function(){var t,r,i,s,o,a,p,u,l,h,c,f,d,_,y,m;if(h=this._props,f=null!=this._props.radiusX?this._props.radiusX:this._props.radius,d=null!=this._props.radiusY?this._props.radiusY:this._props.radius,o=f===this._prevRadiusX,a=d===this._prevRadiusY,s=h.points===this._prevPoints,!(o&&a&&s)){for(m=360/this._props.points,null==this._radialPoints?this._radialPoints=[]:this._radialPoints.length=0,i=p=0,_=this._props.points;_>=0?_>p:p>_;i=_>=0?++p:--p)this._radialPoints.push(n.getRadialPoint({radius:this._props.radius,radiusX:this._props.radiusX,radiusY:this._props.radiusY,angle:i*m,center:{x:h.width/2,y:h.height/2}}));for(r="",y=this._radialPoints,i=u=0,l=y.length;l>u;i=++u)c=y[i],t=0===i?"M":"L",r+=""+t+c.x.toFixed(4)+","+c.y.toFixed(4)+" ";this._prevPoints=h.points,this._prevRadiusX=f,this._prevRadiusY=d,this.el.setAttribute("d",r+="z")}return e.__super__._draw.apply(this,arguments)},e.prototype._getLength=function(){return this._getPointsPerimiter(this._radialPoints)},e}(i),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path"},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f,d;return e.__super__._draw.apply(this,arguments),o=this._props,a=null!=this._props.radiusX?this._props.radiusX:this._props.radius,p=null!=this._props.radiusY?this._props.radiusY:this._props.radius,r=a===this._prevRadiusX,i=p===this._prevRadiusY,r&&i?void 0:(u=this._props.width/2,c=this._props.height/2,l=u-a,h=u+a,s="M"+l+","+c+" L"+h+","+c,f=c-p,d=c+p,n="M"+u+","+f+" L"+u+","+d,t=s+" "+n,this.el.setAttribute("d",t),this._prevRadiusX=a,this._prevRadiusY=p)},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*(t+e)},e}(i),t.exports=s},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(23),n=i(s),o=r(24),a=i(o),p=r(25),u=i(p),l=r(26),h=i(l),c=function(t){function e(){return n["default"](this,e),a["default"](this,t.apply(this,arguments))}return u["default"](e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.tag="path"},e.prototype._draw=function(){t.prototype._draw.call(this);var e=this._props,r=null!=e.radiusX?e.radiusX:e.radius,i=null!=e.radiusY?e.radiusY:e.radius,s=r===this._prevRadiusX,n=i===this._prevRadiusY,o=e.points===this._prevPoints;if(!(s&&n&&o)){var a=e.width/2,p=e.height/2,u=a-r,l=a+r,h="M"+u+" "+p+" Q "+a+" "+(p-2*i)+" "+l+" "+p;this.el.setAttribute("d",h),this._prevPoints=e.points,this._prevRadiusX=r,this._prevRadiusY=i}},e.prototype._getLength=function(){var t=this._props,e=null!=t.radiusX?t.radiusX:t.radius,r=null!=t.radiusY?t.radiusY:t.radius,i=e+r,s=Math.sqrt((3*e+r)*(e+3*r));return.5*Math.PI*(3*i-s)},e}(h["default"]);e["default"]=c},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(26)["default"]||r(26),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=2},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f,d,_,y;if(e.__super__._draw.apply(this,arguments),a=this._props,this._props.points&&(p=null!=this._props.radiusX?this._props.radiusX:this._props.radius,u=null!=this._props.radiusY?this._props.radiusY:this._props.radius,s=p===this._prevRadiusX,n=u===this._prevRadiusY,i=a.points===this._prevPoints,!(s&&n&&i))){for(h=this._props.width/2,d=this._props.height/2,c=h-p,f=h+p,t="",y=2*u/(this._props.points-1),_=d-u,r=o=0,l=this._props.points;l>=0?l>o:o>l;r=l>=0?++o:--o)d=""+(r*y+_),t+="M"+c+", "+d+" L"+f+", "+d+" ";return this.el.setAttribute("d",t),this._prevPoints=a.points,this._prevRadiusX=p,this._prevRadiusY=u}},e.prototype._getLength=function(){return 2*(null!=this._props.radiusX?this._props.radiusX:this._props.radius)},e}(i),t.exports=s},function(t,e,r){(function(e){var i,s,n,o=[].indexOf||function(t){for(var e=0,r=this.length;r>e;e++)if(e in this&&this[e]===t)return e;return-1};n=r(19),i=function(){function t(t){return this.vars(),this.generate}return t.prototype.vars=function(){return this.generate=n.bind(this.generate,this)},t.prototype.generate=function(t,r,i,s){var n,a,p,u,l,h,c,f,d,_,y,m,g,v,w,b,S,P,x,T,M,C,k,D;if(arguments.length<4)return this.error("Bezier function expects 4 arguments");for(S=P=0;4>P;S=++P)if(d=arguments[S],"number"!=typeof d||isNaN(d)||!isFinite(d))return this.error("Bezier function expects 4 arguments");return 0>t||t>1||0>i||i>1?this.error("Bezier x values should be > 0 and < 1"):(u=4,l=.001,c=1e-7,h=10,T=11,x=1/(T-1),v=o.call(e,"Float32Array")>=0,n=function(t,e){return 1-3*e+3*t},a=function(t,e){return 3*e-6*t},p=function(t){return 3*t},y=function(t,e,r){return((n(e,r)*t+a(e,r))*t+p(e))*t},w=function(t,e,r){return 3*n(e,r)*t*t+2*a(e,r)*t+p(e)},C=function(e,r){var s,n;for(S=0;u>S;){if(s=w(r,t,i),0===s)return r;n=y(r,t,i)-e,r-=n/s,++S}return r},m=function(){for(S=0;T>S;)M[S]=y(S*x,t,i),++S},_=function(e,r,s){var n,o,a;for(o=void 0,n=void 0,S=0;;)if(n=r+(s-r)/2,o=y(n,t,i)-e,o>0?s=n:r=n,a=Math.abs(o)>c,!(a&&++S<h))break;return n},b=function(e){var r,s,n,o,a,p,u;for(p=0,r=1,u=T-1;r!==u&&M[r]<=e;)p+=x,++r;return--r,s=M[r+1]-M[r],n=(e-M[r])/s,o=p+n*x,a=w(o,t,i),a>=l?C(e,o):0===a?o:_(e,p,p+x)},k=function(){var e;return e=!0,t!==r||i!==s?m():void 0},M=v?new Float32Array(T):new Array(T),f=!1,g=function(e){return f||k(),t===r&&i===s?e:0===e?0:1===e?1:y(b(e),r,s)},D="bezier("+[t,r,i,s]+")",g.toStr=function(){return D},g)},t.prototype.error=function(t){return n.error(t)},t}(),s=new i,t.exports=s}).call(e,function(){return this}())},function(t,e,r){var i,s;s=r(19),i=function(){function t(t,e){if(this.o=null!=e?e:{},"creator"!==t){if(this.path=s.parsePath(t),null==this.path)return s.error("Error while parsing the path");this._vars(),this.path.setAttribute("d",this._normalizePath(this.path.getAttribute("d"))),this.pathLength=this.path.getTotalLength(),this.sample=s.bind(this.sample,this),this._hardSample=s.bind(this._hardSample,this),this._preSample()}}return t.prototype._vars=function(){return this._precompute=s.clamp(this.o.precompute||1450,100,1e4),this._step=1/this._precompute,this._rect=this.o.rect||100,this._approximateMax=this.o.approximateMax||5,this._eps=this.o.eps||.001,this._boundsPrevProgress=-1},t.prototype._preSample=function(){var t,e,r,i,s,n,o;for(this._samples=[],o=[],t=e=0,n=this._precompute;n>=0?n>=e:e>=n;t=n>=0?++e:--e)s=t*this._step,r=this.pathLength*s,i=this.path.getPointAtLength(r),o.push(this._samples[t]={point:i,length:r,progress:s});return o},t.prototype._findBounds=function(t,e){var r,i,s,n,o,a,p,u,l,h,c,f,d;if(e===this._boundsPrevProgress)return this._prevBounds;for(null==this._boundsStartIndex&&(this._boundsStartIndex=0),a=t.length,this._boundsPrevProgress>e?(p=0,i="reverse"):(p=a,i="forward"),"forward"===i?(f=t[0],s=t[t.length-1]):(f=t[t.length-1],s=t[0]),n=o=h=this._boundsStartIndex,c=p;c>=h?c>o:o>c;n=c>=h?++o:--o){if(d=t[n],l=d.point.x/this._rect,u=e,"reverse"===i&&(r=l,l=u,u=r),!(u>l)){s=d;break}f=d,this._boundsStartIndex=n}return this._boundsPrevProgress=e,this._prevBounds={start:f,end:s}},t.prototype.sample=function(t){var e,r;return t=s.clamp(t,0,1),e=this._findBounds(this._samples,t),r=this._checkIfBoundsCloseEnough(t,e),null!=r?r:this._findApproximate(t,e.start,e.end)},t.prototype._checkIfBoundsCloseEnough=function(t,e){var r,i;return r=void 0,i=this._checkIfPointCloseEnough(t,e.start.point),null!=i?i:this._checkIfPointCloseEnough(t,e.end.point)},t.prototype._checkIfPointCloseEnough=function(t,e){return s.closeEnough(t,e.x/this._rect,this._eps)?this._resolveY(e):void 0},t.prototype._approximate=function(t,e,r){var i,s;return i=e.point.x-t.point.x,s=(r-t.point.x/this._rect)/(i/this._rect),t.length+s*(e.length-t.length)},t.prototype._findApproximate=function(t,e,r,i){var n,o,a,p,u;return null==i&&(i=this._approximateMax),n=this._approximate(e,r,t),p=this.path.getPointAtLength(n),u=p.x/this._rect,s.closeEnough(t,u,this._eps)?this._resolveY(p):--i<1?this._resolveY(p):(a={point:p,length:n},o=u>t?[t,e,a,i]:[t,a,r,i],this._findApproximate.apply(this,o))},t.prototype._resolveY=function(t){return 1-t.y/this._rect},t.prototype._normalizePath=function(t){var e,r,i,s,n,o;return o=/[M|L|H|V|C|S|Q|T|A]/gim,s=t.split(o),s.shift(),e=t.match(o),n=0,s[n]=this._normalizeSegment(s[n]),r=s.length-1,s[r]=this._normalizeSegment(s[r],this._rect||100),i=this._joinNormalizedPath(e,s)},t.prototype._joinNormalizedPath=function(t,e){var r,i,s,n,o,a;for(o="",i=s=0,n=t.length;n>s;i=++s)r=t[i],a=0===i?"":" ",o+=""+a+r+e[i].trim();return o},t.prototype._normalizeSegment=function(t,e){var r,i,s,n,o,a,p,u,l,h;if(null==e&&(e=0),t=t.trim(),o=/(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim,a=this._getSegmentPairs(t.match(o)),s=a[a.length-1],h=s[0],p=Number(h),p!==e)for(t="",s[0]=e,r=i=0,n=a.length;n>i;r=++i)u=a[r],l=0===r?"":" ",t+=""+l+u[0]+","+u[1];return t},t.prototype._getSegmentPairs=function(t){var e,r,i,n,o,a;for(t.length%2!==0&&s.error("Failed to parse the path - segment pairs are not even.",t),n=[],e=r=0,i=t.length;i>r;e=r+=2)a=t[e],o=[t[e],t[e+1]],n.push(o);return n},t.prototype.create=function(e,r){var i;return i=new t(e,r),i.sample.path=i.path,i.sample},t}(),t.exports=i},function(t,e,r){var i,s,n,o,a,p,u=[].slice;s=null,a=function(t){return"number"==typeof t.value?t.value:s.parseEasing(t.value)},p=function(t,e){var r;return t.value=a(t),e.value=a(e),r=0,t.to<e.to&&(r=-1),t.to>e.to&&(r=1),r},n=function(t,e){var r,i,s,n,o;for(i=0,r=s=0,n=t.length;n>s&&(o=t[r],i=r,!(o.to>e));r=++s);return i},o=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],t.length>1?t=t.sort(p):t[0].value=a(t[0]),function(e){var r,i;return r=n(t,e),-1!==r?(i=t[r].value,r===t.length-1&&e>t[r].to?1:"function"==typeof i?i(e):i):void 0}},i=function(t){return s=t,o},t.exports=i},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var s=r(18),n=i(s),o=r(19),a=(i(o),function(t){function e(t,e){e=+e||0;var r=Math.pow(10,e);return Math.round(t*r)/r}var r=t.base,i=Math.pow(10,r),s=1/i,n=function(i){var n=e(i,r),o=t[n.toString()];if(Math.abs(i-n)<s)return o;if(i>n)var a=n+s,p=t[a];else var a=n-s,p=t[a];var u=a-n,l=p-o;if(s>l)return o;var h=(i-n)/u,c=p>o?-1:1,f=c*h*l;return o+f};return n.getSamples=function(){return t},n}),p=function(t){var e=arguments.length<=1||void 0===arguments[1]?4:arguments[1],r="undefined"==typeof e?"undefined":n["default"](e),i={};if("number"===r){var s=0,o=Math.pow(10,e),a=1/o;i[0]=t(0);for(var p=0;o-1>p;p++){s+=a;var l=parseFloat(s.toFixed(e));i[l]=t(s)}i[1]=t(1),i.base=e}else"object"===r?i=e:"string"===r&&(i=JSON.parse(e));return u._sample._proximate(i)},u={_sample:p,_proximate:a};u._sample._proximate=u._proximate,e["default"]=u._sample},function(t,e,r){t.exports={"default":r(55),__esModule:!0}},function(t,e,r){t.exports={"default":r(56),__esModule:!0}},function(t,e,r){t.exports={"default":r(57),__esModule:!0}},function(t,e,r){r(58),r(59),t.exports=r(60)},function(t,e,r){r(67),t.exports=r(64).Object.keys},function(t,e,r){var i,s;(function(t){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=r(18),a=n(o),p=r(19),u=n(p),l=r(20),h=n(l),c=r(2),f=n(c),d=r(3),_=n(d),y=r(4),m=n(y),g=r(5),v=n(g),w=r(6),b=n(w),S=r(7),P=n(S),x=r(21),T=n(x),M=r(8),C=n(M),k=r(9),D=n(k),O=r(10),E=n(O),A=r(11),L=n(A),R=r(12),I=n(R),F=r(13),Y=n(F),j=r(14),X=n(j),U=r(15),B=n(U),H=r(16),N=n(H),z=r(22),q=n(z),V={revision:"0.288.1",isDebug:!0,helpers:u["default"],Shape:f["default"],ShapeSwirl:_["default"],Burst:m["default"],Html:v["default"],stagger:b["default"],Spriter:P["default"],MotionPath:T["default"],Tween:C["default"],Timeline:D["default"],Tweenable:L["default"],Thenable:I["default"],Tunable:Y["default"],Module:N["default"],tweener:E["default"],easing:q["default"],shapesMap:h["default"],_pool:{Delta:X["default"],Deltas:B["default"]}};V.h=V.helpers,V.delta=V.h.delta,V.addShape=V.shapesMap.addShape,V.CustomShape=V.shapesMap.custom,V.Transit=V.Shape,V.Swirl=V.ShapeSwirl,i=[],s=function(){return V}.apply(e,i),!(void 0!==s&&(t.exports=s)),"object"===a["default"](t)&&"object"===a["default"](t.exports)&&(t.exports=V),e["default"]=V,"undefined"!=typeof window&&(window.mojs=V)}).call(e,r(17)(t))},function(t,e,r){r(62),r(63),t.exports=r(64).Symbol},function(t,e,r){r(65),t.exports=r(64).Object.setPrototypeOf},function(t,e,r){var i=r(66);t.exports=function(t,e){return i.create(t,e)}},function(t,e,r){r(68),t.exports=r(64).Object.assign},function(t,e,r){r(69);var i=r(70);i.NodeList=i.HTMLCollection=i.Array},function(t,e,r){"use strict";var i=r(71)(!0);r(72)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=i(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var i=r(73),s=r(74);t.exports=r(64).getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},function(t,e,r){var i=r(75)("wks"),s=r(76),n=r(77).Symbol;t.exports=function(t){return i[t]||(i[t]=n&&n[t]||(n||s)("Symbol."+t))}},function(t,e,r){"use strict";var i=r(66),s=r(77),n=r(78),o=r(79),a=r(80),p=r(81),u=r(82),l=r(75),h=r(83),c=r(76),f=r(61),d=r(84),_=r(85),y=r(86),m=r(87),g=r(73),v=r(88),w=r(89),b=i.getDesc,S=i.setDesc,P=i.create,x=_.get,T=s.Symbol,M=s.JSON,C=M&&M.stringify,k=!1,D=f("_hidden"),O=i.isEnum,E=l("symbol-registry"),A=l("symbols"),L="function"==typeof T,R=Object.prototype,I=o&&u(function(){return 7!=P(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(t,e,r){var i=b(R,e);i&&delete R[e],S(t,e,r),i&&t!==R&&S(R,e,i)}:S,F=function(t){var e=A[t]=P(T.prototype);return e._k=t,o&&k&&I(R,t,{configurable:!0,set:function(e){n(this,D)&&n(this[D],t)&&(this[D][t]=!1),I(this,t,w(1,e))}}),e},Y=function(t){return"symbol"==typeof t},j=function(t,e,r){return r&&n(A,e)?(r.enumerable?(n(t,D)&&t[D][e]&&(t[D][e]=!1),r=P(r,{enumerable:w(0,!1)})):(n(t,D)||S(t,D,w(1,{})),t[D][e]=!0),I(t,e,r)):S(t,e,r)},X=function(t,e){g(t);for(var r,i=y(e=v(e)),s=0,n=i.length;n>s;)j(t,r=i[s++],e[r]);return t},U=function(t,e){return void 0===e?P(t):X(P(t),e)},B=function(t){var e=O.call(this,t);return e||!n(this,t)||!n(A,t)||n(this,D)&&this[D][t]?e:!0},H=function(t,e){var r=b(t=v(t),e);return!r||!n(A,e)||n(t,D)&&t[D][e]||(r.enumerable=!0),r},N=function(t){for(var e,r=x(v(t)),i=[],s=0;r.length>s;)n(A,e=r[s++])||e==D||i.push(e);return i},z=function(t){for(var e,r=x(v(t)),i=[],s=0;r.length>s;)n(A,e=r[s++])&&i.push(A[e]);return i},q=function(t){if(void 0!==t&&!Y(t)){for(var e,r,i=[t],s=1,n=arguments;n.length>s;)i.push(n[s++]);return e=i[1],"function"==typeof e&&(r=e),(r||!m(e))&&(e=function(t,e){return r&&(e=r.call(this,t,e)),Y(e)?void 0:e}),i[1]=e,C.apply(M,i)}},V=u(function(){var t=T();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))});L||(T=function(){if(Y(this))throw TypeError("Symbol is not a constructor");return F(c(arguments.length>0?arguments[0]:void 0))},p(T.prototype,"toString",function(){return this._k}),Y=function(t){return t instanceof T},i.create=U,i.isEnum=B,i.getDesc=H,i.setDesc=j,i.setDescs=X,i.getNames=_.get=N,i.getSymbols=z,o&&!r(90)&&p(R,"propertyIsEnumerable",B,!0));var W={"for":function(t){return n(E,t+="")?E[t]:E[t]=T(t)},keyFor:function(t){return d(E,t)},useSetter:function(){k=!0},useSimple:function(){k=!1}};i.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=f(t);W[t]=L?e:F(e)}),k=!0,a(a.G+a.W,{Symbol:T}),a(a.S,"Symbol",W),a(a.S+a.F*!L,"Object",{create:U,defineProperty:j,defineProperties:X,getOwnPropertyDescriptor:H,getOwnPropertyNames:N,getOwnPropertySymbols:z}),M&&a(a.S+a.F*(!L||V),"JSON",{stringify:q}),h(T,"Symbol"),h(Math,"Math",!0),h(s.JSON,"JSON",!0)},function(t,e,r){},function(t,e,r){var i=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=i)},function(t,e,r){var i=r(80);i(i.S,"Object",{setPrototypeOf:r(91).set})},function(t,e,r){var i=Object;t.exports={create:i.create,getProto:i.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:i.getOwnPropertyDescriptor,setDesc:i.defineProperty,setDescs:i.defineProperties,getKeys:i.keys,getNames:i.getOwnPropertyNames,getSymbols:i.getOwnPropertySymbols,each:[].forEach}},function(t,e,r){var i=r(92);r(93)("keys",function(t){return function(e){return t(i(e))}})},function(t,e,r){var i=r(80);i(i.S+i.F,"Object",{assign:r(94)})},function(t,e,r){"use strict";var i=r(95),s=r(96),n=r(70),o=r(88);t.exports=r(72)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,s(1)):"keys"==e?s(0,r):"values"==e?s(0,t[r]):s(0,[r,t[r]])},"values"),n.Arguments=n.Array,i("keys"),i("values"),i("entries")},function(t,e,r){t.exports={}},function(t,e,r){var i=r(97),s=r(98);t.exports=function(t){return function(e,r){var n,o,a=String(s(e)),p=i(r),u=a.length;return 0>p||p>=u?t?"":void 0:(n=a.charCodeAt(p),55296>n||n>56319||p+1===u||(o=a.charCodeAt(p+1))<56320||o>57343?t?a.charAt(p):n:t?a.slice(p,p+2):(n-55296<<10)+(o-56320)+65536)}}},function(t,e,r){"use strict";var i=r(90),s=r(80),n=r(81),o=r(99),a=r(78),p=r(70),u=r(100),l=r(83),h=r(66).getProto,c=r(61)("iterator"),f=!([].keys&&"next"in[].keys()),d="@@iterator",_="keys",y="values",m=function(){return this};t.exports=function(t,e,r,g,v,w,b){u(r,e,g);var S,P,x=function(t){if(!f&&t in k)return k[t];switch(t){case _:return function(){return new r(this,t)};case y:return function(){return new r(this,t)}}return function(){return new r(this,t)}},T=e+" Iterator",M=v==y,C=!1,k=t.prototype,D=k[c]||k[d]||v&&k[v],O=D||x(v);if(D){var E=h(O.call(new t));l(E,T,!0),!i&&a(k,d)&&o(E,c,m),M&&D.name!==y&&(C=!0,O=function(){return D.call(this)})}if(i&&!b||!f&&!C&&k[c]||o(k,c,O),p[e]=O,p[T]=m,v)if(S={values:M?O:x(y),keys:w?O:x(_),entries:M?x("entries"):O},b)for(P in S)P in k||n(k,P,S[P]);else s(s.P+s.F*(f||C),e,S);return S}},function(t,e,r){var i=r(101);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var i=r(102),s=r(61)("iterator"),n=r(70);t.exports=r(64).getIteratorMethod=function(t){return void 0!=t?t[s]||t["@@iterator"]||n[i(t)]:void 0}},function(t,e,r){var i=r(77),s="__core-js_shared__",n=i[s]||(i[s]={});t.exports=function(t){return n[t]||(n[t]={})}},function(t,e,r){var i=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+s).toString(36))}},function(t,e,r){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,r){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,r){t.exports=!r(82)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var i=r(77),s=r(64),n=r(103),o="prototype",a=function(t,e,r){var p,u,l,h=t&a.F,c=t&a.G,f=t&a.S,d=t&a.P,_=t&a.B,y=t&a.W,m=c?s:s[e]||(s[e]={}),g=c?i:f?i[e]:(i[e]||{})[o];c&&(r=e);for(p in r)u=!h&&g&&p in g,u&&p in m||(l=u?g[p]:r[p],m[p]=c&&"function"!=typeof g[p]?r[p]:_&&u?n(l,i):y&&g[p]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[o]=t[o],e}(l):d&&"function"==typeof l?n(Function.call,l):l,d&&((m[o]||(m[o]={}))[p]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e,r){t.exports=r(99)},function(t,e,r){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,r){var i=r(66).setDesc,s=r(78),n=r(61)("toStringTag");t.exports=function(t,e,r){t&&!s(t=r?t:t.prototype,n)&&i(t,n,{configurable:!0,value:e})}},function(t,e,r){var i=r(66),s=r(88);t.exports=function(t,e){for(var r,n=s(t),o=i.getKeys(n),a=o.length,p=0;a>p;)if(n[r=o[p++]]===e)return r}},function(t,e,r){var i=r(88),s=r(66).getNames,n={}.toString,o="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return s(t)}catch(e){return o.slice()}};t.exports.get=function(t){return o&&"[object Window]"==n.call(t)?a(t):s(i(t))}},function(t,e,r){var i=r(66);t.exports=function(t){var e=i.getKeys(t),r=i.getSymbols;if(r)for(var s,n=r(t),o=i.isEnum,a=0;n.length>a;)o.call(t,s=n[a++])&&e.push(s);return e}},function(t,e,r){var i=r(104);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,r){var i=r(105),s=r(98);t.exports=function(t){return i(s(t))}},function(t,e,r){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){t.exports=!0},function(t,e,r){var i=r(66).getDesc,s=r(101),n=r(73),o=function(t,e){if(n(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=r(103)(Function.call,i(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:s(t,r),t}}({},!1):void 0),check:o}},function(t,e,r){var i=r(98);t.exports=function(t){return Object(i(t))}},function(t,e,r){var i=r(80),s=r(64),n=r(82);

t.exports=function(t,e){var r=(s.Object||{})[t]||Object[t],o={};o[t]=e(r),i(i.S+i.F*n(function(){r(1)}),"Object",o)}},function(t,e,r){var i=r(66),s=r(92),n=r(105);t.exports=r(82)(function(){var t=Object.assign,e={},r={},i=Symbol(),s="abcdefghijklmnopqrst";return e[i]=7,s.split("").forEach(function(t){r[t]=t}),7!=t({},e)[i]||Object.keys(t({},r)).join("")!=s})?function(t,e){for(var r=s(t),o=arguments,a=o.length,p=1,u=i.getKeys,l=i.getSymbols,h=i.isEnum;a>p;)for(var c,f=n(o[p++]),d=l?u(f).concat(l(f)):u(f),_=d.length,y=0;_>y;)h.call(f,c=d[y++])&&(r[c]=f[c]);return r}:Object.assign},function(t,e,r){t.exports=function(){}},function(t,e,r){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var i=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:i)(t)}},function(t,e,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var i=r(66),s=r(89);t.exports=r(79)?function(t,e,r){return i.setDesc(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";var i=r(66),s=r(89),n=r(83),o={};r(99)(o,r(61)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=i.create(o,{next:s(1,r)}),n(t,e+" Iterator")}},function(t,e,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var i=r(104),s=r(61)("toStringTag"),n="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,r,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=(e=Object(t))[s])?r:n?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,r){var i=r(106);t.exports=function(t,e,r){if(i(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,i){return t.call(e,r,i)};case 3:return function(r,i,s){return t.call(e,r,i,s)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e,r){var i=r(104);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}])});
sha256=function(){function e(a,b){return a>>>b|a<<32-b}for(var b=1,a,m=[],n=[];18>++b;)for(a=b*b;312>a;a+=b)m[a]=1;b=1;for(a=0;313>b;)m[++b]||(n[a]=Math.pow(b,.5)%1*4294967296|0,m[a++]=Math.pow(b,1/3)%1*4294967296|0);return function(g){for(var l=n.slice(b=0),c=unescape(encodeURI(g)),h=[],d=c.length,k=[],f,p;b<d;)k[b>>2]|=(c.charCodeAt(b)&255)<<8*(3-b++%4);d*=8;k[d>>5]|=128<<24-d%32;k[p=d+64>>5|15]=d;for(b=0;b<p;b+=16){for(c=l.slice(a=0,8);64>a;c[4]+=f)h[a]=16>a?k[a+b]:(e(f=h[a-2],17)^e(f,19)^f>>>10)+(h[a-7]|0)+(e(f=h[a-15],7)^e(f,18)^f>>>3)+(h[a-16]|0),c.unshift((f=(c.pop()+(e(g=c[4],6)^e(g,11)^e(g,25))+((g&c[5]^~g&c[6])+m[a])|0)+(h[a++]|0))+(e(d=c[0],2)^e(d,13)^e(d,22))+(d&c[1]^c[1]&c[2]^c[2]&d));for(a=8;a--;)l[a]=c[a]+l[a]}for(c="";63>a;)c+=(l[++a>>3]>>4*(7-a%8)&15).toString(16);return c}}();
angular.module('app')
    .constant('appConstants', {
        getLevelFromUrl: function (url) {
            var decoded = decodeURIComponent(url);
            return JSON.parse(decoded.substr(decoded.indexOf('level=') + 6));
        },
        billingLevel:{n:3, i:12},
        nWordsMin: 3,
        nWordsMax: 5,
        shortTouchTime:400,
        getDbLevel: function(l){
            return DB[l.n][l.i];
        },
        getNextLevel: function (l) {
            l.i++;
            if (l.i >= DB[l.n].length) {
                console.log("level.i exceeded the number of levels in the block, increasing the block")
                l.n++;
                l.i = 0;
            }
            return l;
        },
        getPreviousLevel: function (l) {
            l.i--;
            if (l.i <0) {
                l.n--;
                l.i = DB[l.n].length-1;
            }
            return l;
        },
        getLevelNumber:function (level) {
            return DB[level.n][level.i].levelNumber;
        },
        compareLevel: function (l1, l2) { //both block number and index should be equal.
            l2.n = parseInt(l2.n);
            l2.i = parseInt(l2.i);
            l1.n = parseInt(l1.n);
            l1.i = parseInt(l1.i);

            if (l1.n < l2.n) return 'lt';
            else if (l1.n > l2.n) return 'gt';
            else if (l1.i > l2.i) return 'gt';
            else if (l1.i < l2.i) return 'lt';
            else return 'eq';
        },
        getDefinition: function(w){
            return DEFINITIONS[w.toLowerCase().replace(/[.?'"]/g,'')]['def'];
        },
        checkSavedGameWithDatabase: function(level) {
            return level.i < DB[level.n].length;
        },
        emojis:{
            'smile':[1,2],
            'grinn':[1,1],
            'wink':[1,3],
            'frown':[1,4],
            'surprised':[1,5],
            'sunglasses':[1,8],
            'grinn2':[1,9],
            'tounge':[2,1],
            'oops':[2,7],
            'hint':[3,1],
            'next':[3,2],
            'teeth':[3,4],
            'glasses':[3,5]
        },
        rnd: function (a,b) {
            if (b==undefined){
                b = a;
                a = 0;
            }
            var x =  b-a; 
            return Math.round(a+Math.random() * x);
        }
    }
    );


angular.module('app').constant('appUtils', {
    getTouchesDistance:function(t1,t2){
        var a = t1.clientX - t2.clientX;
        var b = t1.clientY - t2.clientY;
        return Math.sqrt( a*a + b*b );
    },
     hexToRgba: function(h){
        var arr=[];
        for (var i=1;i<9;i+=2){
            val = parseInt(h.substr(i,2),16);
            arr.push(i==7?val/255:val);
        }
        return 'rgba('+arr.join(',')+')';
    },
    getRangeObject: function(a,b){
        var x={}; x[a]=b;return x
    }
}
);
angular.module('app').constant('miscSvgConstants', {
    jellyFish:'<svg id="jellyfish" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"> <path id="tendril2" fill="#0281C1" d="M348.784 406.888c-9.02 0-16.333-7.312-16.333-16.332v.03-74.512c0-.305-.03-.602-.045-.9-.047.507-.078 1.02-.078 1.54v184.895c0 9.02 7.312 16.333 16.333 16.333 9.02 0 16.333-7.313 16.333-16.334V392.49c-.96 8.108-7.845 14.396-16.21 14.396z"/> <path id="tendril4" fill="#0281C1" d="M414.12 406.888c-9.022 0-16.335-7.312-16.335-16.332v.008-74.49l-.002-.03v131.338c0 .65-.05 1.29-.123 1.922v52.306c0 9.02 7.312 16.334 16.333 16.334s16.334-7.313 16.334-16.334V392.492c-.96 8.106-7.845 14.396-16.208 14.396z"/> <path id="tendril1" fill="#3297C9" d="M316.116 299.74c-9.02 0-16.333 7.312-16.333 16.334v74.504c0 .644-.05 1.276-.123 1.9.07.878.12 1.76.12 2.654 0 1.397-.085 2.78-.252 4.142v79.158c0 9.02 7.312 16.334 16.334 16.334 9.02 0 16.333-7.313 16.333-16.334V313.287c-1.324-7.69-8.01-13.548-16.08-13.548z"/> <path id="tendril3" fill="#0873B5" d="M397.783 316.044c-.017-9.008-7.322-16.305-16.333-16.305-9.02 0-16.333 7.312-16.333 16.334V447.38c0 9.02 7.31 16.334 16.332 16.334 8.37 0 15.257-6.298 16.21-14.412.074-.63.123-1.27.123-1.922V316.044z"/> <path id="tendril5" fill="#3297C9" d="M463.124 394.894v-4.432c0-.057-.006-.11-.006-.168v-76.19c-.974-8.09-7.85-14.364-16.202-14.364-9.02 0-16.334 7.313-16.334 16.335v76.454c-.07-.593-.116-1.192-.124-1.802v87.705c0 9.02 7.312 16.334 16.334 16.334 9.02 0 16.332-7.313 16.332-16.334v-83.1c0-.067-.006-.133-.006-.2 0-.08.006-.16.006-.24z"/> <path id="mainJelly" fill="#61A1FF" d="M561.118 205.396c0-9.02-7.312-16.334-16.333-16.334s-16.334 7.312-16.334 16.334v184.897c0 9.02-7.31 16.334-16.33 16.334-9.023 0-16.335-7.313-16.335-16.334V205.398c0-.222-.024-.437-.032-.655-.003-.035-.003-.07-.006-.104-.02-.465-.058-.925-.117-1.38-3.034-61.473-52.988-110.37-114.18-110.37-61.182 0-111.132 48.887-114.177 110.35-.093.71-.158 1.425-.158 2.158v184.897c0 9.02-7.313 16.334-16.333 16.334s-16.333-7.314-16.333-16.335V205.396c0-9.02-7.313-16.334-16.334-16.334-9.02 0-16.333 7.312-16.333 16.334v184.897c0 .675.054 1.338.134 1.993-.08.94-.134 1.887-.134 2.846 0 22.372 21.938 40.507 49 40.507 25.37 0 46.237-15.94 48.747-36.366.167-1.362.253-2.744.253-4.142 0-.895-.05-1.776-.12-2.654.073-.624.12-1.257.122-1.9v-74.504c0-9.02 7.312-16.335 16.333-16.335 8.07 0 14.754 5.855 16.078 13.547.107.617.175 1.247.21 1.886.016.3.045.597.045.9v74.513l.002-.03c0 9.02 7.313 16.332 16.333 16.332 8.364 0 15.25-6.288 16.208-14.396.074-.626.123-1.26.124-1.906v-74.51c0-9.022 7.313-16.336 16.334-16.336 9.012 0 16.317 7.297 16.334 16.305l.002.03V390.555c0 9.022 7.312 16.333 16.334 16.333 8.363 0 15.248-6.29 16.208-14.396.075-.635.124-1.278.124-1.934 0 .057.007.112.007.17.007.608.053 1.208.123 1.8v-76.454c0-9.02 7.312-16.335 16.334-16.335 8.353 0 15.23 6.272 16.202 14.363v76.19c0 .057.005.11.005.168.01.605.053 1.2.124 1.787v.095c-.07.844-.116 1.693-.125 2.55 0 .08-.006.16-.006.24 0 .067.005.133.005.2.132 22.278 22.014 40.307 48.995 40.307 27.062 0 49-18.136 49-40.508 0-.96-.055-1.905-.134-2.846.08-.655.133-1.318.133-1.993V205.396z"/> <path id="mouth_1_" fill="#0071BC" d="M363.353 239.68c.538 20.895 35.642 20.695 36.195 0 .095-3.542-5.394-3.533-5.488 0-.363 13.6-24.863 13.802-25.22 0-.09-3.534-5.58-3.542-5.487 0z"/> <g id="eyes_closed" fill="none" stroke="#0071BC" stroke-width="6" stroke-linecap="round" stroke-linejoin="bevel" stroke-miterlimit="10"> <path d="M334.504 205c-7.464 7.463-19.542 7.463-27.006 0M455.504 205c-7.464 7.463-19.543 7.463-27.006 0"/> </g> <g id="eyes_x5F_open"> <path fill="#FFF" d="M442.088 173c-17.682 0-32.015 14.332-32.015 32.013 0 17.68 14.333 32.014 32.015 32.014 17.68 0 32.013-14.333 32.013-32.014 0-17.68-14.332-32.014-32.012-32.014zm0 58.146c-14.434 0-26.135-11.7-26.135-26.134 0-14.433 11.7-26.133 26.135-26.133 14.432 0 26.133 11.7 26.133 26.132 0 14.433-11.7 26.134-26.132 26.134z"/> <circle fill="#0071BC" cx="442.088" cy="205.012" r="26.134"/> <path fill="#FFF" d="M321.35 173c-17.682 0-32.015 14.332-32.015 32.013 0 17.68 14.333 32.014 32.015 32.014 17.68 0 32.013-14.333 32.013-32.014 0-17.68-14.333-32.014-32.013-32.014zm0 58.146c-14.434 0-26.134-11.7-26.134-26.134 0-14.433 11.7-26.133 26.134-26.133 14.432 0 26.132 11.7 26.132 26.132 0 14.433-11.7 26.134-26.132 26.134z"/> <circle fill="#0071BC" cx="321.35" cy="205.012" r="26.134"/> </g> </svg>',
    hint:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M101.1 505L7 410.9c-9.4-9.4-9.4-24.6 0-33.9L377 7c9.4-9.4 24.6-9.4 33.9 0l94.1 94.1c9.4 9.4 9.4 24.6 0 33.9L135 505c-9.3 9.3-24.5 9.3-33.9 0zM304 159.2l48.8 48.8 89.9-89.9-48.8-48.8-89.9 89.9zM138.9 39.3l-11.7 23.8-26.2 3.8c-4.7.7-6.6 6.5-3.2 9.8l19 18.5-4.5 26.1c-.8 4.7 4.1 8.3 8.3 6.1L144 115l23.4 12.3c4.2 2.2 9.1-1.4 8.3-6.1l-4.5-26.1 19-18.5c3.4-3.3 1.5-9.1-3.2-9.8L160.8 63l-11.7-23.8c-2-4.1-8.1-4.1-10.2.1zm97.7-20.7l-7.8 15.8-17.5 2.6c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L240 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm-192 0l-7.8 15.8L19.3 37c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L48 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm416 223.5l-7.8 15.8-17.5 2.5c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4l15.6-8.2 15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-2.8-5.4-2.8-6.8 0z'/></svg>"
}
);
angular.module('app.dashboard')
    .controller('DashboardController', ["$scope", "$sce", "$timeout", "designConstants", "$location", "$templateCache", "$interpolate", "miscSvgConstants", "appUtils", function ($scope,$sce, $timeout,designConstants, $location,$templateCache,$interpolate, miscSvgConstants,appUtils) {
        $scope.menu = [{
            text: 'Play',
            path: 'list'
        }/*,
        {
            text: 'Score Board',
            path: "board"
        },
        {
            text: 'Settings',
            path: "settings",
            svg: $sce.trustAsHtml(designConstants['1397119524(openclipart.org).svg'])
        },
        {
            text: 'About',
            path: "about"
        } */
        ];

        $scope.jellyFish = $sce.trustAsHtml(miscSvgConstants.jellyFish);
        /*NOTE adding margin causes problems with dashboard background. Try to create some wrap elements and 
        add the paddings to the wrappers*/
         
        var margin = 0;
        var height = $scope.viewH/$scope.menu.length/2;

        $scope.getLiStyle = function(ind){
            return {margin:margin+'px', 
            height:height+'px',
            'background-position-y': ind*-1*height*.8+'px'
            };
        }

        $scope.tapItem = function(ind, path){

            var anim =  new mojs.Html({
                el: '#item_'+ind,
                'background-position-y': appUtils.getRangeObject(ind*-1*height*.8+'px',-1*($scope.viewH-height)+'px'),
                color:{'orange':'red'},
                duration: 500,
                onProgress:animProgress
              });

            function animProgress(p){
                if (p>.7){
                    $timeout(function(){$location.path(path);},0)
                }
            }

            anim.play();
        }
        
        /*Dashboard staggering animation*/
        $timeout(function(){ //We need to setup animations after the first render so we must use timeout.
        for (var i=0; i<$scope.menu.length;i++){

            var itemAnim =  new mojs.Html({
                el: '#item_'+i,
                y:{'400':0},
                opacity:{'0':1},
                duration: 1000,
                delay:i*300
              });

            itemAnim.play();
        }


        


       
        /* NOTE: To prevent jumping we can't use shift in play, because even when we use mojs.Tween 
        there will be a delay between play and the first progress.
            we must use opacity to show up anim when its ready.
        */

        var mainJellyAnim = new mojs.Html({
            el:"#jellyfish",
            y:{'-30':'30'},
            isForce3d:true,
            duration: 3000,
            delay:0,
            repeat:999,
            isYoyo:true,
            easing:'ease.inout'
        });

       
        var mainJellyShowAnim =  new mojs.Html({
            el:"#jellyfish-container",
            left:'50%',
            top:'60%',
            x:'-50%',
            y:'-50%',
            isForce3d:true,

            opacity:{'0':'1'},
            duration: 2000,
            delay:500,
            repeat:0
        });
        mainJellyShowAnim.play();
        mainJellyAnim.play();
       
        
        
        //tendrilAnims
        function tendrilAnim(i){
            var thisTendril = this;
            this.jqEl = angular.element(document.getElementById('tendril'+i));
            this.tween = this.tween = new mojs.Tween({
                onUpdate:function(p){
                    var y = Math.round(-20*p);
                    thisTendril.jqEl.attr('transform', 'translate(0 '+y+')');//in SVG there is no translate3d and no 'px'
                },
                duration: 1500,
                delay: Math.random()*500,
                repeat:999,
                isYoyo:true
            });
        } 

        for (var i=1;i<=5;i++){
            var tAnim = new tendrilAnim(i);
            tAnim.tween.play(1500);
        }

        var eyesBlinkAnim = new mojs.Tween({
            duration:4000,
            repeat:999,
            onUpdate: function(p){
                var jqEyes = angular.element(document.getElementById('eyes_x5F_open'));
                if (p>.50 && p<.80){
                    var display='none';
                }else{
                    var display='inherit';
                }
                if (jqEyes.css('display')!=display){
                    jqEyes.css('display',display);
                }
                
            }
        })
        eyesBlinkAnim.play();
        },0);
       


    }]);
/*
This resource does not have access to rootScope.
It's just a factory that makes it easier to interact with IO or net interfaces related to game data.
You should pass data or success/fail functions.
*/
angular.module('app').factory('gameDataManager',[ 'scoreLevelRecordResource', '$q', function (scoreLevelRecordResource, $q) {

    /*IMPORTANT NOTE
        1) from : https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file
        Note While the W3C FileSystem spec is deprecated for web browsers, the FileSystem APIs are supported in Cordova applications with this plugin for the platforms listed in the Supported Platforms list, with the exception of the Browser platform.

        2) Because we debug mostly on the browser, we should be aware that when we face problems they may be browser-specific and we should only change the code according to the browser errors for the browser only that is with implementing device.platform conditions.
    */
    var thisFactory = this;
    var endDataMarker = "=== END ===";
    

    function saveGame(localStorageKey, gameData, success, failure) {
        var json = JSON.stringify(gameData);
        //Note this endDataMarker is necessary to avoid problems when the new data is shorter than the old one
        thisFactory.saveDataObj = json + sha256(json) + endDataMarker;
        console.log('ready to write:'+thisFactory.saveDataObj);
        localStorage.setItem(localStorageKey,thisFactory.saveDataObj);
        
    }

    function loadGameFromStr(str, success, failure) {
        console.log('loadGameFromStr: ' + str);
        try {
            str = str.slice(0, str.indexOf(endDataMarker));
            hashPart = str.substr(str.length - 64, 64);
            jsonPart = str.slice(0, str.length - 64);
            if (hashPart != sha256(jsonPart)) {
                throw "Hash check failed";
            }
            var saveData = JSON.parse(jsonPart);
            console.log('saveData:' + JSON.stringify(saveData));
            thisFactory.gameData = saveData;
            success(thisFactory.gameData);

        } catch (e) {
            console.log('Error');
            console.log(e);
            failure();

        }


    }




    function loadGame(localStorageKey ,successFunc, failFunc) {
        thisFactory.successFunc = successFunc;
        thisFactory.failFunc = failFunc;
        var data = localStorage.getItem(localStorageKey);
        if (data==null){
            if (thisFactory.failFunc){
                thisFactory.failFunc();
            }
        }else{
            loadGameFromStr(data, function () {
                if (thisFactory.successFunc) {
                    thisFactory.successFunc(thisFactory.gameData);
                }
            }, function () {
                if (thisFactory.failFunc) {
                    thisFactory.failFunc();
                }
            });
        }
        
        
    }

    
    function uploadRecordsBatchPromise(deviceUuid, gameData){
        var deferred = $q.defer();
        //thisFactory.uploadBatchSuccessFunc = successFunc;
        //thisFactory.uploadBatchFailFunc = failFunc;
        thisFactory.ScoreLevelRecordResource = scoreLevelRecordResource(deviceUuid);
        var batchToUpload = angular.copy(gameData.scoreLevelRecordsBatch);
        thisFactory.ScoreLevelRecordResource.save(batchToUpload, function(){
            var uploadedLevels = batchToUpload.map(function(x){return x.levelNumber});
            deferred.resolve(uploadedLevels);
        }, function(){
            deferred.reject('upload failed');
        });
        return deferred.promise;
    }

    return {
        saveGame: saveGame,
        loadGame: loadGame,
        uploadRecordsBatchPromise: uploadRecordsBatchPromise,
        fileEntry: null
    }
}

]);
angular.module('app.game')
.constant('gameConstants', {
    ScoreUpPoints: 10,
    ScoreDownPoints: 8,
    RewardsPoints:{
        hint:200
    }
}
);


angular.module('app.game')
    .controller('GameController', ["$scope", "$interval", "$timeout", "appConstants", "$sce", "$rootScope", "$location", "$templateCache", "$interpolate", "miscSvgConstants", function ($scope, $interval, $timeout, appConstants, $sce, $rootScope, $location, $templateCache, $interpolate,miscSvgConstants) {


        function resetHearts() {
            $scope.hearts = 3;
        }
        /*NOTE that this scope is reset on every level change because it resets the route*/
        function init() {

            $scope.trustAsHtml = $sce.trustAsHtml;
            $scope.hintIconHtml = $sce.trustAsHtml(miscSvgConstants.hint);

            resetHearts();

            if (angular.isDefined($scope.gameData.timeOutStart)) {
                updateTimeoutTime();
                startTimeoutInterval();
            }

            $scope.level = appConstants.getLevelFromUrl($location.url());
            //console.log('level:' + JSON.stingify($scope.level));

            /*Does the user need to buy this level?*/
            var compareToBilling = appConstants.compareLevel($scope.level, appConstants.billingLevel);
            if (compareToBilling == 'gt' || compareToBilling == 'eq') {
                $scope.billing = true;
            }
            $scope.shouldShowIab = function () {
                return $scope.billing && $scope.gameData.purchaseStatus != 'success';
            }


            $scope.levelNumber = appConstants.getLevelNumber($scope.level);
            $scope.modalObject = {
                html: '',
                close: function () { }
            };

            function getLastLevel() {
                var level = $rootScope.gameData.level;
                if (angular.isUndefined(level)) return;
                return appConstants.getLevelNumber(level)
            }

            $scope.isLastLevel = $scope.levelNumber == getLastLevel();

            /*NOTE that we only load leveldata once in this module because with level change, location changes */
            $scope.levelData = angular.copy(appConstants.getDbLevel($scope.level));//because we remove sentences and we do not want them to be removed from the db


        }



        /*TODO: 
			We should include different kinds of sentences in database
            but each level should only have one instance of each kind for example
            one of "I am a student" and "He is interested in Psychology"
            but it is very difficult to achieve this
        */

        $scope.hintTap = function () {
            if ($scope.gameData.timeOutStart) return;
            if ($rootScope.gameData.rewards.hint.count > 0) {
                $rootScope.gameData.rewards.hint.count--;
                $scope.$broadcast('GameHintEvent');
            }
        }

        $scope.showHelp = function () {
            if ($scope.gameData.level.n == 3) {
                var tpl = $templateCache.get('app/components/game/tour/help3WTemplate');
                $scope.modalObject = {
                    html: $interpolate(tpl)(),
                    isShown: true,
                    close: function () {
                        $scope.modalObject.isShown = false;
                    }
                };
            }
        }

        function nextLevel() {

            /*No need to implement this. the gamers go to the next levels even if it is not the last level
            if (!$scope.isLastLevel{
                //Just back to level list;
                $window.history.back();
                return
            }*/

            var nextLevel = appConstants.getNextLevel($scope.level);//Note that $scope.level is not necessarily equal to $rootScope.gameData.level

            /*Only save next level if this is the last level*/
            if ($scope.isLastLevel) {
                $rootScope.gameData.level = nextLevel;
                var levelNumber = appConstants.getLevelNumber($rootScope.gameData.level);
                if (angular.isDefined(levelNumber)) {
                    $rootScope.gameData.scoreLevelRecordsBatch.push({
                        levelNumber: levelNumber,
                        score: $rootScope.gameData.score
                    });
                } else {
                    console.log('Problem pushing a scoreLevelRecord; Level number is undefined');
                }
            }

            //this is for saveGame to work properly
            $timeout(locateToLevel, 0, true, nextLevel);

        }

        function locateToLevel(level) {
            $location.replace();
            $location.search('level', JSON.stringify(level));
        }

        if (angular.isDefined($rootScope.gameData)) {
            init();
        } else {
            console.log('gameData is undefined, waiting for GameDataLoadedEvent');
            $scope.$on("GameDataLoadedEvent", init);
        }

        $scope.$on('ReadyForNextLevelEvent', function () {

            if ($scope.levelNumber == 1) {
                $scope.cracker = new Crackers();
                $scope.cracker.play();

                $scope.modalObject = {
                    html: $templateCache.get('app/components/game/tour/firstLevelCompleted'),
                    interpolate:true,
                    isShown: true,
                    close: function () {
                        nextLevel();
                    }
                };
            } else if ($scope.levelData.gameType != 'ordinal') {
                handleNonOrdinalGameSuccess();
            } else {
                nextLevel();
            }
        })

        $scope.$on('ReportProgressEvent', function (event, progress) {
            $scope.gameProgress = progress;
        })


        $scope.$on('HeartsDownEvent', function (event, value) {
            $scope.hearts -= value;
            if ($scope.hearts == 0) {
                resetHearts();
                $scope.gameData.timeOutStart = (new Date()).getTime();
                $scope.gameData.timeOutSeconds = 30;
                startTimeoutInterval();
            }


        })

        $scope.$on('ShowModalEvent', function (event, value) {
            value.isShown = true;
            if (angular.isUndefined(value.close)) {
                value.close = function () {
                    $scope.modalObject.isShown = false;
                }
            }
            $scope.modalObject = value;
        });



        function startTimeoutInterval() {
            $scope.timeoutInterval = $interval(updateTimeoutTime, 500);
        }
        function updateTimeoutTime() {
            if (angular.isUndefined($scope.gameData)) return;
            if (!$scope.gameData.timeOutStart) return;
            var seconds = Math.floor($scope.gameData.timeOutSeconds - ((new Date()).getTime() - $scope.gameData.timeOutStart) / 1000);
            if (seconds < 0) {
                delete $scope.gameData.timeOutStart;
                $interval.cancel($scope.timeoutInterval);
            }
            var minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
            $scope.timeoutTime = (('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2));

        }

        $scope.$on('$destroy', function () {
            if ($scope.timeoutInterval)
                $interval.cancel($scope.timeoutInterval);

            if (angular.isDefined($scope.cracker)) {
                $scope.cracker.stop();
                delete $scope.cracker;
            }
        })

        $scope.$on('GameDataSaveSuccessEvent', function () {
            console.log('GameDataSaveSuccessEvent captured in GameController');
        })



        function Crackers() {
            var modalBoxElm = document.getElementById("modal-box");
            var xrange = $scope.viewW / 2;
            var yrange = $scope.viewH / 2;
            var position = { x: 0, y: 0 };//todo fix this
            var rnd = appConstants.rnd;
            var props = [];
            var delay = 0;
            var moTimeline;
            var isAudioPlaying = false;
            
            for (var i = 0; i < 6; i++) {
                delay += rnd(500, 1000);
                props.push({ duration: rnd(1000, 2000), radius: { 0: rnd(yrange / 2) }, x: rnd(xrange / -2, xrange / 2), y: rnd(yrange / -2, yrange / 2), delay: delay });
            }
            var audio = new (function (mediaUrl) { //TODO create a factory for this
               
                // Play the audio file at url
                var audio = new Audio(mediaUrl);

                this.play = function () {
                    audio.play();
                    // Play audio
                   // my_media.play();
                }
            })('sound/fall-kick-1.mp3');



            function play() {
                moTimeline = new mojs.Timeline({ repeat: 100 });
                for (var i = 0; i < props.length; i++) {
                    moTimeline.add(renderBurst(props[i]));
                };
                moTimeline.play();
            }

            function renderBurst(prop) {

                var b = new mojs.Burst({
                    parent: modalBoxElm,
                    left: '50%',
                    top: '50%',
                    x: (position.x + prop.x) + 'px',
                    y: (position.y + prop.y) + 'px',
                    radius: prop.radius,
                    children: {
                        onStart: function () {
                            audio.play();
                        },
                        radius: 20,
                        delay: prop.delay,
                        duration: prop.duration,
                        shape: 'circle',
                        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                        count: 12,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                        isForce3d:true
                    }
                });
                console.log(b);
                return b;
            }

            function stop() {
                moTimeline.stop();
            }

            this.play = play;
            this.stop = stop;
        }




        function handleNonOrdinalGameSuccess() {

            var animFadeGame = new mojs.Html({
                el: '#game-container',
                opacity: { 1: .5 },
                duration: 300
            });

            function setupFadeoutAnimation() {
                /*Note that x and y should be set to end of the show feedbaclk animation*/
                var animFadeFeedbackOut = new mojs.Html({
                    el: '#feedback-container',
                    opacity: { 1: 0 },
                    x: '-50%',
                    y: '-50%',
                    duration: 500,
                    delay: 0
                });

                var animFadeGameOut = new mojs.Html({
                    el: '#game-container',
                    opacity: { .5: 0 },
                    duration: 500,
                    delay: 0,
                    onComplete: function () {
                        nextLevel();
                    }
                });

                animFadeGameOut.play();
                animFadeFeedbackOut.play();
            }

            var feedback = ['That was close!', 'Good job', 'Great work', 'Well done', 'Almost Perfect', 'Perfect'][$scope.hearts * 2 - 1];

            var animShowFeedback = new mojs.Html({
                el: '#feedback-container',
                opacity: { 0: 1 },
                duration: 300,
                x: '-50%',
                y: { '400%': '-50%' },
                onProgress: function () {

                }

            });
            //We set innerhtml and display after the element is moved to -50%,-400% (the mojs.Html constructor does this)

            var feedbackContainer = document.getElementById('feedback-container');
            feedbackContainer.innerHTML = '<div class="feedback-text magic-center-formula" >' + feedback + '</div>';

            feedbackContainer.style.display = 'block';
            feedbackContainer.style['font-size'] = (20 / feedback.length).toPrecision(2) + 'em'

            var burst = new mojs.Burst({
                radius: { 0: 100 },
                count: 10,
                children: {
                    shape: 'polygon',
                    points: 5,
                    fill: { 'cyan': 'yellow' },
                    angle: { 360: 0 },
                    duration: 2000,
                    delay: 'stagger(0, 100)'

                },
                onComplete: setupFadeoutAnimation
            });

            var timeline = new mojs.Timeline;

            timeline.add(animFadeGame, animShowFeedback, burst);
            $timeout(function () { timeline.play(); }, 0)
        }



    }]);

angular.module('app.game')
    .controller('OrdinalGameController', ["$scope", "$interval", "$timeout", "$filter", "tileFactory", "gameConstants", "appConstants", "$sce", "$rootScope", "gameDataManager", "$window", "$interpolate", "$templateCache", function ($scope, $interval, $timeout, $filter, tileFactory, gameConstants,appConstants, $sce, $rootScope, gameDataManager,$window, $interpolate, $templateCache) {

        
        function init() {
            /*
            Separator which separates the words in a sentence
            note that you can use other separators and arrange sentences accordingly to
            place for example phrasal verbs in single tiles.
            */
            $scope.wordSep = " ";
            
            loadSentences();

            if ($scope.levelNumber == 1) {
                var tpl = $templateCache.get('app/components/game/tour/greetingsTemplate');
                var modalObject = {
                    html: $interpolate(tpl)(), //TODO this can be transferred to modal directive   
                    isShown: true,
                    close: function () {
                        $scope.modalObject.isShown = false;
                        showTiles();
                    }
                };
                $scope.$emit('ShowModalEvent',modalObject);
            } else {
                showTiles();
            }

            

            $scope.checkDestroyedPromise = $interval(checkDestroyed, 200);
            $scope.$on('$destroy', function () {
                if ($scope.checkDestroyedPromise)
                    $interval.cancel($scope.checkDestroyedPromise);
            })

            //TODO: move this watch to rootScope, perhaps in app.config.js
            $scope.$watch('gameData.score', function (newValue, oldValue) {
                if (newValue > oldValue && !$scope.usedHintForThisLevel) {
                    checkForRewards();
                }
            })

        
        }


        function checkForRewards() {
            angular.forEach(gameConstants.RewardsPoints, function (value, key) {
                var lastScore = $rootScope.gameData.rewards[key].lastScore || 0;
                
                if ($rootScope.gameData.score > lastScore + value) {
                    $rootScope.gameData.rewards[key].lastScore = $rootScope.gameData.score;
                    if (angular.isUndefined($rootScope.gameData.rewards[key].count)){
                        $rootScope.gameData.rewards[key].count=1;
                    }else{
                        $rootScope.gameData.rewards[key].count++;
                    }
                }
            })
        }

        $scope.adjustTilesPadding = function () {
            
            if (!anyTiles()) return;
            var container = document.getElementById("tiles-container");
            
              
            if ($scope.tilePadding ==0)
            {
                /*Note than we need a centralized tilePadding, because we want to shrink all tiles for Dictionary view and
                then enlarge them to the original padding, so we need to store the appropriate padding*/
                $scope.tilePadding = Math.floor(($scope.viewH -100) / 2 / $scope.tiles.length);
            }else{
                var stepSize = Math.floor(($scope.viewH * 3 / 4 - container.offsetHeight) / 2 / $scope.tiles.length);
                 
                if (stepSize>0){ //We shrinked enough;
                    console.log("stepSize<0!");
                    console.log("viewH:" + $scope.viewH);
                    console.log("container.offsetHeight: " + container.offsetHeight);
                    return;
                }else{
                    $scope.tilePadding +=stepSize;
                    setTilesPadding($scope.tilePadding);
                }
            }
            setTilesPadding($scope.tilePadding);
            $timeout($scope.adjustTilesPadding, 0)
        }

        function setTilesPadding(p){
            for (var i = 0; i < $scope.tiles.length; i++) {
                $scope.tiles[i].padding = p;
                $scope.tiles[i].setMargin(p/4);
            }
        }

        function resetTilesZIndex(){
            for (var i = 0; i < $scope.tiles.length; i++) {
                $scope.tiles[i].zIndex=0;
            }
        }

        function isAnyDefShown(){
            for (var i=0;i<$scope.tiles.length;i++)
            {
                if ($scope.tiles[i].isDefShown) return true;
            }
            return false;
        }

        $scope.tileTap = function (t) {
            if (isAnyDefShown()) return;
            if (angular.isDefined(t.mojsTimeline)){
                t.mojsTimeline.pause();
                t.mojsTimeline.playBackward();
            }
            if (t.destroyed) return;
            //console.log('tile tapped');
            //console.log(t);

            var newWord = t.word;
            var newSentence = $scope.currentSentenceArr.concat(t);
            //console.log(newSentence);
            var check = checkSentence(newSentence);
            //console.log('check:'+JSON.stringify(check));
            if (check.result) {
                t.selected = true;
                $scope.currentSentenceArr = newSentence;
                if (check.result == "exact") {//todo:delay a bit
                    removeTiles($scope.currentSentenceArr);
                    removeSentence(check.sentence);
                    reportProgress();
                }
            } else {
                if (t.selected || t.notifyOpacity > .2) return;
                handleWrongWord(newWord);
            }
            
        }

        

        function handleWrongWord(word){
            $scope.$emit('HeartsDownEvent',.5);
            $scope.gameData.firstFirstWordWrong = $scope.gameData.firstFirstWordWrong || 0;
           // if ($scope.gameData.firstFirstWordWrong <3){
            //    $scope.gameData.firstFirstWordWrong++;
                if ($scope.currentSentenceArr.length==0){
                    var tpl = $templateCache.get('app/components/game/tour/firstFirstWordWrong');
                    
                var modalObject = {
                    html: tpl,
                    interpolate:{word:word},
                    isShown: true,
                    close: function () {
                        $scope.modalObject.isShown = false;
                    }
                };
               
                $scope.$emit('ShowModalEvent',modalObject);
                }else{
                    //TODO handle other types of first wrongs
                }
            
           // }
    
        }

        $scope.tileTouchStart = function(tile){
            if (isAnyDefShown()) return;
            resetTilesZIndex();//reset zIndex of others
            tile.zIndex = 100;
           
            var tileCenter = tile.getCenter();
            var tileSize = tile.getSize();
            var boxWidth = $scope.viewW-20;
            var boxHeight = boxWidth*tileSize.h/tileSize.w;
            var boxOffset = ($scope.viewH - boxHeight)/2;
            var boxCenter ={x:$scope.viewW/2, y: boxOffset+boxHeight/2};
            var tb = -1*(boxHeight-tileSize.h)/2;
            var lr = -1*(boxWidth-tileSize.w)/2;
            tile.boxLeft = lr;
            tile.boxRight = lr;
            tile.boxTop = tb;
            tile.boxBottom = tb;
            tile.boxPaddingTop = tileSize.h+10;
            var startScale = tileSize.w/boxWidth;
            var midScale = 1.3* startScale;
            tile.transformBox = 'scale('+startScale+')';
            
            var tw1 = new mojs.Tween({ 
                onUpdate:  function(progress){
                    tile.boxOpacity = progress;
                    var scale = startScale + progress*(midScale-startScale);
                    tile.transformBox = 'scale('+scale+')';
                    $scope.$apply();
                },
                onComplete: function(isForward){
                    if (isForward){
                      //  appConstants.tts(tile.word);
                    }
                },
                duration:appConstants.shortTouchTime,
                easing:'quad.out'
              });
            
            
            var tw2 = new mojs.Tween({ 
            onUpdate:  function(progress, isForward){
                
                var x =  progress* (boxCenter.x-tileCenter.x);
                var y =  progress* (boxCenter.y-tileCenter.y);
                tile.transform = 'translate3d('+x+'px,'+y+'px,0px)';
                var innerY = progress*(-1*boxHeight/2+10);
                tile.transformInner='translateZ(0) translateY('+innerY+'px)';
                var scale = midScale + progress*(1-midScale);
                    tile.transformBox = 'translateZ(0) scale('+scale+')';
                $scope.$apply();
                
            },
            onStart: function (isForward) {
                /*NOTE that currently this function fires three times, in particular, two times when anim played backward so we moved tts to onComplete of tw1*/
                tile.isDefShown = isForward; //set tile.isDefShown to true or false when the def box is enlarged or shrinked
                tile.def = isForward?appConstants.getDefinition(tile.word):'';
                $rootScope.tileWithDefShown = isForward?tile:undefined; //This is needed both to handle  preventing location change on back and to close the def box on back
                
            },
            delay:appConstants.shortTouchTime,
            duration:appConstants.shortTouchTime+400,
            easing:'quad.out'
            });

            tile.mojsTimeline = new mojs.Timeline();
            tile.mojsTimeline.add(tw1);
            tile.mojsTimeline.add(tw2);
            tile.mojsTimeline.play();
        }

        $scope.tileDefClose = function(tile){
            if (angular.isDefined(tile.mojsTimeline)){
                tile.mojsTimeline.pause();
                tile.mojsTimeline.playBackward();
            }
        }

        $scope.$on('LocationChangePreventedEvent',function(){
            if (angular.isDefined($rootScope.tileWithDefShown)){
                $scope.tileDefClose($rootScope.tileWithDefShown)
            }
        });
       
        function hintNextWord() {
            
            $scope.usedHintForThisLevel = true;
            var check = checkSentence($scope.currentSentenceArr);
            if (check.result) {
                var nextWord = check.nextWord;
            } else {
                //the first word of the first sentence;
                var nextWord = $scope.sentences[0].split($scope.wordSep)[0];
            }
            for (var i = 0; i < $scope.tiles.length; i++) {
                var tile = $scope.tiles[i];
                if (tile.word == nextWord) {
                    $scope.tileTap(tile);
                    return;
                }
            }
        }

        
        $scope.$on('GameHintEvent',hintNextWord);

        function checkDestroyed() {
            if (anyTiles()) {
                var destroyedCount = $filter('filter')($scope.tiles, { destroyed: true }).length;
                $scope.remainingTiles = $scope.tiles.length - destroyedCount;
                if ($scope.remainingTiles == 0) {
                    if ($scope.checkDestroyedPromise)
                        $interval.cancel($scope.checkDestroyedPromise);
                    console.log('TODO emit nextlevel');
                    $scope.$emit('ReadyForNextLevelEvent');
                }
            }
        }
        function loadSentences() {

            $scope.containerOpacity = 0;
            $scope.sentences = $scope.levelData.sentences;
            $scope.numberOfLevelSentences = $scope.sentences.length;
            $scope.tiles = [];

            $scope.sentencesjagged = [];
            angular.forEach($scope.sentences, function (sentence) {
                this.push(sentence.split($scope.wordSep))
            }, $scope.sentencesjagged);
            //console.log('sentencesjagged:');
            //console.log($scope.sentencesjagged);
            for (var i = 0; i < $scope.sentencesjagged.length; i++) {
                var sWords = $scope.sentencesjagged[i];
                for (var j = 0; j < sWords.length; j++) {
                    // color =colors[(Math.random() * colors.length) | 0]
                    /*NOTE: tile is configured in a way that it does not notify scores when scoreUpFunc is undefined*/
                    $scope.tiles.push(new tileFactory(sWords[j],
                        ($scope.isLastLevel) ? function (score) {
                            $scope.gameData.score += score;
                        } : undefined,
                        function () { $scope.$apply() }));
                }
            }

            $scope.tilePadding = 0;
            $timeout($scope.adjustTilesPadding, 100);
            $scope.currentSentenceArr = [];
        }

        function showTiles(){
            angular.forEach($scope.tiles, function(t) {
                t.show();
              });
        }

        function checkSentence(tilesArray) {
            var sentence = tilesArray.map(function (t) { return t.word; }).join($scope.wordSep);
            for (var i = 0; i < $scope.sentences.length; i++) {
                var s = $scope.sentences[i];
                var out = { sentence: sentence, result: false };
                if (s == sentence) {
                    out.result = "exact";
                    break;
                }
                if (s.indexOf(sentence + $scope.wordSep) == 0) {
                    out.result = "start";
                    out.nextWord = s.substr(sentence.length + 1).split($scope.wordSep)[0];
                    break;
                }
            }
            return out;
        }

        function removeTiles(tilesArray) {
            for (var i = $scope.tiles.length - 1; i >= 0; i--) {
                for (var j = 0; j < tilesArray.length; j++) {
                    if ($scope.tiles[i].myid == tilesArray[j].myid) {
                        /*Note that this code works even if loop was not in reverse order
                         because destroying usually involves some animation that loop precedes them*/
                        $scope.tiles[i].destroy();

                    }
                }
            }
            $scope.currentSentenceArr = [];
        }

        function removeSentence(sentence) {
            var i = $scope.sentences.indexOf(sentence);
            $scope.sentences.splice(i, 1);
        }

        function reportProgress(){
            var progress = ($scope.numberOfLevelSentences-$scope.sentences.length)/$scope.numberOfLevelSentences*100;
            $scope.$emit('ReportProgressEvent',progress);
        }

        function anyTiles() {
            return ($scope.tiles || []).length > 0;
        }

        if (angular.isDefined($rootScope.gameData)){
            init();
        }else{
            console.log('ordinalGameController: gameData is undefined, waiting for GameDataLoadedEvent');
            $scope.$on("GameDataLoadedEvent",init);
        }

    }]);
angular.module('app.game').directive('etOrdinalGame',function(){
    return{
        templateUrl: 'app/components/game/ordinalGameView',
        controller: 'OrdinalGameController',
        scope:true,
        link: function(scope, element, attrs){

            
          
        }
    }
});

angular.module('app.game').directive('etRadio', ["appUtils", function (appUtils) {
    return {
        scope: {
            'select': '&onSelect',
        },
        link: function (scope, element, attrs) {

            /*Animation Setup*/
            var RADIUS = 28;
            scope.animCircle = new mojs.Shape({
                parent: element[0],
                className: 'mojs-touch-anim',
                left: 0, top: 0,
                stroke: '#eeefef',
                strokeWidth: { 48: 0 },//Note that these can't be variables in ES5
                fill: 'none',
                scale: { 0: 1, easing: 'quad.out' },
                radius: RADIUS,
                duration: 450,
                opacity: { 1: 0 },
                onStart: animStart,
                onProgress: animProgress,
                onComplete: animEnd
            });

            scope.animTimeline = new mojs.Timeline({ speed: .5 });
            scope.animTimeline.add(scope.animCircle);

           // element[0].addEventListener("touchstart", function (e) {
          

            element[0].addEventListener("mousedown", function (e) {
                if (scope.isAnimating) return;
                var el = angular.element(e.target);
                scope.touchMovedTooMuch = false;//reset
                scope.selectFired = false;
                scope.targetElement = e.target;
               // var t = e.touches[0];
                scope.touchStartPoint = e;
                //var op = t.target.offsetParent;
                var op = scope.targetElement.offsetParent;
            
                var opScrollTopRecursive = scrollTopRecursive(op);
                scope.animCircle.tune({
                    x: e.clientX - scope.targetElement.offsetLeft - op.offsetLeft - op.clientLeft,
                    y: e.clientY - scope.targetElement.offsetTop - op.offsetTop - op.clientTop + opScrollTopRecursive
                });
                scope.animTimeline.replay();
            });
            
            function scrollTopRecursive(el){
                var out = el.scrollTop;
                if (el.parentElement!=null){
                    out+= scrollTopRecursive(el.parentElement)
                }
                return out;
            }
            
            function animStart() {
                scope.isAnimating = true;
            }
            function animProgress(p){
                if (p>.5 & !scope.selectFired){
                    
                    if (scope.touchMovedTooMuch) return;
                    scope.select()
                    scope.selectFired=true;
                }
            }
            //TODO trigger earlier by progress event to have some beautiful overlap animation.
            function animEnd() {
                scope.isAnimating = false;
                /*NOTE that we do not have to remove animation here because the user normally touches an alternative only once
                Maybe because this is NOT actually a radio!*/
            }

            function hideMojoAnim() {
                angular.element(document.getElementsByClassName('mojs-touch-anim')[0]).css({ display: 'none' });
            }

            function showMojoAnim() {
                var mojo = document.getElementsByClassName('mojs-touch-anim');
                if (mojo.length > 0) {
                    angular.element(mojo).css({ display: 'block' });
                }
            }

            element[0].addEventListener("touchmove", function (e) {
                var t = e.touches[0];
                var d = appUtils.getTouchesDistance(t, scope.touchStartPoint);
                if (d > 10) {
                    scope.touchMovedTooMuch = true;
                }
            })

        }
    }
}])

angular.module('app.game')
  .directive('etReward', ['gameConstants', '$timeout', function (gameConstants, $timeout) {
    'use strict';
    return {
      scope: {
        rewardCount: '=count',
        rewardLeftPercent: '=leftPercent',
        rewardTopPercent: '=topPercent',
        iconHtml: "="
      },
      link: function (scope, element, attrs) {
				/*var divs = angular.element(element[0]).childNodes;
				var icon = divs[0];
				var anim = divs[1];
				
				console.log('icon:');
				console.log(icon);
				
        var svg = 		
        icon.innerHTML+= svg;
				anim.innerHTML+= svg;
				*/

        scope.iconStyle = { 'z-index': 1, 'left': scope.rewardLeftPercent + '%', 'top': scope.rewardTopPercent + '%' };
        scope.animStyle = { 'z-index': 1, 'left': scope.rewardLeftPercent + '%', 'top': scope.rewardTopPercent + '%' };

        scope.updateAnim = function () {
          scope.$apply(function () {
            scope.animStyle['transform'] = 'translate(-50%,-50%) scale(' + scope.animScale + ')';
            scope.animStyle['-webkit-transform'] = scope.animStyle['transform']
            scope.animStyle['opacity'] = scope.animScale / 5;
          });
        }
        scope.$watch('rewardCount', function (newValue, oldValue) {
          if (newValue > (oldValue || 0)) {
            console.log('rewardCount increased');
            $timeout(function () {
              new mojs.Tween({ 
                repeat:   0,
                onUpdate:  function(progress){
                  scope.animScale = 5 + (1-5)*progress;
                  scope.updateAnim();
                },
                duration:500,
                easing:'quad.out'
              }).play()
              
            }, 0);
          }
        });

      },
      template: '<div ng-show="rewardCount" class="reward" ng-style="iconStyle"><div ng-bind-html="iconHtml"></div><div class="count">{{rewardCount}}</div></div>' +
        '<div ng-hide="(animScale || 1)==1" class="reward" ng-style="animStyle"><div ng-bind-html="iconHtml"></div>',
      controller: ['$scope', '$timeout', '$location', function ($scope, $timeout, $location) {
      }]
    }
  }])
angular.module('app.leaderboard')
.directive('etAvatars', function(){
    return{
        controller: ["$scope", "avatarsConstants", "$sce", function($scope, avatarsConstants,$sce){
           
        }],
        templateUrl:'app/components/leaderboard/avatarsView'
    }
})
angular.module('app.leaderboard')
    .controller('LeaderboardController', ["$scope", "$timeout", "gameDataManager", "leaderboradResoruce", "deviceResoruce", "$rootScope", "avatarsConstants", "designConstants", "$sce", function ($scope, $timeout, gameDataManager, leaderboradResoruce, deviceResoruce, $rootScope, avatarsConstants, designConstants, $sce) {
        
        $scope.avatars = avatarsConstants;
        $scope.trustAsHtml = $sce.trustAsHtml;

        $scope.oksvg = designConstants['ok(opeclipart.org).svg'];
        
        if (angular.isDefined($rootScope.gameData)) {
            init();
        } else {
            console.log('gameData is undefined, waiting for GameDataLoadedEvent');
            $scope.$on("GameDataLoadedEvent", init);
        }


        function init() {
            loadLeaderborad();
            /*We don't use $scope.gameData because we may change username or avatarKey */
            $scope.username = $scope.gameData.username;
            $scope.avatarKey = $scope.gameData.avatarKey;
        }

        $scope.tryConnect = function () {
            $scope.failMessage = undefined;
            init();
        }

        //TODO: change the name of function, because it also GETs device from deviceResource
        function loadLeaderborad() {

            $scope.DeviceResource = new deviceResoruce();
            $scope.DeviceResource.get({ uuid: $scope.deviceUuid },
                function (data) {
                    console.log(data);
                },
                function (resp) {
                    console.log(resp);
                    if (resp.status == 404) { //TODO: also check the message
                        /*NOTE 1) This will not happen when there is no internet connection
                        that if this happens and there is a username in gameData this is because of 
                        inconsistency between the server and the client. For example, we removed the data from the server in the testing phase
                        So the following lines are unnecessary but we implement this for testing phase*/
                        /// Remove inconsistency
                        delete $scope.gameData.username;
                        delete $scope.gameData.avatarKey;

                        ///
                        $scope.showAvatarPopup = true;
                    }
                });

            /*
            NOTE
            When we use leaderboradResoruce($rootScope.deviceUuid).get(), the promise
            gets created and it starts connecting with the resource, we don't want that so we create
            a function (leaderboardPromiseFunc) that creates the promise when needed (after uploading record batch if needed)
            */

            var createLeaderboardPromise = function () {
                return leaderboradResoruce($rootScope.deviceUuid).get().$promise;
            }

            if ($scope.gameData.scoreLevelRecordsBatch.length > 0) {
                var promise = gameDataManager.uploadRecordsBatchPromise($scope.deviceUuid, $scope.gameData).then(
                    function (uploadedLevels) {
                        $scope.gameData.scoreLevelRecordsBatch = $scope.gameData.scoreLevelRecordsBatch.filter( //remove uploaded levels from the batch
                            function (x) {
                                return !~uploadedLevels.indexOf(x.levelNumber)
                            });
                        return createLeaderboardPromise();
                    }
                )
            } else {
                var promise = createLeaderboardPromise();
            }


            setupMojsConnectAnim();

            $timeout(function () {
                promise.then(function (result) {
                    $scope.data = result;
                },
                    function () { //failure function
                        $scope.failMessage = "Snap! We can't connect now! Check the connection and try again :)";
                    }
                );
            }, 500); //a delay for a better ui


           
        };


        $scope.tapAvatar = function (k) {
            $scope.avatarKey = k;
        }

        $scope.saveUsernameAvatar = function () {
            if ($scope.usernamePrecheck.usernameAvailable) {
                $scope.DeviceResource.savenew({ uuid: $scope.deviceUuid, username: $scope.username, avatarKey: $scope.avatarKey },
                    function () {
                        var mojsHtml = new mojs.Html({
                            // selector for HTMLElement
                            el: '#ok-username',
                            background: { 'white': 'green' },
                            color: { 'black': 'white' },
                            duration: 300,
                            onComplete: function () {
                                $timeout(function () {
                                    $scope.showAvatarPopup = false;
                                    $scope.gameData.username = $scope.username;
                                    $scope.gameData.avatarKey = $scope.avatarKey;
                                }, 0);
                            }
                        });

                        mojsHtml.play();

                    }, function () {

                    });
            } else {
                var mojsHtml = new mojs.Html({
                    // selector for HTMLElement
                    el: '#username-input',
                    background: { 'white': 'crimson' },
                    duration: 300,
                    isYoyo: true,
                    repeat: 1,
                    onComplete: function () {
                    }
                });

                mojsHtml.play();
            }
        }

        $scope.$watch("showAvatarPopup?username:''", function (newValue) {
            if ($scope.showAvatarPopup && angular.isDefined($scope.username) && newValue.trim().length > 0) {
                var p = $scope.usernamePrecheckTimeoutPromise;
                if (angular.isDefined(p)) {
                    $timeout.cancel(p);
                }
                $scope.usernamePrecheckTimeoutPromise = $timeout(function () {
                    $scope.DeviceResource.precheck({
                        uuid: $scope.deviceUuid,
                        username: newValue
                    }, function (data) {
                        console.log("Data from precheck:" + JSON.stringify(data));
                        if ($scope.username == data.username) {
                            $scope.usernamePrecheck = data;
                        } else {
                            console.log('But username changed from the request');
                        }
                    }, function (resp) {
                        $scope.usernamePrecheck = resp;
                    });
                }, 500);
            } else {
                $scope.usernamePrecheck = { empty: true };
            }
        });

        function setupMojsConnectAnim(isForward, isYoyo) {

            var dashoffset = {};
            dashoffset[(Math.random() * 150 - 50) + '%'] = '100%';//-50 t0 100
            if (angular.isUndefined($scope.mojsConnectAnim)) {
                //TODO move to a factory
                var shape = {
                    shape: 'circle',
                    parent: '#connect-container',
                    className: 'mojs-connect-anim',
                    left: '50%', top: '50%',
                    stroke: '#eeefef',
                    // strokeWidth: { 48: 0 },//Note that these can't be variables in ES5 so you should set it according to radius yourself
                    fill: 'none',
                    // scale: { 0: 1 },
                    strokeDasharray: '100%',
                    strokeWidth: 10,
                    strokeDashoffset: dashoffset,
                    radius: 50,
                    duration: 1500,
                    opacity: { 0: 1, easing: 'quad.out' },
                    onComplete: function () {
                        if (angular.isUndefined($scope.data || $scope.failMessage)) {
                            setupMojsConnectAnim();
                        } else {
                            angular.element(document.querySelectorAll('.mojs-connect-anim')[0]).css({ display: 'none' });
                        }
                    },
                    angle: { '0': 180 }
                };

                $scope.mojsConnectAnim = new mojs.Shape(shape);
                $scope.mojsConnectAnim.play();
            } else {

                $scope.mojsConnectAnim.tune({ strokeDashoffset: dashoffset })
                $scope.mojsConnectAnim.replay();
            }
        }


    }]);

angular.module('app.levellist').controller('LevellistController', ['$scope', '$rootScope', 'gameDataManager', '$timeout','$interval', '$location','appConstants', function ($scope, $rootScope, gameDataManager, $timeout, $interval, $location,appConstants) {

    
    

}]);
angular.module('app.levellist').directive('etLevelList', ["appConstants", "appUtils", "$timeout", "$rootScope", "$location", "$templateCache", "$interpolate", function (appConstants, appUtils, $timeout, $rootScope, $location, $templateCache, $interpolate) {
    return {
        template: '<div class="levellist container-fluid"></div>',
        controller: 'LevellistController',
        link: function (scope, element, attrs) {
            scope.blockColors = ['#1e90ff', 'red', 'green', '#1e90ff', '#ffd700', '#bfff00'];

            function getStyle(n, i, accomplishedLevel, n_block_levels, gameType) {
                if (angular.isUndefined(gameType)) {
                    throw "gameType is undefined!";
                }
                var hue = scope.blockColors[n - 3];
                //var color = gradColor({ hue: hue, count: n_block_levels })[i];
                var colorDimmed = gradColor({ hue: hue, grad:.01});
                var color = gradColor({ hue: hue, grad:.99});
                var style = {  };
                style.color = 'white';
                var comp = appConstants.compareLevel({ n: n, i: i }, accomplishedLevel);
                if (comp == 'lt' || comp == 'eq') {
                    style.background = color;
                    style.border = 'solid ' + color + ' 2px';
                }/* else if (gameType != 'ordinal') {
                    style.background = '#efefef';
                }*/else{
                    style.background = colorDimmed
                    style.border = 'solid ' + colorDimmed + ' 2px';
                }
                return style;
            };

            //TODO: destroy event handlers and other things on destroy
            scope.$on('LevelListLoaded', function () {
                var accomplishedLevel = scope.gameData.level;
                var levelTpl = $templateCache.get('app/components/levellist/levelTemplate');
                //blocksHTML = '';
                var staggerInterval=200;
                for (var n = appConstants.nWordsMin; n <= appConstants.nWordsMax; n++) {
                    
                    var block = scope.db[n];
                    var blockInner = '';
                    for (var i = 0; i < block.length; i++) {
                        var interpolator = $interpolate(levelTpl);
                        var level = block[i];

                        var style = getStyle(n, i, accomplishedLevel, block.length, level.gameType);

                        blockInner += interpolator({
                            n: n,
                            i: i, 
                            style:style,
                            gameType:level.gameType,
                            levelNumber:level.levelNumber
                        });
                    }

                  
                    function appendBlock(inner){
                 
                            var div = document.createElement("div");
                            div.innerHTML = '<div class="block row">' + inner + '</div>';
                            element[0].children[0].appendChild(div);
                        
                    }
                    if (n == appConstants.nWordsMin){
                        appendBlock(blockInner);
                    }else{
                        $timeout(appendBlock, n*staggerInterval,false,blockInner);
                        if (n == appConstants.nWordsMax){
                            $timeout(setupMojsAccomplishedAnim, (n+1)*staggerInterval);
                        }
                    }
                }

                //TODO move to a factory
                /*Animation Setup*/
                scope.animCircle = new mojs.Shape({
                    parent: document.body,
                    className: 'mojs-touch-anim',
                    left: 0, top: 0,
                    stroke: '#eeefef',
                    strokeWidth: { 48: 0 },//Note that these can't be variables in ES5 so you should set it to 2*radius yourself
                    fill: 'none',
                    scale: { 0: 1, easing: 'quad.out' },
                    radius: 28,
                    duration: 450,
                    opacity: { 1: 0 },
                    onStart: animStart,
                    onComplete: animEnd,
                    onProgress: animProgress

                });

                scope.animTimeline = new mojs.Timeline({ speed: .5 });
                scope.animTimeline.add(scope.animCircle);
               // element[0].addEventListener("touchstart", function (e) {
                element[0].addEventListener("mousedown", function (e) {
                    if (scope.isAnimating) return;
                    
                    var el = angular.element(e.target);
                    //console.log(el.parent());
                    if (el.prop('tagName')=='svg' && el.parent()[0].className == 'mojs-accomplished-anim'){
                        el = angular.element(el.parent()[0].parentElement.getElementsByTagName('span')[0]);
                    } 
                    if (el.hasClass('level')) {//clicked on an outer div, check if it has class level 
                        var spans = el.find('span');
                        //console.log(spans);
                        if (spans.length == 1) {
                            el = angular.element(spans[0]);
                        }
                    }
                    if (el.hasClass('level-num')) {
                        showMojoAnim();
                        scope.touchMovedTooMuch = false;//reset
                        scope.targetElementjQ = el;
                       // var t = e.touches[0];
                       var t=e;
                      console.log(t);
                      
                     
                        scope.touchStartPoint = t;
                       // scope.animCircle.tune({ x: 0, y: 0 });
                        scope.animCircle.tune({ x: t.clientX, y: t.clientY });
                        scope.animTimeline.replay();
                    }
                });
                function animStart() {
                    scope.isAnimating = true;
                }

                function animProgress(p){
                    if (scope.touchMovedTooMuch) {
                        scope.animTimeline.reset();
                        hideMojoAnim();
                        scope.isAnimating = false;
                        return;
                    }
                    if (p>.7){
                        var el = scope.targetElementjQ;
                        if (el.hasClass('level-num') && gotoLeveL(el)){
                            angular.element(document.querySelectorAll('.mojs-touch-anim')[0]).remove();
                            scope.animTimeline.reset();
                        }
                    }
                }
                
                function animEnd() {
                    hideMojoAnim();
                    scope.isAnimating = false;
                }

                function hideMojoAnim() {
                    angular.element(document.querySelectorAll('.mojs-touch-anim')[0]).css({ display: 'none' });
                }

                function showMojoAnim() {
                    var mojo = document.getElementsByClassName('mojs-touch-anim');
                    if (mojo.length > 0) {
                        angular.element(mojo).css({ display: 'block' });
                    }
                }

                element[0].addEventListener("touchmove", function (e) {
                    var t = e.touches[0];
                    var d = appUtils.getTouchesDistance(t, scope.touchStartPoint);
                    if (d > 10) {
                        scope.touchMovedTooMuch = true;
                    }
                })
                /*
                element[0].addEventListener("touchend", function (e) {
 
                    
                });
              */


                function setupMojsAccomplishedAnim() {
                    var accomplishedLevel = scope.gameData.level;
                    var id = "level_n" + accomplishedLevel.n + "i" + accomplishedLevel.i;
                    var level_wrap = document.getElementById(id);
                    if (level_wrap == null){
                        console.log('warning: id was not found:'+id+'; setupMojsAccomplishedAnim failed');
                        return;
                    }
                    var parent = level_wrap.getElementsByTagName('div')[0];
                    var parentWidth = parent.clientWidth;
                        var shape = {
                            delay:500,
                            shape:'rect',
                            parent: parent,
                            className: 'mojs-accomplished-anim',
                            left: '50%', top: '50%',
                            stroke: '#eeefef',
                           // strokeWidth: { 48: 0 },//Note that these can't be variables in ES5 so you should set it according to radius yourself
                            fill: 'none',
                           // scale: { 0: 1 },
                            strokeDasharray:  '100%',
                            strokeWidth: 10,
                            strokeDashoffset: {},
                            radius: parentWidth/2,
                            duration: 2500,
                            repeat:999,
                            opacity: { 0: 1 ,easing:'quad.out'},
                        };
                        var rnd = -1*Math.random()*100;
                        shape.strokeDashoffset[rnd+'%'] = '100%';
                        scope.mojsAccomplishedAnim = new mojs.Shape(shape);
                        scope.mojsAccomplishedAnim.play();
                };


                function gotoLeveL(el) {
                    var n = el.attr('level-n');
                    var i = el.attr('level-i');
                    console.log(el.attr('level-n') + ',' + el.attr('level-i'));
                    var lastLevel = $rootScope.gameData.level;
                    if (n > lastLevel.n) return;
                    if (n == lastLevel.n && i > lastLevel.i) return;
                    $timeout(function () { $location.path('game').search('level', JSON.stringify({ n: n, i: i })); }, 0);
                    return true;
                }

            });

            if (angular.isDefined($rootScope.gameData)) {
                loadLevels();
            } else {
                console.log('gameData is undefined, waiting for GameDataLoadedEvent');
                scope.$on("GameDataLoadedEvent", loadLevels);
            }


            

            function loadLevels() {

                console.log($rootScope.gameData);
                /*mismatch between saved game and current database, probably an updated database*/
                if (!appConstants.checkSavedGameWithDatabase($rootScope.gameData.level)) {
                    $rootScope.gameData.level = appConstants.getNextLevel($rootScope.gameData.level);
                }

                scope.db = DB;

                scope.$broadcast('LevelListLoaded');
            }


        }
    }
}]);

/*angular.module('app.resource')
.constant('resourceConstants', {
    "ApiUrl": "http://localhost:58000/api/ET"
    }
);
*/
angular.module('app.resource')
.constant('resourceConstants', {
    "ApiUrl": "https://playlin.ga/api/ET"
    }
);
angular.module('app.resource')  
.factory('deviceResoruce', ['$resource', 'resourceConstants','appConstants', function ($resource, resourceConstants, appConstants) {
    return function () {
        var actions = {
                precheck: {
                    method:'POST',
                    params:{extra:'Precheck',uuid:''}
                },
                savenew:{
                    method:'POST',
                    params:{uuid:''}
                }
            };
       return $resource(resourceConstants["ApiUrl"] + '/Devices/:extra/:uuid', {uuid:'@uuid', extra:'@extra'}, actions);
    }
}]);

angular.module('app.resource')  
.factory('leaderboradResoruce', ['$resource', 'resourceConstants','appConstants', function ($resource, resourceConstants, appConstants) {
    return function (deviceUuid) {
        var actions = {
                get: {
                    method: 'GET',
                    params: {pretty:true,neardeviceUuid:deviceUuid}
                }
            };
       return $resource(resourceConstants["ApiUrl"] + '/ScoreLevelRecords', {}, actions);
    }
}]);

angular.module('app.resource')    
	.factory('scoreLevelRecordResource', ['$resource', 'resourceConstants','appConstants', function ($resource, resourceConstants, appConstants) {
        return function (deviceUuid) {
			var actions = {
                    save: {
                        method: 'POST'
					}
				};
           return $resource(resourceConstants["ApiUrl"] + '/ScoreLevelRecords/' + deviceUuid, {}, actions);
        
        }
    }]);
angular.module('app.review').controller('ReviewController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.reviewType = $routeParams.reviewType;

}]);
angular.module('app.game').controller('FourAlternativesGameController', ["$scope", "$timeout", function($scope,$timeout){

    $scope.sentences = $scope.levelData.sentences;
    $scope.currentSentenceIndex = 0;

    $scope.tapAlt = function (alt) {
        var target = $scope.sentences[$scope.currentSentenceIndex].targetWord;
        if (target == alt) {
            $scope.sentences[$scope.currentSentenceIndex].isDone = true;
                reportProgress();
                nextSentence();
        }
    }

    function nextSentence() {
        if ($scope.currentSentenceIndex == $scope.sentences.length - 1) {
            $timeout(function(){$scope.$emit('ReadyForNextLevelEvent')},500);
        } else {
            $scope.currentSentenceIndex++;
        }
    }

    function reportProgress(){
        var numDone = $scope.sentences.filter(function(s){return s.isDone}).length;

        var progress = (numDone)/$scope.sentences.length*100;
        $scope.$emit('ReportProgressEvent',progress);
    }

}]);
angular.module('app.game').directive('etFourAlternativesGame',function(){
    return{
        templateUrl: 'app/components/game/fourAlternatives/fourAltView',
        controller: 'FourAlternativesGameController'
    }
});

angular.module('app.game').controller('ModalController', ["$scope", "$sce", "$interpolate", function ($scope, $sce, $interpolate) {
    $scope.$watch('modalObject', function (newValue) {

        if (angular.isDefined(newValue)) {
            var mObj = newValue;

            var html = mObj.html;
            if (mObj.interpolate) {
                if (mObj.interpolate === true) {//exactly true
                    html = $interpolate(html)();
                } else {
                    html = $interpolate(html)(mObj.interpolate);
                }

            }
            $scope.html = $sce.trustAsHtml(html);
        }
    });

    $scope.close = function () {
        $scope.modalObject.close();
        $scope.modalObject.isShown = false;
    }
}]);
angular.module('app.game').directive('etModal', function () {
    return {
        scope: { modalObject: '=' },
        templateUrl: 'app/components/game/modal/modalView',
        controller: 'ModalController',
        link: function (scope, element, attrs) {
            var el = angular.element(element[0]);
            var max_alpha = .5;
            
            var animDuration = 500;
                var anim = new mojs.Tween({
                    onUpdate: function (p) {
                       setTransitionStyle(p,true);
                       scope.$apply();
                    },
                    duration: animDuration,
                    easing: 'quad.out'
                });
            
            el.css('z-index', 200);
            el.css('position', 'absolute');
            el.css('top', 0);
            el.css('right', 0);
            el.css('left', 0);
            el.css('bottom', 0);
            el.css('display', 'none');

            setTransitionStyle(0);

            function setTransitionStyle(p, isDarkOverlay){
                if (isDarkOverlay){
                    el.css('background','rgba(0,0,0,'+p*max_alpha+')');
                }else{
                    el.css('background', 'rgba(0,0,0,0)');
                }
                var trans = 'translate3d(-50%,-50%,0) scale(' + p + ')';
                scope.boxStyle = { 'transform': trans, '-webkit-transform':trans };
                
            }
            scope.$watch('modalObject.isShown', function (newValue, oldValue) {
                if (newValue) {
                    anim.stop();
                    el.css('display', 'block');
                    anim.play();
                } else if (oldValue) {
                   setTimeout(destroy,animDuration);
                   anim.playBackward();
                }
            });

            scope.$on('$destroy', function () {
                destroy();
            });

            function destroy(){
                anim.stop();
                el.css('display', 'none');
            }
        }
    }
})
angular.module('app.game').directive('etHearts', function(){
    return {
        scope: {'heartsNumber':'=',
        'value':'='},
        templateUrl: 'app/components/game/hearts/heartsTemplate',
        link: function (scope, element, attrs){
          
              
            var burst1 = new mojs.Burst({
                parent :element[0],
                left: 0, top: '50%',
                x: '-50%', y:'-50%',
                isForce3d: true,
                count:    5,
                radius:   { 10: 50 },
                children: {
                  fill:   'white',
                  shape:  'line',
                  stroke: [ 'red', 'pink' ],
                  strokeWidth: 3, 
                  radius: 'rand(8, 15)',
                  radiusY: 0,
                  scale: { 1: 0 },
                  pathScale: 'rand(.5, 1)',
                  degreeShift: 'rand(-360, 360)',
                  isForce3d: true,
                }
              });
              scope.$watch('value', function(newVal, oldVal){
                if (newVal < oldVal){
                    burst1
                    .tune({ left: ((newVal+oldVal)/2/scope.heartsNumber)*100+'%'  })
                    .generate()
                    .replay();
                }
              })
            
        }
    }
})
angular.module('app.game').directive('etSingleHeart',function(){
    return {
        scope:{'value':'='},
        templateUrl: 'app/components/game/hearts/singleHeartTemplate',
        controller: ["$scope", "$sce", function($scope,$sce){
            $scope.svg='';
            function getSvg(value){
                var svg = '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="svg19871" sodipodi:docname="openclipart.org-remigho-like-heart-modified-twohalf.svg" viewBox="0 0 604.96 556.17" version="1.1" inkscape:version="0.91 r13725"> <defs id="defs8" /> <sodipodi:namedview id="base" fit-margin-left="0" inkscape:zoom="0.64" borderopacity="1.0" inkscape:current-layer="layer1" inkscape:cx="421.38391" inkscape:cy="285.0893" inkscape:window-maximized="1" showgrid="false" fit-margin-right="0" units="mm" inkscape:document-units="mm" bordercolor="#666666" inkscape:window-x="-8" inkscape:window-y="-8" fit-margin-bottom="0" inkscape:window-width="1600" inkscape:pageopacity="0.0" inkscape:pageshadow="2" pagecolor="#ffffff" inkscape:window-height="837" fit-margin-top="0" /> <g id="layer1" inkscape:label="Calque 1" inkscape:groupmode="layer" transform="translate(-69.568 -427.74)"> <path id="heart_outline" sodipodi:nodetypes="csscssccc" style="color:#000000;stroke:#ff0000;stroke-width:53.15;fill:none" inkscape:connector-curvature="0" d="m586.75 734.03c37.196-28.491 61.2-73.36 61.2-123.83 0-86.088-69.799-155.89-155.89-155.89-48.272 0-91.426 21.952-120.02 56.407-28.592-34.455-71.746-56.407-120.02-56.407-86.088 0-155.89 69.799-155.89 155.89 0 50.469 24.003 95.338 61.2 123.83l214.72 223.3z" />';

                if (value>=.5){
                    svg+= '<path style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="m 252.01997,454.31031 c -86.08843,0 -155.88947,69.79963 -155.88947,155.89063 0,50.469 24.00235,95.33612 61.19953,123.82812 l 214.71009,223.30078 0.92188,-0.95898 0,-446.73242 c -0.30502,0.36084 -0.61816,0.71449 -0.91993,1.07812 -28.59215,-34.455 -71.74785,-56.40625 -120.0221,-56.40625 z" id="heart_first_half" ng-show="value>=.5" inkscape:connector-curvature="0" /> ';
                }

                if (value>=1){
                    svg+='<path style="color:#000000;fill:#ff0000;stroke:none;stroke-width:53.15000153" d="M 422.49219 26.570312 C 374.72965 26.570312 331.98785 48.069239 303.39258 81.898438 L 303.39258 528.63086 L 517.18164 306.28906 C 554.37764 277.79806 578.38281 232.93094 578.38281 182.46094 C 578.38281 96.372938 508.58319 26.570312 422.49219 26.570312 z " transform="translate(69.568,427.74)" id="heart_second_half" />';
                }
                svg+= '</g> <metadata id="metadata6"> <rdf:RDF> <cc:Work> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/" /> <dc:publisher> <cc:Agent rdf:about="http://openclipart.org/"> <dc:title>Openclipart</dc:title> </cc:Agent> </dc:publisher> </cc:Work> <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/"> <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" /> <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" /> <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" /> </cc:License> </rdf:RDF> </metadata> </svg> ';
                return svg;
            }
              
           
            $scope.$watch('value',function(newValue){
                $scope.svg = $sce.trustAsHtml(getSvg(newValue));
            });
           
        }]
    }
});
angular.module('app.game')
    .directive('etProgressPie', function () {
        return {
            scope: {
                radius: '=radius',
                cx: '=cx',
                cy: '=cy',
                percent:'=percent',
                strokeWidth:"=strokeWidth"
              },
            templateUrl: 'app/components/game/progressPie/progressPieView',
            link: function (scope, element, attrs) {
                scope.circumference = scope.radius * 2 * Math.PI;
                scope.strokeDashoffset = scope.radius * 2 * Math.PI;
            },
            controller: ["$scope", "$timeout", function($scope,$timeout){
                //TODO add animaton when $scope.percent changes
                $scope.$watch('percent',function(newVal, oldVal){
                    if (angular.isUndefined(newVal)) return;
                    console.log(newVal);
                    console.log(oldVal);
                    var start = oldVal || 0;
                    $timeout(function(){new mojs.Tween({ //to prevent digest in progress error
                        repeat:   0,
                        delay:    100,
                        onUpdate: function (progress) {
                            $scope.$apply(function(){
                                $scope.strokeDashoffset = $scope.circumference - (start + (newVal-start)*progress) / 100 * $scope.circumference;
                            })
                        }
                      }).play()}, 0)
                    

                })
                /*
                $scope.getStrokeDashoffset = function(){
                    
                    offset = $scope.circumference - $scope.percent / 100 * $scope.circumference;
                    return offset;
                } */
            }]
        }
    });
angular.module('app.game').directive('etScrambledLettersGame',function(){
    return{
        templateUrl: 'app/components/game/scrambledLetters/scrambledLettersGameView',
        controller: 'ScrambledLettersGameController'
    }
});

angular.module('app.game').controller('ScrambledLettersGameController',  ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.sentences = $scope.levelData.sentences;

    function ViewItem(text, isLetter,targetWordInd){
        this.text = text;
        this.targetWordInd=targetWordInd;
        this.isLetter = isLetter;
    
    }
    /*We must make word/letters view items for float to work properly*/
    for (var i = 0; i < $scope.sentences.length; i++) {
        var viewItems=[];
        var target = $scope.sentences[i].targetWord;
        var words = $scope.sentences[i].words;
        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            var vi = new ViewItem(word, false);
                viewItems.push(vi);
            if (word==target){//then add letters as items with their target word
                for (var k = 0; k < word.length; k++) {
                    var vi = new ViewItem(word[k],true,k);
                    viewItems.push(vi);
                }
            }
        }
        $scope.sentences[i].viewItems = viewItems;
    }

    $scope.getItemText =  function(item,sentence){
        if (item.isLetter){
            return (sentence.answer|| [])[item.targetWordInd] || '';
        }else{
            return item.text;
        }
    }

    $scope.getItemVisible = function(item,sentence){
        var solved = sentence.targetWord == sentence.answer;
        //first see if it is a letter or not
        if (item.isLetter){// then it should only be shown when the puzzle is not solved
            return !solved;
        }else{ // okay what if it is not a letter. If it is not the target word it should be shown
            // if it is the target it depends on whether the problem is solved or not
            return solved || item.text != sentence.targetWord;
        }
     }


    var allDistinctLetters = [];
    for (var i = 0; i < $scope.sentences.length; i++) {
        var w = $scope.sentences[i].targetWord;
        for (var j = 0; j < w.length; j++) {
            var letter = w[j];
            if (!~allDistinctLetters.indexOf(letter)){
                allDistinctLetters.push(letter);
            }
        }
    }
    function toValueOrderArray(arr){
        var out=[];
        for (var i=0;i<arr.length;i++){
            out.push({value:arr[i],order:Math.random()});
        }
        return out;
    }

    $scope.scrambledLetters = toValueOrderArray(allDistinctLetters);

    $scope.currentSentenceIndex = 0;

    $scope.tapLetter = function (l) {
        var i = $scope.currentSentenceIndex;
        var ans = $scope.sentences[i].answer || '';
        var target = $scope.sentences[i].targetWord;
        if (target.startsWith(ans + l)) {
            $scope.sentences[i].answer = ans + l;
            if ($scope.sentences[i].answer == $scope.sentences[i].targetWord) {
                nextSentence();
            }
        }else{
            $scope.$emit('HeartsDownEvent',.5);
        }
    }

    
        
    $scope.$on('GameHintEvent',hintNextLetter);

    function hintNextLetter(){
        var i = $scope.currentSentenceIndex;
        var ans = $scope.sentences[i].answer || '';
        var target = $scope.sentences[i].targetWord;
        var l = target.substr(ans.length,1);
        $scope.tapLetter(l);
    }

    function nextSentence() {
        reportProgress($scope.currentSentenceIndex+1);
        if ($scope.currentSentenceIndex == $scope.sentences.length - 1) {
            $timeout(function(){$scope.$emit('ReadyForNextLevelEvent');},500)
        } else {
            $scope.currentSentenceIndex++;
        }
    }

    function reportProgress(numDone){
        var progress = (numDone)/$scope.sentences.length*100;
        $scope.$emit('ReportProgressEvent',progress);
    }

}]);
angular.module('app.game')
.directive('etTile', ["appUtils", "appConstants", function(appUtils,appConstants){
    return {
        scope:{
            tile:'=',
            'shortTouchEnd': '&onShortTouchEnd',
            'touchStart':'&onTouchStart',
            'boxClose':'&onBoxClose'

        },
        link:function(scope, element, attrs){
            scope.$watch('tile.float + "_" + tile.opacity+"_"+tile.margin+"_"+tile.zIndex+"_"+tile.transform',function(){
                var el = angular.element(element[0]);
                el.css('margin',scope.tile.margin);
                el.css('float',scope.tile.float);
                el.css('opacity',scope.tile.opacity);
                el.css('z-index',scope.tile.zIndex);
                el.css('-webkit-transform',scope.tile.transform);
                el.css('-transform',scope.tile.transform);
            })
            
          /*  element[0].addEventListener("touchstart",touchStart); 
            element[0].addEventListener("touchend", touchEnd);*/
            element[0].addEventListener("mousedown",touchStart); 
            element[0].addEventListener("mouseup", touchEnd);

            function touchStart(e){
                console.log(e);
                scope.touchstartTime = (new Date()).getTime();
             
                scope.touchStartPoint = e
                scope.touchStart();
            }

            function touchEnd(e){
                var t = (new Date()).getTime()-scope.touchstartTime;
                var d = appUtils.getTouchesDistance(e, scope.touchStartPoint);
                if (t<appConstants.shortTouchTime && d<50){
                    scope.shortTouchEnd();
                }
            }
            
            /*
            scope.$watch('tile.isDefShown', function(newValue, oldValue){
                function handleBackButton(){
                    scope.boxClose();
                }
                if (newValue){
                    document.addEventListener("backbutton", handleBackButton);
                }

                if ((newValue == false) && oldValue){
                    document.removeEventListener("backbutton",handleBackButton);
                }
            })
            */  
            
            /*this is to debug chrome
            window.addEventListener("hashchange", function(e) {
                if  (scope.isDefShown){
                    console.log('preventDefault and close the definition');
                }
            })*/
            scope.tile.getCenter = function (){return {x:element[0].offsetLeft + element[0].offsetWidth/2 ,
            y:element[0].offsetTop + element[0].offsetHeight/2}};
            scope.tile.getSize = function (){return {w:element[0].offsetWidth ,h: element[0].offsetHeight}};
            
        },
        templateUrl:'app/components/game/tile/tileTemplate'
    }
}])
angular.module('app.game').factory('tileFactory', ['gameConstants', function(gameConstants) {
    
    function Tile(word, scoreUpFn, applyFn) {

        var thisTile = this;
        
        this.show = function(){
            new mojs.Tween({ 
                repeat:   0,
                onUpdate:  function(progress){
                    thisTile.opacity=progress;
                    applyFn();
                },
                duration:900,
                easing:'quad.out'
              }).play();
        }

        this.destroy = function () {
            new mojs.Tween({ 
                repeat:   0,
                onUpdate:  function(progress){
                    var scale = .001+(1-progress);
                    thisTile.transformInner='translateZ(0) scale(' + scale + ')';
                    applyFn();
                },
                onComplete: this.complete,
                duration:500,
                easing:'quad.out'
              }).play()

            this.scoreUp(gameConstants.ScoreUpPoints);

        };

        this.scoreUp = function (score) {
            if (scoreUpFn){
                scoreUpFn(score);
                this.notify(score);
            }
        }

        this.scoreDown = function (score) {
            this.scoreUp(-1 * score);
        }

        this.notify = function (text) {
            this.notifyText = text.toString();
            this.notifyColor = 'white';
            if (typeof text === 'number') {
                if (text > 0) {
                    this.notifyText = '+' + this.notifyText;
                } else {
                    this.notifyColor = 'red';
                }
            }

            this.notifyOpacity = 1;
            
            new mojs.Tween({ 
                repeat:   0,
                onUpdate:  function(progress){
                    var o = .001+(1-progress);
                    thisTile.notifyOpacity=o;
                    applyFn();
                },
                onComplete: this.complete,
                duration:900,
                easing:'quad.out'
              }).play()
        }

        this.complete = function () {
                thisTile.destroyed = true;
                thisTile.opacity=0;
                applyFn();
        };
        this.setMargin = function (m) {
            thisTile.margin = m + 'px';
        }
        this.name = name;
        this.word = word;
        this.float = (Math.random() > .5) ? 'right' : 'left';
        this.myid = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
        this.selected = false;
        this.scale = 1;
        this.notifyOpacity = 0;
        this.boxOpacity = 0;
        this.opacity = 0;

        this.padding = 5;
        this.setMargin(5/4);

    }

    return Tile;

}]);
angular.module('app.game').controller('TimeoutController', ["$scope", function($scope){
    $scope.redButtonTexts = ['DO NOT PRESS THE RED BUTTON','DON\'T YOU','Please do not','You\'ve had your fill', "I'm getting angry", "Please don't do that","I'm getting angry","Okay, you're wasting your own time!"];
    $scope.counter = 0;
    function getShadow(p){
        var s = Math.round(1-p,3);
        return 'rgba(0,0,0,.3) 0px 0px 15px 2px,rgba(255,0,0,.5) 0px '+ -1 *s+'px 2px 2px, rgba(0,0,0,.5) 0px '+s+'px 5px 0px';
    }
    function setRedButtonShadow(p){
       // console.log(getShadow(p));
        angular.element(document.getElementById("red-button")).css('box-shadow',getShadow(p));
    }
    setRedButtonShadow(0);
    $scope.tapRedButton = function(){
        $scope.counter++;
       

        setTimeout(function(){setRedButtonShadow(1)},0);
        setTimeout(function(){setRedButtonShadow(0)},500);
    }
    
}]);
angular.module('app.game').directive('etTimeout', function(){
    return {
        scope:{timeoutTime:'=', timeoutVisible:'='},
        templateUrl:'app/components/game/timeout/timeoutTemplate',
        controller: 'TimeoutController', 
        link: function (scope,element,attrs){
            scope.$watch('timeoutVisible', function(newVal,oldVal){
                var jqElm = angular.element(element[0]);
                jqElm.css('display', newVal?'block':'none');
                scope.counter=0;
            })
        }
    }
})
angular.module('app.game')
.constant('levelsFeedbackConstants', {
    9:'',
    50:'',
    100:''
}
);


angular.module('app.game').controller('WordOrderAlternativesGameController', ["$scope", function($scope){

  
    $scope.alts=[]
    for (var i=0;i<$scope.levelData.alts.length;i++){
        $scope.alts.push({text:$scope.levelData.alts[i]})
    }
    $scope.selectAlt = function (ind) {
        var correct = $scope.levelData.correct;
        if ($scope.alts[ind].isAnim) return;
        $scope.alts[ind].isAnim = true;
        if (correct == $scope.alts[ind].text) {
            
            
            var mojsHtml = new mojs.Html({
              // selector for HTMLElement
              el: '#alt_'+ind,
              background: { 'transparent': '#71bc78' },
              color:{'black':'white'},
              duration: 500, 
              onComplete: function(){
                  $scope.$emit('ReadyForNextLevelEvent');
              }
            });
        }else{
             
              var mojsHtml = new mojs.Html({
                // selector for HTMLElement
                el: '#alt_'+ind,
                background: { 'transparent': 'pink' },
                duration: 500, 
                onComplete: function(){
                    $scope.$emit('HeartsDownEvent',1);
                }
              });
        }
        mojsHtml.play();
    }


}]);
angular.module('app.game').directive('etWordOrderAlternativesGame',function(){
    return{
        templateUrl: 'app/components/game/wordOrderAlternatives/wordOrderAltView',
        controller: 'WordOrderAlternativesGameController'
    }
});

angular.module('app')
.directive('etUsernameAvatar', ["avatarsConstants", "$sce", "appConstants", function(avatarsConstants, $sce,appConstants){
return{
    scope:{
        avatarKey:'=',
        username:'=',
        score:'=',
        level:'='
    },
    controller: ["$scope", function($scope){
       $scope.trustAsHtml = $sce.trustAsHtml;
        $scope.avatars = avatarsConstants;
        $scope.$watch('level', function(newValue){
            var level = newValue || 'Starter';
            if (angular.isDefined(level.n)){
                var levelNumber = appConstants.getLevelNumber(level);
                if (angular.isUndefined(levelNumber)){ //review level
                    level = appConstants.getPreviousLevel(level);
                    levelNumber = appConstants.getLevelNumber(level);
                }
                $scope.levelView = 'Level ' + levelNumber;
            }else{
                $scope.levelView = level;
            }
        })
    }],
    template:'<div class="username-avatar">'+
            '        <div class="your-avatar-wrap">'+
                '        <div class="your-avatar" ng-bind-html="trustAsHtml(avatars[avatarKey])"></div>'+
                '        <div ng-if="level" class="level">{{levelView}}</div>'+  
                '    </div>'+     
                '    <div class="your-info">'+
                '           <div class="username" ng-bind="username"></div>'+
                        '   <div class="score" ng-bind="score"></div>   '+   
            '        </div>'+
            '</div>'
}
}])
})(angular);