<template>
<div v-if="showControlBar">
  <div class="uk-align-right">
    <form @submit.prevent v-if="searchEnabled" role="search" class="uk-search uk-search-default">
      <span uk-search-icon></span>
    <input
      :id="id"
      type="text"
      class="uk-search-input uk-width-large"
      :placeholder="globalSearchPlaceholder"
      :value="value"
      @input="updateValue($event)"
      @keyup.enter="entered($event)" />
    </form>
  </div>

  <div class="uk-align-left">
    <slot name="internal-table-actions">
    </slot>
  </div>
</div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs,
} from 'vue';

import {HTMLElementEvent} from '../interfaces'

export default defineComponent({
  name: 'GlobalSearch',
  props: {
    value: {
      type: String,
    },
    searchEnabled: {
      type: Boolean,
    },
    globalSearchPlaceholder: {
      type: String,
    },
  },
  emits: [
    'input',
    'keyup',
    'enter',
  ],
  setup(props, ctx) {
    const showControlBar = computed(() => {
      if (props.searchEnabled) return true;
      if (ctx.slots && ctx.slots['internal-table-actions']) return true;
      return false;
    });
    const getId = () => `vgt-search-${Math.floor(Math.random() * Date.now())}`;
    const entered = (ev: Event) => {
      ctx.emit('enter', (ev.target as HTMLInputElement).value);
    };
    const updateValue = (ev: Event) => {
      ctx.emit('input', (ev.target as HTMLInputElement).value);
      ctx.emit('keyup', (ev.target as HTMLInputElement).value);
    };
    const data = reactive({
      globalSearchTerm: null,
      id: getId(),
    });
    return {
      ...toRefs(data),
      showControlBar,
      entered,
      updateValue,
    };
  },
});
</script>
