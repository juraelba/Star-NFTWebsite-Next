import { Grid, Typography, Box, Container } from "@mui/material";
import Link from "next/link";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <Container>
      <footer>
        <Box className={styles.footer}>
          <Grid container className={styles.footer_container}>
            <Grid container item sm={12} md={12} lg={12} xl={12} spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <Box className={styles.wrapper}>
                  <h1 className={styles.logo}></h1>
                </Box>
                <Typography className="footer-desc">
                  Limited NFT collection of 5,000 stars representing stars in
                  our galaxy. Explore stars on 3D map. On Ethereum and Metis
                  Andromeda.
                </Typography>
                {/* <Typography className={styles.Infofot}>
                  info@starledger.org
                </Typography> */}
              </Grid>

              <Grid item xs={6} md={2} justifyContent="flex-end">
                <Typography className={styles.footer_heading}>
                  Quick Links
                </Typography>
                <Box>
                  <Link href="/">
                    <a className={styles.footer_text}>Discover</a>
                  </Link>
                  <Link href="/feature">
                    <a className={styles.footer_text}>Features</a>
                  </Link>
                  {/* <Link href="/pricing">
                    <a className={styles.footer_text}>Pricing</a>
                  </Link> */}
                  <Link href="/about">
                    <a className={styles.footer_text}>About</a>
                  </Link>
                  <Link href="/contact">
                    <a className={styles.footer_text}>Contact</a>
                  </Link>
                  {/* <Link href="/blog">
                    <a className={styles.footer_text}>Blog</a>
                  </Link> */}
                  <Link href="/press-kit">
                    <a className={styles.footer_text}>Press Kit</a>
                  </Link>
                  <Link href="/terms">
                    <a className={styles.footer_text}>Terms and Conditions</a>
                  </Link>
                  <Link href="/privacy">
                    <a className={styles.footer_text}>Privacy Policy</a>
                  </Link>
                  <Link href="/deletedPricing">
                    <a className={styles.footer_text}>Price Planing</a>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} md={2} justifyContent="flex-end">
                <Typography className={styles.footer_heading}>
                  Apps & Docs
                </Typography>
                <Box>
                  <a
                    href="https://map.starledger.org"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    StarLedger Map
                  </a>
                  <a
                    href="https://mint.starledger.org/"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    StarLedger Mint
                  </a>
                  <a
                    href="https://member.starledger.org/"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    StarLedger Member
                  </a>
                  <a
                    href="https://cdn.starledger.org/goldpaper/StarLedger%20GoldPaper%202022-02-28.pdf"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    StarLedger GoldPaper
                  </a>
                  <a
                    href="https://cdn.starledger.org/docs/GuideToTheGalaxy.pdf"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    Guide to the Galaxy
                  </a>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                // order={{ xs: 5, md: 4 }}
              >
                <Typography className={styles.footer_heading}>
                  Community
                </Typography>
                <Box>
                  <a
                    href="https://twitter.com/StarLedgerNFT"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    Twitter
                  </a>
                  <a
                    href="https://discord.gg/starledger"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    Discord
                  </a>
                  <a
                    href="https://instagram.com/starledgerspace"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@starledger"
                    target="_blank"
                    className={styles.footer_text}
                  >
                    Tiktok
                  </a>
                </Box>
              </Grid>
              {/* <Grid
                item
                xs={12}
                md={2}
              // order={{ xm: 4, md: 5 }}
              >
                <Typography className={styles.footer_heading}>
                  Social
                </Typography>
                <Box>
                  <Typography className={styles.footer_text}>
                    Twitter
                  </Typography>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.copyright_section}>
          <Typography className={styles.copyright_text}>
            @ 2022 StarLedger, Inc.
          </Typography>
        </Box>
      </footer>
    </Container>
  );
};

export default Footer;
