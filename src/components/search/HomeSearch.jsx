import React from "react";
import { Input } from "antd";
//
import styles from "./HomeSearch.module.css";

const { Search } = Input;

const HomeSearch = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="">
      <Search
        placeholder="Search your station!"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default HomeSearch;
