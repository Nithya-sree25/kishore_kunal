import React, { useEffect, useState } from "react";
import "./Certification.css";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Certification() {

  const [certifications, setCertifications] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const querySnapshot = await getDocs(
        collection(db, "certifications")
      );

      const data = querySnapshot.docs.map(doc => doc.data());

      setCertifications(data);
    };

    fetchData();

  }, []);

  return (
    <section className="certification">

      <h1 className="certification-title">
        EDUCATION & CERTIFICATIONS
      </h1>

      <div className="certification-container">

        {certifications.map((item, index) => (
          <div className="certification-card" key={index}>

            <h3>Certification {index + 1}</h3>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Certification;