import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import TouristIDCard from "./components/TouristIDCard";
import LedgerLog from "./components/LedgerLog";

export default function App() {
  const [step, setStep] = useState("form");
  const [touristData, setTouristData] = useState(null);

  const handleGenerate = (form) => {
    setTouristData(form);
    setStep("id");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1e3a8a",
            marginBottom: "25px",
          }}
        >
          Yatra-Sathi Dashboard
        </h1>

        {step === "form" && <RegistrationForm onGenerate={handleGenerate} />}

        {step === "id" && (
          <div style={{ textAlign: "center" }}>
            <TouristIDCard data={touristData} />
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
              onClick={() => setStep("ledger")}
            >
              Scan & View Ledger
            </button>
          </div>
        )}

        {step === "ledger" && <LedgerLog />}
      </div>
    </div>
  );
}
