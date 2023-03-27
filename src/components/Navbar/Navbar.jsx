import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const persons = useSelector((state) => state.persons.value);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div>Logo</div>
      <ul className="navbar-link-list ">
        <li className="navbar-link">
          <Link to="home">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="add-person">Add Person</Link>
        </li>
        <li className="navbar-link">
          <Link to="about">About</Link>
        </li>
      </ul>
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleDropdown}>
          Button
        </button>

        {showDropdown && (
          <div className="dropdown-content">
            {persons.map((person) => {
              return (
                <div
                  style={{ padding: 8 }}
                  key={person.id}
                >
                  {person.firstName} {person.lastName} - {person.count}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
