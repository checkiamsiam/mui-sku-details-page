import { Container } from "@mui/material";
import ChartAndAnalysis from "../components/ChartAndAnalysis";
import ComparableTradeVolume from "../components/ComparableTradeVolume";
import ProductAnalysisTable from "../components/ProductAnalysisTable";
import ProductDetailsAnalysisSection from "../components/ProductDetailsAnalysisSection";

const ProductDetails = () => {
  return (
    <Container maxWidth="xl">
      <ProductDetailsAnalysisSection />
      <ChartAndAnalysis />
      <ProductAnalysisTable />
      <ComparableTradeVolume />
    </Container>
  );
};

export default ProductDetails;
