import React from "react";
import Header from "../Header";
import "./index.css";
import NavSection from "../NavSection";
const CreateAnimal = () => {
  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          <div className="form-header-button-card">
            <h1 className="main-heading">CREATING ANIMALS</h1>
            <button className="form-mating-btn">Add Animal</button>
          </div>
          <form className="form-main-container">
            <section className="form-section-one-card">
              <div className="section-one-firt-card">
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Category</label>
                    <select className="input-select-card">
                      <option>Dummy-1</option>
                      <option>Dummy-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Location</label>
                    <select className="input-select-card">
                      <option>Location-1</option>
                      <option>Location-2</option>
                    </select>
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Weight</label>
                    <input
                      type="number"
                      placeholder="Enter Weight"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                  <div className="input-checkbox-container">
                    <input type="checkbox" className="input-checkbox-card" />
                    <label
                      className="input-label"
                      style={{ margin: "0px 5px" }}
                    >
                      Is Active
                    </label>
                  </div>
                </div>
              </div>
              <div className="section-one-firt-card">
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Label</label>
                    <input
                      type="number"
                      placeholder="Label"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Offered To</label>
                    <input
                      type="number"
                      placeholder="Offered To"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Reserved For</label>
                    <input
                      type="number"
                      placeholder="Reserved For"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Others</label>
                    <input
                      type="number"
                      placeholder="Others"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="section-one-firt-card">
                <div className="input-complete-containers">
                  <label className="input-label">Owner</label>
                  <select className="input-select-card">
                    <option>Dummy-1</option>
                    <option>Dummy-2</option>
                  </select>
                </div>
                <div className="input-complete-containers">
                  <label className="input-label">
                    Notes (Printed on Client's Reports)
                  </label>
                  <textarea style={{ width: "100%", padding: "5px" }} />
                </div>
                <div className="section-one-input-card">
                  <div className="input-checkbox-container">
                    <input type="checkbox" className="input-checkbox-card" />
                    <label
                      className="input-label"
                      style={{ margin: "0px 5px" }}
                    >
                      Used for the growth curve
                    </label>
                  </div>
                  <div className="input-checkbox-container">
                    <input type="checkbox" className="input-checkbox-card" />
                    <label
                      className="input-label"
                      style={{ margin: "0px 5px" }}
                    >
                      Nuetered Animal
                    </label>
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div
                    className="input-checkbox-container"
                    style={{ width: "100%" }}
                  >
                    <input type="checkbox" className="input-checkbox-card" />
                    <label
                      className="input-label"
                      style={{ margin: "0px 5px" }}
                    >
                      In Use or to be used in procedure
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <section className="form-section-one-card">
              <div className="section-one-firt-card">
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Class</label>
                    <select className="input-select-card">
                      <option>Class-1</option>
                      <option>Class-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Species</label>
                    <select className="input-select-card">
                      <option>Species-1</option>
                      <option>Species-2</option>
                    </select>
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Breed</label>
                    <select className="input-select-card">
                      <option>Breed-1</option>
                      <option>Breed-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Gender</label>
                    <select className="input-select-card">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Tattoo</label>
                    <input
                      type="number"
                      placeholder="Enter Tattoo"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Chip</label>
                    <input
                      type="number"
                      placeholder="Enter Chip"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Origin</label>
                    <select className="input-select-card">
                      <option>Origin-1</option>
                      <option>Origin-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Behavior</label>
                    <select className="input-select-card">
                      <option>Behavior-1</option>
                      <option>Behavior-2</option>
                    </select>
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Color</label>
                    <select className="input-select-card">
                      <option>color-1</option>
                      <option>color-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Fur</label>
                    <select className="input-select-card">
                      <option>Fur-1</option>
                      <option>Fur-2</option>
                    </select>
                  </div>
                </div>
                <div className="input-complete-containers">
                  <label className="input-label">Defect</label>
                  <select className="input-select-card">
                    <option>Dummy-1</option>
                    <option>Dummy-2</option>
                  </select>
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
                  <p style={{ fontSize: "12px", fontWeight: "500" }}>EXIT</p>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Planned Date</label>
                    <input
                      type="date"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Real Date</label>
                    <input
                      type="date"
                      className="input-select-card"
                      style={{ paddingLeft: "5px" }}
                    />
                  </div>
                </div>
                <div className="section-one-input-card">
                  <div className="input-containers">
                    <label className="input-label">Exit Reason</label>
                    <select className="input-select-card">
                      <option>Dummy-1</option>
                      <option>Dummy-2</option>
                    </select>
                  </div>
                  <div className="input-containers">
                    <label className="input-label">Destination</label>
                    <select className="input-select-card">
                      <option>Location-1</option>
                      <option>Location-2</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </main>
      </div>
    </div>
  );
};
export default CreateAnimal;
