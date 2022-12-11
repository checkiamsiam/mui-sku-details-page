import { Button, Card, Container, Grid, IconButton, Link, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SkuProduct from "../assets/images/sku-product.png";
import SFlagRing from "../assets/images/flags/french.jpg";
import React from "react";

const ProductDetails = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction={{ xl: "column", sm: "row" }} spacing={2}>
        <Card sx={{ padding: "1rem", width: "60%" }}>
          <Stack direction="row" spacing={3}>
            <Stack width="40%">
              <Stack direction="column" spacing={1} fontSize="12px">
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                  <Stack direction="row" spacing={2} alignItems="center">
                    <img src={SkuProduct} width="80px" height="70px" alt="" />
                    <Link href="#" underline="none">
                      N20984440A
                    </Link>
                  </Stack>
                  <IconButton>
                    <StarOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <NotificationsNoneIcon />
                  </IconButton>
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
            </Stack>
            <Stack direction="column" fontSize="12px" justifyContent="center" alignItems="center" spacing={0} width="30%" color="#7A797D">
              <p>3,943 Watchlists</p>
              <p>10 price Alerts</p>
              <p style={{ fontWeight: "bold" }}>Updated: 21 minutes ago</p>
            </Stack>
            <Stack width="40%" direction="column">
              <Stack>
                <h6 style={{ fontWeight: "bold", color: "#7A797D" }}>
                  Buybox Sale Price <InfoIcon htmlColor="#999999" fontSize="3px" />
                </h6>
                <p>SAR <span>18,87</span> <span>3015%</span></p>
              </Stack>
            </Stack>
          </Stack>
        </Card>
        <Card>sdfs</Card>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
