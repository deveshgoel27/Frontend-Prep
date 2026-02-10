import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) {
      setError("Both name and age are required.");
      return;
    }

    if (age < 18 || age > 60) {
      setError("Age must be between 18 and 60.");
      return;
    }

    setError("");
    alert(`Form submitted:\nName: ${name}\nAge: ${age}`);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
