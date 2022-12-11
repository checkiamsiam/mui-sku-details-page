import { Stack, Box, Card } from "@mui/material";
import React from "react";
import BuyBoxPriceStatus from "./BuyBoxPriceStatus";

const ChartAndAnalysis = () => {
  // Chart Data

  return (
    <section style={{ margin: "30px 0" }}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={{xs: 4, md:2, lg: 4}}>
        {/* Start::BuyBox Price Status Chart */}
        <Box sx={{ width: { xs: "100%", lg: "70%" } }}>
          <BuyBoxPriceStatus />
        </Box>
        {/* End::BuyBox Price Status Chart */}

        {/* Start::SKU Analysis & Statistics */}
        <Box sx={{ width: { xs: "100%", lg: "30%" } }}>
          <Card
            sx={{ borderRadius: "10px", boxShadow: 3, padding: "1rem .75rem" }}
          >
            <h2
              style={{
                fontSize: "12px",
                color: "#7A797D",
                textAlign: "center",
              }}
            >
              SKU Analysis & Statistics
            </h2>
          </Card>
        </Box>
        {/* End::SKU Analysis & Statistics */}
      </Stack>
    </section>
  );
};

export default ChartAndAnalysis;
