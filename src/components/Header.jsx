import { useLocation } from "react-router-dom";
import { useState } from "react";
import { brainwave, fourty4 } from "../assets";
import { navigation } from "../constants/index";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
    ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-5">
        <a href="#hero" className="w-[12rem] flex gap-x-4 items-center xl:mr-8">
          <img src={fourty4} width={40} height={40} alt="Fourty-4" />
          <h3 className="font-bold uppercase text-lg">Fourty-4</h3>
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          {/* Kelas hidden di Tailwind CSS menyembunyikan elemen secara default (setara dengan display: none;), 
        tetapi kelas lg:flex pada kode ini secara eksplisit mengubah properti display menjadi flex pada layar besar
        sehingga elemen terlihat kembali pada layar besar. */}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex">Sign In</Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
