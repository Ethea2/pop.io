<script lang="ts">
    import HomepageNavbar from '$lib/components/HomepageNavbar.svelte'
    let session = false
</script>

<main
    class="w-full min-h-screen flex flex-col items-center bg-gradient-to-br via-white from-purple-light to-purple-light font-sans"
>
    {#if session === true}
        <HomepageNavbar user="iamthewray" />
        <section class="w-full">hello</section>
    {:else}
        <section class="w-[25%] min-h-screen flex flex-col gap-6 items-center justify-center">
            <h1 class="text-5xl font-semibold">Welcome to <span class="popio-heading-style">pop.io</span>!</h1>
            <div class="w-full flex flex-col gap-4">
                <button class="button-primary"><a href="/signin">Login</a></button>
                <button class="button-primary"><a href="/signup">Sign Up</a></button>
            </div>
        </section>
    {/if}
</main>
