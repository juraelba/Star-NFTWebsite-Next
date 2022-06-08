import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Container } from "@mui/material";

import styles from "./Home.module.css";

export default function Main() {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Super_ganit}>
          Star <span className={styles.text_accent}>NFTs</span>
        </Typography>
        <Typography className={styles.collection}>
          Limited NFT collection of 5,000 stars
          <br />
          which represent stars in our own galaxy.
        </Typography>
        <Button className={styles.mint_button}>Mint Star</Button>
        <Typography className={styles.mint_goldpaper}>Real GoldPaper</Typography>
        <Box className={styles.image_animation}>
          <img src="/images/home.png" alt="next" className={styles.home_image} />
          <img src="/images/moon.jpeg" alt="next" className={styles.moon_image} />

          <img
            src="/images/circle.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image} ${styles.App_logo} }` : styles.circle_image}`}
          />
          <img
            src="/images/circle.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image1} ${styles.App_logo1} }` : styles.circle_image1}`}
          />
          <img
            src="/images/circle2.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image2} ${styles.App_logo} }` : styles.circle_image2}`}
          />

          <img
            src="/images/circle.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_left} ${styles.App_logo} }` : styles.circle_image_left}`}
          />
          <img
            src="/images/circle2.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_left1} ${styles.App_logo} }` : styles.circle_image_left1}`}
          />
          <img
            src="/images/circle2.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_left2} ${styles.App_logo} }` : styles.circle_image_left2}`}
          />
          <img
            src="/images/circle2.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_bottom} ${styles.App_logo1} }` : styles.circle_image_bottom}`}
          />
          <img
            src="/images/circle.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_bottom1} ${styles.App_logo1} }` : styles.circle_image_bottom1}`}
          />
          <img
            src="/images/circle.png"
            alt="next"
            className={` ${scroll ? `{ ${styles.circle_image_bottom2} ${styles.App_logo1} }` : styles.circle_image_bottom2}`}
          />
        </Box>
        {/* </ScrollAnimation> */}
      </Box>
    </Container>
  );
}
