<script lang="ts">
	export let toggle = false;
</script>

<button on:click={() => (toggle = !toggle)} class="burger {toggle === true ? 'is-active' : ''}">
	<div class="line" />
</button>

<style>
	.burger {
		position: relative;
		display: block;
		width: 2em;
		cursor: pointer;
		background: none;
		padding: 0;
		border: none;
	}

	.line,
	.burger:after,
	.burger:before {
		content: '';
		display: block;
		border-radius: 10px;
		width: 100%;
		height: 5px;
		background-color: #b0ffc9;
		margin: 5px 0px;
		transition: 0.4s;
	}

	.is-active .line {
		opacity: 0;
	}

	.burger.is-active:after {
		transform: rotate(45deg) translate(-0.5em, -0.5em);
	}
	.burger.is-active:before {
		transform: rotate(-45deg) translate(-0.5em, 0.5em);
	}

	@media (min-width: 700px) {
	}
</style>
