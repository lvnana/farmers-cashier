<template>
    <div class="note">
        <div style="height: 30vh"></div>
        <div style="height: 30vh;">
            <el-form :model="ruleForm"  ref="ruleForm" >
                <el-form-item>
                    <el-input placeholder="账号" v-model="ruleForm.userName" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <div style="height:8vh;line-height:8vh;display: flex;justify-content: space-between;">
                    <el-col :span="11">
                    <router-link to="/sale">
                        <el-button class="Submission"  type="primary" @click="submitForm('ruleForm')" style="width: 100%">确定</el-button>
                    </router-link>
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="11">
                    <el-button style="width: 100%" class="cancel" >取消</el-button>
                    </el-col>
                </div>
            </el-form>

        </div>

        <el-row class="el-footer">
            <div style="text-align: left">成都金雅图科技有限公司</div>
            <div >网址：www.jinyatu.com</div>
            <div >
                <span>客服热线：028-85245288</span>
                <span>028-85245288</span>
            </div>

        </el-row>


    </div>

</template>

<script>
    export default {
        data() {

            return {
                ruleForm: {
                    userName: '', //用户名
                    password: '' //密码
                },
            };
        },
        methods: {}

    }
</script>
<style scoped>
    .note {
        position: fixed;
        top: 0px;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background: url("../assets/logo-bgi.png");
        /*background-size: contain;*/
        background-size: cover;

    }

    .el-form {
        margin: auto;
        font-size: 15px;
        width:25%;
        /*margin-top: 60px;*/
    }


    .el-input  {
        height: 50px;
        line-height: 50px;
    }
    .el-input .el-input__inner {
        height: 50px;
        line-height: 50px;
    }
    .Submission  {
        border-color: #ccc;
        border-radius: 10px;
        padding: 15px 0;
        background-color: rgba(32, 178, 170, 0.9);
    }

    .cancel {
        border-color: #ccc;
        border-radius: 10px;
        padding: 15px 0;
        background-color: rgba(255, 160, 122, 0.9);
    }

    .el-footer {
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: fixed;
        bottom: 0;
        color: white;
        font-size: 22px;
        /*font-weight: 600;*/
        display: flex;
        justify-content: space-between;
    }

</style>
