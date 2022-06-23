import { defineStore } from 'pinia'

export const useChoiceStore = defineStore({
  id: 'choice',
  state: () => ({
    player_choice: 3,
    cpu_choice: 2
  }),
  actions: {
    setPlayerChoice(x) {
      this.player_choice = x;
    },
    randomCPUChoice() {   
      this.cpu_choice = Math.floor(Math.random()*3); 
    },
    choose() {
      setTimeout(this.randomCPUChoice(), 3000);
    }
    

    /**
     * function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello');   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 3000)
}
     */
  }
})
