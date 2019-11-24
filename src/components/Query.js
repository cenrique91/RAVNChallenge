import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql"
  });
  
  const UserQuery = () => {
    return (
      <Query
        query={gql`
          {
            repositoryOwner(login: "cenrique91") {
              login
              ... on User {
                bio
                repositories(first: 100) {
                  nodes {
                    nameWithOwner
                  }
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
  
          return data.repositoryOwner.repositories.nodes.map(repo => {
            return <p>{repo.nameWithOwner}</p>;
          });
        }}
      </Query>
    );
  };

  export default withRouter(Query);