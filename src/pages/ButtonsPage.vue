<script setup>
import StyledButton from '@/components/StyledButton.vue';
import StarLine from '@/components/icons/StarLine.vue';

const sizes = {
  'Medium': 'medium',
  'Large': 'large',
  'Extra Large': 'xlarge',
  '2 Extra Large': '2xlarge'
}

const variants = {
  'Primary': 'primary',
  'Secondary': 'secondary',
  'Tertiary': 'tertiary',
  'Link': 'link',
  'Link Gray': 'link-gray',
  'Destructive': 'destructive'
}

</script>

<template>
  <main class="buttons">
    <div class="button-grid" v-for="(variant, variantKey) in variants" :key="variantKey">
      <div v-for="(size, sizeKey) in sizes" :key="sizeKey">
        <StyledButton :variant='variant' :size="size">
          <template v-if="size === 'large'" v-slot:pre>
            <i><StarLine /></i>
          </template>
          Button CTA
          <template v-if="size === 'xlarge'" v-slot:post>
            <i><StarLine /></i>
          </template>
        </StyledButton>
      </div>
      <div>
        <StyledButton iconOnly :variant='variant' size="2xlarge">
          <i><StarLine /></i>
        </StyledButton>
      </div>
    </div>
  </main>
</template>

<style lang="postcss">
main.buttons {
  width: fit-content;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.button-grid {
  padding: 1rem;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
</style>