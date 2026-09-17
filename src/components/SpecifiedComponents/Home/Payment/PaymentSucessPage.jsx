import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Typography,Box,Button,Paper} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import generateReceiptPDF from "../../../../utils/generateReceiptPDF";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    total = 0,
    paymentMethod = "Cash",
    amountReceived = 0,
    change = 0,
  } = location.state || {};

  const handleDownloadPDF = () => {
  generateReceiptPDF({
    total,
    paymentMethod,
    amountReceived,
    change,
  });
};

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleNewBill = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f6f8",
        p: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: 65, color: "success.main", mb: 1,
          }}
        />
        <Typography
          variant="h5"
          fontWeight={600}
        >
          Payment Successful
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Invoice: INV-2026-001245
        </Typography>
        
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 2,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Amount Paid
            </Typography>

            <Typography
              variant="h5"
              fontWeight={600}
              color="primary"
            >
              ₹{total.toFixed(2)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Payment Method
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
            >
              {paymentMethod}
            </Typography>
          </Box>
          {paymentMethod === "Cash" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Amount Received
                </Typography>

                <Typography variant="body2">
                  ₹{amountReceived.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Change Returned
                </Typography>

                <Typography
                  variant="body2"
                  color="success.main"
                  fontWeight={600}
                >
                  ₹{change.toFixed(2)}
                </Typography>
              </Box>
            </>
          )}
        </Paper>
        <Button
          fullWidth
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrintReceipt}
          sx={{
            mb: 1,
            textTransform: "none",
          }}
        >
          Print Receipt
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleNewBill}
          sx={{
            mb: 1,
            textTransform: "none",
          }}
        >
          New Bill
        </Button>
        <Button
          variant="text"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadPDF}
          sx={{
            textTransform: "none",
          }}
        >
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentSuccessPage;