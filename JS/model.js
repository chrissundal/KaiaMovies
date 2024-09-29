const appDiv = document.getElementById('app')
const model = {
    
    app: {
        pages: [
            'startPage',
            'searchPage',
            'categoryPage',
            'profilPage',
            'moviePage',
            'loginPage'
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
            friends: [],
            favorites: [],
            aboutme: null
        },
        profile: {
            selectedUser: null,
            profileBox: null,
            showProfile: null
        },
        moviePage: {
            inputRating: 0,
            selectedNumber: 0,
            inputComment: null,
            averageRating: null,
            showMovie: null
        },
        category: {
            categorySort: null,
            selectedCategory: null,
            showCategory: null,
        },
        search: {
            inputSearch: null,
            showSearch: null
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
        }
    },


    data: {
        users: [
            {
                userId: 1,
                userName: "Chris",
                password: "chris123",
                userImage: "/IMG/users/chris.jpg",
                comments: [],
                isAdmin: true,
                friendComments: [],
                friends: [],
                favorites: [],
                aboutme: "hei, jeg heter Christoffer og er 37 år fra Larvik"
            },
            {
                userId: 9571,
                userName: "FilmFan16",
                password: "film123",
                userImage: "/IMG/users/filmfan16.jpg",
                comments: [],
                isAdmin: false,
                friendComments: [],
                friends: [],
                favorites: [],
                aboutme: "Hei jeg heter Frank-Remi og er 44 år, ugift fra Halden. Liker ofte og dra på Sverigeturer og handle databrus og bacon sammen med mamma. Har en liten drøm om å bli nr 1 i norge på Dungeons & Dragons."
            },
            {
                userId: 2,
                userName: "Nico",
                password: "nico123",
                userImage: "/IMG/users/nico.png",
                comments: [],
                isAdmin: true,
                friendComments: [],
                friends: [],
                favorites: [],
                aboutme: "Hei, jeg heter Nicolai. 31 år fra Moss",
            },

        ],
        
        movies:  [
            {
                name: "The Shawshank Redemption",
                rating: [930,870,1000],
                avgRating: 930,
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
                        rating: "930"
                    }
                ],
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            },
            {
                name: "The Godfather",
                rating: [920],
                avgRating: 920,
                category: "Crime",
                movieImage: "IMG/Movies/godfather.jpg",
                actors: ["Marlon Brando", "Al Pacino"],
                director: "Francis Ford Coppola",
                year: 1972,
                comments: [],
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {
                name: "The Dark Knight",
                rating: [900],
                avgRating: 900,
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
                        rating: "930"
                    }
                ],
                description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
            },
            {
                name: "Pulp Fiction",
                rating: [890],
                avgRating: 890,
                category: "Crime",
                movieImage: "IMG/Movies/pulpfiction.jpg",
                actors: ["John Travolta", "Uma Thurman"],
                director: "Quentin Tarantino",
                year: 1994,
                comments: [],
                description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                name: "Forrest Gump",
                rating: [880],
                avgRating: 880,
                category: "Drama",
                movieImage: "IMG/Movies/forrestgump.jpg",
                actors: ["Tom Hanks", "Robin Wright"],
                director: "Robert Zemeckis",
                year: 1994,
                comments: [],
                description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
            },
            {
                name: "Inception",
                rating: [880],
                avgRating: 880,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/inception.jpg",
                actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
                director: "Christopher Nolan",
                year: 2010,
                comments: [],
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
            },
            {
                name: "Fight Club",
                rating: [880],
                avgRating: 880,
                category: "Drama",
                movieImage: "IMG/Movies/fightclub.jpg",
                actors: ["Brad Pitt", "Edward Norton"],
                director: "David Fincher",
                year: 1999,
                comments: [],
                description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
            },
            {
                name: "The Matrix",
                rating: [870],
                avgRating: 870,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/matrix.jpg",
                actors: ["Keanu Reeves", "Laurence Fishburne"],
                director: "Lana Wachowski, Lilly Wachowski",
                year: 1999,
                comments: [],
                description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
            },
            {
                name: "Goodfellas",
                rating: [870],
                avgRating: 870,
                category: "Crime",
                movieImage: "IMG/Movies/goodfellas.jpg",
                actors: ["Robert De Niro", "Ray Liotta"],
                director: "Martin Scorsese",
                year: 1990,
                comments: [],
                description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners."
            },
            {
                name: "The Lord of the Rings: The Return of the King",
                rating: [870],
                avgRating: 870,
                category: "Fantasy",
                movieImage: "IMG/Movies/lordoftherings.jpg",
                actors: ["Elijah Wood", "Viggo Mortensen"],
                director: "Peter Jackson",
                year: 2003,
                comments: [],
                description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
            },
            {
                name: "Star Wars: Episode V - The Empire Strikes Back",
                rating: [870],
                avgRating: 870,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/starwarsV.jpg",
                actors: ["Mark Hamill", "Harrison Ford"],
                director: "Irvin Kershner",
                year: 1980,
                comments: [],
                description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
            },
            {
                name: "The Silence of the Lambs",
                rating: [860],
                avgRating: 860,
                category: "Thriller",
                movieImage: "IMG/Movies/silenceotl.jpg",
                actors: ["Jodie Foster", "Anthony Hopkins"],
                director: "Jonathan Demme",
                year: 1991,
                comments: [],
                description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
            },
            {
                name: "Schindler's List",
                rating: [890],
                avgRating: 890,
                category: "Biography",
                movieImage: "IMG/Movies/schindler.jpg",
                actors: ["Liam Neeson", "Ralph Fiennes"],
                director: "Steven Spielberg",
                year: 1993,
                comments: [],
                description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
            },
            {
                name: "Interstellar",
                rating: [860],
                avgRating: 860,
                category: "Sci-Fi",
                movieImage: "IMG/Movies/interstellar.jpg",
                actors: ["Matthew McConaughey", "Anne Hathaway"],
                director: "Christopher Nolan",
                year: 2014,
                comments: [],
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
            },
            {
                name: "Parasite",
                rating: [860],
                avgRating: 860,
                category: "Thriller",
                movieImage: "IMG/Movies/parasite.jpg",
                actors: ["Kang-ho Song", "Sun-kyun Lee"],
                director: "Bong Joon Ho",
                year: 2019,
                comments: [],
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
            },
            {
                name: "The Green Mile",
                rating: [860],
                avgRating: 860,
                category: "Drama",
                movieImage: "IMG/Movies/greenmile.jpg",
                actors: ["Tom Hanks", "Michael Clarke Duncan"],
                director: "Frank Darabont",
                year: 1999,
                comments: [],
                description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
            },
            {
                name: "Gladiator",
                rating: [850],
                avgRating: 850,
                category: "Action",
                movieImage: "IMG/Movies/gladiator.jpg",
                actors: ["Russell Crowe", "Joaquin Phoenix"],
                director: "Ridley Scott",
                year: 2000,
                comments: [],
                description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
            },
            {
                name: "The Lion King",
                rating: [850],
                avgRating: 850,
                category: "Animation",
                movieImage: "IMG/Movies/lionking.jpg",
                actors: ["Matthew Broderick", "Jeremy Irons"],
                director: "Roger Allers, Rob Minkoff",
                year: 1994,
                comments: [],
                description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
            },
            {
                name: "The Departed",
                rating: [850],
                avgRating: 850,
                category: "Crime",
                movieImage: "IMG/Movies/departed.jpg",
                actors: ["Leonardo DiCaprio", "Matt Damon"],
                director: "Martin Scorsese",
                year: 2006,
                comments: [],
                description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
            }
        ]
           
    }
}
