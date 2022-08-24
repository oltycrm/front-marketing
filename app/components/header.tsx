import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Link } from "@remix-run/react";
import { Fragment } from "react";

import { Container } from "./container";
import { Logo } from "./logo";
import { ButtonLink } from "./button";

const links = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Блог",
    href: "/blog",
  },
  // {
  //   title: 'Цены',
  //   href: '/pricing',
  // },
];

const logo = {
  href: "/",
};

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-gray-500/20 " />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                {links.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link to={link.href}>
                        <a className="block w-full" onClick={() => close()}>
                          {link.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
                <li className="border-t border-slate-300/40 pt-4">
                  <Link to="register">
                    <a className="block w-full" onClick={() => close()}>
                      Регистрация
                    </a>
                  </Link>
                </li>{" "}
                <li className="">
                  <Link to="login">
                    <a className="block w-full" onClick={() => close()}>
                      Войти
                    </a>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Header() {
  return (
    <header className="py-10">
      <Container className="">
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link to={logo.href}>
                <a>
                  <span className="sr-only">Home</span>
                  <Logo className="text-3xl font-semibold text-blue-600" />
                </a>
              </Link>
            </li>
            {links.map((link) => {
              return (
                <li key={link.href} className="ml-12 hidden md:block">
                  <Link to={link.href}>
                    <a className="text-lg rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                      {link.title}
                    </a>
                  </Link>
                </li>
              );
            })}

            <li className="ml-auto hidden md:block">
              <Link to="/login">
                <a className="text-lg rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Войти
                </a>
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
              <ButtonLink className="" href="/register" color="blue">
                <span>
                  Начать{" "}
                  <span className="not:hidden sm:inline"> бесплатно</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
