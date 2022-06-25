<script setup>
  import { useChoiceStore } from '../stores/choice';
  import { useCountStore } from '../stores/count';
  import { onMounted, ref, computed, watch } from 'vue';
  
  const choice = useChoiceStore();
  const countdown = useCountStore();
  const enableButton = true;
  /**
   * 0 -> Rock
   * 1 -> Paper
   * 2 -> Scissors
   * 3 -> Null
   */
  const setChoiceRock = () => {
    choice.setPlayerChoice(0);
  } 
  const setChoicePaper = () => {
    choice.setPlayerChoice(1);
  }
  const setChoiceScissors = () => {
    choice.setPlayerChoice(2);
  }

  const setCPUChoice = () => {
    choice.randomCPUChoice();
  }

  const result = computed(() => {
    if ((choice.player_choice + 1)%3 == choice.cpu_choice) {
      return "You Lose";
    }
    else if (choice.player_choice == choice.cpu_choice) {
      return "Tie";
    }
    else {
      return "You win";
    }
  });

  const toggleButtonEnable = computed(() => {
    return countdown.countDownDone;
  });

  onMounted(() => {
    countdown.countDownTimer();
  });


</script>

<template>
  <button @click="setChoiceRock(); setCPUChoice()" :disabled="toggleButtonEnable">Rock</button>

  <button @click="setChoicePaper(); setCPUChoice()" :disabled="toggleButtonEnable">Paper</button>

  <button @click="setChoiceScissors(); setCPUChoice()" :disabled="toggleButtonEnable">Scissors</button>

  <br>Your choice: {{choice.player_choice}}
  <br>CPU choice: {{choice.cpu_choice}}
  <br><div v-if="countdown.countDownDone">{{ result }}</div>
  {{countdown.countDown}}

</template>
