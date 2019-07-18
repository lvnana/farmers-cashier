<template>
    <div class="wholesale-container">
        <div class="wholesale-container-content">
            <div class="content-top"
                 style="height:48vh;">
                <el-row>
                    <el-col :span="8">
                        <div class="content-topLeft"
                             style="background: #E6F5F5;height:45vh;overflow: auto">
                            <div style="background-color: #B8E3E3;
                            display: flex;justify-content: space-between;
                            padding: 10px 20px">
                                <div>XXX总部</div>
                                <div>采购员：李晓霄</div>
                            </div>
                            <el-form :label-position="labelPosition" label-width="100px" size="small "
                            >
                                <el-form-item label="采购单号:" style="margin: 5px 0px;">
                                    <el-input v-model="formLabelAlign.procurementOdd" style="height: 30px;"
                                              class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="供应商:" style="margin: 5px 0px;">
                                    <el-select v-model="value" placeholder="请选择" class="myClass">
                                        <el-option
                                                v-for="item in optionSupplier"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="收货日期:" style="margin: 5px 0px;">
                                    <el-input v-model="formLabelAlign.ReceivingDate" class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="结算金额:" style="margin: 5px 0px;">
                                    <el-input v-model="formLabelAlign.settlementPrice" class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="结算方式:" style="margin: 5px 0px;">
                                    <el-select v-model="value1" placeholder="请选择" class="myClass">
                                        <el-option
                                                v-for="item in optionPayment"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="结算日期:" style="margin: 5px 0px;" prop="region">
                                    <el-input v-model="formLabelAlign.settlementDate" class="myClass"></el-input>
                                </el-form-item>

                            </el-form>

                        </div>
                        <div style="clear:both;"></div>
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="14" style="float: right;height: 45vh">
                        <div class="content-topRight">
                            <template>
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el-tabs"
                                         style="padding: 0px;height: 100%;font-size: 21px;">
                                    <el-tab-pane label="蔬菜类" name="1" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="水果类" name="2" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>苹果</div>
                                                <div>9.8/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="粮油" name="3" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>调和油</div>
                                                <div>78/桶</div>
                                            </div>
                                        </div>


                                    </el-tab-pane>
                                    <el-tab-pane label="肉食" name="4" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>


                                    </el-tab-pane>
                                    <el-tab-pane label="干货" name="5" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="蔬菜类" name="6" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="水果类" name="7" class="el-tab-pane" style="height: 100%;">


                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>苹果</div>
                                                <div>9.8/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="粮油" name="8" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>调和油</div>
                                                <div>78/桶</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="肉食" name="9" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="干货" name="10" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true"
                                                 v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                </el-tabs>
                            </template>

                        </div>
                    </el-col>
                    <div style="clear:both;"></div>
                </el-row>

            </div>
            <div class="content-bottom" style="height:45vh;">

                <div style="height: 35vh;overflow: auto;">
                    <el-table class="el-table"
                              border
                              style="width: 100%"
                              ref="singleTable"
                              :data="miGoList"
                              :header-cell-style="getRowClass"
                              :cell-style="cellStyle"
                              @current-change="handleCurrentChange"
                    >
                        <el-table-column label="商品编号" prop="coding"></el-table-column>
                        <el-table-column min-width="140px" label="商品条码" prop="barcode"></el-table-column>
                        <el-table-column label="名称" prop="TradeName"></el-table-column>
                        <el-table-column label="类别" prop="species"></el-table-column>
                        <el-table-column label="单位" prop="unit"></el-table-column>
                        <el-table-column label="商品价" prop="shippingUnitPrice"></el-table-column>
                        <el-table-column max-width="10px" label="商品数量" prop="shippingNumber"></el-table-column>
                        <el-table-column label="批发价" prop="shippingTotalPrice"></el-table-column>

                    </el-table>
                    <!--                    <el-alert-->
                    <!--                            title="注意：填写期间点击暂存按钮，可进行保存，此时表单还可修改；点击生成要货单，则表示要货单填写无误，不可更改。"-->
                    <!--                            type="warning">-->
                    <!--                    </el-alert>-->

                    <div style="clear: both"></div>
                </div>
                <div style="height: 1vh"></div>
                <div style="float: right;height: 5vh;line-height: 5vh;" class="footer-btn">
                    <el-button>生成销售单</el-button>
                    <el-button>审核</el-button>
                    <el-button>删除</el-button>
                    <el-button>取消</el-button>
                </div>
            </div>
        </div>
    </div>


</template>
<style scoped>
    .el-tabs /deep/ .el-tabs__content {
        height: 100%;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 3px; /*滚动条的背景区域的圆角*/
        background-color: #fdf8f5; /*滚动条的背景颜色*/
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px; /*滚动条的圆角*/
        background-color: lightseagreen; /*滚动条的背景颜色*/

    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: lightseagreen;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: lightseagreen;
        cursor: pointer;
    }

    .wholesale-container {
        width: calc(100vw - 280px);
        margin: 10px 30px;
        height: calc(100vh - 30px);
        border: 1px solid #999999;
        background-color: white;
    }

    .wholesale-container-content {
        width: calc(100vw - 320px);
        margin: 10px 20px;
        height: calc(100vh - 40px);
        /*background-color: red;*/
    }

    .content-topLeft {
        border: 1px solid #00CCCC;
        /*background-color: #E6F5F5;*/
    }

    .content-topRight {
        text-align: left;
        height: calc(50vh - 50px);
        overflow-y: auto;
        margin-bottom: 20px;
    }

    .el-tabs {
        color: white;
        padding: 0;
        margin: 0;
        overflow: hidden;
        /*background-color: rgba(151, 255, 255, 0.1)*/
    }

    .el-tab-pane {
        padding: 0;
        margin: 0;
        font-size: 14px;
    }

    .tab-item-content {
        /*width: 23%;*/
        display: flex;
        padding: 5px 15px;
        justify-content: space-between;
        margin: 12px 10px;
        display: inline-block;
        background-color: lightseagreen;
    }


    ul div {
        list-style: none;
        display: inline-block;
        padding: 10px 0px;
        width: 100px;
        text-align: center;
        color: white;
        border-top-right-radius: 25px;
        background-color: #999999;
    }

    .active {
        background-color: #099;
    }

    .el-input {
        max-width: 180px;
        margin-left: 0;
    }

    .el-input input {
        max-width: 180px;
        border-radius: 0;
        text-align: right;
        background-color: transparent;
    }

    .el-select {
        max-width: 180px;
    }

    .el-select input .el-input__inner {
        float: right;
    }

    .footer-btn .el-button:nth-child(1) {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .footer-btn .el-button:nth-child(2) {
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .footer-btn .el-button:nth-child(3) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .footer-btn .el-button:nth-child(4) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .el-button:hover {
        color: #606266;
    }
</style>
<script>
    export default {
        data() {
            return {
                cur: 0,
                value: '商户筛选',
                value1: '微信支付',
                activeName: '2',
                name: 'first',
                labelPosition: 'right',
                formLabelAlign: {
                    procurementOdd: '201905230219',
                    ReceivingDate: '2019-05-20',
                    settlementPrice: '12536.00',
                    settlementDate: '2019-05-20',
                },
                optionPayment: [
                    {
                        value: '选项1',
                        label: '微信支付'
                    },
                    {
                        value: '选项2',
                        label: '支付宝支付'
                    },
                    {
                        value: '选项3',
                        label: '花呗支付'
                    }
                ],
                optionSupplier: [
                    {
                        value: '选项1',
                        label: '商户筛选'
                    },
                    {
                        value: '选项2',
                        label: '商户筛选'
                    },
                    {
                        value: '选项3',
                        label: '商户筛选'
                    }
                ],
                miGoList: [
                    {
                        id: '001',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        shippingUnitPrice: '4.36',
                        shippingNumber: '85',
                        shippingTotalPrice: '1300',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        shippingUnitPrice: '7.32',
                        shippingNumber: '201',
                        shippingTotalPrice: '1500',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        shippingUnitPrice: '5.01',
                        shippingNumber: '150',
                        shippingTotalPrice: '1340',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        shippingUnitPrice: '6.22',
                        shippingNumber: '123',
                        shippingTotalPrice: '1360',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        shippingUnitPrice: '8.20',
                        shippingNumber: '110',
                        shippingTotalPrice: '1330',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        shippingUnitPrice: '8.36',
                        shippingNumber: '99',
                        shippingTotalPrice: '1400',
                        ReceivingNumber: '--',
                    },
                    {
                        id: '007',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        shippingUnitPrice: '5.00',
                        shippingNumber: '112',
                        shippingTotalPrice: '1300',
                        ReceivingNumber: '--',
                    },


                ],
                storesReceiving: [
                    {
                        id: '001',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },
                    {
                        id: '007',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnUnitPrice: '4.36',
                        salesReturnTotalPrice: '1300',
                        salesReturnNumber: '--',
                    },


                ],
            }
        },
        methods: {
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
                    return 'text-align:center;height:35px;padding:0;background: lightseagreen;color:black;'
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
