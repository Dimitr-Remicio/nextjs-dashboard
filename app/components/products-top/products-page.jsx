import CustomSlider from "@/app/features/slider";
// import sprit from "@/public/sprite.svg";
import { images } from "@/app/lib/placeholder-data";
import Image from "next/image";

import "./product-top.css";

export default function TopProducts() {
  return (
    <div className="flex flex-col w-full p-15 justify-center">
      <div className="top-font flex justify-between h-3/4 gap-x-46 top-42 z-20 ">
        <div className=" flex flex-col">
          <div className="contain">
            <div className="content-info h-52">
              <h2 className="top-cont">TOP TOP TOP</h2>
              <h2 className="top-cont">TOP TOP TOP</h2>
              <h2 className="top-cont">TOP TOP TOP</h2>
            </div>
            <Image
              className="relative top-0 left-0 -translate-x-4 translate-y-10 "
              src="/corner.svg"
              width="187"
              height="50"
              alt=""
            />
          </div>
          <Image
            className="relative top-0 left-0 -translate-x-4 -translate-y-2"
            src="/corner.svg"
            width="187"
            height="50"
            alt="corner of rectangle"
          />
        </div>
        <div className="flex flex-col-reverse items-end">
          <div className="contain">
            <Image
              className="relative -bottom-2 -right-1 translate-x-3 translate-y-8  rotate-180"
              src="/corner.svg"
              width="180"
              height="50"
              alt=""
            />
            <div className="content-info h-52 ">
              <h2 className="top-cont">TOP TOP TOP</h2>
              <h2 className="top-cont">TOP TOP TOP</h2>
              <h2 className="top-cont">TOP TOP TOP</h2>
            </div>
          </div>
          <Image
              className="relative -bottom-2 -right-1 translate-x-0 translate-y-0  rotate-180"
              src="/corner.svg"
              width="180"
              height="50"
              alt="corner of rectangle"
            />
        </div>
      </div>
      <CustomSlider>
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
