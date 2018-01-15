<template>
  <section class="row justify-content-center">
    <div class="col-lg-8">
      <div class="date">{{date}}</div>
      <h1 class="title">
        {{event.title}}
      </h1>
      <p class="">
        {{event.catch}}
      </p>
      <div class="subtitle">address</div>

      <div>{{event.place}}</div>
      <div>{{event.address}}</div>

      <div class="mt-5">
        <a :href="event.event_url">参加者募集ページへ</a>
      </div>
      <div class="mt-3">
        <router-link to="/">一覧へ戻る</router-link>
      </div>
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
      },
      date () {
        return this.event.started_at ? this.event.started_at.substr(0, 10) : '日時未定'
      }
    },
    methods: {
    },
    async fetch ({store, params}) {
      const event = store.getters.eventById(params.eventId)
      if (event === false) {
        const hoge = await store.dispatch('LOAD_EVENTS')
      }
    }
  }
</script>

<style scoped="">
  .date{
    display: inline-block;
    padding: .2em 2em;
    font-weight: bold;
    letter-spacing: 3px;
    color: #a52205;
    border-bottom: 3px solid #a52205;
    margin-bottom:2em;
  }

  .subtitle{
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
    margin-bottom: 2em;
  }
</style>
