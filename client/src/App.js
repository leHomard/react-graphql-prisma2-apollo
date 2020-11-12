import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SideBar } from "./components/index";
import styled from 'styled-components';

import { Artistes, Albums, Songs } from './pages/index';

const Main = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
position: relative;
width: 85%;
float: right;
padding-left: 2rem;
padding-right: 2rem;
`;

function App() {
  return (
    <Router>
      <Main>
        <SideBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Artistes} />
            <Route path="/artistes" component={Artistes} />
            <Route path="/albums" component={Albums} />
            <Route path="/songs" component={Songs} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
