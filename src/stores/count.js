import { defineStore } from "pinia"

export const useCountStore = defineStore({
    id: 'count',
    state: () => ({
        countDown: 3,
        countDownDone: false
    }),
    actions: {
        countDownTimer() {
            
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
                
            }
            else {
                this.countDown = 0
                this.countDownDone = true
                setTimeout(() => {
                    this.countDown = 3
                    this.countDownDone = false
                    this.countDownTimer()
                }, 1000)
                
            }
        }
    }
});