import { memberResolvers } from './member.resolvers';

export const resolvers = {
  Query: {
    ...memberResolvers
  }
};
