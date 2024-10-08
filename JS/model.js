const appDiv = document.getElementById('app')
const model = {
    app: {
        pages: [
            'startPage',
            'searchPage',
            'categoryPage',
            'profilPage',
            'moviePage',
            'loginPage',
            'friendPage'
        ],
        currentPage: 'startPage',
        isOpenMovie: false,
    },
    
    input: {
        register: {
            userId: null,
            userName: null,
            password: null,
            userImage: null,
            comments: [], //reviews
            friendComments: [],
            watchlist: [],
            friends: [],
            favorites: [],
            aboutme: null
        },
        profile: {
            selectedUser: 0,
            profileBox: null,
            showProfile: null
        },
        login: {
            userId: '',
            userName: null,
            password: null,
            showLogin: ''
        },
        moviePage: {
            inputRating: 0,
            selectedNumber: 0,
            inputComment: null,
            averageRating: null,
            showMovie: null,
            isSelected: false
        },
        category: {
            categorySort: null,
            selectedCategory: null,
            showCategory: null,
        },
        search: {
            inputSearch: '',
            showSearch: [],
            searchResults: '',
        },

        addMovies: {
            name: null,
            rating: [],
            avgRating: 0,
            category: null,
            movieImage: null,
            actors: [],
            director: null,
            year: 0,
            comments: [],
            description: null
        },
        mainPage: {
            uniqueMovies: []
        }
    },

    data: {
        users: [
            {
                userId: 0,
                userName: "Chris",
                password: "chris123",
                userImage: "/IMG/users/chris.jpg",
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20:19:06",
                        movie: "The Shawshank Redemption",
                        comment: "God gammeldags kvalitetsfilm! likte den godt",
                        rating: 930
                    },
                ],
                isAdmin: false,
                friendComments: [],
                watchlist: [{name: "The Shawshank Redemption"}],
                friends: ['Nico'],
                favorites: [{name: "The Godfather"},{name: "Forrest Gump"}],
                aboutme: "hei, jeg heter Christoffer og er 37 år fra Larvik"
            },
            {
                userId: 1,
                userName: "FilmFan16",
                password: "film123",
                userImage: "/IMG/users/filmfan16.jpg",
                comments: [],
                isAdmin: false,
                friendComments: [],
                watchlist: [],
                friends: [],
                favorites: [],
                aboutme: "Hei jeg heter Frank-Remi og er 44 år, ugift fra Halden. Liker ofte og dra på Sverigeturer og handle databrus og bacon sammen med mamma."
            },
            {
                userId: 2,
                userName: "Nico",
                password: "nico123",
                userImage: "/IMG/users/nico.png",
                comments: [{
                    comment: "Det var en god en",
                    date: "29.9.2024",
                    movie: "The Dark Knight",
                    rating: 900,
                    time: "22:03:06" 
                 }],
                isAdmin: true,
                friendComments: [],
                watchlist: [],
                friends: ['Chris'],
                favorites: [{name: "The Shawshank Redemption"}],
                aboutme: "Hei, jeg heter Nicolai. 31 år fra Moss",
            },
            {
                userId: 3,
                userName: "InternalLocusOfControl",
                password: "Modal123",
                userImage: "IMG/InternalLocus.jpg",
                comments: [],
                isAdmin: false,
                friendComments: [],
                watchlist: [],
                friends: ['Filmfan16'],
                favorites: [],
                aboutme: "Hei, eg heitar Knut og har et ønskje om å bli marinejegar."
            },

        ],
        
        movies:  [
            {
                name: "The Room",
                rating: [370, 380, 390],
                avgRating: 380,
                category: "Drama",
                movieImage: "IMG/Movies/the_room.jpg",
                actors: ["Tommy Wiseau", "Juliette Danielle"],
                director: "Tommy Wiseau",
                year: 2003,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "24.00.00",
                        userName: "Pat",
                        comment: "So bad it's good. A cult classic.",
                        rating: 370
                    },
                    {
                        date: "29.9.2024",
                        time: "13.00.00",
                        userName: "Jordan",
                        comment: "Unintentionally hilarious.",
                        rating: 380
                    },
                    {
                        date: "30.9.2024",
                        time: "15.00.00",
                        userName: "Alex",
                        comment: "A must-watch for its sheer absurdity.",
                        rating: 390
                    }
                ],
            description: "Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce his best friend, Mark. From there, nothing will be the same again."
            },
            {
                name: "The Godfather",
                rating: [920, 930, 940],
                avgRating: 930,
                category: "Crime",
                movieImage: "IMG/Movies/godfather.jpg",
                actors: ["Marlon Brando", "Al Pacino"],
                director: "Francis Ford Coppola",
                year: 1972,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.00.00",
                        userName: "Chris",
                        comment: "A masterpiece of cinema.",
                        rating: 930
                    },
                    {
                        date: "29.9.2024",
                        time: "11.00.00",
                        userName: "Morgan",
                        comment: "Incredible performances and direction.",
                        rating: 920
                    },
                    {
                        date: "30.9.2024",
                        time: "13.00.00",
                        userName: "Jamie",
                        comment: "A must-watch for crime drama fans.",
                        rating: 940
                    }
                ],
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {
                name: "Pulp Fiction",
                rating: [890, 900, 910],
                avgRating: 900,
                category: "Crime",
                movieImage: "IMG/Movies/pulpfiction.jpg",
                actors: ["John Travolta", "Uma Thurman"],
                director: "Quentin Tarantino",
                year: 1994,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.30.00",
                        userName: "Chris",
                        comment: "A unique and captivating film.",
                        rating: 900
                    },
                    {
                        date: "29.9.2024",
                        time: "11.30.00",
                        userName: "Morgan",
                        comment: "Tarantino's best work.",
                        rating: 890
                    },
                    {
                        date: "30.9.2024",
                        time: "13.30.00",
                        userName: "Jamie",
                        comment: "A must-watch for any film lover.",
                        rating: 910
                    }
                ],
                description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                name: "Forrest Gump",
                rating: [880, 890, 900],
                avgRating: 890,
                category: "Drama",
                movieImage: "IMG/Movies/forrestgump.jpg",
                actors: ["Tom Hanks", "Robin Wright"],
                director: "Robert Zemeckis",
                year: 1994,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20.00.00",
                        userName: "Alex",
                        comment: "A heartwarming and inspirational film.",
                        rating: 890
                    },
                    {
                        date: "29.9.2024",
                        time: "10.00.00",
                        userName: "Jordan",
                        comment: "Tom Hanks delivers an incredible performance.",
                        rating: 880
                    },
                    {
                        date: "30.9.2024",
                        time: "12.00.00",
                        userName: "Taylor",
                        comment: "A timeless classic.",
                        rating: 900
                    }
                ],
                description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
            },
            {
                name: "Inception",
                rating: [880, 890, 900],
                avgRating: 890,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/inception.jpg",
                actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
                director: "Christopher Nolan",
                year: 2010,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.00.00",
                        userName: "Chris",
                        comment: "A mind-bending and visually stunning film.",
                        rating: 890
                    },
                    {
                        date: "29.9.2024",
                        time: "11.00.00",
                        userName: "Morgan",
                        comment: "Incredible storytelling and direction.",
                        rating: 880
                    },
                    {
                        date: "30.9.2024",
                        time: "13.00.00",
                        userName: "Jamie",
                        comment: "A sci-fi masterpiece.",
                        rating: 900
                    }
                ],
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
            },
            {
                name: "Fight Club",
                rating: [880, 890, 900],
                avgRating: 890,
                category: "Drama",
                movieImage: "IMG/Movies/fightclub.jpg",
                actors: ["Brad Pitt", "Edward Norton"],
                director: "David Fincher",
                year: 1999,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "22.00.00",
                        userName: "Alex",
                        comment: "A dark and thought-provoking film.",
                        rating: 890
                    },
                    {
                        date: "29.9.2024",
                        time: "12.00.00",
                        userName: "Jordan",
                        comment: "Incredible performances and direction.",
                        rating: 880
                    },
                    {
                        date: "30.9.2024",
                        time: "14.00.00",
                        userName: "Taylor",
                        comment: "A cult classic.",
                        rating: 900
                    }
                ],
                description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
            },
            {
                name: "The Matrix",
                rating: [870, 880, 890],
                avgRating: 880,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/matrix.jpg",
                actors: ["Keanu Reeves", "Laurence Fishburne"],
                director: "Lana Wachowski, Lilly Wachowski",
                year: 1999,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "23.00.00",
                        userName: "Casey",
                        comment: "A groundbreaking and visually stunning film.",
                        rating: 880
                    },
                    {
                        date: "29.9.2024",
                        time: "13.00.00",
                        userName: "Morgan",
                        comment: "Incredible action and storytelling.",
                        rating: 870
                    },
                    {
                        date: "30.9.2024",
                        time: "15.00.00",
                        userName: "Jamie",
                        comment: "A sci-fi classic.",
                        rating: 890
                    }
                ],
                description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
            },
            {
                name: "Goodfellas",
                rating: [870, 880, 890],
                avgRating: 880,
                category: "Crime",
                movieImage: "IMG/Movies/goodfellas.jpg",
                actors: ["Robert De Niro", "Ray Liotta"],
                director: "Martin Scorsese",
                year: 1990,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20.00.00",
                        userName: "Alex",
                        comment: "A gripping and realistic portrayal of the mob.",
                        rating: 880
                    },
                    {
                        date: "29.9.2024",
                        time: "10.00.00",
                        userName: "Jordan",
                        comment: "Outstanding performances and direction.",
                        rating: 870
                    },
                    {
                        date: "30.9.2024",
                        time: "12.00.00",
                        userName: "Taylor",
                        comment: "A classic crime drama.",
                        rating: 890
                    }
                ],
                description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners."
            },
            {
                name: "The Shawshank Redemption",
                rating: [930, 870, 1000],
                avgRating: 933,
                category: "Drama",
                movieImage: "IMG/Movies/shawshank.jpg",
                actors: ["Tim Robbins", "Morgan Freeman"],
                director: "Frank Darabont",
                year: 1994,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20.19.06",
                        userName: "Chris",
                        comment: "God gammeldags kvalitetsfilm! likte den godt",
                        rating: 930
                    },
                    {
                        date: "29.9.2024",
                        time: "10.00.00",
                        userName: "Alex",
                        comment: "An inspiring and emotional film.",
                        rating: 870
                    },
                    {
                        date: "30.9.2024",
                        time: "12.00.00",
                        userName: "Jordan",
                        comment: "A timeless classic.",
                        rating: 1000
                    }
                ],
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            },
            {
                name: "The Lord of the Rings: The Return of the King",
                rating: [870, 880, 890],
                avgRating: 880,
                category: "Fantasy",
                movieImage: "IMG/Movies/lordoftherings.jpg",
                actors: ["Elijah Wood", "Viggo Mortensen"],
                director: "Peter Jackson",
                year: 2003,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.00.00",
                        userName: "Chris",
                        comment: "An epic conclusion to an incredible trilogy.",
                        rating: 880
                    },
                    {
                        date: "29.9.2024",
                        time: "11.00.00",
                        userName: "Morgan",
                        comment: "Visually stunning and emotionally powerful.",
                        rating: 870
                    },
                    {
                        date: "30.9.2024",
                        time: "13.00.00",
                        userName: "Jamie",
                        comment: "A masterpiece of fantasy cinema.",
                        rating: 890
                    }
                ],
                description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
            },
            {
                name: "Star Wars: Episode V - The Empire Strikes Back",
                rating: [870, 880, 890],
                avgRating: 880,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/starwarsV.jpg",
                actors: ["Mark Hamill", "Harrison Ford"],
                director: "Irvin Kershner",
                year: 1980,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "22.00.00",
                        userName: "Alex",
                        comment: "The best of the original trilogy.",
                        rating: 880
                    },
                    {
                        date: "29.9.2024",
                        time: "12.00.00",
                        userName: "Jordan",
                        comment: "Iconic and timeless.",
                        rating: 870
                    },
                    {
                        date: "30.9.2024",
                        time: "14.00.00",
                        userName: "Taylor",
                        comment: "A sci-fi classic.",
                        rating: 890
                    }
                ],
                description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
            },
            {
                name: "The Silence of the Lambs",
                rating: [860, 870, 880],
                avgRating: 870,
                category: "Thriller",
                movieImage: "IMG/Movies/silenceotl.jpg",
                actors: ["Jodie Foster", "Anthony Hopkins"],
                director: "Jonathan Demme",
                year: 1991,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "23.00.00",
                        userName: "Casey",
                        comment: "A chilling and gripping thriller.",
                        rating: 870
                    },
                    {
                        date: "29.9.2024",
                        time: "13.00.00",
                        userName: "Morgan",
                        comment: "Incredible performances by Foster and Hopkins.",
                        rating: 860
                    },
                    {
                        date: "30.9.2024",
                        time: "15.00.00",
                        userName: "Jamie",
                        comment: "A must-watch for thriller fans.",
                        rating: 880
                    }
                ],
                description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
            },
            {
                name: "Schindlers List",
                rating: [890, 900, 910],
                avgRating: 900,
                category: "Biography",
                movieImage: "IMG/Movies/schindler.jpg",
                actors: ["Liam Neeson", "Ralph Fiennes"],
                director: "Steven Spielberg",
                year: 1993,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "24:00:00",
                        userName: "Alex",
                        comment: "A powerful and moving film.",
                        rating: 900
                    },
                    {
                        date: "29.9.2024",
                        time: "14:00:00",
                        userName: "Jordan",
                        comment: "An important and emotional story.",
                        rating: 890
                    },
                    {
                        date: "30.9.2024",
                        time: "16:00:00",
                        userName: "Taylor",
                        comment: "A masterpiece of cinema.",
                        rating: 910
                    }
                ],
                description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            },
            {
                name: "Interstellar",
                rating: [860, 870, 880],
                avgRating: 870,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/interstellar.jpg",
                actors: ["Matthew McConaughey", "Anne Hathaway"],
                director: "Christopher Nolan",
                year: 2014,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "25.00.00",
                        userName: "Chris",
                        comment: "A visually stunning and thought-provoking film.",
                        rating: 870
                    },
                    {
                        date: "29.9.2024",
                        time: "15.00.00",
                        userName: "Morgan",
                        comment: "Incredible visuals and storytelling.",
                        rating: 860
                    },
                    {
                        date: "30.9.2024",
                        time: "17.00.00",
                        userName: "Jamie",
                        comment: "A sci-fi masterpiece.",
                        rating: 880
                    }
                ],
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
            },
            {
                name: "Parasite",
                rating: [860, 870, 880],
                avgRating: 870,
                category: "Thriller",
                movieImage: "IMG/Movies/parasite.jpg",
                actors: ["Kang-ho Song", "Sun-kyun Lee"],
                director: "Bong Joon Ho",
                year: 2019,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20.00.00",
                        userName: "Alex",
                        comment: "A brilliant and thought-provoking film.",
                        rating: 870
                    },
                    {
                        date: "29.9.2024",
                        time: "10.00.00",
                        userName: "Jordan",
                        comment: "Masterfully directed and acted.",
                        rating: 860
                    },
                    {
                        date: "30.9.2024",
                        time: "12.00.00",
                        userName: "Taylor",
                        comment: "An unforgettable experience.",
                        rating: 880
                    }
                ],
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
            },
            {
                name: "The Dark Knight",
                rating: [900, 910, 920],
                avgRating: 910,
                category: "Action",
                movieImage: "IMG/Movies/batman.jpg",
                actors: ["Christian Bale", "Heath Ledger"],
                director: "Christopher Nolan",
                year: 2008,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "20.19.06",
                        userName: "FilmFan16",
                        comment: "Var ganske bra, bortsett fra den klovnen. Forsto ikke hvorfor han var med?",
                        rating: 900
                    },
                    {
                        date: "29.9.2024",
                        time: "10.30.00",
                        userName: "Alex",
                        comment: "Heath Ledger's performance was phenomenal.",
                        rating: 910
                    },
                    {
                        date: "30.9.2024",
                        time: "12.30.00",
                        userName: "Jordan",
                        comment: "A gripping and intense film.",
                        rating: 920
                    }
                ],
                description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
            },
            {
                name: "The Green Mile",
                rating: [860, 870, 880],
                avgRating: 870,
                category: "Drama",
                movieImage: "IMG/Movies/greenmile.jpg",
                actors: ["Tom Hanks", "Michael Clarke Duncan"],
                director: "Frank Darabont",
                year: 1999,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.00.00",
                        userName: "Chris",
                        comment: "A powerful and emotional film.",
                        rating: 870
                    },
                    {
                        date: "29.9.2024",
                        time: "11.00.00",
                        userName: "Morgan",
                        comment: "Incredible performances and storytelling.",
                        rating: 860
                    },
                    {
                        date: "30.9.2024",
                        time: "13.00.00",
                        userName: "Jamie",
                        comment: "A deeply moving experience.",
                        rating: 880
                    }
                ],
                description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
            },
            {
                name: "Gladiator",
                rating: [850, 860, 870],
                avgRating: 860,
                category: "Action",
                movieImage: "IMG/Movies/gladiator.jpg",
                actors: ["Russell Crowe", "Joaquin Phoenix"],
                director: "Ridley Scott",
                year: 2000,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "22.00.00",
                        userName: "Alex",
                        comment: "An epic and thrilling film.",
                        rating: 860
                    },
                    {
                        date: "29.9.2024",
                        time: "12.00.00",
                        userName: "Jordan",
                        comment: "Fantastic performances and direction.",
                        rating: 850
                    },
                    {
                        date: "30.9.2024",
                        time: "14.00.00",
                        userName: "Taylor",
                        comment: "A cinematic masterpiece.",
                        rating: 870
                    }
                ],
                description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
            },
            {
                name: "The Lion King",
                rating: [850, 860, 870],
                avgRating: 860,
                category: "Animation",
                movieImage: "IMG/Movies/lionking.jpg",
                actors: ["Matthew Broderick", "Jeremy Irons"],
                director: "Roger Allers, Rob Minkoff",
                year: 1994,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "23.00.00",
                        userName: "Casey",
                        comment: "A timeless Disney classic.",
                        rating: 860
                    },
                    {
                        date: "29.9.2024",
                        time: "13.00.00",
                        userName: "Morgan",
                        comment: "Beautiful animation and music.",
                        rating: 850
                    },
                    {
                        date: "30.9.2024",
                        time: "15.00.00",
                        userName: "Jamie",
                        comment: "A heartwarming and emotional story.",
                        rating: 870
                    }
                ],
                description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
            },
            {
                name: "The Departed",
                rating: [850, 860, 870],
                avgRating: 860,
                category: "Crime",
                movieImage: "IMG/Movies/departed.jpg",
                actors: ["Leonardo DiCaprio", "Matt Damon"],
                director: "Martin Scorsese",
                year: 2006,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "24.00.00",
                        userName: "Alex",
                        comment: "A gripping and intense crime thriller.",
                        rating: 860
                    },
                    {
                        date: "29.9.2024",
                        time: "14.00.00",
                        userName: "Jordan",
                        comment: "Outstanding performances and direction.",
                        rating: 850
                    },
                    {
                        date: "30.9.2024",
                        time: "16.00.00",
                        userName: "Taylor",
                        comment: "A must-watch for crime drama fans.",
                        rating: 870
                    }
                ],
                description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
            },
            {
                name: "The Social Network",
                rating: [770, 780, 790],
                avgRating: 780,
                category: "Biography",
                movieImage: "IMG/Movies/social_network.jpg",
                actors: ["Jesse Eisenberg", "Andrew Garfield"],
                director: "David Fincher",
                year: 2010,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.00.00",
                        userName: "Alex",
                        comment: "Interesting take on the rise of Facebook.",
                        rating: 780
                    },
                    {
                        date: "29.9.2024",
                        time: "10.00.00",
                        userName: "Jordan",
                        comment: "Great performances and direction.",
                        rating: 770
                    },
                    {
                        date: "30.9.2024",
                        time: "12.00.00",
                        userName: "Taylor",
                        comment: "Well-made and engaging.",
                        rating: 790
                    }
                ],
                description: "The story of the founders of the social-networking website, Facebook."
            },
            {
                name: "Avatar",
                rating: [780, 790, 800],
                avgRating: 790,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/avatar.jpg",
                actors: ["Sam Worthington", "Zoe Saldana"],
                director: "James Cameron",
                year: 2009,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "21.30.00",
                        userName: "Jordan",
                        comment: "Visually stunning but the story is a bit predictable.",
                        rating: 790
                    },
                    {
                        date: "29.9.2024",
                        time: "10.30.00",
                        userName: "Taylor",
                        comment: "Amazing special effects!",
                        rating: 780
                    },
                    {
                        date: "30.9.2024",
                        time: "12.30.00",
                        userName: "Chris",
                        comment: "A visual masterpiece.",
                        rating: 800
                    }
                ],
                description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
            },
            {
                name: "Titanic",
                rating: [920, 930, 940],
                avgRating: 930,
                category: "Romance",
                movieImage: "IMG/Movies/titanic.jpg",
                actors: ["Leonardo DiCaprio", "Kate Winslet"],
                director: "James Cameron",
                year: 1997,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "22.00.00",
                        userName: "Taylor",
                        comment: "A timeless love story with a tragic ending.",
                        rating: 930
                    },
                    {
                        date: "29.9.2024",
                        time: "11.00.00",
                        userName: "Chris",
                        comment: "Beautifully made and emotional.",
                        rating: 920
                    },
                    {
                        date: "30.9.2024",
                        time: "13.00.00",
                        userName: "Alex",
                        comment: "A cinematic masterpiece.",
                        rating: 940
                    }
                ],
                description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
            },
            {
                name: "Jurassic Park",
                rating: [810, 820, 830],
                avgRating: 820,
                category: "Adventure",
                movieImage: "IMG/Movies/jurassic_park.jpg",
                actors: ["Sam Neill", "Laura Dern"],
                director: "Steven Spielberg",
                year: 1993,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "22.30.00",
                        userName: "Morgan",
                        comment: "A thrilling adventure with groundbreaking special effects.",
                        rating: 820
                    },
                    {
                        date: "29.9.2024",
                        time: "11.30.00",
                        userName: "Jamie",
                        comment: "Still holds up after all these years.",
                        rating: 810
                    },
                    {
                        date: "30.9.2024",
                        time: "13.30.00",
                        userName: "Casey",
                        comment: "An iconic film.",
                        rating: 830
                    }
                ],
                description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
            },
            {
                name: "The Avengers",
                rating: [800, 810, 820],
                avgRating: 810,
                category: "Action",
                movieImage: "IMG/Movies/avengers.jpg",
                actors: ["Robert Downey Jr.", "Chris Evans"],
                director: "Joss Whedon",
                year: 2012,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "23.00.00",
                        userName: "Jamie",
                        comment: "An epic superhero team-up with great action scenes.",
                        rating: 810
                    },
                    {
                        date: "29.9.2024",
                        time: "12.00.00",
                        userName: "Alex",
                        comment: "Loved the characters and the action.",
                        rating: 800
                    },
                    {
                        date: "30.9.2024",
                        time: "14.00.00",
                        userName: "Morgan",
                        comment: "A must-watch for Marvel fans.",
                        rating: 820
                    }
                ],
                description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
            },
            {
                name: "Frozen",
                rating: [740, 750, 760],
                avgRating: 750,
                category: "Animation",
                movieImage: "IMG/Movies/frozen.jpg",
                actors: ["Kristen Bell", "Idina Menzel"],
                director: "Chris Buck, Jennifer Lee",
                year: 2013,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "23.30.00",
                        userName: "Casey",
                        comment: "A heartwarming story with catchy songs.",
                        rating: 750
                    },
                    {
                        date: "29.9.2024",
                        time: "12.30.00",
                        userName: "Morgan",
                        comment: "Great for kids and adults alike.",
                        rating: 740
                    },
                    {
                        date: "30.9.2024",
                        time: "14.30.00",
                        userName: "Taylor",
                        comment: "A modern Disney classic.",
                        rating: 760
                    }
                ],
                description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
            },
            {
                name: "Twilight",
                rating: [520, 530, 540],
                avgRating: 530,
                category: "Fantasy",
                movieImage: "IMG/Movies/twilight.jpg",
                actors: ["Kristen Stewart", "Robert Pattinson"],
                director: "Catherine Hardwicke",
                year: 2008,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "24.30.00",
                        userName: "Jordan",
                        comment: "A love story with vampires and werewolves. Not for everyone.",
                        rating: 530
                    },
                    {
                        date: "29.9.2024",
                        time: "13.30.00",
                        userName: "Taylor",
                        comment: "Enjoyable if you're into the genre.",
                        rating: 520
                    },
                    {
                        date: "30.9.2024",
                        time: "15.30.00",
                        userName: "Chris",
                        comment: "A guilty pleasure.",
                        rating: 540
                    }
                ],
                description: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
            },
            {
                name: "Transformers",
                rating: [700, 710, 720],
                avgRating: 710,
                category: "Action",
                movieImage: "IMG/Movies/transformers.jpg",
                actors: ["Shia LaBeouf", "Megan Fox"],
                director: "Michael Bay",
                year: 2007,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "25.00.00",
                        userName: "Taylor",
                        comment: "Lots of action and explosions. A fun watch.",
                        rating: 710
                    },
                    {
                        date: "29.9.2024",
                        time: "14.00.00",
                        userName: "Alex",
                        comment: "Great special effects.",
                        rating: 700
                    },
                    {
                        date: "30.9.2024",
                        time: "16.00.00",
                        userName: "Morgan",
                        comment: "Entertaining but not much depth.",
                        rating: 720
                    }
                ],
                description: "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager."
            },
            {
                name: "The Roommate",
                rating: [480, 490, 500],
                avgRating: 490,
                category: "Thriller",
                movieImage: "IMG/Movies/the_roommate.jpg",
                actors: ["Leighton Meester", "Minka Kelly"],
                director: "Christian E. Christiansen",
                year: 2011,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "25.30.00",
                        userName: "Alex",
                        comment: "A predictable thriller with some suspenseful moments.",
                        rating: 490
                    },
                    {
                        date: "29.9.2024",
                        time: "14.30.00",
                        userName: "Jordan",
                        comment: "Not the best, but watchable.",
                        rating: 480
                    },
                    {
                        date: "30.9.2024",
                        time: "16.30.00",
                        userName: "Taylor",
                        comment: "Decent performances but clichéd plot.",
                        rating: 500
                    }
                ],
                description: "When college freshman Sara arrives on campus for the first time, she befriends her roommate, Rebecca. However, Rebecca's obsession with Sara quickly turns violent."
            },
            {
                name: "Cats",
                rating: [200, 250, 300],
                avgRating: 250,
                category: "Musical",
                movieImage: "IMG/Movies/cats.jpg",
                actors: ["James Corden", "Judi Dench"],
                director: "Tom Hooper",
                year: 2019,
                comments: [
                    {
                        date: "28.9.2024",
                        time: "26.00.00",
                        userName: "Morgan",
                        comment: "A bizarre adaptation of the musical. Not for everyone.",
                        rating: 250
                    },
                    {
                        date: "29.9.2024",
                        time: "15.00.00",
                        userName: "Chris",
                        comment: "Strange and unsettling.",
                        rating: 200
                    },
                    {
                        date: "30.9.2024",
                        time: "17.00.00",
                        userName: "Alex",
                        comment: "An odd experience.",
                        rating: 300
                    }
                ],
                description: "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life."
            }
        ]
           
    }
}
