import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import classNames from "classnames";
import user from "../../public/images/icons/user-icon.svg";
import styles from "./header.module.css";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import MenuIcon from "@mui/icons-material/Menu";
import { CSSTransition } from "react-transition-group";
import FadeIn from "react-fade-in";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;
  const router = useRouter();

  const handleKey = (e: KeyboardEvent) => {
    console.log(e);
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <header className={scroll ? styles.header : styles.header1}>
        <section className={styles.wrapper}>
          <h1 className={styles.logo}>
            <button className={styles.logoButton} onClick={handleClick}>
              <img
                className={styles.logoImage}
                height="32"
                src="/images/starledger-logo-horizontal.svg"
              />
              <span className={styles.logoSeparator}>|</span>
              <span className={styles.logoApp}>Website</span>
              <img
                className={classNames(open ? styles.arrow1 : styles.arrow)}
                height="16"
                src="/images/icons/toggle-icon.svg"
              />
            </button>
          </h1>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transitionDuration={600}
          >
            <Box className={styles.popupBox}>
              <a className={styles.aColor} href="https://mint.starledger.org">
                <Box className={styles.popNav}>Mint</Box>
              </a>
              <a className={styles.aColor} href="https://map.starledger.org">
                <Box className={styles.popNav}>Map</Box>
              </a>
              <Box style={{ padding: 20, fontSize: 17, fontWeight: 300 }}>
                <span>News</span>
              </Box>
              <Box style={{ padding: 20, fontSize: 17, fontWeight: 300 }}>
                <span>Member</span>
              </Box>
              <Box style={{ padding: 20, fontSize: 17, fontWeight: 300 }}>
                <b>Website</b>
              </Box>
              {/* <a className={styles.aColor} href="https://starledger.org">
                <Box className={styles.popNav}>Website</Box>
              </a> */}
            </Box>{" "}
          </Popover>

          <Popover
            id={id1}
            open={open1}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Box style={{ width: 260, paddingTop: 20, height: 250 }}>
              <a className={styles.aColor} href="/">
                <Box className={styles.popNav}>Discover</Box>
              </a>
              <a className={styles.aColor} href="/feature">
                <Box className={styles.popNav}>Features</Box>
              </a>
              {/* <a className={styles.aColor} href="/pricing">
                <Box className={styles.popNav}>Pricing</Box>
              </a> */}
              {/* <a className={styles.aColor} href="/blog">
                <Box className={styles.popNav}>Blog</Box>
              </a> */}
              <a className={styles.aColor} href="/about">
                <Box className={styles.popNav}>About</Box>
              </a>
              <a className={styles.aColor} href="/contact">
                <Box className={styles.popNav}>Contact</Box>
              </a>
              {/* <Box style={{ padding: 20, fontSize: 17, fontWeight: 300 }}>
                <span>Connect</span>
              </Box> */}
            </Box>{" "}
          </Popover>
          <nav className={styles.nav}>
            <ul>
              <li
                className={
                  router?.pathname === "/"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/">Discover</Link>
              </li>
              <li
                className={
                  router.pathname === "/feature"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/feature">Features</Link>
              </li>
              {/* <li
                className={
                  router.pathname === "/pricing"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/pricing">Pricing</Link>
              </li> */}
              {/* <li
                className={
                  router.pathname === "/blog"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/blog">Blog</Link>
              </li> */}
              <li
                className={
                  router.pathname === "/about"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={
                  router.pathname === "/contact"
                    ? styles.selected
                    : styles.nonselected
                }
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.user}>
            <div className={styles.network}>ETHEREUM MAINNET</div>
            {/* <Button
              style={{
                color: "white",
                fontSize: 20,
                textTransform: "capitalize",
                marginRight: 10,
                marginLeft: 40,
                fontWeight: "400",
                marginTop: 3,
              }}
              className={styles.webButton}
            >
              Connect
            </Button> */}
            <Button className={styles.mobileButton} onClick={handleClick1}>
              <MenuIcon style={{ fontSize: 40, color: "white" }} />
            </Button>
            <a href="https://twitter.com/StarLedgerNFT" target="_blank">
              <img
                src="/images/icons/twitter_icon.svg"
                alt="next"
                className={styles.socialImage}
                height="32"
              />
            </a>
            <a href="https://discord.gg/starledger" target="_blank">
              <img
                src="/images/icons/discord_icon.svg"
                alt="next"
                className={styles.socialImage}
                height="32"
              />
            </a>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
