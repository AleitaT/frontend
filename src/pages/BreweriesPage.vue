<script setup>
import { ref } from 'vue';
import BlogCard from '@/components/BlogCard.vue';
import StyledLink from '@/components/StyledLink.vue';
import ArrowRightLine from '@/components/icons/ArrowRightLine.vue';

const response = ref('');
const filteredResponse = ref([]);
const state = 'Oregon';

let uri = `https://api.openbrewerydb.org/v1/breweries`;

(async function() {
  try {
    response.value = await(await fetch(uri)).json();
    filteredResponse.value = response.value.filter(item => item.state === state);
    console.log('respnonse', response.value);
    console.log('filteredResponse', filteredResponse.value);
  } catch(e) {
    console.error(e);
  }
  
})();

</script>

<template>
  <main class="page page--breweries">
    <h1>Oregon Breweries</h1>
    <div class="breweries-grid">
      <BlogCard v-for="item in filteredResponse" :key="item.id" :data="item">
        <template v-slot:tag>
          {{  item.brewery_type }}
        </template>

        <template v-slot:title>
          {{  item.name }}
        </template>

        <template v-slot:body>
          {{  item.street }}
        </template>

        <template v-slot:cta>
            <StyledLink :url="item.website_url" :alt="item.website_url" buttonType="a">
              <template v-slot:text>Visit website</template>
              <template v-slot:icon><ArrowRightLine/></template>
            </StyledLink>
        </template>
      </BlogCard>
    </div>
  </main>

</template>

<style lang="postcss">
.page--breweries {
  display: flex;
  flex-direction: column;

  & h1 {
    text-align: center;
  }
}

.breweries-grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 16px;
  justify-content: center;
  align-items: start;
}
</style>