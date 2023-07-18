
let RestroCard_1 = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] hover:bg-gray-200 bg-slate-100">
      <img
        className="rounded-md"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold py-2 text-lg"> {name}</h2>
      <h4 className="p-1"> {cuisines.join(" ,")} </h4>
      <h4 className="p-1">{avgRating} rating</h4>
      <h4 className="p-1">{deliveryTime} minutes</h4>
      <h4 className="p-1">Rs.{costForTwo / 100} for two </h4>
    </div>
  );
};
export default RestroCard_1;






