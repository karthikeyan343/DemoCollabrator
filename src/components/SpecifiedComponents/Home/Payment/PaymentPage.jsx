import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const total = location.state?.total || 0;
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [amountReceived, setAmountReceived] = useState("");
  const received = Number(amountReceived) || 0;
  const change = received > total
    ? received - total
    : 0;

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
    setAmountReceived("");
  };

  const handleCompletePayment = () => {
    if (paymentMethod === "Cash" && received < total) {
      alert("Amount received is less than the amount due");
      return;
    }
    alert("Payment completed successfully");
    navigate("/");
  };
  return (
    <Box sx={{backgroundColor:"#f5f6f8"}}>
      <Box
        sx={{
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:'100vh'
        }}
      >
        <Box
          sx={{
            width: "335px",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            p: 1.5,
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
              sx={{
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              Complete Payment
            </Typography>
            <Button
              onClick={() => navigate(-1)}
              sx={{
            
                minWidth:'35px',
                height: "35px",
                color: "grey",
                fontSize: "25px",
              }}
            >
              ×
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#eef5fc",
              border: "1px solid #dbe7f5",
              borderRadius: 1,
              p: 1.5,
              textAlign: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "text.secondary",
                fontWeight: 600,
              }}
            >
              AMOUNT DUE
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#0666d6",
              }}
            >
              ₹{total.toFixed(2)}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              mb: 1,
            }}
          >
            SELECT PAYMENT METHOD
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 1.5,
            }}
          >
            <Button
              onClick={() => handlePaymentMethod("Cash")}
              variant="outlined"
              startIcon={<PaymentsIcon />}
              sx={{
                flex: 1,
                height: 45,
                fontSize: "10px",
                flexDirection: "column",
                gap: 0,
                color:
                  paymentMethod === "Cash"
                    ? "#0066d6"
                    : "black",
                borderColor:
                  paymentMethod === "Cash"
                    ? "#0066d6"
                    : "#ddd",
              }}
            >
              CASH
            </Button>
            <Button
              onClick={() => handlePaymentMethod("UPI")}
              variant="outlined"
              startIcon={<AccountBalanceWalletIcon />}
              sx={{
                flex: 1,
                height: 45,
                fontSize: "10px",
                flexDirection: "column",
                gap: 0,
                color:
                  paymentMethod === "UPI"
                    ? "#0066d6"
                    : "black",
                borderColor:
                  paymentMethod === "UPI"
                    ? "#0066d6"
                    : "#ddd",
              }}
            >
              UPI
            </Button>
            <Button
              onClick={() => handlePaymentMethod("Card")}
              variant="outlined"
              startIcon={<CreditCardIcon />}
              sx={{
                flex: 1,
                height: 45,
                fontSize: "10px",
                flexDirection: "column",
                gap: 0,
                color:
                  paymentMethod === "Card"
                    ? "#0066d6"
                    : "black",
                borderColor:
                  paymentMethod === "Card"
                    ? "#0066d6"
                    : "#ddd",
              }}
            >
              CARD
            </Button>
          </Box>

          {paymentMethod === "Cash" && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 1,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "text.secondary",
                      mb: 0.5,
                    }}
                  >
                    Amount Received
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    value={amountReceived}
                    onChange={(e) =>
                      setAmountReceived(e.target.value)
                    }
                    type="number"
                    placeholder="₹"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "text.secondary",
                      mb: 0.5,
                    }}
                  >
                    Change to Return
                  </Typography>
                  <Box
                    sx={{
                      height: "40px",
                      backgroundColor: "#eeeeee",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#00875a",
                        fontWeight: 700,
                      }}
                    >
                      ₹{change.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() =>
                    setAmountReceived(total + 50)
                  }
                >
                  + ₹50
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() =>
                    setAmountReceived(total + 100)
                  }
                >
                  + ₹100
                </Button>
              </Box>
            </Box>
          )}
          {paymentMethod === "UPI" && (
            <Box
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                mb: 1.5,
              }}
            >
              <AccountBalanceWalletIcon
                sx={{
                  fontSize: 35,
                  color: "#0066d6",
                }}
              />
              <Typography
                sx={{
                  fontSize: "13px",
                  mt: 1,
                }}
              >
                Waiting for UPI payment
              </Typography>
            </Box>
          )}
          {paymentMethod === "Card" && (
            <Box
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                mb: 1.5,
              }}
            >
              <CreditCardIcon
                sx={{
                  fontSize: 35,
                  color: "#0066d6",
                }}
              />
              <Typography
                sx={{
                  fontSize: "13px",
                  mt: 1,
                }}
              >
                Process payment through card machine
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              borderTop: "1px solid #ddd",
              pt: 1,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                width: "80px",
                height: 40,
                fontSize: "15px",
                textTransform: "none",
                color: "black",
                borderColor: "black",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              fullWidth
              startIcon={<CheckCircleIcon />}
              onClick={handleCompletePayment}
              sx={{
                height: 40,
                fontSize: "11px",
                textTransform: "none",
              }}
            >
              Complete Payment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PaymentPage;