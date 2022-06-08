import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";

import styles from "./Roadmap.module.css";

export default function Requirements() {
  const features = [
    { title: "New features added often" },
    { title: "Ambitious projects to add value" },
    { title: "Maintenance and support" },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Grid container spacing={3}>
          <Grid item lg={6.7}>
            <Box className={styles.relative_box}>
              <img
                src="/images/roadmap.jpeg"
                alt="next"
                className={styles.wall_image}
              />
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
            <Box className={styles.about_added}>
              <Typography className={styles.added}>
                The near <span className={styles.text_accent}>future</span>
              </Typography>
              <Typography className={styles.constantly}>
                StarLedger has a dedicated team of developers, 3D artists, data
                scientists and designers.
                <br />
                <br />
                Our 2022 roadmap will set the foundation of StarLedger and bring
                us into a new age of space exploration... in the metaverse.
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
