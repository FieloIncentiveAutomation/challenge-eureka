//
//  Components
//
import { Container, Grid } from '@material-ui/core';
import PageWrap from '../components/PageWrap';
import Header from '../components/Header';
import Content from '../components/Content';
import WhiteBox from '../components/WhiteBox';
import ContentBox from '../components/ContentBox';
import UserList from '../components/User/List';
import Api from '../services/Api';
import { getUserListSelector } from '../selectors/User/userSelector';

const Home = ({ users, globalProps }) => {
  return (
    <>
      <PageWrap>
        <Header />
        <Content backgroundImage={globalProps.background}>
          <Container>
            <ContentBox>
              <WhiteBox>
                <UserList users={users} />
              </WhiteBox>
            </ContentBox>
          </Container>
        </Content>
      </PageWrap>
    </>
  );
};

Home.getInitialProps = async ({ isServer }) => {
  try {
    // Auth
    const reqAuth = await Api.getAuth();
    const token = reqAuth.data.token;

    // Get Users
    const response = await Api.getUsers(token);
    const data = response.data ? response.data : [];
    const users = getUserListSelector(data);

    return { isServer, users };
  } catch (error) {
    console.error(`Error: ${error}`);
  }

  return { isServer };
};

export default Home;
