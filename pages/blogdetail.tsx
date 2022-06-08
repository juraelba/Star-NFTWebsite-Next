import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";
import { Box } from "@mui/material";
import BlogDetails from "../components/blog-details/BlogDetails";
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
        title="Blog-Detail | StarLedger"
        content="Starlege is the metamask website"
      />

      <Header />
      <Box sx={{ backgroundColor: "#1B2735" }}>
        <BlogDetails />
        <NewsLetter value={1150}/>
        <Footer />
      </Box>
    </>
  );
};

export default IndexPage;
