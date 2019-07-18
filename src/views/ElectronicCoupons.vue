<template>
    <div class="ElectronicCoupons-container">
        <div style="padding: 15px 20px 15px;text-align: left;font-size: 18px">电子优惠券</div>
        <div class="ElectronicCoupons-container-content">
            <div style="height:500px;overflow: auto">
                <el-table
                        :data="CouponTable"
                        border
                        :header-cell-style="getRowClass"
                        :cell-style="cellStyle"
                >
                    <el-table-column
                            prop="CouponName"
                            label="券名称"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="CouponType"
                            label="券类型"
                            width="120px"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="CouponFaceValue"
                            label="券面值"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="CouponSheets"
                            label="配置券张数"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="TermValidity"
                            label="有效日期">
                    </el-table-column>
                    <el-table-column
                            prop="EffectiveDays"
                            label="有效天数"
                            width="80px">
                    </el-table-column>
                    <el-table-column
                            prop="TicketNum"
                            label="券序号">
                    </el-table-column>
                    <el-table-column
                            prop="UseCouponSheets"
                            label="使用券张数"
                            width="100px">
                    </el-table-column>
                </el-table>
            </div>

            <el-row style="margin-top: 40px;float: right">
                    <el-button class="allSalesReturn" @click="prev">新增优惠券</el-button>
                    <el-button class="cancel" @click="prev">取消</el-button>

            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .ElectronicCoupons-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .ElectronicCoupons-container-content {
        padding: 0px 60px 20px;
        height: calc(100vh - 70px);
    }

    .el-form-item {
        margin-bottom: 15px;
    }

    .allSalesReturn {
        background: -webkit-linear-gradient(#9FECEC, #009999);
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
                CouponTable: [
                    {
                        CouponName: '满300减45',
                        CouponType: '满减券',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '15',
                        TicketNum: '06589',
                        UseCouponSheets: '24',
                    },
                    {
                        CouponName: '满300减45',
                        CouponType: '满减券',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '15',
                        TicketNum: '06589',
                        UseCouponSheets: '44',
                    },
                    {
                        CouponName: '满300减45',
                        CouponType: '满减券',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '15',
                        TicketNum: '06589',
                        UseCouponSheets: '244',
                    },
                    {
                        CouponName: '全场最高300元立减30元',
                        CouponType: '立减券',
                        CouponFaceValue: '35',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '10',
                        TicketNum: '06238',
                        UseCouponSheets: '57',
                    },
                    {
                        CouponName: '10元代金券',
                        CouponType: '代金券',
                        CouponFaceValue: '40',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '60',
                        TicketNum: '05862',
                        UseCouponSheets: '247',
                    },   {
                        CouponName: 'XXX商品8.5折促销',
                        CouponType: '折扣券',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '11',
                        TicketNum: '02559',
                        UseCouponSheets: '147',
                    },   {
                        CouponName: '鸡蛋15元抵用券',
                        CouponType: '单品抵用券',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '20',
                        TicketNum: '02559',
                        UseCouponSheets: '75',
                    },   {
                        CouponName: '生园礼粽B款提货券',
                        CouponType: '节日福利',
                        CouponFaceValue: '45',
                        CouponSheets:'500',
                        TermValidity: '2019/06/01~2019/06/10',
                        EffectiveDays: '21',
                        TicketNum: '08623',
                        UseCouponSheets: '252',
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
                    return 'text-align:center;height:30px;padding:0；font-weight:600;color:black'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0px 5px'
            },
            prev() {
                this.$router.go(-1)
            }
            },
        }
</script>
