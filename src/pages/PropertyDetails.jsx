import ProductDetails from "../components/property/property-4/ProductDetails";
import { property } from "../data/dummyData";


const PropertyDetails = () => {
    return (
        <div className="pt-20 px-[3%] md:px-[6%]">
            <ProductDetails pageData={property}/>
        </div>
    );
};

export default PropertyDetails;
