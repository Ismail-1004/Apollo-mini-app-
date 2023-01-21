import gql from "graphql-tag";

export const GET_CHARTERS = {
  query: gql`
    query {
      characters {
        results {
          id
          name
          image
        }
      }
    }`,
};
