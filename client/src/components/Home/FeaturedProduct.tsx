import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProduct() {
  return (
    <div className="max-w-7xl mx-auto my-14">
      <div className="grid grid-cols-3 gap-5 ">
        {/* FeaturedProductCard has productName, discountedPrise and originalPrise props */}
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
      </div>
    </div>
  )
}
