import { Box, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

interface TitleProps {
  align?: "left" | "center" | "right" | "justify";
}

const Title: FunctionComponent<TitleProps> = (props) => (
  <Box pb={1}>
    <Typography
      variant="h6"
      component="h2"
      align={props.align ? props.align : "left"}
    >
      {props.children}
    </Typography>
  </Box>
);

export default Title;
