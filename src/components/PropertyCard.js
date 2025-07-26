import { useState } from "react";
import {
  HeartIcon,
  MailIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

export default function PropertyCard({
  isAvailable,
  price,
  title,
  location,
  imageUrl,
  rightBg,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-row justify-between items-stretch rounded-2xl shadow-lg overflow-hidden w-full max-w-xl border border-gray-800 bg-gray-900 text-white">
      
      {/* LEFT SIDE */}
      <div className="w-2/3 flex flex-col justify-between">
        
        {/* TOP Image Section */}
        <div
          className="h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        {/* TEXT Section */}
        <div className="p-4 flex flex-col justify-between h-full">
          {/* Availability */}
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full mb-2 w-max ${
              isAvailable ? "bg-blue-900 text-white" : "bg-red-200 text-red-700"
            }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </div>

          {/* Title & Location */}
          <h2 className="text-lg font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-400 mb-3">{location}</p>

          {/* Price & Heart */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">FRW {price}</span>
            <button onClick={() => setLiked(!liked)}>
              <HeartIcon
                className={`w-6 h-6 transition ${
                  liked ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="w-1/3 flex flex-col justify-between items-end p-3"
        style={{ backgroundColor: rightBg }}
      >
        {/* Empty Top Area or can put logo/avatar */}
        <div className="w-full h-16 rounded-t-xl"></div>

        {/* Action Buttons */}
        <div className="flex flex-col items-end gap-3 mt-auto">
          <button className="flex items-center gap-1 text-white text-sm hover:underline">
            View <ArrowRightIcon className="w-4 h-4" />
          </button>
          <MailIcon className="text-white w-5 h-5 cursor-pointer hover:text-blue-300" />
        </div>
      </div>
    </div>
  );
}
