import React, { useState } from 'react';

const DataTreeComponent = ({ categories, productsData }) => {
  // stores inital data from api
  const [mappingCategories, setMappingCategories] = useState(categories);
  // stores the data to map if there is
  const [nextChild, setNextChild] = useState(mappingCategories);
  // finds products by the specified category and updates the state
  const [productsByCategory, setProductsByCategory] = useState();

  const handleClick = (item) => {
    // checks if the category item has child
    item.child ? setNextChild(item.child) : setMappingCategories([item]);

    // on every click, checks if the item has related products
    const productsArray = productsData.filter(
      (product) => product.goodsCategory === item._id
    );
    // sets the products in the state to update onb every click
    setProductsByCategory(productsArray);
  };

  return (
    <div>
      {/* if there is child it renders the child otherwise it renders the default nextChild which consists of categories array by default */}
      {nextChild &&
        nextChild.map((item) => (
          <button onClick={() => handleClick(item)} key={item._id}>
            {item.name}
          </button>
        ))}
      {/* conditionally renders products based on their category */}
      {productsByCategory &&
        productsByCategory.map((product) => <h1>{product.name}</h1>)}
    </div>
  );
};

export default DataTreeComponent;
