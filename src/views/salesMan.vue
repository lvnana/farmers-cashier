<template>
    <div class="salesMan-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">新增销售员</div>
        <div class="salesMan-container-content">
            <el-form  :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
                    <!--                    :inline="true"-->
                    <el-col :span="15">
                        <el-form-item label="用户账号" >
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="登录密码">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="确认密码" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="所属店铺">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="联系电话" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10" >
                        <el-form-item label="管理权限"  style="text-align: left">
                                <el-select v-model="form.personnel" style="width: 100%">
                                    <el-option label="张三" value="shanghai"></el-option>
                                    <el-option label="李四" value="beijing"></el-option>
                                    <el-option label="王五" value="beijing"></el-option>
                                </el-select>

                        </el-form-item>
                    </el-col>

                    <el-col :span="10" style="float: right">
                        <el-form-item label="是否锁定" style="text-align: left">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="暂时锁定"></el-radio>
                                <el-radio label="不锁定"></el-radio>
                            </el-radio-group>
                            <div style="color:#FF666F">（锁定则表示该员工不能登录）</div>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item label="备注" prop="desc">
                    <el-input type="textarea" v-model="form.desc"  rows="7"></el-input>
                </el-form-item>
            </el-form>
            <div style="text-align: right;padding: 15px" >
                <el-button class="allSalesReturn" @click="prev">保存</el-button>
                <el-button class="cancel" @click="prev">取消</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .salesMan-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .salesMan-container-content {
        padding: 0px 60px 20px;
        height: calc(100vh - 70px);
    }
    .el-form-item {
        margin-bottom: 15px;
    }
    .allSalesReturn {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .cancel {
        background: -webkit-linear-gradient(#999999, #666666);
    }
    .el-button{
        padding: 15px 25px;
        margin-right: 20px;
        color: black;
    }
</style>

<script>
    export default {
        data() {
            return {
                value1: '',
                form: {
                    usInDay: '2019-05-28',
                    POS:'--',
                    settlementTime: '--',
                    settlementAmount:'--',
                    area:'锦江区',
                    personnel:'张三',
                    PaymentTime:'--',
                    PaymentType:'现金',
                    PaymentAmount:'--',
                    resource:'',
                    desc:'',
                }
            }
        },
        methods: {
            prev(){
                this.$router.go(-1)

            },
        }
    }
</script>
