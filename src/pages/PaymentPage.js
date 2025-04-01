import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function PaymentPage() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("✅ Payment Successful!");
    navigate("/");  // Redirects to HomePage
  };

  return (
    <Container className="text-center mt-5">
      <h2>💳 Payment Page</h2>
      <p>Complete your payment to confirm your booking.</p>
      <Button variant="success" onClick={handlePayment}>
        ✅ Proceed to Pay
      </Button>
    </Container>
  );
}

export default PaymentPage;
