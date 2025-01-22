<template>
  <main
    class="w-full h-screen flex justify-center items-center GradientBackground relative"
  >
  <div class="absolute left-4 top-4 font-bold cursor-pointer text-blue-800 hover:text-slate-800 duration-300" @click="router.push('/')">BACK</div>
    <div class="bg-primary rounded-md bg-opacity-80 text-white px-8 py-5">
      <h1 class="text-5xl mb-4 font-bold">UPDATE USER</h1>
      <div
        class="max-w-[1032px] w-full bg-primary rounded-md shadow-lg p-4 mb-4 flex flex-col overflow-auto"
      >
        <div
          class="w-full h-[106px] flex items-center rounded-md bg-secondary px-5 mb-4"
        >
          <div class="text-5xl">name:</div>
          <input
            type="text"
            v-model="name"
            class="w-full ml-4 h-[66px] px-2 rounded-md text-secondary text-5xl"
            placeholder=""
          />
        </div>
        <div
          class="w-full h-[106px] flex items-center rounded-md bg-secondary px-5 mb-4"
        >
          <div class="text-5xl">email:</div>
          <input
            type="email"
            v-model="email"
            class="w-full ml-4 h-[66px] px-2 rounded-md text-secondary text-5xl"
            placeholder=""
          />
        </div>
      </div>
      <div
        class="ml-auto cursor-pointer w-[120px] h-[66px] bg-green-500 text-white text-2xl text-center place-content-center rounded-md font-bold"
        @click="updateUser"
      >
        UPDATE
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

interface User {
  id: number;
  name: string;
  email: string;
}

const user = useUserStore();
const router = useRouter();
const route = useRoute();
let name = ref("");
let email = ref("");
let id = Number(route.params.id); // แปลง id เป็น number ก่อนส่งให้ฟังก์ชัน

onMounted(() => {
  const [userData] = user.getUserById(id);
  // นำข้อมูลจากการ filter มาใส่ตัวแปล
  if (userData) {
    name.value = userData.name;
    email.value = userData.email;
  }else{
    // กันข้อมูลผิดหลาด
    router.push("/")
  }
});

function updateUser() {
  if (email.value !== "" && name.value !== "")
    // ส่งข้อมูล name emailใหม่เพื่ออัพเดท
    user.updateUser(id, name.value, email.value);
    router.push("/")
}
</script>

<style scoped></style>
