import React, { useContext, useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import "./index.css";
import NavSection from "../NavSection";
import { FaChevronLeft, FaChevronRight, FaRegEdit } from "react-icons/fa";
import { NavMenuContext } from "../../Context/navmenucontext";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimals } from "../../features/animalSlice";
const mockData = [
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001865",
    species: "Dog",
    maleChipId: "982000411450369",
    femaleChipId: "982126050620114",
    entry: "21/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
  {
    id: "1001864",
    species: "Dog",
    maleChipId: "",
    femaleChipId: "982126058497344",
    entry: "22/01/2025",
    exit: "31/01/2025",
    bd: 0,
    ld: 0,
    w: 0,
  },
];

const AnimalRecords = () => {
  const contextData = useContext(NavMenuContext);
  const [search, setSearch] = useState({
    matingID: "",
    species: "",
    maleChipID: "",
    femaleChipID: "",
    entryDate: "",
    exitDate: "",
    BD: "",
    LD: "",
    W: "",
  });

  const dispatch = useDispatch();

  const AnimalRecords = useSelector((state) => state.animals.animals);
  console.log("AnimalRecords", AnimalRecords);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  //   const recordsPerPage = 10;

  const handleSearchChange = (e, key) => {
    setSearch({ ...search, [key]: e.target.value });
  };

  // const filteredData = mattings.filter((item) =>
  //   Object.keys(search).every((key) =>
  //     item[key]?.toString().toLowerCase().includes(search[key].toLowerCase())
  //   )
  // );
  const filteredData = AnimalRecords.filter((item) =>
    Object.keys(search).every((key) => {
      const searchValue = search[key]?.toString().toLowerCase(); // always safe string
      const itemValue = item[key];

      if (searchValue === "") return true; // skip empty search fields

      // Convert itemValue safely to string for both strings and numbers
      return itemValue?.toString().toLowerCase().includes(searchValue);
    })
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const onchangeRecordsPerPage = (e) => {
    setRecordsPerPage(e.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          {/* <div className="mating-container"> */}
          <div className="mating-header">
            <h2 className="main-heading">Animals Records</h2>
            <div className="top-actions">
              <button className="export-btn">Export to CSV</button>
              <input
                type="text"
                placeholder="Search"
                className="global-search"
              />
              <button className="add-btn">+ Add Animal</button>
            </div>
          </div>

          <table className="mating-table">
            <thead>
              <tr>
                {[
                  "Animal ID",
                  "Species",
                  // "Animal chip",
                  "Sex",
                  "Birth Date",
                  "Status",
                  "Mating ID",
                  "Actions",
                ].map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
              <tr>
                {[
                  "Mating ID",
                  "Species",
                  // "Animal chip",
                  "Sex",
                  "Birth Date",
                  "Status",
                  "Mating ID",
                ].map((key, idx) => (
                  <th key={idx}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={search[key]}
                      onChange={(e) => handleSearchChange(e, key)}
                    />
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((item, index) => (
                <tr key={index}>
                  <td className="table-row-mating-records">
                    <Link
                      to="/create-mating"
                      onClick={() => {
                        contextData.setOpenEdit(true),
                          contextData.setActiveMateID(item.animalID);
                      }}
                    >
                      {item.animalID}
                    </Link>
                  </td>
                  <td className="table-row-mating-records">
                    {item.species === 10 ? "Dog" : "Cat"}
                  </td>
                  {/* <td className="table-row-mating-records">
                    <a href="#">{item.chip}</a>
                  </td> */}
                  <td className="table-row-mating-records">
                    <a href="#">{item.sex}</a>
                  </td>
                  <td className="table-row-mating-records">
                    {formatDate(item.birthDate)}
                  </td>
                  <td className="table-row-mating-records">{item.status}</td>
                  <td className="table-row-mating-records">
                    <a href="#">{item.matingID}</a>
                  </td>
                  <td className="table-row-mating-records">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        contextData.setOpenEdit(true),
                          contextData.setActiveMateID(item.matingID);
                      }}
                    >
                      <Link to="/create-mating">
                        <FaRegEdit />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              Records per page:{" "}
              <select
                className="records-per-page-select"
                onChange={onchangeRecordsPerPage}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </span>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              {indexOfFirstRecord + 1} -
              {Math.min(indexOfLastRecord, filteredData.length)} of{" "}
              {filteredData.length}
            </span>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <FaChevronLeft size={15} />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <FaChevronRight size={15} />
            </button>
          </div>
          {/* </div> */}
        </main>
      </div>
    </div>
  );
};

export default AnimalRecords;
