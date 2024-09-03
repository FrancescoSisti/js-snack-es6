console.log(`JS OK`);

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            counter: 0
        }
    },
    methods: {
        incrementCounter() {
            this.counter++;
            console.log(this.counter);
        }
    }
}).mount('#app')




