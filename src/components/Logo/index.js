//
//  Components
//
import Link from 'next/link';
import { makeStyles, Typography } from '@material-ui/core';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';

const Logo = () => {
  const classes = useStyles();
  return (
    <Link href="/">
      <a className={classes.logo}>
        <EcoOutlinedIcon className={classes.icon} />
        <Typography variant="body1" className={classes.text}>
          NewRoots
        </Typography>
      </a>
    </Link>
  );
};

export default Logo;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  icon: {
    background: '#1bc47d',
    color: '#ffffff',
    borderRadius: '50%',
    width: 30,
    height: 30,
    fontSize: 30,
    padding: '4px',
  },
  text: {
    fontSize: 20,
    fontWeight: 900,
    color: '#2d2d2d',
    letterSpacing: '-1px',
    margin: theme.spacing(0, 0, 0, 1),
  },
}));
