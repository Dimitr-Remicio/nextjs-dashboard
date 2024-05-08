import Image from "next/image";


import "./shirt.css";
import { Button } from "@/app/ui/button";

export default function ShirtCont() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
        <div className="w-1/3 flex flex-col">
            <ul className="shr flex flex-col gap-10 items-center">
                <li><h1 className="title">Camisetas</h1></li>
                <li><p className="pargrap">Nuestras camisas están diseñadas pensando en la versatilidad y la comodidad, que agregan un toque de estilo único a tu personalidad.</p></li>
                <li><Button>¡quiero esto!</Button></li>
            </ul>
        </div>
        <div>
            <Image 
                src="/Shirt/s-black.jpg"
                width="500"
                height="500"
                alt="image"
                className="rounded"
            />
        </div>

    </div>

)
}
