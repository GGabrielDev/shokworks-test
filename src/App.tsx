import React, { VoidFunctionComponent } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Router from "./Router";

const App: VoidFunctionComponent = () => {
  return (
    <>
      <NavigationBar />
      <Router />
    </>
  );
};

export default App;
