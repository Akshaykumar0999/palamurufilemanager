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

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateMating = () => {
  const contextData = useContext(NavMenuContext);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const categoryTypes = useSelector((state) => state.categoryType.categoryType);
  const mattings = useSelector((state) => state.mattings.mattings);
  const animalChips = useSelector((state) => state.chipIDs.chipIDs);
  const animals = useSelector((state) => state.animals.animals);

  const [confirmationDateOne, setConfirmationDateOne] = useState(false);
  const [confirmationDateTwo, setConfirmationDateTwo] = useState(false);
  const [confirmationDateThree, setConfirmationDateThree] = useState(false);

  const species = categoryTypes.filter((type) => type.categoryId === 4);
  const categorory = categoryTypes.filter((type) => type.categoryId === 1);

  // const breederCategory = categorory.find((cat) => cat.name === "Breeder");
  // const defaultBreederId = breederCategory?.id || "";

  const [datesConfirmed, setDatesConfirmed] = useState(false);

  const [matingData, setMatingData] = useState({
    species: 10,
    maleTatoo: "",
    femaleTatoo: "",
    maleChipID: "",
    femaleChipID: "",
    entryDate: "",
    exitDate: "",
    ACategroy: "",
    BD: "",
    LD: "",
    W: "",
    otherproblmenss: "",
    isHeatedDetectedANDNotMated: 0,
    MatingconfirmedDate1: "",
    MatingconfirmedDate2: "",
    MatingconfirmedDate3: "",
    EsitmatedDate: "",
    RealBirthDate: "",
    countconfdatees: "",
    userId: "",
    pregencyMethod: "",
    confirmedPergency: false,
    pregencyConfirmedDate: "",
    PregnancyPreventativeTreatmentDate: "",
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

  useEffect(() => {
    if (!matingData.ACategroy && categorory.length > 0) {
      const breeder = categorory.find((cat) => cat.name === "Breeder");
      if (breeder) {
        setMatingData((prev) => ({
          ...prev,
          ACategroy: breeder.id.toString(),
        }));
      }
    }
  }, [categorory]);

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

  //mating data input event handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMatingData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //confirm date one input event handler
  const handleConfirmDateOneInput = (e) => {
    setMatingData((prev) => ({
      ...prev,
      MatingconfirmedDate1: e.target.value,
    }));
    setConfirmationDateOne(true);
    alert("Do u want to ConfirmationDate-1");
  };

  useEffect(() => {
    if (!isNaN(Date.parse(matingData.MatingconfirmedDate1))) {
      const date = new Date(matingData.MatingconfirmedDate1);
      date.setDate(date.getDate() + 62);
      const result = date.toISOString().split("T")[0];
      setMatingData((prevData) => ({
        ...prevData,
        EsitmatedDate: result,
      }));
      setConfirmationDateTwo(true);
      // setConfirmationDateOne(false);
    } else {
      console.error("❌ Invalid date format:", matingData.MatingconfirmedDate1);
    }
  }, [!isNaN(Date.parse(matingData.MatingconfirmedDate1))]);

  //confirm date two input event handler
  const handleConfirmDateTwoInput = (e) => {
    setMatingData((prev) => ({
      ...prev,
      MatingconfirmedDate2: e.target.value,
    }));
    setConfirmationDateOne(false);
    alert("Do u want to ConfirmationDate-2");
  };

  const handleConfirmDateThreeInput = (e) => {
    setMatingData((prev) => ({
      ...prev,
      MatingconfirmedDate3: e.target.value,
    }));
    setConfirmationDateOne(false);
    alert("All Three Dates are Confirmed...");
  };

  //handle filter animals by female tatoos
  // const handleFilteredAnimalsByFamleTatoos = animals.filter(
  //   (animal) => parseInt(animal.tatoo) === parseInt(matingData.femaleTatoo)
  // );

  const filteredAnimalFemaleChips = animals.filter(
    (animal) => animal.sex === "Female"
    // &&
    //   animal.chip.toString().endsWith(matingData.femaleTatoo)
  );

  const filterFemaleChips = filteredAnimalFemaleChips.filter((each) =>
    each.chip.toString().endsWith(matingData.femaleTatoo)
  );

  const filteredAnimalMaleChips = animalChips.filter(
    (animal) => animal.FemaleT.toString() === matingData.femaleChipID.toString()
  );

  const maleChipsFilterd = filteredAnimalMaleChips.filter((each) => {
    if (each.MaleT.toString().endsWith(matingData.maleTatoo)) {
      return each;
    }
    return null;
  });

  const filtermaleAnilmalsList = animals.filter(
    (animal) => animal.fatherclip === matingData.maleChipID.toString()
  );

  //handle filter animals by male tatoos
  // const handleFilteredAnimalsByMaleTatoos = animals.filter(
  //   (animal) => parseInt(animal.tatoo) === parseInt(matingData.maleTatoo)
  // );

  // Function to handle the form submission for adding mating records
  const AddMatingFormDetails = async (e) => {
    e.preventDefault();
    const newMatingData = {
      ...matingData,
      species: parseInt(matingData.species, 10), // Ensure species is an integer
      isHeatedDetectedANDNotMated: matingData.isHeatedDetectedANDNotMated
        ? 1
        : 0, // Convert to boolean
      // femaleChipID: handleFilteredAnimalsByFamleTatoos[0]?.motherclip || "",
      // maleChipID: handleFilteredAnimalsByMaleTatoos[0]?.fatherclip || "",
      exitDate: matingData.exitDate || "",
      EsitmatedDate: matingData.EsitmatedDate || "",
      PregnancyPreventativeTreatmentDate:
        matingData.PregnancyPreventativeTreatmentDate,
      userId: 1,
    };
    // console.log("Adding Mating Data:", newMatingData);
    try {
      await dispatch(createMatingRecords(newMatingData)).unwrap();
      alert("Mating record added successfully");
      setMatingData({
        species: 10,
        maleTatoo: "",
        femaleTatoo: "",
        maleChipID: "",
        femaleChipID: "",
        entryDate: "",
        exitDate: "",
        ACategroy: "",
        BD: "",
        LD: "",
        W: "",
        otherproblmenss: "",
        isHeatedDetectedANDNotMated: 0,
        MatingconfirmedDate1: "",
        MatingconfirmedDate2: "",
        MatingconfirmedDate3: "",
        EsitmatedDate: "",
        RealBirthDate: "",
        countconfdatees: "",
        userId: "",
        pregencyMethod: "",
        confirmedPergency: false,
        pregencyConfirmedDate: "",
        PregnancyPreventativeTreatmentDate: "",
      });
    } catch (error) {
      alert("Failed to add mating record");
    }
  };

  // const exitingActiveMatingData =
  //   contextData.openEdit &&
  //   mattings.filter((record) => record.matingID === contextData.activeMateID);

  // useEffect(() => {
  //   if (contextData.openEdit && exitingActiveMatingData.length > 0) {
  //     const activeMating = exitingActiveMatingData[0];
  //     setMatingData({
  //       species: activeMating.species, // Default to the first species if available
  //       maleTatoo: activeMating.maleTatoo,
  //       femaleTatoo: activeMating.femaleTatoo,
  //       maleChipID: activeMating.maleChipID,
  //       femaleChipID: activeMating.femaleChipID,
  //       entryDate: formatDate(activeMating.entryDate),
  //       exitDate: formatDate(activeMating.exitDate),
  //       BD: activeMating.BD || "",
  //       LD: activeMating.LD || "",
  //       W: activeMating.W || "",
  //       isHeatedDetectedANDNotMated:
  //         activeMating.isHeatedDetectedANDNotMated === 1,
  //       MatingconfirmedDate: activeMating.MatingconfirmedDate || "",
  //       EsitmatedDate: formatDate(activeMating.EsitmatedDate) || "",
  //       RealBirthDate: formatDate(activeMating.RealBirthDate) || "",
  //       matingID: activeMating.matingID || "",
  //       countconfdatees: activeMating.countconfdatees || "",
  //       userId: activeMating.userId || "",
  //       pregencyMethod: activeMating.pregencyMethod,
  //       confirmedPergency: activeMating.confirmedPergency,
  //       pregencyConfirmedDate: formatDate(activeMating.pregencyConfirmedDate),
  //       matingconfirmed1: formatDate(activeMating.matingconfirmed1),
  //       matingconfirmed2: formatDate(activeMating.matingconfirmed2),
  //       matingconfirmed3: formatDate(activeMating.matingconfirmed3),
  //     });
  //   }
  // }, [contextData.openEdit, exitingActiveMatingData]);

  function padSixDigitsString(num) {
    return num.toString().padStart(6, "0");
  }

  useEffect(() => {
    if (contextData.openEdit) {
      const activeMating = mattings.find(
        (record) => record.matingID === contextData.activeMateID
      );
      if (activeMating) {
        setMatingData({
          species: activeMating.species,
          maleTatoo: padSixDigitsString(activeMating.maleTatoo),
          femaleTatoo: padSixDigitsString(activeMating.femaleTatoo),
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
          pregencyMethod: activeMating.pregencyMethod || "",
          confirmedPergency: !!activeMating.confirmedPergency,
          pregencyConfirmedDate: formatDate(activeMating.pregencyConfirmedDate),
          MatingconfirmedDate1: formatDate(activeMating.MatingconfirmedDate1),
          MatingconfirmedDate2: formatDate(activeMating.MatingconfirmedDate2),
          MatingconfirmedDate3: formatDate(activeMating.MatingconfirmedDate3),
          PregnancyPreventativeTreatmentDate: formatDate(
            activeMating.PregnancyPreventativeTreatmentDate
          ),
          ACategroy: activeMating.ACategroy?.toString() || "", // if needed
        });
      }
    }
  }, [contextData.openEdit]);

  const UpdateMatingData = async (e) => {
    e.preventDefault();
    const newMatingData = {
      ...matingData,
      species: parseInt(matingData.species, 10), // Ensure species is an integer
      isHeatedDetectedANDNotMated: matingData.isHeatedDetectedANDNotMated
        ? 1
        : 0, // Convert to boolean
      userId: 1,
      MatingconfirmedDate1: matingData.MatingconfirmedDate1,
      MatingconfirmedDate2: matingData.MatingconfirmedDate2,
      MatingconfirmedDate3: matingData.MatingconfirmedDate3,
      pregencyMethod: matingData.pregencyMethod,
      confirmedPergency: matingData.confirmedPergency ? 1 : 0, // Convert to boolean
      pregencyConfirmedDate: matingData.pregencyConfirmedDate,
      PregnancyPreventativeTreatmentDate:
        matingData.PregnancyPreventativeTreatmentDate,
      matingID: contextData.activeMateID,
    };
    // console.log("Updated Mating Data:", newMatingData);
    try {
      await dispatch(updateMatingRecords(newMatingData)).unwrap();
      alert("Mating record Updated successfully");
      setMatingData({
        species: 10,
        maleTatoo: "",
        femaleTatoo: "",
        maleChipID: "",
        femaleChipID: "",
        entryDate: "",
        exitDate: "",
        ACategroy: "",
        BD: "",
        LD: "",
        W: "",
        otherproblmenss: "",
        isHeatedDetectedANDNotMated: 0,
        MatingconfirmedDate1: "",
        MatingconfirmedDate2: "",
        MatingconfirmedDate3: "",
        EsitmatedDate: "",
        RealBirthDate: "",
        countconfdatees: "",
        userId: "",
        pregencyMethod: "",
        confirmedPergency: false,
        pregencyConfirmedDate: "",
        PregnancyPreventativeTreatmentDate: "",
      });
    } catch (error) {
      alert("Failed to Update mating record");
    }
    contextData.setOpenEdit(false);
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
      chip: String(matingData.maleChipID),
      status: animalsData.status,
      birthDate: animalsData.birthDate,
      location: 13,
    };
    // console.log("Adding Animal Data:", newAnimalData);
    try {
      await dispatch(createAnimalsRecords(newAnimalData)).unwrap(); // ✅ unwrap to catch errors
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

  // const confirmationDateOneModel = () => {
  //   <Modal
  //     show={confirmationDateOne}
  //     onHide={() => setConfirmationDateOne(false)}
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title>Confirm Mating Date</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>Do you want to confirm Date 1?</Modal.Body>
  //     <Modal.Footer>
  //       <Button
  //         variant="secondary"
  //         onClick={() => setConfirmationDateOne(false)}
  //       >
  //         Close
  //       </Button>
  //       <Button variant="primary" onClick={() => setConfirmationDateOne(false)}>
  //         Save
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>;
  // }

  // useEffect(() => {
  //   if (contextData.openEdit) {
  //     if (matingData.MatingconfirmedDate1) setConfirmationDateOne(true);
  //     if (matingData.MatingconfirmedDate2) setConfirmationDateTwo(true);
  //     if (matingData.MatingconfirmedDate3) setConfirmationDateThree(true);
  //   }
  // }, [contextData.openEdit]);

  // useEffect(() => {
  //   if (contextData.openEdit) {
  //     if (matingData.MatingconfirmedDate1) setConfirmationDateTwo(true);
  //     if (matingData.MatingconfirmedDate2) setConfirmationDateThree(true);
  //   }
  // }, [contextData.openEdit, matingData]);

  const [textOfConfirmationDates, setTextOfConfirmationDates] = useState(false);
  const [showConfirmButton, setShowConfirmbutton] = useState(true);

  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          <div className="form-header-button-card">
            <h1
              className="main-heading"
              style={{ display: "flex", flexDirection: "column" }}
            >
              CREATE MATING{" "}
              {contextData.openEdit && (
                <span style={{ color: "#000000", fontSize: "17px" }}>
                  {contextData.activeMateID}
                </span>
              )}
            </h1>
            {contextData.openEdit && (
              <div className="status-cards-container">
                <div className="form-buttos-container-card">
                  <button
                    className="form-features-button"
                    style={{ background: "blue" }}
                  >
                    Male
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "green" }}
                  >
                    Female
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "red" }}
                  >
                    BD
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "#ffd900" }}
                  >
                    LD
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "orange" }}
                  >
                    W
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
                  <button
                    className="form-features-button"
                    style={{ background: "#ee00ff" }}
                  >
                    Total
                    <span style={{ fontSize: "20px", lineHeight: "15px" }}>
                      0
                    </span>
                  </button>
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
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        value={categorory
                          .map((each) =>
                            parseInt(each.id) === parseInt(matingData.ACategroy)
                              ? each.name
                              : ""
                          )
                          .join("")}
                      />
                    </div>
                    <div className="input-containers">
                      <select
                        className="input-select-card"
                        onChange={handleInputChange}
                        name="ACategroy"
                        value={matingData.ACategroy} // controlled value
                      >
                        {categorory.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
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
                      <input
                        type="text"
                        placeholder="Male Tatoo"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        onChange={handleInputChange}
                        name="maleTatoo"
                        value={matingData.maleTatoo}
                      />
                    </div>
                    <div className="input-containers">
                      <input
                        type="text"
                        placeholder="Female Tatoo"
                        className="input-select-card"
                        style={{ paddingLeft: "5px" }}
                        onChange={handleInputChange}
                        name="femaleTatoo"
                        value={matingData.femaleTatoo}
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
                      <select
                        className="input-select-card"
                        onChange={handleInputChange}
                        name="maleChipID"
                        // value={maleChipsFilterd[0]?.MaleT}
                        value={matingData.maleChipID} // controlled value
                      >
                        <option>
                          {maleChipsFilterd.length !== 0
                            ? "Select Male Chip ID"
                            : "No Chips Found"}
                        </option>
                        {maleChipsFilterd.map((chip, i) => (
                          <option key={i} value={chip.MaleT}>
                            {chip.MaleT}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input-containers">
                      <select
                        className="input-select-card"
                        onChange={handleInputChange}
                        name="femaleChipID"
                        value={matingData.femaleChipID}
                      >
                        <option>Select Female Chip ID</option>
                        {filterFemaleChips.map((chip) => (
                          <option key={chip.tatoo} value={chip.chip}>
                            {chip.chip}
                          </option>
                        ))}
                      </select>
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
                        value={filtermaleAnilmalsList[0]?.animalID || ""} // controlled value
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
                          (matingData.femaleChipID !== "" &&
                            filteredAnimalFemaleChips[0]?.animalID) ||
                          ""
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
                              onChange={handleInputChange}
                              name="PregnancyPreventativeTreatmentDate"
                              value={
                                matingData.PregnancyPreventativeTreatmentDate ||
                                ""
                              } // controlled value
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
                          onChange={handleConfirmDateOneInput}
                          className="input-select-card"
                          name="MatingconfirmedDate1"
                          value={matingData.MatingconfirmedDate1}
                        />
                      </div>
                      {/* {matingData.MatingconfirmedDate1 &&
                        !confirmationDateTwo && (
                          <button
                            className="form-is-registred-button"
                            type="button"
                            onClick={() => {
                              if (
                                !isNaN(
                                  Date.parse(matingData.MatingconfirmedDate1)
                                )
                              ) {
                                const date = new Date(
                                  matingData.MatingconfirmedDate1
                                );
                                date.setDate(date.getDate() + 62);
                                const result = date.toISOString().split("T")[0];
                                setMatingData((prevData) => ({
                                  ...prevData,
                                  EsitmatedDate: result,
                                }));
                                setConfirmationDateTwo(true);
                                // setConfirmationDateOne(false);
                              } else {
                                console.error(
                                  "❌ Invalid date format:",
                                  matingData.MatingconfirmedDate1
                                );
                              }
                            }}
                          >
                            Add
                          </button>
                        )} */}
                      {confirmationDateTwo ||
                      matingData.MatingconfirmedDate2 !== "" ||
                      matingData.MatingconfirmedDate3 !== "" ? (
                        <div className="input-containers">
                          <label className="input-label">
                            Mating Confirmed 2
                          </label>
                          <input
                            type="date"
                            onChange={handleConfirmDateTwoInput}
                            className="input-select-card"
                            name="MatingconfirmedDate2"
                            value={matingData.MatingconfirmedDate2}
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                  {!matingData.isHeatedDetectedANDNotMated && (
                    <div className="section-one-input-card">
                      {/* {confirmationDateThree ||
                      matingData.MatingconfirmedDate3 !== "" ?
                       ( */}
                      {matingData.MatingconfirmedDate2 !== "" &&
                        matingData.MatingconfirmedDate1 !== "" && (
                          <div className="input-containers">
                            <label className="input-label">
                              Mating Confirmed 3
                            </label>
                            <input
                              type="date"
                              className="input-select-card"
                              onChange={handleConfirmDateThreeInput}
                              name="MatingconfirmedDate3"
                              value={matingData.MatingconfirmedDate3}
                            />
                          </div>
                        )}
                      {/* ) : null} */}

                      <div className="input-containers">
                        {/* {
                          // confirmationDateTwo ||
                          // matingData.MatingconfirmedDate1 !== ""
                          matingData.MatingconfirmedDate2 &&
                          !confirmationDateThree ? (
                            <button
                              className="form-is-registred-button"
                              type="button"
                              onClick={() => {
                                setConfirmationDateThree(true),
                                  setConfirmationDateTwo(true);
                              }}
                            >
                              Add 2
                            </button>
                          ) : null
                        } */}
                        {/* {confirmationDateThree && (
                          <button
                            type="button"
                            className="form-is-registred-button"
                            onClick={() => {
                              // setDatesConfirmed(true),
                              // setConfirmationDateTwo(false),
                              if (
                                matingData.MatingconfirmedDate1 !== "" &&
                                matingData.MatingconfirmedDate2 !== "" &&
                                matingData.MatingconfirmedDate3 !== ""
                              ) {
                                alert("All 3 Dates Confirmed");
                              } else {
                                alert(
                                  "Please fill all 3 dates before confirming."
                                );
                              }
                              
                            }}
                          >
                            Confirm
                          </button>
                        )} */}

                        {/* {confirmationDateThree &&
                          (!matingData.MatingconfirmedDate1 ||
                            !matingData.MatingconfirmedDate2 ) && (
                            <button
                              type="button"
                              className="form-is-registred-button"
                              onClick={() => {
                                if (
                                  matingData.MatingconfirmedDate1 &&
                                  matingData.MatingconfirmedDate2
                                  // matingData.MatingconfirmedDate3
                                ) {
                                  alert("All 3 Dates Confirmed");
                                } else {
                                  alert(
                                    "Please fill all 3 dates before confirming."
                                  );
                                }
                              }}
                            >
                              Confirm
                            </button>
                          )} */}
                        {/* {(matingData.MatingconfirmedDate1 !== "" &&
                        matingData.MatingconfirmedDate2 !== "" &&
                        matingData.MatingconfirmedDate3 !== "" )
                         ? (
                          <button
                            type="button"
                            className="form-is-registred-button"
                            onClick={() => {
                              if (
                                matingData.MatingconfirmedDate1 &&
                                matingData.MatingconfirmedDate2 &&
                                matingData.MatingconfirmedDate3
                              ) {
                                alert("All 3 Dates Confirmed");
                                setTextOfConfirmationDates(true);
                                setShowConfirmbutton(false);
                              } else {
                                alert(
                                  "Please fill all 3 dates before confirming."
                                );
                              }
                            }}
                          >
                            Confirm
                          </button>
                        ) : null} */}
                      </div>
                    </div>
                  )}
                  {
                    // matingData.MatingconfirmedDate1 !== "" &&
                    //   matingData.MatingconfirmedDate2 !== "" &&
                    //   matingData.MatingconfirmedDate3 !== ""
                    (matingData.MatingconfirmedDate1 !== "" && matingData.MatingconfirmedDate2 !== "" && matingData.MatingconfirmedDate3 !== "") && (
                      <h3
                        style={{
                          color: "green",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        All Three Confirmation Dates are Done...
                      </h3>
                    )
                  }
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
                  </div>
                )}
                {contextData.openEdit && (
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
                        Animal Birth Form
                      </p>
                    </div>
                    <div className="section-one-input-card">
                      <div className="input-containers">
                        <label className="input-label">Birth Date</label>
                        <input
                          type="date"
                          className="input-select-card"
                          style={{ paddingLeft: "5px" }}
                          name="birthDate"
                          value={animalsData.birthDate || ""} // controlled value
                          onChange={(e) =>
                            setAnimalsData((prevData) => ({
                              ...prevData,
                              birthDate: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="input-containers">
                        <label className="input-label">Gender</label>
                        <select
                          className="input-select-card"
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
                      </div>
                    </div>

                    <div className="section-one-input-card">
                      <div className="input-containers">
                        <label className="input-label">Status</label>
                        <div
                          className="input-containers"
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
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
                        </div>
                      </div>
                      <div className="input-containers">
                        <button
                          type="button"
                          className="form-is-registred-button"
                          onClick={handleAddAnimalData}
                        >
                          Add Animal
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* {contextData.openEdit &&
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
                         Male 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "green" }}
                      >
                         Female 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "red" }}
                      >
                         BD 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "#ffd900" }}
                      >
                         LD 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "orange" }}
                      >
                         W 0
                      </p>
                      <p
                        className="form-features-button"
                        style={{ background: "#ee00ff" }}
                      >
                         Total 0
                      </p>
                    </div>
                  </div>
                </div>
              )} */}
            {/* {contextData.openEdit ? (
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
            )} */}
          </form>

          {/* {confirmationDateOneModel()} */}
        </main>
      </div>
    </div>
  );
};
export default CreateMating;
