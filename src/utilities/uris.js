import { currentSession } from './constants';

const baseProPubUri = 'https://api.propublica.org/congress/v1';

export const senateMembersUri = (session = currentSession) => `${baseProPubUri}/${session}/senate/members.json`;
export const houseMembersUri = (session = currentSession) => `${baseProPubUri}/${session}/house/members.json`;