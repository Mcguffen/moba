<template>
    <div>
        <h1>
            分类列表   
        </h1>
        <el-table :data = 'items'>
            <el-table-column prop = '_id' label = 'ID' width = '240'></el-table-column>
            <el-table-column prop = 'parent.name' label = '上级分类' ></el-table-column>
            <el-table-column prop = 'name' label = '分类名称' ></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <!--  给编辑按钮添加点击事件，点击编辑跳转到一个新的编辑页面。地址我们自己定义。`/categories/edit/${scope.row._id}`-->
                <el-button
                    type="text"
                    size="small"
                    @click="$router.push(`/categories/edit/${scope.row._id}`)"
                >编辑</el-button>
                    <!--  给删除按钮添加点击事件，点击删除按钮触发删除函数 参数是该行的所有信息-->
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
        },
        // 删除函数 参数是row 删除整行内容 建议在删除前添加提示删除框（让用户确认是否删除)
        async remove(row){
            this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(async () => {
                const res = await this.$http.delete(`categories/${row._id}`);
                this.$message({
                type: "success",
                message: "删除成功!"
                });
                // 重新获取删除后的数据
                this.fetch();
            });
        }
    },
    created(){
        this.fetch()
    }
}
</script>
