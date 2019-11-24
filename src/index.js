import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "a5adbff5d71563a508ebf84a41a3e977e5088bf3 ";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// const client = new ApolloClient({
//   uri: "https://api.github.com/graphql"
// });

const CharactersQuery = () => {
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

function App() {
  return (
    <div className="App">
      <CharactersQuery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
