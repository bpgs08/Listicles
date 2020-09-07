import React from "react";
import Heading from "../../components/heading";
import VisibleTodoList from "../../containers/VisibleTodoList";

const Home = () => {
  return (
    <>
      <Heading />
      <VisibleTodoList />
    </>
  );
};

export default Home;
