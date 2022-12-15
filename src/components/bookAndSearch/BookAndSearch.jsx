import { Button } from "antd";
import React from "react";

const BookAndSearch = () => {
  return (
    <div className="flex flex-row flex-1 justify-center">
      <div className="flex-none">Anywhere</div>
      <div className="flex-none">Any week</div>
      <div className="flex-none">Add guests</div>
      <Button className="flex-none">Search</Button>
    </div>
  );
};

export default BookAndSearch;
