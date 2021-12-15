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
			<button v-if="!endOfQuestions" @click="checkAnswer(index)" class="quiz__answer" v-for="(answer, index) in currentQuestion.answers" :ref="setItemRef" >
				{{ answer }}
			</button>

			<!-- Renders if we are at the end of questionsList -->
			<button v-else @click="nextQuestion(index)" class="quiz__answer--end"> Click here to reset </button>
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
			correctClicked: false,
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
		nextQuestion(index) {
			event.target.blur()
			if(index === this.questionsList.length || this.correctClicked) {
				this.resetsInputs();
				if (this.questionsList.length <= this.index) {
					this.index = 0;
				} else {
					this.index += 1;
				}
			} else {
				this.output = "You must get the right answer first"
			};
		},

		//Checks whether the first character in the answer you click matches with the correctAnswer in the current question (which is determined by the index)
		checkAnswer(index) {
			if(this.correctClicked) {
				return;
			}
			const answerCheck = index === this.correctAnswer;
			this.renderOutput(answerCheck)

			if(answerCheck) {
				event.target.classList.add('quiz__answer--correct');
				this.correctClicked = true;
			} else {
				event.target.classList.add('quiz__answer--incorrect')
			}
		},

		//Decides what output to render depending on the boolean value of answerCheck
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
			this.correctClicked = false;
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
	width: 100%;
	margin-bottom: 1rem;
	padding: 5.28rem 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	font-size: 2rem;
	font-weight: bold;
	cursor: pointer;
	background-color: white;
	text-align: center;
}

.quiz__answer {
	display: block;
	width: 100%;
	text-align: left;
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

.quiz__button:active {
	background-color: rgb(70, 70, 70);
}

/* Removes the sticky hover effect on touch devices */
@media only screen and (max-width: 1024px) {
	.quiz__button:hover {
		background-color:var(--component-button-background);
	}
	.quiz__button:active {
	background-color: rgb(70, 70, 70);
	}
}
</style>
