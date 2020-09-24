import React from "react";
import Sidebar from "./Sidebar";
import "../../index.css";

export default {
  title: "Sidebar",
  component: Sidebar,
};

export const Default = () => <Sidebar />;

export const Responsive = () => (
  <div className="h-screen flex">
    <Sidebar />
  </div>
);
