import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayOut = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section class="left_nav"></section>
        <section class="main">
          <Outlet></Outlet>
        </section>
        <section class="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayOut;
