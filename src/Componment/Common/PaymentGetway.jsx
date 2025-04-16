import React, { useRef, useState } from "react";

const PaymentGetway = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    amount: "100",
    tax_amount: "10",
    total_amount: "110",
    transaction_uuid: Date.now().toString(), // Unique transaction ID
    product_code: "EPAYTEST", // Test product code
    product_service_charge: "0",
    product_delivery_charge: "0",
    success_url: "http://localhost:3000/payment-success",
    failure_url: "http://localhost:3000/payment-failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "YOUR_GENERATED_SIGNATURE_HERE", // Replace this with a valid signature
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.submit(); // Submit form to eSewa
    }
  };

  return (
    <div>
      <h2>Pay with eSewa</h2>
      <form
        ref={formRef}
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        {Object.entries(formData).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}
        <button type="button" onClick={handleSubmit}>
          Pay with eSewa
        </button>
      </form>
    </div>
  );
};

export default PaymentGetway;
