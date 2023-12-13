import { Box, useTheme } from "@mui/material";
// @ts-ignore
import React from "react";
// @ts-ignore
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  // @ts-ignore
  const theme = useTheme();
  return (
    <
// @ts-ignore
    Box>
      <
// @ts-ignore
      Header title="GRAPHE" subTitle="Graphe d'evolution des couts de (IS, CNSS, TV)" />

      <
// @ts-ignore
      Line />
    </Box>
  );
};

export default LineChart;
