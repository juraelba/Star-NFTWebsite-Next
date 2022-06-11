import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "./Card.module.css";
import { HeroItem } from "../../../types/type";
import { Typography } from "@mui/material";

const Card: React.FC<HeroItem> = (props) => {
  const { name, description, icon, path, video } = props;
  const router = useRouter();
  const handleRedirect = () => router.push(path);

  return (
    <Box className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <Box className={styles.content}>
        <Image
          src={icon}
          width={48}
          height={48}
          alt=":( Not Found"
          className={styles.icon}
        />
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.description}>{description}</Typography>
        <Button className={styles.launch} onClick={handleRedirect}>
          <Typography className={styles.buttonTxt}>Launch</Typography>
          <Box className={styles.arrow}>
            <Image
              src="/images/icons/arrow-right-light.svg"
              width={20}
              height={20}
              alt=":( Not Found"
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
