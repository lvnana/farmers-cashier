<template>
    <div class="SyncBox">


        <div class="block">
            <span class="demonstration">营业日</span>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>

        <div>
            <template>
                <el-table
                        :data="tableData"
                        border
                        :header-cell-style="getRowClass"
                        :cell-style="cellStyle"
                        @current-change="handleCurrentChange"
                        highlight-current-rowtable
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="营业日"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="操作员"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="carryOnTime"
                            label="接班时间"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="handoverTime"
                            label="交班时间"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="handoverState"
                            label="交班状态"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="dataState"
                            label="数据状态"
                    >
                    </el-table-column>

                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '李晓蕾',
                        carryOnTime: '14:30:20',
                        handoverTime: '20:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-04',
                        name: '王宇',
                        carryOnTime: '10:30:20',
                        handoverTime: '15:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-03',
                        name: '张琳',
                        carryOnTime: '11:30:20',
                        handoverTime: '19:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-03',
                        name: '李晓蕾',
                        carryOnTime: '14;30:20',
                        handoverTime: '20:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-03',
                        name: '李晓蕾',
                        carryOnTime: '14:30:20',
                        handoverTime: '20:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-03',
                        name: '李晓蕾',
                        carryOnTime: '14:30:20',
                        handoverTime: '20:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }, {
                        date: '2016-05-03',
                        name: '李晓蕾',
                        carryOnTime: '14:30:20',
                        handoverTime: '20:20:20',
                        handoverState: '已交班',
                        dataState: '已上传'
                    }],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value6: '',
                value7: ''
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event)
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row)
            },
            handleCurrentChange(val) {
                this.currentRow = val
            },
            getRowClass({row, column, rowIndex, columnIndex}) {
                if (rowIndex == 0) {
                    return 'text-align:center;height:50px;padding:0;font-weight: 600; color:#333'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:40px;padding:0'
            }
        }
    };
</script>
<style scoped>
    .SyncBox {
        width: calc(100vw - 240px);
        margin: 0 20px;
    }
    .block{
        float: left;
        margin: 20px auto;

    }
    .block span{
        margin-right: 10px;
    }
</style>
