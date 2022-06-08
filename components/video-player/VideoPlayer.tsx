import React from "react";
import { Box, Container } from "@mui/material";
import ReactPlayer from "react-player";

import styles from "./VideoPlayer.module.css";

export default function Player() {
  return (
    <Container>
      <Box className={styles.main_box}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=I4qyBwNNC04&t=2112s&ab_channel=Metis"
          width="100%"
          height={"674px"}
          style={{ borderRadius: 24 }}
        />
      </Box>
    </Container>
  );
}
