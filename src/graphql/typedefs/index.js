import { sharedTypeDefs } from './shared.typedefs';
import { memberTypeDefs } from './member.typedefs';

const Query = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [
  Query,
  sharedTypeDefs,
  memberTypeDefs
];
