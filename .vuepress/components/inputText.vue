<template>
	<input
		type="text"
		:name="name"
		class="input__text"
		:class="disabled"
		:placeholder="placeholder"
		:disabled="disable"
		@input="$emit('input', $event.target.value)"
	>
</template>

<script>
export default {
	name: "InputText",
	props: {
		name: {
			type: String,
			default: "inputField",
			required: true
		},
		placeholder: {
			type: String,
			default: "Enter the value",
			required: true
		},
		disable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		disabled() {
			if (this.disable) {
				return "input__text__disable";
			} else {
				return "";
			}
		}
	}
};
</script>

<style lang="sass">
.input

	&__text
		border-radius: .3rem
		padding: .5rem .8rem
		border: 1px solid #eeeeee
		font-family: inherit
		outline: none

		&:focus
			border: 1px solid #00adb5
			box-shadow: rgba(#00adb5, .2) 0 0 0 3px

		&__disable
			background-color: #eee
			color: #222831
			cursor: not-allowed
			user-select: none
</style>
