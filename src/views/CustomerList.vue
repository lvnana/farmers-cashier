<template>
    <div class="CustomerList-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">客户列表</div>
        <div class="CustomerList-container-content">

            <div style="height:500px;overflow: auto;margin-top: 15px;">
                <el-table
                        :data="CustomerTable"
                        border
                        :header-cell-style="getRowClass"
                        :cell-style="cellStyle"
                >
                    <el-table-column
                            prop="CustomerCode"
                            label="客户代码"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="CustomerFullName"
                            label="客户姓名"

                    >
                    </el-table-column>
                    <el-table-column
                            prop="CustomerBirthday"
                            label="生日"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="workUnit"
                            label="工作单位"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="ContactNumber"
                            label="联系电话">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                    >
                    </el-table-column>

                </el-table>
            </div>
            <el-row style="margin-top: 40px;">
                <el-col :span="10" style="text-align: left;">
                    <el-button class="newAdded" @click="dialogVisible = true">新增</el-button>
                </el-col>
                <el-col :span="14" style="text-align: right">
                    <el-button class="modify">修改</el-button>
                    <el-button class="cancel">删除</el-button>
                    <el-button class="cancel" @click="prev">取消</el-button>
                </el-col>

            </el-row>
            <el-dialog
                    title="新增客户"
                    :visible.sync="dialogVisible"
                    width="35%"
                    :before-close="handleClose"
                    style="padding: 0px 20px;text-align: left">
                <el-form :model="formInline" class="demo-form-inline" abel-width="90px"
                         label-width="90px"
                         size="small" style="overflow: auto">
                    <el-row>
                        <el-col>
                            <el-form-item label="客户代码" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="客户姓名" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="生日" style="margin: 3px 0px">
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期"
                                        style="width: 100%">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="工作单位" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="联系电话" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="收货地址" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

                <span slot="footer" class="dialog-footer">
                     <el-button type="primary" @click="dialogVisible = false" class="modify">确 定</el-button>
                    <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<style scoped>

    .CustomerList-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .CustomerList-container-content {
        padding: 0 60px 20px;
        height: calc(100vh - 70px);
    }

    .el-form-item {
        margin-bottom: 10px;
    }

    .newAdded {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .modify {
        background: -webkit-linear-gradient(#9FECEC, #009999);
    }

    .cancel {
        background: -webkit-linear-gradient(#cccccc, #999999);
    }

    .el-button {
        padding: 15px 30px;
        margin-right: 20px;
        color: black;
        border-color: #cccccc;
    }
</style>

<script>
    export default {
        data() {
            return {
                value1: '',
                formInline: {
                    user: '',
                    region: ''
                },
                value2: '',
                checked: false,
                dialogVisible: false,
                form: {
                    usInDay: '2019-05-28',
                    POS: '--',
                    settlementTime: '--',
                    settlementAmount: '--',
                    area: '锦江区',
                    personnel: '张三',
                    PaymentTime: '--',
                    PaymentType: '现金',
                    PaymentAmount: '--',
                    resource: '',
                    desc: '',
                },
                CustomerTable: [
                    {
                        CustomerCode: '0314',
                        CustomerFullName: '张某',
                        CustomerBirthday: '9.10',
                        workUnit: '444号便利店',
                        ContactNumber: '12345678901',
                        address: '锦江区大业路同瑞国际',
                    },
                    {
                        CustomerCode: '0314',
                        CustomerFullName: '张某',
                        CustomerBirthday: '9.10',
                        workUnit: '444号便利店',
                        ContactNumber: '12345678901',
                        address: '锦江区大业路同瑞国际',
                    },
                    {
                        CustomerCode: '0314',
                        CustomerFullName: '张某',
                        CustomerBirthday: '9.10',
                        workUnit: '444号便利店',
                        ContactNumber: '12345678901',
                        address: '锦江区大业路同瑞国际',
                    },
                    {
                        CustomerCode: '0314',
                        CustomerFullName: '张某',
                        CustomerBirthday: '9.10',
                        workUnit: '444号便利店',
                        ContactNumber: '12345678901',
                        address: '锦江区大业路同瑞国际',
                    },


                ],
            }
        },

        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
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
                if (rowIndex === 0) {
                    return 'background-color:#A6DBDB;text-align:center;height:35px;padding:0;color:black;'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:35px;padding:0px 5px'
            },
            prev() {
                this.$router.go(-1)
            },
        }
    }
</script>
