import React from "react";

const Register = () => {
  const [firstName, setFirtsName] = useState()
  const [lastName, setFirtsName] = useState()
  const [emailName, setFirtsName] = useState()
  const [passwordName, setFirtsName] = useState()

  const handleSubmit = () => {
    e.preventDefault()
   console.log(firstName, lastName);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="random-img" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register onSubmit={handleSubmit">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name please"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your last name please"
              required
              onChange={(e) => setLastName(e.target.value)}

            />
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="firstName"
              placeholder="Enter your email address please"
              required
              onChange={(e) => setemail(e.target.value)}

            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password please"
              required
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;