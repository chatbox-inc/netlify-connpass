<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{event.title}}
      </h1>
      <p>
        {{events.length}}
      </p>
      <h2 class="subtitle">
        {{event.catch}}
      </h2>

      <a :href="event.event_url">Connpassで見る</a>

      <div v-html="event.description"></div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return { }
    },
    computed: {
      eventId () {
        return this.$route.params.eventId
      },
      event () {
        const event = this.$store.getters.eventById(this.eventId)
        return event
      },
      events () {
        const events = this.$store.state.events
        return events
      }
    },
    async fetch ({store, params}) {
      const event = store.getters.eventById(params.eventId)
      if (event === false) {
        const hoge = await store.dispatch('LOAD_EVENTS')
      }
    }
  }
</script>

