<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { artGetListService } from '@/api/article'
import { formatTime } from '../../utils/fomat'
const onEdit = (row) => {
  console.log(row)
}
const onDel = (row) => {
  console.log(row)
}

const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})
const articleList = ref([])
const getArticleList = async () => {
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
}
getArticleList()
</script>
<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button>添加文章</el-button>
    </template>
    <el-form inline>
      <el-form-item label="文章分类：">
        <channel-select v-model="params.cate_id"></channel-select>
      </el-form-item>
      <el-form-item label="发布状态：">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articleList">
      <el-table-column prop="title" label="文章标题" width="320">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="cate_name"
        label="文章分类"
        width="320"
      ></el-table-column>
      <el-table-column prop="pub_date" label="发表时间" width="320">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="文章状态"
        width="320"
      ></el-table-column>
      <el-table-column label="操作" width="110">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEdit(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDel(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
