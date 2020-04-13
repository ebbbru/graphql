var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    game: String
  }
`);

var root = { hello: () => 'game' };

graphql(schema, '{ game}', root).then((response) => {
  console.log(response);
});