<template>
    <div class="modifyCardMessage-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">账单查询</div>
        <div class="modifyCardMessage-container-content">
            <el-form :model="form" class="demo-form-inline" label-width="90px" size="medium">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="流水号">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="订单号" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="交易门店">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="单据状态" style="text-align: left">
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
                        <el-form-item label="收银员" style="text-align: left;">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="支付方式" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="交易时间">
                            <el-select v-model="form.personnel" style="width: 100%">
                                <el-option label="张三" value="shanghai"></el-option>
                                <el-option label="李四" value="beijing"></el-option>
                                <el-option label="王五" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="交易金额" style="text-align: left">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="实收总额" style="text-align: left;">
                            <el-input v-model="form.usInDay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="float: right">
                        <el-form-item label="找零金额">
                            <el-input v-model="form.POS" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
            <div style="height:260px;overflow: auto;margin-top: 15px">
                <el-table
                        :data="CouponTable"
                        border
                        :header-cell-style="getRowClass"
                        :cell-style="cellStyle"
                >
                    <el-table-column
                            prop="commodityName"
                            label="商品名称"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="category"
                            label="品类"

                    >
                    </el-table-column>
                    <el-table-column
                            prop="commodityNum"
                            label="数量"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="commodityPrice"
                            label="单价"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="Membership"
                            label="会员优惠">
                    </el-table-column>
                    <el-table-column
                            prop="TotalAmount"
                            label="实收金额"
                    >
                    </el-table-column>

                </el-table>
            </div>
            <el-row style="margin-top: 40px;">
                <el-col :span="12" style="text-align: left">
                    <el-button class="saleReturn">退货</el-button>
                    <el-button class="Printing">打印账单</el-button>
                    <el-button class="Printing">单据开票</el-button>

                </el-col>
                <el-col :span="12" style="text-align: right">
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
        border: 1px solid #ccc;
        background-color: white;
    }

    .modifyCardMessage-container-content {
        padding: 0px 60px 20px;
        height: calc(100vh - 70px);
    }

    .el-form-item {
        margin-bottom: 10px;
    }
    .saleReturn{
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
                },
                CouponTable: [
                    {
                        commodityName: 'xxx商品',
                        category: '蔬菜类',
                        commodityNum: '45',
                        commodityPrice: '3.5',
                        Membership: '0.38',
                        TotalAmount: '140.40',
                    },
                    {
                        commodityName: 'xxx商品',
                        category: '蔬菜类',
                        commodityNum: '45',
                        commodityPrice: '5.4',
                        Membership: '0.7',
                        TotalAmount: '150.2',
                    },
                    {
                        commodityName: 'xxx商品',
                        category: '蔬菜类',
                        commodityNum: '45',
                        commodityPrice: '5.7',
                        Membership: '0.52',
                        TotalAmount: '132',
                    },
                    {
                        commodityName: 'xxx商品',
                        category: '蔬菜类',
                        commodityNum: '35',
                        commodityPrice: '45',
                        Membership: '0.82',
                        TotalAmount: '104.5',
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
                if (rowIndex == 0) {
                    return 'background-color:#A6DBDB;text-align:center;height:30px;padding:0；font-weight:600;color:black;'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0px 5px'
            },
            prev() {
                this.$router.go(-1)
            },
        }
    }
</script>
