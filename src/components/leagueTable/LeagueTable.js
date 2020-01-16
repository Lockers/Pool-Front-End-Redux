import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../actions/Actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import uuid from 'uuid'


//Import Column Data to set up table

const columns = [
    { id: 'leaguePosition', label: 'Pos', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'played', label: 'P', minWidth: 50 },
    { id: 'won', label: 'W', minWidth: 50, align: 'right' },
    { id: 'lost', label: 'L', minWidth: 50, align: 'right' },
    { id: 'daysLeft', label: 'Days Left', minWidth: 50, align: 'right' },
];

function createData(leaguePosition, name, played, won, lost, challengable, daysLeft) {
    return { leaguePosition, name, played, won, lost, challengable, daysLeft };
}

export const LeagueTable = () => {

    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPlayers())
    }, [dispatch])
    
    const rows = []
    players.map(player => {
        if (player.results.length > 0) {
            const hi = new Date(Date.parse(player.results.slice(-1)[0].date)).toString();
            const lol = Date.parse(hi)
            const newDate = Date.now();

            const daysLeft = newDate - lol
            const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
            const days = Math.round(sum)
            return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.challengable, days))

        }
        const hi = new Date(Date.parse(player.createdAt.slice(-1)[0].date)).toString();
        const lol = Date.parse(hi)
        const newDate = Date.now();

        const daysLeft = newDate - lol
        const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
        let days = Math.round(sum)
        if (isNaN(days)) {
            days = 0;
        }
       
        return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.challengable, days))

    })

    return (
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell
                            key={uuid()}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={uuid(5)} style={row.challengable ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'orange' }}>
                            {columns.map((column, index) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={uuid()} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}