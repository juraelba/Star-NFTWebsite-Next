import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";
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
      <HeadTag title="Contact | StarLedger" content="Starlege is the metamask website"/>

      <Header />
      <Box sx={{ backgroundColor: "#1B2735" }}>
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default IndexPage;
