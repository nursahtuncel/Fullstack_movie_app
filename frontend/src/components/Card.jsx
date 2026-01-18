import React from "react";
import {Link} from "react-router-dom"
const Card = ({ movie }) => {
  const r = +movie.rating;

  const color =
    r > 9 ? "#16C47F" : r > 8 ? "#FFEB00" : r > 7 ? "#FFD65A" : "#F93827";


  return (
    <Link
    to={`/movie/${movie.id}`}
     className=" border-none shadow-xl p-3 hover:bg-gray-200 cursor-pointer transition max-sm:flex max-sm:gap-5">
      <div className="w-full relative flex gap-7 justify-between">
        <img
         className="rounded w-full object-cover max-h-[250px] max:sm:max-h-[150px]"
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt="poster"
        />
        <span
          style={{ backgroundColor: color }}
          className="absolute right-[-10px] top-[-10px]  rounded-full text-white font-semibold p-1 sm:p-2 bg-blue-500 "
        >
          {Number(movie.rating).toFixed(1)}
        </span>
       <div className="w-full flex flex-col ">
         <div>
          <h3 className="text-xl md:text-2xl mt-4 font-bold">{movie.title}</h3>
        </div>
        <div className="">
            <p>{movie.year}</p>
            <p className="flex flex-col gap-2">{movie.genre.map((item,i)=>
            <span key={i} className="w-fit bg-gray-200 rounded-md py-1 px-2">
                {item}
            </span>
            )}</p>
            <p className="bg-red-400 rounded-md mt-2 p-2 w-fit ">{movie.language}</p>
        </div>
       </div>
      </div>
    
    </Link>
  );
};

export default Card;
