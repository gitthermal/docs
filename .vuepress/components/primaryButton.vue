<template>
	<a class="button button--primary">{{ text }}</a>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="sass">
.button
	cursor: pointer
	padding: .5rem 1rem
	border-radius: 5rem
	font-family: inherit
	font-size: 14px
	display: inline-block
	text-align: center
	user-select: none

	&:hover
		text-decoration: none !important

.button--primary
	color: white
	background-color: #00adb5

.button--disable
	opacity: .6
	cursor: not-allowed
</style>
