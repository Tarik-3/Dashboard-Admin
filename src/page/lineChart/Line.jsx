 
 
// @ts-ignore
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "TV",
    color: "hsl(4, 70%, 50%)",
    data: [
      {
        x: "JAN",
        y: 79,
      },
      {
        x: "FEV",
        y: 28,
      },
      {
        x: "MAR",
        y: 150,
      },
      {
        x: "AVR",
        y: 173,
      },
      {
        x: "MAI",
        y: 234,
      },
      {
        x: "JUN",
        y: 98,
      },
      {
        x: "JUL",
        y: 244,
      },
      {
        x: "AOU",
        y: 295,
      },
      {
        x: "SEP",
        y: 287,
      },
      {
        x: "OCT",
        y: 157,
      },
      {
        x: "NOV",
        y: 239,
      },
      {
        x: "JUL",
        y: 69,
      },
    ],
  },
  {
    id: "CNSS",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "JAN",
        y: 278,
      },
      {
        x: "FEV",
        y: 222,
      },
      {
        x: "MAR",
        y: 65,
      },
      {
        x: "AVR",
        y: 213,
      },
      {
        x: "MAI",
        y: 89,
      },
      {
        x: "JUN",
        y: 278,
      },
      {
        x: "JUL",
        y: 231,
      },
      {
        x: "AOU",
        y: 47,
      },
      {
        x: "SEP",
        y: 126,
      },
      {
        x: "OCT",
        y: 191,
      },
      {
        x: "NOV",
        y: 95,
      },
      {
        x: "DEC",
        y: 26,
      },
    ],
  },
  {
    id: "IS",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "JAN",
        y: 3,
      },
      {
        x: "FEV",
        y: 187,
      },
      {
        x: "MAR",
        y: 259,
      },
      {
        x: "AVR",
        y: 294,
      },
      {
        x: "MAI",
        y: 158,
      },
      {
        x: "JUN",
        y: 146,
      },
      {
        x: "JUL",
        y: 125,
      },
      {
        x: "AOU",
        y: 253,
      },
      {
        x: "SEP",
        y: 230,
      },
      {
        x: "OCT",
        y: 287,
      },
      {
        x: "NOV",
        y: 193,
      },
      {
        x: "DEC",
        y: 12,
      },
    ],
  },
  
];

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <
// @ts-ignore
    Box sx={{ height: isDahboard?  "280px"  :  "75vh" }}>
      <
// @ts-ignore
      ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Mois",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Cout",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
