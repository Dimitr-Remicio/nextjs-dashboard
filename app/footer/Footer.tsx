import { HomeIcon } from "@heroicons/react/24/outline";
import Container from "../container/page";
Container;
export default function Contfooter() {
  const ref = "../../public";

  return (
      <Container
        Children={
    <div className="flex flex-col gap-20 mx-5 py-20 justify-center items-center text-white p-5">
            <div className="w-full flex flex-row justify-between gap-20 my-10">
              <ul className="flex flex-col justify-between gap-8">
                <li className="footer__item">
                  <b>
                    <h3>APP DE YERSI</h3>
                  </b>
                </li>
                <li className="footer__item">
                  <a href="#">APP de Yersi para iOS y Android</a>
                </li>
                <li className="footer__item">
                  <b>
                    <h3>METODOS DE PAGO</h3>
                  </b>
                </li>
                <li className="footer__item">
                  <div className="flex flex-row justify-between">
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                  </div>
                </li>
              </ul>

              <ul className="flex flex-col justify-between gap-8">
                <li className="footer__item">
                  <h3>PAIS, MONEDA E IDIOMA</h3>
                </li>
                <li className="footer__item -select">
                  <svg width="40" height="30">
                    <use href="./images/svg/icons.svg#icon-colombia-flag-round-circle-icon"></use>
                  </svg>
                  <select
                    className="bg-zinc-900 rounded-2xl"
                    id="size"
                    name="size"
                  >
                    <option value="xs">Extra Small</option>
                    <option value="s">Small</option>
                    <option value="m" selected>
                      Colombia, COP $
                    </option>
                    <option value="">Large</option>
                  </select>
                </li>
                <li className="footer__item">
                  <h3>SIGUENOS</h3>
                </li>
                <li className="footer__item">
                  <div className="flex flex-row justify-between">
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                    <HomeIcon className="w-8" />
                  </div>
                </li>
              </ul>

              <ul className="flex flex-col justify-between gap-8">
                <li className="footer__item">
                  <h3>ATENCION AL CLIENTE</h3>
                </li>
                <li className="footer__item">
                  <a href="#">Ayuda y Contacto</a>
                </li>
                <li className="footer__item">
                  <a href="#">Pedidos y Envios</a>
                </li>
                <li className="footer__item">
                  <a href="#">Devoluciones y Reembolsos</a>
                </li>
              </ul>

              <ul className="flex flex-col justify-between gap-8">
                <li className="footer__item">
                  <h3>ACERCA DE YERSI</h3>
                </li>
                <li className="footer__item">
                  <a href="./about.html">Acerca de nosotros</a>
                </li>
                <li className="footer__item">
                  <a href="#">Trabaja Con Nosotros</a>
                </li>
                <li classNamename="footer__item">
                  <a href="./discount.html">Descuentos</a>
                </li>
              </ul>
            </div>
            <div className="w-fit m-0">
              <p>© Copyright 2023 Yersi. Todos los derechos reservados.</p>
            </div>
    </div>
        }
      />
  );
}
