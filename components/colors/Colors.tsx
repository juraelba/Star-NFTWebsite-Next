import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Color from "./color/Color";
import styles from "./Colors.module.css";
import { Color as ColorType } from "../../types/type";

interface ColorsProps {
  colors: ColorType[];
}

const Colors: React.FC<ColorsProps> = ({ colors }) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Colors</Typography>
      <Box className={styles.body}>
        {colors.map((color: ColorType, index: number) => (
          <Box className={styles.color} key={index}>
            <Color {...color} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Colors;
