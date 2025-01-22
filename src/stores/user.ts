import { ref } from "vue";
import { defineStore } from "pinia";
import { CookieUtils } from "@/utility/CookiesUtils";

export const useUserStore = defineStore("counter", () => {
  const data = ref([
    { id: 1, name: "Madam", email: "madam@yahoo.com" },
    { id: 2, name: "Hola", email: "madam@yahoo.com" },
    { id: 3, name: "Adam", email: "madam@yahoo.com" },
  ]);
  const counter = ref(3);

  function createUser(user: Record<string, any>) {
    if (user.name && user.email) {
      counter.value = counter.value + 1; // ใช้สำหรับรันลำดับ id
      data.value.push({
        id: counter.value,
        name: user.name,
        email: user.email,
      });
      // set cookies for store data
      CookieUtils.setCookie("data", JSON.stringify(data.value), 7);
      CookieUtils.setCookie("counter", JSON.stringify(counter.value), 7);
    }
  }

  function updateUser(id: number, name: string, email: string) {
    data.value = data.value.map((item) =>
      item.id === id ? { ...item, name: name, email: email } : item
    ); // หา object ที่มี id ตรงและอัพเดทค่า 
    CookieUtils.setCookie("data", JSON.stringify(data.value), 7);
    CookieUtils.setCookie("counter", JSON.stringify(counter.value), 7);
  }

  function checkDataCookies() {
    const rawData = CookieUtils.getCookie("data"); // ดึงค่า Cookie ออกมา
    const counterData = CookieUtils.getCookie("counter");
    if (rawData && counterData) {
      try {
        data.value = JSON.parse(rawData); // แปลงเป็น Array และกำหนดค่าให้กับ data.value
        counter.value = JSON.parse(counterData);
      } catch (error) {
        console.error("Error parsing cookie data:", error);
      }
    }
  }

  function getUserById(id: number) {
    return data.value.filter((item) => item.id == id);
  }

  function deleteUser(id:number) {
    data.value = data.value.filter(item=>item.id!==id) // คืนค่าที่ไม่ใช่idตัวนั้นมาเป็น array
    CookieUtils.setCookie("data", JSON.stringify(data.value), 7);
    CookieUtils.setCookie("counter", JSON.stringify(counter.value), 7);
  }

  return { data, createUser, checkDataCookies, getUserById, updateUser, deleteUser };
});
