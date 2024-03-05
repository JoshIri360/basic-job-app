import React from "react";
import { Pressable } from "react-native";

const ScreenHeaderBtn = ({ children }) => {
  return <Pressable className="px-2">{children}</Pressable>;
};

export default ScreenHeaderBtn;
