import React, { useState } from 'react';

const DataTreeComponent = ({ categories, productsData }) => {
  // stores inital data from api
  const [mappingCategories, setMappingCategories] = useState(categories);
  // stores the data to map if there is
  const [nextChild, setNextChild] = useState(mappingCategories);
  // finds products by the specified category and updates the state
  const [productsByCategory, setProductsByCategory] = useState();

  const handleClick = (item) => {
    item.child ? setNextChild(item.child) : setMappingCategories([item]);
    const productsArray = productsData.filter(
      (product) => product.goodsCategory === item._id
    );
    setProductsByCategory(productsArray);
  };

  return (
    <div>
      {nextChild &&
        nextChild.map((item) => (
          <button onClick={() => handleClick(item)} key={item._id}>
            {item.name}
          </button>
        ))}
      {productsByCategory &&
        productsByCategory.map((product) => <h1>{product.name}</h1>)}
    </div>
  );
};

export default DataTreeComponent;
