import React from "react";
export function Register(prop) {
  const [fillRegister, setFillRegister] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [form, setForm] = React.useState({
    userName: "",
    completeName: "",
    email: "",
    password: ""
  });
  const trySubmit = e => {
    e.preventDefault();
    if (!form.userName) {
      setError(true);
      return;
    } else if (!form.password) {
      setError(true);
      return;
    } else if (!form.completeName) {
      setError(true);
      return;
    } else if (!form.email) {
      setError(true);
      return;
    }
    setError(false);
    if (prop.onRegister) prop.onRegister(form);
  };
  const updateComponent = () => {
    setForm({
      userName: form.userName,
      completeName: form.completeName,
      email: form.email,
      password: form.password
    });
  };
  const updateUserName = e => {
    form.userName = e.target.value;
    updateComponent();
  };
  const updateCompleteName = e => {
    form.completeName = e.target.value;
    updateComponent();
  };
  const updateEmail = e => {
    form.email = e.target.value;
    updateComponent();
  };
  const updatePassword = e => {
    form.password = e.target.value;
    updateComponent();
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={updateUserName}
            className={"form-control" + (error ? " is-invalid" : "")}
          />
          <div className="invalid-feedback">You must fill the login field.</div>
        </div>
        <div className="form-group">
          <label>Complete Name</label>
          <input
            type="text"
            name="Complete name"
            value={form.completeName}
            onChange={updateCompleteName}
            className={"form-control" + (error ? " is-invalid " : "")}
          />
          <div className="invalid-feedback">
            You must fill the Complete Name field
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={form.email}
            onChange={updateEmail}
            className={"form-control" + (error ? " is invalid " : "")}
          />
          <div className="invalid-feedback">You must fill the Email field</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={updatePassword}
            className={"form-control" + (error ? " is-invalid" : "")}
          />
          <div className="invalid-feedback">
            You must fill the password field.
          </div>
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success w-100">Sign Up</button>
        </div>
      </form>
      <div className="form-group">
        <button type="button" className="btn btn-outline-secondary w-100">
          Back
        </button>
      </div>
    </div>
  );
}
