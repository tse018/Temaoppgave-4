<template>
	<form class="contact">
		<fieldset class="contact__field">
			<legend class="contact__title">
				Report any issues
			</legend>

			<label class="contact__label" for="firstname">
				First name
			</label>

			<input class="contact__focus" type="text" name="firstname"  placeholder="First name" v-model="form.firstName"/>

			<label class="contact__label" for="lastname"> 
				Last name
			</label>
         
			<input class="contact__focus" type="text" name="lastname" placeholder="Last name" v-model="form.lastName" />

			<label class="contact__label" for="address">
				Address
			</label>

			<input class="contact__focus" type="text" name="adress"  placeholder="Address" v-model="form.address" />


			<label class="contact__label" for="postadress">
				Zip code
			</label>

			<input class="contact__focus" type="number" name="postadress" placeholder="Zip code" v-model="form.postAdress" />

			<label class="contact__label" for="phonenumber">
				Phonenumber
			</label>

			<input class="contact__focus" type="number" name="phonenumber" placeholder="Phonenumber" v-model="form.phoneNumber" />

			<label class="contact__label" for="email">
				Mail
			</label>

			<input class="contact__focus" type="text" name="mail" placeholder="mail" v-model="form.email" />

			<label class="contact__label--issue" for="issue"> 
				Pick your issue listed below
			</label>

			<select class="contact__select" name="issues-options">

				<option v-bind:value="issues" v-for="(issues, index) in options.issues">
					{{ issues }}
				</option>

			</select>

			<label class="contact__label--message" for="message">
				Additional information
			</label>

			<textarea class="contact__focus--message" type="textarea" name="message" placeholder="Additional information" v-model="form.message" />

			<button class="contact__submit" @click="submit_form">
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
				issues: ['Network', 'Bug', 'Pricing', 'Discount', 'Service', 'Privacy', 'None of the above'],
			},

			methods: {
				submit_form() {
					alart(`Thank you, ${this.firstName} + ${this.lastName}!`);
				}
			}
		};
	},
};
</script>

<style>
	.contact {
		position: absolute;
		left: 20px;
		width: 200px;

	}
	
	.contact__field {
		border: 2px solid;
	}

	.contact__title {
		height: 40px;
		margin-left: 10px;
		font-size: 25px;
	}

	.contact__label {
		position: relative;
		top: 5px;
		left: 20px;
	}

	.contact__focus {
		margin: -20px 0 0 12px;
		height: 50px;
		padding: 15px 0 0 7px;
	}

	.contact__select {
		position: relative;
		top: 10px;
		left: 20px;
	}

	.contact__label--issue {
		position: relative;
		top: 5px;
		left: 8px;
	}

	.contact__label--message {
		position: relative;
		top: 30px;
		left: 20px;
	}

	.contact__focus--message {
		height: 150px;
		margin: 0 0 0 5px;
		padding: 25px 0 0 14px;
	}

	.contact__submit {
		margin: 10px 0 15px 10px;
		width: 100px;
		height: 50px;
		background-color: black;
		color: white;
		cursor: pointer;
	}

</style>
