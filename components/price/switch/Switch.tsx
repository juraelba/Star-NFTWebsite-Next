import React from "react";
import Box from "@mui/material/Box";
import clsx from "clsx";
import styles from "./Switch.module.css";
import { Typography } from "@mui/material";

interface SwichProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
  on?: string;
  off?: string;
}

const Switch: React.FC<SwichProps> = ({
  checked,
  onChange,
  className,
  on,
  off,
}) => {
  return (
    <Box className={clsx(styles.container, className)}>
      {on && (
        <Typography
          className={clsx(styles.value, { [styles.selectedValue]: checked })}
        >
          {on}
        </Typography>
      )}
      <Box
        className={clsx(styles.switch, { [styles.on]: checked })}
        onClick={onChange}
      />
      {off && (
        <Typography
          className={clsx(styles.value, { [styles.selectedValue]: !checked })}
        >
          {off}
        </Typography>
      )}
    </Box>
  );
};

export default Switch;
