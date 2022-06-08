import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import useScroll from "../../hooks/useScroll";

export default function Contact() {
  const boxArray = [
    {
      title: "Twitter",
      description: "https://twitter.com/StarLedgerNFT",
      icon: "twitter",
    },
    {
      title: "Discord",
      description: "https://discord.gg/starledger",
      icon: "purple",
    },
    {
      title: "Instagram",
      description: "https://instagram.com/starledgerspace",
      icon: "instagram",
    },
    {
      title: "TikTok",
      description: "https://tiktok.com/@starledger",
      icon: "tiktok",
    },
    // {
    //   title: "Medium",
    //   description: "https://medium.com/@StarLedgerNFT",
    //   icon: "medium",
    // },
  ];
  const { handleScroll, scrollDir } = useScroll(0);

  useEffect(() => {
    handleScroll();
  }, [scrollDir]);

  console.log("scrollDir", scrollDir);

  const variant1 = {
    down: { y: "-20px" },
    up: { y: "0" }
  };

  const variant2 = {
    down: { y: "-25px", x: "-10px" },
    up: { y: "0", x: "0" }
  };

  const variant3 = {
    down: { y: "-25px", x: "20px" },
    up: { y: "0", x: "0" }
  };

  const variant4 = {
    down: { y: "-25px", x: "-15px" },
    up: { y: "0", x: "0" }
  };

  return (
    <Container>
      <Box className={styles.main_box} style={{ marginBottom: "10%" }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6}>
            <Typography className={styles.community}>
              Join the
              <br /> community{" "}
            </Typography>
            <Typography className={styles.growing}>
              Be part of a growing community of star lovers everywhere.
            </Typography>
            {boxArray.map((x, index) => (
              <LazyLoad throttle={200}>
                <Box className={styles.flex_contact} key={index}>
                  <Box className={styles.icon_box_contact}>
                    <img
                      src={`/images/${x.icon}.svg`}
                      alt="next"
                      className={styles.nft_icon}
                    />
                  </Box>
                  <Box className={styles.ml}>
                    <Typography className={styles.mail_title}>{x.title}</Typography>
                    <a href={x.description} target="_blank">
                      <Typography className={styles.mail}>{x.description}</Typography>
                    </a>
                  </Box>
                </Box>
              </LazyLoad>
            ))}
          </Grid>
          <Grid item lg={6} className={styles.relative_box}>
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.rightAnimationStyle1}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant1}
              transition={{
                default: { duration: 2 }
              }}
            />
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.rightAnimationStyle2}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant1}
              transition={{
                default: { duration: 2 }
              }}
            />
            <motion.img
              src="/images/circle2.png"
              alt=":( Not found"
              className={styles.rightAnimationStyle3}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant2}
              transition={{
                default: { duration: 2 }
              }}
            />
            <Box className={styles.contact_form}>
              <Typography className={styles.mail_reach}>Reach out</Typography>
              <input className={styles.contact_input} placeholder="Name" />
              <input className={styles.contact_input} placeholder="Email address" />
              <textarea
                className={styles.contact_input1}
                placeholder="Message"
                rows={5}
              />
              <Button className={styles.contact_submit}>Submit</Button>
            </Box>
            <motion.img
              src="/images/circle.png"
              alt=":( Not found"
              className={styles.leftAnimationStyle1}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant1}
              transition={{
                default: { duration: 2 }
              }}
            />
            <motion.img
              src="/images/circle2.png"
              alt=":( Not found"
              className={styles.leftAnimationStyle2}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant3}
              transition={{
                default: { duration: 2 }
              }}
            />
            <motion.img
              src="/images/circle2.png"
              alt=":( Not found"
              className={styles.leftAnimationStyle3}
              animate={scrollDir === "DOWN" ? "down" : "up"}
              variants={variant4}
              transition={{
                default: { duration: 2 }
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
