import React from "react";
import SendAMessage from "../assets/send-a-message.svg";
import { navbar, Navbar } from "../constants/navbar";
import SearchBar from "./SearchBar";
import SelectButton from "./SelectButton";

function getSelectedOptions(options: Navbar[]) {
  return options.find((option) => option.isSelect);
}

const Header = () => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-row justify-between items-center ">
        <div>
          <img
            className="w-[1.563rem] h-[1.563rem]"
            loading="lazy"
            alt=""
            src={SendAMessage}
          />
        </div>

        <div className="hidden md:inline-block w-1/2">
          <SearchBar
            className="rounded-2xl"
            watermark="search by artwork, artist name ..."
          />
        </div>

        <p className="text-black text-xl mr-4 font-semibold leading-tight">
          <span>Welcome, </span>
          <br />
          Name
        </p>
      </div>

      <div className="py-3 md:hidden"></div>

      <SearchBar
        className="rounded-2xl w-1/2 md:hidden"
        watermark="search by artwork, artist name ..."
      />

      <div className="py-4 md:py-2"></div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row justify-between">
          {navbar.map((nav) => {
            return (
              <SelectButton
                key={nav.id}
                title={nav.title}
                type={nav.isSelect ? "filled" : "outlined"}
                className="rounded-[0.6rem] py-1"
              />
            );
          })}
        </div>

        <div className="flex flex-row justify-around py-4">
          {getSelectedOptions(navbar)?.options.map((option) => {
            return (
              <p className="text-black/60 text-xs" key={option.id}>
                {option.title}
              </p>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
