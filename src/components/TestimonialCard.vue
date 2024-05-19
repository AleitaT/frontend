<script setup>
import ProfileThumbnail from '@/assets/profile-thumbnail.png'
const testimonial = {
  name: 'Sarah Dole',
  username: 'sarahdole',
  image: ProfileThumbnail,
  body: `I've been searching for high-quality
        abstract images for my design projects,
        and I'm thrilled to have found this platform.
        The variety and depth of crativity are astounding!`
}
</script>

<template>
  <div class="testimonial-card">
    <div class="person-details">
      <div class="person-image">
        <img :src="ProfileThumbnail"/>
      </div>
      <div class="person-info">
        <p class="person-name">{{ testimonial.name }}</p>
        <p class="person-username">@{{ testimonial.username }}</p>
      </div>
    </div>
    <div class="testimonial">
      <p>{{ testimonial.body }}</p>
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

  display: flex;
  border: solid 1px var(--neutral-600);
  border-radius: 5px;
  box-sizing: border-box;
  flex-direction: column;
  padding: var(--padding);
  gap: var(--padding);
  width: 340px;
  max-width: 100vw;
  color: var(--neutral-900);

  & .person-details {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: var(--padding);


    & p.person-name {
      font-size: 18px;
      font-weight: 600;
    }

    & p.person-username {
      font-size: 14px;
      color: var(--neutral-600);
    }

    & .person-image {
      width: var(--image-size);

      & img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    & .details {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
  }

  & .testimonial {}
}
</style>