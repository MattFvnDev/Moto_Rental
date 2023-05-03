import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan, Banner } from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
    <Banner/>
  </>
);

export default Home;
