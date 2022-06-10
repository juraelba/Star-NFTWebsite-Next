import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "./Card.module.css";
import { HeroItem } from "../../../types/type";
import { Typography } from "@mui/material";

const Card: React.FC<HeroItem> = (props) => {
  const { name, description, icon, path, video } = props;

  return (
    <Box className={styles.container}>
      <Image src={icon} width={48} height={48} alt=":( Not Found" />
      <Typography className={styles.name}>{name}</Typography>
      <Typography className={styles.description}>{description}</Typography>
    </Box>
  );
};

export default Card;
