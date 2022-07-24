<script>
    import { blur, scale } from 'svelte/transition'

    const fetchingData = async () => ( await fetch('info') ).json()
</script>

<div in:blur={{delay: 500}} out:blur class="container">

    <div class="text-center">

        <div in:scale={{start: 2}}>
            <h2 class="text-4xl"><i class="bi bi-info-circle-fill"></i></h2>
            <h3 class="text-3xl font-bold mb-5">About page</h3>
        </div>

        <!-- Simple fetching example -->
        <div>
            {#await fetchingData()}
            
            <div transition:scale class="my-5">
                <i class="text-5xl bi bi-fan block spin"></i>
                <p>Please wait...</p>
            </div>

            {:then value}
            <div in:scale={{start: 2, delay: 500}}>
                <p>This is a simple fetching example using <code class="bg-dark-500 bg-opacity-50 p-1">fetch API</code></p>
                <table class="w-max mx-auto my-5 children:(border-b border-slate-600 last:!border-none)">
                    {#each value as {name, version}}
                        <tr>
                            <td class="p-2">{ name }</td>
                            <td class="p-2">{ version }</td>
                        </tr>
                    {:else}
                        <tr>
                            <td colspan="2" class="text-center text-red-500">Empty data</td>
                        </tr> 
                    {/each}
                </table>
            </div>

            {:catch}

            <p class="text-red-500 font-bold">Error, while fetching</p>

            {/await}

        </div>

        <hr class="my-5 border-slate-600" />

        <p>This file lives in <code class="bg-dark-500 bg-opacity-50 p-1">resources/routes/about.svelte</code> feel free to edit or remove it</p>

    </div>
    
</div>