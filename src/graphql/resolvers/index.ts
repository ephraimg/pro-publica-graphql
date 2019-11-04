import { memberResolvers, memberFieldResolvers } from './member.resolvers';
import { Resolvers } from '../../generated-types';

export const resolvers: Resolvers = {
  Query: {
    ...memberResolvers
  },
  ...memberFieldResolvers
};
