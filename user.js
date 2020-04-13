export default `

    type User {
        _id: String!
        username: String!
        email: String!
        password: String!
        games: [game]
    }

    type Query {
        user(_id: String!): User
        users: [User]
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