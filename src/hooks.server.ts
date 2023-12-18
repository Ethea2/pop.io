import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'

const url: string = import.meta.env.VITE_BASE_URL
export const client = new PocketBase(url)

export const currentUser = writable(client.authStore.model)

client.authStore.onChange((auth) => {
    console.log('AuthStore changed', auth)
    currentUser.set(client.authStore.model)
})
