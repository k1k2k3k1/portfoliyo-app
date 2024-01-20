import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Vender from './Vender';
import data from './data.json';
import  Pagination  from './Pagination';

function Tabledta() {
  const [studentData, setStudentData] = useState(data);
  const [editData, setEditData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = studentData.slice(indexOfFirstItem, indexOfLastItem);
  const tableRows = currentItems.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.bankAccountNo}</td>
        <td>{info.bankName}</td>
        <td>{info.addressLine1}</td>
        <td>{info.addressLine2}</td>
        <td>{info.city}</td>
        <td>{info.country}</td>
        <td>{info.zipCode}</td>
        <td>
          <DeleteIcon className='delet' onClick={() => deleteRow(info.id)} />
          <EditIcon className='delet' onClick={() => setEditData(info)} />
        </td>
      </tr>
    );
  });

  const addRow = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  const deleteRow = (id) => {
    const updatedStudentData = studentData.filter((info) => info.id !== id);
    setStudentData(updatedStudentData);
  };

  const editRow = (editedData) => {
    const updatedStudentData = studentData.map((info) =>
      info.id === editData.id ? editedData : info
    );
    setStudentData(updatedStudentData);
    setEditData(null);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <header className='header'>Create Vender</header>
      <Vender func={addRow} editData={editData} editFunc={editRow} />
      <div className='table'>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sr.NO</th>
              <th>Name</th>
              <th>bankAccountNo</th>
              <th>bankName</th>
              <th>addressLine1</th>
              <th>addressLine2</th>
              <th>city</th>
              <th>country</th>
              <th>zipCode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
		<Pagination
          totalItems={studentData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
      </div>
	  
    </div>
  );
}

export default Tabledta;
