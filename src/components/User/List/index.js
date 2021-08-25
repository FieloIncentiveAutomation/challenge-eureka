//
//  Components
//
import { useRouter } from 'next/router';
import { Button, makeStyles, Typography, Avatar } from '@material-ui/core';
import clsx from 'clsx';

const UserList = ({ users }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.userList}>
      <div className={classes.title}>
        <div className={classes.position}>
          <Typography variant="body2" className={classes.text}>
            Pos.
          </Typography>
        </div>
        <div className={classes.name}>
          <Typography variant="body2" className={classes.text}>
            Member
          </Typography>
        </div>
        <div className={clsx(classes.points, 'pointsTitle')}>
          <Typography variant="body2" className={classes.text}>
            Points
          </Typography>
        </div>
      </div>
      {users && (
        <ul className={classes.list}>
          {users.map((user, index) => (
            <li key={user.id}>
              <Button
                className={classes.button}
                onClick={() => router.push(`/user/${user.id}`)}
              >
                <span className={classes.position}>
                  <Typography variant="body2" className={classes.resultText}>
                    {index + 1}
                  </Typography>
                </span>
                <span className={classes.name}>
                  <Avatar
                    alt={user.name}
                    src={user.image}
                    width="30"
                    height="30"
                    className={classes.image}
                  />
                  <Typography variant="body2" className={classes.resultText}>
                    {user.name}
                  </Typography>
                </span>
                <span className={classes.points}>
                  <Typography variant="body2" className={classes.resultText}>
                    {user.points}
                  </Typography>
                </span>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  userList: {
    background: '#fff',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflowY: 'auto',
    maxHeight: 420,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 210,
    },
    '&::-webkit-scrollbar': {
      width: 12,
    },
    '&::-webkit-scrollbar-track': {
      background: '#ffffff',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(215,219,231,1)',
      borderRadius: 2,
      borderLeft: '8px solid #ffffff',
    },
  },
  button: {
    textTransform: 'initial',
    width: '100%',
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      width: '100%',
      alignItems: 'center',
    },
  },
  position: {
    textAlign: 'center',
    width: 30,
  },
  text: {
    fontSize: 13,
    fontWeight: 700,
    color: '#8A94A6',
    fontFamily: '"Noto Sans", sans-serif',
    padding: theme.spacing(1, 0),
  },
  resultText: {
    fontSize: 13,
    fontWeight: 700,
    color: '#16325C',
    fontFamily: '"Noto Sans", sans-serif',
  },
  name: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      margin: theme.spacing(0, 0, 0, 1),
    },
  },
  points: {
    textAlign: 'center',
    width: 50,
    '&.pointsTitle': {
      width: 80,
    },
  },
  image: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    borderRadius: '50%',
  },
}));
