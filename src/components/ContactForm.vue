<template>
	<form class="contact overflow-scrollbar">
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

					<input class="contact__input contact__input--zipcode" type="number" name="postadress" placeholder="Zip code" v-model="form.postAdress" />
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
				postAdress: null,
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
};
</script>

<style>
.contact {
	margin: 0 auto;
	position: relative;
	width: 100%;
	max-width: 550px;
	font-size: 1rem;
	background-color: var(--primary);
	padding: 1rem;
	height: 80vh;
	border: 2px solid #e5e5e5;
}

.contact__field {
	border: 2px solid #555;
	padding: 1rem;
	margin-top: 1rem;
}

.contact__title {
	margin-left: 10px;
	font-size: 1rem;
	font-weight: bold;
}

.contact__label {
	display: block;
	margin-bottom: 0rem;
	font-size: 1rem;
}

.contact__input {
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	border-radius: 2px;
	width: 100%;
	font-size: 1rem;
	border: 2px solid #b3b3b3;
}

.contact__input:focus {
	border: 2px solid #555;
}

/* -webkit-appearance:none - Removes the default arrow on select taken from: https://stackoverflow.com/questions/16603979/how-to-remove-the-default-arrow-icon-from-a-dropdown-list-select-element */
.contact__select {
	display: block;
	-webkit-appearance: none;
	background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
		white no-repeat 96%;
}

/* Styles textarea input */
.contact__input--textarea {
	display: block;
	width: 100%;
	min-height: 10rem;
}

.contact__submit {
	margin-top: 1.5rem;
	width: 100%;
	border-radius: 2px;
	padding: 0.7em 1em;
	background-color: black;
	color: white;
	cursor: pointer;
}

.contact__submit:hover {
	background-color: rgb(80, 80, 80);
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
