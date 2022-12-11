import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import ChartAndAnalysis from "../components/ChartAndAnalysis";
import ComparableTradeVolume from "../components/ComparableTradeVolume";
import ProductAnalysisTable from "../components/ProductAnalysisTable";
import ProductDetailsAnalysisSection from "../components/ProductDetailsAnalysisSection";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useEffect, useRef, useState } from "react";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Container maxWidth="xl">
      <IconButton onClick={() => setOpen(true)}>
        <AcUnitIcon></AcUnitIcon>
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Get Alert</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{backgroundColor: "transparent" , color: "black", outline: "1px solid black"}}>Add Alert</Button>
          <Button onClick={()=>setOpen(false)} variant="text" sx={{backgroundColor:"#CACED2", color: "black" }}>Close</Button>
        </DialogActions>
      </Dialog>
      <ProductDetailsAnalysisSection />
      <ChartAndAnalysis />
      <ProductAnalysisTable />
      <ComparableTradeVolume />
    </Container>
  );
};

export default ProductDetails;
