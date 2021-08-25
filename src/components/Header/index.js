//
//  Components
//
import { Container, Grid, makeStyles } from '@material-ui/core';
import Logo from '../Logo';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container>
        <Grid container>
          <Logo />
        </Grid>
      </Container>
    </div>
  );
};

export default Header;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  header: {
    background: '#fff',
    padding: theme.spacing(2, 0),
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    top: 0,
    left: 0,
  },
}));
