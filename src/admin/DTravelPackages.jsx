import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DTravelPackages() {
  const [travelpackage, setTravelpackage] = useState([]);
  const [showForms, setForms] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(null);
  const [newHotel, setNewHotel] = useState({
    name: "",
    price: "",
    img: "",
    desc: "",
  });

  const fetchHotel = async () => {
    const response = await axios.get(
      "http://localhost:5223/wandermate/TravelPackage"
    );
    console.log(response);
  };
  const addHotel = async (hotel) => {
    try {
      const response = await axios.post(
        "http://localhost:5223/wandermate/TravelPackage",
        hotel
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const editHotel = async (id, hotel) => {
    try {
      const response = await axios.put(
        `http://localhost:5223/wandermate/TravelPackage/${id}`,
        hotel
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const DeleteHotel = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5223/wandermate/TravelPackage/${id}`
      );
      console.log("Hotel deleted");
    } catch (error) {
      console.error(error);
    }
  };

  // function that handel submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHotels = [
      ...travelpackage,
      { ...newHotel, id: travelpackage.length + 1 },
    ];
    setTravelpackage(updatedHotels);
    addHotel(newHotel);
    setNewHotel({
      name: "",
      price: "",
      img: "",
      desc: "",
    });
    handleHideForm();
    setEditMode(false);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setNewHotel({
      name: "",
      price: "",
      img: "",
      desc: "",
    });
    handleHideForm();
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const updatedHotels = travelpackage.filter((hotel) => hotel.id !== id);
    setTravelpackage(updatedHotels);
    localStorage.setItem("travelPackages", JSON.stringify(updatedHotels));
  };

  const handelSaveHotel = () => {
    let updateHotels;
    if (editMode) {
      updateHotels = travelpackage.map((hotel, index) =>
        index === currentHotelIndex ? newHotel : hotel
      );
    } else {
      updateHotels = [...travelpackage, newHotel];
    }
    // updateHotels.push(newHotel);
    setForms(false);
    setTravelpackage(updateHotels);
    setEditMode(false);
    localStorage.setItem("travelPackages", JSON.stringify(updateHotels));
    setNewHotel({
      name: "",
      price: "",
      img: "",
      desc: "",
    });
    // handleHideForm();
  };

  const handleEdit = (index) => {
    setCurrentHotelIndex(index);
    setNewHotel(travelpackage[index]);
    setForms(true);
    setEditMode(true);
  };

  //function that handel showforms
  const handleShowForms = () => {
    setForms(true);
  };

  //function that handle hideform
  const handleHideForm = () => {
    setForms(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  return (
    <div>
      <h1 className=" text-center font-bold ">Hotel Manager</h1>

      <button
        onClick={showForms ? handleHideForm : handleShowForms}
        className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
      >
        Add Hotel
      </button>
      <table className=" w-[70rem] ml-8 h-full shadow-shade">
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {travelpackage.map((hotel, index) => (
            <tr key={index} className=" text-center border-b-2">
              <td>{hotel.name}</td>
              <td>${hotel.price}</td>
              <td>{hotel.desc}</td>
              <td className=" flex gap-3 justify-center">
                <button
                  onClick={() => handleEdit(index)}
                  className="  hover:bg-green-500 rounded-m border-2 "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="  hover:bg-red-500 rounded-md border-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForms && (
        <form
          onSubmit={editMode ? handelSaveHotel : handleSubmit}
          className=" shadow-shade p-5 mt-5  mx-auto"
        >
          <label htmlFor="name" className=" block">
            Name
          </label>
          <input
            className=" border-2 p-2 w-full rounded "
            type="text"
            name="name"
            value={newHotel.name}
            onChange={handleInputChange}
            placeholder="Hotel Name"
            required
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
            required
          />

          <label htmlFor="desc" className=" block">
            Description
          </label>
          <input
            className=" border-2 rounded w-full"
            type="text"
            name="desc"
            value={newHotel.desc}
            onChange={handleInputChange}
            placeholder="desc of the palce"
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

          <button
            type="submit"
            className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
          >
            {editMode ? "Update Hotel" : "Save Hotel"}
          </button>
          <button
            type="reset"
            className=" rounded-2xl px-4 mt-4 boreder-2 bg-blue-600 text-white"
            onClick={handleReset}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
