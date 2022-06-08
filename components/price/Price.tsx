import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Container, Grid } from "@mui/material";
import Switch from "react-switch";
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./Price.module.css";

export default function Price() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  const freeFeatures = [
    { label: " Pariatur quod similique", isActive: true },
    { label: " Sapiente libero doloribus nostrum", isActive: true },
    { label: " Vel ipsa esse repudiandae excepturi", isActive: false },
    { label: " Itaque cupiditate adipisci quibusdam", isActive: false },
  ];
  const Features = [
    { label: " Pariatur quod similique", isActive: true },
    { label: " Sapiente libero doloribus nostrum", isActive: true },
    { label: " Vel ipsa esse repudiandae excepturi", isActive: true },
    { label: " Itaque cupiditate adipisci quibusdam", isActive: true },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <Typography variant="h1" className={styles.Pricing_ganit}>
          Our Pricing Plans
        </Typography>
        <Typography className={styles.surprise}>
          No contracts. No surprise fees.
        </Typography>
        <Box className={styles.monthly}>
          <Typography
            className={` ${checked ? styles.surprise : styles.surprise1}`}>
            Monthly
          </Typography>
          <Box className={styles.priceee}>
            <Switch
              onChange={handleChange}
              checked={checked}
              onColor="#EBCD81"
              offColor="#EBCD81"
              onHandleColor="white"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={25}
              width={68}
            />
          </Box>
          <Typography
            className={` ${checked ? styles.surprise1 : styles.surprise}`}>
            Annually
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ marginBottom: "15%" }}
        >
          <Grid item md={4} sm={12}>
            <Box className={styles.free_box}>
              <Button className={styles.standard}>STANDARD</Button>
              <Typography variant="h2" className={styles.free_pricing}>
                Free <span className={styles.mo}> /mo</span>
              </Typography>
              <Typography variant="h2" className={styles.consectetur}>
                Lorem ipsum dolor sit amet consectetur,
                <br /> adipisicing elit.{" "}
              </Typography>
              {freeFeatures.map((x) => (
                <Typography>
                  <DoneIcon
                    className={` ${x.isActive ? styles.green_tick : styles.gray_tick}`}
                  />{" "}
                  <span
                    className={` ${x.isActive ? styles.quod : styles.quodq}`}>
                    {x.label}
                  </span>
                </Typography>
              ))}

              <Button className={styles.create_account}>
                Create account <ArrowRightAltIcon style={{ marginLeft: 10 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box className={styles.premium_box}>
              <Button className="Gold">Gold</Button>
              {checked ? (
                <Typography variant="h2" className={styles.free_pricing}>
                  $50 <span className={styles.mo}> /yr</span>
                </Typography>
              ) : (
                <Typography variant="h2" className={styles.free_pricing}>
                  $5 <span className={styles.mo}> /mo</span>
                </Typography>
              )}
              <Typography variant="h2" className={styles.consectetur}>
                Lorem ipsum dolor sit amet consectetur,
                <br /> adipisicing elit.{" "}
              </Typography>
              {Features.map((x) => (
                <Typography>
                  <DoneIcon
                    className={` ${x.isActive ? styles.green_tick : styles.gray_tick}`}
                  />{" "}
                  <span
                    className={` ${x.isActive ? styles.quod : styles.quodq}`}>
                    {x.label}
                  </span>
                </Typography>
              ))}
              <Button className={styles.sign_account}>
                Sign up <ArrowRightAltIcon style={{ marginLeft: 10 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
