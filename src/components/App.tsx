import React, { FunctionComponent } from "react";
import { AppRouter } from "../router/app-router";
import { Layout } from "./layout";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
