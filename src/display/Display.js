import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Players } from '../components/players/Players';
export const SimpleContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Players />
            </Container>
        </React.Fragment>
    );
}