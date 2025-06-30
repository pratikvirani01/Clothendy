import React, { useEffect, useRef, useState } from 'react';
import { Users, ZoomIn as Loom, Heart, ShoppingBag, Home } from 'lucide-react';

const BenefitsSlider = () => {
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const benefits: Benefit[] = [
        {
            icon: <Users size={64} color="#1f2937" strokeWidth={1} />,
            title: "Uniquely Curated",
            description: "Discover the rare and remarkable, curated fashion for trendsetters"
        },
        {
            icon: <Loom size={64} color="#1f2937" strokeWidth={1} />,
            title: "Handloom",
            description: "Threads of heritage, weaves of artistry, embrace timeless craftsmanship"
        },
        {
            icon: <Heart size={64} color="#1f2937" strokeWidth={1} />,
            title: "Supporting Artisans",
            description: "Empower artisans, wear the mark of handcrafted excellence"
        },
        {
            icon: <ShoppingBag size={64} color="#1f2937" strokeWidth={1} />,
            title: "Seamless Shopping",
            description: "Shop with ease, embrace a seamless fashion experience"
        },
        {
            icon: <Home size={64} color="#1f2937" strokeWidth={1} />,
            title: "Home Grown",
            description: "Rooted in authenticity, celebrate local fashion, wear your heritage."
        }
    ];

    const goToSlide = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.children[0]?.clientWidth || 0;
            const gap = 32; // Gap between slides
            const scrollPosition = index * (slideWidth + gap);
            sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            setCurrentSlide(index);
        }
    };

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % benefits.length;
        goToSlide(nextIndex);
    };

    const startAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [currentSlide]);

    return (
        <div className="benefits-slider-container">
            <div
                ref={sliderRef}
                className="benefits-slider"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
            >
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-slide">
                        <div className="benefit-icon">
                            {benefit.icon}
                        </div>
                        <h3 className="benefit-title">
                            {benefit.title}
                        </h3>
                        <p className="benefit-description">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Slide indicators */}
            <div className="slider-indicators">
                {benefits.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BenefitsSlider;