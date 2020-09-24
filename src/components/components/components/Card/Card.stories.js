import React from "react";
import Card from "./Card";
import "../../index.css";

export default {
  title: "Card",
  component: Card
};

export const Default = () => (
  <Card>
    <div className="px-6 py-4">
      <div>Default Card</div>
    </div>
  </Card>
);

export const smallCard = () => (
  <Card width="48" maxSize="xs" rounded="lg" shadow="lg" >
    <div className="px-6 py-4">
      <img src="/learner.svg"></img>
      <div className="font-bold text-xl mb-2">sign up as a</div>
      <p className="text-gray-700 text-base">Learner</p>
    </div>
  </Card>
);

export const mediumCard = () => (
  <Card maxSize="md" rounded="lg" shadow="lg" hover="hover">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">sign up as a</div>
      <p className="text-gray-700 text-base">Learner</p>
    </div>
  </Card>
);

export const largeCard = () => (
  <Card maxSize="lg" rounded="lg" shadow="lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">sign up as a</div>
      <p className="text-gray-700 text-base">Learner</p>
    </div>
  </Card>
);

// export const Email = () => (
//   <TextInput
//     id="email"
//     type="email"
//     labelText="Email"
//     placeholder="Enter valid Email"
//   />
// );
