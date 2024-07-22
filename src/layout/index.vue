<template>
  <el-row :class="classObj" class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <el-col :span="15" class="panel-wrapper">
      <!-- <sidebar class="sidebar-container" />
      <div :class="{ hasTagsView: needTagsView }" class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <navbar />
          <tags-view v-if="needTagsView" />
        </div>
        <app-main />
        <right-panel v-if="showSettings">
          <settings />
        </right-panel>
      </div> -->
      <navbar />
      <app-main />
    </el-col>
    <el-col :span="9" class="panel-wrapper"><intelligentqa /></el-col>
  </el-row>
</template>

<script>
import {
  AppMain,
  Navbar
  // Settings,
  // Sidebar,
  // TagsView,
  // Intelligentqa
} from './components'
import Intelligentqa from './components/Intelligentqa'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import './index.css'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    // Settings,
    Intelligentqa
    // Sidebar,
    // TagsView,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      device: (state) => state.app.device,
      showSettings: (state) => state.settings.showSettings,
      needTagsView: (state) => state.settings.tagsView,
      fixedHeader: (state) => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  .panel-wrapper {
    height: 100%;
    // width: 100%;
  }
}
</style>
