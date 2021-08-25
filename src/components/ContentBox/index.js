//
//  Components
//
import { makeStyles } from '@material-ui/core';

const ContentBox = ({ children, backgroundImage }) => {
  const classes = useStyles({ image: backgroundImage });
  return <div className={classes.contentBox}>{children}</div>;
};

export default ContentBox;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  contentBox: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    gap: theme.spacing(2),
    '& > div': {
      width: 'calc(100% / 3)',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
}));
