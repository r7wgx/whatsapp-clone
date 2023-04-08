<template>
    <div v-for="user in userStore.allUsers" :key="user">
        <div v-if="hideMe(user)" @click="createNewChat(user)" class="w-full flex justify-center overflow-auto items-center hover:bg-[#202c33] cursor-pointer">
                <img :src="user.picture || '' " class="rounded-full mx-2 w-11" alt="profile">
                <div class="flex w-full border-y border-[#222d34] h-fit py-3 pr-2 justify-between ">
                    <div class="flex flex-col ml-1">
                        <h4 class="text-gray-200">{{ user.firstName }} {{ user.lastName }}</h4>
                        <p class="text-gray-400 flex gap-1">I am use whatsapp</p>
                    </div>
                </div>
                
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user-store';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { sub, userDataForChat } = storeToRefs(userStore);


const hideMe = (user) => {
    if(user.sub === sub.value) {
        return false;
    }
    return true;
}

const createNewChat = (user) => {
    userDataForChat.value = []
    userDataForChat.value.push({
        id: '',
        sub1: sub.value,
        sub2: user.sub,
        firstName: user.firstName,
        picture: user.picture,
    })
}
</script>