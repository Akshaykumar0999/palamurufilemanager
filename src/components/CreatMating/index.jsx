import React, { useContext, useState, useEffect } from "react";
import Header from "../Header";
import "./index.css";
import NavSection from "../NavSection";
import { IoMdEye } from "react-icons/io";
import { NavMenuContext } from "../../Context/navmenucontext";
import { useSelector, useDispatch } from "react-redux";
import { fetchcategories } from "../../features/Categories/categorySlice";
import { fetchcategoryType } from "../../features/Categories/categoryTypeSlice";

import { fetchmattings } from "../../features/matingSlice";
import {
  createMatingRecords,
  updateMatingRecords,
} from "../../features/matingSlice";
import { fetchAnimalChips } from "../../features/animalsChipSlice";
import { fetchAnimals, createAnimalsRecords } from "../../features/animalSlice";
import { FaRegEdit, FaDatabase } from "react-icons/fa";

const CreateMating = () => {
  const contextData = useContext(NavMenuContext);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const categoryTypes = useSelector((state) => state.categoryType.categoryType);
  const mattings = useSelector((state) => state.mattings.mattings);
  const animalChips = useSelector((state) => state.chipIDs.chipIDs);
  const animals = useSelector((state) => state.animals.animals);

  const species = categoryTypes.filter((type) => type.categoryId === 4);

  const [datesConfirmed, setDatesConfirmed] = useState(false);

  const [matingData, setMatingData] = useState({
    species: 10,
    maleTatoo: "",
    femaleTatoo: "",
    maleChipID: "",
    femaleChipID: "",
    entryDate: "",
    exitDate: "",
    BD: "",
    LD: "",
    W: "",
    otherproblmenss: "",
    isHeatedDetectedANDNotMated: 0,
    matingconfirmed1: "",
    matingconfirmed2: "",
    matingconfirmed3: "",
    EsitmatedDate: "",
    RealBirthDate: "",
    countconfdatees: "",
    userId: "",
    pregencyMethod: "",
    confirmedPergency: false,
    pregencyConfirmedDate: "",
  });

  const [animalsData, setAnimalsData] = useState({
    species: "",
    category: "",
    chip: "",
    tatoo: "",
    motherclip: "",
    fatherclip: "",
    weight: "",
    sex: "",
    birthDate: null,
    label: "",
    location: "",
    offeredTo: "",
    rereservedFor: "",
    others: "",
    isActive: 0,
    userId: 1,
    isCreated: "",
    isUpdated: "",
    matingID: "",
    status: "",
  });

  const formatDate = (isoString) => {
    return isoString ? isoString.slice(0, 10) : "";
  };

  useEffect(() => {
    dispatch(fetchcategories());
    dispatch(fetchcategoryType());
    dispatch(fetchmattings());
    dispatch(fetchAnimalChips());
    dispatch(fetchAnimals());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMatingData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //handle filter animals by female tatoos
  const handleFilteredAnimalsByFamleTatoos = animals.filter(
    (animal) => parseInt(animal.tatoo) === parseInt(matingData.femaleTatoo)
  );

  //handle filter animals by male tatoos
  const handleFilteredAnimalsByMaleTatoos = animals.filter(
    (animal) => parseInt(animal.tatoo) === parseInt(matingData.maleTatoo)
  );

  // Function to handle the form submission for adding mating records
  const AddMatingFormDetails = (e) => {
    e.preventDefault();
    const newMatingData = {
      ...matingData,
      species: parseInt(matingData.species, 10), // Ensure species is an integer
      isHeatedDetectedANDNotMated: matingData.isHeatedDetectedANDNotMated
        ? 1
        : 0, // Convert to boolean
      femaleChipID: handleFilteredAnimalsByFamleTatoos[0]?.motherclip || "",
      maleChipID: handleFilteredAnimalsByMaleTatoos[0]?.fatherclip || "",
      exitDate: matingData.exitDate || "",
      EsitmatedDate: matingData.EsitmatedDate || "",
      userId: 1,
    };
    console.log("Adding Mating Data:", newMatingData);
    dispatch(createMatingRecords(newMatingData));
  };
  const exitingActiveMatingData =
    contextData.openEdit &&
    mattings.filter((record) => record.matingID === contextData.activeMateID);

  useEffect(() => {
    if (contextData.openEdit && exitingActiveMatingData.length > 0) {
      const activeMating = exitingActiveMatingData[0];
      setMatingData({
        species: activeMating.species, // Default to the first species if available
        maleTatoo: activeMating.maleTatoo,
        femaleTatoo: activeMating.femaleTatoo,
        maleChipID: activeMating.maleChipID,
        femaleChipID: activeMating.femaleChipID,
        entryDate: formatDate(activeMating.entryDate),
        exitDate: formatDate(activeMating.exitDate),
        BD: activeMating.BD || "",
        LD: activeMating.LD || "",
        W: activeMating.W || "",
        isHeatedDetectedANDNotMated:
          activeMating.isHeatedDetectedANDNotMated === 1,
        MatingconfirmedDate: activeMating.MatingconfirmedDate || "",
        EsitmatedDate: formatDate(activeMating.EsitmatedDate) || "",
        RealBirthDate: formatDate(activeMating.RealBirthDate) || "",
        matingID: activeMating.matingID || "",
        countconfdatees: activeMating.countconfdatees || "",
        userId: activeMating.userId || "",
        pregencyMethod: activeMating.pregencyMethod,
        confirmedPergency: activeMating.confirmedPergency,
        pregencyConfirmedDate: formatDate(activeMating.pregencyConfirmedDate),
        matingconfirmed1: formatDate(activeMating.matingconfirmed1),
        matingconfirmed2: formatDate(activeMating.matingconfirmed2),
        matingconfirmed3: formatDate(activeMating.matingconfirmed3),
      });
    }
  }, [contextData.openEdit, exitingActiveMatingData]);
  // useEffect(() => {
  //   if (contextData.openEdit && exitingActiveMatingData.length > 0) {
  //     const activeMating = exitingActiveMatingData[0];
  //     setMatingData((prev) => ({
  //       ...prev,
  //       species: activeMating.species,
  //       matingconfirmed1: formatDate(activeMating.matingconfirmed1),
  //       matingconfirmed2: formatDate(activeMating.matingconfirmed2),
  //       matingconfirmed3: formatDate(activeMating.matingconfirmed3),
  //     }));
  //   }
  // }, [contextData.openEdit, exitingActiveMatingData]);

  const UpdateMatingData = (e) => {
    e.preventDefault();
    // console.log("Updating Mating Data:", matingData);
    contextData.setOpenEdit(false);
    const newMatingData = {
      ...matingData,
      species: parseInt(matingData.species, 10), // Ensure species is an integer
      isHeatedDetectedANDNotMated: matingData.isHeatedDetectedANDNotMated
        ? 1
        : 0, // Convert to boolean
      userId: 1,
      matingconfirmed1: matingData.matingconfirmed1,
      matingconfirmed2: matingData.matingconfirmed2,
      matingconfirmed3: matingData.matingconfirmed3,
      pregencyMethod: matingData.pregencyMethod,
      confirmedPergency: matingData.confirmedPergency ? 1 : 0, // Convert to boolean
      pregencyConfirmedDate: matingData.pregencyConfirmedDate,
    };
    console.log("Updated Mating Data:", newMatingData);
    dispatch(updateMatingRecords(newMatingData));
    setMatingData({
      species: species.length > 0 && species[0].id,
      tatoo: "",
      maleChipID: "",
      femaleChipID: "",
      entryDate: "",
      exitDate: "",
      BD: "",
      LD: "",
      W: "",
      otherproblmenss: "",
      isHeatedDetectedANDNotMated: 0,
      MatingconfirmedDate: "",
      EsitmatedDate: "",
      RealBirthDate: "",
      countconfdatees: "",
      userId: "",
      matingconfirmed1: "",
      matingconfirmed2: "",
      matingconfirmed3: "",
      pregencyMethod: "",
      confirmedPergency: false,
      pregencyConfirmedDate: "",
    });
  };

  const extractMaleChips = animalChips.filter(
    (eachChip) =>
      parseInt(eachChip.FemaleT) === parseInt(matingData.femaleChipID)
  );

  // Function to handle the form submission for adding animal data
  const handleAddAnimalData = async (e) => {
    e.preventDefault();
    const newAnimalData = {
      ...animalsData,
      species: 10,
      category: 1, // Assuming a static category for now
      tatoo: matingData.tatoo || "",
      motherclip: String(matingData.femaleChipID),
      fatherclip: String(matingData.maleChipID),
      matingID: String(matingData.matingID),
      weight: 2 || "",
      userId: 1,
      status: animalsData.status,
      birthDate: animalsData.birthDate,
      location: 13,
    };
    console.log("Adding Animal Data:", newAnimalData);
    try {
      await dispatch(createAnimalsRecords(newAnimalData)); // ✅ unwrap to catch errors
      alert("Animal data created successfully");
      setAnimalsData({
        species: "",
        category: "",
        chip: "",
        tatoo: "",
        motherclip: "",
        fatherclip: "",
        weight: "",
        sex: "",
        birthDate: null,
        label: "",
        location: "",
        offeredTo: "",
        rereservedFor: "",
        others: "",
        isActive: 0,
        userId: 1,
        isCreated: "",
        isUpdated: "",
        matingID: "",
        status: "",
      });
    } catch (error) {
      console.error("Failed to create animal:", error);
      alert("Failed to create animal record");
    }
  };

  // useEffect(() => {
  //   if (handleFilteredAnimalsByFamleTatoos?.length > 0) {
  //     setMatingData((prev) => ({
  //       ...prev,
  //       femaleChipID: handleFilteredAnimalsByFamleTatoos[0].motherclip,
  //     }));
  //   }
  // }, [handleFilteredAnimalsByFamleTatoos]);

  // useEffect(() => {
  //   if (matingData.isHeatedDetectedANDNotMated === true) {
  //     // alert(
  //     //   "If In the Animal Heat Detected & Not Mated Then It's End Of this Mating Process."
  //     // );
  //     setMatingData((prevData) => ({
  //       ...prevData,
  //       matingconfirmed1: "",
  //       matingconfirmed2: "",
  //       matingconfirmed3: "",
  //       EsitmatedDate: "",
  //     }));
  //   }
  // }, matingData.isHeatedDetectedANDNotMated);

  useEffect(() => {
    if (!isNaN(Date.parse(matingData.entryDate))) {
      const date = new Date(matingData.entryDate);
      date.setDate(date.getDate() + 15);
      const result = date.toISOString().split("T")[0];
      setMatingData((prevData) => ({
        ...prevData,
        exitDate: result,
      }));
    }
  }, [matingData.entryDate]);

  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          <div className="form-header-button-card">
            <h1 className="main-heading">CREATE MATING</h1>
          </div>
          <form className="mating-form-main-container">
            <div className="forms-sections-card">
              <section className="form-section-one-card">
                <div className="section-one-firt-card">
                  <div className="input-complete-containers">
                    <label className="input-label">Species</label>
                    <select
                      className="input-select-card"
                      onChange={handleInputChange}
                      name="species"
                      value={matingData.species} // controlled value
                    >
                      {species.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
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
                        placeholder="Breeder"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        onChange={handleInputChange}
                        name="Breeder"
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="text"
                        placeholder="Breeder"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        onChange={handleInputChange}
                        name="category"
                        value="Breeder"
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
                      <select
                        className="input-select-card"
                        onChange={handleInputChange}
                        name="maleTatoo"
                        value={matingData.maleTatoo}
                      >
                        {animals.map((chip, i) => {
                          if (chip.sex === "male") {
                            return (
                              <option key={i} value={chip.tatoo}>
                                {chip.tatoo}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                    <div className="input-containers">
                      <select
                        className="input-select-card"
                        onChange={handleInputChange}
                        name="femaleTatoo"
                        value={matingData.femaleTatoo}
                      >
                        {animals.map((chip) => {
                          if (chip.sex === "female") {
                            return (
                              <option key={chip.tatoo} value={chip.tatoo}>
                                {chip.tatoo}
                              </option>
                            );
                          }
                        })}
                      </select>
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
                      <select
                        className="input-select-card"
                        // onChange={handleInputChange}
                        name="maleChipID"
                        readOnly
                        value={
                          handleFilteredAnimalsByMaleTatoos[0]?.fatherclip || ""
                        }
                      >
                        {animals.map((chip, i) => (
                          <option key={i} value={chip.fatherclip}>
                            {chip.fatherclip}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input-containers">
                      <input
                        type="text"
                        className="input-select-card"
                        placeholder="FemaleChipID"
                        style={{ paddingLeft: "5px" }}
                        name="femaleChipID"
                        value={
                          handleFilteredAnimalsByFamleTatoos[0]?.motherclip ||
                          ""
                        }
                        readOnly // optional: make it read-only if you don't want user input
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
                        readOnly
                        // onChange={handleInputChange}
                        // name="matingID"
                        value={
                          handleFilteredAnimalsByMaleTatoos[0]?.animalID || ""
                        } // controlled value
                      />
                    </div>
                    <div className="input-containers">
                      {/* <label className="input-label"></label> */}
                      <input
                        type="number"
                        placeholder="ID"
                        className="input-select-card"
                        readOnly
                        style={{ paddingLeft: "5px" }}
                        value={
                          handleFilteredAnimalsByFamleTatoos[0]?.animalID || ""
                        } // controlled value
                      />
                    </div>
                  </div>
                </div>
                {contextData.openEdit &&
                  !matingData.isHeatedDetectedANDNotMated && (
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
                          <label className="input-label">
                            Date Conformation
                          </label>
                          <input
                            type="Date"
                            placeholder="Label"
                            className="input-select-card"
                            style={{ paddingLeft: "5px" }}
                            onChange={handleInputChange}
                            name="pregencyConfirmedDate"
                            value={matingData.pregencyConfirmedDate || ""} // controlled value
                          />
                        </div>
                        <div className="input-containers">
                          <label className="input-label">Method</label>
                          <select
                            className="input-select-card"
                            onChange={handleInputChange}
                            name="pregencyMethod"
                            value={matingData.pregencyMethod || ""}
                          >
                            <option value="External view">External view</option>
                            <option value="Abdominal palpation">
                              Abdominal palpation
                            </option>
                            <option value="Relaxin test">Relaxin test</option>
                            <option value="Ultrasound">Ultrasound</option>
                          </select>
                        </div>
                      </div>
                      <div className="section-one-input-card">
                        <div className="input-checkbox-container">
                          <input
                            type="checkbox"
                            className="input-checkbox-card"
                            id="pregencyConfirmed"
                            onChange={handleInputChange}
                            name="confirmedPergency"
                            checked={matingData.confirmedPergency} // controlled value
                          />
                          <label
                            className="input-label"
                            style={{ margin: "0px 5px", cursor: "pointer" }}
                            htmlFor="pregencyConfirmed"
                          >
                            Pregency Confirmed
                          </label>
                        </div>
                        {matingData.confirmedPergency && (
                          <div className="input-containers">
                            <label className="input-label">
                              confirm Pregency Date
                            </label>
                            <input
                              type="Date"
                              placeholder="Label"
                              className="input-select-card"
                              style={{ paddingLeft: "5px" }}
                              // onChange={handleInputChange}
                              // name="pregencyConfirmedDate"
                              // value={matingData.pregencyConfirmedDate || ""} // controlled value
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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
                        onChange={handleInputChange}
                        name="entryDate"
                        value={matingData.entryDate || ""} // controlled value
                      />
                    </div>
                    <div className="input-containers">
                      <label className="input-label">Exit Date</label>
                      <input
                        type="Date"
                        placeholder="ExitDate"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        onChange={handleInputChange}
                        name="exitDate"
                        value={matingData.exitDate || ""} // controlled value
                      />
                    </div>
                  </div>
                  <div className="section-one-input-card">
                    <div className="input-checkbox-container">
                      <input
                        type="checkbox"
                        className="input-checkbox-card"
                        id="isHeatedDetectedANDNotMated"
                        checked={matingData.isHeatedDetectedANDNotMated} // controlled value
                        onChange={handleInputChange}
                        name="isHeatedDetectedANDNotMated"
                      />
                      <label
                        className="input-label"
                        style={{ margin: "0px 5px" }}
                        htmlFor="isHeatedDetectedANDNotMated"
                      >
                        Heat Detected & Not Mated
                      </label>
                    </div>
                  </div>
                  {!matingData.isHeatedDetectedANDNotMated && (
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
                  )}
                  {!matingData.isHeatedDetectedANDNotMated && (
                    <div className="section-one-input-card">
                      <div className="input-containers">
                        <label className="input-label">
                          Mating Confirmed 1
                        </label>
                        <input
                          type="date"
                          onChange={handleInputChange}
                          className="input-select-card"
                          name="matingconfirmed1"
                          value={matingData.matingconfirmed1}
                        />
                      </div>

                      <div className="input-containers">
                        <label className="input-label">
                          Mating Confirmed 2
                        </label>
                        <input
                          type="date"
                          onChange={handleInputChange}
                          className="input-select-card"
                          name="matingconfirmed2"
                          value={matingData.matingconfirmed2}
                        />
                      </div>
                    </div>
                  )}
                  {!matingData.isHeatedDetectedANDNotMated && (
                    <div className="section-one-input-card">
                      <div className="input-containers">
                        <label className="input-label">
                          Mating Confirmed 3
                        </label>
                        <input
                          type="date"
                          className="input-select-card"
                          onChange={handleInputChange}
                          name="matingconfirmed3"
                          value={matingData.matingconfirmed3}
                        />
                      </div>

                      <div className="input-containers">
                        {
                          // (matingData.matingconfirmed1 === "" ||
                          //   matingData.matingconfirmed2 === "" ||
                          //   matingData.matingconfirmed3 === "" ||
                          //   contextData.openEdit)
                          (matingData.matingconfirmed1 !== "" ||
                            matingData.matingconfirmed2 !== "") && (
                            <button
                              className="form-is-registred-button"
                              type="button"
                              onClick={() => {
                                if (
                                  !isNaN(
                                    Date.parse(matingData.matingconfirmed1)
                                  )
                                ) {
                                  const date = new Date(
                                    matingData.matingconfirmed1
                                  );
                                  date.setDate(date.getDate() + 62);
                                  const result = date
                                    .toISOString()
                                    .split("T")[0];
                                  setMatingData((prevData) => ({
                                    ...prevData,
                                    EsitmatedDate: result,
                                  }));
                                } else {
                                  console.error(
                                    "❌ Invalid date format:",
                                    matingData.matingconfirmed1
                                  );
                                }
                              }}
                            >
                              Add
                            </button>
                          )
                        }
                        {/* {
                          (matingData.matingconfirmed2 === "" && matingData.matingconfirmed1 !== "") && (
                            <button
                              className="form-is-registred-button"
                              type="button"
                            >
                              Add 2
                            </button>
                          )
                        } */}
                        {matingData.matingconfirmed3 !== "" &&
                          matingData.matingconfirmed2 !== "" &&
                          matingData.matingconfirmed1 !== "" && (
                            <button
                              type="button"
                              className="form-is-registred-button"
                              onClick={() => {
                                setDatesConfirmed(true),
                                  alert("All 3 Dates Confirmed");
                              }}
                            >
                              Confirm
                            </button>
                          )}
                      </div>
                    </div>
                  )}
                </div>
                {!matingData.isHeatedDetectedANDNotMated && (
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
                        <label className="input-label">Estd Date</label>
                        <input
                          type="date"
                          className="input-select-card"
                          style={{ paddingLeft: "5px" }}
                          name="EsitmatedDate"
                          readOnly
                          value={matingData.EsitmatedDate || ""} // controlled value
                        />
                      </div>
                      <div className="input-containers">
                        <label className="input-label">Real BirthDate</label>
                        <input
                          type="date"
                          className="input-select-card"
                          style={{ paddingLeft: "5px" }}
                          onChange={handleInputChange}
                          name="RealBirthDate"
                          value={matingData.RealBirthDate || ""} // controlled value
                        />
                      </div>
                    </div>
                    {/* 
                  <div className="input-complete-containers">
                    <label className="input-label">Problems</label>
                    <textarea
                      style={{ width: "100%", padding: "5px" }}
                      placeholder="Write Points here..."
                      onChange={handleInputChange}
                      name="otherproblmenss"
                      value={matingData.otherproblmenss || ""} // controlled value
                    />
                  </div> */}
                  </div>
                )}
              </section>
            </div>
            {contextData.openEdit &&
              !matingData.isHeatedDetectedANDNotMated && (
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
                      <p
                        className="form-features-button"
                        style={{ background: "blue" }}
                      >
                        <IoMdEye /> Male 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "green" }}
                      >
                        <IoMdEye /> Female 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "red" }}
                      >
                        <IoMdEye /> BD 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "#ffd900" }}
                      >
                        <IoMdEye /> LD 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "orange" }}
                      >
                        <IoMdEye /> W 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "#ee00ff" }}
                      >
                        <IoMdEye /> Total 0
                      </p>
                    </div>
                    <table className="birth-report-table">
                      <thead className="birth-rport-header">
                        <th className="birth-report-body-rows">Birthdate</th>
                        <th className="birth-report-body-rows">Sex</th>
                        <th className="birth-report-body-rows">Status</th>
                        <th className="birth-report-body-rows">
                          Is Registred / Actions
                        </th>
                      </thead>
                      <tbody>
                        <tr className="animal-report-records-rows">
                          <td>
                            <input
                              type="Date"
                              placeholder="Label"
                              className="input-select-table-card"
                              style={{
                                paddingLeft: "5px",
                                background: "tranperent",
                              }}
                              name="birthDate"
                              value={animalsData.birthDate || ""} // controlled value
                              onChange={(e) =>
                                setAnimalsData((prevData) => ({
                                  ...prevData,
                                  birthDate: e.target.value,
                                }))
                              }
                            />
                          </td>
                          <td>
                            <select
                              className="input-select-table-card"
                              name="sex"
                              onChange={(e) =>
                                setAnimalsData((prevData) => ({
                                  ...prevData,
                                  sex: e.target.value,
                                }))
                              }
                              value={animalsData.sex || ""} // controlled value
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </td>
                          <td className="animal-report-table-radios">
                            <div
                              className="radio-cards"
                              style={{ margin: "1px 5px" }}
                            >
                              <input
                                type="radio"
                                name="status"
                                id="BD"
                                value="BD"
                                checked={animalsData.status === "BD"}
                                onChange={(e) =>
                                  setAnimalsData((prevData) => ({
                                    ...prevData,
                                    status: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor="BD"
                                style={{ color: "#000000", fontWeight: "400" }}
                              >
                                BD
                              </label>
                            </div>
                            <div className="radio-cards">
                              <input
                                type="radio"
                                name="status"
                                id="LD"
                                value="LD"
                                checked={animalsData.status === "LD"}
                                onChange={(e) =>
                                  setAnimalsData((prevData) => ({
                                    ...prevData,
                                    status: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor="LD"
                                style={{ color: "#000000", fontWeight: "400" }}
                              >
                                LD
                              </label>
                            </div>
                            <div className="radio-cards">
                              <input
                                type="radio"
                                name="status"
                                id="W"
                                value="W"
                                checked={animalsData.status === "W"}
                                onChange={(e) =>
                                  setAnimalsData((prevData) => ({
                                    ...prevData,
                                    status: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor="W"
                                style={{ color: "#000000", fontWeight: "400" }}
                              >
                                W
                              </label>
                            </div>
                          </td>
                          <td>
                            <button
                              className="form-is-registred-button"
                              type="button"
                              onClick={handleAddAnimalData}
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                        {animals.map((animal) => (
                          <tr
                            className="birth-rport-header"
                            style={{
                              marginTop: "10px",
                              backgroundColor: "#f5f5f5",
                            }}
                          >
                            <td
                              className="animal-report-records-rows"
                              style={{ backgroundColor: "#f5f5f5" }}
                            >
                              {animal.birthDate}
                            </td>
                            <td
                              className="animal-report-records-rows"
                              style={{ backgroundColor: "#f5f5f5" }}
                            >
                              {animal.sex}
                            </td>
                            <td
                              className="animal-report-records-rows"
                              style={{ backgroundColor: "#f5f5f5" }}
                            >
                              {
                                // (animal.W !== 0 && "W")(
                                //   animal.LD !== 0 && "LD"
                                // )(animal.BD !== 0 ? "BD": "")

                                animal.status
                              }
                            </td>
                            <td
                              className="animal-report-records-rows"
                              style={{ backgroundColor: "#f5f5f5" }}
                            >
                              <button className="edit-button">Edit</button>{" "}
                              <button className="delete-btn">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* <table
                    className="babaies-birth-report-records"
                    style={{ marginTop: "10px" }}
                  >
                    <tbody>
                      <tr className="babaies-birth-report-records">
                        <td className="animal-report-records-rows">
                          12/07/2025
                        </td>
                        <td className="animal-report-records-rows">Male</td>
                        <td className="animal-report-records-rows">W</td>
                        <td className="animal-report-records-rows">
                          <button className="edit-button">Edit</button>{" "}
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  </div>
                </div>
              )}
            {contextData.openEdit ? (
              <div className="form-edit-buttons">
                <button
                  className="form-mating-Edit-btn"
                  onClick={UpdateMatingData}
                >
                  <FaRegEdit size={15} style={{ marginRight: "2px" }} /> Edit
                </button>
              </div>
            ) : (
              <button
                className="form-mating-btn"
                onClick={AddMatingFormDetails}
              >
                <FaDatabase size={15} style={{ marginRight: "2px" }} />
                Save
              </button>
            )}
          </form>
        </main>
      </div>
    </div>
  );
};
export default CreateMating;
