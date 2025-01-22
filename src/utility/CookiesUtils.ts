export const CookieUtils = {
  getExpiryDate: (days = 7) => {
    const date = new Date();
    date.setDate(date.getDate() + days); // เพิ่มจำนวนวันที่ต้องการ
    return date.toUTCString(); // แปลงเป็นรูปแบบ UTC string
  },
  setCookie: (key: string, data: string, exp: number) => {
    let dateExp = CookieUtils.getExpiryDate(exp)
    document.cookie = `${key}=${data}; expires=${dateExp}; path=/`;
  },
  getCookie: (name:string) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  },
  clearCookie: (key: string, path: string = "/", domain: string = "") => {
    document.cookie = `${key}=; Max-Age=0; Path=${path}; Domain=${domain}`;
  },
};
