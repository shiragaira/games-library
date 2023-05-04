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
  money: any;
  timestamptz: any;
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

/** columns and relationships of "games_library.devices" */
export type Devices = {
  __typename?: 'devices';
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "games_library.devices" */
export type DevicesGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "games_library.devices" */
export type DevicesGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** aggregated selection of "games_library.devices" */
export type Devices_Aggregate = {
  __typename?: 'devices_aggregate';
  aggregate?: Maybe<Devices_Aggregate_Fields>;
  nodes: Array<Devices>;
};

/** aggregate fields of "games_library.devices" */
export type Devices_Aggregate_Fields = {
  __typename?: 'devices_aggregate_fields';
  avg?: Maybe<Devices_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Devices_Max_Fields>;
  min?: Maybe<Devices_Min_Fields>;
  stddev?: Maybe<Devices_Stddev_Fields>;
  stddev_pop?: Maybe<Devices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Devices_Stddev_Samp_Fields>;
  sum?: Maybe<Devices_Sum_Fields>;
  var_pop?: Maybe<Devices_Var_Pop_Fields>;
  var_samp?: Maybe<Devices_Var_Samp_Fields>;
  variance?: Maybe<Devices_Variance_Fields>;
};


/** aggregate fields of "games_library.devices" */
export type Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Devices_Avg_Fields = {
  __typename?: 'devices_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "games_library.devices". All fields are combined with a logical 'AND'. */
export type Devices_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Bool_Exp>>;
  _not?: InputMaybe<Devices_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Bool_Exp>>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_library.devices" */
export enum Devices_Constraint {
  /** unique or primary key constraint on columns "name" */
  SystemsNameKey = 'systems_name_key',
  /** unique or primary key constraint on columns "id" */
  SystemsPkey = 'systems_pkey'
}

/** input type for incrementing numeric columns in table "games_library.devices" */
export type Devices_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "games_library.devices" */
export type Devices_Insert_Input = {
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Devices_Max_Fields = {
  __typename?: 'devices_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Devices_Min_Fields = {
  __typename?: 'devices_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "games_library.devices" */
export type Devices_Mutation_Response = {
  __typename?: 'devices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices>;
};

/** input type for inserting object relation for remote table "games_library.devices" */
export type Devices_Obj_Rel_Insert_Input = {
  data: Devices_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** on_conflict condition type for table "games_library.devices" */
export type Devices_On_Conflict = {
  constraint: Devices_Constraint;
  update_columns?: Array<Devices_Update_Column>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.devices". */
export type Devices_Order_By = {
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_library.devices */
export type Devices_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "games_library.devices" */
export enum Devices_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "games_library.devices" */
export type Devices_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Devices_Stddev_Fields = {
  __typename?: 'devices_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Devices_Stddev_Pop_Fields = {
  __typename?: 'devices_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Devices_Stddev_Samp_Fields = {
  __typename?: 'devices_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "devices" */
export type Devices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Devices_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Devices_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Devices_Sum_Fields = {
  __typename?: 'devices_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "games_library.devices" */
export enum Devices_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Devices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Devices_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Devices_Set_Input>;
  /** filter the rows which have to be updated */
  where: Devices_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Devices_Var_Pop_Fields = {
  __typename?: 'devices_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Devices_Var_Samp_Fields = {
  __typename?: 'devices_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Devices_Variance_Fields = {
  __typename?: 'devices_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "games_library.games" */
export type Games = {
  __typename?: 'games';
  cover_image_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device?: Maybe<Devices>;
  device_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  platform?: Maybe<Platforms>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_date?: Maybe<Scalars['date']>;
  purchase_price?: Maybe<Scalars['money']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "games_library.games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

export type Games_Aggregate_Bool_Exp = {
  count?: InputMaybe<Games_Aggregate_Bool_Exp_Count>;
};

export type Games_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Games_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "games_library.games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};


/** aggregate fields of "games_library.games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games_library.games" */
export type Games_Aggregate_Order_By = {
  avg?: InputMaybe<Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Max_Order_By>;
  min?: InputMaybe<Games_Min_Order_By>;
  stddev?: InputMaybe<Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Games_Sum_Order_By>;
  var_pop?: InputMaybe<Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games_library.games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "games_library.games" */
export type Games_Avg_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games_library.games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  cover_image_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Devices_Bool_Exp>;
  device_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  platform?: InputMaybe<Platforms_Bool_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  purchase_date?: InputMaybe<Date_Comparison_Exp>;
  purchase_price?: InputMaybe<Money_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_library.games" */
export enum Games_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamesPkey = 'games_pkey'
}

/** input type for incrementing numeric columns in table "games_library.games" */
export type Games_Inc_Input = {
  device_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_price?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "games_library.games" */
export type Games_Insert_Input = {
  cover_image_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Devices_Obj_Rel_Insert_Input>;
  device_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform?: InputMaybe<Platforms_Obj_Rel_Insert_Input>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_date?: InputMaybe<Scalars['date']>;
  purchase_price?: InputMaybe<Scalars['money']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  cover_image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_date?: Maybe<Scalars['date']>;
  purchase_price?: Maybe<Scalars['money']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "games_library.games" */
export type Games_Max_Order_By = {
  cover_image_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  cover_image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_date?: Maybe<Scalars['date']>;
  purchase_price?: Maybe<Scalars['money']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "games_library.games" */
export type Games_Min_Order_By = {
  cover_image_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games_library.games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** on_conflict condition type for table "games_library.games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.games". */
export type Games_Order_By = {
  cover_image_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Devices_Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Platforms_Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_library.games */
export type Games_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "games_library.games" */
export enum Games_Select_Column {
  /** column name */
  CoverImageUrl = 'cover_image_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "games_library.games" */
export type Games_Set_Input = {
  cover_image_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_date?: InputMaybe<Scalars['date']>;
  purchase_price?: InputMaybe<Scalars['money']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "games_library.games" */
export type Games_Stddev_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "games_library.games" */
export type Games_Stddev_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "games_library.games" */
export type Games_Stddev_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "games" */
export type Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Games_Stream_Cursor_Value_Input = {
  cover_image_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  platform_id?: InputMaybe<Scalars['Int']>;
  purchase_date?: InputMaybe<Scalars['date']>;
  purchase_price?: InputMaybe<Scalars['money']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  device_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  platform_id?: Maybe<Scalars['Int']>;
  purchase_price?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "games_library.games" */
export type Games_Sum_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** update columns of table "games_library.games" */
export enum Games_Update_Column {
  /** column name */
  CoverImageUrl = 'cover_image_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Games_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Games_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Games_Set_Input>;
  /** filter the rows which have to be updated */
  where: Games_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "games_library.games" */
export type Games_Var_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "games_library.games" */
export type Games_Var_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  platform_id?: Maybe<Scalars['Float']>;
  purchase_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "games_library.games" */
export type Games_Variance_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "games_library.devices" */
  delete_devices?: Maybe<Devices_Mutation_Response>;
  /** delete single row from the table: "games_library.devices" */
  delete_devices_by_pk?: Maybe<Devices>;
  /** delete data from the table: "games_library.games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games_library.games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "games_library.platforms" */
  delete_platforms?: Maybe<Platforms_Mutation_Response>;
  /** delete single row from the table: "games_library.platforms" */
  delete_platforms_by_pk?: Maybe<Platforms>;
  /** insert data into the table: "games_library.devices" */
  insert_devices?: Maybe<Devices_Mutation_Response>;
  /** insert a single row into the table: "games_library.devices" */
  insert_devices_one?: Maybe<Devices>;
  /** insert data into the table: "games_library.games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games_library.games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "games_library.platforms" */
  insert_platforms?: Maybe<Platforms_Mutation_Response>;
  /** insert a single row into the table: "games_library.platforms" */
  insert_platforms_one?: Maybe<Platforms>;
  /** update data of the table: "games_library.devices" */
  update_devices?: Maybe<Devices_Mutation_Response>;
  /** update single row of the table: "games_library.devices" */
  update_devices_by_pk?: Maybe<Devices>;
  /** update multiples rows of table: "games_library.devices" */
  update_devices_many?: Maybe<Array<Maybe<Devices_Mutation_Response>>>;
  /** update data of the table: "games_library.games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games_library.games" */
  update_games_by_pk?: Maybe<Games>;
  /** update multiples rows of table: "games_library.games" */
  update_games_many?: Maybe<Array<Maybe<Games_Mutation_Response>>>;
  /** update data of the table: "games_library.platforms" */
  update_platforms?: Maybe<Platforms_Mutation_Response>;
  /** update single row of the table: "games_library.platforms" */
  update_platforms_by_pk?: Maybe<Platforms>;
  /** update multiples rows of table: "games_library.platforms" */
  update_platforms_many?: Maybe<Array<Maybe<Platforms_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_DevicesArgs = {
  where: Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Devices_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PlatformsArgs = {
  where: Platforms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Platforms_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_DevicesArgs = {
  objects: Array<Devices_Insert_Input>;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_OneArgs = {
  object: Devices_Insert_Input;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlatformsArgs = {
  objects: Array<Platforms_Insert_Input>;
  on_conflict?: InputMaybe<Platforms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Platforms_OneArgs = {
  object: Platforms_Insert_Input;
  on_conflict?: InputMaybe<Platforms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DevicesArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>;
  _set?: InputMaybe<Devices_Set_Input>;
  where: Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_By_PkArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>;
  _set?: InputMaybe<Devices_Set_Input>;
  pk_columns: Devices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_ManyArgs = {
  updates: Array<Devices_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Games_ManyArgs = {
  updates: Array<Games_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlatformsArgs = {
  _inc?: InputMaybe<Platforms_Inc_Input>;
  _set?: InputMaybe<Platforms_Set_Input>;
  where: Platforms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Platforms_By_PkArgs = {
  _inc?: InputMaybe<Platforms_Inc_Input>;
  _set?: InputMaybe<Platforms_Set_Input>;
  pk_columns: Platforms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Platforms_ManyArgs = {
  updates: Array<Platforms_Updates>;
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

/** columns and relationships of "games_library.platforms" */
export type Platforms = {
  __typename?: 'platforms';
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "games_library.platforms" */
export type PlatformsGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "games_library.platforms" */
export type PlatformsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** aggregated selection of "games_library.platforms" */
export type Platforms_Aggregate = {
  __typename?: 'platforms_aggregate';
  aggregate?: Maybe<Platforms_Aggregate_Fields>;
  nodes: Array<Platforms>;
};

/** aggregate fields of "games_library.platforms" */
export type Platforms_Aggregate_Fields = {
  __typename?: 'platforms_aggregate_fields';
  avg?: Maybe<Platforms_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Platforms_Max_Fields>;
  min?: Maybe<Platforms_Min_Fields>;
  stddev?: Maybe<Platforms_Stddev_Fields>;
  stddev_pop?: Maybe<Platforms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Platforms_Stddev_Samp_Fields>;
  sum?: Maybe<Platforms_Sum_Fields>;
  var_pop?: Maybe<Platforms_Var_Pop_Fields>;
  var_samp?: Maybe<Platforms_Var_Samp_Fields>;
  variance?: Maybe<Platforms_Variance_Fields>;
};


/** aggregate fields of "games_library.platforms" */
export type Platforms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Platforms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Platforms_Avg_Fields = {
  __typename?: 'platforms_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "games_library.platforms". All fields are combined with a logical 'AND'. */
export type Platforms_Bool_Exp = {
  _and?: InputMaybe<Array<Platforms_Bool_Exp>>;
  _not?: InputMaybe<Platforms_Bool_Exp>;
  _or?: InputMaybe<Array<Platforms_Bool_Exp>>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_library.platforms" */
export enum Platforms_Constraint {
  /** unique or primary key constraint on columns "name" */
  PlatformsNameKey = 'platforms_name_key',
  /** unique or primary key constraint on columns "id" */
  PlatformsPkey = 'platforms_pkey'
}

/** input type for incrementing numeric columns in table "games_library.platforms" */
export type Platforms_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "games_library.platforms" */
export type Platforms_Insert_Input = {
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Platforms_Max_Fields = {
  __typename?: 'platforms_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Platforms_Min_Fields = {
  __typename?: 'platforms_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "games_library.platforms" */
export type Platforms_Mutation_Response = {
  __typename?: 'platforms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Platforms>;
};

/** input type for inserting object relation for remote table "games_library.platforms" */
export type Platforms_Obj_Rel_Insert_Input = {
  data: Platforms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Platforms_On_Conflict>;
};

/** on_conflict condition type for table "games_library.platforms" */
export type Platforms_On_Conflict = {
  constraint: Platforms_Constraint;
  update_columns?: Array<Platforms_Update_Column>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};

/** Ordering options when selecting data from "games_library.platforms". */
export type Platforms_Order_By = {
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_library.platforms */
export type Platforms_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "games_library.platforms" */
export enum Platforms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "games_library.platforms" */
export type Platforms_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Platforms_Stddev_Fields = {
  __typename?: 'platforms_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Platforms_Stddev_Pop_Fields = {
  __typename?: 'platforms_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Platforms_Stddev_Samp_Fields = {
  __typename?: 'platforms_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "platforms" */
export type Platforms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Platforms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Platforms_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Platforms_Sum_Fields = {
  __typename?: 'platforms_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "games_library.platforms" */
export enum Platforms_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Platforms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Platforms_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Platforms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Platforms_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Platforms_Var_Pop_Fields = {
  __typename?: 'platforms_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Platforms_Var_Samp_Fields = {
  __typename?: 'platforms_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Platforms_Variance_Fields = {
  __typename?: 'platforms_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "games_library.devices" */
  devices: Array<Devices>;
  /** fetch aggregated fields from the table: "games_library.devices" */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "games_library.devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games_library.games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "games_library.platforms" */
  platforms: Array<Platforms>;
  /** fetch aggregated fields from the table: "games_library.platforms" */
  platforms_aggregate: Platforms_Aggregate;
  /** fetch data from the table: "games_library.platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
};


export type Query_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Query_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Query_RootDevices_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPlatformsArgs = {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};


export type Query_RootPlatforms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};


export type Query_RootPlatforms_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "games_library.devices" */
  devices: Array<Devices>;
  /** fetch aggregated fields from the table: "games_library.devices" */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "games_library.devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table in a streaming manner: "games_library.devices" */
  devices_stream: Array<Devices>;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games_library.games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table in a streaming manner: "games_library.games" */
  games_stream: Array<Games>;
  /** fetch data from the table: "games_library.platforms" */
  platforms: Array<Platforms>;
  /** fetch aggregated fields from the table: "games_library.platforms" */
  platforms_aggregate: Platforms_Aggregate;
  /** fetch data from the table: "games_library.platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
  /** fetch data from the table in a streaming manner: "games_library.platforms" */
  platforms_stream: Array<Platforms>;
};


export type Subscription_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Subscription_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Subscription_RootDevices_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDevices_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Devices_Stream_Cursor_Input>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGames_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootPlatformsArgs = {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};


export type Subscription_RootPlatforms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};


export type Subscription_RootPlatforms_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPlatforms_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Platforms_Stream_Cursor_Input>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', id: number, title: string }> };


export const HomePageDocument = gql`
    query HomePage {
  games {
    id
    title
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