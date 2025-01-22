<template>
  <main
    class="w-full h-screen flex justify-center items-center GradientBackground relative"
  >
    <div class="absolute left-4 top-4 font-bold cursor-pointer text-blue-800 hover:text-slate-800 duration-300" @click="router.push('/')">BACK</div>
    <div class="bg-primary rounded-md bg-opacity-80 text-white px-8 py-5">
      <h1 class="text-5xl mb-4 font-bold">CREATE USER</h1>
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
        @click="createUser"
      >
        CREATE
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
const router = useRouter();
let name = ref("");
let email = ref("");


function createUser() {
  if (name.value !== "" && email.value !== "") {
    user.createUser({ name: name.value, email: email.value }); // ส่งobjectใหม่เพื่อเพิ่มข้อมูล
    router.push("/");
  }
}
</script>

<style scoped></style>
