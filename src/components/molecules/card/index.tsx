import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IStyledCard } from "./types/interface";

const StyledCard: React.FC<IStyledCard> = ({ src, title, content, styles }) => {
  return (
    <Card sx={{ maxWidth: 345, ...styles }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={src} alt="broken" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StyledCard;
