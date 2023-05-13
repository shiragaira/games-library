import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "games_library.GameClients" */
export type GameClients = {
  __typename?: 'gameClients';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  userGames: Array<UserGames>;
  /** An aggregate relationship */
  userGames_aggregate: UserGames_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "games_library.GameClients" */
export type GameClientsUserGamesArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


/** columns and relationships of "games_library.GameClients" */
export type GameClientsUserGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};

/** aggregated selection of "games_library.GameClients" */
export type GameClients_Aggregate = {
  __typename?: 'gameClients_aggregate';
  aggregate?: Maybe<GameClients_Aggregate_Fields>;
  nodes: Array<GameClients>;
};

/** aggregate fields of "games_library.GameClients" */
export type GameClients_Aggregate_Fields = {
  __typename?: 'gameClients_aggregate_fields';
  avg?: Maybe<GameClients_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GameClients_Max_Fields>;
  min?: Maybe<GameClients_Min_Fields>;
  stddev?: Maybe<GameClients_Stddev_Fields>;
  stddev_pop?: Maybe<GameClients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GameClients_Stddev_Samp_Fields>;
  sum?: Maybe<GameClients_Sum_Fields>;
  var_pop?: Maybe<GameClients_Var_Pop_Fields>;
  var_samp?: Maybe<GameClients_Var_Samp_Fields>;
  variance?: Maybe<GameClients_Variance_Fields>;
};


/** aggregate fields of "games_library.GameClients" */
export type GameClients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameClients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type GameClients_Avg_Fields = {
  __typename?: 'gameClients_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "games_library.GameClients". All fields are combined with a logical 'AND'. */
export type GameClients_Bool_Exp = {
  _and?: InputMaybe<Array<GameClients_Bool_Exp>>;
  _not?: InputMaybe<GameClients_Bool_Exp>;
  _or?: InputMaybe<Array<GameClients_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  userGames?: InputMaybe<UserGames_Bool_Exp>;
  userGames_aggregate?: InputMaybe<UserGames_Aggregate_Bool_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_library.GameClients" */
export enum GameClients_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameClientsPkey = 'GameClients_pkey'
}

/** input type for incrementing numeric columns in table "games_library.GameClients" */
export type GameClients_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "games_library.GameClients" */
export type GameClients_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  userGames?: InputMaybe<UserGames_Arr_Rel_Insert_Input>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GameClients_Max_Fields = {
  __typename?: 'gameClients_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type GameClients_Min_Fields = {
  __typename?: 'gameClients_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "games_library.GameClients" */
export type GameClients_Mutation_Response = {
  __typename?: 'gameClients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameClients>;
};

/** input type for inserting object relation for remote table "games_library.GameClients" */
export type GameClients_Obj_Rel_Insert_Input = {
  data: GameClients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GameClients_On_Conflict>;
};

/** on_conflict condition type for table "games_library.GameClients" */
export type GameClients_On_Conflict = {
  constraint: GameClients_Constraint;
  update_columns?: Array<GameClients_Update_Column>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.GameClients". */
export type GameClients_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userGames_aggregate?: InputMaybe<UserGames_Aggregate_Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_library.GameClients */
export type GameClients_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "games_library.GameClients" */
export enum GameClients_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "games_library.GameClients" */
export type GameClients_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type GameClients_Stddev_Fields = {
  __typename?: 'gameClients_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type GameClients_Stddev_Pop_Fields = {
  __typename?: 'gameClients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type GameClients_Stddev_Samp_Fields = {
  __typename?: 'gameClients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gameClients" */
export type GameClients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameClients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameClients_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type GameClients_Sum_Fields = {
  __typename?: 'gameClients_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "games_library.GameClients" */
export enum GameClients_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

export type GameClients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GameClients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameClients_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameClients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GameClients_Var_Pop_Fields = {
  __typename?: 'gameClients_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type GameClients_Var_Samp_Fields = {
  __typename?: 'gameClients_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type GameClients_Variance_Fields = {
  __typename?: 'gameClients_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "games_library.GameStatuses" */
export type GameStatuses = {
  __typename?: 'gameStatuses';
  id: Scalars['String'];
  /** An array relationship */
  userGames: Array<UserGames>;
  /** An aggregate relationship */
  userGames_aggregate: UserGames_Aggregate;
};


/** columns and relationships of "games_library.GameStatuses" */
export type GameStatusesUserGamesArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


/** columns and relationships of "games_library.GameStatuses" */
export type GameStatusesUserGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};

/** aggregated selection of "games_library.GameStatuses" */
export type GameStatuses_Aggregate = {
  __typename?: 'gameStatuses_aggregate';
  aggregate?: Maybe<GameStatuses_Aggregate_Fields>;
  nodes: Array<GameStatuses>;
};

/** aggregate fields of "games_library.GameStatuses" */
export type GameStatuses_Aggregate_Fields = {
  __typename?: 'gameStatuses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GameStatuses_Max_Fields>;
  min?: Maybe<GameStatuses_Min_Fields>;
};


/** aggregate fields of "games_library.GameStatuses" */
export type GameStatuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GameStatuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "games_library.GameStatuses". All fields are combined with a logical 'AND'. */
export type GameStatuses_Bool_Exp = {
  _and?: InputMaybe<Array<GameStatuses_Bool_Exp>>;
  _not?: InputMaybe<GameStatuses_Bool_Exp>;
  _or?: InputMaybe<Array<GameStatuses_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userGames?: InputMaybe<UserGames_Bool_Exp>;
  userGames_aggregate?: InputMaybe<UserGames_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "games_library.GameStatuses" */
export enum GameStatuses_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameStatusesPkey = 'GameStatuses_pkey'
}

export enum GameStatuses_Enum {
  Abadoned = 'abadoned',
  Backlog = 'backlog',
  Completed = 'completed',
  InProgress = 'in_progress'
}

/** Boolean expression to compare columns of type "gameStatuses_enum". All fields are combined with logical 'AND'. */
export type GameStatuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<GameStatuses_Enum>;
  _in?: InputMaybe<Array<GameStatuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<GameStatuses_Enum>;
  _nin?: InputMaybe<Array<GameStatuses_Enum>>;
};

/** input type for inserting data into table "games_library.GameStatuses" */
export type GameStatuses_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userGames?: InputMaybe<UserGames_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type GameStatuses_Max_Fields = {
  __typename?: 'gameStatuses_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type GameStatuses_Min_Fields = {
  __typename?: 'gameStatuses_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "games_library.GameStatuses" */
export type GameStatuses_Mutation_Response = {
  __typename?: 'gameStatuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GameStatuses>;
};

/** on_conflict condition type for table "games_library.GameStatuses" */
export type GameStatuses_On_Conflict = {
  constraint: GameStatuses_Constraint;
  update_columns?: Array<GameStatuses_Update_Column>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.GameStatuses". */
export type GameStatuses_Order_By = {
  id?: InputMaybe<Order_By>;
  userGames_aggregate?: InputMaybe<UserGames_Aggregate_Order_By>;
};

/** primary key columns input for table: games_library.GameStatuses */
export type GameStatuses_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "games_library.GameStatuses" */
export enum GameStatuses_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "games_library.GameStatuses" */
export type GameStatuses_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "gameStatuses" */
export type GameStatuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GameStatuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameStatuses_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "games_library.GameStatuses" */
export enum GameStatuses_Update_Column {
  /** column name */
  Id = 'id'
}

export type GameStatuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GameStatuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: GameStatuses_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "games_library.GameClients" */
  delete_gameClients?: Maybe<GameClients_Mutation_Response>;
  /** delete single row from the table: "games_library.GameClients" */
  delete_gameClients_by_pk?: Maybe<GameClients>;
  /** delete data from the table: "games_library.GameStatuses" */
  delete_gameStatuses?: Maybe<GameStatuses_Mutation_Response>;
  /** delete single row from the table: "games_library.GameStatuses" */
  delete_gameStatuses_by_pk?: Maybe<GameStatuses>;
  /** delete data from the table: "games_library.UserGames" */
  delete_userGames?: Maybe<UserGames_Mutation_Response>;
  /** delete single row from the table: "games_library.UserGames" */
  delete_userGames_by_pk?: Maybe<UserGames>;
  /** insert data into the table: "games_library.GameClients" */
  insert_gameClients?: Maybe<GameClients_Mutation_Response>;
  /** insert a single row into the table: "games_library.GameClients" */
  insert_gameClients_one?: Maybe<GameClients>;
  /** insert data into the table: "games_library.GameStatuses" */
  insert_gameStatuses?: Maybe<GameStatuses_Mutation_Response>;
  /** insert a single row into the table: "games_library.GameStatuses" */
  insert_gameStatuses_one?: Maybe<GameStatuses>;
  /** insert data into the table: "games_library.UserGames" */
  insert_userGames?: Maybe<UserGames_Mutation_Response>;
  /** insert a single row into the table: "games_library.UserGames" */
  insert_userGames_one?: Maybe<UserGames>;
  /** update data of the table: "games_library.GameClients" */
  update_gameClients?: Maybe<GameClients_Mutation_Response>;
  /** update single row of the table: "games_library.GameClients" */
  update_gameClients_by_pk?: Maybe<GameClients>;
  /** update multiples rows of table: "games_library.GameClients" */
  update_gameClients_many?: Maybe<Array<Maybe<GameClients_Mutation_Response>>>;
  /** update data of the table: "games_library.GameStatuses" */
  update_gameStatuses?: Maybe<GameStatuses_Mutation_Response>;
  /** update single row of the table: "games_library.GameStatuses" */
  update_gameStatuses_by_pk?: Maybe<GameStatuses>;
  /** update multiples rows of table: "games_library.GameStatuses" */
  update_gameStatuses_many?: Maybe<Array<Maybe<GameStatuses_Mutation_Response>>>;
  /** update data of the table: "games_library.UserGames" */
  update_userGames?: Maybe<UserGames_Mutation_Response>;
  /** update single row of the table: "games_library.UserGames" */
  update_userGames_by_pk?: Maybe<UserGames>;
  /** update multiples rows of table: "games_library.UserGames" */
  update_userGames_many?: Maybe<Array<Maybe<UserGames_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GameClientsArgs = {
  where: GameClients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameClients_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GameStatusesArgs = {
  where: GameStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GameStatuses_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserGamesArgs = {
  where: UserGames_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserGames_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_GameClientsArgs = {
  objects: Array<GameClients_Insert_Input>;
  on_conflict?: InputMaybe<GameClients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameClients_OneArgs = {
  object: GameClients_Insert_Input;
  on_conflict?: InputMaybe<GameClients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameStatusesArgs = {
  objects: Array<GameStatuses_Insert_Input>;
  on_conflict?: InputMaybe<GameStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameStatuses_OneArgs = {
  object: GameStatuses_Insert_Input;
  on_conflict?: InputMaybe<GameStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserGamesArgs = {
  objects: Array<UserGames_Insert_Input>;
  on_conflict?: InputMaybe<UserGames_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserGames_OneArgs = {
  object: UserGames_Insert_Input;
  on_conflict?: InputMaybe<UserGames_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GameClientsArgs = {
  _inc?: InputMaybe<GameClients_Inc_Input>;
  _set?: InputMaybe<GameClients_Set_Input>;
  where: GameClients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameClients_By_PkArgs = {
  _inc?: InputMaybe<GameClients_Inc_Input>;
  _set?: InputMaybe<GameClients_Set_Input>;
  pk_columns: GameClients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameClients_ManyArgs = {
  updates: Array<GameClients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameStatusesArgs = {
  _set?: InputMaybe<GameStatuses_Set_Input>;
  where: GameStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GameStatuses_By_PkArgs = {
  _set?: InputMaybe<GameStatuses_Set_Input>;
  pk_columns: GameStatuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameStatuses_ManyArgs = {
  updates: Array<GameStatuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserGamesArgs = {
  _inc?: InputMaybe<UserGames_Inc_Input>;
  _set?: InputMaybe<UserGames_Set_Input>;
  where: UserGames_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserGames_By_PkArgs = {
  _inc?: InputMaybe<UserGames_Inc_Input>;
  _set?: InputMaybe<UserGames_Set_Input>;
  pk_columns: UserGames_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserGames_ManyArgs = {
  updates: Array<UserGames_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "games_library.GameClients" */
  gameClients: Array<GameClients>;
  /** fetch aggregated fields from the table: "games_library.GameClients" */
  gameClients_aggregate: GameClients_Aggregate;
  /** fetch data from the table: "games_library.GameClients" using primary key columns */
  gameClients_by_pk?: Maybe<GameClients>;
  /** fetch data from the table: "games_library.GameStatuses" */
  gameStatuses: Array<GameStatuses>;
  /** fetch aggregated fields from the table: "games_library.GameStatuses" */
  gameStatuses_aggregate: GameStatuses_Aggregate;
  /** fetch data from the table: "games_library.GameStatuses" using primary key columns */
  gameStatuses_by_pk?: Maybe<GameStatuses>;
  /** An array relationship */
  userGames: Array<UserGames>;
  /** An aggregate relationship */
  userGames_aggregate: UserGames_Aggregate;
  /** fetch data from the table: "games_library.UserGames" using primary key columns */
  userGames_by_pk?: Maybe<UserGames>;
};


export type Query_RootGameClientsArgs = {
  distinct_on?: InputMaybe<Array<GameClients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameClients_Order_By>>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};


export type Query_RootGameClients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameClients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameClients_Order_By>>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};


export type Query_RootGameClients_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGameStatusesArgs = {
  distinct_on?: InputMaybe<Array<GameStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameStatuses_Order_By>>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};


export type Query_RootGameStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameStatuses_Order_By>>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};


export type Query_RootGameStatuses_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserGamesArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


export type Query_RootUserGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


export type Query_RootUserGames_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "games_library.GameClients" */
  gameClients: Array<GameClients>;
  /** fetch aggregated fields from the table: "games_library.GameClients" */
  gameClients_aggregate: GameClients_Aggregate;
  /** fetch data from the table: "games_library.GameClients" using primary key columns */
  gameClients_by_pk?: Maybe<GameClients>;
  /** fetch data from the table in a streaming manner: "games_library.GameClients" */
  gameClients_stream: Array<GameClients>;
  /** fetch data from the table: "games_library.GameStatuses" */
  gameStatuses: Array<GameStatuses>;
  /** fetch aggregated fields from the table: "games_library.GameStatuses" */
  gameStatuses_aggregate: GameStatuses_Aggregate;
  /** fetch data from the table: "games_library.GameStatuses" using primary key columns */
  gameStatuses_by_pk?: Maybe<GameStatuses>;
  /** fetch data from the table in a streaming manner: "games_library.GameStatuses" */
  gameStatuses_stream: Array<GameStatuses>;
  /** An array relationship */
  userGames: Array<UserGames>;
  /** An aggregate relationship */
  userGames_aggregate: UserGames_Aggregate;
  /** fetch data from the table: "games_library.UserGames" using primary key columns */
  userGames_by_pk?: Maybe<UserGames>;
  /** fetch data from the table in a streaming manner: "games_library.UserGames" */
  userGames_stream: Array<UserGames>;
};


export type Subscription_RootGameClientsArgs = {
  distinct_on?: InputMaybe<Array<GameClients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameClients_Order_By>>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};


export type Subscription_RootGameClients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameClients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameClients_Order_By>>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};


export type Subscription_RootGameClients_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGameClients_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameClients_Stream_Cursor_Input>>;
  where?: InputMaybe<GameClients_Bool_Exp>;
};


export type Subscription_RootGameStatusesArgs = {
  distinct_on?: InputMaybe<Array<GameStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameStatuses_Order_By>>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};


export type Subscription_RootGameStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GameStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameStatuses_Order_By>>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};


export type Subscription_RootGameStatuses_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootGameStatuses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameStatuses_Stream_Cursor_Input>>;
  where?: InputMaybe<GameStatuses_Bool_Exp>;
};


export type Subscription_RootUserGamesArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


export type Subscription_RootUserGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserGames_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserGames_Order_By>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};


export type Subscription_RootUserGames_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserGames_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserGames_Stream_Cursor_Input>>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};

/** columns and relationships of "games_library.UserGames" */
export type UserGames = {
  __typename?: 'userGames';
  assigned_at: Scalars['date'];
  client_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  gameClient?: Maybe<GameClients>;
  game_id: Scalars['Int'];
  id: Scalars['Int'];
  platform_id: Scalars['Int'];
  purchase_price?: Maybe<Scalars['numeric']>;
  status?: Maybe<GameStatuses_Enum>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "games_library.UserGames" */
export type UserGames_Aggregate = {
  __typename?: 'userGames_aggregate';
  aggregate?: Maybe<UserGames_Aggregate_Fields>;
  nodes: Array<UserGames>;
};

export type UserGames_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserGames_Aggregate_Bool_Exp_Count>;
};

export type UserGames_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserGames_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserGames_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "games_library.UserGames" */
export type UserGames_Aggregate_Fields = {
  __typename?: 'userGames_aggregate_fields';
  avg?: Maybe<UserGames_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<UserGames_Max_Fields>;
  min?: Maybe<UserGames_Min_Fields>;
  stddev?: Maybe<UserGames_Stddev_Fields>;
  stddev_pop?: Maybe<UserGames_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<UserGames_Stddev_Samp_Fields>;
  sum?: Maybe<UserGames_Sum_Fields>;
  var_pop?: Maybe<UserGames_Var_Pop_Fields>;
  var_samp?: Maybe<UserGames_Var_Samp_Fields>;
  variance?: Maybe<UserGames_Variance_Fields>;
};


/** aggregate fields of "games_library.UserGames" */
export type UserGames_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserGames_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games_library.UserGames" */
export type UserGames_Aggregate_Order_By = {
  avg?: InputMaybe<UserGames_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserGames_Max_Order_By>;
  min?: InputMaybe<UserGames_Min_Order_By>;
  stddev?: InputMaybe<UserGames_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UserGames_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UserGames_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UserGames_Sum_Order_By>;
  var_pop?: InputMaybe<UserGames_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UserGames_Var_Samp_Order_By>;
  variance?: InputMaybe<UserGames_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games_library.UserGames" */
export type UserGames_Arr_Rel_Insert_Input = {
  data: Array<UserGames_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserGames_On_Conflict>;
};

/** aggregate avg on columns */
export type UserGames_Avg_Fields = {
  __typename?: 'userGames_avg_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "games_library.UserGames" */
export type UserGames_Avg_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games_library.UserGames". All fields are combined with a logical 'AND'. */
export type UserGames_Bool_Exp = {
  _and?: InputMaybe<Array<UserGames_Bool_Exp>>;
  _not?: InputMaybe<UserGames_Bool_Exp>;
  _or?: InputMaybe<Array<UserGames_Bool_Exp>>;
  assigned_at?: InputMaybe<Date_Comparison_Exp>;
  client_id?: InputMaybe<Int_Comparison_Exp>;
  gameClient?: InputMaybe<GameClients_Bool_Exp>;
  game_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  purchase_price?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<GameStatuses_Enum_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_library.UserGames" */
export enum UserGames_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserGamesPkey = 'UserGames_pkey'
}

/** input type for incrementing numeric columns in table "games_library.UserGames" */
export type UserGames_Inc_Input = {
  client_id?: InputMaybe<Scalars['Int']>;
  game_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "games_library.UserGames" */
export type UserGames_Insert_Input = {
  assigned_at?: InputMaybe<Scalars['date']>;
  client_id?: InputMaybe<Scalars['Int']>;
  gameClient?: InputMaybe<GameClients_Obj_Rel_Insert_Input>;
  game_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_price?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<GameStatuses_Enum>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserGames_Max_Fields = {
  __typename?: 'userGames_max_fields';
  assigned_at?: Maybe<Scalars['date']>;
  client_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_price?: Maybe<Scalars['numeric']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "games_library.UserGames" */
export type UserGames_Max_Order_By = {
  assigned_at?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserGames_Min_Fields = {
  __typename?: 'userGames_min_fields';
  assigned_at?: Maybe<Scalars['date']>;
  client_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_price?: Maybe<Scalars['numeric']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "games_library.UserGames" */
export type UserGames_Min_Order_By = {
  assigned_at?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games_library.UserGames" */
export type UserGames_Mutation_Response = {
  __typename?: 'userGames_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserGames>;
};

/** on_conflict condition type for table "games_library.UserGames" */
export type UserGames_On_Conflict = {
  constraint: UserGames_Constraint;
  update_columns?: Array<UserGames_Update_Column>;
  where?: InputMaybe<UserGames_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.UserGames". */
export type UserGames_Order_By = {
  assigned_at?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  gameClient?: InputMaybe<GameClients_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_library.UserGames */
export type UserGames_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "games_library.UserGames" */
export enum UserGames_Select_Column {
  /** column name */
  AssignedAt = 'assigned_at',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Status = 'status',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "games_library.UserGames" */
export type UserGames_Set_Input = {
  assigned_at?: InputMaybe<Scalars['date']>;
  client_id?: InputMaybe<Scalars['Int']>;
  game_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_price?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<GameStatuses_Enum>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type UserGames_Stddev_Fields = {
  __typename?: 'userGames_stddev_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "games_library.UserGames" */
export type UserGames_Stddev_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type UserGames_Stddev_Pop_Fields = {
  __typename?: 'userGames_stddev_pop_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "games_library.UserGames" */
export type UserGames_Stddev_Pop_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type UserGames_Stddev_Samp_Fields = {
  __typename?: 'userGames_stddev_samp_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "games_library.UserGames" */
export type UserGames_Stddev_Samp_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "userGames" */
export type UserGames_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserGames_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserGames_Stream_Cursor_Value_Input = {
  assigned_at?: InputMaybe<Scalars['date']>;
  client_id?: InputMaybe<Scalars['Int']>;
  game_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_price?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<GameStatuses_Enum>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type UserGames_Sum_Fields = {
  __typename?: 'userGames_sum_fields';
  client_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "games_library.UserGames" */
export type UserGames_Sum_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** update columns of table "games_library.UserGames" */
export enum UserGames_Update_Column {
  /** column name */
  AssignedAt = 'assigned_at',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Status = 'status',
  /** column name */
  Uuid = 'uuid'
}

export type UserGames_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserGames_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserGames_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserGames_Bool_Exp;
};

/** aggregate var_pop on columns */
export type UserGames_Var_Pop_Fields = {
  __typename?: 'userGames_var_pop_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "games_library.UserGames" */
export type UserGames_Var_Pop_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type UserGames_Var_Samp_Fields = {
  __typename?: 'userGames_var_samp_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "games_library.UserGames" */
export type UserGames_Var_Samp_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type UserGames_Variance_Fields = {
  __typename?: 'userGames_variance_fields';
  client_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "games_library.UserGames" */
export type UserGames_Variance_Order_By = {
  client_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'query_root', userGames: Array<{ __typename?: 'userGames', id: number, uuid: any, game_id: number, status?: GameStatuses_Enum | null }> };

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'query_root', gameClients: Array<{ __typename?: 'gameClients', uuid: any, id: number, name: string }> };


export const HomePageDocument = gql`
    query HomePage {
  userGames {
    id
    uuid
    game_id
    status
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const AboutPageDocument = gql`
    query AboutPage {
  gameClients {
    uuid
    id
    name
  }
}
    `;

/**
 * __useAboutPageQuery__
 *
 * To run a query within a React component, call `useAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<AboutPageQuery, AboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutPageQuery, AboutPageQueryVariables>(AboutPageDocument, options);
      }
export function useAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPageQuery, AboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutPageQuery, AboutPageQueryVariables>(AboutPageDocument, options);
        }
export type AboutPageQueryHookResult = ReturnType<typeof useAboutPageQuery>;
export type AboutPageLazyQueryHookResult = ReturnType<typeof useAboutPageLazyQuery>;
export type AboutPageQueryResult = Apollo.QueryResult<AboutPageQuery, AboutPageQueryVariables>;