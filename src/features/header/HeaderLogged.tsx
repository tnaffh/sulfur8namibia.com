import React, { FC } from "react";
import MainNav2Logged from "@/components/Header/MainNav2Logged";

const HeaderLogged: FC = () => {
  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
