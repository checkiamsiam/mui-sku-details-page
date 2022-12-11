import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  { name: "store name", offerPrice: 0, soh: 1, rank: 0, share: "30%" },
  { name: "store name", offerPrice: 0, soh: 1, rank: 0, share: "30%" },
  { name: "store name", offerPrice: 0, soh: 1, rank: 0, share: "30%" },
  { name: "store name", offerPrice: 0, soh: 1, rank: 0, share: "30%" },
  { name: "store name", offerPrice: 0, soh: 1, rank: 0, share: "30%" },
];

const ProductAnalysisTable = () => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#F8F9FA", margin: "10px 0px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Store Name
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Offer Price
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              SOH
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Value (24H)
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Fulfillment Type
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Offer Rank
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Store Rate
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Store Share
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="center">{row?.offerPrice}</TableCell>
              <TableCell align="center">{row?.soh}</TableCell>
              <TableCell align="center">
                <br />
              </TableCell>
              <TableCell align="center">
                <br />
              </TableCell>
              <TableCell align="center">{row?.rank}</TableCell>
              <TableCell align="center">
                <br />
              </TableCell>
              <TableCell align="center">{row?.share}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
            <TableCell align="center">
              <br />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductAnalysisTable;
