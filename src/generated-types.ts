import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum Chamber {
  House = 'House',
  Senate = 'Senate'
}

export enum Gender {
  M = 'M',
  F = 'F'
}

export type Member = {
   __typename?: 'Member',
  id: Scalars['String'],
  first_name: Scalars['String'],
  middle_name?: Maybe<Scalars['String']>,
  last_name: Scalars['String'],
  suffix?: Maybe<Scalars['String']>,
  gender: Gender,
  state?: Maybe<State>,
  missed_votes_pct?: Maybe<Scalars['Float']>,
  votes_with_party_pct?: Maybe<Scalars['Float']>,
};

export type MemberResults = {
   __typename?: 'MemberResults',
  congress: Scalars['String'],
  chamber: Chamber,
  num_results: Scalars['Int'],
  offset: Scalars['Int'],
  members: Array<Maybe<Member>>,
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  senateMembers?: Maybe<MemberResults>,
  houseMembers?: Maybe<MemberResults>,
};


export type QuerySenateMembersArgs = {
  session?: Maybe<Scalars['Int']>
};


export type QueryHouseMembersArgs = {
  session?: Maybe<Scalars['Int']>
};

export enum State {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  As = 'AS',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  Dc = 'DC',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Gu = 'GU',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Pr = 'PR',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vi = 'VI',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  MemberResults: ResolverTypeWrapper<MemberResults>,
  Chamber: Chamber,
  Member: ResolverTypeWrapper<Member>,
  Gender: Gender,
  State: State,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  MemberResults: MemberResults,
  Chamber: Chamber,
  Member: Member,
  Gender: Gender,
  State: State,
  Float: Scalars['Float'],
  Boolean: Scalars['Boolean'],
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>,
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>,
  missed_votes_pct?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  votes_with_party_pct?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
};

export type MemberResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberResults'] = ResolversParentTypes['MemberResults']> = {
  congress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  chamber?: Resolver<ResolversTypes['Chamber'], ParentType, ContextType>,
  num_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  members?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  senateMembers?: Resolver<Maybe<ResolversTypes['MemberResults']>, ParentType, ContextType, QuerySenateMembersArgs>,
  houseMembers?: Resolver<Maybe<ResolversTypes['MemberResults']>, ParentType, ContextType, QueryHouseMembersArgs>,
};

export type Resolvers<ContextType = any> = {
  Member?: MemberResolvers<ContextType>,
  MemberResults?: MemberResultsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

import gql from 'graphql-tag';
