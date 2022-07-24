<script>
	import Router from 'svelte-spa-router'
	import routes from '@/routes.js'
	import Navbar from "@/components/Navbar.svelte"
	import MainFooter from "@/components/MainFooter.svelte"
</script>

<Navbar/>

<main>
	<Router { routes } />
</main>

<MainFooter />
