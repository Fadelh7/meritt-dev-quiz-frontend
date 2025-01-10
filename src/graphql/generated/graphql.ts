import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
  ContactUsFilter: { input: any; output: any; }
  DateTimeISO: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  ProductFilter: { input: any; output: any; }
};

export type ContactUs = {
  __typename?: 'ContactUs';
  _id: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  full_name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ContactUsCreateInput = {
  body?: Scalars['String']['input'];
  full_name?: Scalars['String']['input'];
  phone_number?: Scalars['String']['input'];
  subject?: Scalars['String']['input'];
};

export type ContactUsEditInput = {
  _id: Scalars['ObjectID']['input'];
  body?: Scalars['String']['input'];
  full_name?: Scalars['String']['input'];
  phone_number?: Scalars['String']['input'];
  subject?: Scalars['String']['input'];
};

/** Allowed fields for filtering ContactUs */
export enum ContactUsSearchFields {
  Body = 'body',
  FullName = 'full_name',
  PhoneNumber = 'phone_number',
  Subject = 'subject'
}

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createContactus: SingleContactUs;
  createProduct: SingleProduct;
  updateContactus: SingleContactUs;
  updateProduct: SingleProduct;
};


export type MutationCreateContactusArgs = {
  input: ContactUsCreateInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type MutationUpdateContactusArgs = {
  input: ContactUsEditInput;
};


export type MutationUpdateProductArgs = {
  input: ProductEditInput;
};

export type PaginatedContactUs = {
  __typename?: 'PaginatedContactUs';
  error?: Maybe<FieldError>;
  items?: Maybe<Array<ContactUs>>;
  length: Scalars['Float']['output'];
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  error?: Maybe<FieldError>;
  items?: Maybe<Array<Product>>;
  length: Scalars['Float']['output'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ProductCreateInput = {
  description?: Scalars['String']['input'];
  images?: Array<Scalars['String']['input']>;
  quantity?: Scalars['Int']['input'];
  title?: Scalars['String']['input'];
};

export type ProductEditInput = {
  _id: Scalars['ObjectID']['input'];
  description?: Scalars['String']['input'];
  images?: Array<Scalars['String']['input']>;
  quantity?: Scalars['Int']['input'];
  title?: Scalars['String']['input'];
};

/** Allowed fields for filtering Product */
export enum ProductSearchFields {
  Description = 'description',
  Images = 'images',
  Quantity = 'quantity',
  Title = 'title'
}

export type Query = {
  __typename?: 'Query';
  getAllContactus: PaginatedContactUs;
  getAllProduct: PaginatedProduct;
  getContactus: SingleContactUs;
  getProduct: SingleProduct;
};


export type QueryGetAllContactusArgs = {
  filters?: InputMaybe<Scalars['ContactUsFilter']['input']>;
  limit: Scalars['PositiveInt']['input'];
  page: Scalars['PositiveInt']['input'];
  searchFields: SearchContactUsFields;
  sort: SortContactUsArgs;
};


export type QueryGetAllProductArgs = {
  filters?: InputMaybe<Scalars['ProductFilter']['input']>;
  limit: Scalars['PositiveInt']['input'];
  page: Scalars['PositiveInt']['input'];
  searchFields: SearchProductFields;
  sort: SortProductArgs;
};


export type QueryGetContactusArgs = {
  _id: Scalars['ObjectID']['input'];
};


export type QueryGetProductArgs = {
  _id: Scalars['ObjectID']['input'];
};

export type SearchContactUsFields = {
  fields: Array<ContactUsSearchFields>;
  q: Scalars['String']['input'];
};

export type SearchProductFields = {
  fields: Array<ProductSearchFields>;
  q: Scalars['String']['input'];
};

export type SingleContactUs = {
  __typename?: 'SingleContactUs';
  error?: Maybe<FieldError>;
  item?: Maybe<ContactUs>;
};

export type SingleProduct = {
  __typename?: 'SingleProduct';
  error?: Maybe<FieldError>;
  item?: Maybe<Product>;
};

export type SortContactUsArgs = {
  field: ContactUsSearchFields;
  order?: Sorting;
};

export type SortProductArgs = {
  field: ProductSearchFields;
  order?: Sorting;
};

export enum Sorting {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type CreateContactUsMutationVariables = Exact<{
  input: ContactUsCreateInput;
}>;


export type CreateContactUsMutation = { __typename?: 'Mutation', createContactus: { __typename?: 'SingleContactUs', error?: { __typename?: 'FieldError', field: string, message: string } | null, item?: { __typename?: 'ContactUs', _id: string, full_name: string } | null } };

export type GetAllContactusQueryVariables = Exact<{
  page: Scalars['PositiveInt']['input'];
  limit: Scalars['PositiveInt']['input'];
  searchFields: SearchContactUsFields;
  sort: SortContactUsArgs;
  filters?: InputMaybe<Scalars['ContactUsFilter']['input']>;
}>;


export type GetAllContactusQuery = { __typename?: 'Query', getAllContactus: { __typename?: 'PaginatedContactUs', length: number, error?: { __typename?: 'FieldError', field: string, message: string } | null, items?: Array<{ __typename?: 'ContactUs', _id: string, createdAt: any, full_name: string, phone_number: string, subject: string, body: string }> | null } };

export type GetAllProductsQueryVariables = Exact<{
  page: Scalars['PositiveInt']['input'];
  limit: Scalars['PositiveInt']['input'];
  searchFields: SearchProductFields;
  sort: SortProductArgs;
  filters?: InputMaybe<Scalars['ProductFilter']['input']>;
}>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProduct: { __typename?: 'PaginatedProduct', length: number, error?: { __typename?: 'FieldError', field: string, message: string } | null, items?: Array<{ __typename?: 'Product', _id: string, title: string, description: string, images: Array<string>, quantity: number, createdAt: any }> | null } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ObjectID']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'SingleProduct', error?: { __typename?: 'FieldError', field: string, message: string } | null, item?: { __typename?: 'Product', _id: string, title: string, description: string, images: Array<string>, quantity: number, createdAt: any } | null } };


export const CreateContactUsDocument = gql`
    mutation CreateContactUs($input: ContactUsCreateInput!) {
  createContactus(input: $input) {
    error {
      field
      message
    }
    item {
      _id
      full_name
    }
  }
}
    `;
export type CreateContactUsMutationFn = Apollo.MutationFunction<CreateContactUsMutation, CreateContactUsMutationVariables>;

/**
 * __useCreateContactUsMutation__
 *
 * To run a mutation, you first call `useCreateContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactUsMutation, { data, loading, error }] = useCreateContactUsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactUsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateContactUsMutation, CreateContactUsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateContactUsMutation, CreateContactUsMutationVariables>(CreateContactUsDocument, options);
      }
export type CreateContactUsMutationHookResult = ReturnType<typeof useCreateContactUsMutation>;
export type CreateContactUsMutationResult = Apollo.MutationResult<CreateContactUsMutation>;
export type CreateContactUsMutationOptions = Apollo.BaseMutationOptions<CreateContactUsMutation, CreateContactUsMutationVariables>;
export const GetAllContactusDocument = gql`
    query GetAllContactus($page: PositiveInt!, $limit: PositiveInt!, $searchFields: SearchContactUsFields!, $sort: SortContactUsArgs!, $filters: ContactUsFilter) {
  getAllContactus(
    page: $page
    limit: $limit
    searchFields: $searchFields
    sort: $sort
    filters: $filters
  ) {
    error {
      field
      message
    }
    length
    items {
      _id
      createdAt
      full_name
      phone_number
      subject
      body
    }
  }
}
    `;

/**
 * __useGetAllContactusQuery__
 *
 * To run a query within a React component, call `useGetAllContactusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContactusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContactusQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      searchFields: // value for 'searchFields'
 *      sort: // value for 'sort'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetAllContactusQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetAllContactusQuery, GetAllContactusQueryVariables> & ({ variables: GetAllContactusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllContactusQuery, GetAllContactusQueryVariables>(GetAllContactusDocument, options);
      }
export function useGetAllContactusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllContactusQuery, GetAllContactusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllContactusQuery, GetAllContactusQueryVariables>(GetAllContactusDocument, options);
        }
export function useGetAllContactusSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllContactusQuery, GetAllContactusQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllContactusQuery, GetAllContactusQueryVariables>(GetAllContactusDocument, options);
        }
export type GetAllContactusQueryHookResult = ReturnType<typeof useGetAllContactusQuery>;
export type GetAllContactusLazyQueryHookResult = ReturnType<typeof useGetAllContactusLazyQuery>;
export type GetAllContactusSuspenseQueryHookResult = ReturnType<typeof useGetAllContactusSuspenseQuery>;
export type GetAllContactusQueryResult = Apollo.QueryResult<GetAllContactusQuery, GetAllContactusQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts($page: PositiveInt!, $limit: PositiveInt!, $searchFields: SearchProductFields!, $sort: SortProductArgs!, $filters: ProductFilter) {
  getAllProduct(
    page: $page
    limit: $limit
    searchFields: $searchFields
    sort: $sort
    filters: $filters
  ) {
    error {
      field
      message
    }
    length
    items {
      _id
      title
      description
      images
      quantity
      createdAt
    }
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      searchFields: // value for 'searchFields'
 *      sort: // value for 'sort'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables> & ({ variables: GetAllProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export function useGetAllProductsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsSuspenseQueryHookResult = ReturnType<typeof useGetAllProductsSuspenseQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($id: ObjectID!) {
  getProduct(_id: $id) {
    error {
      field
      message
    }
    item {
      _id
      title
      description
      images
      quantity
      createdAt
    }
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetProductQuery, GetProductQueryVariables> & ({ variables: GetProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export function useGetProductSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductSuspenseQueryHookResult = ReturnType<typeof useGetProductSuspenseQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;