import { Container } from "@mui/material";
import ComparableTradeVolume from "../components/ComparableTradeVolume";
import ProductAnalysisTable from "../components/ProductAnalysisTable";
import ProductDetailsAnalysisSection from "../components/ProductDetailsAnalysisSection";

const ProductDetails = () => {
  return (
    <Container maxWidth="xl">
      <ProductDetailsAnalysisSection />
      <ProductAnalysisTable />
      <ComparableTradeVolume />
    </Container>
  );
};

export default ProductDetails;
