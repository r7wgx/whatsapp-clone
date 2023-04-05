<template>
        <div class="bg-[#00a884] w-full max-h-1/2">
            <div class="flex items-center justify-center p-5 gap-3 text-[#e9edef]">
                <img src="whatsapp.png" class="w-12">
                <h2 class="text-xl">WhatsApp Web</h2>
            </div>
        </div>
        <div class="w-5/6 m-auto md:px-40 h-96 rounded-lg my-10 max-md:px-5 bg-white flex flex-wrap items-center max-md:justify-center md:justify-between">
            <h1 class="text-2xl">Don't just use whatsapp from your computer, <br> use it from anywhere</h1>
            <div class="shadow-md items-center justify-center text-[#e9edef] rounded-lg flex">
                <GoogleLogin :callback="callback"/>
            </div>
        </div>
</template>

<script setup>
import axios from "axios";

const callback = async (response) => {
    console.log(response);
    try {
        let res = await axios.post("http://localhost:4001/api/google-login", {
        token: response.credential
        }, {
        withCredentials: true
        });
        console.log(res.data);
    } catch (error) {
        console.log("login error whatsapp", error.response);
    }
}
</script>
