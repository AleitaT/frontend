<script setup lang="ts">
import StyledLink from '@/components/StyledLink.vue';
import DefaultBackground from '@/assets/spacejoy-YqFz7UMm8qE-unsplash.jpg';
import ArrowRightLine from '@/components/icons/ArrowRightLine.vue';
import PillTag from '@/components/PillTag.vue';

withDefaults(defineProps<{
  title?: string,
  tag?: string,
  body?: string,
  image?: string,
  link?: string
}>(), {
  title: 'Top 5 Living Room Inspirations',
  tag: 'Interior',
  body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
  image: DefaultBackground,
  link: ''
});

</script>

<template>
  <article class="blog-card">
    <div class="blog-card--image">
      <img :src="DefaultBackground" title="picture of brewery" alt="Living room"/>
    </div>
    <div class="blog-card--content">
      <!-- header -->
      <header class="blog-card--header">
        <div class="blog-card--tags">
          <slot name="tags">
            <PillTag><slot name="tag">{{tag}}</slot></PillTag>
          </slot>
        </div>
        <div class="blog-card--title">
          <h2 class="text-lg text-semibold">
            <slot name="title">{{  title }}</slot>
          </h2>
        </div>
      </header>
      <!-- main text -->
      <div class="blog-card--text">
        <p>
          <slot name="body">{{ body }}</slot>
        </p>
      </div>
      <!-- action -->
      <div class="blog-card--footer">
        <slot name="cta">
          <StyledLink url="/" buttonType="a" test="Read more">
            <template v-slot:text>Read more</template>
            <template v-slot:icon><ArrowRightLine/></template>
          </StyledLink>
        </slot>
      </div>
    </div>
  </article>  
</template>

<style lang="postcss">
article.blog-card {

  --blog-card-gap: 16px;
  --blog-card-padding: 24px;
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
    padding: var(--blog-card-padding);
    flex-direction: column;
    gap: 12px;
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
      padding-top: 12px;
    }
  }
}
</style>