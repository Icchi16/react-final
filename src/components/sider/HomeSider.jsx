import React from "react";
import { Divider, Menu } from "antd";
//
import { AiFillHome } from "react-icons/ai";
import { RiMusicFill } from "react-icons/ri";
import { IoMdFootball, IoMdMicrophone } from "react-icons/io";
import { GoRadioTower } from "react-icons/go";

import Link from "next/link";
import Image from "next/image";
import styles from "./HomeSider.module.css";
import { Login, Login2 } from "../login/Login";

//

const HomeSider = () => {
  const onClick = ({ key }) => {
    console.log(`clicked on ${key}`);
  };

  const _ = undefined;

  const getMenuItem = (type, key, label, icon, title, disabled, danger) => {
    return {
      type: type,
      key: key,
      label: label,
      icon: icon,
      title: title,
      disabled: disabled === "disabled" ? true : false,
      danger: danger === "danger" ? true : false,
    };
  };

  const menuItems = [
    getMenuItem("item", "forYou", "For you", <AiFillHome />),
    getMenuItem("item", "music", "Music", <RiMusicFill />),
    getMenuItem("item", "podcast", "Podcast", <IoMdMicrophone />),
    getMenuItem("item", "sport", "Sport", <IoMdFootball />),
    getMenuItem("item", "news", "News", <GoRadioTower />),
    getMenuItem("divider"),
    getMenuItem("item", "allPodcasts", "All Podcasts >"),
    getMenuItem("item", "allStations", "All Station >"),
    getMenuItem("divider"),
    getMenuItem("item", "login", <Login />),
    getMenuItem("item", "login2", <Login2 />, _, _, _, "danger"),
  ];

  // render comp
  return (
    <div>
      <div className={styles.LogoContainer}>
        <Link href="/">
          <Image
            priority
            alt="Angten"
            className={styles.Logo}
            src="/images/Logo.svg"
            fill={true}
          />
        </Link>
      </div>
      <Menu
        className={styles.Menu}
        onClick={onClick}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={menuItems}
      />
    </div>
  );
};

export default HomeSider;
