<script setup lang="ts">

withDefaults(defineProps<{
  disabled?: boolean,
  size?: 'medium' | 'large' | 'xlarge' | '2xlarge',
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'link-gray' | 'destructive',
  link?: string | null,
  href?: string | null,
  iconOnly?: boolean
}>(), {
  disabled: false,
  size: 'medium',
  variant: 'primary',
  route: null,
  href: null,
  link: null,
  iconOnly: false

});
</script>

<template>
  <component
    class="styled-button"
    :class="[`m-${variant}`, `m-${size}`, { 'm-icon-only' : iconOnly }]"
    :is="!!link ? 'RouterLink' : (!!href ? 'a' : 'Button')"
    :disabled="disabled">
    <span v-if="$slots.pre"  class="styled-button--icon">
      <slot name="pre"></slot>
    </span>
    <span class="styled-button--text">
      <slot></slot>
    </span>
    <span v-if="$slots.post" class="styled-button--icon">
      <slot name="post"></slot>
    </span>
  </component>
</template>

<style lang="postcss">
.styled-button {

  --link-color: #4338CA;
  --link-color-hover: #3730A3;
  --link-color-disabled: #A3A3A3;
  --link-gap: 6px;
  --link-text-padding: 2px;
  --link-active-box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);

  /* Primary button style s */
  --button-primary--bg-color: #4338CA;
  --button-primary--bg-color-hover: #3730A3;
  --button-primary--bg-color-focus: #3730A3;
  --button-primary--bg-color-disabled: #F5F5F5;

  --button-primary--color: #FFFFFF;
  --button-primary--color-hover: #FFFFFF;
  --button-primary--color-focus: #FFFFFF;
  --button-primary--color-disabled: #A3A3A3;

  /* Secondary button styles */
  --button-secondary--bg-color: #FFFFFF;
  --button-secondary--bg-color-hover: #FAFAFA;
  --button-secondary--bg-color-focus: #FAFAFA;
  --button-secondary--bg-color-disabled: #F5F5F5;

  --button-secondary--color: #171717;
  --button-secondary--color-hover: #0A0A0A;
  --button-secondary--color-focus: #171717;
  --button-secondary--color-disabled: #A3A3A3;

  --button-tertiary--bg-color: transparent;
  --button-tertiary--bg-color-hover: #FAFAFA;
  --button-tertiary--bg-color-focus: #FAFAFA;
  --button-tertiary--bg-color-disabled: transparent;
  --button-tertiary--color: #4338CA;
  --button-tertiary--color-hover: #4338CA;
  --button-tertiary--color-focus: #4338CA;
  --button-tertiary--color-disabled: #A3A3A3;

  --button-link--bg-color: transparent;
  --button-link--bg-color-hover: transparent;
  --button-link--bg-color-focus: transparent;
  --button-link--bg-color-disabled: transparent;

  --button-link--color: #4338CA;
  --button-link--color-hover: #3730A3;
  --button-link--color-focus: #3730A3;
  --button-link--color-disabled: #A3A3A3;

  --button-link-gray--bg-color: transparent;
  --button-link-gray--bg-color-hover: transparent;
  --button-link-gray--bg-color-focus: transparent;
  --button-link-gray--bg-color-disabled: transparent;

  --button-link-gray--color: #525252;
  --button-link-gray--color-hover: #171717;
  --button-link-gray--color-focus: #171717;
  --button-link-gray--color-disabled: #171717;

  --button-destructive--bg-color: #DC2626;
  --button-destructive--bg-color-hover: #B91C1C;
  --button-destructive--bg-color-focus: #B91C1C;
  --button-destructive--bg-color-disabled: transparent;

  --button-destructive--color: #FFFFFF;
  --button-destructive--color-hover: #ffffff;
  --button-destructive--color-focus: #ffffff;
  --button-destructive--color-disabled: #A3A3A3;

  outline: none;
  cursor: pointer;
  display: inline-block;
  width: fit-content;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: var(--font-family);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--link-gap);
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0);

  &.disabled {
    cursor: none;
    color: var(--link-color-disabled);
  }

  & i {
    height: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    width: 20px;
  }

  &.m-medium {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 16px;

    &.m-icon-only {
      padding: 10px;
    }
  }

  &.m-large {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 16px;

    &.m-icon-only {
      padding: 10px;
    }
  }

  &.m-xlarge {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 20px;

    &.m-icon-only {
      padding: 12px;
    }
  }

  &.m-2xlarge {
    font-size: 18px;
    line-height: 28px;
    padding: 16px 24px;

    &.m-icon-only {
      padding: 16px;
    }

    & i {
      height: 24px;
      width: 24px;
    }
  }

  & span.styled-button--text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--link-gap);
    padding: 0 var(--link-text-padding);

    &.m-icon-only {
      padding: 0;
    }
  }

  & span.styled-button--icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--link-gap);
  }

  &.m-primary,
  .m-secondary,
  .m-descructive {}

  &.m-primary {
    background-color: var(--button-primary--bg-color);
    color: var(--button-primary--color);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);

    &:hover {
      color: var(--button-primary--color-hover);
      background-color: var(--button-primary--bg-color-hover);
    }

    &:focus {
      color: var(--button-primary--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:active {
      color: var(--button-primary--color-focus);
      background-color: var(--button-primary--bg-color-focus);
      box-shadow: var(--link-active-box-shadow);
    }

    &:disabled {
      color: var(--button-primary--color-disabled);
      background-color: var(--button-primary--bg-color-disabled);
    }
  }

  &.m-secondary {
    background-color: var(--button-secondary--bg-color);
    color: var(--button-secondary--color);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);

    &:hover {
      background-color: var(--button-secondary--bg-color-hover);
      color: var(--button-secondary--color-hover);
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    }

    &:focus {
      background-color: var(--button-secondary--bg-color-focus);
      color: var(--button-secondary--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:active {
      background-color: var(--button-secondary--bg-color-focus);
      color: var(--button-secondary--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:disabled {
      background-color: var(--button-secondary--bg-color-disabled);
      color: var(--button-secondary--color-disabled);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }
  }

  &.m-tertiary {
    background-color: var(--button-tertiary--bg-color);
    color: var(--button-tertiary--color);

    &:hover {
      background-color: var(--button-tertiary--bg-color-hover);
      color: var(--button-tertiary--color-hover);
    }

    &:focus {
      background-color: var(--button-tertiary--bg-color-focus);
      color: var(--button-tertiary--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:active {
      background-color: var(--button-tertiary--bg-color-focus);
      color: var(--button-tertiary--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:disabled {
      background-color: var(--button-tertiary--bg-color-disabled);
      color: var(--button-tertiary--color-disabled);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }
  }

  &.m-link {
    background-color: var(--button-link--bg-color);
    color: var(--button-link--color);
    padding: 0;

    &:hover {
      background-color: var(--button-link--bg-color-hover);
      color: var(--button-link--color-hover);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:focus {
      background-color: var(--button-link--bg-color-focus);
      color: var(--button-link--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:active {
      background-color: var(--button-link--bg-color-focus);
      color: var(--button-link--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:disabled {
      background-color: var(--button-link--bg-color-disabled);
      color: var(--button-link--color-disabled);
    }
  }

  &.m-link-gray {
    background-color: var(--button-link-gray--bg-color);
    color: var(--button-link-gray--color);
    padding: 0;

    &:hover {
      background-color: var(--button-link-gray--bg-color-hover);
      color: var(--button-link-gray--color-hover);
    }

    &:focus {
      background-color: var(--button-link-gray--bg-color-focus);
      color: var(--button-link-gray--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:active {
      background-color: var(--button-link-gray--bg-color-focus);
      color: var(--button-link-gray--color-focus);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }

    &:disabled {
      background-color: var(--button-link-gray--bg-color-disabled);
      color: var(--button-link-gray--color-disabled);
    }
  }

  &.m-destructive {
    background-color: var(--button-destructive--bg-color);
    color: var(--button-destructive--color);

    &:hover {
      background-color: var(--button-destructive--bg-color-hover);
      color: var(--button-destructive--color-hover);
    }

    &:focus {
      background-color: var(--button-destructive--bg-color-focus);
      color: var(--button-destructive--color-focus);
      box-shadow: 0px 0px 0px 1px #D92D20, 0px 0px 0px 4px rgba(217, 45, 32, 0.12);
    }

    &:active {
      background-color: var(--button-destructive--bg-color-focus);
      color: var(--button-destructive--color-focus);
      box-shadow: 0px 0px 0px 1px #D92D20, 0px 0px 0px 4px rgba(217, 45, 32, 0.12);
    }

    &:disabled {
      background-color: var(--button-destructive--bg-color-disabled);
      color: var(--button-destructive--color-disabled);
    }
  }
}
</style>