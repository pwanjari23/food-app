import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restromenu from "./component/Restromenu";
import Shimmer from "./component/Shimmer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "./component/useOnlineStatus";
// import Grocery from "./component/Grocery";

const restaurantList = [];

let Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXf_R-yYdjq2AffaM2NxAatuYC_Z08MkweEw&usqp=CAU"
          />
        </div>
        <div className="nav">
          <ul>
            <li>Online Status:{onlineStatus ? " On" : "Off"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <li><Link to="/grocery">Grocery</Link></li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </header>
    </>
  );
};

let Restro = () => {
  return (
    <div className="res-cards">
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTv_O39jlxw5sdjM00bhYhg_1QKmKyy8gthMZ_K-bv7EC4aqeLrmD1HY8xOy9PPrrvdF8&usqp=CAU"
      />
      <h2>Meghana Foods</h2>
      <h4>Biryani, South indian, Italian</h4>
      <h4>4.4 rating</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
let RestroCard_1 = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className="res-cards">
      <img
        className="image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2> {name}</h2>
      <h4> {cuisines.join(" ,")} </h4>
      <h4>{avgRating} rating</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>Rs.{costForTwo / 100} for two </h4>
    </div>
  );
};
let Body = () => {
  const [ListOfRestro, setListOfRestro] = useState([]);

  const [filteredList, setfilteredList] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.146633&lng=79.0882&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestro(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards, "setlistRestrodata");
    setfilteredList(json?.data?.cards[2]?.data?.data?.cards);
  };
  console.log("body");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection;
      </h1>
    );

  return ListOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button
            className="search-btn"
            value={filteredList}
            onClick={() => {
              const setfilteredList1 = ListOfRestro.filter(
                (res) => res.data.avgRating > 4
              );

              setfilteredList(setfilteredList1);
            }}
          >
            Top Rated Restaurant
          </button>
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value, "searchteaxt");
              setsearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            value={filteredList}
            onClick={() => {
              const filteredData = ListOfRestro.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="restro-list">
          {filteredList.map((restaurant) => {
            return (
              <Link
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant.data.id}
              >
                <RestroCard_1 {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      Created By:Pratiksha Wanjari
      <h2 className="head">MOOD FOOD</h2>
    </div>
  );
};


const Grocery=lazy(()=>import("./component/Grocery"));

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <Restromenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
