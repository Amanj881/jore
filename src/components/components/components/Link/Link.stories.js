import React from "react";
import Link from "./Link";
import "../../index.css";

export default {
  title: "Link",
  component: Link,
};

export const Default = () => (
  <div className="w-64">
    <Link labelText="Forgot your password?" type="link" href="#"/>
  </div>
);
export const Smalllink = () => (
  <div className="w-64">
    <Link labelText="Forgot your password?" type="smalllink" href="#"/>
  </div>
);

export const Largelink = () => (
  <div className="w-64">
    <Link labelText="Forgot your password?" type="largelink" href="#"/>
  </div>
);








