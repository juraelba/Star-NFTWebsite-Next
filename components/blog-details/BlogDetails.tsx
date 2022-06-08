import React from "react";
import { Typography, Box, Container } from "@mui/material";

import styles from "./BlogDetails.module.css";

export default function BlogDetail() {
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Super_ganit}>
          tofuNFT Partnership
        </Typography>
        <Typography className={styles.date_title}>February 10, 2022</Typography>
        <img
          src={`/images/tofz.png`}
          alt="next"
          className={styles.blog_detail_image}
        />
        <Box className={styles.detail_margin}>
          <Typography className={styles.official}>🌟 IT’S OFFICIAL! 🌟</Typography>
          <Typography className={styles.official}>
            StarLedger is now a verified ✅ partner of tofuNFT! 🤝
          </Typography>
          <Typography className={styles.official}>
            Stargazers can buy and sell to grow their collections - all on
            tofuNFT!
          </Typography>
          <Typography className={styles.official}>
            Work your way to a full constellation or grab the legendary star of
            your dreams.
          </Typography>
          <Typography className={styles.official1}>
            https://tofunft.com/collection/starledger
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
