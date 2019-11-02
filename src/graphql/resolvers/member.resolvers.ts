import { callProPub } from '../../utilities/http';
import { senateMembersUri, houseMembersUri } from '../../utilities/uris';

export const memberResolvers = {
  senateMembers: async (root, { session }) => {
    const results = await callProPub({ url: senateMembersUri(session) });
    // results: [{ congress: 116 ... }]
    return results[0];
  },
  houseMembers: async (root, { session }) => {
    const results = await callProPub({ url: houseMembersUri(session) });
    // results: [{ congress: 116 ... }]
    return results[0];
  }
};

export const memberFieldResolvers = {
  Member: {
  }
}