<template>

    <div class="SalesReturn-container" style="overflow:hidden; overflow-y: auto">
        <div class="SalesReturn-container-content">

            <div style="text-align: left;font-size: 20px; padding: 10px 0px">
                退货
            </div>

            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px" size="small">
                <el-row style="">
                    <el-col :span="12">
                        <el-form-item label="单据号">
                            <el-select v-model="formInline.receipts" class="el-inputS">
                                <el-option label="锦江区" value="jinjiang"></el-option>
                                <el-option label="金牛区" value="jinniu"></el-option>
                                <el-option label="武侯区" value="wuhou"></el-option>
                                <el-option label="高新区" value="gaoxin"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="POS机号">
                            <el-input v-model="formInline.POS" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>


                </el-row>

                <el-row style="">
                    <el-col :span="12">
                        <el-form-item label="商店名称">
                            <el-input v-model="formInline.firmName" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="收银员">
                                <el-input v-model="formInline.cashier" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>


                </el-row>

                <el-row style="">
                    <el-col :span="12">
                        <el-form-item label="订单日期">
                            <el-input v-model="formInline.orderDate" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="收款方式">
                            <el-select v-model="formInline.collection" class="el-inputS">
                                <el-option label="现金" value="xianjin"></el-option>
                                <el-option label="微信" value="wechat"></el-option>
                                <el-option label="支付宝" value="zhifubao"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row style="">
                    <el-col :span="12">
                        <el-form-item label="订单金额">
                            <el-input v-model="formInline.orderPrice" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="找零">
                            <el-input v-model="formInline.theChange" class="el-inputS"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>


            </el-form>


            <div class="content-bottom" style="margin-top: 60px;">
                <div class=" main-content">
                    <ul class="tab-titles" style="float: left;width: 100%;clear:both;">
                        <div @click="cur=0" :class="{active:cur===0}"><span>订单详情</span></div>

                    </ul>
                    <div style="clear:both;"></div>
                    <div class="tab-content">
                        <div class="contentsTab-A" v-show="cur===0">
                            <el-table
                                    :data="tableFormData"
                                    height="169"
                                    border
                                    :header-cell-style="getRowClass"
                                    :cell-style="cellStyle"

                            >
                                <el-table-column
                                        prop="project"
                                        label="项目"
                                >
                                </el-table-column>
                                <el-table-column
                                        prop="mountNum"
                                        label="数量"
                                        width="80px"
                                >
                                </el-table-column>
                                <el-table-column
                                        prop="mountUnitPrice"
                                        label="单价">
                                </el-table-column>
                                <el-table-column
                                        prop="mountAllPrice"
                                        label="金额">
                                </el-table-column>
                                <el-table-column
                                        prop="discount"
                                        label="折扣">
                                </el-table-column>
                            </el-table>
                            <!--                    <el-alert-->
                            <!--                            title="注意：填写期间点击暂存按钮，可进行保存，此时表单还可修改；点击生成要货单，则表示要货单填写无误，不可更改。"-->
                            <!--                            type="warning">-->
                            <!--                    </el-alert>-->

                            <div class="SalesReturn-footer">
                                <div>
                                    <el-button :span="6">上一笔</el-button>
                                    <el-button :span="6">下一笔</el-button>
                                </div>
                                <div>
                                    <el-button :span="4" class="allSalesReturn">整单退货</el-button>
                                    <el-button type="text" @click="dialogVisible = true" :span="4">退货</el-button>
                                    <el-button :span="4" class="cancel">取消</el-button>
                                </div>
                                <el-dialog
                                        title="请再次确认是否退货选中商品"
                                        :visible.sync="dialogVisible"
                                        width="30%"
                                        :before-close="handleClose"
                                        style="margin-top: 10vh;
                                        text-align: left;padding: 10px 0px">
                                    <span slot="footer" class="dialog-footer">
                                        <router-link to="/Sale">
                                            <el-button @click="dialogVisible = false">是</el-button>
                                        </router-link>
                                 <router-link to="/Sale">
                                     <el-button type="primary" @click="dialogVisible = false"
                                                class="cancel">否</el-button>
                                 </router-link>

                                   </span>
                                </el-dialog>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    </div>


</template>
<style scoped>
    body {
        margin: 0;
    }

    .SalesReturn-container {
        width: calc(100vw - 200px);
        margin: 10px 20px;
        height: calc(100vh - 20px);
        background-color: white;
    }

    .SalesReturn-container-content {
        width: calc(100vw - 400px);
        padding: 10px 40px;
        /*height: calc(100vh - 40px);*/

    }

    .el-inputS .el-input__inner {
        height: 25px !important;
        line-height: 25px;
        background-color: transparent !important;
        border-radius: 0;
    }

    .el-inputS {
        width: 240px;
        height: 25px;
        line-height: 25px;
        background-color: transparent !important;
        border-radius: 0 !important;
    }

    .el-form-item {
        margin-bottom: 10px;
    }

    .tab-titles {
        text-align: left;
        margin: 0;
        padding: 0;
        float: left;
    }

    ul div {
        list-style: none;
        display: inline-block;
        padding: 5px 0px;
        width: 150px;
        text-align: center;
        color: white;
        border-top-right-radius: 25px;
        background-color: #999999;
    }

    .active {
        background-color: #FF9966;
    }

    .SalesReturn-footer {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .SalesReturn-footer .el-button {
        padding: 15px 25px;
        border-color: white;
        background: -webkit-linear-gradient(#9FECEC, #009999);
    }

    .SalesReturn-footer .el-button:hover {
        color: #606266;
    }

    .SalesReturn-footer .allSalesReturn {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .SalesReturn-footer .cancel {
        background: -webkit-linear-gradient(#999999, #666666);
    }

    .dialog-footer {
        padding: 0px 15px;
        display: flex;
        justify-content: space-between;
    }

    .dialog-footer .el-button {
        border: 0;
        padding: 15px 25px !important;
    }

    .el-dialog {
        color: #F3E9E2;
    }

</style>
<script>
    export default {
        data() {
            return {
                cur: 0,
                dialogVisible: false,
                formInline: {
                    receipts: '1204257576823872',
                    POS: '',
                    firmName: '',
                    cashier: '',
                    orderDate: '',
                    collection: '现金',
                    orderPrice: '',
                    theChange: '',
                },
                tableFormData: [
                    {
                        project: '挂单1号',
                        mountNum: '2.00',
                        mountUnitPrice: '58.99',
                        mountAllPrice: '156.32',
                        discount: '0.00',
                    }, {
                        project: '挂单2号',
                        mountNum: '2.00',
                        mountUnitPrice: '58.99',
                        mountAllPrice: '156.32',
                        discount: '0.00',
                    }, {
                        project: '挂单3号',
                        mountNum: '2.00',
                        mountUnitPrice: '58.99',
                        mountAllPrice: '156.32',
                        discount: '0.00',
                    }, {
                        project: '挂单1号',
                        mountNum: '2.00',
                        mountUnitPrice: '58.99',
                        mountAllPrice: '156.32',
                        discount: '6.30',
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
                if (rowIndex == 0) {
                    return 'text-align:center;height:30px;padding:0；font-weight:600;color:black'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0px 5px'
            }
        }
    }
</script>
