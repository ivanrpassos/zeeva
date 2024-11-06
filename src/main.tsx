import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

import { client } from "./lib/client";
import { Footer } from "./pages/components/footer.tsx";
import { Header } from "./pages/components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ApolloProvider>
  </StrictMode>
);
