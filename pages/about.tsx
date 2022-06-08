import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import About from "../components/about-component/AboutComponent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";
import { Box } from "@mui/material";
import VideoPlayer from "../components/video-player/VideoPlayer";
import RoadMap from "../components/roadmap/Roadmap";
import HeadTag from "../components/HeadMeta";

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
      <HeadTag
        title="About | StarLedger"
        content="Starlege is the metamask website"
      />

      <Header />
      <Box sx={{ backgroundColor: "#1B2735" }}>
        <About />
        <VideoPlayer />
        <RoadMap />
        <NewsLetter value={2250} />
        <Footer />
      </Box>
    </>
  );
};

export default IndexPage;
