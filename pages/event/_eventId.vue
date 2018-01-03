<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{event.title}}
      </h1>
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
      }
    },
    async mounted () {
      if (this.event === false) {
        this.$store.dispatch('LOAD_EVENTS')
      }
    }
  }
</script>

