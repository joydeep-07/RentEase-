import React from 'react'
import { data } from "../utils/data";
import ItemCards from '../components/ItemCards';
const Home = () => {
    const furniture = data.filter((item) => item.category === "Furniture");
  return (
    <div>
      <ItemCards items={furniture} limit={8} />
    </div>
  );
}

export default Home