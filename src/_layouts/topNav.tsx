import * as React from "react";
import * as styles from "./styles";
import Logo from "../assets/muziLogo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar/Avatar";
import { navItems } from "./config";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const TopNavigation = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const onClickNavigationButton = (navigation: string, onClick?: () => void) => {
    return () => {
      if (onClick) {
        onClick();
      }
      navigate({ pathname: navigation });
    };
  };

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={styles.textAlign}>
      <Typography variant="h6" sx={styles.marginTitle}>
        MuZi
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ title, navigation, onClick }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton sx={styles.textAlign}>
              <ListItemText primary={title} onClick={onClickNavigationButton(navigation, onClick)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={styles.navOuterContainer}>
      <CssBaseline />
      <AppBar component="nav" sx={styles.appBar} position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.logoContainer}>
            <Avatar src={Logo} alt="broken" sx={styles.avatar} />
            MuZi
          </Typography>
          <Box sx={styles.navItem}>
            {navItems.map(({ title, navigation, onClick }) => (
              <Button key={title} sx={styles.navBasicItem} onClick={onClickNavigationButton(navigation, onClick)}>
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.drawer}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default TopNavigation;
