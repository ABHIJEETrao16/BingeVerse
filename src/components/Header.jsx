import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className="sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Binge<span className="text-white">Verse</span>
        </span>
      </Link>
      <Link to={"/addmovie"}>
        <h1 className="text-lg cursor-pointer flex items-center">
          <Button>
            <AddIcon className="mr-1" color="secondary" />{" "}
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
