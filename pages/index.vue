<template>
  <section class="row justify-content-center">
    <div class="col-lg-8 ">

      <p class="mb-3">現在開催中のイベントはこちら！</p>

      <ul class="list-unstyled">
        <li class="mb-5" v-for="event in events">
          <div class="date">{{date(event.started_at)}}</div>
          <div class="title">{{event.title}}</div>

          <router-link :to="`/event/${event.event_id}`">イベント詳細</router-link>
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
    methods: {
      date (date) {
        return date ? date.substr(0, 10) : '日時未定'
      }
    },
    async fetch ({store}) {
      await store.dispatch('LOAD_EVENTS')
    }
  }
</script>

<style scoped>
  .date{
    display: inline-block;
    padding: .2em 2em;
    font-weight: bold;
    letter-spacing: 3px;
    color: #a52205;
    border-bottom: 3px solid #a52205;
    margin-bottom:1em;
  }

  .title{
    font-size: 1.4em;
    margin-bottom:.5em;
  }


</style>

