
let RestroCard_1 = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[450px] hover:bg-gray-200 bg-slate-100">
      <img
        className="rounded-md"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold py-2 text-lg"> {name}</h2>
      <h4 className="p-1"> {cuisines.join(" ,")} </h4>
      <h4 className="p-1">⭐{avgRating} </h4>
      <h4 className="p-1">{costForTwo} </h4>
    </div>
  );
};


// Higher Order Component

// input--RestroCard_1==>RestroCard_1Promoted

export const withPromotedLabel = (RestroCard_1) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
        <RestroCard_1 {...props}/>
      </div>
    )
  }
}















export default RestroCard_1;






