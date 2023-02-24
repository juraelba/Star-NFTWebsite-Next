import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./VerticalLogo.module.css";
import clsx from "clsx";
import useIsMobile from "../../../hooks/useIsMobile";

interface VerticalLogoProps {
  color?: "light" | "dark";
  href: string;
}

const VerticalLogo: React.FC<VerticalLogoProps> = ({
  color = "light",
  href,
}) => {
  const isMobile = useIsMobile();

  return (
    <Box
      component="a"
      href={href}
      className={clsx(styles.container, { [styles.light]: color === "light" })}
    >
      {color !== "light" ? (
        <Image
          src="/images/logo/logo-vertical-light.svg"
          width={isMobile ? 216 : 264}
          height={isMobile ? 168 : 206}
          alt=":( Not Found"
        />
      ) : (
        <Image
          src="/images/logo/logo-vertical-dark.svg"
          width={isMobile ? 216 : 264}
          height={isMobile ? 168 : 206}
          alt=":( Not Found"
        />
      )}
      <Box className={styles.extensions}>
        <Typography className={styles.extension}>.svg</Typography>
        <Typography className={styles.extension}>.png</Typography>
      </Box>
    </Box>
  );
};

export default VerticalLogo;
