import React from 'react';
import { Route } from 'react-router-dom';
import { LeagueTable } from '../components/leagueTable/LeagueTable';
import { Players } from '../components/players/Players';
import { ViewResults } from '../components/results/ViewResults';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ViewChallenges } from '../components/challenges/ViewChallenges';

export const SimpleContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Route exact path="/leaguetable" component={LeagueTable} />
                <Route exact path="/players" component={Players} />
                <Route exact path="/results" component={ViewResults} />
                <Route exact path="/challenges" component={ViewChallenges} />
            </Container>
        </React.Fragment>
    );
}