export const memberTypeDefs = `
  type Member {
    id: String!
    first_name: String!
    middle_name: String
    last_name: String!
    suffix: String
    gender: Gender!
    state: State
    missed_votes_pct: Float
    votes_with_party_pct: Float
  }
  type MemberResults {
    congress: String!
    chamber: Chamber!
    num_results: Int!
    offset: Int!
    members: [Member]!
  }

  extend type Query {
    senateMembers: MemberResults
    houseMembers: MemberResults
  }
`;
