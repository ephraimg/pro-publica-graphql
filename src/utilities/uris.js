const baseProPubUri = 'https://api.propublica.org/congress/v1';

export const senateMembersUri = session => `${baseProPubUri}/${session}/senate/members.json`;
export const houseMembersUri = session => `${baseProPubUri}/${session}/house/members.json`;