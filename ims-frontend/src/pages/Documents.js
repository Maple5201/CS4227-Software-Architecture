import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/documents")
      .then(res => setDocuments(res.data))
      .catch(err => console.error("Error fetching documents:", err));
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/documents/upload", formData);
      alert("Upload successful!");
    } catch (error) {
      alert("Upload failed!");
    }
  };

  return (
    <div className="content-container">
      <h2>Document Management</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Documents;
