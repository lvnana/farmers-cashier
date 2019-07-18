<template>
    <div class="modifyCardMessage-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">修改会员卡信息</div>
        <div class="modifyCardMessage-container-content">
            <el-form :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="会员卡号">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="手机号码" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="发卡门店">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
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
                        <el-form-item label="会员姓名" style="text-align: left;">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
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
                        <el-form-item label="充值模式">
                            <el-select v-model="form.personnel" style="width: 100%">
                                <el-option label="张三" value="shanghai"></el-option>
                                <el-option label="李四" value="beijing"></el-option>
                                <el-option label="王五" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="卡内积分" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="会员总额" style="text-align: left;">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div style="margin: 15px 0px 35px;border-top: 1px solid #999"></div>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="修改人">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="修改时间" style="text-align: left">
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
            <el-row style="margin-top: 25px">
                <el-col :span="12" style="text-align: left">
                    <el-button class="cancel">打印充值小票</el-button>
                </el-col>
                <el-col :span="12" style="text-align: right">
                    <el-button class="allSalesReturn" @click="prev">保存</el-button>
                    <el-button class="cancel" @click="prev">取消</el-button>
                </el-col>

            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .modifyCardMessage-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .modifyCardMessage-container-content {
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

    .el-button {
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
                }
            }
        },
        methods: {
            prev() {
                this.$router.go(-1)

            },
        }
    }
</script>
