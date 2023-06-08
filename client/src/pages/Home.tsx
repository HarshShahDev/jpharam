import Banner from "../components/Home/Banner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div>
      <FeaturedProduct/>
      <Banner />
      <Stats />
    </div>
  );
}
