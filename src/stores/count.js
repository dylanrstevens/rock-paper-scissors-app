import { defineStore } from "pinia"

export const useCountStore = defineStore({
    id: 'count',
    state: () => ({
        countDown: 3,
        countDownDone: false,
        player_choice: 2,
        cpu_choice: 2,
        cpu_score: 0,
        player_score: 0
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
                this.executeScoreCount()            
                setTimeout(() => {
                    this.countDown = 3
                    this.countDownDone = false
                    this.countDownTimer()
                }, 2500)
            }
            
        },
        setPlayerChoice(x) {
            this.player_choice = x;
        },
        randomCPUChoice() {   
            this.cpu_choice = Math.floor(Math.random()*3); 
        },
        executeScoreCount() {
            if ((this.player_choice + 1)%3 == this.cpu_choice) {
                this.cpu_score++;
            }
            else if (!(this.player_choice == this.cpu_choice)) {
                this.player_score++;
            }
        }
    }
});