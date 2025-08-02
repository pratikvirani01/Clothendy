import React, { useState } from "react";
import './CodeSet.css';
import ProductToolbar from "../../components/ProductToolbar/ProductToolbar";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
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
        hoverImage: "/banner-image.jpg",
        title: "Scarlet Red Alia Cut Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Coral Orange Cotton Suit with Kota Dupatta",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Shoulder Cut Light Marigold Suit",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Twilight Blossom Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Dark Blue Chiffon Saree",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Yellow Embroidered Kurti",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Twilight Blossom Printed Co-ord Set",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",
        title: "Dark Blue Chiffon Saree",
        price: 2500,
    },
    {
        image: "/sliderImages.jpg",
        hoverImage: "/banner-image.jpg",    
        title: "Yellow Embroidered Kurti",
        price: 2500,
    },
    // add more products as needed
];

const CodeSet = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div>
            <div className="mainTitle">
                <h2>Code Set</h2>
            </div>
            <ProductToolbar onFilterOpen={() => setIsFilterOpen(true)} />
            <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            <ProductGrid products={products} />
            <Footer />
        </div>
    );
};

export default CodeSet;
