import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import Home from "../components/home/Home";
import Features from "../components/features/Features";
// import Works from "../components/how-it-works/HowItWorks";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";
import Requirements from "../components/requirements/Requirements";
import Universe from "../components/digital-universe/DigitalUniverse";
import { Box } from "@mui/material";
import HeadTag from "../components/HeadMeta";
import styles from "./index.module.css";
const IndexPage: NextPage<{
  polisClient: HttpClient;
  polisUser: {
    balance: string;
    display_name: string;
    email: string;
    eth_address: string;
    last_login_time: number;
    username: string;
  };
}> = () => {
  return (
    <>
      <HeadTag title="StarLedger" content="Starlege is the metamask website"/>
      <Header />
      <Box sx={{ backgroundColor: "#1B2735" }} className={styles.homepage_wrapper}>
        <Home />
        <Features />
        <Universe />
        {/* <Works /> */}
        <Requirements />
        <NewsLetter value={2000}/>
        <Footer />
      </Box>
    </>
  );
};

export default IndexPage;
