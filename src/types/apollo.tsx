import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  findAllExercises: Array<Exercise>;
  findAllPlans: Array<Plan>;
  findAllUsers: Array<User>;
  findAllWorkouts: Array<Workout>;
  findPlanById: Plan;
  findUserByEmail: User;
  findUserById: User;
  findWorkoutById: Workout;
  getHello: Scalars['String']['output'];
};


export type QueryFindAllExercisesArgs = {
  filter?: InputMaybe<GenericFilterInput>;
};


export type QueryFindAllPlansArgs = {
  filter?: InputMaybe<GenericFilterInput>;
};


export type QueryFindAllUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFindAllWorkoutsArgs = {
  filter?: InputMaybe<GenericFilterInput>;
};


export type QueryFindPlanByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindWorkoutByIdArgs = {
  id: Scalars['String']['input'];
};

export type GenericFilterInput = {
  createdBy: Scalars['String']['input'];
};

export type Exercise = {
  __typename?: 'Exercise';
  _id: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Plan = {
  __typename?: 'Plan';
  _id: Scalars['String']['output'];
  createdBy: User;
  description: Scalars['String']['output'];
  exercises: Array<PlannedExercises>;
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type PlannedExercises = {
  __typename?: 'PlannedExercises';
  exerciseID: Scalars['String']['output'];
  reps: Scalars['Float']['output'];
  sets: Scalars['Float']['output'];
};

export type Workout = {
  __typename?: 'Workout';
  _id: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  date: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  plan: Plan;
  status: Status;
  time: Scalars['String']['output'];
};

/** Possible status values for a workout */
export enum Status {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Missed = 'MISSED',
  Planned = 'PLANNED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createExercise: Exercise;
  createPlan: Plan;
  createUser: User;
  createWorkout: Workout;
  login: LoginResponse;
  removeExercise: Exercise;
  removePlan: Plan;
  removeUser: User;
  removeWorkout: Workout;
  signup: User;
  updatePlan: Plan;
  updateUser: User;
  updateWorkout: Workout;
};


export type MutationCreateExerciseArgs = {
  createExerciseInput: CreateExerciseInput;
};


export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWorkoutArgs = {
  createWorkoutInput: CreateWorkoutInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveExerciseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePlanArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveWorkoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  sigUpUserInput: CreateUserInput;
};


export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWorkoutArgs = {
  updateWorkoutInput: UpdateWorkoutInput;
};

export type CreateExerciseInput = {
  createdBy: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePlanInput = {
  createdBy: Scalars['String']['input'];
  description: Scalars['String']['input'];
  exercises: Array<CreatePlannedExercisesInput>;
  name: Scalars['String']['input'];
};

export type CreatePlannedExercisesInput = {
  exerciseID: Scalars['String']['input'];
  reps: Scalars['Float']['input'];
  sets: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateWorkoutInput = {
  createdBy: Scalars['String']['input'];
  date: Scalars['String']['input'];
  duration: Scalars['Float']['input'];
  plan: Scalars['String']['input'];
  status: Status;
  time: Scalars['String']['input'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  authToken: Scalars['String']['output'];
  user: User;
};

export type UpdatePlanInput = {
  _id: Scalars['String']['input'];
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exercises?: InputMaybe<Array<CreatePlannedExercisesInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  _id: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkoutInput = {
  _id: Scalars['String']['input'];
  createdBy?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  plan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', _id: string, name: string, email: string, password: string }> };

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', authToken: string, user: { __typename?: 'User', _id: string, name: string, email: string, password: string } } };


export const FindAllUsersDocument = gql`
    query FindAllUsers {
  findAllUsers {
    _id
    name
    email
    password
  }
}
    `;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const LoginDocument = gql`
    mutation Login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    authToken
    user {
      _id
      name
      email
      password
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;