import React from "react";
import "./Aboutus.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegDoc = () => {
  // state for controlled input fields
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Nairobi");
  const [license_number, setLicenceNumber] = useState(11111111);
  const [specialization, setSpecialization] = useState("Dentistry");
  const [phone_number, setPhone_number] = useState(17955457183);
  const [picture_link, setpicture_link] = useState("fygggfff");
  const [years_of_experience, setYears_of_experience] = useState(2);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = {
      name,
      license_number,
      location,
      specialization,
      phone_number,
      picture_link,
      years_of_experience,
    };

    fetch("http://localhost:9292/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    }).then(() => {
      console.log("New doctor added successfuly");
      navigate("/viewdoc");
    });
  };

  return (
    <div class="container">
      <form>
        <p>Report terror incident</p>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Place</span>
            <input
              value={name}
              placeholder="Enter location of incident"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="input-box">
            <span class="details">Incident</span>
            <input
              value={license_number}
              placeholder="Describe terror incident"
              required
              onChange={(e) => {
                setLicenceNumber(e.target.value);
              }}
            />
          </div>
          <div class="input-box">
            <span class="details">Number of injuries</span>
            <select
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="0">None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="More than 2">More than 2</option>
            </select>
          </div>
          <div class="input-box">
            <span class="details">Date</span>
            <select
              value={specialization}
              required
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="1">Today</option>
              <option value="2">Yesterday</option>
              <option value="3">Last Week</option>
              <option value="4">Last Month</option>
            </select>
          </div>
          <button type="submit" onClick={handleSubmit} className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegDoc;
