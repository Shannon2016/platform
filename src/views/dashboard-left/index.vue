<template>
  <!-- <el-scrollbar style="height: 100%"> -->
  <div class="dashboard-left-wrapper">
    <my-card
      v-for="(item, index) in menuList"
      :key="index"
      :content="item.content"
      :path="item.path"
      :background-color-index="index"
    />
  </div>
  <!-- </el-scrollbar> -->
</template>

<script>
import MyCard from './MyCard'
import './index.css'
export default {
  name: 'DashboardLeft',
  components: { MyCard },
  data() {
    return {
      menuList: [
        {
          content: '应用支持',
          path: '/support'
        },
        {
          content: '参数管理',
          path: '/params'
        },
        {
          content: '测试工具',
          path: '/tools'
        },
        {
          content: '智能问答',
          path: '/'
        },
        {
          content: 'XXX',
          path: '/support'
        },
        {
          content: 'XXX',
          path: '/params'
        },
        {
          content: 'XXX',
          path: '/tools'
        },
        {
          content: 'XXX',
          path: '/'
        }
      ]
    }
  },
  mounted() {}
}
</script>
