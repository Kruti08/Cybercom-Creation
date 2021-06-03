import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
    ) {
      id
    }
  }
`;
