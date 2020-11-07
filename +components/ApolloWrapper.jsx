import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloWrapper = ({ children }) => {
  const [client, setClient] = useState();

  useEffect(() => {
    const uri = `https://${Constants.manifest.extra.apiAddress}/api`;
    const apolloClient = new ApolloClient({
      uri,
      cache: new InMemoryCache(),
      request: (operation) => {
        operation.setContext((context) => ({
          headers: {
            ...context.headers,
          },
        }));
      },
    });

    setClient(apolloClient);
  }, [setClient]);

  if (client) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  } else {
    return null;
  }
};
