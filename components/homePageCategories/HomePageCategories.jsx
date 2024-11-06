"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function HomePageCategories() {
  const categories = [
    "VPN",
    "Payroll Services",
    "CRM",
    "AI Tools",
    "E-Commerce",
    "Website Builders",
    "Web Hosting",
    
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("VPN");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setNoData(false); // Reset noData state for each category click
      try {
        const response = await fetch(`/api/softwares/get-category/${selectedCategory}`);
        
        if (!response.ok) {
          setNoData(true);
          setProducts([]);
          return;
        }
        
        const data = await response.json();
        if (data.length === 0) {
          setNoData(true);
        } else {
          setProducts(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setNoData(true); // Show no data message if there's an error
      } finally {
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [selectedCategory]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
      </div>
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-2 py-2 rounded-full bg-gray-100 ${
                selectedCategory === category ? "bg-gray-300" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <div className="h-[361px]">Loading...</div>
      ) : noData ? (
        <div className="h-[361px] text-center text-gray-500">
          There is no data for this category.
        </div>
      ) : (
        selectedCategory && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {selectedCategory} Softwares
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product._id} className="p-4 border rounded-lg flex flex-col justify-between items-center">
                  <div className="flex justify-center items-center">
                    <Image
                      src={product.logo}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mb-4 h-36"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                  <p className="text-sm mb-2">
                    Rating: {((product.priceRating + product.easeOfUseRating + product.featuresRating + product.supportRating) / 4).toFixed(1)} 
                  </p>
                  <p className="text-sm mb-4">{product.description}</p>
                  <div className="w-full flex justify-between items-center">
                    <Link href={`/software/${product._id}`}>
                      <button
                        className="p-2 inline-flex rounded-xl items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000000,45%,black,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                      >
                        Read More
                      </button>
                    </Link>
                    <Link href={product?.affiliateUrl?.startsWith('http') ? product.affiliateUrl : `https://${product.affiliateUrl}`} target="_blank" rel="noopener noreferrer">
                      <button

type="submit"  
className="p-2 inline-flex rounded-xl items-center justify-center border border-slate-800 bg-gradient-to-r from-teal-800 via-teal-600 to-teal-500 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
>
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center py-4">
              <Link href={`/category/${selectedCategory}`} className="text-blue-500">
                show all {selectedCategory} Softwares
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}
