import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary, // Establecer el color a negro
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'primary',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#2a2929',
    },
    typography: {
      fontSize: '1.2rem',
    },

}});

const IconsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const IconSeparator = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const DrawerContainer = styled('div')({
  width: drawerWidth,
  boxSizing: 'content-box',
});

export default function NavBar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Redirect to Products page with search query
      navigate(`/Products?search=${encodeURIComponent(searchText)}`);
      setSearchText('');
    }
  };

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    // Agrega los estilos personalizados para el icono del menú
    color: 'black' // Agrega la propiedad 
  }));

  const CustomPermIdentityIcon = styled(PermIdentityIcon)(({ theme }) => ({
    color: 'black',
  }));

  const StyledButton = styled(Button)(({ theme }) => ({

    '&.MuiButton-textPrimary': {
      color: 'black', // Establece el color del texto del botón como negro
    },
    // Agrega otros estilos personalizados según tus necesidades
  }));

  const CustomListItem = styled(ListItem)(({ theme }) => ({
    color: 'black', // Establece el color del texto del ListItem como negro
    '&:hover': {
      backgroundColor: theme.palette.primary.light, // Establece el color de fondo al hacer hover
    },
  }));
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <CustomMenuIcon onClick={handleDrawerToggle}/>
          
          <Typography
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              color: 'black',
            
            }}
          >
          <ThemeProvider theme={theme}>
            <div style={{ marginLeft: '60px' }}>
              <StyledButton  component={Link} to="/"> 
                CONVERSO
              </StyledButton>
            </div>
            </ThemeProvider>
          </Typography>
          {/* Search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleSearch}
            />
          </Search>
          <IconsWrapper>
            <IconButton>
              {/* Adding the fake number elements  */}
              <Badge badgeContent={<TotalItems />} color="success">
                <Link to="/Cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconSeparator />
            <CustomPermIdentityIcon />
          </IconsWrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        sx={{ width: drawerWidth }}
      >
        <DrawerContainer>
          <List>
            <CustomListItem button sx={{ marginTop: 2 }} Button component={Link} to= "/Products" >
              <ListItemText primary="Mujer" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Hombre" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Niños" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Personalizar" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Edicion Limitada" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Explorar" />
            </CustomListItem>
            <CustomListItem button>
              <ListItemText primary="Rebajas" />
            </CustomListItem>
          </List>
        </DrawerContainer>
      </Drawer>
    </Box>
  );
}
