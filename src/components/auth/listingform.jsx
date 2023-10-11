import React, { useState } from "react";
import axios from "axios";

const ListingForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("New Zealand");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [saleType, setSaleType] = useState("");
  const [homeType, setHomeType] = useState("");
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [isPublished,setIsPublished] = useState("isPublished");

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (fieldName === "mainImage") {
      setMainImage(file);
    } else {
      setImages([...images, { name: file.name, file }]);
    }
  };

  const createListing = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("zipcode", zipcode);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("saleType", saleType);
    formData.append("homeType", homeType);
    formData.append("is_published", isPublished );



    formData.append("mainImage", mainImage);
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image.file);
    });

    try {
      const response = await axios.post("http://localhost:3000/listings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Data submitted successfully: " + response.data);
    } catch (error) {
      console.error("Error submitting data: " + error);
    }
  };


  return (
    <div>
      <h2 className="text-center lg:text-4xl text-2xl font-semibold text-orange-600">
        Create Listing
      </h2>
      <div className="lg:w-7/12 flex flex-col mx-auto bg-slate-50 mt-14 rounded-xl border shadow-lg">
        <div className="lg:p-12 p-6">
          <div className="mt-6">
            <p className="pb-2 dark:text-black">Title</p>
            <input
              type="text"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <p className="pb-2 dark:text-black">Country</p>
            <div
              className="border-4 w-[700px] flex items-center pl-4 text-black rounded-xl  h-12"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              New Zealand
            </div>
          </div>
          <div className="mt-6">
            <p className="pb-2 dark:text-black">City</p>
            <select
              type="text"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="northland">Northland</option>
              <option value="auckland">Auckland</option>
              <option value="waikato">Waikato</option>
              <option value="bay-of-plenty">Bay of Plenty</option>
              <option value="gisborne">Gisborne</option>
              <option value="hawkes-bay">Hawke's Bay</option>
              <option value="taranaki">Taranaki</option>
              <option value="manawatu-whanganui">Manawatu-Whanganui</option>
              <option value="wellington">Wellington</option>
              <option value="tasman">Tasman</option>
              <option value="nelson">Nelson</option>
              <option value="marlborough">Marlborough</option>
              <option value="west-coast">West Coast</option>
              <option value="canterbury">Canterbury</option>
              <option value="otago">Otago</option>
              <option value="southland">Southland</option>
            </select>
          </div>
          <div className="mt-6">
            <p className="pb-2 dark:text-black">Zipcode</p>
            <input
              type="text"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              placeholder="Zipcode..."
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <p className="pb-2 dark:text-black">Description</p>
            <input
              type="text"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              placeholder="Descriotion..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <p className="pb-2 dark:text-black">Price</p>
            <input
              type="text"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              placeholder="Price $$$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex gap-24">
            <div className="mt-6">
              <p className="pb-2 dark:text-black">Bedrooms</p>
              <input
                type="text"
                className="border-4 w-[300px] text-black rounded-xl  input h-12"
                placeholder="Bedrooms..."
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <p className="pb-2 dark:text-black">Bathroom</p>
              <input
                type="text"
                className="border-4 w-[300px] text-black rounded-xl  input h-12"
                placeholder="Bathroom..."
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="pb-2 dark:text-black">Type</p>
            <select
              type="text"
              className="border-4 w-[700px] text-black rounded-xl input h-12"
              value={saleType}
              onChange={(e) => setSaleType(e.target.value)}
            >
              <option value="FOR_RENT">For Rent</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="pb-2 dark:text-black">Home Type</p>
            <select
              type="text"
              className="border-4 w-[700px] text-black rounded-xl input h-12"
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
            >
              <option value="ROOM">Room</option>
              <option value="APARTMENT">Apartment</option>
            </select>
          </div>
          <input type="file" accept=".jpg, .png, .jpeg" onChange={(e) => handleFileChange(e, "mainImage")} />
          {images.map((image, index) => (
        <div key={index}>
          <p>Additional Image {index + 1}</p>
          <input type="file" accept=".jpg, .png, .jpeg" onChange={(e) => handleFileChange(e, `image${index}`)} />
        </div>
      ))}
        </div>
        <div className="flex text-white justify-center items-center">
          <button
            className="py-2 px-6 mb-8 rounded-lg bg-orange-500"
            onClick={createListing}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingForm;
