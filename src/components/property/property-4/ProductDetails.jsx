import { BiLocationPlus, BiBed, BiStar } from "react-icons/bi";
import review_1 from "../../../assets/review_1.jpg"
import review_2 from "../../../assets/review_2.jpg"
import review_3 from "../../../assets/review_3.jpg"


const ProductDetails = () => {

    return (
        <div>

            <div className="bg-slate-200 mb-6">
                <h1 className="lg:py-24 py-12 lg:px-12 px-6 lg:text-3xl text-2xl font-bold">Product Details</h1>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 items-start justify-center gap-8">

                <div className="lg:col-span-2 space-y-8">

                    <div>
                        <h2 className="lg:text-2xl text-xl font-semibold pt-6">Agile Real Estate Group</h2>
                        <div className="flex items-center gap-x-3 pt-3">
                            <BiLocationPlus />
                            <p>Belmont Gardens, Chicago</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="lg:text-xl text-lg font-semibold">Description</h3>

                        <p className="lg:leading-loose">
                            Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.

                            To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.
                        </p>

                    </div>

                    <div className="space-y-5">
                        <h3 className="lg:text-xl text-lg font-semibold">Property Detail</h3>

                        <div className="p-12 bg-slate-200 lg:flex items-center gap-x-28 lg:space-y-0 space-y-3">
                            <ul className="space-y-3">
                                <li className="space-x-6">
                                    <label>Property ID:</label> <span className="font-semibold">HZ29</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Home Area: </label> <span className="font-semibold">120 sqft</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Rooms:</label> <span className="font-semibold">7</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Baths:</label> <span className="font-semibold">2</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Year built:</label> <span className="font-semibold">1992</span>
                                </li>
                            </ul>

                            <ul className="space-y-3">
                                <li className="space-x-6">
                                    <label>Lot Area:</label> <span className="font-semibold">HZ29 </span>
                                </li>
                                <li className="space-x-6">
                                    <label>Lot dimensions:</label> <span className="font-semibold">120 sqft</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Beds:</label> <span className="font-semibold">7</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Price:</label> <span className="font-semibold">2</span>
                                </li>
                                <li className="space-x-6">
                                    <label>Property Status:</label> <span className="font-semibold">For Sale</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="space-y-5">
                        <h3 className="lg:text-xl text-lg font-semibold">Facts and Features</h3>

                        <div className="lg:space-y-0 space-y-3">
                            <ul className="flex flex-wrap items-center gap-8">
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Living Room</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Garage</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Dining Area</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Bedroom</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="flex flex-wrap items-center gap-8 pt-8">
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Living Room</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Garage</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Dining Area</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                                        <BiBed />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">Bedroom</p>
                                        <p className="text-sm">20 x 16 sq feet</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="space-y-5">
                        <h3 className="lg:text-xl text-lg font-semibold">Facts and Features</h3>

                        <div className="lg:space-y-0 space-y-3">
                            <ul className="flex items-center flex-wrap lg:gap-x-16 gap-5">
                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Air Conditioning</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Gym</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Microwave</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Barbeque</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Recreation</p>
                                </li>

                            </ul>
                            <ul className="flex items-center flex-wrap lg:gap-x-16 gap-5 pt-5">
                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Air Conditioning</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Gym</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Microwave</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Barbeque</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Recreation</p>
                                </li>

                            </ul>
                            <ul className="flex items-center flex-wrap lg:gap-x-16 gap-5 pt-5">
                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Air Conditioning</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Gym</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Microwave</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Barbeque</p>
                                </li>

                                <li className="flex items-center gap-x-4">
                                    <input type="checkbox" />
                                    <p>Recreation</p>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="space-y-5">
                        <h3 className="lg:text-xl text-lg font-semibold">Location</h3>

                        <div className="">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2015335136866!2d-73.96510612427137!3d40.669528240215115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2s!4v1696871857905!5m2!1sen!2s" className="w-full h-96"></iframe>
                        </div>

                    </div>

                    <div className="flex flex-col gap-y-8">

                        <h3 className="lg:text-2xl text-xl font-semibold mb-8 text-primary">Customer Reviews</h3>

                        <div className="flex items-start gap-x-8 pb-6 border-b border-slate-400">
                            <div>
                                <img src={review_1} className="rounded-full lg:w-24 w-32 lg:h-24" alt='review'></img>
                            </div>
                            <div className="space-y-5">
                                <h5 className="lg:text-xl text-lg font-semibold hover:text-primary">Adam Smit</h5>
                                <div className="text-primary flex items-center gap-1">
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                            </div>

                        </div>

                        <div className="flex items-start gap-x-8 pb-6 border-b border-slate-400">
                            <div>
                                <img src={review_2} className="rounded-full lg:w-24 w-32 lg:h-24" alt='review'></img>
                            </div>
                            <div className="space-y-5">
                                <h5 className="lg:text-xl text-lg font-semibold hover:text-primary">Adam Smit</h5>
                                <div className="text-primary flex items-center gap-1">
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                            </div>

                        </div>

                        <div className="flex items-start gap-x-8 pb-6 border-b border-slate-400">
                            <div>
                                <img src={review_3} className="rounded-full lg:w-24 w-32 lg:h-24" alt='review'></img>
                            </div>
                            <div className="space-y-5">
                                <h5 className="lg:text-xl text-lg font-semibold hover:text-primary">Adam Smit</h5>
                                <div className="text-primary flex items-center gap-1">
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                    <BiStar />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="chat-box-section lg:sticky top-16">

                    <div className="border bg-slate-50 p-5 shadow-lg rounded-md">

                        <p className="text-xl text-primary font-semibold">Enquire about this room</p>
                        <form>
                            <textarea type='text' className="w-full input rounded-md my-5" placeholder="Your Message" rows='8'>

                            </textarea>
                        </form>

                        <button className="uppercase bg-primary w-full py-2 rounded-md text-white font-semibold">Start chat</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;
