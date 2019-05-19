<template>
    <div>
        <h1>
            分类列表   
        </h1>
        <el-table :data = 'items'>
            <el-table-column prop = '_id' label = 'ID' width = '240'></el-table-column>
            <el-table-column prop = 'name' label = '分类名称' ></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                <el-button
                    type="text"
                    size="small"
                    @click="$router.push(`/categories/edit/${scope.row._id}`)"
                >编辑</el-button>
                <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items: []
        }
    },
    // 获取数据 去服务端完成分类列表接口
    methods: {
        async fetch(){
            const res = await this.$http.get('categories')
            this.items = res.data
        }
    },
    created(){
        this.fetch()
    }
}
</script>
