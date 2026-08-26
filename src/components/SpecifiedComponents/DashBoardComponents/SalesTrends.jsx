import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function SalesTrend() {
  const [timeRange, setTimeRange] = useState("24h");

  /*
   * Chart data for each selected range.
   * The layout stays exactly the same.
   * Only the bar heights, labels and current value change.
   */
  const chartData = {
    "24h": [
      { label: "6 AM", height: "35%" },
      { label: "9 AM", height: "48%" },
      { label: "12 PM", height: "28%" },
      { label: "3 PM", height: "60%" },
      { label: "6 PM", height: "42%" },
      {
        label: "Now",
        height: "82%",
        isNow: true,
        tag: "₹12.4k",
      },
    ],

    "7d": [
      { label: "Mon", height: "42%" },
      { label: "Tue", height: "58%" },
      { label: "Wed", height: "38%" },
      { label: "Thu", height: "72%" },
      { label: "Fri", height: "54%" },
      {
        label: "Sun",
        height: "88%",
        isNow: true,
        tag: "₹84.2k",
      },
    ],

    "30d": [
      { label: "Week 1", height: "50%" },
      { label: "Week 2", height: "35%" },
      { label: "Week 3", height: "68%" },
      { label: "Week 4", height: "82%" },
      { label: "Week 5", height: "58%" },
      {
        label: "Now",
        height: "92%",
        isNow: true,
        tag: "₹340k",
      },
    ],
  };

  /*
   * Get the data for the currently selected button.
   */
  const activeChartData = chartData[timeRange];

  const yLabels = ["15k", "10k", "5k", "0"];

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        p: 2.5,
        height: "100%",
        borderColor: "#e2e8f0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          color="#0f172a"
        >
          Sales Trends
        </Typography>

        <ToggleButtonGroup
          value={timeRange}
          exclusive
          onChange={(event, value) => {
            if (value) {
              setTimeRange(value);
            }
          }}
          size="small"
          sx={{
            height: 32,
          }}
        >
          <ToggleButton
            value="24h"
            sx={{
              textTransform: "none",
              px: 2,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            24h
          </ToggleButton>

          <ToggleButton
            value="7d"
            sx={{
              textTransform: "none",
              px: 2,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            7d
          </ToggleButton>

          <ToggleButton
            value="30d"
            sx={{
              textTransform: "none",
              px: 2,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            30d
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* MAIN CHART AREA */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          minHeight: 260,
        }}
      >
        {/* Y-AXIS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pb: 4,
            pr: 2,
          }}
        >
          {yLabels.map((label) => (
            <Typography
              key={label}
              variant="caption"
              sx={{
                color: "#94a3b8",
                fontSize: 11,
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* GRAPH COLUMN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {/* BARS */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderLeft: "1px solid #cbd5e1",
              borderBottom: "1px solid #cbd5e1",
              px: 3,
              position: "relative",
            }}
          >
            {activeChartData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "flex-end",
                  width: "12%",
                }}
              >
                {/* CURRENT VALUE TAG */}
                {item.isNow && (
                  <Box
                    sx={{
                      bgcolor: "#0f172a",
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: "bold",
                      px: 0.8,
                      py: 0.3,
                      borderRadius: 1,
                      mb: 0.5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.tag}
                  </Box>
                )}

                {/* BAR */}
                <Box
                  sx={{
                    width: "100%",
                    height: item.height,
                    bgcolor: item.isNow
                      ? "#0066cc"
                      : "#dbeafe",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    transition: "height 0.3s ease",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* X-AXIS LABELS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 3,
              pt: 1.5,
              ml: "1px",
            }}
          >
            {activeChartData.map((item, index) => (
              <Typography
                key={index}
                variant="caption"
                sx={{
                  color: "#94a3b8",
                  fontSize: 11,
                  fontWeight: 600,
                  width: "12%",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}