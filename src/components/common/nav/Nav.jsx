import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import NavSearch from "./NavSearch";
import colorSchema from "../../../colors/colorSchema";

export default function Nav() {
  const color = colorSchema();
  return (
    <div style={{background: color.bgprimary}} className=" fixed top-0 left-0 w-full z-10 shadow   ">
      <Container>
        {/* nav */}
        <div className="flex py-8   ">
          {/* logo */}
          <Logo />

          {/* nav links */}
          <NavLinks />

          <div className="flex-1 flex gap-10 items-center ">
            <NavSearch />
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </div>
  );
}
