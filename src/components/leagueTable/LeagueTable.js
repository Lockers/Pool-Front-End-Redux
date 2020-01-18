import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import uuid from 'uuid';
import { useGetDateHelper } from '../../helpers/GetDateHelper';

export const LeagueTable = () => {
    const getDateHelper = useGetDateHelper()
 
    return (
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {getDateHelper.columns.map(column => (
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
                {getDateHelper.rows.map(row => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={uuid(5)} style={row.challengable ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'orange' }}>
                            {getDateHelper.columns.map((column, index) => {
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