import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import MainPage from "./MainPage";
import PrivateRoutes from "./PrivateRoutes";
import Tabulator from "./Tabulator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root></Root>} />
      <Route path="/login" element={<Login></Login>} />
      <Route element={<PrivateRoutes />}>
        <Route path="/main" element={<MainPage></MainPage>} />
        <Route
          path="/tabulator"
          element={<Tabulator></Tabulator>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
