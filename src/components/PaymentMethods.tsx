"use client";

export default function PaymentMethods() {
  return (
    <div className="payment-section">
      <p className="eyebrow" style={{ marginBottom: "6px" }}>
        Secure Checkout
      </p>
      <p className="body-sm">
        Multiple secure payment options. Your data is always protected.
      </p>

      <div className="payment-methods">
        <div className="pay-chip"><span className="pay-chip-icon">📱</span>UPI</div>
        <div className="pay-chip"><span className="pay-chip-icon">G</span>Google Pay</div>
        <div className="pay-chip"><span className="pay-chip-icon">P</span>PhonePe</div>
        <div className="pay-chip"><span className="pay-chip-icon">💳</span>Credit Card</div>
        <div className="pay-chip"><span className="pay-chip-icon">💳</span>Debit Card</div>
        {/* <div className="pay-chip"><span className="pay-chip-icon">💵</span>Cash on Delivery</div> */}
        {/* <div className="pay-chip"><span className="pay-chip-icon">🔒</span>SSL Secure</div> */}
      </div>
    </div>
  );
}