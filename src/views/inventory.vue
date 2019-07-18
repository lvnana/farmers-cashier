<template>
    <div class="inventory-container">
        <div class="inventory-container-content">
            <ul class="tab-titles">
                <div @click="cur=0" :class="{active:cur===0}"><span>库存盘点</span></div>
                <div @click="cur=1" :class="{active:cur===1}"><span>审核盘点单</span></div>
                <el-button style="float: right" class="save" @click="dialogVisible = true">新增</el-button>
            </ul>
            <el-dialog
                    title="新增盘点单"
                    :visible.sync="dialogVisible"
                    width="35%"
                    :before-close="handleClose"
                    style="padding: 0px 20px;text-align: left">
                <el-form :model="formInline" class="demo-form-inline" abel-width="100px"
                         label-width="100px"
                         size="small" style="overflow: auto">
                    <el-row>
                        <el-col>
                            <el-form-item label="盘点单号" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="盘点时间" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="盘点仓库" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="盘点范围" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="商品品类" style="margin: 3px 0px">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-form>

                <span slot="footer" class="dialog-footer">
                     <el-button type="primary" @click="dialogVisible = false" class="modify">确 定</el-button>
                    <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
                </span>
            </el-dialog>
            <div class="tab-content">
                <div class="contentsTab-O" v-show="cur===0">
                    <div style="height: 80vh;overflow: auto">
                        <el-table class="el-table"
                                  border
                                  ref="singleTable"
                                  :data="stockTakingList"
                                  :header-cell-style="getRowClass"
                                  :cell-style="cellStyle"
                                  @current-change="handleCurrentChange"
                                  @row-click="DialogConsumptionDetails = true"
                        >
                            <el-table-column min-width="150px" label="盘点单号" prop="orderNumber"></el-table-column>
                            <el-table-column min-width="110px" label="操作时间" prop="orderTime"></el-table-column>
                            <el-table-column max-width="50px" label="盘点仓库" prop="warehouse"></el-table-column>
                            <el-table-column max-width="50px" label="盘点范围" prop="scope"></el-table-column>
                            <el-table-column max-width="50px" label="盘点类型" prop="types"></el-table-column>
                            <el-table-column label="备注" prop="notes"></el-table-column>
                        </el-table>
                    </div>
                </div>

                <el-dialog
                        title=""
                        :visible.sync="DialogConsumptionDetails"
                        width="70%">
                    <el-form :model="Inventory" class="demo-form-inline" label-width="90px" size="medium">
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="盘点仓库">
                                    <el-input v-model="Inventory.POS" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="盘点日期">
                                    <el-input v-model="Inventory.POS" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="盘点单号">
                                    <el-input v-model="Inventory.POS" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="操作人">
                                    <el-input v-model="Inventory.POS" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="盘点范围">
                                    <el-input v-model="Inventory.usInDay" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="盘点说明">
                                    <el-input v-model="Inventory.usInDay" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="盘点数量">
                                    <el-input v-model="Inventory.usInDay" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>


                    </el-form>
                    <div style="height: 42vh;overflow: auto">

                        <el-table
                                :data="ConsumptionDetails"
                                border
                                :header-cell-style="getRowClass"
                                :cell-style="cellStyle"
                                :summary-method="getSummaries"
                                show-summary
                                style="width: 100%;">
                            <el-table-column label="商品编码" prop="CommodityBarCode" width="130px"></el-table-column>
                            <el-table-column label="名称" prop="commodityName"></el-table-column>
                            <el-table-column label="单位" prop="CommodityUnit" width="70px"></el-table-column>
                            <el-table-column label="规格" prop="CommodityRanking"></el-table-column>
                            <el-table-column label="型号" prop="CommodityModel"></el-table-column>
                            <el-table-column label="库存数量" prop="CommodityNum"></el-table-column>
                            <el-table-column label="单价" prop="CommodityPrice" width="70px"></el-table-column>
                            <el-table-column label="库存总额" prop="CommodityPrice" width="70px"></el-table-column>
                            <el-table-column label="盘点数量" prop="CommodityPrice" width="70px"></el-table-column>
                            <el-table-column label="盈亏数量" prop="CommodityPrice" width="70px"></el-table-column>
                            <el-table-column label="盈亏总额" prop="CommodityAmount"></el-table-column>
                        </el-table>
                    </div>
                    <span slot="footer" class="dialog-footer" style="text-align: right">
                              <el-button type="primary" @click="DialogConsumptionDetails = false">确 定</el-button>
                              </span>
                </el-dialog>

                <div class="contentsTab-T" v-show="cur===1">
                    <div style="height: 42vh;overflow: auto">
                        <el-table class="el-table"
                                  border
                                  ref="singleTable"
                                  :data="reviewInventory"
                                  :header-cell-style="getRowClass"
                                  :cell-style="cellStyle"
                                  @current-change="handleCurrentChange"
                                  @row-click="DialogConsumptionDetails = true"
                        >
                            <el-table-column label="盘点单号" min-width="120px" prop="orderNumber"></el-table-column>
                            <el-table-column label="单据状态" prop="documentsState"></el-table-column>
                            <el-table-column label="盘点模式" prop="pattern"></el-table-column>
                            <el-table-column label="盘点仓库" prop="warehouse"></el-table-column>
                            <el-table-column label="库存数量" prop="inventoryNum"></el-table-column>
                            <el-table-column label="实盘数量" prop="actualNum"></el-table-column>
                            <el-table-column label="盈亏数量" prop="ProfitAndLossNum"></el-table-column>
                            <el-table-column label="盘点日期" prop="dates"></el-table-column>
                            <el-table-column label="制单人" prop="makingPeople"></el-table-column>
                            <el-table-column label="审核" min-width="70px" prop="notes"
                                             @cell-click="DialogConsumptionDetails = true"></el-table-column>

                        </el-table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
    .inventory-container {
        width: calc(100vw - 240px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #ccc;
        background-color: white;
    }

    .inventory-container-content {
        padding: 30px 30px 20px;
        height: calc(100vh - 100px);
    }

    .el-tabs {
        position: relative;
    }

    .el-pagination {

        margin-top: 180px;
    }

    .el-footer {
        width: calc(100vw - 200px);
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        bottom: 50px;
    }

    .el-footer button {
        width: 90px;
        height: 60px;
        border: 0;
        border-radius: 5px;
    }

    .el-main-work-btn button {
        margin-right: 50px;
    }

    .el-main-work-btn .determine {
        background: -webkit-linear-gradient(#2BFFFF, #009999); /* Safari 5.1 - 6.0 */
    }

    .el-main-work-btn .cancel {
        background: -webkit-linear-gradient(#CCCCCC, #999999); /* Safari 5.1 - 6.0 */
    }

    .myClass input.el-input__inner {
        max-width: 200px;
        height: 30px;
        line-height: 30px;
        margin-left: 0;
        border-radius: 0;
        text-align: right;
        background-color: transparent;
    }

    .el-input input {
        background-color: transparent;
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
        background-color: #099;
    }

    .el-button {
        border-color: #cccccc;
    }

    .save {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .modify {
        background: -webkit-linear-gradient(#9FECEC, #009999);
    }

    .cancel {
        background: -webkit-linear-gradient(#cccccc, #999999);
    }
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                cur: 0,
                dialogVisible: false,
                DialogCellClick: false,
                DialogConsumptionDetails: false,
                Inventory: [
                    {
                        usInDay: '',
                        POS: '',
                    }
                ],
                formInline: {
                    user: '',
                    region: ''
                },
                stockTakingList: [
                    {
                        id: '001',
                        orderNumber: '2019051115515',
                        orderTime: '2019-05-20',
                        warehouse: '1号仓库',
                        scope: '全场盘店',
                        types: '全场盘店',
                        notes: '已完成',
                    },
                    {
                        id: '002',
                        orderNumber: '2019051115575',
                        orderTime: '2019-05-20',
                        warehouse: '2号仓库',
                        scope: '种类盘店',
                        types: '全场盘店',
                        notes: '已完成',
                    },
                    {
                        id: '003',
                        orderNumber: '2019051115455',
                        orderTime: '2019-05-20',
                        warehouse: '3号仓库',
                        scope: '全场盘店',
                        types: '全场盘店',
                        notes: '已完成',
                    },
                    {
                        id: '004',
                        orderNumber: '2019051114555',
                        orderTime: '2019-05-20',
                        warehouse: '4号仓库',
                        scope: '全场盘店',
                        types: '全场盘店',
                        notes: '已完成',
                    },

                ],
                reviewInventory: [
                    {
                        id: '001',
                        orderNumber: '2019051115515',
                        documentsState: '已盘点',
                        pattern: '1号仓库',
                        warehouse: '全场盘店',
                        inventoryNum: '全场盘店',
                        actualNum: '已完成',
                        ProfitAndLossNum: '已完成',
                        dates: '2019-05-20',
                        makingPeople: '张三',
                        notes: '未审核',
                    },
                    {
                        id: '002',
                        orderNumber: '2019051115575',
                        documentsState: '已盘点',
                        pattern: '2号仓库',
                        warehouse: '种类盘店',
                        inventoryNum: '全场盘店',
                        actualNum: '已完成',
                        ProfitAndLossNum: '已完成',
                        dates: '2019-05-20',
                        makingPeople: '张三',
                        notes: '未审核',
                    },
                    {
                        id: '003',
                        orderNumber: '2019051115455',
                        documentsState: '已盘点',
                        pattern: '3号仓库',
                        warehouse: '全场盘店',
                        inventoryNum: '全场盘店',
                        actualNum: '实际',
                        ProfitAndLossNum: '已完成',
                        dates: '2019-05-20',
                        makingPeople: '张三',
                        notes: '未审核',
                    },
                    {
                        id: '004',
                        orderNumber: '2019051114555',
                        documentsState: '已盘点',
                        pattern: '4号仓库',
                        warehouse: '全场盘店',
                        inventoryNum: '全场盘店',
                        actualNum: '已完成',
                        ProfitAndLossNum: '已完成',
                        dates: '2019-05-20',
                        makingPeople: '张三',
                        notes: '未审核',

                    },

                ],
                ConsumptionDetails: [
                    {
                        CommodityRanking: '箱',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '箱',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '箱',
                        CommodityBarCode: '20190524011018',
                        commodityName: '紫甘蓝',
                        CommodityUnit: 'kg',
                        CommodityModel: 'EQ140',
                        CommodityPrice: '3.00',
                        CommodityNum: '1.00',
                        CommodityAmount: '6.30',
                    },
                    {
                        CommodityRanking: '箱',
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
            getSummaries(param) {
                const {columns, data} = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                        return "";
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = '/';
                    }
                });

                return sums;
            },

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
                if (rowIndex === 0) {
                    return 'text-align:center;height:35px;padding:0；color:black'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:35px;padding:0px 5px'
            }
        }
    }

</script>
