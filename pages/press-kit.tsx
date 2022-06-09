import { HttpClient } from "@metis.io/middleware-client";
import { NextPage } from "next";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import PressKit from "../components/press-kit/PressKit";
import OurLogo from "../components/our-logo/OurLogo";
import Colors from "../components/colors/Colors";
import AlternativeLogos from "../components/alternative-logos/AlternativeLogos";
import LookingForMore from "../components/looking-for-more/LookingForMore";
import Footer from "../components/footer/Footer";
import HeadTag from "../components/HeadMeta";
import { Color } from "../types/type";

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
  const colors: Color[] = [
    {
      name: "Stardust",
      hex: "#C1AB70",
      rgba: "rgba(193, 171, 112, 1)",
      color: "#FCFCF9",
      borderColor: "#C1AB70",
    },
    {
      name: "Space Green",
      hex: "#1B2735",
      rgba: "rgba(27, 39, 53, 1)",
      color: "#FCFCF9",
      borderColor: "#353945",
    },
    {
      name: "Almost Black",
      hex: "#090A0F",
      rgba: "rgba(9, 10, 15, 1)",
      color: "#FCFCF9",
      borderColor: "#090A0F",
    },
    {
      name: "White",
      hex: "#FCFCF9",
      rgba: "rgba(252, 252, 249, 1)",
      color: "#090A0F",
      borderColor: "#FCFCF9",
    },
  ];
  return (
    <>
      <HeadTag title="StarLedger" content="Starlege is the metamask website" />
      <Header />
      <PressKit />
      <Box sx={{ px: "24px", py: "90px", maxWidth: 1284, mx: "auto" }}>
        <OurLogo />
        <AlternativeLogos />
        <Colors colors={colors} />
        <LookingForMore />
      </Box>
      <Footer />
    </>
  );
};

export default IndexPage;
