const BASEURL = 'https://jobs-api.squareboat.info/api/v1';

export async function getPasswordResetToken(emailAddress) {
  const result = await fetch(
    BASEURL + `/auth/resetPassword?email=${emailAddress}`,
    {
      method: 'GET',
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      window.localStorage.setItem('token', data.data.token);
      return data.data.token;
    });

  console.log('RESULT', result);
}

export async function sendPasswordTokenBody(password, confirmPassword, token) {
  const result = await fetch(
    'https://jobs-api.squareboat.info/api/v1/auth/resetpassword',
    {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: {
        mode: 'raw',
        raw: {
          password: password,

          confirmPassword: confirmPassword,

          token: window.localStorage.getItem('token'),
        },
      },
    }
  );
  console.log(result.json());
  return result;
}
