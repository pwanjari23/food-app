import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestroCard_1 from "./Restaurant";
import Loading from "./Loading";



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
      <Loading />
    ) : (
      <>
        <div className="body">
          <div className="filter">
            <button
              className="search-btn m-4 px-4 py-2 bg-green-100"
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
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                console.log(e.target.value, "searchteaxt");
                setsearchText(e.target.value);
              }}
            />
            <button 
              className="px-4 py-2 bg-green-100 m-4 "
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
          <div className="flex flex-wrap">
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

  export default Body;