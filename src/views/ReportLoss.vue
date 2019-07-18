<template>
    <div class="ReportLoss-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">挂失/换卡</div>
        <div class="ReportLoss-container-content">
            <el-form  :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
                    <!--                    :inline="true"-->
                    <el-col :span="15">
                        <el-form-item label="会员卡编号" >
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                <el-col :span="10">
                    <el-form-item label="会员姓名">
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
                        <el-form-item label="会员电话">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="有效日期" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="会员生日" required style="text-align: left;">
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
                        <el-form-item label="会员卡积分">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="卡内余额" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="挂失原因" required style="text-align: left;">
                            <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width: 100%">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="挂失人" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true" placeholder="姓名/手机号/身份证号"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>

                <div style="margin: 15px 0px 35px;border-top: 1px solid #999"></div>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="登记人">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="登记时间" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="text-align: left;padding: 15px 0px;margin-left: 35px">
                    <el-checkbox v-model="checked">开启审核</el-checkbox>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="审核人">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="审核时间" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>

            <div style="text-align: right;padding: 15px" >
                <el-button class="allSalesReturn" @click="prev">保存</el-button>
                <el-button class="cancel" @click="prev">取消</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .ReportLoss-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .ReportLoss-container-content {
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
                checked: false,
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
