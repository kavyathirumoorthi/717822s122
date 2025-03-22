const Auth = async (username, password) => {
    const url = 'http://20.244.56.144/test/auth';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  
    return await response.json();
  };
  
  export default Auth;
  