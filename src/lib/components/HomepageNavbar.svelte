<script lang=ts>
    import FaUser from 'svelte-icons/fa/FaUser.svelte'

    export let user = "";
</script>

<section class="top-0 w-full sticky flex p-8 items-center gap-6">
    <h1 class="w-[10%] font-black uppercase text-5xl bg-clip-text bg-gradient-to-r from-pink-main to-peach text-transparent drop-shadow-xl">pop.io</h1>
    <div class="w-[90%] px-10 py-6 flex items-center justify-between bg-gray-dark-main/20 rounded-md">
        <div class="flex gap-10">
            <a href="/">Homepage</a>
            <a href="/notifications">Notifications</a>
        </div>
        <div class="bg-pink-main/30 px-6 py-1 flex items-center gap-2 rounded-md drop-shadow-md">
            <div class="icon text-white">
                <FaUser/>
            </div>
            <p class="font-bold text-white">{user}</p>
        </div>
    </div>
</section>