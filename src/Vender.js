import React, { useState, useEffect } from 'react';

function Vender(props) {
  const [name, setName] = useState('');
  const [bankAccountNo, setBankAccountNo] = useState('');
  const [bankName, setBankName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (props.editData) {
      setName(props.editData.name || '');
      setBankAccountNo(props.editData.bankAccountNo || '');
      setBankName(props.editData.bankName || '');
      setAddressLine1(props.editData.addressLine1 || '');
      setAddressLine2(props.editData.addressLine2 || '');
      setCity(props.editData.city || '');
      setCountry(props.editData.country || '');
      setZipCode(props.editData.zipCode || '');
    }
  }, [props.editData]);

  const changeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  };

  const changeBankAccountNo = (event) => {
    setBankAccountNo(event.target.value);
  };

  const changeBankName = (event) => {
    setBankName(event.target.value);
  };

  const changeAddressLine1 = (event) => {
    setAddressLine1(event.target.value);
  };

  const changeAddressLine2 = (event) => {
    setAddressLine2(event.target.value);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const changeCountry = (event) => {
    setCountry(event.target.value);
  };

  const changeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const validateForm = () => {
    if (
      name &&
      bankAccountNo &&
      bankName &&
      addressLine1 &&
      addressLine2 &&
      city &&
      country &&
      zipCode
    ) {
      setFormError('');
      return true;
    } else {
      setFormError('Please fill in all fields.');
      return false;
    }
  };

  const transferValue = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const val = {
        name,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode
      };
      console.log(val);

      if (props.editData) {
        props.editFunc(val);
      } else {
        props.func(val);
      }

      clearState();
    }
  };

  const clearState = () => {
    setName('');
    setBankAccountNo('');
    setBankName('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setCountry('');
    setZipCode('');
    setFormError('');
  };

  return (
    <div className='details-filling'>
      <div className="grid-container">
        <div className="grid-item">
          <label>Vender Name</label>
          <input type="text" value={name} onChange={changeName} />
        </div>
        <div className="grid-item">
          <label>Bank Account No</label>
          <input type="text" value={bankAccountNo} onChange={changeBankAccountNo} />
        </div>
        <div className="grid-item">
          <label>Bank Name</label>
          <input type="text" value={bankName} onChange={changeBankName} />
        </div>
        <div className="grid-item">
          <label>Address Line 1</label>
          <input type="text" value={addressLine1} onChange={changeAddressLine1} />
        </div>
        <div className="grid-item">
          <label>Address Line 2</label>
          <input type="text" value={addressLine2} onChange={changeAddressLine2} />
        </div>
        <div className="grid-item">
          <label>City</label>
          <input type="text" value={city} onChange={changeCity} />
        </div>
        <div className="grid-item">
          <label>Country</label>
          <input type="text" value={country} onChange={changeCountry} />
        </div>
        <div className="grid-item">
          <label>Zip Code</label>
          <input type="text" value={zipCode} onChange={changeZipCode} />
        </div>
        <div className="grid-item button-container">
          <button onClick={transferValue}>{props.editData ? 'Update' : 'Submit'}</button>
        </div>
      </div>
      {formError && <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>}
    </div>
  );
}

export default Vender;
