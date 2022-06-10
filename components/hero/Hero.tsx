import React from "react";
import Box from "@mui/material/Box";
import Card from "./card/Card";
import styles from "./Hero.module.css";
import { HeroItem } from "../../types/type";

const Hero: React.FC = () => {
  const items: HeroItem[] = [
    {
      name: "Member",
      icon: "/images/icons/profile.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/members.mp4",
    },
    {
      name: "Mint",
      icon: "/images/icons/flash.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/nft.mp4",
    },
    {
      name: "Map",
      icon: "/images/icons/discovery.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/map.mp4",
    },
    {
      name: "Website",
      icon: "/images/icons/url.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/games.mp4",
    },
    {
      name: "News",
      icon: "/images/icons/heart.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/news.mp4",
    },
  ];
  return (
    <Box className={styles.container}>
      {items.map((item: HeroItem, index: Number) => (
        <Box className={styles.item}>
          <Card {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Hero;
