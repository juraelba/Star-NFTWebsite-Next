import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HorizontalLogo from "../horizontal-logo/HorizontalLogo";
import styles from "./OurLogo.module.css";

const OurLogo = () => {
  return (
    <Box className={styles.ourLogoContainer}>
      <Typography className={styles.title}>Our Logo</Typography>
      <Typography className={styles.description}>
        Please do not edit, change, distort, recolor, or reconfigure the
        StarLedger logo.
      </Typography>
      <Box className={styles.logoContainer}>
        <Box className={styles.logo}>
          <HorizontalLogo color="dark" />
        </Box>
        <Box className={styles.logo}>
          <HorizontalLogo />
        </Box>
      </Box>
    </Box>
  );
};

export default OurLogo;
