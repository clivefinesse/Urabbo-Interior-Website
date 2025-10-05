import React from "react";
import { MdOutlineCall, MdMarkEmailRead, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const theme = "#191919";
  const customers = [
    { name: "Safaricom PLC", logo: "/logos/safaricom.png" },
    { name: "Equity Bank", logo: "/logos/equity.png" },
    { name: "Kenya Airways", logo: "/logos/kenyaairways.png" },
    { name: "Nation Media Group", logo: "/logos/nationmedia.png" },
    { name: "Java House Africa", logo: "/logos/java.png" },
  ];

  // Show placeholder if image fails to load
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml;utf8,<svg width='100' height='60' xmlns='http://www.w3.org/2000/svg'><rect width='100' height='60' fill='white' stroke='orange' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='orange' font-size='12'>No Logo</text></svg>";
  };

  return (
    <div style={{ backgroundColor: theme, color: "#fff", padding: "40px 0" }}>
      <div className="container">
        <img
          src="/logo-2.png"
          alt="Logo"
          style={{
            width: "120px",
            marginBottom: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <h2 className="text-warning text-center mb-3">Our Valued Customers</h2>
        {/* Evenly spaced logos */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {customers.map((customer, idx) => (
            <div key={idx} style={{ textAlign: "center", width: "120px" }}>
              <img
                src={customer.logo}
                alt={customer.name}
                style={{
                  width: "100px",
                  height: "60px",
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "5px",
                  margin: "0 auto",
                  display: "block",
                  border: "1px solid #ffc107",
                }}
                onError={handleImgError}
              />
              <div className="text-warning small mt-2">{customer.name}</div>
            </div>
          ))}
        </div>
        <hr style={{ borderColor: "#444" }} />
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-md-4 mb-2">
            <MdLocationOn className="h4 text-warning" />{" "}
            <span className="h6">WESTLANDS, BUILDING: ZURI PLAZA</span>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <MdOutlineCall className="h4 text-warning" />{" "}
            <span className="h6">+254714073163</span>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <MdMarkEmailRead className="h4 text-warning" />{" "}
            <span className="h6">sales@havencraft.com</span>
          </div>
        </div>
        <p className="mt-3 text-center">
          &copy; 2025 Havencraft Construction Limited. All rights reserved.
        </p>
      </div>
      {/*whatsapp*/}
      <div className="elfsight-app-6c2b3ebe-7fe5-46aa-a5f4-c954c639aa41"></div>
    </div>
  );
};

export default Footer;

