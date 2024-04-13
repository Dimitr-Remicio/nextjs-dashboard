// Çimport { Children } from "react";

export default function Container({Children}){

    return(
        <div className="w-full px-40 flex flex-col ">
            {Children}
        </div>
    )

}