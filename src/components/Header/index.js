import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import rollToTop from "../../assets/icons/design-elements/RollToTop.svg";

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        className="fixed bottom-4 right-4 z-10"
      >
        {children}
      </Box>
    </Fade>
  );
};

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const StyledDrawer = styled(Box)`
  ${tw`p-20px overflow-hidden`}

  .nav-links {
    ${tw`flex flex-col justify-between items-start gap-y-20px pl-[5px] mt-20px tracking-widest`}
  }
`;

const StyledLink = styled(Link)`
  ${tw`text-tertiary-m text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out hover:text-primary-l`}

  &.active {
    ${tw`text-primary-l font-semibold`}
  }
`;

const StyledHeader = styled(Box)`
  ${tw`flex h-0`}
`;

const StyledAppBar = styled(AppBar)`
  ${tw`flex justify-between items-center bg-[rgba(255, 255, 255, 0.95)] py-10px px-0 mt-0 shadow-[10px 13px 80px 14px rgba(242, 244, 255, 0.95)] transition-all duration-300 ease-in-out laptop:py-10px laptop:px-40px`}

  &.triggered {
    ${tw`bg-transparent mt-30px shadow-none`}
  }
`;

const StyledToolbar = styled(Toolbar)`
  ${tw`w-full max-w-main flex justify-between`}

  .box-1 {
    ${tw`hidden cursor-pointer laptop:flex laptop:justify-between laptop:gap-x-40px`}

    .box-1__1 {
      ${tw`hidden laptop:block tablet:hidden`}
    }
  }

  .nav-links {
    ${tw`flex justify-between items-center gap-x-40px laptop:hidden`}
  }
`;

const StyledFab = styled(Fab)`
  ${tw`w-9 h-9 bg-primary rounded-[5px] flex justify-center items-center fixed right-50px bottom-100px transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[-2px_6px_16px_-1px_#e6e9fd]`}
`;

const drawerWidth = 350;

const Header = (props) => {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <StyledDrawer onClick={handleDrawerToggle}>
      <img className="main-logo" src={mainLogo} alt="Main logo" />
      <Box className="nav-links">
        <StyledLink className="nav-item active" href="/" underline="none">
          Home +
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          About
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Service
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Gallery
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Blog
        </StyledLink>
      </Box>
    </StyledDrawer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledHeader>
      <CssBaseline />
      <ElevationScroll {...props}>
        <StyledAppBar component="nav" className={!trigger && "triggered"}>
          <StyledToolbar disableGutters>
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <Box className="box-1">
              <img
                className="hamburger"
                src={hamburgerMenu}
                alt="Hamburger"
                onClick={handleDrawerToggle}
              />
              <Box className="box-1__1">
                <PrimaryButton>Contact</PrimaryButton>
              </Box>
            </Box>
            <Box className="nav-links">
              <StyledLink className="nav-item active" href="/" underline="none">
                Home +
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                About
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Service
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Gallery
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Blog
              </StyledLink>
              <PrimaryButton>Contact</PrimaryButton>
            </Box>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <StyledFab size="small" aria-label="scroll back to top">
          <img src={rollToTop} alt="Roll to top button" />
        </StyledFab>
      </ScrollTop>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </StyledHeader>
  );
};

export default Header;
