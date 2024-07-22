<template>
  <el-card
    shadow="hover"
    class="my-card-wrapper"
    :style="{ backgroundColor: backgroundColorList[backgroundColorIndex] }"
    @click.native="clickCard"
  >{{ content }}</el-card>
</template>

<script>
import './my-card.css'
export default {
  name: 'MyCard',
  props: {
    content: {
      type: String,
      default: 'XXX'
    },
    path: {
      type: String,
      default: '/404'
    },
    backgroundColorIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      backgroundColorList: ['#8e87f4', '#f8777f', '#26aa8b', '#417cf1', '#d2e7ff', '#e7ffdd', '#ffd7de', '#fffad9']
    }
  },
  methods: {
    clickCard() {
      this.$router.push(this.path)
    }
  }
}
</script>
