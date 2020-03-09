import React from "react";
import MenuIcon from "../MenuIcon";

import "./table.css";

const Table = () => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th className="table__head" />
          <th className="table__head">
            Firstname <MenuIcon visibility/>
          </th>
          <th className="table__head table__head_selected">
            Lastname <MenuIcon inverted />
          </th>
          <th className="table__head">
            Age <MenuIcon visibility/>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table__cell">1</td>
          <td className="table__cell">Eugene</td>
          <td className="table__cell">Aslanov</td>
          <td className="table__cell">36</td>
        </tr>
        <tr>
          <td className="table__cell">2</td>
          <td className="table__cell">Daniil</td>
          <td className="table__cell">Aslanov</td>
          <td className="table__cell">12</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Table;
