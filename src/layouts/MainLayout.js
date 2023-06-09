import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function MainLayout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box position="sticky" top={0} zIndex={1}>
        <MainHeader />
      </Box>

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
