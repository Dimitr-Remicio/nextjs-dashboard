import CustomSlider from "@/app/features/slider";
import { images } from "@/app/lib/placeholder-data";
import Image from "next/image";

import "./product-top.css";

export default function TopProducts() {
  return (
    <div className="flex flex-col w-full p-15 justify-center">
      

      <div className="top-font flex justify-between h-3/4 absolute gap-x-56 top-42 z-20 ">
        <div className="contain">
          <div>
            <h2 className="top-cont text">TOP TOP TOP</h2>
            <h2 className="top-cont">TOP TOP TOP</h2>
            <h2 className="top-cont">TOP TOP TOP</h2>
          </div>
        </div>
        <div className="contain">
          <div>
            <h2 className="top-cont">TOP TOP TOP</h2>
            <h2 className="top-cont">TOP TOP TOP</h2>
            <h2 className="top-cont">TOP TOP TOP</h2>
          </div>
        </div>
      </div>
      <CustomSlider >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
              width={image.w}
              height={image.h}
              className="z-5"
            />
          );
        })}
      </CustomSlider>
    </div>
  );
}
