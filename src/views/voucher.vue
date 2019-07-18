<template>
    <div class="voucher-container">
        <el-row style="text-align: left;font-size: 18px;padding: 15px">收款缴款单</el-row>
        <div class="voucher-container-content">
            <el-form :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="当前营业日">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="所属分店" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="POS机号">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="收银员" style="text-align: left">
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
                        <el-form-item label="结算时间" style="text-align: left;">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="10" style="float: right">
                        <el-form-item label="结算金额">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="缴款时间">
                            <el-select v-model="form.personnel" style="width: 100%">
                                <el-option label="张三" value="shanghai"></el-option>
                                <el-option label="李四" value="beijing"></el-option>
                                <el-option label="王五" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="缴款类型" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10" style="text-align: left">
                        <el-form-item label="缴款金额">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


            </el-form>
            <el-row style="height: 17vh;line-height: 17vh">
                <el-col :span="10" style="text-align: left;">
                    <el-button class="Weigh">打印缴款单</el-button>
                </el-col>
                <el-col :span="14" style="text-align: right">
                    <el-button class="cancel">打印</el-button>
                    <el-button class="cancel" @click="prev">取消</el-button>
                </el-col>

            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .voucher-container {
        width: calc(100vw - 240px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #ccc;
        background-color: white;
    }

    .voucher-container-content {
        padding: 0px 60px 0px;
        height: calc(100vh - 80px);
    }

    .el-form-item {
        margin-bottom: 10px;
    }
    .Weigh{
        background: -webkit-linear-gradient(#9FECEC, #009999);
    }
    .Printing {
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
    .demo-form-inline{
       height: 70vh;
        overflow: auto;
    }
</style>
<script>
    export default {
        data() {
            return {
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



