<template>
	<div class="quiz-app">
		<h2>Quiz App</h2>

		<!-- Contains the current question determined by questionIndex. -->
		<div class="quiz-app__question">
			<p>{{ questionsList[questionIndex].question }}</p>
		</div>

		<!-- Contains all the clickable answer choices, depending on which question you are currently on.
		(NOTE: This can be better solved with v-for, have to take a look at it )
		-->
		<div class="quiz-app__answers-container">
			<p class="quiz-app__answers-container--answers" @click="checkAnswer">
				{{ questionsList[questionIndex].answers[0] }}
			</p>

			<p class="quiz-app__answers-container--answers" @click="checkAnswer">
				{{ questionsList[questionIndex].answers[1] }}
			</p>

			<p class="quiz-app__answers-container--answers" @click="checkAnswer">
				{{ questionsList[questionIndex].answers[2] }}
			</p>

			<p class="quiz-app__answers-container--answers" @click="checkAnswer">
				{{ questionsList[questionIndex].answers[3] }}
			</p>
		</div>

		<!-- Outputs whether the answer you clicked is correct or incorrect -->
		<p>{{ outputText }}</p>
		<button @click="nextQuestion">Next question</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
			],

			//Variable used to iterate between the
			questionIndex: 0,

			outputText: 'Output text here',
		};
	},

	methods: {
		//This logic can be done a lot easier with v-for, we have to change it later
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
	background-color: lightgray;
	border: 2px solid black;
	max-width: 75ch;
	margin: 10rem auto;
	border-radius: 2px;
}

.quiz-app__question {
	font-size: 1.5rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 0.5rem;
}

.quiz-app__answers-container--answers {
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 0.2rem 0;
	padding: 0.5rem;
	cursor: pointer;
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
</style>
