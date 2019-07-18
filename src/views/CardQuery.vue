<template>
    <div class="CardQuery-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">卡查询</div>
        <div class="CardQuery-container-content">
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

            </el-form>

            <template>
                <div class="main-content">
                    <ul class="tab-titles">
                        <div @click="cur=0" :class="{active:cur===0}"><span>充值查询</span></div>
                        <div @click="cur=1" :class="{active:cur===1}"><span>消费查询</span></div>
                    </ul>
                    <div class="tab-content">
                        <div class="contentsTab-O" v-show="cur===0">
                            <template>
                                <el-table
                                        border
                                        ref="singleTable"
                                        :data="stockTakingList"
                                        :header-cell-style="getRowClass"
                                        :cell-style="cellStyle"
                                        @current-change="handleCurrentChange"
                                >
                                    <el-table-column label="全部时间" prop="allTime"></el-table-column>
                                    <el-table-column label="店名称" prop="shopName"></el-table-column>
                                    <el-table-column label="收银员" prop="Cashier"></el-table-column>
                                    <el-table-column label="充值金额" prop="RechargePrice"></el-table-column>
                                    <el-table-column label="充值方式" prop="RechargeType"></el-table-column>

                                </el-table>
                            </template>
                        </div>
                        <div class="contentsTab-T" v-show="cur===1">

                            <template>
                                <el-table
                                        border
                                        ref="singleTable"
                                        :data="reviewInventory"
                                        :header-cell-style="getRowClass"
                                        :cell-style="cellStyle"
                                        @current-change="handleCurrentChange"
                                        @row-click="DialogConsumptionDetails = true"
                                        style="width: 100%">
                                    <el-table-column label="消费日期" prop="consumptionDate"></el-table-column>
                                    <el-table-column label="消费时间" prop="consumptionTime"></el-table-column>
                                    <el-table-column label="店名称" prop="shopName"></el-table-column>
                                    <el-table-column label="商品件数" prop="commodityNum" width="80px"></el-table-column>
                                    <el-table-column label="收银员" prop="Cashier"></el-table-column>
                                    <el-table-column label="消费金额" prop="consumptionPrice"></el-table-column>
                                    <el-table-column label="支付方式" prop="paymentType"></el-table-column>
                                    <el-table-column label="是否使用优惠券" prop="clipCoupons"></el-table-column>
                                    <el-table-column label="优惠金额" prop="PreferentialAmount"></el-table-column>
                                </el-table>
                            </template>
                            <el-dialog
                                    title="商品详情"
                                    :visible.sync="DialogConsumptionDetails"
                                    width="50%" style="text-align: left">
                                <template>
                                    <el-table
                                            border
                                            ref="singleTable"
                                            :data="ConsumptionDetails"
                                            :header-cell-style="getRowClass"
                                            :cell-style="cellStyles"
                                            @current-change="handleCurrentChange"
                                            style="width: 100%">
                                        <el-table-column label="商品编号" prop="CommodityRanking"></el-table-column>
                                        <el-table-column label="商品条码" prop="CommodityBarCode" width="130px"></el-table-column>
                                        <el-table-column label="商品名称" prop="commodityName"></el-table-column>
                                        <el-table-column label="商品单位" prop="CommodityUnit" width="70px"></el-table-column>
                                        <el-table-column label="商品型号" prop="CommodityModel"></el-table-column>
                                        <el-table-column label="单价" prop="CommodityPrice" width="70px"></el-table-column>
                                        <el-table-column label="商品数量" prop="CommodityNum"></el-table-column>
                                        <el-table-column label="金额" prop="CommodityAmount"></el-table-column>
                                    </el-table>
                                </template>
                                <span slot="footer" class="dialog-footer" style="text-align: right">
                              <el-button type="primary" @click="DialogConsumptionDetails = false">确 定</el-button>
                              </span>
                            </el-dialog>
                        </div>
                    </div>
                </div>
            </template>

            <el-row style="margin-top: 20px;">
                <el-col style="text-align: right">
                    <el-button class="save">确认</el-button>
                    <el-button class="cancel" @click="prev">取消</el-button>
                </el-col>

            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .CardQuery-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .CardQuery-container-content {
        padding: 0px 60px 20px;
        height: calc(100vh - 70px);
    }

    .el-form-item {
        margin-bottom: 10px;
    }

    .main-content {
        height: 300px;
        margin-top: 30px;
        overflow: auto;
    }

    .tab-titles {
        text-align: left;
        margin: 0;
        padding: 0;
    }

    ul div {
        list-style: none;
        display: inline-block;
        padding: 10px 5px;
        width: 100px;
        text-align: center;
        border-top-right-radius: 25px;
        background-color: #999999;
    }

    .active {
        background-color: #FF9966;
    }

    /*.contentsTab-O-main {*/
    /*    width: calc(100vw - 410px);*/
    /*}*/

    .el-button {
        margin-right: 15px;
        padding: 15px 25px;
    }

    .save {
        background: -webkit-linear-gradient(#9FECEC, #009999);
    }

    .cancel {
        background: -webkit-linear-gradient(#999999, #666666);
    }

</style>

<script>
    export default {
        data() {
            return {
                cur: 0,
                DialogConsumptionDetails: false,
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
                },
                stockTakingList: [
                    {
                        id: '001',
                        allTime: '2019-05-20',
                        shopName: '锦华店',
                        Cashier: '仲某',
                        RechargePrice: '100',
                        RechargeType: '微信',
                    },
                    {
                        id: '002',
                        allTime: '2019-05-20',
                        shopName: '锦华店',
                        Cashier: '仲某',
                        RechargePrice: '100',
                        RechargeType: '微信',
                    },
                    {
                        id: '003',
                        allTime: '2019-05-20',
                        shopName: '锦华店',
                        Cashier: '仲某',
                        RechargePrice: '100',
                        RechargeType: '微信',
                    },
                    {
                        id: '004',
                        allTime: '2019-05-20',
                        shopName: '锦华店',
                        Cashier: '仲某',
                        RechargePrice: '100',
                        RechargeType: '微信',
                    },

                ],
                reviewInventory: [
                    {
                        id: '001',
                        consumptionDate: '2019-05-20',
                        consumptionTime: '14:20:20',
                        shopName: '锦华店',
                        commodityNum: '9',
                        Cashier: '张某',
                        consumptionPrice: '50',
                        paymentType: '会员卡',
                        clipCoupons: '是',
                        PreferentialAmount: '5',
                    },
                    {
                        id: '002',
                        consumptionDate: '2019-05-20',
                        consumptionTime: '14:20:20',
                        shopName: '锦华店',
                        commodityNum: '9',
                        Cashier: '张某',
                        consumptionPrice: '50',
                        paymentType: '微信',
                        clipCoupons: '否',
                        PreferentialAmount: '5',
                    },
                    {
                        id: '003',
                        consumptionDate: '2019-05-20',
                        consumptionTime: '14:20:20',
                        shopName: '锦华店',
                        commodityNum: '9',
                        Cashier: '张某',
                        consumptionPrice: '50',
                        paymentType: '微信',
                        clipCoupons: '是',
                        PreferentialAmount: '5',
                    },
                    {
                        id: '004',
                        consumptionDate: '2019-05-20',
                        consumptionTime: '14:20:20',
                        shopName: '锦华店',
                        commodityNum: '9',
                        Cashier: '张某',
                        consumptionPrice: '50',
                        paymentType: '微信',
                        clipCoupons: '是',
                        PreferentialAmount: '6',

                    },

                ],
                ConsumptionDetails: [
                    {
                        CommodityRanking: '1102',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '1102',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '1102',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '1102',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '1102',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                ],
            }
        },

        methods: {

            prev() {
                this.$router.go(-1)

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
                if (rowIndex === 0) {
                    return 'text-align:center;height:30px;padding:0；font-weight:600;color:black;'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0px 5px;'
            },
            cellStyles({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0px 5px;font-size:13px'
            },
        }
    }
</script>
