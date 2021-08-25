import { useEffect, useState } from 'react';

//
//  Components
//
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import ViewDayRoundedIcon from '@material-ui/icons/ViewDayRounded';
import LayersRoundedIcon from '@material-ui/icons/LayersRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const UserProfile = ({ profileInfo }) => {
  const classes = useStyles();
  const steps = [
    { pos: 3, value: 'Bronze' },
    { pos: 2, value: 'Silver' },
    { pos: 1, value: 'Gold' },
    { pos: 0, value: 'Platinum' },
  ].reverse();
  const [activeStep, setActiveStep] = useState(steps.length - 1);

  const getStepPosition = (positionName) =>
    steps
      .filter((step) => step.value === positionName)
      .map((step) => step.pos)[0];

  useEffect(() => {
    setActiveStep(getStepPosition(profileInfo.userInfo.level));
  }, []);

  const nextStep = steps.filter( step => step.pos === activeStep - 1 && activeStep - 1 >= 0 )[0]

  return (
    <div className={classes.userProfile}>
      <div className={classes.userInfo}>
        <Avatar
          alt={profileInfo.userInfo.name}
          src={profileInfo.userInfo.image}
          className="avatar"
        />
        <Typography variant="h1" className="userName">
          {profileInfo.userInfo.name}
        </Typography>
        <Typography variant="body2" className="programName">
          {profileInfo.userInfo.program}
        </Typography>
      </div>
      <div className={classes.scores}>
        <div className="points">
          <div className="number">
            <AllInclusiveOutlinedIcon className="icon blue" />
            <Typography variant="body2" className="value">
              {profileInfo.userScores.points}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Points
          </Typography>
        </div>
        <div className="miles">
          <div className="number">
            <Typography variant="body2" className="value">
              {profileInfo.userScores.miles}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Miles
          </Typography>
        </div>
        <div className="currency">
          <div className="number">
            <AttachMoneyOutlinedIcon className="icon gray" />
            <Typography variant="body2" className="value">
              {profileInfo.userScores.currency}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Currency
          </Typography>
        </div>
      </div>
      <div className={classes.levels}>
        <div className="headLevels">
          <Typography variant="body2" className="value">
            {profileInfo.userInfo.level}
          </Typography>
          <Typography variant="body2" className="nextTier">
            <span className="noStyle">Next Tier</span>{' '}
            <span>
              <span>{nextStep.value}</span> <InfoOutlinedIcon className="iconInfo" />
            </span>
          </Typography>
        </div>
        <div className={classes.stepper}>
          {steps.map((step) => (
            <div className="step" key={step.pos}>
              {step.pos === activeStep ? (
                <RadioButtonCheckedIcon className="iconStepSelected" />
              ) : (
                <RadioButtonUncheckedIcon className="iconStep" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.badges}>
        <ul>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <LayersRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <StarRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <Brightness7RoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <FavoriteRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <EcoRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Avatar
              alt="badgeIcon"
              src={profileInfo.userInfo.image}
              className="avatar"
            />
            <ViewDayRoundedIcon className="badgeIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

//
//  Styles
//
const useStyles = makeStyles( theme => ({
  userProfile: {
    padding: theme.spacing(0.5),
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    '& .avatar': {
      width: 60,
      height: 60,
    },
    '& .userName': {
      fontSize: 16,
      lineHeight: '22px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#16325C',
      margin: 0,
    },
    '& .programName': {
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#8A94A6',
      margin: 0,
    },
  },
  scores: {
    margin: theme.spacing(3, 0, 0, 0),
    padding: theme.spacing(4, 0),
    borderTop: '1px solid #D7DBE7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& .number': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .icon': {
        fontSize: 18,
        margin: theme.spacing(0, 1, 0, 0),
        '&.blue': {
          color: '#1C8EFF',
        },
        '&.gray': {
          color: '#8A94A6',
        },
      },
      '& .value': {
        fontSize: 16,
        lineHeight: '22px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#16325C',
        margin: 0,
      },
    },
    '& .text': {
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#8A94A6',
      margin: 0,
      textAlign: 'center',
    },
  },
  levels: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 0),
    borderTop: '1px solid #D7DBE7',
    '& .headLevels': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& .value': {
        fontSize: 16,
        lineHeight: '22px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#16325C',
        margin: 0,
      },
      '& .nextTier': {
        fontSize: 12,
        lineHeight: '16px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#B5BAC8',
        margin: 0,
        display: 'flex',
        '& > span:not(.noStyle)': {
          color: '#16325C',
          display: 'flex',
          margin: theme.spacing(0, 0, 0, 1),
        },
        '& .iconInfo': {
          fontSize: 14,
          width: 14,
          height: 14,
          margin: theme.spacing(0, 0, 0, 1),
        },
      },
    },
  },
  stepper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    margin: theme.spacing(1, 0, 0, 0),
    '&::before': {
      content: "''",
      background: '#ccc',
      width: '100%',
      height: 2,
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translate(0, -50%)',
    },
    '& .step': {
      background: '#fff',
      position: 'relative',
      zIndex: 1,
      width: 20,
      height: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .iconStep': {
        fontSize: 12,
        width: 12,
        height: 12,
        color: '#B5BAC8',
      },
      '& .iconStepSelected': {
        fontSize: 12,
        width: 12,
        height: 12,
        color: '#1C8EFF',
      },
    },
  },
  badges: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 0, 1, 0),
    borderTop: '1px solid #D7DBE7',
    '& ul': {
      margin: 0,
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(1),
      '& li': {
        position: 'relative',
        width: 40,
        height: 40,
        '& .avatar': {
          display: 'block',
          width: 40,
          height: 40,
        },
        '& .badgeIcon': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ffffff',
          fontSize: 30,
        },
      },
    },
  },
}));

export default UserProfile;
