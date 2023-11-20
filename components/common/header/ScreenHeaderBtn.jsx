import styles from "./screenheader.style";
import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const ScreenHeaderBtn = ({ children }) => {
  return <Pressable className="px-2">{children}</Pressable>;
};

export default ScreenHeaderBtn;
