import { memberResolvers, memberFieldResolvers } from './member.resolvers';

export const resolvers = {
  Query: {
    ...memberResolvers
  },
  ...memberFieldResolvers
};
