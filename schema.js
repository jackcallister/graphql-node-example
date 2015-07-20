import { getBooks, getUser } from './data.js';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql/lib/type';

// Type definitions for GraphQL
const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'A book contains an author and title',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'The id of the book.'
    },
    title: {
      type: GraphQLString,
      description: 'The title of the book.'
    },
    author: {
      type: GraphQLString,
      description: 'The author of the book.'
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user object',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'The id of the user.'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user.'
    }
  })
});

// Type definitions for the GraphQL endpoint. You can ask for books.
// The resolve function fetches the books and is returned in the
// requested shape thanks to GraphQL.
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      books: {
        type: new GraphQLList(BookType),
        resolve: () => {
          return getBooks();
        }
      },
      user: {
        type: UserType,
        resolve: () => {
          return getUser();
        }
      }
    }
  })
});

export default schema;
