//
//  Components
//
import { makeStyles, Typography } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import clsx from 'clsx';

const UserFeed = ({ profileInfo }) => {
  const classes = useStyles();
  return (
    <div className={classes.userFeed}>
      <div className={classes.title}>
        <Typography variant="body2" className="sectionTitle">
          Activity Feed
        </Typography>
        <Typography variant="body2" className="showFilters">
          Show Filters
        </Typography>
      </div>
      <div className={classes.list}>
        {profileInfo &&
        profileInfo.userFeed &&
        profileInfo.userFeed.length >= 1 ? (
          <ul>
            {profileInfo.userFeed.map((feed) => (
              <li key={feed.id}>
                <div className="iconSep">
                  {feed.icon === 'received' && (
                    <RadioButtonCheckedIcon
                      className={clsx(classes.icon, 'received')}
                    />
                  )}
                  {feed.icon === 'incetive' && (
                    <FlagRoundedIcon
                      className={clsx(classes.icon, 'incetive')}
                    />
                  )}
                  {feed.icon === 'module' && (
                    <BookmarkRoundedIcon
                      className={clsx(classes.icon, 'module')}
                    />
                  )}
                  {feed.icon === 'redeemed' && (
                    <HttpsRoundedIcon
                      className={clsx(classes.icon, 'redeemed')}
                    />
                  )}
                </div>
                <div className="textSep">
                  <Typography variant="body2" className="date">
                    {feed.date}
                  </Typography>
                  <Typography variant="body2" className="description">
                    {feed.description}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>Erro</div>
        )}
      </div>
    </div>
  );
};

export default UserFeed;

//
//  Styles
//
const useStyles = makeStyles((theme) => ({
  userFeed: {
    padding: 0,
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0, 0, 3, 0),
    '& .sectionTitle': {
      fontSize: 16,
      lineHeight: '21px',
      fontWeight: 700,
      color: '#16325C',
      fontFamily: '"Noto Sans", sans-serif',
      margin: theme.spacing(0, 0, 0.5, 0),
    },
    '& .showFilters': {
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 700,
      color: '#8A94A6',
      fontFamily: '"Noto Sans", sans-serif',
    },
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflowY: 'auto',
    maxHeight: 380,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'inherit',
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
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& li': {
        display: 'flex',
        gap: theme.spacing(1),
        padding: theme.spacing(2.5, 0),
        borderBottom: '1px solid #D7DBE7',
        '&:last-child': {
          borderBottom: 'none',
        },
        '& .iconSep': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .date': {
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 700,
          color: '#8A94A6',
          fontFamily: '"Noto Sans", sans-serif',
          marging: theme.spacing(0, 0, 0.5, 0),
        },
        '& .description': {
          fontSize: 13,
          lineHeight: '16px',
          fontWeight: 400,
          color: '#16325C',
          fontFamily: '"Noto Sans", sans-serif',
          margin: theme.spacing(0, 0, 0.5, 0),
        },
      },
    },
  },
  icon: {
    '&.received': {
      color: '#1C8EFF',
    },
    '&.incetive': {
      color: '#4BCA8D',
    },
    '&.module': {
      color: '#4BCA8D',
    },
    '&.redeemed': {
      color: '#F7A452',
    },
  },
}));
