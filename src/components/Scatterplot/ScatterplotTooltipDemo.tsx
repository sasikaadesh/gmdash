import { data } from "./data";
import { Scatterplot } from "./Scatterplot";

export const ScatterplotTooltipDemo = ({ width = 800, height = 300 }) => (
  <Scatterplot data={data} width={width} height={height} />
);
