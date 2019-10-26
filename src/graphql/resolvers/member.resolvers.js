import { callProPub } from '~/src/utilities/http';
import { senateMembersUri, houseMembersUri } from '~/src/utilities/uris';

export const memberResolvers = {
  senateMembers: async () => {
    const results = await callProPub({ url: senateMembersUri });
    // results: [{ congress: 116 ... }]}
    return results[0];
  },
  houseMembers: async () => {
    const results = await callProPub({ url: houseMembersUri });
    // results: [{ congress: 116 ... }]}
    return results[0];
  }
};