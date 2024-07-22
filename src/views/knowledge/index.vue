<template>
  <div class="knowledge-wrapper">
    <el-scrollbar style="height: 100%">
      <el-page-header content="智能问答" title="返回" @back="goBack" />
      <el-divider />

    </el-scrollbar>
  </div>
</template>

<script>
import './index.css'

export default {
  name: 'Knowledge',

  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
