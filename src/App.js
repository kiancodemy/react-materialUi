import {
  Typography,
  AppBar,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Card,
  Container,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
