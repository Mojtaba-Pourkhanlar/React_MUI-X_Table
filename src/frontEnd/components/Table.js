import { mockDataContacts } from "../data";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export const Table = () => {

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "registrarID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip",
      flex: 1,
    },
  ];

  return (
    <>
      <Box
        m="20px 50px"
        height="95vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            color: "#fff",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #000",
          },
          "& .name-column--cell": {
            color: "#9D8D00",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#20295B",
            color: "#fff",
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#20295B",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"#9D9D9D"} !important`,
          },
        }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
};
