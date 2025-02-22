"use client";

import React from "react";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Importance of Guar in Agriculture & Industry",
      category: "Agricultural Insights",
      description:
        "Learn how guar and its by-products play a crucial role in various industries, including food, pharmaceuticals, and animal feed.",
      image: "/assets/images/blogs/guar-importance.jpg",
      link: "/blog/importance-of-guar",
      date: "2025-02-05",
    },
    {
      id: 2,
      title: "Why Merta City is India’s Largest Raw Material Mandi",
      category: "Market Insights",
      description:
        "Explore why Merta City has become the biggest hub for raw materials and how it supports the agricultural supply chain.",
      image: "/assets/images/blogs/merta-mandi.jpg",
      link: "/blog/merta-city-raw-material-mandi",
      date: "2025-02-03",
    },
    {
      id: 3,
      title: "Health Benefits of Psyllium Husk",
      category: "Health & Nutrition",
      description:
        "Discover the numerous health benefits of psyllium husk, a key product in dietary fiber supplements and gut health improvement.",
      image: "/assets/images/blogs/psyllium-husk.jpg",
      link: "/blog/health-benefits-psyllium-husk",
      date: "2025-02-01",
    },
    {
      id: 4,
      title: "How Roasted Guar Korma Boosts Animal Nutrition",
      category: "Animal Feed",
      description:
        "Learn why roasted guar korma is a preferred high-protein feed for livestock and poultry farming.",
      image: "/assets/images/blogs/roasted-guar-korma.jpg",
      link: "/blog/roasted-guar-korma-nutrition",
      date: "2025-01-28",
    },
    {
      id: 5,
      title: "The Growing Global Demand for Cumin and Fennel Seeds",
      category: "Export Trends",
      description:
        "Explore the rising global demand for Indian cumin and fennel seeds and the export opportunities for businesses.",
      image: "/assets/images/blogs/cumin-fennel.jpg",
      link: "/blog/global-demand-cumin-fennel",
      date: "2025-01-25",
    },
    {
      id: 6,
      title: "Processing of Guar Seeds: From Farm to Industry",
      category: "Production Process",
      description:
        "A step-by-step guide on how guar seeds are processed into refined dall, guar churi, and guar korma.",
      image: "/assets/images/blogs/guar-processing.jpg",
      link: "/blog/guar-seed-processing",
      date: "2025-01-22",
    },
    {
      id: 7,
      title: "Dill and Fenugreek: Hidden Gems of Indian Agriculture",
      category: "Spices & Herbs",
      description:
        "Learn why dill and fenugreek seeds are valued for their medicinal and culinary benefits worldwide.",
      image: "/assets/images/blogs/dill-fenugreek.jpg",
      link: "/blog/dill-fenugreek-benefits",
      date: "2025-01-20",
    },
    {
      id: 8,
      title: "Why Choose HANUMANT Warehouse for Bulk Agricultural Supply?",
      category: "Business & Trade",
      description:
        "Discover what makes HANUMANT Warehouse a trusted supplier for bulk agricultural commodities and spices.",
      image: "/assets/images/blogs/hanumant-warehouse.jpg",
      link: "/blog/hanumant-warehouse-supplier",
      date: "2025-01-18",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-primary-main mb-8 text-center font-montserrat">
        Latest Blogs
      </h2>

      {/* Blog Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <li
            key={i}
            className="relative flex flex-col items-start bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Blog Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={"https://blog.nbs-us.com/hubfs/Warehouse_automation_sm.jpg"}
                alt={blog.title}
                className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5 flex flex-col">
              <span className="text-sm text-gray-500 mb-2 font-opensans">
                {blog.category}
              </span>
              <h3 className="text-lg font-bold text-primary-main mb-3 font-montserrat line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2 font-opensans">
                {blog.description}
              </p>

              {/* Read More Button */}
              {/* <Link
                href={blog.link}
                className="mt-auto inline-block text-sm font-medium text-primary-main hover:underline font-opensans"
              >
                Read More →
              </Link> */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
