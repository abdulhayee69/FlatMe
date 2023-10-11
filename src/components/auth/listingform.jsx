import React, { useState } from "react";

const ListingForm = () => {
  const [files, setFiles] = useState({
    file1: null,
    file2: null,
    file3: null,
    file4: null,
  });

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("New Zealand");
  const [city, setCity] = useState("northland");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [saleType, setSaleType] = useState("FOR_RENT");
  const [homeType, setHomeType] = useState("ROOM");

  const handleFileChange = (e, field) => {
    const selectedFile = e.target.files[0];
    setFiles({
      ...files,
      [field]: selectedFile,
    });
  };

  const createListing = async () => {
    const apiUrl = "http://localhost:8081/create-listing";

    // Prepare the data to be sent in the request
    const data = {
      title,
      slug: title, // You can set slug as the title for simplicity
      address: `${country}, ${city} ${zipcode}`,
      city,
      state: "Your State", // Replace with your state
      zipcode,
      description,
      price,
      bedrooms,
      bathrooms,
      sale_type: saleType,
      home_type: homeType,
      main_photo: files.file1,
      photo_1: files.file2,
      photo_2: files.file3,
      photo_3: files.file4,
      is_published: "True", // You can change this as needed
    };

    // Retrieve the access token from local storage
    const accessToken = localStorage.getItem("access_token");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(accessToken);
        // Listing creation successful, handle it as needed
        alert("Listing created successfully");
      } else {
        console.log(accessToken);
        // Handle listing creation error
        alert("Listing creation failed");
      }
    } catch (error) {
      console.log(accessToken);
      console.error(error);
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

          <div className="mt-6">
            <p className="pb-2 dark:text-black">Main Image</p>
            <input
              type="file"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              accept=".jpg, .png, .jpeg"
              onChange={(e) => handleFileChange(e, "file1")}
            />
          </div>

          <div className="mt-6">
            <p className="pb-2 dark:text-black">1st Image</p>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              onChange={(e) => handleFileChange(e, "file3")}
            />
          </div>

          <div className="mt-6">
            <p className="pb-2 dark:text-black">2nd Image</p>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              onChange={(e) => handleFileChange(e, "file3")}
            />
          </div>

          <div className="mt-6">
            <p className="pb-2 dark:text-black">3rd Image</p>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              className="border-4 w-[700px] text-black rounded-xl  input h-12"
              onChange={(e) => handleFileChange(e, "file4")}
            />
          </div>
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
