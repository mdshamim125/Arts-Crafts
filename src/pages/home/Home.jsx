import React from "react";
import CraftItemList from "../../components/craft-section/CraftItemList";
import ArtsAndCrafts from "./../arts-crafts/ArtsAndCrafts";
import Banner from "../../components/banner/Banner";
import Arts from "../add-craft/Arts/Arts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItemList></CraftItemList>
      {/* <ArtsAndCrafts></ArtsAndCrafts> */}
      <Arts></Arts>
    </div>
  );
};

export default Home;
