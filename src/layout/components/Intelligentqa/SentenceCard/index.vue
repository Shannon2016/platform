<template>
  <div :class="'card-wrapper '+ (type === 1 ?'left-type-wrapper':'right-type-wrapper')">
    <el-avatar
      v-if="type === 1 ? true : false"
      icon="el-icon-user-solid"
    />
    <div :class="'card-content '+ (type === 1 ?'left-type-content':'right-type-content')">{{ sentence }}</div>
    <el-avatar
      v-if="type === 2 ? true : false"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>

<script>
import './index.css'
export default {
  props: {
    type: {
      type: Number,
      default: 1 // 1 left   2 right
    },
    sentence: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
