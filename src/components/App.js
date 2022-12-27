import React from "react";
import {
  FcCalendar,
  FcCurrencyExchange,
  FcOrganization,
  FcGlobe,
} from "react-icons/fc";
import {
  MdAirportShuttle,
  MdWifi,
  MdDryCleaning,
  MdRestaurant,
  MdFitnessCenter,
  MdPool,
} from "react-icons/md";
import "../styles/App.css";
import Header from "./Header";
import BookingDetails from "./BookingDetails";
import Specialities from "./Specialities";
import Services from "./Services";
import PhotoGrid from "./PhotoGrid";
import Rooms from "./Rooms";
import Footer from "./Footer";

function App() {
  let navList = [
    { listId: 1, itemName: "Booking", id: "booking-link" },
    { listId: 2, itemName: "Rooms", id: "rooms-link" },
    { listId: 3, itemName: "Services", id: "services-link" },
    { listId: 4, itemName: "Contact Us", id: "contact-link" },
  ];

  let specialitiesList = [
    {
      id: 1,
      icon: [<FcCalendar className="speciality-icon" />],
      heading: "Convinient Booking",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: [<FcOrganization className="speciality-icon" />],
      heading: "Luxury Rooms",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: [<FcCurrencyExchange className="speciality-icon" />],
      heading: "Best Prices",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      icon: [<FcGlobe className="speciality-icon" />],
      heading: "Excellent Location",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  let photoList = [
    {
      id: 1,
      photoSrc:
        "https://images.unsplash.com/photo-1552566626-2d907dab0dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      photoClass: "photo-1",
    },
    {
      id: 2,
      photoSrc:
        "https://images.unsplash.com/photo-1647201682116-1f3584656db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      photoClass: "photo-2",
    },
    {
      id: 3,
      photoSrc:
        "https://images.unsplash.com/photo-1581115685033-ccf1aa701722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      photoClass: "photo-3",
    },
    {
      id: 4,
      photoSrc:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      photoClass: "photo-4",
    },
    {
      id: 5,
      photoSrc:
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      photoClass: "photo-5",
    },
  ];

  let servicesList = [
    {
      id: 1,
      serviceName: "24/7 Wifi",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdWifi className="service-icon" />],
    },
    {
      id: 2,
      serviceName: "Laundry",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdDryCleaning className="service-icon" />],
    },
    {
      id: 3,
      serviceName: "Airport Pick & Drop",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdAirportShuttle className="service-icon" />],
    },
    {
      id: 4,
      serviceName: "Spa & Gym",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdFitnessCenter className="service-icon" />],
    },
    {
      id: 5,
      serviceName: "Breakfast",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdRestaurant className="service-icon" />],
    },
    {
      id: 6,
      serviceName: "Swimming Pool",
      serviceDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      serviceIcon: [<MdPool className="service-icon" />],
    },
  ];

  let roomsList = [
    {
      id: 1,
      heading: "Single Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "$",
      roomPhoto:
        "https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      heading: "Twin/Double Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "$$",
      roomPhoto:
        "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      heading: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "$$$",
      roomPhoto:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      heading: "Suite",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "$$$$",
      roomPhoto:
        "https://images.unsplash.com/photo-1565330502883-299dc82d1f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
  ];

  return (
    <React.Fragment>
      <Header items={navList} />
      <BookingDetails />
      <Specialities items={specialitiesList} />
      <PhotoGrid items={photoList} />
      <Services items={servicesList} />
      <Rooms items={roomsList} />
      <Footer />
    </React.Fragment>
  );
}

export default App;

//https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
