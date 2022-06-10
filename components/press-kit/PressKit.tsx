import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./PressKit.module.css";

const PressKit = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
    });
  };

  return (
    <Box className={styles.pressKitContainer}>
      <Typography className={styles.title}>Press Kit</Typography>
      <Typography className={styles.description}>
        We're a playful and fun brand that doesn't take ourselves too seriously.
        That said, we're keen on keeping things quality. If you're gonna use our
        art for something please keep it tasteful and send it our way for
        approval.
      </Typography>
      <Image
        src="/images/icons/scroll-down.svg"
        width={24}
        height={48}
        alt=":( Not Found"
        className={styles.scrollDown}
        onClick={handleScrollDown}
      />
    </Box>
  );
};

export default PressKit;
