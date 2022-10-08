import React from "react";
import "./Assests/CSS/EditableRows.css";
const EditableRows = function (props) {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Name"
          required="required"
          value={props.editFormDatas.fullName}
          onChange={props.handleEditFormChange}
          className="inputField"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone number"
          required="required"
          value={props.editFormDatas.phoneNumber}
          onChange={props.handleEditFormChange}
          className="inputField"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          required="required"
          value={props.editFormDatas.address}
          onChange={props.handleEditFormChange}
          className="inputField"
        ></input>
      </td>
      <td>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required="required"
          value={props.editFormDatas.email}
          onChange={props.handleEditFormChange}
          className="inputField"
        ></input>
      </td>
      {/* <td></td>
      <td></td>
      <td></td> */}
      <td>
        <button type="submit" className="inputSubmit">
          {" "}
          Submit{" "}
        </button>
      </td>
      <td>
        <button
          type="cancel"
          className="inputCancel"
          onClick={props.handleCancelClicker}
        >
          {" "}
          Cancel{" "}
        </button>
      </td>
      <td></td>
    </tr>
  );
};

export default EditableRows;
