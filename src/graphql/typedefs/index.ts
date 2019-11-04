import { importSchema } from 'graphql-import';

/* Warning: Must use an absolute path for importSchema */
export const typeDefs: string = importSchema('src/graphql/typedefs/schema.graphql');

// console.log(typeDefs);