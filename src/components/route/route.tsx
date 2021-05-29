import  React from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { TabPane} from "components/tab-pane/tab-pane";


export  const RenderRoute = () => {
  return (
    <Router>
    <Routes>
      <Route path={"/contact"} element={<TabPane />} />
      <Navigate to={"/contact"} />
    </Routes>
    </Router>
  );
};
