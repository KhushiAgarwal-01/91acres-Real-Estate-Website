import React from "react";
import { RiHeart2Fill} from "react-icons/ri";

const Footer = () => {
    return (
      <div className="bg-gray-700 w-full h-15 text-white">
        <div className="flex justify-center items-center p-5 gap-4 text-xl">
          <p>PropTrack--</p>
          <p>Made with </p>
          <RiHeart2Fill className="text-red-500 text-3xl" />
          <p> || For contacting us , call : +91-9988776655</p>
        </div>
      </div>
    );
}

export default Footer;