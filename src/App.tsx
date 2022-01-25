import React, { VoidFunctionComponent } from "react";
import Router from "./Router";
import Layout from "./components/Layout";

const App: VoidFunctionComponent = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
