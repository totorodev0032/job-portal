const BASEURL = 'https://jobs-api.squareboat.info/api/v1';

export const login = (value) => {
  return new Promise((resolve, reject) => {
    fetch(BASEURL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          reject(data.message);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const register = (value) => {
  return new Promise((resolve, reject) => {
    fetch(BASEURL + '/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          if (data.errors) {
            reject(data.errors[0].name);
          } else if (data.message) {
            reject(data.message);
          } else {
            reject('Login failed:Unexpected error occured');
          }
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPostedJobs = (value) => {
  return new Promise((resolve, reject) => {
    fetch(BASEURL + '/recruiters/jobs', {
      method: 'GET',
      headers: {
        Authorization: value,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getOneJobApplicants = (value, token) => {
  return new Promise((resolve, reject) => {
    fetch(BASEURL + '/recruiters/jobs/' + value + '/candidates', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          reject(data.message);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postJob = (value, token) => {
  return new Promise((resolve, reject) => {
    fetch(BASEURL + '/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          if (data.errors) {
            reject(data.errors[0].name);
          } else if (data.message) {
            reject(data.message);
          } else {
            reject('Unexpected error occured');
          }
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
