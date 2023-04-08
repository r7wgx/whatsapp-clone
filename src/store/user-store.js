import axios from "axios";
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid';
import { db } from '@/firebase-init'
import { 
  setDoc, 
  getDoc, 
  doc, 
  getDocs, 
  collection, 
  updateDoc, 
  arrayUnion, 
  onSnapshot,
  query
} from 'firebase/firestore';

axios.defaults.baseURL = "http://localhost:4001/"

export const useUserStore = defineStore('user', {
  state: () => ({
    sub: '',
    picture: '',
    email: '',
    lastName: '',
    firstName: '',
    allUsers: [],
    userDataForChat: [],
    findUser:  false
  }),

  actions: {
    async getUserDetailGoogle(data ) {
      await console.log(data)
      try {
          let res = await axios.post("api/google-login", {
            token: data.credential
          }, {
            withCredentials: true
          });

          let userExists = await this.checkUserExists(res.data.sub);

          if(!userExists) await this.saveUserDetails(res)

          this.sub = res.data.sub
          this.picture = res.data.picture
          this.email = res.data.email
          this.lastName = res.data.family_Name
          this.firstName = res.data.given_name
      } catch (error) {
          console.log("login error whatsapp", error.response);
      }
    },
    async getAllUsers() {
     const querySnapshot = await getDocs(collection(db, "users"));
     let results = [];
     querySnapshot.forEach(doc => {results.push(doc.data());}); 
     if(results.length) {
        this.allUsers = [];
        results.forEach(res => {this.allUsers.push(res)});
     }
    },
    async checkUserExists(id) {

      
       const docRef =  doc(db, "users", id);      
       const docSnap = await getDoc(docRef);
       return docSnap.exists()
      },
    async saveUserDetails(res) {
        try {
          await setDoc(doc(db, "users", res.data.sub), {
            sub: res.data.sub,
            email: res.data.email,
            picture: res.data.picture,
            firstName: res.data.given_name,
            lastName: res.data.family_name
          })
        } catch (error) {
          console.log("Save User Details error==>", error);
        } 
    },

    async sendMessage (data) {
      try {
        if (data.chatId) {
          await updateDoc(doc(db, `chat/${data.chatId}`), {
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: arrayUnion({
              sub: this.sub,
              message: data.message,
              createdAt: Date.now()
            })
          })
        } else {
          let id = uuid()
          await setDoc(doc(db, `chat/${id}`), {
            sub1: this.sub,
            sub2: data.sub2,
            sub1HasViewed: false,
            sub2HasViewed: false,

            messages: [{
              sub: this.sub,
              message: data.message,
              createdAt: Date.now()
            }]

          })

          this.userDataForChat[0].id = id
          this.showFindFriends = false
        }
      } catch (error) {
        console.log(error)
      }
    },
    
    logout() {
      this.sub = ''
      this.picture = ''
      this.email = ''
      this.lastName = ''
      this.firstName = ''
      this.allUsers = []
      this.chats = []
      this.userDataForChat = []
      this.removeUsersFromFindFriends = []
      this.findUser = false
      this.currentChat = false
    }
  },
})
