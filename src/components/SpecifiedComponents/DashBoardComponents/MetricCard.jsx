import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

const MetricCard = ({
  title,
  value,
  subtitle,
  subtitleIcon,
  icon,
  state = "success",
  bgDecoration,
}) => {
  const isError = state === "error";
  const isNeutral = state === "neutral";

  const mainColor = isError ? "#BA1A1A" : "#0058BE";

  const statusColor = isError
    ? "#BA1A1A"
    : isNeutral
      ? "#73777F"
      : "#00855B";

  return (
    <Card
      variant="outlined"
      sx={{
        height: "128px",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        border: "1px solid #C2C6D6",
        boxSizing: "border-box",
        transition: "all 0.25s ease",

        "&:hover": {
          borderColor: isError ? "#BA1A1A" : "#0058BE",

          boxShadow: isError
            ? "0 4px 14px rgba(186, 26, 26, 0.10)"
            : "0 4px 14px rgba(0, 88, 190, 0.10)",

          "& .side-circle": {
            opacity: 0.10,
            transform: "scale(1.08)",
          },

          "& .card-icon": {
            transform: "scale(1.08)",
          },
        },
      }}
    >
      <Box
        className="side-circle"
        sx={{
          position: "absolute",
          right: "-30px",
          bottom: "-30px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: bgDecoration || mainColor,
          opacity: 0.055,
          transition: "all 0.25s ease",
          pointerEvents: "none",
        }}
      />

      <CardContent
        sx={{
          height: "100%",
          padding: "20px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,

          "&:last-child": {
            paddingBottom: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
              color: "#424754",
            }}
          >
            {title}
          </Typography>

          <Box
            className="card-icon"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: mainColor,
              transition: "transform 0.25s ease",
              position: "relative",
              zIndex: 10,

              "& .MuiSvgIcon-root": {
                display: "block",
                fontSize: "24px",
                color: mainColor,
              },
            }}
          >
            {icon}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              lineHeight: "36px",
              letterSpacing: "-0.02em",
              fontWeight: 700,
              color: "#191C1D",
            }}
          >
            {value}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "3px",
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 600,
              color: statusColor,

              "& .MuiSvgIcon-root": {
                display: "block",
                fontSize: "15px",
                color: statusColor,
              },
            }}
          >
            {subtitleIcon}
            <span>{subtitle}</span>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;