<template>
    <div>
        <div class="w-full flex justify-center items-center hover:bg-[#202c33] cursor-pointer">
            <div 
                class="rounded-full  bg-center bg-no-repeat bg-cover m-4 aspect-square w-12 h-12" 
                style="background-image: url('https://images.unsplash.com/photo-1579305626036-d173361705f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');" 
                alt="profile">
            </div>
            <div class="flex w-full border-y border-[#222d34] h-fit py-3 pr-2 justify-between ">
                <div class="flex flex-col ml-1">
                    <h4 class="text-gray-200">name</h4>
                    <p class="text-gray-400 flex gap-1"><checkAll fillColor="#ffffff80"/>  message</p>
                </div>
                <div class="flex justify-items-center items-center gap-1 flex-col ml-4">
                    <h4 class="text-[#00a884]">20:23</h4>
                    <div class="text-[#111b21] rounded-full flex justify-center aspect-square w-5 text-sm bg-[#00a884]">3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import checkAll from 'vue-material-design-icons/checkAll.vue' 

</script>