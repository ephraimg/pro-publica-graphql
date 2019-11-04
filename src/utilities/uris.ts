import { currentSession } from './constants';

const baseProPubUri: string = 'https://api.propublica.org/congress/v1';

export const senateMembersUri = (
  session: number = currentSession
): string => `${baseProPubUri}/${session}/senate/members.json`;

export const houseMembersUri = (
  session: number = currentSession
): string => `${baseProPubUri}/${session}/house/members.json`;