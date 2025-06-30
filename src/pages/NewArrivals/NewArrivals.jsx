import React, { useState } from "react";
import ProductToolbar from "../../components/ProductToolbar/ProductToolbar";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import './NewArrivals.css';
import Footer from "../../components/Footer/Footer";

// const products = [
//     {
//         image: "https://example.com/image1.jpg",
//         title: "Twilight Blossom Printed Co-ord Set",
//         price: 2000,
//     },
//     {
//         image: "https://example.com/image2.jpg",
//         title: "Scarlet Red Alia Cut Printed Co-ord Set",
//         price: 2500,
//     },
//     {
//         image: "https://example.com/image3.jpg",
//         title: "Coral Orange Cotton Suit Set with Kota Dupatta",
//         price: 2500,
//     },
//     {
//         image: "https://example.com/image4.jpg",
//         title: "Shoulder Cut Halter Neck Light Marigold Suit",
//         price: 2500,
//     },
// ];

const products = [
    {
        image: "/sliderImages.jpg",
        title: "Scarlet Red Alia Cut Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Coral Orange Cotton Suit with Kota Dupatta",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Shoulder Cut Light Marigold Suit",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Twilight Blossom Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Dark Blue Chiffon Saree",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Yellow Embroidered Kurti",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Twilight Blossom Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Dark Blue Chiffon Saree",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        title: "Yellow Embroidered Kurti",
        price: 2500,
    },
    // add more products as needed
];

const NewArrivals = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div>
            <div className="mainTitle">
                <h2>New Arrivals</h2>
            </div>
            <ProductToolbar onFilterOpen={() => setIsFilterOpen(true)} />
            <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            <ProductGrid products={products} />
            
            <Footer />
        </div>
    );
};

export default NewArrivals;
