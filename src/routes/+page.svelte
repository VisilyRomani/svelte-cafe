<div class="hero">
	<div class="hero-content">
		<div class="animate">
			<h3 class="hero-h">Fine Canadian and Chinese Cuisine</h3>
			<a class="menu" href="/menu">Menu</a>
		</div>
	</div>
</div>

<main class="container">
	<h3>About Us</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit est eu turpis
		facilisis, in pellentesque ligula vehicula. Vestibulum ac nunc eget purus malesuada egestas.
		Phasellus dictum, nulla sed lacinia gravida, velit justo aliquet elit, ac ullamcorper eros ex a
		velit. Nullam euismod, neque ut posuere bibendum, ex ex vehicula velit, quis vehicula metus
		metus ac nisi. Nunc rhoncus libero vel libero scelerisque, id sodales felis pharetra. Integer
		gravida, metus sed rutrum cursus, nisl turpis pellentesque arcu, eu laoreet lorem justo id odio.
	</p>
	<p>
		Curabitur vel ex eget nulla varius laoreet. Fusce auctor libero eu diam volutpat, quis suscipit
		quam eleifend. Sed vel nisl sed urna scelerisque efficitur. Vivamus euismod metus sit amet
		lectus euismod, nec malesuada elit consequat. Ut non dolor nec mi tristique interdum. In ut
		volutpat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
		turpis egestas.
	</p>
	<p>
		Praesent aliquam, ligula vel vehicula malesuada, dolor lorem malesuada urna, ac viverra odio
		nunc ac odio. Vivamus vel lorem in mi pharetra euismod. Sed congue, nulla a lacinia fermentum,
		nulla nulla cursus sem, at euismod mi ex a turpis. Suspendisse non augue quis nulla luctus
		euismod eu in ex. Cras feugiat arcu id nunc rhoncus, non volutpat nunc facilisis. Integer eget
		velit quis elit condimentum vestibulum eget vel arcu.
	</p>

	<article class="grid">
		<div>
			<h3>Contact</h3>
			<p><strong>Addr:</strong> 414 Main St, Foam Lake, SK</p>
			<p>
				<strong>Phone:</strong>
				1-306-272-4161
			</p>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.913307176723!2d-103.5388718120066!3d51.64311272819363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e2a3989bbe6757%3A0x8fc919f7914aa6d2!2sDennis&#39;s%20Cafe!5e0!3m2!1sen!2sca!4v1696861347777!5m2!1sen!2sca"
			width="100%"
			height="100%"
			title="map"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</article>
	<footer>
		<small
			>Website developed by Michael Wong (<a href="https://github.com/VisilyRomani/svelte-cafe"
				>Source code</a
			>)</small
		>
	</footer>
</main>

<style>
	.hero-h {
		color: rgb(198, 255, 225);
	}
	.animate {
		animation: fadein 3s;
	}
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.hero-content {
		position: absolute;
		width: 100%;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.493);
	}
	.menu {
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 3em;
		padding-right: 3em;
		border-radius: 5px;
		text-decoration: none;
		max-width: 10em;
		color: aliceblue;
		border: 1px aliceblue solid;
	}
	a:hover {
		box-shadow: inset 1px 1px 10px white;
	}
	article {
		margin-bottom: 2em;
	}
	.container {
		margin-top: 2em;
		max-width: 40em;
	}

	.hero {
		height: 90vh;
		background-color: #394046;
		background-image: url('/src/lib/asset/Hero.jpg');
		background-position: center;
		background-size: cover;
	}
	footer {
		padding-top: 1em;
		padding-bottom: 1em;
	}
</style>
