import React, { useState } from "react";
import Header from "../Header";
import "./index.css";
import NavSection from "../NavSection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  },{
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

const MatingRecords = () => {
  const [search, setSearch] = useState({
    id: "",
    species: "",
    maleChipId: "",
    femaleChipId: "",
    entry: "",
    exit: "",
    bd: "",
    ld: "",
    w: "",
  });

  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 10;

  const handleSearchChange = (e, key) => {
    setSearch({ ...search, [key]: e.target.value });
  };

  const filteredData = mockData.filter((item) =>
    Object.keys(search).every((key) =>
      item[key]?.toString().toLowerCase().includes(search[key].toLowerCase())
    )
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
const onchangeRecordsPerPage = (e) => {
    setRecordsPerPage(e.target.value)
}
  return (
    <div className="main-container-card">
      <NavSection />
      <div className="purchase-main-card">
        <Header />
        <main className="main-details-container-card">
          {/* <div className="mating-container"> */}
          <div className="mating-header">
            <h2 className="main-heading">Mating Records</h2>
            <div className="top-actions">
              <button className="export-btn">Export to CSV</button>
              <input
                type="text"
                placeholder="Search"
                className="global-search"
              />
              <button className="add-btn">+ Add Mating</button>
            </div>
          </div>

          <table className="mating-table">
            <thead>
              <tr>
                {[
                  "Mating ID",
                  "Species",
                  "Chip ID - Male",
                  "Chip ID - Female",
                  "Entry",
                  "Exit",
                  "BD",
                  "LD",
                  "W",
                  "Actions",
                ].map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
              <tr>
                {[
                  "id",
                  "species",
                  "maleChipId",
                  "femaleChipId",
                  "entry",
                  "exit",
                  "bd",
                  "ld",
                  "w",
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
                    <a href="#">{item.id}</a>
                  </td>
                  <td className="table-row-mating-records">{item.species}</td>
                  <td className="table-row-mating-records">
                    <a href="#">{item.maleChipId}</a>
                  </td>
                  <td className="table-row-mating-records">
                    <a href="#">{item.femaleChipId}</a>
                  </td>
                  <td className="table-row-mating-records">{item.entry}</td>
                  <td className="table-row-mating-records">{item.exit}</td>
                  <td className="table-row-mating-records">{item.bd}</td>
                  <td className="table-row-mating-records">{item.ld}</td>
                  <td className="table-row-mating-records">{item.w}</td>
                  <td className="table-row-mating-records">
                    <button className="edit-btn">✏</button>
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

export default MatingRecords;
