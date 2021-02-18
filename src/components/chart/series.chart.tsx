import React, { FunctionComponent, useEffect, useState } from "react";
import { withLoading } from "../commons/loader";
import { Bar } from "react-chartjs-2";
import { Box, makeStyles, createStyles, Theme } from "@material-ui/core";
import Measurement from "../../models/measurement.model";
import { Title } from "../commons/title";
import { formatToLocalDate } from "../../utils/date.util";

interface SeriesChartProps {
  title: string;
  data: Measurement[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    canvasContainer: {
      display: ({ showData }: any) => (showData ? "flex" : "none"),
      width: "580px",
      height: "auto",
      [theme.breakpoints.down("lg")]: {
        width: "90%",
      },
    },
    emptyData: {
      fontSize: "12px",
    },
  })
);

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const spectrumValues = [
  { a: 0, b: "#cccccc", f: "#ffffff" },
  { a: 50, b: "#009966", f: "#ffffff" },
  { a: 100, b: "#ffde33", f: "#000000" },
  { a: 150, b: "#ff9933", f: "#000000" },
  { a: 200, b: "#cc0033", f: "#ffffff" },
  { a: 300, b: "#660099", f: "#ffffff" },
  { a: 500, b: "#7e0023", f: "#ffffff" },
];

const getSpectrum = (value: number): number => {
  console.log('value: ', value);
  let spectrumIndex = 0;
  for (let index = 0; index < spectrumValues.length; index++) {
    const spectrum = spectrumValues[index];
    if (value <= spectrum.a) {
      spectrumIndex = index;
      break;
    }
  }
  console.log('spectrumIndex: ', spectrumIndex);
  return spectrumIndex;
}

const SeriesChart: FunctionComponent<SeriesChartProps> = ({
  title,
  data,
}: SeriesChartProps) => {
  const [dataChart, setDataChart] = useState({});
  const [showData, setShowData] = useState(false);
  const classes = useStyles({ showData });

  useEffect(() => {
    const initData = () => {
      if (data) {
        setDataChart({
          labels: data.map((d) => formatToLocalDate(d.date.utc)),
          datasets: [
            {
              label: "Parameter value",
              backgroundColor: data.map(d => spectrumValues[getSpectrum(d.value)].b),
              borderColor: data.map(d => spectrumValues[getSpectrum(d.value)].b),
              borderWidth: 1,
              data: data.map((data) => data.value),
            },
          ],
        });
        setShowData(true);
      }
    };

    initData();
  }, [data]);

  return (
    <Box pt={2} className={classes.root}>
      <Title align="center">{title}</Title>
      <Box className={classes.canvasContainer}>
        <Bar data={dataChart} options={options} />
      </Box>
      {showData ? null : <h2>No data</h2>}
    </Box>
  );
};

export default withLoading(SeriesChart);
