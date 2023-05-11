import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserList({ list }) {
  return (
    <TableContainer component={Paper} style={{ margin: "0 10rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Wallet Address</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Balance
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, indx) => (
            <TableRow key={indx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
