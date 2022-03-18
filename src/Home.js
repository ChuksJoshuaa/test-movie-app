import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import Hero from "./Hero";
const Home = () => {
  return (
    <main>
      <Hero />
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
