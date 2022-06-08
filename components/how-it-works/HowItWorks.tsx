import React from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";

import styles from "./HowItWorks.module.css";

export default function Works() {
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Stellar_ganit}>
          How it works
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <Box className={styles.margin}>
              <Box className={styles.icon_box}>
                <Box className={styles.badge}>1</Box>
                <img src="/images/start.svg" alt="next" className={styles.nft_icon} />
              </Box>
              <Typography className={styles.feature_titile1}>
                Explore the StarLedger metaverse
              </Typography>
              <Typography className={styles.feature_description}>
                All 5,000 stars are available to view on desktop and mobile.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1.5}>
            <img src="/images/arrow.svg" alt="next" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={3}>
            <Box className={styles.margin}>
              <Box className={styles.icon_box}>
                <Box className={styles.badge}>2</Box>

                <img src="/images/start.svg" alt="next" className={styles.nft_icon} />
              </Box>
              <Typography className={styles.feature_titile1}>
                Explore the StarLedger metaverse
              </Typography>
              <Typography className={styles.feature_description}>
                All 5,000 stars are available to view on desktop and mobile.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1.5}>
            <img src="/images/arrow.svg" alt="next" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={3}>
            <Box className={styles.margin}>
              <Box className={styles.icon_box}>
                <Box className={styles.badge}>3</Box>

                <img src="/images/start.svg" alt="next" className={styles.nft_icon} />
              </Box>
              <Typography className={styles.feature_titile1}>
                Explore the StarLedger metaverse
              </Typography>
              <Typography className={styles.feature_description}>
                All 5,000 stars are available to view on desktop and mobile.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Button className={styles.metaverse_button}>Explore Metaverse</Button>
      </Box>
    </Container>
  );
}
