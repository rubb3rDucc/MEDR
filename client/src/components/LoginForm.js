import React from "react";

function LoginForm() {
  return (
    <form>
      <header>
        <h2>Login</h2>
      </header>
      <section>
        <label for="">Username</label>
        <input type="text" />
        <label for="">Password</label>
        <input type="password" />
        <button type="submit">Login</button>
        <input />
      </section>
    </form>
  );
}

export default LoginForm;
