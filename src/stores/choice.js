import { defineStore } from 'pinia'

export const useChoiceStore = defineStore({
  id: 'choice',
  state: () => ({
    player_choice: 3,
    cpu_choice: 3
  }),
  actions: {
    setPlayerChoice(x) {
      this.player_choice = x;
    },
    randomCPUChoice() {   
      this.cpu_choice = Math.floor(Math.random()*3); 
    },

  }
})
