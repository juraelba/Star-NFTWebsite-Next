import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import useScroll from "../../hooks/useScroll";
import { motion } from "framer-motion";

import styles from "./NewsLetter.module.css";

export default function NewsLetter({ value }) {
  const { handleScroll, scrollDir } = useScroll(value);

  useEffect(() => {
    handleScroll();
  }, [scrollDir]);

  const variant1 = {
    down: { y: "-20px" },
    up: { y: "0" }
  };
  
  const variant2 = {
    down: { y: "-80px", x: "-40px" },
    up: { y: "0", x: "0" }
  };

  const variant3 = {
    down: { y: "-60px" },
    up: { y: "0" }
  };

  const variant4 = {
    down: { y: "-80px", x: "40px" },
    up: { y: "0", x: "0" }
  };

  return (
    <Container>
      <Box className={styles.newsletterWrapper}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} xs={12} classes={{ item: styles.textWrapper }}>
            <Typography className={styles.newsletter_join}>
              Join the StarLedger newsletter
            </Typography>
            <Typography className={styles.newsletter_notes}>
              Cosmic news of astronomical proportions
            </Typography>
            <Box className={styles.input_flex}>
              <input className={styles.input} placeholder="Your email" />
              <Button className={styles.join_button}>Join!</Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} xs={12} classes={{ item: styles.imageWrapper }}>
            <Box className={styles.imageContainer}>
              <Box className={styles.starImageContainer}>
                <motion.img
                  src="/images/fire.jpeg"
                  alt=":( Not found"
                  className={styles.fire_image}
                  animate={scrollDir === "DOWN" ? "down" : "up"}
                  variants={variant1}
                  transition={{
                    default: { duration: 1.5 }
                  }}
                />
              </Box>
            </Box>
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.animationCircl1}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant2}
              transition={{
                default: { duration: 2.5 }
              }}
            />
            <motion.img
              src="/images/circle2.png"
              alt=":( Not found"
              className={styles.animationCircl2}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant3}
              transition={{
                default: { duration: 2.5 }
              }}
            />
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.animationCircl3}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant3}
              transition={{
                default: { duration: 2.5 }
              }}
            />
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.animationCircl4}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant4}
              transition={{
                default: { duration: 2.5 }
              }}
            />
            {/* <img src="/images/fire.jpeg" alt="next" className={styles.fire_image} /> */}
            {/* <img
              src="/images/circle.png"
              alt="next"
              className={` ${scroll ? `{ ${styles.circle1} ${styles.newsletter1} }` : styles.circle1}`}
            />
            <img
              src="/images/circle2.png"
              alt="next"
              className={` ${scroll ? `{ ${styles.circle2} ${styles.newsletter2} }` : styles.circle2}`}
            />
            <img
              src="/images/circle3.png"
              alt="next"
              className={` ${scroll ? `{ ${styles.circle3} ${styles.newsletter3} }` : styles.circle3}`}
            />
            <img
              src="/images/circle4.png"
              alt="next"
              className={` ${scroll ? `{ ${styles.circle4} ${styles.newsletter1} }` : styles.circle4}`}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
