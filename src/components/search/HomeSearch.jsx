import React from "react";
import { Input } from "antd";
//
import styles from "./HomeSearch.module.css";

const HomeSearch = () => {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  return (
    <div className={styles.HomeSearch}>
      <Search
        placeholder="Search your station!"
        allowClear
        size="large"
        onSearch={onSearch}
        className={styles.SearchBar}
        bordered={false}
        enterButton
      />
    </div>
  );
};

export default HomeSearch;
