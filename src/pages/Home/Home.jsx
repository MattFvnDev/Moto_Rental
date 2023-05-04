import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan, Banner, ChooseUs, Testimonials } from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
    <Banner/>
    <ChooseUs/>
    <Testimonials/>
  </>
);

export default Home;
