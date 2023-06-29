const restaurantList = [];


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


