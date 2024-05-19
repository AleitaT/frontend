<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import DefaultBackground from '@/assets/spacejoy-YqFz7UMm8qE-unsplash.jpg';

withDefaults(defineProps<{
  title?: string,
  username?: string,
  image?: string,
}>(), {
  title: 'Top 5 Living Room Inspirations',
  body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
  image: DefaultBackground
});

</script>

<template>
  <div class="blog-card">
    <div class="blog-card--image" :style="{ 'background-image': 'url(' + DefaultBackground + ')' }">

    </div>
    <div class="blog-card--content">
      <!-- header -->
      <div class="blog-card--header">
        <div class="blog-card--tags">
          <slot name="tags"></slot>
        </div>
        <div class="blog-card--title">
          <p>
            <slot name="title">{{  title }}</slot>
          </p>
        </div>
      </div>
      <!-- main text -->
      <div class="blog-card--text">
        <p>
          <slot name="body">{{  body }}</slot>
        </p>
      </div>
      <!-- action -->
      <div class="blog-card--more">
        <StyledButton buttonType="link" test="Read more">
          Read more
        </StyledButton>
      </div>
    </div>
  </div>
  
</template>

<style lang="postcss">
.blog-card {
  border-radius: 8px;
  height: 504px;
  width: 340px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .blog-card--image {
    height: 288px;
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;
  }

  & .blog-card--content {
    display: flex;
    height: 216px;
    padding: 24px;
    flex-direction: column;
    gap: var(--gap);
    background-color: white;

    & .blog-card--header {
      & .blog-card--tags {}

      & .blog-card--title {}
    }

    & .blog-card--text {}
  }
}
</style>