import { defineStore } from "pinia"

export const useCountStore = defineStore({
    id: 'count',
    state: () => ({
        countDown: 3,
        countDownDone: false,
        cpu_choice: 2
    }),
    actions: {
        countDownTimer() { 
            if (this.countDown > 0 && this.countDownDone == false) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
                
            }
            else {
                this.countDown = 0
                this.countDownDone = true
                this.randomCPUChoice()
                setTimeout(() => {
                    this.countDown = 3
                    this.countDownTimer()
                    this.countDownDone = false
                }, 2000)
                
                
            }
        },
        randomCPUChoice() {   
            this.cpu_choice = Math.floor(Math.random()*3); 
        },
    }
});