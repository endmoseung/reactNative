import { StyleSheet, Image as NativeImage, ImagePropsBase } from "react-native";
import React from "react";

interface ImageProps extends ImagePropsBase {}

const Image = ({ ...props }: ImageProps) => {
  return <NativeImage {...props}></NativeImage>;
};

export default Image;

const styles = StyleSheet.create({});
