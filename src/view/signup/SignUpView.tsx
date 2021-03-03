export const SignUpView = () => {
  return (
    <div>
      <h1>Fyll i följande fält:</h1>
      <input placeholder='användarnamn'></input>
      <br/>
      <input placeholder='lösenord' type='password'></input>
      <br/>
      <input placeholder='upprepa lösenord' type='password'></input>
    </div>
  );
};
