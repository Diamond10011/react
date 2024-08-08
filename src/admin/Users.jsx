import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [hotels, setHotels] = useState([]);
  const [showForms, setForms] = useState(false);

  const [newHotel, setNewHotel] = useState({
    // id: null,
    name: "",
    price: "",
    img: [''],
    desc: "",
  });
  useEffect(() => {
    fetchHotel();
  }, []);
  async function fetchHotel() {
    try {
      const response = await axios.get("http://localhost:5223/wandermate/Test");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function addHotel(hotel) {
    try {
      await axios.post("http://localhost:5223/wandermate/Test", hotel);
      fetchHotel();
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHotels = [...hotels, { ...newHotel, id: hotels.length + 1 }];
    setHotels(updatedHotels);
    addHotel(newHotel);
    setNewHotel({
      // id: null,
      name: "",
      price: "",
      img: [''],
      desc : "",
    });
    handleHideForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...newHotel.img];
    newImages[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      img: newImages,
    }));
  };

  //function that handel showforms
  const handleShowForms = () => {
    setForms(true);
  };

  //function that handle hideform
  const handleHideForm = () => {
    setForms(false);
  };

  return (
    <div>
      <table className=" w-[70rem] ml-8 h-full shadow-shade">
        <thead>
          <tr className="">
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index} className=" text-center border-b-2">
              {/* <td>{hotel.id}</td> */}
              <td>{hotel.name}</td>
              <td>
                <img
                  src={hotel.img}
                  className=" w-14 h-14 rounded-full "
                  alt=""
                />
              </td>
              <td>Rs. {hotel.price}</td>
              <td>{hotel.desc}</td>
              <td className=" flex gap-3 justify-center">
                <button className="  hover:bg-green-500 rounded-m border-2 ">
                  Edit
                </button>
                <button className="  hover:bg-red-500 rounded-m border-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={showForms ? handleHideForm : handleShowForms}
        className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
      >
        Add Hotel
      </button>
      {showForms && (
        <form
          onSubmit={handleSubmit}
          className=" shadow-shade p-5 mt-5  mx-auto"
        >
          <label htmlFor="id" className=" block">
            ID
          </label>
          <input
            className=" border-2 p-2 w-full rounded "
            type="number"
            name="id"
            value={newHotel.id}
            onChange={handleInputChange}
            placeholder="Id"
          />
          <label htmlFor="name" className=" block">
            Name
          </label>
          <input
            className=" border-2 p-2 w-full rounded "
            type="text"
            name="name"
            value={newHotel.name}
            onChange={handleInputChange}
            placeholder="Name"
          />

          <label htmlFor="price" className=" block">
            Price
          </label>
          <input
            className=" border-2 rounded w-full"
            type="number"
            name="price"
            value={newHotel.price}
            onChange={handleInputChange}
            placeholder="Price"
          />

          <label htmlFor="img" className=" block">
            Image
          </label>
          <input
            className=" border-2 rounded w-full h-[43px]"
            type="text"
            name="img"
            value={newHotel.img}
            onChange={handleInputChange}
          />

          <label htmlFor="desc" className=" block">
            Description
          </label>
          <textarea
            className=" border-2 rounded w-full h-[43px]"
            name="desc"
            value={newHotel.desc}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
          >
            Save Hotel
          </button>
          <button
            type="reset"
            className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
