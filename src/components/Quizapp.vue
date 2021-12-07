<template>
	<div class="quiz-app">

		<!-- Contains the current question determined by questionIndex. -->
		<div class="quiz-app__question">
			<p>
				{{ questionsList[questionIndex].question }}
			</p>
		</div>

		<!-- Contains all the clickable answer choices, depending on which question you are currently on.
		(NOTE: This can be better solved with v-for, have to take a look at it )
		-->
		<div class="quiz-app__answers-container">
			<p @click="checkAnswer" class="quiz-app__answers-container--answers" v-for="question in currentQuestion.answers">
				{{ question }}
			</p>
		</div>

		<!-- Outputs whether the answer you clicked is correct or incorrect -->
		<p class="quiz-app__output-text">
			{{ outputText }}
		</p>

		<button v-if="this.questionsList.length === this.questionIndex + 1" @click="nextQuestion">
			Reset
		</button>

		<button @click="nextQuestion" v-else>
			Next question
		</button>

	</div>
</template>

<script>
export default {
	data() {
		return {
			//Variable used to iterate between the
			questionIndex: 0,

			//Contains all the questions which gets iterated by questionIndex.
			questionsList: [
				{
					question: 'Who invented JavaScript?',
					answers: [
						'A. Dennis Ritchie',
						'B. Guido van Rossum',
						'C. Brendan Eich',
						'D. Bjarne Stroustrup',
					],
					correctAnswer: 'C',
				},
				{
					question: 'Who invented Vue?',
					answers: [
						'A. Evan You',
						'B. Jordan Walke',
						'C. Misko Hevery',
						'D. Rich Harris',
					],
					correctAnswer: 'A',
				},
				{
					question: 'Who invented CSS?',
					answers: [
						'A. Tim Berners Lee',
						'B. Mark Zuckerberg',
						'C. Tim Berners Lee',
						'D. Håkon Wium Lie',
					],
					correctAnswer: 'D',
				},
				{	
					question: 'Click reset to start over'
				},
			],

			outputText: 'Output text here',
		};
	},

	computed: {
		//computes the current question
		currentQuestion() {
			return this.questionsList[this.questionIndex];
		},
	},

	methods: {
		//Removes the classes applied on click from the answer
		checkAnswerForClass() {
			const answers = document.querySelectorAll(
				'.quiz-app__answers-container--answers'
			);

			answers.forEach((element) => {
				const elementClassCorrect = element.classList.contains(
					'quiz-app__answers-container--correct'
				);

				const elementClassIncorrect = element.classList.contains(
					'quiz-app__answers-container--incorrect'
				);

				if (elementClassCorrect) {
					element.classList.remove('quiz-app__answers-container--correct');
				} else if (elementClassIncorrect) {
					element.classList.remove('quiz-app__answers-container--incorrect');
				}
			});
		},

		//Changes to the next question and resets questionIndex when you are at the end of the questionList.
		nextQuestion() {
			this.checkAnswerForClass();

			if (this.questionsList.length - 1 <= this.questionIndex) {
				this.questionIndex = 0;
			} else {
				this.questionIndex += 1;
			}

			this.outputText = "output text here";
		},

		//Checks whether the first character in the answer you click matches with the correctAnswer in the current question (which is detirmed by the questionIndex)
		checkAnswer(event) {
			const clickedElement = event.target.innerText.charAt(0);
			const correctAnswer =
				this.questionsList[this.questionIndex].correctAnswer;

			if (clickedElement === correctAnswer) {
				this.outputText = 'Correct answer';
				event.target.classList.add('quiz-app__answers-container--correct');
			} else {
				this.outputText = 'Incorrect answer';
				event.target.classList.add('quiz-app__answers-container--incorrect');
			}
		},
	},
};
</script>

<style>
.quiz-app {
	margin: 0 auto;
	top: 20px;
	max-width: 550px;
	background-color: var(--primary);
	border: 2px solid #e5e5e5;
	border-radius: 2px;
	padding: 1rem 0;
}

.quiz-app__question {
	font-size: 1.5rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 1rem;
}

.quiz-app__answers-container--answers-done {
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	font-size: 2rem;
	padding: 4.59rem;
	font-weight: bold;
	cursor: pointer;
	background-color: white;
}
.quiz-app__answers-container--answers {
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 1rem;
	cursor: pointer;
	background-color: white;
}

.quiz-app__answers-container--answers:last-child {
	margin-bottom: 1rem;
}

.quiz-app__answers-container--answers:active {
	background: rgb(139, 139, 139);
}

.quiz-app__answers-container--correct {
	background: lightgreen;
}

.quiz-app__answers-container--incorrect {
	background: lightpink;
}

.quiz-app__output-text {
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 1rem;
	background-color: white;
	text-align: center;
	font-weight: bold;
}

.quiz-app__button {
	margin-top: 1.5rem;
	width: 100%;
	border-radius: 2px;
	padding: 0.7em 1em;
	background-color: black;
	color: white;
	cursor: pointer;
	font-weight: bold;
}

.quiz-app__button:hover {
	background-color: rgb(80, 80, 80);
}
</style>
