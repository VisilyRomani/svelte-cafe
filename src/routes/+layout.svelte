<script>
	import '../global.css';
	import { page } from '$app/stores';
	$: bg = $page.url.pathname === '/' ? 'dark-bg' : 'light-bg';
</script>

<nav>
	<ul>
		<li>
			<strong class={`${bg}`}>Dennis' Cafe</strong>
		</li>
	</ul>
	<ul>
		<li>
			<a class={`${bg}`} href="/">Home</a>
		</li>
		<li>
			<a class={`${bg}`} href="/menu">Menu</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 5em;
		margin: 0em;
		z-index: 999;
		padding: 1em;
	}

	.dark-bg {
		color: rgb(198, 255, 225);
	}
	.light-bg {
		color: rgb(0, 81, 23);
	}
	strong {
		font-size: xx-large;
	}
</style>
