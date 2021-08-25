//
//  Components
//
import { makeStyles } from '@material-ui/core';

const PageWrap = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.pageWrap}>{children}</div>;
};

export default PageWrap;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '62px 0 0 0',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
}));
