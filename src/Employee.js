import React from "react";

const Employee = ({ lastName, firstName, middleName, salary }) => {
  return (
    <div>
      <p>
        last name:<span>{lastName}</span>, first name:<span>{firstName}</span>,
        middleName:<span>{middleName}</span>, salary:<span>{salary}</span>
      </p>
    </div>
  );
};

export default Employee;
