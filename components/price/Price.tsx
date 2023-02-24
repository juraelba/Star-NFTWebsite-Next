import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "./switch/Switch";
import clsx from "clsx";
import styles from "./Price.module.css";
import { PricePlan } from "../../types/type";
import Card from "./card/Card";

const Price: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const plans: PricePlan[] = [
    {
      name: "Standard",
      unit: isChecked ? "/mo" : "/yr",
      price: "Free",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      availables: [1, 2],
      action: {
        name: "Create account",
        function: () => {},
      },
    },
    {
      name: "Gold",
      unit: isChecked ? "/mo" : "/yr",
      price: "$5",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      availables: [1, 2, 3],
      selected: true,
      action: {
        name: "Sign up",
        function: () => {},
      },
    },
    {
      name: "Standard",
      price: "0.009",
      unit: "ETH",
      lifetime: true,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      availables: [1, 2, 3, 4],
      action: {
        name: "Connect wallet",
        function: () => {},
      },
    },
  ];

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Our Pricing Plans</Typography>
      <Typography className={styles.description}>
        No contracts. No surprise fees.
      </Typography>
      <Switch
        checked={isChecked}
        className={styles.switch}
        onChange={handleChange}
        on="Monthly"
        off="Annually"
      />
      <Box className={styles.cardContainer}>
        {plans.map((plan: PricePlan, index: React.Key) => (
          <Box className={styles.item} key={index}>
            <Card {...plan} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Price;
