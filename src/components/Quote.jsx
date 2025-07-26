import React, { useEffect, useState } from "react";
import "./quote.css"; 

const Quote = () => {
  const [quote, setQuote] = useState("Loading quote...");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      setQuote(`${data[0].q} — ${data[0].a}`);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote("Stay focused. You’ve got this!");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      <p className="quote-text">{quote}</p>
      <button onClick={fetchQuote} className="quote-button">
        New Quote
      </button>
    </div>
  );
};

export default Quote;
