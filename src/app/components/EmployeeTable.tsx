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
    IconButton,
} from '@mui/material';
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material';

import ContentContainer from './ContentContainer';
import CustomTablePaginationActions from './CustomTablePaginationActions';
import EditModal from './EditModal';
import { useGetRequest } from '../hooks/useGetRequest';
import { Employee } from '../utils/types';
import { NEXT_PUBLIC_EMPLOYEES_API_URL } from '../utils/env';

export default function EmployeeTable() {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [selectedEmployeeToEdit, setSelectedEmployeeToEdit] = useState<Employee | null>(null);
    const { data, isError, isLoading } = useGetRequest<Employee[]>(NEXT_PUBLIC_EMPLOYEES_API_URL);

    if (isLoading) {
        return (
            <ContentContainer>
                <p>Loading employees...</p>
            </ContentContainer>
        );
    }

    if (isError || data === undefined) {
        return (
            <ContentContainer>
                <p>Failed to load employees. Please refresh and try again.</p>
            </ContentContainer>
        );
    }

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <ContentContainer>
                <TableContainer className="p-6 bg-gray-50">
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
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data
                            ).map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.fullName}
                                    </TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.mobile}</TableCell>
                                    <TableCell>{row.department}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            title={`Edit user ${row.fullName}`}
                                            onClick={() => setSelectedEmployeeToEdit(row)}
                                        >
                                            <CreateIcon />
                                        </IconButton>
                                        <IconButton
                                            title={`Delete user ${row.fullName}`}
                                            onClick={() => console.log('Delete')}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
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
                                    count={data.length}
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
            </ContentContainer>
            <EditModal
                open={!!selectedEmployeeToEdit}
                handleClose={() => setSelectedEmployeeToEdit(null)}
                selectedEmployee={selectedEmployeeToEdit}
            />
        </>
    );
}
