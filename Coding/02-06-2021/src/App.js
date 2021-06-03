import React from 'react';
import PostData from "./apiPractice/AxiosApi/PostData";
import GetData from "./apiPractice/AxiosApi/GetData";
import UpdateData from "./apiPractice/AxiosApi/UpdateData";
import DeleteData from "./apiPractice/AxiosApi/DeleteData";
import AddCustomer from "./apiPractice/FetchApi/AddCustomer";
import GetCustomer from "./apiPractice/FetchApi/GetCustomer";
import UpdateCustomer from "./apiPractice/FetchApi/UpdateCustomer";
import DeleteCustomer from "./apiPractice/FetchApi/DeleteCustomer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import AddData from './apiPractice/GraphQlApi/AddData';
import GetData from './apiPractice/GraphQlApi/GetData';

const errorLink = onError(({ graphqlErrors}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "url" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        {/* <AddData /> */}
        <GetData></GetData>
      </ApolloProvider>
      {/* <PostData></PostData> */}
      {/* <GetData></GetData> */}
      {/* <UpdateData></UpdateData> */}
      {/* <DeleteData></DeleteData> */}
      {/* <AddCustomer></AddCustomer> */}
      {/* <GetCustomer></GetCustomer> */}
      {/* <UpdateCustomer></UpdateCustomer>
      <DeleteCustomer></DeleteCustomer> */}
    </div>
  );
} 

export default App;
