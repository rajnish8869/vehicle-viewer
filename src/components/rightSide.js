import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Pie, Line } from "react-chartjs-2";
// import data from "./Data";

const rightSide = () => {
  function createData(
    Start_Time,
    Duration,
    Max_Speed,
    Average_Speed,
    Starting_Voltage,
    Ending_Voltage,
    Distance,
    Driver_Score
  ) {
    return {
      Start_Time,
      Duration,
      Max_Speed,
      Average_Speed,
      Starting_Voltage,
      Ending_Voltage,
      Distance,
      Driver_Score,
    };
  }

  const rows = [
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
    createData(
      "May 26, 5:18 pm",
      "24 min",
      "91 kmph",
      "54 kmph",
      "70.04V",
      "69.42V",
      "5.45 km",
      "98.5"
    ),
  ];
  return (
    <div className="mainpage">
      <div className="topBar">
        <div className="topBarInner">
          <p className="vehicles">Vehicles</p>
          <i class="fas fa-chevron-right"></i>
          <p className="vehicleName">Vehicle 1</p>
        </div>
      </div>
      <div className="part-2">
        <div className="vehicleStatus">
          <p className="vehicleStatusText">Vehicle Status</p>
          <div className="vehicleStatusBox">
            <div className="vehicleStatusLeft">
              <p className="Elevation">
                Elevation <spam className="ElevationValue">200m</spam>
              </p>
              <p className="Temperature">
                Temperature <spam className="TemperatureValue">45℃</spam>
              </p>
              <p className="Locked">
                Locked{" "}
                <spam className="LockedValue">
                  <i class="fas fa-check-circle"> </i>
                </spam>
              </p>
              <p className="Battery">
                Battery <spam className="BatteryValue">75.6%</spam>
              </p>
            </div>
            <div className="vehicleStatusRight">
              <p className="Throttle">
                <i class="fas fa-check-circle"> </i>Throttle
              </p>
              <p className="Controller">
                <i class="fas fa-check-circle"> </i>Controller
              </p>
              <p className="Motor">
                <i class="fas fa-check-circle"> </i>Motor
              </p>
              <p className="Overload">
                <i class="fas fa-check-circle"> </i>Overload
              </p>
              <p className="Overcurrent">
                <i class="fas fa-check-circle"> </i>Overcurrent
              </p>
            </div>
          </div>
        </div>
        <div className="staticsGraph">
          <div className="staticsGraphTop">
            <div className="staticsGraphTopLeft">
              <p className="Statistics">Statistics</p>
              <button className="bookingBtn">Bookings</button>
              <button className="EarningsBtn">Earnings</button>
            </div>
            <div className="staticsGraphTopRight">
              <button className="dataChangeBtn">D</button>
              <button className="dataChangeBtn">W</button>
              <button className="dataChangeBtn">M</button>
              <button className="dataChangeBtn">Y</button>
              <button className="dataChangeBtn">Max</button>
            </div>
          </div>
          <div className="Graph">
            <h1>Graph container</h1>
          </div>
        </div>
      </div>
      <div className="recentTrip">
        <p className="recentTripText">Recent Trip</p>
        <div className="graphContainer">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Start Time</TableCell>
                  <TableCell align="left">Duration</TableCell>
                  <TableCell align="left">Max Speed</TableCell>
                  <TableCell align="left">Average Speed</TableCell>
                  <TableCell align="left">Starting Voltage</TableCell>
                  <TableCell align="left">Ending Voltage</TableCell>
                  <TableCell align="left">Distance</TableCell>
                  <TableCell align="left">Driver Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Start_Time}
                    </TableCell>
                    <TableCell align="left">{row.Duration}</TableCell>
                    <TableCell align="left">{row.Max_Speed}</TableCell>
                    <TableCell align="left">{row.Average_Speed}</TableCell>
                    <TableCell align="left">{row.Starting_Voltage}</TableCell>
                    <TableCell align="left">{row.Ending_Voltage}</TableCell>
                    <TableCell align="left">{row.Distance}</TableCell>
                    <TableCell align="left">{row.Driver_Score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default rightSide;
