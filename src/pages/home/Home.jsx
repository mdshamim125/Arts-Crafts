import React from 'react';
import CraftItemList from '../../components/craft-section/CraftItemList';
import ArtsAndCrafts from './../arts-crafts/ArtsAndCrafts';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItemList></CraftItemList>
            <ArtsAndCrafts></ArtsAndCrafts>
        </div>
    );
};

export default Home;