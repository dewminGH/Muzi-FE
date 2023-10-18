import Grid from "@mui/material/Unstable_Grid2";
import StyledCard from "../card";
import { IStyledCardGrid } from "./types/interface";
import { IStyledCard } from "../card/types/interface";

const processGridItems = (cards: IStyledCard[]) => {
  return cards.map(({ content, src, title, styles }, index) => {
    return (
      <Grid xs={6} md={3} key={index}>
        <StyledCard
          title={title}
          content={content}
          styles={{ ...(styles as object), ...{ maxWidth: "100%" } }}
          src={src}
        />
      </Grid>
    );
  });
};

const StyledCardGrid: React.FC<IStyledCardGrid> = ({ cards }) => {
  return (
    <Grid container spacing={3}>
      {processGridItems(cards)}
    </Grid>
  );
};

export default StyledCardGrid;
