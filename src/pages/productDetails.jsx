import { Container } from "@mui/material";
import ProductAnalysisTable from "../components/ProductAnalysisTable";
import ProductDetailsAnalysisSection from "../components/ProductDetailsAnalysisSection";

const ProductDetails = () => {
  return (
    <Container maxWidth="xl">
      <ProductDetailsAnalysisSection />
      <ProductAnalysisTable />
    </Container>
  );
};

export default ProductDetails;
