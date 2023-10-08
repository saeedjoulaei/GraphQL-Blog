import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";
import theme from "./mui/theme";
import { ThemeProvider } from "@emotion/react";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clnh5zfha6jb001ujg67c1ime/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
