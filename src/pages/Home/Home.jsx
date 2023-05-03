import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan } from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
  </>
);

export default Home;
