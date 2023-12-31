import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ColegioEntrada from "../images/ColegioEntrada2.jpg";
import PatioChico from "../images/patiochico.jpg";
import Profesor from "../images/profesor.png";

export default function HomePage() {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);

  const IraNavegar = (docu) => {
    console.log("Navegacion Ok");
    navigate("/Navegar");
  };

  return (
    <div>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ maxWidth: 300, marginLeft: "20px" }}>
            <CardActionArea onClick={() => IraNavegar(1)}>
              <CardMedia component="img" image={ColegioEntrada} />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ maxWidth: 300, marginLeft: "20px" }}>
            <CardActionArea onClick={() => IraNavegar(2)}>
              <CardMedia component="img" image={PatioChico} />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ maxWidth: 300, marginLeft: "20px" }}>
            <CardActionArea onClick={() => IraNavegar()}>
              <CardMedia component="img" image={Profesor} />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
