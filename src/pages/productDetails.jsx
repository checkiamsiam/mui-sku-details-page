import { Button, Card, Container, Grid, IconButton, LinearProgress, Link, Tooltip, Typography } from "@mui/material";
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
      <Stack direction={{ sm: "column", lg: "row" }} spacing={2}>
        
        <Card sx={{ padding: "1.5rem", width: { sm: "100%", lg: "60%" } }}>
          <Stack direction="row" spacing={3}>
            <div style={{ width: "40%" }}>
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
            </div>
            <div style={{ width: "30%" }}>
              <Stack direction="column" fontSize="12px" justifyContent="center" alignItems="center" spacing={0} color="#7A797D" height="100%">
                <p>3,943 Watchlists</p>
                <p>10 price Alerts</p>
                <p style={{ fontWeight: "bold" }}>Updated: 21 minutes ago</p>
              </Stack>
            </div>
            <div style={{ width: "40%" }}>
              <h6 style={{ fontWeight: "bold", color: "#7A797D", textAlign: "center" }}>
                Buybox Sale Price <InfoIcon htmlColor="#999999" fontSize="3px" />
              </h6>
              <Typography fontSize="12px" style={{ textAlign: "center" }}>
                SAR <span style={{ fontWeight: "bold", fontSize: "20px", color: "#7A797D" }}>18,87</span>{" "}
                <span style={{ color: "green" }}>3015%</span>
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
                <Button variant="contained" size="small" sx={{ padding: "0px 30px" }}>
                  7D
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
        {/* <p style={{ fontSize: "12px", color: "#7A797D" }}>
            Designed for users to instantly see the changes that occur on the SKU and predicts what will come next.
          </p> */}

        <Card sx={{ padding: "1.5rem", width: { sm: "100%", lg: "40%" } }}>
          <Stack direction="column" spacing={1} fontSize="12px">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Title: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>Portable Diaper Organizer</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Category: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>
                <Link href="#" underline="none">
                  Baby Products
                </Link>
              </span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Type: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>Diapering</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Sub-Type: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>Diaper Stackers & Organisers</span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Brand: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>
                {" "}
                <Link href="#" underline="none">
                  Beauenty
                </Link>
              </span>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{ width: "50%", fontWeight: "bold", color: "#7A797D" }}>
                Sku Description: <InfoIcon htmlColor="#999999" fontSize="3px" />
              </span>
              <span style={{ width: "50%", color: "#7A797D" }}>
                The diaper has a strong t divider that is securely attached to the sides and the bottom, and more.
              </span>
            </Stack>
          </Stack>
        </Card>
        {/* <p style={{ fontSize: "12px", color: "#7A797D" }}>Designed for users to instantly see the SKU Description.</p> */}
      </Stack>
    </Container>
  );
};

export default ProductDetails;
