//
//  Components
//
import { Container, Grid } from '@material-ui/core';
import PageWrap from '../../components/PageWrap';
import Header from '../../components/Header';
import Content from '../../components/Content';
import ContentBox from '../../components/ContentBox';
import WhiteBox from '../../components/WhiteBox';
import UserList from '../../components/User/List';
import UserProfile from '../../components/User/Profile';
import UserFeed from '../../components/User/Feed';
import Api from '../../services/Api';
import {
  getUserListSelector,
  getUserSelector,
} from '../../selectors/User/userSelector';

const User = ({ users, user, globalProps }) => {
  return (
    <>
      <PageWrap>
        <Header />
        <Content backgroundImage={globalProps.background}>
          <Container>
            <ContentBox>
              <WhiteBox>{users && <UserList users={users} />}</WhiteBox>
              <WhiteBox>{user && <UserProfile profileInfo={user} />}</WhiteBox>
              <WhiteBox>{user && <UserFeed profileInfo={user} />}</WhiteBox>
            </ContentBox>
          </Container>
        </Content>
      </PageWrap>
    </>
  );
};

User.getInitialProps = async ({ query }) => {
  const { userId } = query;

  try {
    // Auth
    const reqAuth = await Api.getAuth();
    const token = reqAuth.data.token;

    // get Users
    const responseUsers = await Api.getUsers(token);
    const usersData = responseUsers.data ? responseUsers.data : [];
    const users = getUserListSelector(usersData);

    // get Selected User Info
    const responseUser = await Api.getUserId(token, userId);
    const userData = responseUser.data ? responseUser.data : {};

    // get User Activities
    const responseUserActivities = await Api.getUserActivities(token, userId);
    const userActivitiesData = responseUserActivities.data
      ? responseUserActivities.data
      : [];

    // get User Programs
    const responseUserPrograms = await Api.getUserPrograms(
      token,
      userData.programId
    );
    const userProgramsData = responseUserPrograms.data
      ? responseUserPrograms.data
      : [];

    // get User Levels
    const responseUserLevel = await Api.getUserLevel(token, userData.programId);
    const userLevelData = responseUserLevel.data ? responseUserLevel.data : [];

    //  User Object
    const userState = {
      ...userData,
      activities: userActivitiesData,
      program: userProgramsData,
      level: userLevelData,
    };
    const user = getUserSelector(userState);

    return { users, user };
  } catch (e) {
    console.error(e);
  }

  return;
};

export default User;
