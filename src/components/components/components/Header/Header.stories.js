import React from "react";
import Header from "./Header";
import "../../index.css";

export default {
  title: "Header",
  component: Header,
};

export const Default = () => (
  <div className="w-64">
    <Header labelText="Default Button" />
  </div>
);