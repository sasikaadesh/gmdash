import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Header,
  StatBox,
  LineChart,
  ProgressCircle,
  BarChart,
  GeographyChart,
  PieChart, 
  BubbleChart,
  MyComp,
} from "../../components";
import Scatterplot from "../../components/Scatterplot/Scatterplot";
import { data as scatterdata } from "../../components/Scatterplot/data";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import React, { useRef, useEffect, useState } from "react";

function DashContentCharts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");

  const chartRef = useRef(null);
  const [chartHeight, setChartHeight] = useState(0);

  const chartRefScatter = useRef(null);
  const [chartHeightScatter, setChartHeightScatter] = useState(0);

  useEffect(() => {
    if (chartRef.current) {
      setChartHeight(chartRef.current.clientHeight + 20);
    }
  }, [chartRef.current]);

  useEffect(() => {
    if (chartRefScatter.current) {
      setChartHeightScatter(chartRefScatter.current.clientHeight - 100);
    }
  }, [chartRefScatter.current]);

  return (
    <>
      {/* Pie Chart */}
      <Box
        gridColumn={isXlDevices ? "span 7" : isMdDevices ? "span 7" : "span 6"}
        gridRow="span 2"
        bgcolor={colors.primary[400]}
      >
        <Box mt="25px" px="30px" display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $59,342.32
            </Typography>
          </Box>
          <IconButton>
            <DownloadOutlined
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
        <Box height="250px" mt="-20px">
          <PieChart isDashboard={true} />
        </Box>
      </Box>
      {/* Line Chart */}
      {/* <Box
        gridColumn={isXlDevices ? "span 6" : isMdDevices ? "span 6" : "span 3"}
        gridRow="span 2"
        bgcolor={colors.primary[400]}
      >
        <Box mt="25px" px="30px" display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $59,342.32
            </Typography>
          </Box>
          <IconButton>
            <DownloadOutlined
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box> */}
      {/* Bubble Chart */}
      <Box
      gridColumn={isXlDevices ? "span 5" : isMdDevices ? "span 5" : "span 6"}
      gridRow="span 2"
      bgcolor={colors.primary[400]} 
      height={`${chartHeightScatter}px`} // Set height based on BarChart height
    >
      <Box mt="25px" px="30px" display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
          Market Capitalization vs. Revenue
          </Typography>
        </Box>
        <IconButton>
          <DownloadOutlined
            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
          />
        </IconButton>
      </Box>
      <Box height="600px" ref={chartRefScatter}>
        {/* <BubbleChart height={600} /> Pass height here */}
        {/* <MyComp /> */}
        <Scatterplot data={scatterdata} width={400} height={400} />
      </Box>
    </Box>
      {/* Bar Chart */}
      <Box
        gridColumn={isXlDevices ? "span 7" : "span 6"}
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        height={`${chartHeight}px`} // Set height based on BarChart height 
        sx={{
          mt: {
            xs: 25, // margin-top for extra-small devices (0px and up)
            sm: 25, // margin-top for small devices (600px and up)
            md: 25,
            lg: 0  // margin-top for medium devices (900px and up)
          }
        }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="350px"
          ref={chartRef} // Attach the ref to the chart Box
          mt="-20px"
        >
          <BarChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
}

export default DashContentCharts;
