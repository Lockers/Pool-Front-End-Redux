import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChallenges, getPlayers, getResults } from './store/actions/Actions';
import { LeagueTable } from './components/leagueTable/LeagueTable';
import PrivateRoute from './auth/PrivateRoute';
import { AdminContainer } from './components/admin/AdminContainer';
import { Players } from './components/players/Players';
import { ViewResults } from './components/results/ViewResults';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ViewChallenges } from './components/challenges/ViewChallenges';
import { DashBoard } from './components/dashboard/DashBoard';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './components/display/BottomNav';
import Drawer from './display/Drawer';
import { Rules } from './components/rules/Rules';

function App() {
  const useStyles = makeStyles({
    root: {
      background: '#e0ebeb',
      color: 'blue'
    },
    label: {
      textTransform: 'capitalize',
    },
  });

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayers())
    dispatch(getResults())
    dispatch(getChallenges())
  }, [dispatch])

  const classes = useStyles();

  
  return (
    <div>


      return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" classes={{
          root: classes.root
        }}>
          <Drawer />
          <Switch>
            <Route exact path="/leaguetable" component={LeagueTable} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/results" component={ViewResults} />
            <Route exact path="/challenges" component={ViewChallenges} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/rules" component={Rules} />
            <PrivateRoute path='/admin' component={AdminContainer} />
            <Redirect to='/leaguetable'/>
          </Switch>
          <BottomNav />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
