import React, { useState } from 'react';
import PirateCell from './PirateCell';
import { TableContainer, Table, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';

const PirateList = (props) => {
    const { view, remove } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableBody >
                        {props.pirates
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (pirate, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    <PirateCell pirate={pirate} view={view} remove={remove} />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.pirates.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default PirateList;