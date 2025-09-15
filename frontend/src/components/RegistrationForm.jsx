// RegistrationFormUI.jsx
import React, { useState } from "react";

export default function RegistrationFormUI({ onGenerate }) {
  const [form, setForm] = useState({
    name: "",
    passport: "",
    from: "",
    to: "",
    emergency: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #222",
        borderRadius: "12px",
        backgroundColor: "#f7f7f7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
        Tourist Registration
      </h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="passport"
          placeholder="Passport / Aadhaar"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="from"
          type="date"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="to"
          type="date"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="emergency"
          placeholder="Emergency Contact"
          onChange={handleChange}
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#222",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Generate ID
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #222",
  fontSize: "14px",
};
