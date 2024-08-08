import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DHotels() {
  const [hotels, setHotels] = useState([]);
  const [showForms, setForms] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(null);
  const [newHotel, setNewHotel] = useState({
    name: "",
    price: "",
    img: [''],
    rating: "",
    freeCancellation: false,
    reserveNow: false,
  });

  const fetchHotel = async () => {
    const response = await axios.get("http://localhost:5223/wandermate/Hotel");
    setHotels(response.data);
  };
  const addHotel = async (hotels) => {
    try {
      await axios.post("http://localhost:5223/wandermate/Hotel", hotels);
    } catch {
      console.error(error);
    }
  };
  const editHotel = async (id, hotels) => {
    try {
      await axios.put(`http://localhost:5223/wandermate/Hotel/${id}`, hotels);
    } catch (error) {
      console.error(error);
    }
  };

  // function that handel submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHotels = [...hotels, { ...newHotel, id: hotels.length + 1 }];
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));

    setNewHotel({
      name: "",
      price: "",
      img: [''],
      rating: "",
      freeCancellation: false,
      reserveNow: false,
    });
    handleHideForm();
    setEditMode(false);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setNewHotel({
      name: "",
      price: "",
      img: [''],
      rating: "",
      freeCancellation: false,
      reserveNow: false,
    });
    handleHideForm();
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
  };

  const handelSaveHotel = () => {
    let updateHotels;
    if (editMode) {
      updateHotels = hotels.map((hotel, index) =>
        index === currentHotelIndex ? newHotel : hotel
      );
    } else {
      updateHotels = [...hotels, newHotel];
    }
    // updateHotels.push(newHotel);
    setForms(false);
    setHotels(updateHotels);
    setEditMode(false);
    localStorage.setItem("hotels", JSON.stringify(updateHotels));
    setNewHotel({
      name: "",
      price: "",
      img: [''],
      rating: "",
      freeCancellation: false,
      reserveNow: false,
    });
    // handleHideForm();
  };

  const handleEdit = (index) => {
    setCurrentHotelIndex(index);
    setNewHotel(hotels[index]);
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
            <th>Rating</th>
            <th>Free Cancellaton</th>
            <th>Reserve Now</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index} className=" text-center border-b-2">
              <td>{hotel.name}</td>
              <td>${hotel.price}</td>
              <td>{hotel.rating}</td>
              <td>{hotel.freeCancellation ? "Yes" : "No"}</td>
              <td>{hotel.reserveNow ? "Yes" : "No"}</td>
              <td className=" flex gap-3 justify-center">
                <button
                  onClick={() => handleEdit(index)}
                  className="  hover:bg-green-500 rounded-m border-2 "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="  hover:bg-red-500 rounded-m border-2"
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

          <label htmlFor="rating" className=" block">
            Rating
          </label>
          <input
            className=" border-2 rounded w-full"
            type="number"
            name="rating"
            value={newHotel.rating}
            onChange={handleInputChange}
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            required
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

          <div className=" flex gap-16">
            <label htmlFor="freeCancellation">Free Cancellation</label>
            <input
              type="checkbox"
              name="freeCancellation"
              checked={newHotel.freeCancellation}
              onChange={(e) => {
                setNewHotel({
                  ...newHotel,
                  freeCancellation: e.target.checked,
                });
              }}
            />
          </div>
          <div className=" flex gap-16">
            <label htmlFor="reserveNow">Reserve Now</label>
            <input
              type="checkbox"
              name="reserveNow"
              checked={newHotel.reserveNow}
              onChange={(e) => {
                setNewHotel({ ...newHotel, reserveNow: e.target.checked });
              }}
            />
          </div>
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
