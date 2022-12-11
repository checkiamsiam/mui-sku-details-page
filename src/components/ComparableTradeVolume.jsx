import { Box, Card, Container, Link, Stack } from '@mui/material';
import React from 'react';

const ComparableTradeVolume = () => {
    return (
        <Container maxWidth="xl" sx={{my: "30px"}}>
            <Stack direction="row" spacing={3}>
                {/* Left Card */}
                <Card  sx={{ boxShadow: 3, padding: ".75rem", borderRadius: "10px", width: "50%"}}>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                        <h2 style={{fontSize: "12px", color: "#7A797D"}}>Comparable Trade Volume</h2>
                        <Link  href="#" underline="none" sx={{fontSize: "12px", fontWeight: "600"}}>See All SKUs</Link>
                    </Stack>
                </Card>

                {/* Right Card */}
                <Card  sx={{ boxShadow: 3, padding: ".75rem", borderRadius: "10px", width: "50%"}}>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                        <h2 style={{fontSize: "12px", color: "#7A797D"}}>Comparable Trade Volume</h2>
                        <Link  href="#" underline="none" sx={{fontSize: "12px", fontWeight: "600"}}>See All SKUs</Link>
                    </Stack>
                </Card>
            </Stack>
        </Container>
    );
};

export default ComparableTradeVolume;