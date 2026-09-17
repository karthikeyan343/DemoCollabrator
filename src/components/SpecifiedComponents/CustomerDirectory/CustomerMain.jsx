import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarsIcon from "@mui/icons-material/Stars";
import CakeIcon from "@mui/icons-material/Cake";
import CustomerSearch from "./CustomerSearch";
import Directory from "./Directory";

const CustomerMain = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        bgcolor: "#f8f9fa",
        p: { xs: 1.5, sm: 2, md: 3 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1400, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-end" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: { xs: 2, md: 3 },
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 24, sm: 28, md: 32 },
                lineHeight: 1.25,
                fontWeight: 600,
                color: "#191c1d",
              }}
            >
              Customer Directory
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 13, sm: 14, md: 16 },
                lineHeight: 1.5,
                color: "#424754",
              }}
            >
              Manage loyal patrons, view history, and update profiles.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{
              height: { xs: 42, md: 48 },
              px: { xs: 2, md: 3 },
              borderRadius: "8px",
              bgcolor: "#0058be",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: 13, md: 14 },
              fontWeight: 600,
              whiteSpace: "nowrap",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#004a9f",
                boxShadow: "none",
              },
            }}
          >
            Add Customer
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 3fr) minmax(280px, 1fr)",
            },
            gap: { xs: 1.5, md: 2 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, md: 2 },
            }}
          >
            <CustomerSearch
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onClear={() => setSearchValue("")}
            />

            <Directory searchValue={searchValue} />
          </Box>

          <Box
            sx={{
              minWidth: 0,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "1fr",
              },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            <LoyaltyProgram />
            <UpcomingMilestones />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const LoyaltyProgram = () => (
  <Box sx={cardStyle}>
    <CardHeader
      icon={<StarsIcon />}
      iconBg="#00855b"
      title="Loyalty Program"
      subtitle="Global Settings"
    />

    <Box sx={{ display: "grid", gap: 1.5, mt: 2 }}>
      <InfoRow label="Earn Rate" value="1 Pt / $1" />
      <InfoRow label="Redemption" value="100 Pts = $1" />

      <Box sx={{ borderTop: "1px solid #c2c6d6" }} />

      <InfoRow label="Total Points Issued" value="845,200" />
    </Box>

    <Button
      fullWidth
      sx={{
        mt: 2,
        height: 40,
        border: "1px solid #c2c6d6",
        borderRadius: "8px",
        bgcolor: "#fff",
        color: "#191c1d",
        textTransform: "none",
        fontSize: 14,
        fontWeight: 600,
        "&:hover": { bgcolor: "#f3f4f5" },
      }}
    >
      Manage Rules
    </Button>
  </Box>
);

const UpcomingMilestones = () => (
  <Box sx={cardStyle}>
    <CardHeader
      icon={<CakeIcon />}
      iconBg="#d6e0f3"
      iconColor="#3d4756"
      title="Upcoming Milestones"
      subtitle="Birthdays & Anniversaries"
    />

    <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
      <Milestone
        initial="S"
        name="Sarah Connor"
        timing="Tomorrow"
        description="Birthday - Offer 10% Off"
        highlight
      />

      <Milestone
        initial="D"
        name="David Miller"
        timing="In 3 Days"
        description="1yr Anniversary"
      />
    </Box>
  </Box>
);

const CardHeader = ({
  icon,
  iconBg,
  iconColor = "#fff",
  title,
  subtitle,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      pb: 1.5,
      borderBottom: "1px solid #c2c6d6",
      minWidth: 0,
    }}
  >
    <Box
      sx={{
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: "8px",
        bgcolor: iconBg,
        color: iconColor,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </Box>

    <Box sx={{ minWidth: 0 }}>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: 16, md: 20 },
          lineHeight: 1.4,
          fontWeight: 600,
          color: "#191c1d",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          lineHeight: 1.4,
          color: "#727785",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2,
    }}
  >
    <Typography sx={{ fontSize: 14, color: "#424754" }}>
      {label}
    </Typography>

    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 600,
        color: "#191c1d",
        whiteSpace: "nowrap",
      }}
    >
      {value}
    </Typography>
  </Box>
);

const Milestone = ({
  initial,
  name,
  timing,
  description,
  highlight = false,
}) => (
  <Box sx={{ display: "flex", gap: 1.5, minWidth: 0 }}>
    <Box
      sx={{
        width: 32,
        height: 32,
        flexShrink: 0,
        borderRadius: "50%",
        bgcolor: "#e1e3e4",
        display: "grid",
        placeItems: "center",
        fontSize: 12,
        fontWeight: 600,
        color: "#191c1d",
      }}
    >
      {initial}
    </Box>

    <Box sx={{ minWidth: 0, flex: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#191c1d",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: highlight ? "#00855b" : "#727785",
            whiteSpace: "nowrap",
          }}
        >
          {timing}
        </Typography>
      </Box>

      <Typography
        sx={{
          mt: 0.25,
          fontSize: 12,
          color: "#727785",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

const cardStyle = {
  bgcolor: "#fff",
  border: "1px solid #c2c6d6",
  borderRadius: "12px",
  p: { xs: 1.5, md: 2.5 },
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  minWidth: 0,
};

export default CustomerMain;