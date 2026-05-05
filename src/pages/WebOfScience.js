import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Scopus.css"; // you can reuse same CSS

function WebOfScience() {
  const [web, setWeb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "scopusjournals"));

      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(item => item.category === "Web of Science");

      setWeb(data);
    };

    fetchData();
  }, []);

  return (
    <section className="journal">

      <h1 className="journal-title">Web of Science</h1>

      <div className="journal-card">

        <ol style={{ paddingLeft: "20px" }}>
          {web.map((item, index) => (
            <li key={index} className="journal-item">
              
              <span className="journal-text">
                <strong>{index + 1}.</strong>{" "}
                {item.author}, {item.title}, {item.year}
              </span>

              {item.pdf && (
                <button
                  className="pdf-btn"
                  onClick={() => window.open(item.pdf, "_blank")}
                >
                  View PDF
                </button>
              )}

            </li>
          ))}
        </ol>

      </div>

    </section>
  );
}

export default WebOfScience;