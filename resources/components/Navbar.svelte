<script>
	import { link } from 'svelte-spa-router'
	import active from 'svelte-spa-router/active'
</script>

<nav class="py-4 mb-10 border-b border-primary-500">
	<div
		class="container">
		<div
			class="flex">
			<ul
				class="flex gap-3 w-max">
				<li>
					<a href="/" use:link use:active>Home</a>
				</li>
				<li>
					<a href="/about" use:link use:active>About</a>
				</li>
			</ul>
			<ul
				class="flex gap-3 w-max ml-auto">
				<li>
					<a href="https://github.com/firtadokei/ci-svelte-appstarter">
						<i class="bi bi-github text-2xl"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
