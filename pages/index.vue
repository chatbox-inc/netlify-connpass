<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        PWA Vue.js Application
      </h2>
      <ul>
        <li v-for="event in events">
          <router-link :to="`/event/${event.event_id}`">{{event.title}}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      events () {
        return this.$store.state.events
      }
    },
    async fetch ({store}) {
      await store.dispatch('LOAD_EVENTS')
    }
  }
</script>

