const sessionNum = 116;
const baseProPubUri = 'https://api.propublica.org/congress/v1';

export const senateMembersUri = `${baseProPubUri}/${sessionNum}/senate/members.json`;
export const houseMembersUri = `${baseProPubUri}/${sessionNum}/house/members.json`;