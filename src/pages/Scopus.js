import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Scopus.css";

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
            <li key={index} className="journal-item">
              
              <span className="journal-text">
                <strong>{index + 1}.</strong> {item.author}, {item.title}, {item.year}.
              </span>

              <button
                className="pdf-btn"
                onClick={() => window.location.href = item.pdf}
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