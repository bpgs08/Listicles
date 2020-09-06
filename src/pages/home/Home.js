import React from "react";
import Heading from "../../components/heading";
import Footer from "../../components/footer";
import VisibleTodoList from "../../containers/VisibleTodoList";

const Home = () => {
  return (
    <div>
      <Heading />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default Home;
