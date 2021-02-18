import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "white",
      padding: "10em 2em 1em 2em",
      boxSizing: "border-box",
      position: "static",
      bottom: 0,
      left: "auto",
      right: 0,
      color: "black",
      width: "100%",
      zIndex: 1100,
    },
    container: {
      width: "100%",
      gridTemplateColumns: "minmax(auto, 100%)",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    description: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px",
    },
    text: {
      fontWeight: 300,
      fontSize: "13px",
      letterSpacing: "0.5px",
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <div className={classes.description}>
          <Typography className={classes.text}>
            <span role="img" aria-label="flagco">
              Made in 🇨🇴 by
            </span>
            <Link
              href="https://twitter.com/_davidarce"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              <span role="img" aria-label="built site by david arce">
                &nbsp;David Arce 👨🏻‍💻
              </span>
            </Link>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.text}>
            <span>App powered by&nbsp;</span>
            <Link
              href="https://openaq.org/"
              target="_blank"
              rel="noopener"
              underline="always"
              color="inherit"
            >
              OpenAQ API
            </Link>
          </Typography>
          <Typography className={classes.text}>
            <span>Develop on </span>
            <Link
              href="https://github.com/davidarce"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              Github
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
