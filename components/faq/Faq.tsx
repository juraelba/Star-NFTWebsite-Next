import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./Faq.module.css";

export default function Faq() {
  const acc = [
    { ques: "What is an NFT?", ans: "A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger. Types of NFT data units may be associated with digital files such as photos, videos, and audio. Because each token is uniquely identifiable, NFTs differ from blockchain cryptocurrencies, such as Bitcoin." },
    { ques: "What is in the StarLedger NFT collection?", ans: "StarLedger is an NFT collection of 5,000 stars representing stars in our galaxy. When you purchase a star NFT, you own the digital representation of a star. Each star NFT comes with a StarLedger Certificate as proof of ownership. This can be added to your MetaMask wallet.  StarLedger NFT owners can enjoy many perks including buying/selling stars in the StarLedger Marketplace, and viewing their stars in the StarLedger Metaverse. Many other benefits will be added to the roadmap as the project grows. " },
    { ques: "How do I mint an NFT on StarLedger?", ans: "StarLedger NFTs are minted at https://mint.starledger.org. To mint a StarLedger NFT, connect your wallet (we support MetaMask) and follow the instructions." },
    { ques: "How much is minting?", ans: " Presale: 0.07 ETH Public Sale: 0.09 ETH" },
    { ques: "Is there a secondary market for StarLedger?", ans: "Yes! You can buy, sell and auction StarLedger NFTs on tofuNFT:  https://tofunft.com/collection/starledger" },
    { ques: "What is Metis Andromeda?", ans: "Metis Andromeda is an exciting new blockchain network that utilizes the $METIS token. It is an Ethereum Layer 2 Rollup Platform with low gas fees and fast transactions, making it the perfect solution for StarLedger." }
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.frequently_ganit}>
          Frequently asked questions
        </Typography>
        <Typography className={styles.collection}>Is there life on Mars?</Typography>
        <Box className={styles.acc_box}>
          {acc.map((x, index) => (
            <Accordion className={styles.acc_header} key={index}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.acc_text}>{x.ques}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.acc_description}>
                  {x.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
