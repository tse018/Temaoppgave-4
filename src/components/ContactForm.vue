<template>
	<form @submit.prevent="submitForm" class="contact overflow-scrollbar">
		<fieldset class="contact__field">
			<legend class="contact__title">
				Report Any Issues
			</legend>

			<label class="contact__label" for="firstname">
				First name
			</label>
			<input class="contact__input" type="text" name="firstname" placeholder="First name" v-model="form.firstName" />


			<label class="contact__label" for="lastname">
				Last name
			</label>
			<input class="contact__input" type="text" name="lastname" placeholder="Last name" v-model="form.lastName" />


			<div class="contact__grouped-inputs">
				<div class="contact__grouped-inputs--left">
					<label class="contact__label contact__label--address" for="address">
						Address
					</label>
					<input class="contact__input contact__input--address" type="text" name="adress" placeholder="Address" v-model="form.address" />
				</div>


				<div class="contact__grouped-inputs--right">
					<label class="contact__label contact__label--zipcode" for="postadress">
						Zip code
					</label>
					<input class="contact__input contact__input--zipcode" type="number" name="postadress" placeholder="Zip code" v-model="form.postAddress" />
				</div>
			</div>


			<label class="contact__label" for="phonenumber">
				Phonenumber
			</label>
			<input class="contact__input" type="number" name="phonenumber" placeholder="Phonenumber" v-model="form.phoneNumber" />


			<label class="contact__label" for="email">
				E-Mail
			</label>
			<input class="contact__input" type="text" name="mail" placeholder="E-Mail" v-model="form.email" />
 

			<label class="contact__label contact__label--issue" for="issue">
				Pick your issue listed below
			</label>
			<select class="contact__input contact__select" name="issues-options">
				<!-- loops options and render all the issuses and v-bind:value to show in values attribute -->
				<option v-bind:value="issues" v-for="(issues, index) in options.issues">
					{{ issues }}
				</option>
			</select>


			<label class="contact__label contact__label--textarea" for="message">
				Additional information
			</label>
			<textarea class="contact__input contact__input--textarea" type="textarea" name="message" placeholder="Additional information" v-model="form.message" />


			<button class="contact__submit">
				Submit
			</button>
		</fieldset>
	</form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				firstName: null,
				lastName: null,
				address: null,
				postAddress: null,
				birthday: null,
				phoneNumber: null,
				email: null,
				message: null,
				issues: [],
			},

			options: {
				issues: [
					'Network',
					'Bug',
					'Pricing',
					'Discount',
					'Service',
					'Privacy',
					'None of the above',
				],
			},
		};
	},
	methods: {
		submitForm() {
				alert("Thank you for submitting")
		}
	},
};
</script>

<style>
.contact {
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: var(--component-width);
	background-color: var(--primary);
	padding: 1rem;
	height: 80vh;
	border: var(--component-border)
}

.contact__field {
	border: 2px solid rgb(119, 119, 119);
	padding: 2rem 1rem;
}

.contact__title {
	font-weight: bold;
}

.contact__label {
	display: block;
}

.contact__input {
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	border-radius: 2px;
	width: 100%;
	border: 2px solid #b3b3b3;
	outline: none;
}

.contact__input:focus {
	border: 2px solid #555;
}

.contact__select {
	-webkit-appearance: none;
	background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
		white no-repeat 96%;
}

/* Styles textarea input */
.contact__input--textarea {
	min-height: 10rem;
	resize: none;
}

.contact__submit {
	margin-top: 1.5rem;
	width: 100%;
	border-radius: 2px;
	padding: 1em;
	background-color: var(--component-button-background);
	color: var(--component-button-color);
	font-weight: bold;
	cursor: pointer;
}

.contact__submit:hover {
	background-color: var(--component-button-hover)
}

@media (min-width: 500px) {
	/* Makes address and zipcode display next to each other */
	.contact__grouped-inputs {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.contact__grouped-inputs--left {
		width: 80%;
	}

	.contact__grouped-inputs--right {
		width: 42%;
	}
}
</style>
