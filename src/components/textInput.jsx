import React from 'react';

const TextInput = ({ ...props }) => {
  return (
    <>
      <div className="input_container">
        <label className="input_label" htmlFor="name_field"></label>

        <input
          placeholder="Nama Anda"
          name="name"
          type="text"
          className="input_field"
          id="name_field"
        />
      </div>
    </>
  );
};

export default TextInput;
