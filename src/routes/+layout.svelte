<script>
	import '../global.css';
	import { page } from '$app/stores';
	import BurgerButton from '$lib/BurgerButton.svelte';
	let toggle = false;
	const toggleNav = () => {
		toggle = !toggle;
	};
</script>

<nav>
	<ul>
		<li>
			<strong>Dennis's Cafe</strong>
		</li>
	</ul>
	<ul>
		<li>
			<a class="link {$page.url.pathname === '/' && 'active'}" href="/">Home</a>
		</li>
		<li>
			<a class="link {$page.url.pathname === '/menu' && 'active'}" href="/menu">Menu</a>
		</li>

		<li>
			<a class="link {$page.url.pathname === '/about' && 'active'}" href="/about">About</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		margin: 1em;
	}
</style>
