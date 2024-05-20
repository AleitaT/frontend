<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import DefaultBackground from '@/assets/spacejoy-YqFz7UMm8qE-unsplash.jpg';
import ArrowRightLine from '@/components/icons/ArrowRightLine.vue';
import PillTag from '@/components/PillTag.vue';

withDefaults(defineProps<{
  title?: string,
  body?: string,
  image?: string,
}>(), {
  title: 'Top 5 Living Room Inspirations',
  body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
  image: DefaultBackground
});

</script>

<template>
  <div class="blog-card">
    <div class="blog-card--image">
      <img :src="DefaultBackground" alt="Living room"/>
    </div>
    <div class="blog-card--content">
      <!-- header -->
      <div class="blog-card--header">
        <div class="blog-card--tags">
          <slot name="tags">
            <PillTag>Interior</PillTag>
          </slot>
        </div>
        <div class="blog-card--title">
          <p class="text-lg text-semibold">
            <slot name="title">{{  title }}</slot>
          </p>
        </div>
      </div>
      <!-- main text -->
      <div class="blog-card--text">
        <p>
          <slot name="body">{{ body }}</slot>
        </p>
      </div>
      <!-- action -->
      <div class="blog-card--footer">
        <StyledButton url="/" buttonType="a" test="Read more">
          <template v-slot:text>Read more</template>
          <template v-slot:icon><ArrowRightLine/></template>
        </StyledButton>
      </div>
    </div>
  </div>
  
</template>

<style lang="postcss">
.blog-card {
  margin-top: 120px;
  height: 504px;
  width: 340px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  box-shadow: var(--default-box-shadow);
  box-sizing: border-box;

  & .blog-card--image {
    height: 288px;
    border-radius: 8px 8px 0 0;
    display: block;

    & img {
      object-fit: cover;
      height: 288px;
      width: 340px;
    }
  }

  & .blog-card--content {
    display: flex;
    height: 216px;
    padding: 24px;
    flex-direction: column;
    gap: var(--gap);
    background-color: white;

    & .blog-card--header {
      display: flex;
      flex-direction: column;
      gap: 8px;

      & p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }

      & .blog-card--tags {
        display: flex;
      }

      & .blog-card--title {
        font-family: var(--font-family);
      }
    }

    & .blog-card--text p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 16px;
      line-height: 24px;
    }

    & .blog-card--footer {
      padding-top: 8px;
    }
  }
}
</style>