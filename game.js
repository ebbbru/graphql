export default `

    input GameInput {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

    type Game {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

    type Query {
        game(_id: String!): Game
        games: [Game]
    }

    mutation {
        game(brand: "game", year: 2005,  price: 1000, imageUrl:"none") {
        _id,
        brand,
        price,
        imageUrl
        }
        }

`