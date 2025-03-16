import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

function Collaboration() {
  const [content, setContent] = useState("");
  const [docId, setDocId] = useState("123");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/documents/${docId}`)
      .then(res => setContent(res.data.content))
      .catch(err => console.error("Error fetching document:", err));
  }, [docId]);

  const saveDocument = () => {
    axios.post(`http://localhost:8080/api/documents/${docId}`, { content })
      .then(() => alert("Document saved successfully!"))
      .catch(err => console.error("Error saving document:", err));
  };

  return (
    <div className="content-container">
      <h2>Collaboration Editing</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea"
      />
      <button onClick={saveDocument}>Save</button>
    </div>
  );
}

export default Collaboration;
