import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Scopus.css";

function ABDC() {
  const [abdc, setAbdc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "scopusjournals"));

      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(item => item.category === "ABDC");

      setAbdc(data);
    };

    fetchData();
  }, []);

  return (
    <section className="journal">
      <h1 className="journal-title">ABDC Journal</h1>

      <div className="journal-card">
        <ol style={{ paddingLeft: "20px" }}>
          {abdc.map((item, index) => (
            <li key={index} className="journal-item">
              <span className="journal-text">
                <strong>{index + 1}.</strong>{" "}
                {item.author}, {item.title}, {item.year}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ABDC;