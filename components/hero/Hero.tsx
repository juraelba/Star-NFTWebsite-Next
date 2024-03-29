import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "./card/Card";
import Cover from "./cover/Cover";
import styles from "./Hero.module.css";
import { HeroItem } from "../../types/type";
import useIsMobile from "../../hooks/useIsMobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const items: HeroItem[] = [
    {
      name: "NFTs",
      icon: "/images/icons/flash.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "http://cdn.starledger.org/videos/nft-2.mp4",
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
      name: "Games",
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
    {
      name: "Member",
      icon: "/images/icons/profile.svg",
      description:
        "Curabitur tortor mauris, bibendum nec nibh vel, tincidunt semper odio. Aenean id, ultrices sed.",
      path: "#",
      video: "https://cdn.starledger.org/videos/members.mp4",
    },
  ];
  const [selectedCard, setSelectedCard] = useState<HeroItem>(items[0]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpenCover = (data: HeroItem) => {
    if (isMobile) {
      setIsOpen(true);
      setSelectedCard(data);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box className={styles.container}>
      {items.map((item: HeroItem, index: React.Key) => (
        <Card {...item} key={index} onClick={() => handleOpenCover(item)} />
      ))}
      <Cover isOpen={isOpen} {...selectedCard} onClose={handleClose} />
    </Box>
  );
};

export default Hero;
