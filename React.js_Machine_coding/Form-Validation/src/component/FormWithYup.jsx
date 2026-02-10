import React, { useState } from 'react';
import * as Yup from 'yup'
const FormWithYup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    interests: [],
    birthDate: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("last name is Required"),
      email:Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
      phoneNumber: Yup.string()
      .matches(/^\d{10}$/,"Phone number mus be 10 digit")
      .required(),
      password: Yup.string()
      .required("password is required")
      .min(8,"Password must be at least 8 characters")
      .matches(
         /[!@#$%^&*(),.?":{}|<>]/,
         "Password must cintain at least one symbol"
      )
      .matches(/[0-9]/,"Password must contain at least one number")
      .matches(/[A-Z]/,"Password must contain at least one uppercase letter")
      .matches(/[a-z]/,"Password must contain at least one lowercase letter"),
       confirmPassword: Yup.string()
       .oneOf([Yup.ref("password")],"Password must match")
       .required("confirm password is required"),
       age:Yup.number()
       .typeError("age must be a number")
       .min(18,"You must be at least 18 years old")
       .max(100,"You cannot be older than 100 years")
       .required("Age is required"),
       gender:Yup.string().required("Gender is required"),
       interests: Yup.array()
       .min(1,"Select at leastt one interests")
       .required('select at least one interest'),
       birthDate:Yup.date().required("Date of birth is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    try {
        await validationSchema.validate(formData,{abortEarly:false})
        console.log("Form is submitted",formData)
    } catch (error) {
       const newErrors = {}

       error.inner.forEach(err => {
        newErrors[err.path] = err.message;
       });
       setErrors(newErrors)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== name);
    }
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <>
    <h2>Registration Form</h2>

    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
        {errors.age && <div className="error">{errors.age}</div>}
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="error">{errors.gender}</div>}
      </div>

      <div>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.includes('coding')}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.includes('sports')}
            onChange={handleCheckboxChange}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="reading"
            checked={formData.interests.includes('reading')}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
        {errors.interests && <div className="error">{errors.interests}</div>}
      </div>

      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
        {errors.birthDate && <div className="error">{errors.birthDate}</div>}
      </div>

      <button type="submit">Submit</button>

      {submitted && <div className="success">Form submitted successfully!</div>}
    </form>
    </>
  );
};

export default FormWithYup;
