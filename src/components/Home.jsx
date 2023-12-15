import NoDiscount from "./Card/NoDiscount";
import DiscountCard from "./Card/DiscountCard";
import FreeCard from "./Card/FreeCard";

const Home = () => {
  return (
    <div className="home-container">
      <div >Available products</div>
      <div className="product-container">
        <DiscountCard></DiscountCard>
        <NoDiscount></NoDiscount>
        <FreeCard></FreeCard>
      </div>
    </div>
  );
};

export default Home;
