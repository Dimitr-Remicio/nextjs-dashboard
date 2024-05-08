import { HomeIcon } from '@heroicons/react/24/outline';

import FootContainer from "@/app/components/footer/Cont-foot";

export default function Contfooter() {
  const ref = '../../public';

  return (
    <FootContainer>
      <div className="mx-5 flex flex-col items-center justify-center gap-20 p-5 py-20 text-white">
        <div className="my-10 flex w-full flex-row justify-between gap-20">
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
              <select className="rounded-2xl bg-zinc-900" id="size" name="size">
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
        <div className="m-0 w-fit">
          <p>© Copyright 2023 Yersi. Todos los derechos reservados.</p>
        </div>
      </div>
    </FootContainer>
  );
}
