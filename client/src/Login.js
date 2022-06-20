function Login() {
  return (
    <div id="login" className="body">
      <form method="POST" action="">
        <div class="user_cred">
          <label>Username:</label>
          <input type="text"></input>
        </div>

        <div class="user_cred">
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <input type={'button'} value="Login"></input>
      </form>
    </div>
  );
}

export default Login;
