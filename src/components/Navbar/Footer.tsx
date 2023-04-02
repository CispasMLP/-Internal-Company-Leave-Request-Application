import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#4085f5",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" >
          <Grid item xs={12}>
            <Typography color="black" >
          <h4>INTERNAL COMPANY LEAVE REAQUEST APPLICATION</h4>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="Primary" variant="subtitle1">
              {`${new Date().getFullYear()} | LIN | DHD | MoH`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;