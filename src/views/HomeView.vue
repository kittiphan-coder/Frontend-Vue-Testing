<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

interface User {
  id: number;
  name: string;
  email: string;
}
const router = useRouter();
const user = useUserStore();


function deleteUser(id:number){
  Swal.fire({
    title: "Are you sure?",
    text: `Do you really want to delete ? This process cannot be undone.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      user.deleteUser(id); // ดำเนินการลบเมื่อผู้ใช้ยืนยัน
      Swal.fire("Deleted!", "user has been deleted.", "success");
    }
  });
}
</script>

<template>
  <main
    class="w-full h-screen flex justify-center items-center GradientBackground"
  >
    <div class="bg-primary rounded-md bg-opacity-80 text-white px-8 py-5">
      <h1 class="text-5xl mb-4 font-bold">ALL USER</h1>
      <div
        class="w-full h-[620px] bg-primary rounded-md shadow-lg p-4 mb-4 flex flex-col overflow-auto"
      >
        <div
          class="h-[106px] xl:w-[1030px] w-[600px] flex items-center rounded-md bg-secondary px-5 mb-4"
          v-for="(item, key) in user.data"
          :key="key"
        >
          <div class="text-5xl">{{ item.name }}</div>
          <div class="ml-auto flex items-center h-[106px]">
            <div
              class="cursor-pointer w-[120px] h-[66px] bg-white text-primary text-2xl text-center place-content-center rounded-md font-bold"
              @click="router.push(`/update/${item.id}`)"
            >
              UPDATE
            </div>
            <div
              class="cursor-pointer ml-4 w-[120px] h-[66px] bg-red-600 text-2xl place-content-center text-center rounded-md font-bold"
              @click="deleteUser(item.id)"
              >
              DELETE
            </div>
          </div>
        </div>
      </div>
      <div
        class="ml-auto w-[120px] h-[66px] bg-green-500 text-white text-2xl text-center place-content-center rounded-md font-bold"
        @click="router.push('/create')"
      >
        ADD
      </div>
    </div>
  </main>
</template>

<style >
.GradientBackground {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(65, 0, 245, 1) 100%
  );
}
</style>
