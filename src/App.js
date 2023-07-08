import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SubmissionPage from './SubmissionPage';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container">
      {!formData ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <SubmissionPage formData={formData} />
      )}
    </div>
  );
};

export default App;
