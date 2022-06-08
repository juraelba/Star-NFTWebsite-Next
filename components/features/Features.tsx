import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";

import styles from "./Feature.module.css";

export default function Features() {
  const cards = [
    {
      title: "NFT",
      description:
        "Each star is minted as an NFT and includes a StarLedger certificate.",
      image: "batch",
    },
    {
      title: "Metaverse",
      description:
        "View all 5,000 stars in the StarLedger metaverse and mobile.",
      image: "lock",
    },
    {
      title: "Crypto",
      description:
        "Use $METIS to buy and sell stars in the StarLedger Marketplace.",
      image: "coin",
    },
    {
      title: "Metis Andromeda",
      description:
        "Low gas fees, fast transactions. Ethereum Layer 2 rollup platform.",
      image: "lock",
    },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Stellar_ganit}>
          Stellar features
        </Typography>
        <Typography className={styles.collection}>
          Immerse yourself in the StarLedger metaverse
        </Typography>
        <Grid container spacing={3}>
          {cards.map((x, index) => (
            <Grid item lg={3} key={index}>
              <Box className={styles.margin}>
                <Box className={styles.icon_box}>
                  <img
                    src={`/images/${x.image}.svg`}
                    alt="next"
                    className={styles.nft_icon}
                  />
                </Box>
                <Typography className={styles.feature_titile}>{x.title}</Typography>
                <Typography className={styles.feature_description}>
                  {x.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
