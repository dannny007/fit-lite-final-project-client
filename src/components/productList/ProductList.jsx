import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for product 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for product 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for product 3.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for product 4.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the description for product 5.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is the description for product 6.",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  return (
    <div className="bg-customLightPurple py-32 px-12">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">{product.name}</h2>
              <p className="text-black mt-2">{product.description}</p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;