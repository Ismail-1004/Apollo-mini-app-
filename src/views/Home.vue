<template>
  <div class="home">
    <div class="home__content">
      <h1 class="home__content-title"> Rick And Morty </h1>

      <button class="home__content-btn" @click="charters.get_charterts()" v-if="charters.characters.length === 0"> Get images </button>

      <p v-if="charters.loading"> Loading </p>

      <div class="home__content-content" v-if="charters.characters.length !== 0">
        <div class="home__content-item" v-for="charter in charters.characters" :key="charter.id">
            <img :src="charter.image" :alt="charter.name">
            <p> {{ charter.name }} </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userCharacters } from '../stores/charters';

export default defineComponent({
  name: 'Home',
  
  setup () {
    const charters = userCharacters()

    return { charters }
  }

});
</script>
