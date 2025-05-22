import React from "react";
import Header from "../Header";
import "./index.css";
import NavSection from "../NavSection";
import { IoMdEye } from "react-icons/io";
const CreateMating = () => {
  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          <div className="form-header-button-card">
            <h1 className="main-heading">CREATING Mating</h1>
          </div>
          <form className="mating-form-main-container">
            <div className="forms-sections-card">
              <section className="form-section-one-card">
                <div className="section-one-firt-card">
                    <div className="input-complete-containers">
                      <label className="input-label">Species</label>
                      <select className="input-select-card">
                        <option>Dog</option>
                        <option>Cat</option>
                      </select>
                    </div>
                  <div className="labels-container">
                    <label className="label-card">Male</label>
                    <label className="label-card">Female</label>
                  </div>
                  <label
                    className="input-label"
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    Categories
                  </label>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      {/* <label className="input-label">Category</label> */}
                      <input
                        type="text"
                        placeholder="Category"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="text"
                        placeholder="Category"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <label
                    className="input-label"
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    Tattos
                  </label>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      {/* <label className="input-label">Tatto</label> */}
                      <input
                        type="text"
                        placeholder="Tatto"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="text"
                        placeholder="Tatto"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <label
                    className="input-label"
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    Chip
                  </label>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      {/* <label className="input-label">Chip</label> */}
                      <input
                        type="text"
                        placeholder="Chip"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="number"
                        placeholder="Chip"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>

                  <label
                    className="input-label"
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    ID
                  </label>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      {/* <label className="input-label">ID</label> */}
                      <input
                        type="text"
                        placeholder="ID"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="number"
                        placeholder="ID"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="section-one-firt-card">
                  <div
                    className="input-complete-containers"
                    style={{
                      background: "#dedbdb",
                      borderRadius: "3px",
                      padding: "2px",
                    }}
                  >
                    <p style={{ fontSize: "12px", fontWeight: "500" }}>
                      Pregency Conformation
                    </p>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      <label className="input-label">Date Conformation</label>
                      <input
                        type="Date"
                        placeholder="Label"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      <label className="input-label">Method</label>
                      <select className="input-select-card">
                        <option>Select Option</option>
                        <option>method-1</option>
                        <option>method-2</option>
                      </select>
                    </div>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-checkbox-container">
                      <input type="checkbox" className="input-checkbox-card" />
                      <label
                        className="input-label"
                        style={{ margin: "0px 5px" }}
                      >
                        Pregency Confirmed
                      </label>
                    </div>
                    <div className="input-checkbox-container">
                      <input type="checkbox" className="input-checkbox-card" />
                      <label
                        className="input-label"
                        style={{ margin: "0px 5px" }}
                      >
                        ForeSeen Weaned Puppies
                      </label>
                    </div>
                  </div>
                </div>
              </section>
              <section className="form-section-one-card">
                <div className="section-one-firt-card">
                  <div
                    className="input-complete-containers"
                    style={{
                      background: "#dedbdb",
                      borderRadius: "3px",
                      padding: "2px",
                    }}
                  >
                    <p style={{ fontSize: "12px", fontWeight: "500" }}>
                      Date heat / Mating
                    </p>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      <label className="input-label">Entry Date</label>
                      <input
                        type="Date"
                        placeholder="EntryDate"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      <label className="input-label">Exit Date</label>
                      <input
                        type="Date"
                        placeholder="ExitDate"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-checkbox-container">
                      <input type="checkbox" className="input-checkbox-card" />
                      <label
                        className="input-label"
                        style={{ margin: "0px 5px" }}
                      >
                        Heat Detected & Not Mated
                      </label>
                    </div>
                  </div>
                  <div
                    className="input-complete-containers"
                    style={{
                      background: "#dedbdb",
                      borderRadius: "3px",
                      padding: "2px",
                    }}
                  >
                    <p style={{ fontSize: "12px", fontWeight: "500" }}>
                      Mating Confirmed Dates
                    </p>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      <input
                        type="Date"
                        placeholder="EntryDate"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      <button className="form-is-registred-button">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
                <div className="section-one-firt-card">
                  <div
                    className="input-complete-containers"
                    style={{
                      background: "#dedbdb",
                      borderRadius: "3px",
                      padding: "2px",
                    }}
                  >
                    <p style={{ fontSize: "12px", fontWeight: "500" }}>
                      Birth Forecast
                    </p>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-containers">
                      <label className="input-label">Exit Date</label>
                      <input
                        type="date"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                    <div className="input-containers">
                      <label className="input-label">Real BirthDate</label>
                      <input
                        type="date"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                      />
                    </div>
                  </div>

                  <div className="input-complete-containers">
                    <label className="input-label">Problems</label>
                    <textarea
                      style={{ width: "100%", padding: "5px" }}
                      placeholder="Write Points here..."
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="birth-report-from-card">
              <div className="section-one-firt-card">
                <div
                  className="input-complete-containers"
                  style={{
                    background: "#dedbdb",
                    borderRadius: "3px",
                    padding: "2px",
                  }}
                >
                  <p style={{ fontSize: "12px", fontWeight: "500" }}>
                    Animal Birth Report
                  </p>
                </div>
                <div className="form-buttos-container-card">
                  <button
                    className="form-features-button"
                    style={{ background: "blue" }}
                  >
                    <IoMdEye /> Male 0
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "green" }}
                  >
                    <IoMdEye /> Female 0
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "red" }}
                  >
                    <IoMdEye /> BD 0
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "#ffd900" }}
                  >
                    <IoMdEye /> LD 0
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "orange" }}
                  >
                    <IoMdEye /> W 0
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "#ee00ff" }}
                  >
                    <IoMdEye /> Total 0
                  </button>
                </div>
                <table className="birth-report-table">
                  <thead className="birth-rport-header">
                    <th>Birthdate</th>
                    <th>Sex</th>
                    <th>Status</th>
                    <th>Is Registred</th>
                    <th>Actions</th>
                  </thead>
                  <tbody>
                    <tr className="birth-rport-header">
                      <td>
                        <input
                          type="Date"
                          placeholder="Label"
                          className="input-select-table-card"
                          style={{
                            paddingLeft: "5px",
                            background: "tranperent",
                          }}
                        />
                      </td>
                      <td>
                        <select className="input-select-table-card">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </td>
                      <td className="animal-report-table-radios">
                        <div
                          className="radio-cards"
                          style={{ margin: "1px 5px" }}
                        >
                          <input
                            type="radio"
                            name="group"
                            id="BD"
                            style={{ marginRight: "5px" }}
                          />
                          <lable
                            htmlFor="BD"
                            style={{ color: "#000000", fontWeight: "400" }}
                          >
                            BD
                          </lable>
                        </div>
                        <div className="radio-cards">
                          <input
                            type="radio"
                            name="group"
                            id="LD"
                            style={{ marginRight: "5px" }}
                          />
                          <lable
                            htmlFor="LD"
                            style={{ color: "#000000", fontWeight: "400" }}
                          >
                            LD
                          </lable>
                        </div>
                        <div className="radio-cards">
                          <input
                            type="radio"
                            name="group"
                            id="W"
                            style={{ marginRight: "5px" }}
                          />
                          <lable
                            htmlFor="W"
                            style={{ color: "#000000", fontWeight: "400" }}
                          >
                            W
                          </lable>
                        </div>
                      </td>
                      <td>
                        <button className="form-is-registred-button">
                          Add
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button className="form-mating-btn">Save</button>
          </form>
        </main>
      </div>
    </div>
  );
};
export default CreateMating;
