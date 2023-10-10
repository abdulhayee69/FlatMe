import {
  Testimonial,
} from "../components/common/page-componets";
import {
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div  className="">
      <Hero />
      <div className="px-[3%] md:px-[6%]">
      <Filters />
      <Invest />
      <Speciality />
      <Testimonial />
    </div>
    </div>
    
  );
};

export default Home;
