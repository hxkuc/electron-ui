<template>
    <div id="app" :class="transitionGroup.appClass">
        <transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode" v-on:after-enter="afterEnter">
            <router-view :class="transitionGroup.routerClass"></router-view>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'myName',
  computed: {
    ...mapGetters([
      'transitionGroup'
    ])
  },
  methods: {
    afterEnter: function () {
      this.$store.dispatch('changeTransition', 'none')
    }
  }
}
</script>
<style>
/* CSS */
#app{
    width: 100%;
    height: 100%
}
</style>