import React from "react";
import { ButtonProps, Button as NativeButton } from "react-native";

interface ButtonSProps extends ButtonProps {
  title: string;
}

const Button = ({ title, ...props }: ButtonSProps) => {
  return <NativeButton title={title} {...props}></NativeButton>;
};

export default Button;
