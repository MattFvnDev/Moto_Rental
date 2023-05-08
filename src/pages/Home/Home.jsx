import React from "react";
import style from "./Home.module.css";
import { Hero, BookForm, Plan, Banner, ChooseUs, Testimonials, Footer, MobileApp} from "../../components";

const Home = () => (
  <>
    <Hero />
    <Plan/>
    <BookForm/>
    <Banner/>
    <ChooseUs/>
    <Testimonials/>
    <MobileApp/>
    <Footer/>
  </>
);

export default Home;
