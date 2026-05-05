import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Conference.css";

function Conference() {
  const [conference, setConference] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "scopusjournals"));

      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(item => item.category === "Conference");

      setConference(data);
    };

    fetchData();
  }, []);

  return (
    <section className="conference">

      <h1 className="conference-title">Conference Publication</h1>

      <div className="conference-card">
       <ol style={{ paddingLeft: "20px" }}>
  {conference.map((item, index) => (
    <li key={index} className="conference-item">
      {item.author}, {item.title}, {item.year}
    </li>
  ))}
</ol>
      </div>

    </section>
  );
}

export default Conference;