<template>
	<textarea
		:name="name"
		class="textarea__text"
		:class="[disabled, resize ? '' : 'textarea__resize--none']"
		:placeholder="placeholder"
		:disabled="disable"
		@input="$emit('input', $event.target.value)"
		:maxlength="maxlength"
		:minlength="minlength"
		:wrap="wrap"
		:cols="cols"
		:rows="rows"
	/>
</template>

<script>
export default {
	name: "textareaBox",
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
		},
		maxlength: {
			type: Number
		},
		minlength: {
			type: Number
		},
		wrap: {
			type: String,
			default: "off"
		},
		resize: {
			type: Boolean
		},
		cols: {
			type: Number,
			default: 20
		},
		rows: {
			type: Number
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
.textarea

	&__text
		border-radius: .3rem
		padding: .5rem .8rem
		border: 1px solid #eeeeee
		font-family: inherit
		outline: none
		max-width: 100%

		&:focus
			border: 1px solid #00adb5
			box-shadow: rgba(#00adb5, .2) 0 0 0 3px

		&__disable
			background-color: #eee
			color: #222831
			cursor: not-allowed
			user-select: none

	&__resize
		&--none
			resize: none
</style>
