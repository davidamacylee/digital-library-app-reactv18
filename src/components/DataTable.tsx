import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", flex: 2 },
    { field: 'title', headerName: "Title", flex: 1 },
    { field: 'author', headerName: "Author", flex: 1 },
    { field: 'publisher', headerName: "Publisher", flex: 1 },
    { field: 'ISBN', headerName: "ISBN", flex: 1 },
    { field: 'year_printed', headerName: "Year", flex: 1 },
    { field: 'page_length', headerName: "Pages", flex: 1 }
]

function DataTable() {
    let [open, setOpen] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
        console.log(selectionModel)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div>
                        <button
                            className="p-3 bg-yellow-800 text-yellow-400 rounded m-3
                            hover:bg-yellow-600 hover:text-yellow-200"
                            onClick={() => handleOpen()}
                            >
                            Add New Book
                        </button>
                    </div>
                    <Button
                        onClick={handleOpen}
                        className="p-3 bg-yellow-800 text-yellow-400 rounded m-3
                        hover:bg-yellow-600 hover:text-yellow-200"
                        >
                        Update
                    </Button>
                    <Button
                        onClick={deleteData}
                        className="p-3 bg-yellow-800 text-yellow-400 rounded m-3
                        hover:bg-yellow-600 hover:text-yellow-200"
                        >
                        Delete
                    </Button>
                </div>
                <div
                    className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                    style={{ height: 400, width: '100%'}}
                    >
                    <h2 className="p-3 bg-yellow-800 text-yellow-400 my-2 rounded">My Books</h2>
                    <div className="bg-yellow-400">
                        <DataGrid
                            rows={ bookData }
                            columns={ columns }
                            pageSizeOptions={[5, 10, 25]}
                            checkboxSelection={true}
                            onRowSelectionModelChange={ (item:any) => {
                                setSelectionModel(item)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataTable
