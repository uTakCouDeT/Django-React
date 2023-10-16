import React from "react";
import DataTable from "react-data-table-component";
import NewStudentModal from "./NewStudentModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

function StudentList({ students, resetState }) {
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Document",
      selector: "document",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "Registration",
      selector: "registrationDate",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <NewStudentModal create={false} student={row} resetState={resetState}/>
          <span>&nbsp;&nbsp;</span>
          <ConfirmRemovalModal pk={row.pk} resetState={resetState}/>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      title="Student List"
      columns={columns}
      data={students}
      pagination
    />
  );
}

export default StudentList;
