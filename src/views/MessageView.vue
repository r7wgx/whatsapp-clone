<template>
    <div class="w-full bg-[#202c33] flex justify-between p-1">
        
        <div class="flex gap-3">
            <div 
            class="rounded-full ml-3 bg-center bg-no-repeat bg-cover w-12 h-12 p-1" 
            style="background-image: url('https://images.unsplash.com/photo-1579305626036-d173361705f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');" 
            alt="profile">
            </div>
            <div class="flex-col">
                <h3 class="font-semibold text-[#e9edef]">Name</h3>
                <span class="text-[#8696a0] max-md:text-sm">User info for click</span>
            </div>
        </div>
        <div class="header-right flex gap-2 px-4">
            <button class=" aspect-square items-center flex justify-center rounded-full hover:bg-[#ffffff1a] w-auto p-2">
                <MagnifyIcon fillColor="#aebac1"/>
            </button>
            <button class=" aspect-square items-center flex justify-center rounded-full hover:bg-[#ffffff1a] w-auto p-2">
                <DotsVerticalIcon fillColor="#aebac1"/>
            </button>
        </div>
    </div>

    <div class="w-full overflow-auto h-full flex flex-wrap flex-col relative py-5">
        <div class="bg-[#202c33] p-4 rounded-lg mb-3 text-[#e9edef] ml-5 w-fit max-w-lg mr-9 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias.
            <small class="absolute bottom-2 right-2 text-[#ffffff99]">20:25</small>
        </div>
        <div class="bg-[#202c33] p-4 rounded-lg mb-3 text-[#e9edef] ml-5 w-fit max-w-lg mr-9 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias.
            <small class="absolute bottom-2 right-2 text-[#ffffff99]">20:25</small>
        </div>
        <div class="w-full">
            <div class="bg-[#005c4b] float-right mr-4 p-4 rounded-lg mb-3 text-[#e9edef] w-fit max-w-lg ml-9 relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias.
                <small class="absolute flex gap-1 items-center bottom-2 right-2 text-[#ffffff99]">
                    <span>20:25</span>
                    <checkAll fillColor="#53bdeb"/>
                </small>
            </div>
        </div>
        <div class="w-full">
            <div class="bg-[#005c4b] float-right mr-4 p-4 rounded-lg mb-3 text-[#e9edef] w-fit max-w-lg ml-9 relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias.
                <small class="absolute flex gap-1 items-center bottom-2 right-2 text-[#ffffff99]">
                    <span>20:25</span>
                    <checkAll fillColor="#53bdeb"/>
                </small>
            </div>
        </div>
        <div class="bg-[#202c33] p-4 rounded-lg mb-3 text-[#e9edef] ml-5 mr-9 w-fit max-w-lg relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias.
            <small class="absolute bottom-2 right-2 text-[#ffffff99]">20:25</small>
        </div>
        <div style="background-image: url('bg-chat-dark.png');" class="w-full bg-repeat-x absolute top-0 h-full opacity-10 z-[-1]"></div>
    </div>

    <div class="flex justify-between items-center px-5 absolute bottom-0 bg-[#202c33] py-3 gap-3 w-full">
        <emoticon fillColor="#aebac1" class="cursor-pointer" :size="24"/>
        <paperclip fillColor="#aebac1" :size="24"/>
        <input placeholder="Your Message" type="text" class="placeholder:text-gray-500 text-gray-400 focus:outline-none text-sm w-full rounded-md md:mx-4 py-2 px-1 md:px-3 bg-[#2a3942]">
        <send fillColor="#aebac1" class="cursor-pointer" :size="28"/>
    </div>
</template>

<script setup>
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue' 
import emoticon from 'vue-material-design-icons/emoticon.vue' 
import paperclip from 'vue-material-design-icons/paperclip.vue' 
import send from 'vue-material-design-icons/send.vue' 
import checkAll from 'vue-material-design-icons/checkAll.vue' 

</script>

<style>
</style>