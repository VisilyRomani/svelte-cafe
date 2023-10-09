<script lang="ts">
	import type { MenuType, SelectMenuType } from '$lib/types/menu';
	import chinese from '$lib/asset/chinese.json';
	import family from '$lib/asset/family.json';
	import canadian from '$lib/asset/canadian.json';

	let selectValue: SelectMenuType;

	let Menu: MenuType = [];
	// $: if (selectValue === 'chinese') {
	// 	Menu = chinese;
	// }
	$: switch (selectValue) {
		case 'chinese':
			Menu = chinese;
			break;
		case 'canadian':
			Menu = canadian;
			break;
		case 'family':
			Menu = family;
	}
	let CAD = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
</script>

<main class="hero">
	<div class="container">
		<!-- <aside>
            <ul>
                {#each Menu as group}
					<li>
                        <a href={`#${group.group}`}>
                            {group.group}
						</a>
					</li>
				{/each}
			</ul>
		</aside> -->
		<select bind:value={selectValue}>
			<option value="chinese">Chinese Dishes</option>
			<option value="family">Family Dinner</option>
			<option value="canadian">Canadian Dishes</option>
		</select>
		{#each Menu as group}
			<!-- <details> -->
			<h4>
				<strong>
					{group.group}
				</strong>
			</h4>
			<div class="wrap">
				{#each group.items as item}
					<article class="item">
						<div>
							<h6>
								{item.name}
							</h6>
							<ul style="max-width: 500px;">
								{#each item?.consists ?? [] as cons}
									<li>
										<small>
											<p>
												{cons}
											</p>
										</small>
									</li>
								{/each}
							</ul>
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
			<!-- </details> -->
		{/each}
	</div>
</main>

<style>
	p {
		text-wrap: nowrap;
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
		flex-direction: row;
		justify-content: space-between;
		gap: 3em;
	}
	@media only screen and (max-width: 600px) {
		.wrap {
			display: grid;
		}
	}
	article {
		margin: 0;
	}
</style>
