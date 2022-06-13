import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PricePlan } from "../../../types/type";
import clsx from "clsx";
import styles from "./Card.module.css";

const Card: React.FC<PricePlan> = (props) => {
  const {
    name,
    price,
    unit,
    lifetime = false,
    description,
    selected = false,
    availables,
    action,
  } = props;
  const features: string[] = [
    "Pariatur quod similique",
    "Sapiente libero doloribus modi nostrum",
    "Vel ipsa esse repudiandae excepturi",
    "Itaque cupiditate adipisci quibusdam",
  ];

  return (
    <Box className={clsx(styles.container, { [styles.selected]: selected })}>
      <Typography className={styles.name}>{name}</Typography>
      <Box className={styles.priceContainer}>
        <Typography className={styles.price}>{price}</Typography>
        <Typography className={styles.unit}>{unit}</Typography>
      </Box>
      <Typography className={styles.description}>{description}</Typography>
      <Box className={styles.featuresContainer}>
        {features.map((feature: string, index: number) => {
          const active = availables.indexOf(index + 1) > -1;
          return (
            <Box className={styles.feature} key={index}>
              <Box className={styles.featureIcon}>
                {active ? (
                  <Image
                    src="/images/icons/check.svg"
                    width={24}
                    height={24}
                    alt=":( Not Found"
                  />
                ) : (
                  <Image
                    src="/images/icons/unavailable.svg"
                    width={24}
                    height={24}
                    alt=":( Not Found"
                  />
                )}
              </Box>
              <Typography
                className={clsx(styles.featureTxt, {
                  [styles.active]: active,
                })}
              >
                {feature}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Button onClick={action.function} className={styles.button}>
        <Typography className={styles.buttonTxt}>{action.name}</Typography>
        <Box className={styles.arrow}>
          <Image
            src="/images/icons/arrow-right-dark.svg"
            width={20}
            height={20}
            alt=":( Not Found"
          />
        </Box>
      </Button>
    </Box>
  );
};

export default Card;
