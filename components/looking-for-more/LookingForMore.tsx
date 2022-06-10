import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./LookingForMore.module.css";
import useIsMobile from "../../hooks/useIsMobile";

const LookingForMore: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Box>
      <Typography className={styles.title}>Looking for more?</Typography>
      <Typography className={styles.description}>
        Download the full StarLedger media kit and get: app icons, banners,
        logos and more
      </Typography>
      <a href="/images/logo/full-kit.zip" className={styles.download}>
        <Typography className={styles.text}>
          Download {!isMobile && "full media"} kit
        </Typography>
        <Image
          src="/images/icons/arrow-right.svg"
          width={24}
          height={24}
          alt=":( Not Found"
        />
      </a>
    </Box>
  );
};

export default LookingForMore;
