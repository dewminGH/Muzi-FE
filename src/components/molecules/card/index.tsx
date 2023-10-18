import * as React from "react";
import DEFAULT_URL from "../../../assets/cover_img2.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IStyledCard } from "./types/interface";

const StyledCard: React.FC<IStyledCard> = ({ src, title, content, styles }) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%", ...styles }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia component="img" height="140" image={src || DEFAULT_URL} alt="broken" sx={{ objectFit: "cover" }} />
        <CardContent sx={{ height: { xs: "300px", sm: "240px", md: "200px" } }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.length > 90 ? `${content.slice(0, 87)}...` : content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StyledCard;
