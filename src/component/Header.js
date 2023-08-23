import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


let Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <>
      <header className="flex justify-between shadow-lg bg-pink-200">
        <div className="logo-container">
          <img
            className="w-24 m-2 p-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3wPQ-vTop-U60jVVeNhj5nZclIxeJoTLjA&usqp=CAU"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 font-bold text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold text-lg">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold text-lg">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 font-bold text-lg cursor-pointer"><Link to="/cart">Cart({cartItems.length})</Link></li>

            {/* <button
              className="font-bold text-lg"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button> */}
          </ul>
        </div>
      </header>
    </>
  );
};


export default Header;