<script setup>
  import { useChoiceStore } from '../stores/choice';
  import { useCountStore } from '../stores/count';
  import { onMounted, ref, computed, watch } from 'vue';
  
  
  const choice = useChoiceStore();
  const play = useCountStore();
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

  const result = computed(() => {
    if ((choice.player_choice + 1)%3 == play.cpu_choice) {
      return "You Lose";
    }
    else if (choice.player_choice == play.cpu_choice) {
      return "Tie";
    }
    else {
      return "You win";
    }
  });

  const valString = (val) => {
    if (val == 0) {
      return "Rock"
    }
    else if (val == 1) {
      return "Paper"
    }
    else if (val == 2) {
      return "Scissors"
    }

  }

  const toggleButtonEnable = computed(() => {
    return play.countDownDone;
  });

  onMounted(() => {
    play.countDownTimer();
  });


</script>

<template>
  <button class="rock-button" @click="setChoiceRock()" :disabled="toggleButtonEnable"><img src="../assets/rock.png"><br>Rock</button>

  <button class="paper-button" @click="setChoicePaper()" :disabled="toggleButtonEnable"><img src="../assets/paper.png"><br>Paper</button>

  <button class="scissors-button" @click="setChoiceScissors()" :disabled="toggleButtonEnable"><img src="../assets/scissors.png"><br>Scissors</button>

  <br>You choose - {{valString(choice.player_choice)}}
  <br>The computer chooses - <div style="display:inline" v-if="play.countDownDone">{{valString(play.cpu_choice)}}</div>
  <br><div style="display:inline" v-if="play.countDownDone">{{ result }}</div>
  <br><div>{{play.countDown}}</div>
  <div class="title"></div>
  
</template>

<style src="../assets/style.css"></style>
