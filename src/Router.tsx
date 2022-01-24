import React, { VoidFunctionComponent } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const Router: VoidFunctionComponent = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="redirect" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
