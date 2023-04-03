<template>
    <div>
        <div id="header" class="fixed max-lg:w-full w-1/4 ">

            <div class="w-full bg-[#202c33] flex justify-between p-2">
                <div 
                class="rounded-full ml-3 bg-center bg-no-repeat bg-cover w-10 h-10" 
                style="background-image: url('https://images.unsplash.com/photo-1579305626036-d173361705f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');" 
                alt="profile">
                </div>
                <div class="header-right flex gap-2">
                    <button class="rounded-full hover:bg-[#ffffff1a] w-auto p-2">
                        <AccountGroupIcon fillColor="#aebac1" class=" text-xl "/>
                    </button>
                    <button class="rounded-full hover:bg-[#ffffff1a] w-auto p-2">
                        <DotsVerticalIcon fillColor="#aebac1" class=" text-xl "/>
                    </button>
                </div>
            </div>
            <div class="p-4 flex items-center justify-center w-full">
                <input placeholder="Search"  class=" releative bg-[#202c33] placeholder:text-gray-500 text-gray-400 focus:outline-none py-2 text-sm px-10 w-full rounded-lg " type="text">
                <MagnifyIcon fillColor="#aebac1" class="left-4 p-2 absolute"/>
            </div>
            
        </div>

        <ChatView class="pt-96 bg-[#111b21]" />
    </div>
</template>

<script setup>
    import ChatView from '@/views/ChatView.vue'
    import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
    import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
    import MagnifyIcon from 'vue-material-design-icons/Magnify.vue' 
</script>
