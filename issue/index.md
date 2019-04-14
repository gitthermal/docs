# Submit your issue

<div class="form">
	<div class="form__fields">
		<inputText v-model="title" name="title" placeholder="Short title of the issue" class="form__item"/>
		<textareaBox v-model="description" name="description" placeholder="Long description of the issue" :resize=false wrap="hard" :rows=5 class="form__item"/>
		<select v-model="type" class="selectDropdown form__item">
			<option disabled value="">Select issue type</option>
			<option value="bug">Bug</option>
			<option value="feedback">Feedback</option>
			<option value="feature_request">Feature request</option>
		</select>
		<div class="form__image">
			<div class="form__image--header">
				<h3>Images</h3>
				<div @click="addImageField()" class="form__image--header-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
				</div>
			</div>
			<div v-for="(image, index) in images" :key="image.index" class="form__image--field">
				<inputText v-model="images[index]" name="image" placeholder="Paste image url" class="form__item"/>
				<svg @click="removeImageField(index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
			</div>
		</div>
	</div>
  <div>
    <primaryButton @click.native="pushWebhook()" text="Submit" class="form__item"/>
  </div>
</div>

<script>
const discord_webhook = "https://discordapp.com/api/webhooks/566962243879698442/dEbATYXRFMSSBpl7DKknBvDWS6a84dg9HMmsE-KhGR-Ogb09WocZwDM5PYQ7t0rfhKiS"

export default {
	name: "issue",
	data() {
		return {
			title: "",
			description: "",
			type: "",
			images: []
		}
	},
	methods: {
		addImageField() {
			this.images.push("")
		},
		removeImageField(index) {
			this.images.splice(index, 1)
		},
		imageUrlToString(images) {
			let string = ""
			console.log(images)
			for (let i = 0; i < images.length; i++) {
				string = string + images[i] + " \n"				
			}
			console.log(string)
			return string
		},
		messageTypeColor(type) {
			switch (type) {
				case "bug":
					return 0xF04747
				case "feedback":
					return 0x43B581
				case "feature_request":
					return 0xFAA61A
				default:
					return 0x747F8D
			}
		},
		pushWebhook() {
			let data = {
				content: this.imageUrlToString(this.images),
				embeds: [
					{
						title: this.title,
						description: this.description,
						timestamp: new Date(),
						color: this.messageTypeColor(this.type),
						footer: {
							text: window.location.origin
						}
					}
				]
			}
			var xmlhttp = new XMLHttpRequest()
			xmlhttp.open("POST", discord_webhook, true)
			xmlhttp.setRequestHeader("Content-type", "application/json")
			xmlhttp.send(JSON.stringify(data))
		}
	}
}
</script>

<style lang="sass">
.form

	&__fields
		display: flex
		flex-direction: column

	&__item
		margin-bottom: .8rem

	&__image
		display: flex
		flex-direction: column

		&--header
			display: flex
			align-items: center

			&-button
				margin-left: auto
				font-size: .9rem
				cursor: pointer

		&--field
			display: flex
			align-items: center

			input
				width: 100%

			svg
				margin-left: 1rem
				cursor: pointer

.selectDropdown
	border-radius: .3rem
	padding: .5rem .8rem
	border: 1px solid #eeeeee
	font-family: inherit
	outline: none

	&:focus
		border: 1px solid #00adb5
		box-shadow: rgba(#00adb5, .2) 0 0 0 3px
</style>
