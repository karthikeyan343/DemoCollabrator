import jsPDF from "jspdf";

const generateReceiptPDF = ({
  total,
  paymentMethod,
  amountReceived,
  change,
}) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [80, 150],
  });
  const centerX = 40;
  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("PAYMENT SUCCESSFUL", centerX, 15, {
    align: "center",
  });
  // Invoice
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(
    "Invoice: INV-2026-001245",
    centerX,
    23,
    { align: "center"}
  );

  doc.line(8, 28, 72, 28);

  // Payment Details
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text("PAYMENT DETAILS", 8, 38);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  // Amount Paid
  doc.text("Amount Paid", 8, 48);
  doc.text(
    `INR ${total.toFixed(2)}`,
    72,
    48,
    { align: "right" }
  );

  // Payment Method
  doc.text("Payment Method", 8, 58);
  doc.text(
    paymentMethod,
    72,
    58,
    { align: "right" }
  );

  let currentY = 68;

  // Cash details
  if (paymentMethod === "Cash") {
    doc.text("Amount Received", 8, currentY);

    doc.text(
      `INR ${amountReceived.toFixed(2)}`,
      72,
      currentY,
      { align: "right" }
    );

    currentY += 10;

    doc.text("Change Returned", 8, currentY);

    doc.text(
      `INR ${change.toFixed(2)}`,
      72,
      currentY,
      { align: "right" }
    );

    currentY += 10;
  }

  doc.line(8, currentY, 72, currentY);

  currentY += 12;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);

  doc.text(
    "Thank you for your payment!",
    centerX,
    currentY,
    { align: "center" }
  );

  currentY += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);

  doc.text(
    "This is a computer-generated receipt.",
    centerX,
    currentY,
    { align: "center" }
  );

  doc.save(
    "payment-receipt-INV-2026-001245.pdf"
  );
};

export default generateReceiptPDF;