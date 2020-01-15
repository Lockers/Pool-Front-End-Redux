import React from 'react';
import { Route } from 'react-router-dom';
import { LeagueTable } from '../components/leagueTable/LeagueTable';
import { Players } from '../components/players/Players';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export const SimpleContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Route exact path="/leaguetable" component={LeagueTable} />
                <Route exact path="/players" component={Players} />
            </Container>
        </React.Fragment>
    );
}