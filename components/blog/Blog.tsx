import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import Link from "next/link";

import styles from "./Blog.module.css";

export default function Blog() {
  const blogs = [
    {
      title: "tofuNFT Partnership",
      date: "February 10, 2022",
      image: "tofz.png",
    },
    {
      title: "Mint Day Success",
      date: "February 10, 2022",
      image: "tofz1.jpeg",
    },
    {
      title: "Changes to Presale Events",
      date: "January 25, 2022",
      image: "tofz2.jpeg",
    },
    {
      title: "Metis Hackathon: NFT Winner",
      date: "January 20, 2022",
      image: "tofz3.png",
    },
    {
      title: "StarLedger Metaverse",
      date: "January 7, 2022",
      image: "tofz4.jpeg",
    },
  ];
  return (
    <Container>
      <Box className={styles.main_box} style={{ marginBottom: "10%" }}>
        <Typography variant="h1" className={styles.Super_ganit}>
          Captain's <span className={styles.text_accent}>blog</span>
        </Typography>
        <Grid container spacing={6}>
          {blogs.map((x, index) => (
            <Grid item lg={6} key={index}>
              <Link href="/blogdetail">
                <Box className={styles.blog_margin}>
                  <img
                    src={`/images/${x.image}`}
                    alt="next"
                    className={styles.blog_image}
                  />
                  <Typography className={styles.part_title}>{x.title}</Typography>
                  <Typography className={styles.date_title}>{x.date}</Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
