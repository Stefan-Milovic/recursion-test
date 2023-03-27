/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../redux/slices/personsSlice";
import debounce from "../../utils/debounce";
import "./AddPersonForm.css";

export default function AddPersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [count, setCount] = useState("");
  const dispatch = useDispatch();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCount = (event) => {
    setCount(event.target.value);
  };

  const debounceFirstNameChange = useCallback(
    debounce(handleFirstNameChange),
    []
  );

  const debounceLastNameChange = useCallback(
    debounce(handleLastNameChange),
    []
  );

  const debounceCountChange = useCallback(debounce(handleCount), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formValue = {id: Math.floor(Math.random()*100), firstName, lastName, count };
    dispatch(addPerson(formValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <input
          type="text"
          name="firstName"
          placeholder="Ime"
          onChange={debounceFirstNameChange}
        />
      </div>
      <div className="form-item">
        <input
          type="text"
          name="lastName"
          placeholder="Prezime"
          onChange={debounceLastNameChange}
        />
      </div>

      <div className="form-item">
        <input
          type="number"
          name="count"
          placeholder="Count"
          onChange={debounceCountChange}
        />
      </div>

      <div className="form-item">
        <input type="submit" />
      </div>
    </form>
  );
}
