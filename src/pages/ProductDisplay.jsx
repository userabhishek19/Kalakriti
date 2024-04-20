import React from 'react';

const ProductDisplay = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ullamcorper velit, id laoreet  at.',
      price: 100,
      image_path: 'assets/1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Sed tincidunt elit ut justo scelerisque, ac rutrum leo aliquam. Aenean vel ultrices leo, a ultrices elit.',
      price: 150,
      image_path: 'assets/1.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Nulla facilisi. Nunc nec magna sit amet odio vehicula gravida. Nullam suscipit ultrices neque vitae fringilla.',
      price: 200,
      image_path: 'product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Praesent in fringilla leo. Mauris in ipsum vel arcu cursus luctus. Sed tincidunt nunc sed ex fringilla.',
      price: 120,
      image_path: 'product4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Vestibulum auctor leo nec sapien dictum convallis. Cras auctor turpis a purus vestibulum, nec interdum justo malesuada.',
      price: 180,
      image_path: 'product5.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Another product description.',
      price: 220,
      image_path: 'product6.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Yet another product description.',
      price: 90,
      image_path: 'product7.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of product 8.',
      price: 130,
      image_path: 'product8.jpg',
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description of product 9.',
      price: 170,
      image_path: 'product9.jpg',
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description of product 10.',
      price: 200,
      image_path: 'product10.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-start overflow-x-auto p-10">
      {products.map((product) => (
        <div key={product.id} className="w-64 h-96 mr-10 mb-10 bg-opacity-80 border border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img src={product.image_path} alt="Product Image" className="w-full h-auto max-h-40 rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <strong className="block  mb-2">Price (Rs.): {product.price}</strong>
            <a href={`add_to_cart.php?id=${product.id}`} className="bg-gradient-to-r from-orange-500 to-orange-800 text-white text-center py-2 px-4 rounded-lg block hover:bg-green-600 transition-colors">
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
