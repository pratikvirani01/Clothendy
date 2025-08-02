// pages/BlogDetailPage.js
import React from "react";
import BlogdetailCard from "../../components/Blogdetails/BlogdetailCard";

const sampleBlog = {
  title: "Essential Tips for Preserving the Beauty of Your Silk Sarees",
  sections: [
    {
      text: `A silk saree is not just a piece of clothing; it's a timeless expression of elegance and tradition. 
      From the intricate designs of <strong>Kanjivaram pure silk saree</strong> to the rich heritage of Banarasi sarees, 
      every silk drape tells a unique story. However, these luxurious fabrics demand extra care to retain their beauty for years.`
    },
    {
      heading: "Swift Stain Removal:",
      text: `Silk sarees are susceptible to stains, and timely action is crucial. Whether it's an accidental oil spill or ghee, 
      immediate intervention is necessary. Sprinkle talcum powder, let it absorb the grease, then gently wash in cold water. 
      Designs like <strong>bridal Kanchipuram silk saree</strong> may need dry cleaning.`
    },
    {
      heading: "Say No To Chemicals:",
      text: `Avoid harsh chemicals like soap, detergent, and bleach. Spot clean using cold water and mild detergent 
      to preserve the luster of your silk sarees.`
    }
  ],
};

const BlogDetails = () => {
  return <BlogdetailCard title={sampleBlog.title} sections={sampleBlog.sections} />;
};

export default BlogDetails;
