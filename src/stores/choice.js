import { defineStore } from 'pinia'

export const useChoiceStore = defineStore({
  id: 'choice',
  state: () => ({
    player_choice: 2
  }),
  actions: {
    setPlayerChoice(x) {
      this.player_choice = x;
    }
  }
})
