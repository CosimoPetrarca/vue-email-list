'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [], //array vuoto di mails
        }
    },

    created() {
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {                
                console.log(response);
                this.emails.push(response.data.response)
            })
        }       
    }
}).mount('#app')