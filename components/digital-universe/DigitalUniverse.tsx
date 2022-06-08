import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";

import styles from "./DigitalUniverse.module.css";

export default function Requirements() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1250);
    });
  }, [scroll]);
  return (
    <Container>
      <Box className={styles.main_box}>
        <Grid container spacing={3}>
          <Grid item lg={5.5}>
            <Typography className={styles.added}>
              Building a <span className={styles.text_accent}>digital</span>
              representation of our{" "}
              <span className={styles.text_accent}>universe</span>
            </Typography>
            <Typography className={styles.constantly}>
              The Milky Way galaxy is home to billions of stars. These stars
              have been a part of our history from the beginning. They have
              guided us, inspired us and bring us together in the awe of their
              beauty and mystery.
            </Typography>

            <Typography className={styles.constantly}>
              We want to build a 1:1 digital representation of our galaxy as
              accurately as possible, and discover new ways to experience space
              in an immersive 3D metaverse.
            </Typography>
            <Button className={styles.more_button}>More Features</Button>
          </Grid>
          <Grid item lg={6}>
            <Box
              className={`${styles.relative_box} ${styles.web_view}`}
              style={{ paddingTop: "12%" }}
            >
              <img
                src="/images/galaxy.jpeg"
                alt="next"
                className={` ${scroll ? `{ ${styles.blackglaxy_Image} ${styles.galaxy_animation} }` : styles.blackglaxy_Image}`}
              // className={
              //   scroll
              //     ? "blackglaxy-Image galaxy-animation"
              //     : "blackglaxy-Image"
              // }
              />
              <img
                src="/images/sunside.jpeg"
                alt="next"
                className={` ${scroll ? `{ ${styles.blackglaxy_Image1} ${styles.galaxy_animation1} }` : styles.blackglaxy_Image1}`}
              // className={
              //   scroll
              //     ? "blackglaxy-Image1 galaxy-animation1"
              //     : "blackglaxy-Image1"
              // }
              />
              <img
                src="/images/blackgalaxy.jpeg"
                alt="next"
                className={` ${scroll ? `{ ${styles.blackglaxy_Image2} ${styles.galaxy_animation1} }` : styles.blackglaxy_Image2}`}
              // className={
              //   scroll
              //     ? "blackglaxy-Image2 galaxy-animation1"
              //     : "blackglaxy-Image2"
              // }
              />
              <img
                src="/images/circle.png"
                alt="next"
                className={` ${scroll ? styles.circle_animation_digital : ""}`}

              />
              <img
                src="/images/circle.png"
                alt="next"
                className={` ${scroll ? styles.circle_animation_digital1 : ""}`}

              />
              <img
                src="/images/circle2.png"
                alt="next"
                className={` ${scroll ? styles.circle_animation_digital2 : ""}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
