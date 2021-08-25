//
//  Components
//
import { makeStyles } from '@material-ui/core';

const Content = ({ children, backgroundImage }) => {
  const classes = useStyles({ image: backgroundImage });
  return <div className={classes.content}>{children}</div>;
};

export default Content;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  content: {
    backgroundImage: (props) => props.image && `url(${props.image})`,
    backgroundColor: '#cccccc',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
  },
}));
