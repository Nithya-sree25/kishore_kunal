import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Scopus() {
  const [scopus, setScopus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "journals"));
      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(item => item.category === "Scopus");

      setScopus(data);
    };                      

    fetchData();
  }, []);

  return (
  <section className="journal">

    <h1 className="journal-title">Scopus Journal</h1>

    <div className="journal-card">

      <ol style={{ paddingLeft: "20px" }}>
        {scopus.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px"
            }}
          >
            <span style={{ flex: 1, textAlign: "justify" }}>
              <strong style={{ marginRight: "5px" }}>{index + 1}.</strong>
              {item.author}, {item.title}, {item.year}.
            </span>

            <button
              onClick={() => window.open(item.pdf, "_blank")}
              style={{
                marginLeft: "10px",
                backgroundColor: "#e91e63",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}
            >
              View PDF
            </button>
          </li>
        ))}
      </ol>

    </div>

  </section>
);
}

export default Scopus;