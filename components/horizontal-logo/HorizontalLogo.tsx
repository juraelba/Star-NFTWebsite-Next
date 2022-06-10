import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./HorizontalLogo.module.css";
import clsx from "clsx";
import useIsMobile from "../../hooks/useIsMobile";

interface HorizontalLogoProps {
  color?: "light" | "dark";
  href: string;
}

const HorizontalLogo: React.FC<HorizontalLogoProps> = ({
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
          src="/images/logo/logo-horizontal-light.svg"
          width={isMobile ? 248 : 286}
          height={isMobile ? 45 : 52}
          alt=":( Not Found"
        />
      ) : (
        <Image
          src="/images/logo/logo-horizontal-dark.svg"
          width={isMobile ? 248 : 286}
          height={isMobile ? 45 : 52}
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

export default HorizontalLogo;
