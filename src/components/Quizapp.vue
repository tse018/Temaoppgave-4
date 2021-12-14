<template>
	<div class="quiz">
		<!-- Contains the current question determined by index. -->
		<div class="quiz__question">
			<p>
				{{ !endOfQuestions ? questionsList[index].question : "No more questions" }}
			</p>
		</div>

		<!-- Contains all the clickable answer choices, depending on which question you are currently on.
		(NOTE: This can be better solved with v-for, have to take a look at it )
		-->
		<div class="quiz__answers">
			<!-- Checks if we are NOT at the end of questionsList, by using computed value in endOfQuestions -->
			<p  v-if="!endOfQuestions" @click="checkAnswer(index)" class="quiz__answer" v-for="(answer, index) in currentQuestion.answers" :ref="setItemRef" >
				{{ answer }}
			</p>

			<!-- Renders if we are at the end of questionsList -->
			<p v-else @click="nextQuestion()" class="quiz__answer--end"> Click here to reset </p>
		</div>

		<!-- Outputs whether the answer you clicked is correct or incorrect -->
		<p class="quiz__output-text">
			{{ !endOfQuestions ? this.output : 'No more questions' }}
		</p>

		<button @click="nextQuestion(index, answer)"  class="quiz__button"  >
			{{!endOfQuestions ? 'Next question' : 'Reset'}}
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//Array created with refs, used to reset the classes on next question
			itemRefs: [],

			//Value used to iterate between the questions
			index: 0,

			//Contains all the questions which gets iterated by index.
			questionsList: [
				{
					question: 'Who invented JavaScript?',
					answers: [
						
						'A. Dennis Ritchie',
						'B. Guido van Rossum',
						'C. Brendan Eich',
						'D. Bjarne Stroustrup',
					],
					correctAnswer: 2,
				},
				{
					question: 'Who invented Vue?',
					answers: [
						'A. Evan You',
						'B. Jordan Walke',
						'C. Misko Hevery',
						'D. Rich Harris',
					],
					correctAnswer: 0,
				},
				{
					question: 'Who invented CSS?',
					answers: [
						'A. Tim Berners Lee',
						'B. Mark Zuckerberg',
						'C. Tim Berners Lee',
						'D. Håkon Wium Lie',
					],
					correctAnswer: 3,
				},
			],

			output: 'Output here'
		};
	},

	computed: {
		//computes the current question
		currentQuestion() {
			return this.questionsList[this.index];
		},

		//computes a boolean value used in the logic to check whether we're at the last question or not
		endOfQuestions() {
			return this.questionsList.length === this.index;
		},

		correctAnswer() {
			return this.questionsList[this.index].correctAnswer;
		},
	},

	methods: {
		setItemRef(el) {
			if (el) {
				this.itemRefs.push(el)
			}
		},

	
		//Changes to the next question and resets index when you are at the end of the questionList.
		nextQuestion() {
			this.resetsInputs();
			if (this.questionsList.length <= this.index) {
				this.index = 0;
			} else {
				this.index += 1;
			}
		},

		//Checks whether the first character in the answer you click matches with the correctAnswer in the current question (which is determined by the index)
		checkAnswer(index) {
				
			const answerCheck = index === this.correctAnswer;
			this.renderOutput(answerCheck)
			event.target.classList.add(answerCheck ? 'quiz__answer--correct' : 'quiz__answer--incorrect')
			
		},

		renderOutput(answerCheck) {
			const output = answerCheck ? 'Correct Answer!' : 'Incorrect Answer, Try Again!';

			this.output = output
			
		},

		//Removes the classes applied on click from the answer
		resetsInputs() {
			// this.$refs.setRef.classList.add("quiz__answer--incorrect")
			if(!this.endOfQuestions) {
			this.itemRefs.forEach(answer => {
				answer.classList.remove('quiz__answer--incorrect')
				answer.classList.remove('quiz__answer--correct')
			})
			}
		
			this.itemRefs = [];
			this.output = "Output here"
		},
	},
};
</script>

<style>
.quiz {
	margin: 0 auto;
	padding: 1rem 0;
	max-width: var(--component-width);
	background-color: var(--primary);
	border: var(--component-border);
	border-radius: 2px;
}

.quiz__question {
	padding: 1rem;
	font-size: 1.5rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
}

.quiz__answer--end {
	margin-bottom: 1rem;
	padding: 5.6rem 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	font-size: 2rem;
	font-weight: bold;
	cursor: pointer;
	background-color: white;
	text-align: center;
}

.quiz__answer {
	padding: 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	cursor: pointer;
	background-color: white;
}

.quiz__answer:last-child {
	margin-bottom: 1rem;
}

.quiz__answer:active {
	background: rgb(139, 139, 139);
}

.quiz__answer--correct {
	background: lightgreen;
}

.quiz__answer--incorrect {
	background: lightpink;
}

.quiz__output-text {
	padding: 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	background-color: white;
	text-align: center;
	font-style: italic;
	color: rgb(104, 103, 103);
}

.quiz__button {
	margin-top: 1.5rem;
	width: 100%;
	border-radius: 2px;
	padding: 1em 1em;
	background-color: var(--component-button-background);
	color: var(--component-button-color);
	cursor: pointer;
	font-weight: bold;
}

.quiz__button:hover {
	background-color: var(--component-button-hover);
}
</style>
