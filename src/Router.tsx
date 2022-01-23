import React, { VoidFunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const Router: VoidFunctionComponent = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default Router;
