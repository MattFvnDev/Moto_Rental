import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan, Banner, ChooseUs, Testimonials, Footer} from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
    <Banner/>
    <ChooseUs/>
    <Testimonials/>
    <Footer/>
  </>
);

export default Home;
