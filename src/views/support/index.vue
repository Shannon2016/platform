<template>
  <div class="support-wrapper">
    <el-scrollbar style="height: 100%">
      <el-row class="page-header-container">
        <el-col :span="18">
          <el-page-header content="应用支持" title="返回" @back="goBack" /></el-col>
        <el-col :span="6" class="button-container">
          <el-button
            v-permission="['admin']"
            type="primary"
            @click="addSupportKnowledgeFormVisible = true"
          >添加知识</el-button></el-col>
      </el-row>
      <el-divider />
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="hot" label="热度" width="180" />
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="moreInfo(scope.row)"
            >查看</el-button>
            <el-button
              v-permission="['admin']"
              type="text"
              size="small"
              @click="setInfo(scope.row)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="sizes,prev, pager, next"
        :total="supportTableList.length"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="PageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-scrollbar>

    <el-dialog
      title="添加知识"
      :visible.sync="addSupportKnowledgeFormVisible"
      width="50%"
    >
      <el-form
        ref="addKnowledgeForm"
        :model="addKnowledgeForm"
        label-width="100px"
      >
        <el-form-item
          label="标题"
          prop="title"
          :rules="[{ required: true, message: '标题不能为空' }]"
        >
          <el-input v-model="addKnowledgeForm.title" />
        </el-form-item>
        <el-form-item
          label="内容"
          prop="content"
          :rules="[{ required: true, message: '内容不能为空' }]"
        >
          <el-input
            v-model="addKnowledgeForm.content"
            type="textarea"
            :rows="5"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleAddKnowledge">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="查看知识"
      :visible.sync="readSupportKnowledgeVisible"
      width="50%"
    >
      <el-descriptions
        class="margin-top"
        :column="1"
        border
      >
        <el-descriptions-item label="标题">
          {{ selectedKnowledge.title }}
        </el-descriptions-item>
        <el-descriptions-item label="内容">
          {{ selectedKnowledge.content }}
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="readSupportKnowledgeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import './index.css'
import permission from '@/directive/permission/index.js' // 权限判断指令
export default {
  name: 'Support',
  directives: { permission },
  data() {
    return {
      supportTableList: [],
      tableData: [],
      currentPage: 1,
      pageSizes: [5, 10, 20, 50, 100],
      PageSize: 5,
      addSupportKnowledgeFormVisible: false,
      addKnowledgeForm: {
        title: '',
        content: ''
      },
      readSupportKnowledgeVisible: false,
      selectedKnowledge: {
        title: '',
        content: ''
      }
    }
  },
  mounted() {
    this.getSupportTableList()
    this.setTableData()
  },
  methods: {
    getSupportTableList() {
      for (let i = 1; i <= 35; i++) {
        this.supportTableList.push({ title: 'xxxxx', content: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', hot: i })
      }
    },
    goBack() {
      this.$router.push('/')
    },
    moreInfo(row) {
      this.selectedKnowledge.title = row.title
      this.selectedKnowledge.content = row.content
      this.readSupportKnowledgeVisible = true
    },
    setInfo(row) {},
    handleSizeChange(val) {
      this.PageSize = val
      this.currentPage = 1
      this.setTableData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.setTableData()
    },
    setTableData() {
      this.tableData = this.supportTableList.slice(
        (this.currentPage - 1) * this.PageSize,
        this.currentPage * this.PageSize
      )
    },
    handleAddKnowledge() {
      this.$refs['addKnowledgeForm'].validate((valid) => {
        if (valid) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.getSupportTableList()
          this.addSupportKnowledgeFormVisible = false
        } else {
          return false
        }
      })
    }
  }
}
</script>
