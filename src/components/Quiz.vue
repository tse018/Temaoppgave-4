<template>
   <div class="quiz">

      <div class="quiz__container" v-if="!showScore">

         <button @click="startQuiz" v-if="!beginQuiz" class="quiz__button">
            Click to start the Quiz
         </button>

         <div v-else="beginQuiz" class="quiz__started">
            <h2 class="quiz__title">
               Quiz have started
            </h2>

            <div class="quiz__counts">
               Question Number {{ currentQuestion + 1 }} / {{ questions.length }}
            </div>

            <div class="quiz__countdown">
               {{ countDown }}
            </div>

            <div class="quiz__task">
               {{ questions[currentQuestion].questionText }}
            </div>

            <div class="quiz__options">

               <button @click="checkAnswers(answer.check)" v-for="(answer, index) in questions[currentQuestion].answerOptions" class="quiz__button">
                  {{ answer.option }}
               </button>

            </div>
         </div>
      </div>
      
      <!-- if showScore = true, this entire div block will show -->
      <div class="quiz__score" v-if="showScore">
         <div class="quiz__result">
            You scored {{ score }} of {{ questions.length }}
         </div>
      </div>
   </div>

</template>

<script>
   export default {
      data() {
         return {
            currentQuestion: 0,
            showScore: false,
            score: 0,
            countDown: 15,
            timer: null,
            beginQuiz: false,

            questions: [
               {
                  questionText: 'Hvilken av disse filmene vant Oscar for beste film??',
                  answerOptions: [
                     { option: 'Hei', check: false },
                     { option: 'Hade', check: false },
                     { option: 'Kanskje', check: false },
                     { option: 'Yes', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'aNo', check: false },
                     { option: 'Adf', check: false },
                     { option: 'dgs', check: false },
                     { option: 'Ja', check: true },
                  ],
               },
            ],
         };
      },

      methods: {
         startQuiz() {
            this.beginQuiz = true;
            this.countingDown();
         },

         checkAnswers(answer) {
            clearTimeout(this.timer);
            const nextQuestion = this.currentQuestion + 1;
            if (answer) {
               this.score = this.score + 1;
            }

            if (nextQuestion < this.questions.length) {
               this.currentQuestion = nextQuestion;
               this.countDown = 15;
               this.countingDown();
            } else {
               this.showScore = true;
            }
         },

         countingDown() {
            if (this.countDown > 0) {
               this.timer = setTimeout(() => {
                  this.countDown -= 1;
                  this.countingDown() }, 1000);
               } else {
                  this.checkAnswers(false);
               }
            }

         },
      };
</script>

<style>
   .quiz {
      border: 2px solid red;
      height: 200px;
   }

   .quiz__button {
      font-size: 30px;
      padding: 20px 0 0 100px;;
   }

</style>