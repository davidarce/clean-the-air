import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const PrimaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[600],
    },
  },
}))(Button);
