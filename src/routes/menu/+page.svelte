<script lang="ts">
	import type { MenuType, SelectMenuType } from '$lib/types/menu';
	import chinese from '$lib/asset/chinese.json';
	import family from '$lib/asset/family.json';
	import canadian from '$lib/asset/canadian.json';

	let selectValue: SelectMenuType;

	let Menu: MenuType = [];
	$: switch (selectValue) {
		case 'chinese':
			Menu = chinese;
			break;
		case 'family':
			Menu = family;
			break;
	}
	let CAD = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
</script>

<div class="bg" />
<main class="hero">
	<div class="container">
		<select bind:value={selectValue}>
			<option value="chinese">Chinese Dishes</option>
			<option value="family">Family Dinner</option>
		</select>
		{#each Menu as group}
			<h4>
				<strong>
					{group.group}
				</strong>
			</h4>
			<div class="wrap">
				{#each group.items as item}
					<article class="item">
						<div class="center-item">
							<h6>
								{item.name}
							</h6>
							{#if item?.consists}
								<ul>
									{#each item?.consists ?? [] as cons}
										<li>
											<small>
												{cons}
											</small>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
						{#if item.cost !== undefined}
							<p>
								{CAD.format(item.cost)}
							</p>
						{:else}
							<p>
								Sm {CAD.format(item.sm ?? 0)} \ Lg {CAD.format(item.lg ?? 0)}
							</p>
						{/if}
					</article>
				{/each}
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		padding-top: 5em;
	}
	p {
		text-wrap: nowrap;
		justify-content: center;
		margin: 0;
	}

	ul {
		margin: 0.5em;
	}
	h6 {
		margin: 0;
	}

	.bg {
		position: fixed;
		top: 10vh;
		background-image: url('../../lib/asset/bamboo.svg');
		background-size: contain;
		background-attachment: scroll;
		z-index: -99;
		opacity: 0.05;
		height: 100%;
		width: 100%;
	}

	.center-item {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.wrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
		margin-bottom: 2em;
	}
	.item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		gap: 1em;
	}
	@media only screen and (max-width: 600px) {
		.wrap {
			display: grid;
			flex-direction: column;
		}
		.item {
			flex-direction: row;
		}
	}
	article {
		margin: 0;
	}
	select {
		background-color: white;
	}
</style>
