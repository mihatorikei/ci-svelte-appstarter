<script>
	import {fly, blur} from "svelte/transition"
	
	import svelteLogo from "@/assets/logos/svelte.webp"
	import ciLogo from "@/assets/logos/ci.png"
	import ciSvelte from "@/assets/logos/ci-svelte.webp"
</script>

<div transition:blur={{amount:20}} class="container">

	<section class="grid justify-center gap-3 text-center my-5">

		<div class="flex lg:gap-5 gap-3 justify-center items-center text-4xl my-5">
			<img in:fly={{x: -50, delay: 400}} src="{svelteLogo}" class="lg:w-20 w-20" alt="Svelte logo" />
			+
			<img in:fly={{y: -50, delay: 600}} src={ciLogo} class="lg:w-24 w-20" alt="CodeIgniter logo" />
			=
			<img in:fly={{x: 50, delay: 800}} src="{ciSvelte}" class="lg:w-24 w-20" alt="Codeigniter vite logo" />
		</div>

		<h1 in:fly={{x: 50, delay: 1000}} class="text-4xl font-bold">Welcome To CodeIgniter + Svelte App Starter</h1>
		<h3 in:fly={{x: -50, delay: 1000}} class="text-lg">Take your project to the next level with SevelteJs and CodeIgniter4</h3>

	</section>

	<hr class="border-slate-700 my-3">

	<div in:fly={{y: 50, delay: 1500}} class="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 duration-300 delay-800 lg:text-center tex-left">
		<section>
			<h3 class="text-lg font-bold mb-3">About This Page</h3>
			<p class="my-3">This page may serve you as a homepage, feel free to edit or remove it</p>
			<ul class="children:(py-1)">
				<li>
					<strong>Controller: </strong> <em>app/Controllers/Home.php</em>
				</li>
				<li>
					<strong>View file: </strong> <em>app/Views/index.php</em>
				</li>
				<li>
					<strong>Svelte file: </strong> <em>resources/routes/index.svelte</em>
				</li>
			</ul>
		</section>

		<section>
			<h3 class="text-lg font-bold mb-3">Go Further</h3>
			<p class="my-3">Here are some useful links</p>
			<ul class="children:(text-sky-500 py-1 font-semibold)">
				<li><a href="https://github.com/firtadokei/codeigniter-vitejs" target="_blank"><i class="bi bi-link-45deg"></i> CodeIgniter Vite Repository</a></li>
				<li><a href="https://codeigniter.com/user_guide" target="_blank"><i class="bi bi-link-45deg"></i> CodeIgniter User Guide</a></li>
				<li><a href="https://svelte.dev/docs/" target="_blank"><i class="bi bi-link-45deg"></i> Svelte Documentation</a></li>
			</ul>
		</section>
	</div>

</div>
