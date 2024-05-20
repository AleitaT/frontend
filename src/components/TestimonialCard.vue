<script setup lang="ts">
import ProfileThumbnail from '@/assets/profile-thumbnail.png'

withDefaults(defineProps<{
  name?: string,
  username?: string,
  image?: string,
  body?: string
}>(), {
  name: 'Sarah Dole',
  username: 'sarahdole',
  image: ProfileThumbnail,
  body: `I've been searching for high-quality
        abstract images for my design projects,
        and I'm thrilled to have found this platform.
        The variety and depth of crativity are astounding!`
});

</script>

<template>
  <div class="testimonial-card">
    <div class="testimonial--details">
      <div class="testimonial--image">
        <slot name="image">
          <img :src="ProfileThumbnail"/>
        </slot>
      </div>
      <div class="testimonial--info">
        <p class="testimonial--name">
          <slot name="name">{{ name }}</slot>
        </p>
        <p class="testimonial--username">
          <slot name="username">@{{ username }}</slot>
        </p>
      </div>
    </div>
    <div class="testimonial--content">
      <p>{{ body }}</p>
    </div>
  </div>
</template>c

<style lang="postcss">
.testimonial-card {
  --white: #ffffff;
  --neutral-900: #171717;
  --neutral-600: #525252;
  --gradient-1: #F9FAFB;
  --gradient-2: #D2D6DB;
  --image-size: 48px;
  --padding: 24px;
  --border-radius: 8px;
  --font-family: 'Noto Sans', sans-serif;

  display: flex;
  border: solid 1px var(--gradient-1);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  flex-direction: column;
  padding: var(--padding);
  gap: 16px;
  width: 340px;
  max-width: 100vw;
  color: var(--neutral-900);
  filter: drop-shadow(1px 1px 1px var(--gradient-2));
  background-color: var(--gradient-1);

  & .testimonial--details {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: var(--padding);

    & p.testimonial--name {
      font-size: 18px;
      font-weight: 600;
    }

    & p.testimonial--username {
      font-size: 14px;
      color: var(--neutral-600);
    }

    & .testimonial--image {
      width: var(--image-size);

      & img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    & .testimonial--details {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  & .testimonial--content {
    font-size: 16px;
    color: var(--neutral-600)
  }
}
</style>