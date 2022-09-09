import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./BootstrapTest";
import ShoppingList from "./ShoppingList";
import CustomList from "./CustomList";
import Clock from "./Clock";
import Switch from "./Switch";
import LoginController from "./LoginController";
import ListAndKeys from "./ListAndKeys";
import LiftingStateUp from "./LiftingStateUp";
import CompositionVsInheritance from "./CompositionVsInheritance";
import HooksOverview from "./HooksOverview";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //  <React.StrictMode>
  <div>
    <App />
    <hr />
    {/* <ShoppingList name="Mark" /> */}
    <hr />
    <CustomList />
    <hr />
    <Clock />
    <hr />
    <Switch />
    <hr />
    <LoginController />
    <hr />
    <ListAndKeys numbers={[1,2,3]} />
    <hr />
    <LiftingStateUp />
    <hr />
    <CompositionVsInheritance />
    <hr />
    <HooksOverview />
  </div>
  // </React.StrictMode>
);
