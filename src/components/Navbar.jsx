import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import image from "../images/IMG_4246.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Alex's app
        </Typography>
        <OutdoorGrillIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt='Aleksandra Cislowski'
            src={image}
            onClick={(e) => setOpenMenu(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpenMenu(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt='Aleksandra Cislowski'
            src={image}
          />
          <Typography variant='span'>Alex</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={""}>Profile</MenuItem>
        <MenuItem onClick={""}>My account</MenuItem>
        <MenuItem onClick={""}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
