<template>


    <div class="ChangePassword-containers">
        <div class="ChangePassword-content">
            <div style="margin: 30px;text-align: left;font-size: 18px;color: #009999">
                填写下面的表单以更改您的密码：
            </div>
            <el-row style="display: flex;justify-content: center">
                <el-col :span="15">
                    <el-form :model="formLabelAlign" :rules="rules2" ref="ruleForm2" label-width="80px"
                             class="demo-ruleForm" :label-position="labelPosition">
                        <el-form-item label="账号">
                            <el-input v-model="formLabelAlign.name" placeholder="请输入您的账号"></el-input>
                        </el-form-item>
                        <el-form-item label="原始密码">
                            <el-input v-model="formLabelAlign.region" placeholder="原始密码"></el-input>
                        </el-form-item>

                        <el-form-item label="新密码" prop="pass">
                            <el-input type="password" v-model="formLabelAlign.pass" auto-complete="off"
                                      placeholder="新密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="formLabelAlign.checkPass" auto-complete="off"
                                      placeholder="确认密码"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-row style="text-align: right">
                        <el-button type="primary" @click="submitForm('ruleForm2')" class="save">保存</el-button>
                        <el-button @click="resetForm('ruleForm2')">取消</el-button>
                    </el-row>
                </el-col>
            </el-row>



        </div>
    </div>

</template>
<style scoped>
    .ChangePassword-containers {
        width: calc(100vw - 240px);
        margin: 25px 20px;
        height: calc(100vh - 55px);
        border: 1px solid #ccc;
        background-color: white;
    }
    .ChangePassword-content {
        height: calc(100vh - 110px);
    }

    .el-form-item {
        margin-bottom: 30px;
    }
    .el-button {
        border: 0;
        color: #333333;
        padding: 15px 25px;
        margin-right: 40px;
        background: -webkit-linear-gradient(#CCCCCC, #999999); /* Safari 5.1 - 6.0 */
    }

    .save {
        /*margin-right: 10px;*/
        background: -webkit-linear-gradient(#FFFFCC, #FF9966); /* Safari 5.1 - 6.0 */
    }
.demo-ruleForm{
    height: 400px;
    overflow: auto;
}
</style>
<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formLabelAlign.checkPass !== '') {
                        this.$refs.formLabelAlign.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formLabelAlign.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    name: '',
                    region: '',
                    type: ''
                },
                rules2: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
