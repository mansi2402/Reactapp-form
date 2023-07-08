import React from 'react';

const SubmissionPage = ({ formData }) => {
  const { firstName, lastName, email, gender } = formData;

  return (
    <div className="container">
      <h1>Submission Details</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionPage;
