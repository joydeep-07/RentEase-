import React from 'react'
import Hero from '../components/Hero'
import Furniture from '../components/Furniture'
import { data } from "../utils/data";
import ItemCards from "../components/ItemCards";
const Home = () => {
  const furniture = data.filter((item) => item.category === "Furniture");
  return (
    <div>
      {/* <Hero/> */}
      {/* <Furniture/> */}
      <ItemCards items={furniture} limit={8} />
    </div>
  );
}

export default Home