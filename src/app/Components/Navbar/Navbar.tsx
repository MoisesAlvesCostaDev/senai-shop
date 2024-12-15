"use client";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

const menuItens = [
  {
    name: "Meu perfil",
    href: "#",
    icon: "/assets/navbar/UserCircle.png",
  },
  {
    name: "Meus pedidos",
    href: "#",
    icon: "/assets/navbar/ShoppingBag.png",
  },
  {
    name: "Minha lista de desejos",
    href: "#",
    icon: "/assets/navbar/Heart.png",
  },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b-2 border-primary mb-6">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8"
      >
        <div className="flex flex-1 items-center gap-5 lg:ml-20">
          <a href="/" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Senai Shop</span>
            <img
              alt="Senai Shop"
              src="/assets/SenaiShopLogo.png"
              className="h-14 w-auto"
            />
          </a>
          <button className="flex bg-secondary-light h-8 rounded-[6px] p-2 items-center gap-2">
            <img
              alt="Map pin"
              src="/assets/navbar/MapPin.png"
              className="h-5"
            ></img>
            <span className=" text-secondary-dark font-roboto text-sm">
              Santa Catarina
            </span>
          </button>
        </div>

        <div className="flex flex-1 justify-end">
          <PopoverGroup className="flex gap-x-2">
            <button className="flex bg-primary-light h-10 w-10 items-center justify-center rounded-lg">
              <img
                alt="Find"
                src="/assets/navbar/MagnifyingGlass.png"
                className="  "
              ></img>
            </button>
            <button className="flex bg-primary-light h-10 w-10 items-center justify-center rounded-lg">
              <img
                alt="Find"
                src="/assets/navbar/ShoppingCart.png"
                className="  "
              ></img>
            </button>

            <Popover className="relative">
              <PopoverButton className="flex bg-base-hover h-12 w-12 ml-[1px] rounded-full items-center justify-center m-[-5px]">
                <img alt="Find" src="/assets/navbar/User.png"></img>
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -right-8 top-full z-10 mt-3 mb-1 w-screen max-w-48 overflow-hidden rounded-xl bg-white shadow-2xl shadow-black ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div>
                  {menuItens.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-1  ml-1 rounded-lg p-1 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex size-[18px] flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          src={item.icon}
                          alt={item.name}
                          aria-hidden="true"
                          className="size-[18px] text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-roboto text-[12px] text-base-subtitle "
                        >
                          {item.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" divide-gray-900/5 bg-gray-50 mb-2 p-2 pb-0">
                  <button className="bg-secondary w-full h-[23px] rounded-lg">
                    <span className="text-sm ">Sair</span>
                  </button>
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        </div>
      </nav>
    </header>
  );
}
