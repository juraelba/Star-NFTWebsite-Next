import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";

import styles from "./Requirements.module.css";
export default function Requirements() {
  const features = [
    { title: "VR/AR mode" },
    { title: "Marketplace" },
    { title: "Explorer" },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Grid container spacing={3}>
          <Grid item lg={6.7}>
            <Box className={styles.relative_box}>
              <img src="/images/wall.jpeg" alt="next" className={styles.wall_image} />
              <img
                src="/images/circle.png"
                alt="next"
                className={`${styles.circle_wall_image} ${styles.animation1} `}
              />
              <img
                src="/images/circle2.png"
                alt="next"
                className={`${styles.circle_wall_image1} ${styles.animation1} `}
              />
              <img
                src="/images/circle2.png"
                alt="next"
                className={`${styles.circle_wall_image2} ${styles.animation} `}
              />
            </Box>
          </Grid>
          <Grid item lg={5}>
            <Box className={styles.feature_added}>
              <Typography className={styles.added}>
                Features added <span className={styles.text_accent}>constantly</span>
              </Typography>
              <Typography className={styles.constantly}>
                Our team is hard at work developing new features to make
                StarLedger the most immersive celestial experience ever
                including:
              </Typography>
              {features.map((x, index) => (
                <Box className={styles.mode_box} key={index}>
                  <Box className={styles.check_box}>
                    <img
                      src="/images/check.svg"
                      alt="next"
                      className={styles.check_icon}
                    />
                  </Box>
                  <Typography className={styles.vr_mode}>{x.title}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
