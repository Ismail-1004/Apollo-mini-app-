import { defineStore } from "pinia";
import { apolloClient } from "@/apollo";
import { GET_CHARTERS } from "@/apollo/queries";
import type { CharactersRespons } from "@/apollo/models/response";

import { ref } from 'vue'


export const userCharacters = defineStore('Characters', () => {
    const characters:any = ref([])
    const loading:any = ref(false)

    const get_charterts = async () => {
        loading.value = true
        
        const response = await apolloClient.query(GET_CHARTERS);
        const results = response.data.characters.results;

        (results as Array<CharactersRespons>).forEach((e: CharactersRespons) => {
            characters.value.push(e) 
        })
        
        loading.value = false
        
        return characters
    }

    return { get_charterts, characters, loading }
})