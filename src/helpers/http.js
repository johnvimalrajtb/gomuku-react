export const validateUser = (username, password) => {
  //hardcoded user admin/admin
  if (username === 'admin' && password === 'admin') {
    return Promise.resolve({
      token: '1234567890',
      username: 'admin',
      role: 'admin'
    });
  } else {
    return Promise.reject('Invalid username/password');
  }    
}

