<template>
	<form class="contact">
		<fieldset class="contact__field">
			<legend class="contact__title">
				Report any issue
			</legend>

			<label> 
				<input class="contact__firstname" type="text" name="firstname" id="firstame" placeholder="First name" v-model="form.firstName" />
			</label>

			<label>
				<input class="contact__lastname" type="text" name="lastname" id="lastname" placeholder="Last name" v-model="form.lastName" />
			</label>

			<label>
				<input class="contact__adress" type="text" name="adress" id="address" placeholder="Adress" v-model="form.address" />
			</label>

			<label>
				<input class="contact__postadress" type="text" name="postadress" id="postadress" placeholder="Postadress" v-model="form.postAdress" />
			</label>

			<label>
				<input class="contact__phonenumber" type="text" name="phonenumber" id="phonenumber" placeholder="Phonenumber" v-model="form.phoneNumber" />
			</label>

			<label>
				<input class="contact__email" type="text" name="email" id="email" placeholder="E-mail" v-model="form.email" />
			</label>

			<input class="contact__message" type="text" name="message" id="message" placeholder="Message" v-model="form.message" />
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
			},

			options: {
				gender: ['Male', 'Female', 'Skip'],
			},
		};
	},
};
</script>

<style>
	.contact {
		position: absolute;
		top: 500px;
		left: 600px;
		width: 30vw;
	}

	.contact__form {
		position: absolute;
	}

	.contact__title {
		font-size: 60px;
	}
</style>
