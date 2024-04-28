import React from 'react';
import CraftItemList from '../../components/craft-section/CraftItemList';
import ArtsAndCrafts from './../arts-crafts/ArtsAndCrafts';

const Home = () => {
    return (
        <div>
            <CraftItemList></CraftItemList>
            <ArtsAndCrafts></ArtsAndCrafts>
        </div>
    );
};

export default Home;