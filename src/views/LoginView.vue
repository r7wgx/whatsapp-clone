<template>
        <div class="bg-[#00a884] w-full max-h-1/2">
            <div class="flex items-center justify-center p-5 gap-3 text-[#e9edef]">
                <img src="whatsapp.png" class="w-12">
                <h2 class="text-xl">WhatsApp Web</h2>
            </div>
        </div>
        <div class="w-5/6 m-auto md:px-40 h-96 rounded-lg my-10 max-md:px-5 bg-white flex flex-wrap items-center max-md:justify-center md:justify-between">
            <h1 class="text-2xl">Don't just use whatsapp from your computer, <br> use it from anywhere</h1>
            <button class="bg-[#111] hover:bg-[#11111111] hover:text-[#111] border-[#111111] border-2  py-4 px-5 gap-4 items-center justify-center text-[#e9edef] rounded-lg flex">
                <img src="google.png" class="w-8 h-8">
                <GoogleLogin/>
                <span>sign in google account</span>
            </button>
        </div>
</template>

<script setup>
</script>
