<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { artGetChannelsService, delChannelService } from '@/api/article'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelEdit from '@/views/article/components/ChannelEdit.vue'

const channelList = ref([])
const isLoading = ref(false)
const getChannelList = async () => {
  isLoading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  isLoading.value = false
}
getChannelList()

const dialog = ref()
const onAddChannel = () => {
  dialog.value.open({})
}
const onEditChannel = (row) => {
  dialog.value.open(row)
}

const onSuccess = () => {
  getChannelList()
}
const del = async (id) => {
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await delChannelService(id)
  await getChannelList()
}
</script>
<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="isLoading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column prop="cate_name" label="名称" width="180" />
      <el-table-column prop="cate_alias" label="别名" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="{ row }">
          <el-button
            @click="onEditChannel(row)"
            type="primary"
            :icon="Edit"
            circle
          />
          <el-button @click="del(row.id)" type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
    <channel-edit @success="onSuccess" ref="dialog"></channel-edit>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
