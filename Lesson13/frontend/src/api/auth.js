import APIAuth from "./api"

export const login = async (username, password) => {
  try {
    const res = await APIAuth.get('/auth/login', {
      username: username,
      password: password
    });
    return {
      status: true,
      token: res.data.token
    };
  } catch (error) {
    return {
      status: false,
      message: 'Đăng nhập thất bại'
    }
  }
  
}