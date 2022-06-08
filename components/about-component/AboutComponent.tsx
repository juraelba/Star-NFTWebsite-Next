import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import LazyLoad from "react-lazyload";

import styles from "./AboutComponent.module.css";

export default function About() {
  const whiteCard = [
    { title: "Next Mint Day", date: "Feb 15" },
    { title: "# of stars", date: "TBA" },
    { title: "Total Supply", date: "5000" },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Super_ganit}>
          Limited NFT Collection of <span className={styles.text_accent}>5000</span>{" "}
          stars
        </Typography>
        <Typography className={styles.text_description}>
          There are billions of stars in our Galaxy. We’ve curated a list of
          5000 stars with some kind of significance such as popularity, part of
          a constellation, color, distance, location and other traits.
        </Typography>
        <img src="/images/earth.jpeg" alt="next" className={styles.about_image} />
        <Grid container spacing={3}>
          {whiteCard.map((x, index) => (
            <Grid item lg={4} key={index} xs={12}>
              <LazyLoad throttle={200} height={200} once={index} offset={10} >
                <Box className={styles.white_about_box}>
                  <Typography className={styles.about_date}>{x.date}</Typography>
                  <Typography className={styles.about_title}>{x.title}</Typography>
                </Box>
              </LazyLoad>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
