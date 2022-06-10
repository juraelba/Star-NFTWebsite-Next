import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VerticalLogo from "./vertical-logo/VerticalLogo";
import MarkLogo from "./mark-logo/MarkLogo";
import styles from "./AlternativeLogos.module.css";

const AlternativeLogos = () => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Alternative Logos</Typography>
      <Typography className={styles.description}>
        Use these only when the StarLedger brand is clearly visible or has been
        well established elsewhere on the page or in the design. (When in doubt,
        use the other one.)
      </Typography>
      <Box className={styles.verticalLogoContainer}>
        <Typography className={styles.subtitle}>Vertical Logo</Typography>
        <Box className={styles.body}>
          <Box className={styles.logo}>
            <VerticalLogo
              color="dark"
              href="/images/logo/logo-vertical-light.zip"
            />
          </Box>
          <Box className={styles.logo}>
            <VerticalLogo href="/images/logo/logo-vertical-dark.zip" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.markLogoContainer}>
        <Typography className={styles.subtitle}>Mark Logo Only</Typography>
        <Box className={styles.body}>
          <Box className={styles.markLogo}>
            <MarkLogo href="/images/logo/logo.zip" />
          </Box>
          <Box className={styles.markLogo}>
            <MarkLogo color="dark" href="/images/logo/logo-dark.zip" />
          </Box>
          <Box className={styles.markLogo}>
            <MarkLogo color="light" href="/images/logo/logo-light.zip" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AlternativeLogos;
