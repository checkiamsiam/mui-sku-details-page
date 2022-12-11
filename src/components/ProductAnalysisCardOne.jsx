import React, { useState } from "react";
import { Button, Card, IconButton, LinearProgress, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SkuProduct from "../assets/images/sku-product.png";
import SFlagRing from "../assets/images/flags/french.jpg";

const ProductAnalysisCardOne = () => {
  const [labelTime, setLabelTime] = useState("24H");
  const handleLabelTime = (t) => {
    if (t === "24H") {
      setLabelTime("7D");
    }
    if (t === "7D") {
      setLabelTime("30D");
    }
    if (t === "30D") {
      setLabelTime("24H");
    }
  };
  return (
    <Card sx={{ padding: "1.5rem", width: { lg: "60%" } }}>
      <Stack direction={{ md: "row" }} justifyContent="space-between" spacing={3}>
        <div style={{ width: { xs: "100%", md: "40%" } }}>
          <Stack direction="column" spacing={1} fontSize="12px">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing={2} alignItems="center">
                <img src={SkuProduct} width="80px" height="70px" alt="" />
                <Link href="#" underline="none">
                  N20984440A
                </Link>
              </Stack>
              <Stack direction="row">
                <IconButton>
                  <StarOutlineIcon />
                </IconButton>
                <IconButton>
                  <NotificationsNoneIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                Rank <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>0</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                Rate <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>0</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                SKU Marketplace <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>
                <Link href="/marketplace">
                  <img src={SFlagRing} width="20px" alt="" />
                </Link>
              </span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                No. Of Sellers <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>0</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                Tags <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>Trending SKU</span>
            </Stack>
          </Stack>
        </div>
        <div style={{ width: { xs: "100%", md: "30%" } }}>
          <Stack direction="column" fontSize="12px" justifyContent="center" alignItems="center" spacing={0} color="#7A797D" height="100%">
            <p>3,943 Watchlists</p>
            <p>10 price Alerts</p>
            <p style={{ fontWeight: "bold" }}>Updated: 21 minutes ago</p>
          </Stack>
        </div>
        <div style={{ width: { xs: "100%", md: "40%" } }}>
          <h6 style={{ fontWeight: "bold", color: "#7A797D", textAlign: "center" }}>
            Buybox Sale Price <InfoIcon htmlColor="#999999" fontSize="3px" />
          </h6>
          <Typography fontSize="12px" style={{ textAlign: "center" }}>
            SAR <span style={{ fontWeight: "bold", fontSize: "20px", color: "#7A797D" }}>18,87</span> <span style={{ color: "green" }}>3015%</span>
          </Typography>

          <Stack direction="row" justifyContent="space-between" spacing={2} fontSize="12px" marginTop="10px">
            <Stack width="75%">
              <Stack direction="row" justifyContent="space-between">
                <span>Low</span>
                <span>high</span>
              </Stack>
              <LinearProgress variant="determinate" value={25} sx={{ padding: "1px", borderRadius: "5px", bgcolor: "red", margin: "2px 0px" }} />
              <Stack direction="row" justifyContent="space-between">
                <span>SAR 17,87</span>
                <span>SAR 20,87</span>
              </Stack>
            </Stack>
            <Button onClick={() => handleLabelTime(labelTime)} variant="contained" size="small" sx={{ padding: "0px 30px" }}>
              {labelTime}
            </Button>
          </Stack>
          <Stack fontSize="12px" paddingTop="1rem">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                Estimated SOH <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>0</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ fontWeight: "bold", color: "#7A797D" }}>
                Estimated SU Last 24h <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ color: "#7A797D" }}>0</span>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Card>
  );
};

export default ProductAnalysisCardOne;
