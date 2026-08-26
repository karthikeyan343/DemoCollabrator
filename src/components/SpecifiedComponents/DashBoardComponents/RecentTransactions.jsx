import { Box, Button, Card, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactlessIcon from "@mui/icons-material/Contactless";
import PaymentsIcon from "@mui/icons-material/Payments";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

const transactions = [
  {
    id: "INV-2024-048",
    time: "Just now",
    items: "3 items",
    payment: "Card",
    amount: "₹450.00",
    icon: <ContactlessIcon />,
  },
  {
    id: "INV-2024-047",
    time: "10 mins ago",
    items: "1 item",
    payment: "Cash",
    amount: "₹85.00",
    icon: <PaymentsIcon />,
  },
  {
    id: "INV-2024-046",
    time: "25 mins ago",
    items: "8 items",
    payment: "UPI",
    amount: "₹1,240.50",
    icon: <QrCodeScannerIcon />,
  },
  {
    id: "INV-2024-045",
    time: "45 mins ago",
    items: "2 items",
    payment: "Card",
    amount: "₹320.00",
    icon: <ContactlessIcon />,
  },
  {
    id: "INV-2024-044",
    time: "1 hour ago",
    items: "5 items",
    payment: "Cash",
    amount: "₹560.00",
    icon: <PaymentsIcon />,
  },
];

const RecentTransactions = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "#C2C6D6",
        borderRadius: "12px",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #C2C6D6",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#191C1D",
          }}
        >
          Recent Transactions
        </Typography>

        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            textTransform: "none",
            color: "#0058BE",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          View Log
        </Button>
      </Box>

      <Box sx={{ overflowX: "auto" }}>
        <Box
          component="table"
          sx={{
            width: "100%",
            minWidth: "700px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#F1F3F5" }}>
              {["Invoice ID", "Time", "Items", "Payment", "Amount"].map(
                (heading) => (
                  <th
                    key={heading}
                    style={{
                      padding: "12px 16px",
                      textAlign: heading === "Amount" ? "right" : "left",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#424754",
                    }}
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                style={{
                  borderTop: "1px solid #E1E3E8",
                }}
              >
                <td
                  style={{
                    padding: "14px 16px",
                    fontSize: "13px",
                    color: "#0058BE",
                    fontWeight: 600,
                  }}
                >
                  {transaction.id}
                </td>

                <td
                  style={{
                    padding: "14px 16px",
                    fontSize: "13px",
                    color: "#424754",
                  }}
                >
                  {transaction.time}
                </td>

                <td
                  style={{
                    padding: "14px 16px",
                    fontSize: "13px",
                    color: "#191C1D",
                  }}
                >
                  {transaction.items}
                </td>

                <td style={{ padding: "14px 16px" }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 8px",
                      borderRadius: "6px",
                      backgroundColor:
                        transaction.payment === "UPI"
                          ? "#E3F0FF"
                          : transaction.payment === "Card"
                            ? "#E8F7EF"
                            : "#F1F3F5",
                      color:
                        transaction.payment === "UPI"
                          ? "#0058BE"
                          : transaction.payment === "Card"
                            ? "#00855B"
                            : "#424754",
                      fontSize: "12px",
                      fontWeight: 600,
                      "& svg": {
                        fontSize: "15px",
                      },
                    }}
                  >
                    {transaction.icon}
                    {transaction.payment}
                  </Box>
                </td>

                <td
                  style={{
                    padding: "14px 16px",
                    textAlign: "right",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#191C1D",
                  }}
                >
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
    </Card>
  );
};

export default RecentTransactions;