import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan, Banner, ChooseUs } from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
    <Banner/>
    <ChooseUs/>
  </>
);

export default Home;
