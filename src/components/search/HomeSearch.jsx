import React from "react";
import { Input } from "antd";
//
import styles from "./HomeSearch.module.css";

const { Search } = Input;

const HomeSearch = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className={styles.HomeSearch}>
      <Search
        placeholder="Search your station!"
        allowClear
        size="large"
        onSearch={onSearch}
        className={styles.SearchBar}
      />
    </div>
  );
};

export default HomeSearch;
