//
//  Components
//
import { makeStyles } from '@material-ui/core';

const WhiteBox = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.whiteBox}>{children}</div>;
};

export default WhiteBox;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  whiteBox: {
    background: '#ffffff',
    padding: theme.spacing(1),
    borderRadius: 5,
  },
}));
