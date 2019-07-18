<template>
    <div class="NewMembers-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">录入会员卡</div>
        <div class="NewMembers-container-content">
            <el-form  :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
<!--                    :inline="true"-->
                    <el-col :span="15">
                        <el-form-item label="发卡门店" >
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="10" >
                        <el-form-item label="卡编号">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="10" style="float: right">
                        <el-form-item label="会员性别" style="text-align: left">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="男士"></el-radio>
                                <el-radio label="女士"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="姓名" required>
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="办卡日期" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="10">
                        <el-form-item label="电话" required>
                            <el-input v-model="form.settlementTime" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="有效日期">
                            <el-input v-model="form.settlementAmount" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="生日" required style="text-align: left;">
                            <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期"
                            style="width: 100%">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="类型" style="text-align: left">
                            <el-select v-model="form.personnel" style="width: 100%">
                                <el-option label="张三" value="shanghai"></el-option>
                                <el-option label="李四" value="beijing"></el-option>
                                <el-option label="王五" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="地址" >
                            <el-input v-model="form.PaymentAmount" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="折扣" >
                            <el-input v-model="form.PaymentAmount" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10" >
                        <el-form-item label="卡编号">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="10" style="float: right">
                        <el-form-item label="状态" style="text-align: left">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="有效"></el-radio>
                                <el-radio label="无效"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="备注" prop="desc" style="margin-top: 10px">
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
    .NewMembers-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .NewMembers-container-content {
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
