import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";

import styles from "./Main.module.css";

export default function Main() {
  const cardArray = [
    {
      title: "NFT",
      description:
        "Each star is minted as an NFT and includes a StarLedger certificate.",
      icon: "batch.svg",
      image: "nftis.png"
    },
    {
      title: "3D Map",
      description:
        "View all 5,000 stars on the StarLedger Map. For desktop and mobile.",
      icon: "lock1.svg",
      image: "blackstar.jpeg"
    },
    {
      title: "Andromeda + Ethereum",
      description:
        "StarLedger lives on the Metis Andromeda blockchain, an Ethereum Layer 2 rollup platform. Coming soon to Ethereum.",
      icon: "leaf.png",
      image: "galaxyy.jpeg"
    },
    {
      title: "Crypto",
      description:
        "Use $METIS + $ETH to buy and sell stars in the StarLedger Marketplace.",
      icon: "coinn.svg",
      image: "blackpaper.png"
    },
    {
      title: "Marketplace",
      description:
        "Coming Soon. Buy and sell stars in the StarLedger Marketplace.",
      icon: "hands.svg",
      image: "earth1.jpeg"
    },
    {
      title: "Explorer",
      description:
        "EComing Soon. See all transactions in real-time using the StarLedger Explorer.",
      icon: "robot.svg",
      image: "boy.jpeg"
    },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Super_ganit}>
          Super giant features
        </Typography>
        <Typography className={styles.collection}>
          StarLedger is more than an NFT collection.
          <br />
          It's an immersive celestial experience.
        </Typography>
        <Grid container spacing={3}>
          {cardArray.map((x, index) => (
            <Grid item lg={4} className={styles.margin_tp} key={index}>
              <img src={`/images/${x.image}`} alt={`${x.image}`} className={styles.nft_image} />
              <Box className={styles.icon_box}>
                <img src={`/images/${x.icon}`} alt={`${x.icon}`} className={styles.nft_icon} />
              </Box>
              <Typography className={styles.nft_titile}>{x.title}</Typography>
              <Typography className={styles.nft_description}>
                {x.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
