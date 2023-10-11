import { BiBuildingHouse, BiPlus } from "react-icons/bi";

const Footer = () => {
  return (
<div className="flex justify-center items-center">
  <div className="flex p-8 gap-48 items-center ">
    <div className="flex gap-1 items-center justify-center ">
    <BiBuildingHouse className="text-orange-500 text-4xl"/>
    <h1 className="text-white text-2xl font-bold">Flatme</h1>
    </div>
    <div className="flex gap-11 text-white text-md">
      <div>Home</div>
      <div>Property</div>
      <div>Contact</div>
      <div>Login</div>
      <div>Sign Up</div>
    </div>

    <div>
      <button className="flex items-center gap-2 text-white px-4 py-2 bg-orange-500 rounded-xl">Create Listing<BiPlus /></button>
    </div>
    
  </div>
</div>
  );
};

export default Footer;
