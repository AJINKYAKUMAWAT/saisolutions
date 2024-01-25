'use client'
// components/Navbar.tsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import {Single_Day} from 'next/font/google';

export const Google_Font = Single_Day({
  weight:'400',
  display:'swap'
})

const drawerWidth = 240;

const navItems = ['WORK','INDUSTRIES', 'EXPERISE', 'COMPANY', 'CONTACT'];

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navigate1, setNavigate] = React.useState<string>("")

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = (item:string) => {
      setNavigate(item)
  }

  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => {
      
      // Check if window is defined before accessing properties
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0) {          
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    // Explicitly assert the type of window as Window
    const currentWindow = window as Window;

    // Check if window is defined before adding the event listener
    if (typeof currentWindow !== 'undefined') {
      currentWindow.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      // Check if window is defined before removing the event listener
      if (typeof currentWindow !== 'undefined') {
        currentWindow.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography className={Google_Font.className} variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav" sx={{backgroundColor:scrolling ? '#161616' : 'transparent', boxShadow:'none'}} >
      <Toolbar sx={{padding:"30px 30px 0 30px"}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
        className={Google_Font.className}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize:'2.25rem',padding:'5px' }}
        >
          CodeCrafters Hub

        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button onClick={() => navigate(item)} key={item} sx={{ color: '#fff',marginRight:'30px', fontSize:'0.9rem',borderTop:navigate1 === item ? '4px solid #b51b1b' :'' }}>
              {item}
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
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>   
  </Box>

  );
};

export default Navbar;
