<template>
  <div class="tools-wrapper">
    <el-page-header content="测试工具" title="返回" @back="goBack" />
    <el-divider />
  </div>
</template>

<script>
import './index.css'
export default {
  name: 'Tools',

  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
