import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarsIcon from "@mui/icons-material/Stars";
import CakeIcon from "@mui/icons-material/Cake";

import CustomerSearch from "./CustomerSearch";
import Directory from "./Directory";
import Customers from "../../../data/CustomerDetails";

const CustomerMain = ({ darkMode = false }) => {
  const [searchValue, setSearchValue] = useState("");
  const [openAddCustomer, setOpenAddCustomer] = useState(false);

  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("kineticCustomers");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return Customers;
      }
    }

    localStorage.setItem("kineticCustomers", JSON.stringify(Customers));
    return Customers;
  });

  const [formData, setFormData] = useState({
    name: "",
    type: "Standard",
    mobile: "",
    email: "",
    loyaltyPoints: 0,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCustomer = () => {
    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim()
    ) {
      return;
    }

    const name = formData.name.trim();

    const newCustomer = {
      id: Date.now(),
      initials: name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
      name,
      type: formData.type,
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      loyaltyPoints: Number(formData.loyaltyPoints) || 0,
      lastVisit: "New Customer",
      lastVisitDate: new Date().toISOString(),
      totalSpend: 0,
      selected: false,
    };

    setCustomers((prev) => {
      const updated = [...prev, newCustomer];

      localStorage.setItem(
        "kineticCustomers",
        JSON.stringify(updated)
      );

      return updated;
    });

    setFormData({
      name: "",
      type: "Standard",
      mobile: "",
      email: "",
      loyaltyPoints: 0,
    });

    setOpenAddCustomer(false);
  };

  const handleRemoveCustomer = (id) => {
    setCustomers((prev) => {
      const updated = prev.filter((customer) => customer.id !== id);

      localStorage.setItem(
        "kineticCustomers",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const closeDialog = () => {
    setOpenAddCustomer(false);

    setFormData({
      name: "",
      type: "Standard",
      mobile: "",
      email: "",
      loyaltyPoints: 0,
    });
  };

  const bg = darkMode ? "#191c1d" : "#f8f9fa";
  const text = darkMode ? "#fff" : "#191c1d";
  const secondary = darkMode ? "#c2c6d6" : "#424754";

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        bgcolor: bg,
        p: { xs: 1.5, sm: 2, md: 3 },
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
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28, md: 32 },
                fontWeight: 600,
                color: text,
              }}
            >
              Customer Directory
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: { xs: 13, sm: 14, md: 16 },
                color: secondary,
              }}
            >
              Manage loyal patrons, view history, and update profiles.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={() => setOpenAddCustomer(true)}
            sx={{
              height: 48,
              px: 3,
              borderRadius: "8px",
              bgcolor: "#0058be",
              textTransform: "none",
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
            gap: 2,
            alignItems: "start",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <CustomerSearch
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onClear={() => setSearchValue("")}
            />

            <Directory
              searchValue={searchValue}
              customers={customers}
              onRemove={handleRemoveCustomer}
              darkMode={darkMode}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 2,
            }}
          >
            <LoyaltyProgram darkMode={darkMode} />
            <UpcomingMilestones darkMode={darkMode} />
          </Box>
        </Box>
      </Box>

      <Dialog
        open={openAddCustomer}
        onClose={closeDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add Customer</DialogTitle>

        <DialogContent>
          <Box sx={{ display: "grid", gap: 2, pt: 1 }}>
            <TextField
              label="Customer Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              fullWidth
            />

            <TextField
              select
              label="Customer Type"
              name="type"
              value={formData.type}
              onChange={handleFormChange}
              fullWidth
            >
              <MenuItem value="Standard">Standard</MenuItem>
              <MenuItem value="VIP Member">VIP Member</MenuItem>
            </TextField>

            <TextField
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleFormChange}
              required
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              fullWidth
            />

            <TextField
              label="Loyalty Points"
              name="loyaltyPoints"
              type="number"
              value={formData.loyaltyPoints}
              onChange={handleFormChange}
              inputProps={{ min: 0 }}
              fullWidth
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={closeDialog}>Cancel</Button>

          <Button
            variant="contained"
            onClick={handleAddCustomer}
            disabled={
              !formData.name.trim() ||
              !formData.mobile.trim() ||
              !formData.email.trim()
            }
            sx={{
              bgcolor: "#0058be",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#004a9f",
                boxShadow: "none",
              },
            }}
          >
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const LoyaltyProgram = ({ darkMode }) => (
  <Box sx={cardStyle(darkMode)}>
    <CardHeader
      icon={<StarsIcon />}
      iconBg="#00855b"
      title="Loyalty Program"
      subtitle="Global Settings"
      darkMode={darkMode}
    />

    <Box sx={{ display: "grid", gap: 1.5, mt: 2 }}>
      <InfoRow label="Earn Rate" value="1 Pt / $1" darkMode={darkMode} />
      <InfoRow label="Redemption" value="100 Pts = $1" darkMode={darkMode} />

      <Box sx={{ borderTop: `1px solid ${darkMode ? "#424754" : "#c2c6d6"}` }} />

      <InfoRow
        label="Total Points Issued"
        value="845,200"
        darkMode={darkMode}
      />
    </Box>

    <Button
      fullWidth
      sx={{
        mt: 2,
        height: 40,
        border: `1px solid ${darkMode ? "#424754" : "#c2c6d6"}`,
        borderRadius: "8px",
        color: darkMode ? "#fff" : "#191c1d",
        textTransform: "none",
      }}
    >
      Manage Rules
    </Button>
  </Box>
);

const UpcomingMilestones = ({ darkMode }) => (
  <Box sx={cardStyle(darkMode)}>
    <CardHeader
      icon={<CakeIcon />}
      iconBg="#d6e0f3"
      iconColor="#3d4756"
      title="Upcoming Milestones"
      subtitle="Birthdays & Anniversaries"
      darkMode={darkMode}
    />

    <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
      <Milestone
        initial="S"
        name="Sarah Connor"
        timing="Tomorrow"
        description="Birthday - Offer 10% Off"
        highlight
        darkMode={darkMode}
      />

      <Milestone
        initial="D"
        name="David Miller"
        timing="In 3 Days"
        description="1yr Anniversary"
        darkMode={darkMode}
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
  darkMode,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      pb: 1.5,
      borderBottom: `1px solid ${darkMode ? "#424754" : "#c2c6d6"}`,
    }}
  >
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "8px",
        bgcolor: iconBg,
        color: iconColor,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </Box>

    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: darkMode ? "#fff" : "#191c1d",
        }}
      >
        {title}
      </Typography>

      <Typography sx={{ fontSize: 12, color: "#727785" }}>
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

const InfoRow = ({ label, value, darkMode }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography sx={{ fontSize: 14, color: darkMode ? "#c2c6d6" : "#424754" }}>
      {label}
    </Typography>

    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 600,
        color: darkMode ? "#fff" : "#191c1d",
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
  highlight,
  darkMode,
}) => (
  <Box sx={{ display: "flex", gap: 1.5 }}>
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        bgcolor: darkMode ? "#424754" : "#e1e3e4",
        display: "grid",
        placeItems: "center",
        fontSize: 12,
        fontWeight: 600,
        color: darkMode ? "#fff" : "#191c1d",
      }}
    >
      {initial}
    </Box>

    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: darkMode ? "#fff" : "#191c1d",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: highlight ? "#00855b" : "#727785",
          }}
        >
          {timing}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: 12, color: "#727785" }}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const cardStyle = (darkMode) => ({
  bgcolor: darkMode ? "#24282b" : "#fff",
  border: `1px solid ${darkMode ? "#424754" : "#c2c6d6"}`,
  borderRadius: "12px",
  p: 2.5,
});

export default CustomerMain;