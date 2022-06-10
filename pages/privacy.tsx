import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import Header from "../components/header/Header";
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy";
import Footer from "../components/footer/Footer";
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
      <HeadTag title="StarLedger" content="Starlege is the metamask website" />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default IndexPage;
