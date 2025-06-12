<script setup lang="ts">
const dataList = [
  {
    label: '姓名',
    content: 'layui-vue',
  },
]
</script>

<template>
  <div>
    <lay-descriptions title="数据生成" :data-list="dataList" />
    <LayInput />
    <!-- <lay-descriptions title="数据生成">
      <lay-descriptions-item label="姓名">
        layui-vue
      </lay-descriptions-item>
    </lay-descriptions> -->
  </div>
</template>
