"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or load from a data source
    setProducts([
      { id: 1, name: 'Eco-Friendly Water Bottle', price: 24.99, image: 'https://picsum.photos/seed/bottle/300/200' },
      { id: 2, name: 'Smart Home Hub', price: 129.99, image: 'https://picsum.photos/seed/hub/300/200' },
      { id: 3, name: 'Wireless Earbuds', price: 79.99, image: 'https://picsum.photos/seed/earbuds/300/200' },
      { id: 4, name: 'Fitness Tracker', price: 89.99, image: 'https://picsum.photos/seed/fitness/300/200' },
      { id: 5, name: 'Portable Charger', price: 49.99, image: 'https://picsum.photos/seed/charger/300/200' },
      { id: 6, name: 'Bluetooth Speaker', price: 69.99, image: 'https://picsum.photos/seed/speaker/300/200' },
    ]);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-activeColor mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <figure className="px-10 pt-10">
                <img src={product.image} alt={product.name} className="rounded-xl object-cover h-48 w-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{product.name}</h3>
                <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;