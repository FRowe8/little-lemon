import './LoginForm.css'

function LoginForm() {
  return (
    <section className="register-section">
      <div className="register-heading">
        <h2>Sign in to collect Points</h2>
      </div>
      <div className="register-fields-group">
        <div className="register-fields">
          <label>First Name</label>
          <input></input>
        </div>
        <div className="register-fields">
          <label>Last Name</label>
          <input></input>
        </div>
      </div>
      <div className="register-fields-group">
        <div className="register-fields">
          <label>Phone Number</label>
          <input></input>
        </div>
        <div className="register-fields">
          <label>Email</label>
          <input></input>
        </div>
      </div>
      <div className="register-fields">
        <label>Password</label>
        <input></input>
      </div>
    </section>
  )
}
export default LoginForm
