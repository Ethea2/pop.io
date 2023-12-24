<script lang="ts">
    import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte'

    let showSignIn = true;
    
</script>

<main class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br via-white from-purple-light to-purple-light font-sans">
    <div class="w-[80%] h-[80vh] flex items-center justify-center bg-gray-dark-main/30 rounded-md" id="signin__container">
        <div class="w-1/2 h-full flex items-center justify-center bg-white image" id="moving__image">
            
        </div>
        
        {#if showSignIn} 
            <div class="w-1/2 h-full flex flex-col items-center justify-center gap-10">
                <h1 class="uppercase bg-clip-text bg-gradient-to-r from-pink-main to-peach text-transparent text-7xl font-black drop-shadow-md">pop.io</h1>
                <div class="w-1/2 flex flex-col gap-4">
                    <input type="text" placeholder="username" class="input-box focus:outline-none">
                    <input type="password" placeholder="password" class="input-box focus:outline-none">
                </div>
                <div class="w-1/2 flex flex-col justify-center gap-2 ">
                    <button class="w-full p-2 bg-purple-dark rounded-md text-white">Sign in</button>
                    <p class="text-xs text-right text-white">Forgot password?</p>
                </div>
            <p class="mt-20 font-bold">New here? <button class="underline hover:text-white transition ease-in duration-30 cursor-pointer" on:click={() => (showSignIn = !showSignIn)}>Create an account!</button></p>
            </div>

        {:else if showSignIn === false}
            <div class="w-1/2 h-full flex flex-col items-center justify-center gap-10">
                <h1 class="uppercase bg-clip-text bg-gradient-to-r from-pink-main to-peach text-transparent text-7xl font-black drop-shadow-md">pop.io</h1>
                <div class="w-1/2 flex flex-col gap-4">
                    <input type="text" placeholder="email" class="input-box focus:outline-none">
                    <input type="text" placeholder="username" class="input-box focus:outline-none">
                    <input type="password" placeholder="password" class="input-box focus:outline-none">
                    <input type="password" placeholder="confirm password" class="input-box focus:outline-none">
                </div>
                <div class="w-1/2 flex flex-col justify-center gap-2 ">
                    <button class="w-full p-2 bg-purple-dark rounded-md text-white">Sign in</button>
                    <div class="w-full p-2 flex items-center justify-center gap-2 bg-purple-dark/30 rounded-md text-white">
                        <div class="icon">
                            <FaGoogle/>
                        </div>
                        <p>
                            Sign up with Google
                        </p>
                    </div>
                </div>
            <p class="mt-20 font-bold">Already have an account? <button class="underline hover:text-white transition ease-in duration-30 cursor-pointer" on:click={() => (showSignIn = !showSignIn)}>Sign in!</button></p>
            </div>
        {/if} 
    </div>
    
</main>
