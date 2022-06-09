import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Color.module.css";
import { Color as ColorType } from "../../../types/type";

const Color: React.FC<ColorType> = ({
  name,
  hex,
  rgba,
  borderColor,
  color,
}) => {
  return (
    <Box
      className={styles.container}
      style={{ background: hex, borderColor, color }}
    >
      <Typography className={styles.name}>{name}</Typography>
      <Typography className={styles.hex}>{hex}</Typography>
      <Typography className={styles.rgba}>{rgba}</Typography>
    </Box>
  );
};

export default Color;
