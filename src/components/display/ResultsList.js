import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    icon: {
        verticalAlign: 'center',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
}));

export default function ResultsList(props) {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.root}>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{props.result.challenger}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.Heading}>{props.result.challengerScore}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.Heading}>{props.result.challengedScore}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.Heading}>{props.result.challenged}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        {props.result.venue}
                        <div className={classes.column} />
                        {props.result.ruleset}
                        <div className={classes.column}>
                        </div>
                        <div className={clsx(classes.column, classes.helper)}>
                            £{props.result.pot}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Container>

    );
}