import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./MarkLogo.module.css";
import clsx from "clsx";

interface MarkLogoProps {
  color?: "normal" | "light" | "dark";
  href: string;
}

const MarkLogo: React.FC<MarkLogoProps> = ({ color = "normal", href }) => {
  return (
    <Box
      component="a"
      href={href}
      className={clsx(
        styles.container,
        { [styles.light]: color === "light" },
        { [styles.dark]: color === "dark" }
      )}
    >
      <Image
        src="/images/logo/logo.svg"
        width={158}
        height={154}
        alt=":( Not Found"
        className={styles.logo}
      />
      <Box className={styles.extensions}>
        <Typography className={styles.extension}>.svg</Typography>
        <Typography className={styles.extension}>.png</Typography>
      </Box>
    </Box>
  );
};

export default MarkLogo;
