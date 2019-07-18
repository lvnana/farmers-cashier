<template>
    <div class="pricing-container">
        <div class="demo-input-suffix">
            <el-input
                    placeholder="按商品编号、名称、条码搜索"
                    prefix-icon="el-icon-search"
                    v-model="input2" size="medium ">
            </el-input>
            <el-button style="padding: 8px 15px;margin-left: 20px;" type="primary"> 查询</el-button>
        </div>
        <div class="el-pricing-content">
            <el-form ref="form" :label-position="labelPosition" :model="form" label-width="100px" style="display: flex;
justify-content: space-between">
                <el-form-item label="商品品类" style="">
                    <el-select v-model="form.port" placeholder="蔬菜类">
                        <el-option label="蔬菜类" value="porta"></el-option>
                        <el-option label="粮油类" value="portb"></el-option>
                        <el-option label="肉食类" value="portc"></el-option>
                        <el-option label="瓜果类" value="portc"></el-option>
                        <el-option label="干货类" value="portc"></el-option>
                        <el-option label="水产类" value="portc"></el-option>

                    </el-select>
                </el-form-item>
                <el-form-item label="商品名称" style="">
                    <el-select v-model="form.port" placeholder="娃娃菜">
                        <el-option label="娃娃菜" value="porta"></el-option>
                        <el-option label="大白菜" value="portb"></el-option>
                        <el-option label="小白菜" value="portc"></el-option>
                        <el-option label="土豆" value="portc"></el-option>
                        <el-option label="黄瓜" value="portc"></el-option>
                        <el-option label="西红柿" value="portc"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <div style="display: flex;justify-content: space-between;height: 450px;overflow: auto">
                <div style="width: 270px;height: 260px;background-color: white">

                </div>
                <div>
                    <el-form :label-position="labelPositionsL" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="标准售价">
                            <el-input v-model="formLabelAlign.standard"></el-input>
                        </el-form-item>
                        <el-form-item label="会员价1">
                            <el-input v-model="formLabelAlign.membersOne"></el-input>
                        </el-form-item>
                        <el-form-item label="会员价2">
                            <el-input v-model="formLabelAlign.membersTwo"></el-input>
                        </el-form-item>
                        <el-form-item label="批发价">
                            <el-input v-model="formLabelAlign.wholesale"></el-input>
                        </el-form-item>
                        <el-form-item label="退货价">
                            <el-input v-model="formLabelAlign.salesReturn"></el-input>
                        </el-form-item>
                    </el-form>
                </div>

            </div>

            <el-footer class="el-footer">

                <div>
                    <el-button> 生成调价单</el-button>
                    <el-button>停售</el-button>
                    <el-button>删除</el-button>

                </div>
                <div>
                    <el-button style=" background: -webkit-linear-gradient(#FFFFCC, #FF9966); /* Safari 5.1 - 6.0 */">保存</el-button>
                    <el-button>取消</el-button>
                </div>
            </el-footer>

        </div>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                labelPosition: 'left',
                labelPositionsL: 'right',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                formLabelAlign: {
                    standard: '98.00',
                    membersOne: '78.90',
                    membersTwo: '78.50',
                    wholesale: '65.50',
                    salesReturn: '77.00',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style scoped>
    .pricing-container {
        width: calc(100vw - 300px);
        height: 100vh;
        margin: auto;
        /*background-color: red;*/
    }

    .demo-input-suffix {
        text-align: center;
        margin-left: 130px;
        margin-top: 15px;
    }

    .el-input {
        width: 240px;
    }

    .el-select {
        width: 240px;
    }

    .el-pricing-content {
        width: calc(100vw - 500px);
        margin: 20px auto;
    }

    .demo-input-suffix .el-input {
        max-width: 350px;

    }

    .el-input {
        max-width: 200px;
        height: 30px;
        line-height: 30px;
        margin-left: 0;
    }

    .el-input input {
        width: 200px;
        height: 30px;
        line-height: 30px;
        border-radius: 0;
        text-align: right;
        background-color: transparent;
    }

    .el-input .el-input__inner {
        text-align: right;
    }

    .el-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
    }

   .el-footer .el-button {
        margin-right: 20px;
        background: -webkit-linear-gradient(#CCCCCC, #999999); /* Safari 5.1 - 6.0 */
    }
</style>
