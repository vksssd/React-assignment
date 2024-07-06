import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Post } from "../models/Post";

interface DataTableProps {
    posts: Post[];
}

const columns: GridColDef[] = [
    // { field: 'userId', headerName: 'User ID', width: 90}
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'body', headerName: 'Body', width: 150 },
];

const DataTable: React.FC<DataTableProps> = ({ posts }) => {
    return (
        <div style= {{ height: 400, width: '100%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                // pageSize={5}
                // rowsPerPageOptions={[5]}
                checkboxSelection
                // disableSelectionOnClick
                />
            </div>
    )
}

export default DataTable;