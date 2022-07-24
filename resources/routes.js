import Home from '@/routes/index.svelte'
import About from '@/routes/about.svelte'
import NotFound from '@/routes/notFound.svelte'

const routes = {
    '/': Home,

    '/about': About,

    '*': NotFound,
}

export default routes