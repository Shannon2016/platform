<template>
  <div class="intelligentqa-wrapper">
    <el-scrollbar
      ref="scrollContainer"
      class="scroll-wrapper answer-wrapper"
      wrap-style="overflow-x:hidden;"
    >
      <div ref="sentenceCardContainer">
        <sentence-card
          v-for="(item, index) in sentenceList"
          :key="index"
          :ref="'sentenceCard' + index"
          :type="item.type"
          :sentence="item.sentence"
        />
      </div>
    </el-scrollbar>
    <div class="input-wrapper">
      <el-scrollbar
        class="scroll-wrapper input-content-wrapper"
        wrap-style="overflow-x:hidden;"
      >
        <div ref="inputContent" contenteditable="true" class="input-div" />
      </el-scrollbar>
      <el-button
        icon="el-icon-search"
        round
        size="small"
        class="search-button"
        :disabled="buttonLoading"
        @click="searchAnswer"
      />
    </div>
  </div>
</template>

<script>
import './index.css'
import SentenceCard from './SentenceCard'
import { fetchList } from '@/api/platform'
export default {
  components: {
    SentenceCard
  },
  data() {
    return {
      sentenceList: [],
      buttonLoading: false
    }
  },
  mounted() {
    this.sentenceList.push({
      sentence: '请在下方输入框输入您的问题。',
      type: 1
    })
    // this.$refs.scrollContainer.value.scrollIntoView(false);
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs['sentenceCardContainer'].lastChild.scrollIntoView({ behavior: 'smooth' })
      })
    },
    searchAnswer() {
      if (this.$refs.inputContent.textContent !== '') {
        this.buttonLoading = true
        this.sentenceList.push({
          sentence: this.$refs.inputContent.textContent,
          type: 2
        })
        this.$refs.inputContent.textContent = ''
        this.buttonLoading = false
        this.scrollToBottom()
      }
      fetchList().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
