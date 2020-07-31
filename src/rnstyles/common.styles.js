import React from "react";
import { StyleSheet } from "react-native";

export const chicCommon = StyleSheet.create({
  colored: (props) => {
    return {
      color: props.color,
      padding: 6,
    };
  },
  marginTop30: {
    marginTop: 30,
  },
});
