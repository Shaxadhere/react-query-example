
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDrafts } from "./query/draftsQuery"


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Drafts />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

const Drafts = () => {
  const { status, data, error, isFetching } = useDrafts()
  return (
    <div>
      <h1>Hello {status}</h1>
      {JSON.stringify(data)}
    </div>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
