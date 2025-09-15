import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { addToLedger } from "../utils/mockBlockchain";

export default function TouristIDCard({ data }) {
  const id = "TID-" + Math.floor(Math.random() * 100000);
  const payload = { ...data, id };

  // Add to mock blockchain ledger
  addToLedger("ID_GENERATED", payload);

  return (
    <div
      style={{
        width: "360px",
        border: "2px solid #222",
        borderRadius: "16px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        color: "#111",
        margin: "20px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#1e3a8a" }}>
          Digital Tourist ID
        </h2>
        <p style={{ fontSize: "12px", color: "#555" }}>
          Government of Tourism Authority
        </p>
        <hr style={{ borderColor: "#aaa", marginTop: "10px" }} />
      </div>

      {/* User Details */}
      <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#222" }}>
        <p><b>Tourist ID:</b> {id}</p>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Passport:</b> {data.passport}</p>
        <p><b>Validity:</b> {data.from} → {data.to}</p>
        <p><b>Emergency Contact:</b> {data.emergency}</p>
      </div>

      {/* QR Code */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px",
            border: "1px solid #222",
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          <QRCodeCanvas value={JSON.stringify(payload)} size={140} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", fontSize: "12px", color: "#555", marginTop: "15px" }}>
        Issued & Verified via Secure Blockchain Ledger
      </div>
    </div>
  );
}
