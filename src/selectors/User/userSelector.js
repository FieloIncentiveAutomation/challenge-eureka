import * as R from 'ramda';
import { sortByFieldName, addThousandsDots, generateIcon } from '../../services/Utils';
import moment from 'moment';

//
//  Get User List Selector
//
export function getUserListSelector( state ) {
  const users = R.pathOr([], [],  state);
  if ( users.length != 0 ) {
    const modifiedUsers = users.map( user => {
      return {
        id: R.pathOr('', ['id'], user),
        image: R.pathOr('', ['image'], user),
        name: R.pathOr('', ['name'], user),
        points: R.pathOr('', ['balance','points'], user),
      };
    });
    const ordenedUsers = modifiedUsers.sort(sortByFieldName('points'));
    return ordenedUsers.reverse();
  }
  return [];
}

//
//  Get User Info Selector
//
export function getUserSelector( state ) {
  const userData = R.pathOr([], [],  state);
  const activityFeed = R.pathOr([], ['activities'], userData);
  const levelData = R.pathOr([], ['level'], userData);
  const levelValue = levelData.sort(sortByFieldName('order'))[0].name;

  const user = {
    userInfo: {
      id: R.pathOr('', ['id'], userData),
      image: R.pathOr('', ['image'], userData),
      name: R.pathOr('', ['name'], userData),
      program: R.pathOr('', ['program','name'], userData),
      level: levelValue,
    },
    userScores: {
      points: R.pathOr('', ['balance','points'], userData),
      miles: R.pathOr('', ['balance','miles'], userData),
      currency: addThousandsDots(R.pathOr('', ['balance','currency'], userData)),
    },
    userFeed: activityFeed.map( activity => {
      return {
        id: activity.id,
        date: moment(activity.date, "YYYY-MM-DD").fromNow(),
        description: activity.description,
        icon: generateIcon(activity.description),
      }
    })
  }
  
  return user;
}
