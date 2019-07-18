<template>
    <div class="ConsumerQueries-container">
        <div style="text-align: left;padding: 15px 20px 10px;font-size: 18px">消费查询</div>
        <div class="ConsumerQueries-container-content">

            <div style="text-align: left">
                顾客卡号：
                <el-input
                        placeholder="请输入会员卡号/电话号码/付款码/交易流水号进行查询"
                        v-model="input1"
                        :disabled="true" style="width: 40%;margin-bottom: 20px">
                </el-input>
            </div>
            <div style="text-align: left">
                顾客姓名：
                <el-input
                          placeholder="请输入内容"
                          v-model="input1"
                          :disabled="true" style="width: 30%;margin-bottom: 20px">
                </el-input>
            </div>

            <el-table class="el-table"
                      border
                      height="260"
                      style="width: 100%"
                      ref="singleTable"
                      :data="storesReceiving"
                      :header-cell-style="getRowClass"
                      highlight-current-row
                      @current-change="handleCurrentChange"
                      :cell-style="cellStyle"
            >
                <el-table-column label="消费日期" prop="consumptionData"></el-table-column>
                <el-table-column label="消费时间" min-width="140px"  prop="consumptionTime"></el-table-column>
                <el-table-column label="消费商品件数" prop="consumptionNum"></el-table-column>
                <el-table-column label="商品总金额" prop="totalAmount"></el-table-column>
                <el-table-column label="是否使用优惠券" prop="coupons"></el-table-column>
                <el-table-column label="优惠金额" prop="couponsPrice"></el-table-column>
                <el-table-column label="支付金额" max-width="10px"  prop="discountPrice"></el-table-column>
            </el-table>
<div style="text-align: right;margin-top: 50px" class="ConsumerQueries-footer">
    <el-button class="save" @click="prev">保存</el-button>
    <el-button class="cancel" @click="prev">取消</el-button>
</div>
        </div>

    </div>
</template>
<style scoped>
    .ConsumerQueries-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .ConsumerQueries-container-content {
        padding: 10px 40px 20px;
        height: calc(100vh - 70px);
    }
    .ConsumerQueries-footer .el-button{
        margin-right: 20px;
        padding: 15px 25px;
    }
    .save{
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }
    .cancel{
        background: -webkit-linear-gradient(#999999, #666666);
    }
</style>
<script>
    export default {
        data() {
            return {
                input1:'',
                storesReceiving: [
                    {
                        id: '001',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '002',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    }, {
                        id: '003',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '004',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '005',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '006',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '007',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    },
                    {
                        id: '008',
                        consumptionData: '2019-05-28',
                        consumptionTime: '14:56:09',
                        consumptionNum: '9',
                        totalAmount: '50',
                        coupons: '是',
                        couponsPrice: '5',
                        discountPrice: '45',
                    }

                ],
            }
        },
     methods: {

        prev(){
            this.$router.go(-1)

    },
         handleClick(tab, event) {
             console.log(tab, event)
         },
         setCurrent(row) {
             this.$refs.singleTable.setCurrentRow(row);
         },
         handleCurrentChange(val) {
             this.currentRow = val;
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
         },
         onSubmit() {
             console.log('submit!');
         },
     }
    }
</script>
