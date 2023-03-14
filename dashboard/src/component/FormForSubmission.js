import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    status: "",
    repositoryName: "",
    queuedAt: "",
    scanningAt: "",
    finishedAt: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');
    try {
      const response = await fetch("http://localhost:4011/create-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Select a status</option>
          <option value="Queued">Queued</option>
          <option value="In Progress">In Progress</option>
          <option value="Success">Success</option>
          <option value="Failure">Failure</option>
        </select>
      </label>
      <label>
        Repository Name:
        <input
          type="text"
          name="repositoryName"
          value={formData.repositoryName}
          onChange={handleChange}
        />
      </label>
      <label>
        Queued At:
        <input
          type="datetime-local"
          name="queuedAt"
          value={formData.queuedAt}
          onChange={handleChange}
        />
      </label>
      <label>
        Scanning At:
        <input
          type="datetime-local"
          name="scanningAt"
          value={formData.scanningAt}
          onChange={handleChange}
        />
      </label>
      <label>
        Finished At:
        <input
          type="datetime-local"
          name="finishedAt"
          value={formData.finishedAt}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
