<script setup>
  import { useChoiceStore } from '../stores/choice';
  import { onMounted, ref, computed } from 'vue';
  
  const main = useChoiceStore();
  /**
   * 0 -> Rock
   * 1 -> Paper
   * 2 -> Scissors
   * 3 -> Null
   */
  const setChoiceRock = () => {
    main.setPlayerChoice(0);
  } 
  const setChoicePaper = () => {
    main.setPlayerChoice(1);
  }
  const setChoiceScissors = () => {
    main.setPlayerChoice(2);
  }

  const result = computed(() => {
    if ((main.player_choice + 1)%3 == main.cpu_choice) {
      return "You Lose";
    }
    else if (main.player_choice == main.cpu_choice) {
      return "Tie";
    }
    else {
      return "You win";
    }
  })

  onMounted(() => {
    setInterval(main.randomCPUChoice(), 2000);
  });


</script>

<template>
  <button @click="setChoiceRock()">Rock</button>

  <button @click="setChoicePaper()">Paper</button>

  <button @click="setChoiceScissors()">Scissors</button>

  <br>Your choice: {{main.player_choice}}
  <br>CPU choice: {{main.cpu_choice}}
  <br>{{ result }}
</template>
