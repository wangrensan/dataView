<script setup lang="ts">
    import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>
<template>
    <el-config-provider :locale="zhCn">
        <RouterView />
    </el-config-provider>
</template>

<style>
    #app {
        height: 100vh;
    }

    .el-main {
        padding: 10px !important;
    }

    .app-el-pagination {
        width: calc(100% - 240px) !important;
    }
    .app-el-pagination-fix {
        z-index: 2 !important;
        background-color: #f0f2f5 !important;
        width: calc(100% - 240px) !important;
    }
    .app-pagination-item {
        padding-right: 10px !important;
    }
</style>
