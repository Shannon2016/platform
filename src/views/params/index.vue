<template>
  <div class="params-wrapper">
    <el-page-header content="参数管理" title="返回" @back="goBack" />
    <el-divider />
  </div>
</template>

<script>
import './index.css'
export default {
  name: 'Params',

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
