<script setup>
  import { useChoiceStore } from '../stores/choice';
  import { useCountStore } from '../stores/count';
  import { onMounted, ref, computed } from 'vue';

  
  const play = useCountStore();
  /**
   * 0 -> Rock
   * 1 -> Paper
   * 2 -> Scissors
   * 3 -> Null
   */
  const setChoiceRock = () => {
    play.setPlayerChoice(0);
  } 
  const setChoicePaper = () => {
    play.setPlayerChoice(1);
  }
  const setChoiceScissors = () => {
    play.setPlayerChoice(2);
  }

  const result = computed(() => {
    if ((play.player_choice + 1)%3 == play.cpu_choice) {
      return "You Lose";
    }
    else if (play.player_choice == play.cpu_choice) {
      return "Tie";
    }
    else {
      return "You win";
    }
  });

  const returnImagePlayer = computed(() => {
    if (play.player_choice == 0) {
      return "src/assets/rock-left.png"
    }
    else if (play.player_choice == 1) {
      return "src/assets/paper-left.png"
    }
    else {
      return "src/assets/scissors-left.png"
    }
  });

  const returnImageCPU = computed(() => {
    if (play.cpu_choice == 0) {
      return "src/assets/rock-right.png"
    }
    else if (play.cpu_choice == 1) {
      return "src/assets/paper-right.png"
    }
    else {
      return "src/assets/scissors-right.png"
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
  <div class="GameBox">
    <div class="Buttons">
      <button class="rock-button" @click="setChoiceRock()" :disabled="toggleButtonEnable"><img src="../assets/rock-left.png"><br>Rock</button>

      <button class="paper-button" @click="setChoicePaper()" :disabled="toggleButtonEnable"><img src="../assets/paper-left.png"><br>Paper</button>

      <button class="scissors-button" @click="setChoiceScissors()" :disabled="toggleButtonEnable"><img src="../assets/scissors-left.png"><br>Scissors</button>
    </div>
    <div class="YourChoice">
       <img :src="(`${returnImagePlayer}`)"> <br> You choose - {{valString(play.player_choice)}}
    </div>
    <div v-if="play.countDownDone" class="CPUChoice">
      <img :src="(`${returnImageCPU}`)"> <br> CPU Choice - <div style="display:inline" v-if="play.countDownDone">{{valString(play.cpu_choice)}}</div>
    </div>
    <div v-if="!play.countDownDone" class="CPUChoice">
      <img class="non-visible" :src="(`${returnImageCPU}`)"> <br> CPU Choice - <div style="display:inline" v-if="play.countDownDone">{{valString(play.cpu_choice)}}</div>
    </div>
    <div class="Player_Score">
      Your Score:<br>
      {{play.player_score}}
    </div>
    <div class="counter">
      <br v-if="!play.countDownDone">
      <div v-if="play.countDownDone">
        {{ result }}
      </div>
      {{play.countDown}}
    </div>
    <div class="Cpu_Score">
      CPU Score:<br>
      {{play.cpu_score}}
    </div>
  </div>
</template>

<style src="../assets/style.css"></style>
