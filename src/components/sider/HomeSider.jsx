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
import Login from "../login/Login";

//

const HomeSider = () => {
  const onClick = ({ key }) => {
    console.log(`clicked on ${key}`);
  };

  return (
    <div>
      <div className={styles.LogoContainer}>
        <Link href="/">
          <Image className={styles.Logo} src="/images/Logo.svg" fill={true} />
        </Link>
      </div>
      <Menu
        onClick={onClick}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        {/* <Menu.Item key="1" icon={<AiFillHome />}>
          For you
        </Menu.Item>
        <Menu.Item key="2" icon={<RiMusicFill />}>
          Music
        </Menu.Item>
        <Menu.Item key="3" icon={<IoMdMicrophone />}>
          Podcasts
        </Menu.Item>
        <Menu.Item key="4" icon={<IoMdFootball />}>
          Sports
        </Menu.Item>
        <Menu.Item key="5" icon={<GoRadioTower />}>
          News
        </Menu.Item>
        <Divider className={styles.divider} />
        <Menu.Item key="6">All podcasts &#62;</Menu.Item>
        <Menu.Item key="7">All stations &#62;</Menu.Item>
        <Divider className={styles.divider} />
        {/* <Menu.Item disabled className=" cursor-default">
          <Login />
        </Menu.Item> */}
        {/* <Menu.Item key="8" icon={<AiFillHome />}>
          Sign in &#62;
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default HomeSider;
