'use client';

import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
} from '@mui/material';

import CustomTablePaginationActions from './CustomTablePaginationActions';
import { rows } from '../utils/sampleRows';

export default function EmployeeTable() {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div className="w-full">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow className="bg-theme-300 text-theme-600">
                            <TableCell className="text-inherit">Employee Name</TableCell>
                            <TableCell className="text-inherit">Email Address (Personal)</TableCell>
                            <TableCell className="text-inherit">Mobile Number</TableCell>
                            <TableCell className="text-inherit">Department</TableCell>
                            <TableCell className="text-inherit">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.fullName}
                                </TableCell>
                                <TableCell>
                                    {row.email}
                                </TableCell>
                                <TableCell>
                                    {row.mobile}
                                </TableCell>
                                <TableCell>
                                    {row.department}
                                </TableCell>
                                <TableCell>
                                    {/** Actions button cell here */}
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={CustomTablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}
