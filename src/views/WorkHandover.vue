<template>
    <div class="WorkHandover-container clear">
        <el-container class="WorkHandover-container-content">
            <el-row class="WorkHandover-content-top" style="height: 75vh;">
                <el-col :span="7" style="background-color: #F8EFE4;height: 100%;border:1px solid #ccc">
                    <el-form :label-position="labelPosition" label-width="100px"
                             style="padding-right: 10px;" size="mini">
                        <el-form-item label="营业日:" style="margin-bottom: 10px;">
                            <el-input v-model="formLabelAlign.Data" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="POS机号:" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.immediately" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="收银员:" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.cashier" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="交班时间：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.time" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="收款终端：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.terminal" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="销售单数：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.singular" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="销售金额：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.money" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="新增会员：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.addMembers" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="会员笔数：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.membersNum" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="会员金额：" style="margin-bottom: 10px">
                            <el-input v-model="formLabelAlign.membersMoney" class="myClass"></el-input>
                        </el-form-item>
                        <el-form-item label="交接员：" style="margin-bottom: 10px" prop="region">
                            <el-select v-model="value" placeholder="请选择" class="myClass">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-form>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="16" style="float: right;border: 1px solid #ccc;height: 100%;padding: 10px;background-color: white">
                    <ul class="tab-titles">
                        <div @click="cur=0" :class="{active:cur===0}"><span>销售汇总</span></div>
                        <div @click="cur=1" :class="{active:cur===1}"><span>销售明细</span></div>
                    </ul>
                    <div class="tab-content">
                        <div class="contentsTab-O" v-show="cur===0" style="height: 60vh;overflow: auto">
                            <el-table :data="saleSummaryData"
                                      border
                                      :header-cell-style="getRowClass"
                                      :cell-style="cellStyle"
                                      highlight-current-row

                            >
                                <el-table-column label="收款名称" prop="paymentTerm"></el-table-column>
                                <el-table-column label="销售金额" prop="figure"></el-table-column>
                                <el-table-column label="会员充值" prop="topUp"></el-table-column>
                            </el-table>
                        </div>

                        <div class="contentsTab-T" v-show="cur===1">
                            <div  style="height: 55vh;overflow: auto">
                                <el-table :data="saleDetailData"
                                          border
                                          :header-cell-style="getRowClass"
                                          :cell-style="cellStyle"
                                          highlight-current-row
                                >
                                    <el-table-column min-width="150px" label="时间" prop="orderTime"></el-table-column>
                                    <el-table-column min-width="110px" label="订单号" prop="orderNumber"></el-table-column>
                                    <el-table-column max-width="50px" label="支付方式" prop="paymentTerm"></el-table-column>
                                    <el-table-column max-width="50px" label="订单状态" prop="state"></el-table-column>
                                    <el-table-column max-width="50px" label="数量" prop="number"></el-table-column>
                                    <el-table-column label="金额" prop="amount"></el-table-column>
                                </el-table>
                            </div>

                        </div>
                    </div>
                </el-col>
            </el-row>

            <el-footer style="height: 15vh;line-height:15vh;padding: 0">

                <el-col :span="7">
                    <el-col :span="12">
                        <el-button class="Printing">打印交班表</el-button>
                    </el-col>
                    <el-col :span="12" >
                        <el-button class="Printing">打印对账单</el-button>
                    </el-col>

                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="16" style="float: right;">
                    <el-col style="text-align: right;">
                        <el-button class="determine" style="margin-right: 20px">确定</el-button>
                        <el-button class="cancel" style="margin-right: 20px">取消</el-button>
                    </el-col>


                </el-col>


            </el-footer>
        </el-container>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                cur: 0,
                tabKey: 'saleSummary',
                typeList: [
                    {name: '收款汇总', key: 'agekey'},
                    {name: '收款明细', key: 'namekey'}
                ],
                saleSummaryData: [
                    {
                        id: '001',
                        paymentTerm: '支付宝',
                        figure: '154.00',
                        topUp: '100'
                    },
                    {
                        id: '002',
                        paymentTerm: '微信',
                        figure: '154.00',
                        topUp: '100'
                    },
                    {
                        id: '003',
                        paymentTerm: '支付宝',
                        figure: '154.00',
                        topUp: '100'
                    },
                    {
                        id: '004',
                        paymentTerm: '支付宝',
                        figure: '154.00',
                        topUp: '100'
                    }
                ],
                saleDetailData: [
                    {
                        id: '001',
                        orderTime: '2019/05/02 14:30:12',
                        orderNumber: '67422383825',
                        paymentTerm: '微信',
                        state: '已完成',
                        number: '2.00',
                        amount: '144.00',
                    },
                    {
                        id: '002',
                        orderTime: '2019/05/03 14:30:12',
                        orderNumber: '67422383825',
                        paymentTerm: '支付宝',
                        state: '已完成',
                        number: '1.00',
                        amount: '14.00',
                    },
                    {
                        id: '003',
                        orderTime: '2019/05/03 14:30:12',
                        orderNumber: '67422383825',
                        paymentTerm: '微信',
                        state: '支付宝',
                        number: '2.00',
                        amount: '1.00',
                    },
                    {
                        id: '004',
                        orderTime: '2019/05/03 14:30:12',
                        orderNumber: '67422383825',
                        paymentTerm: '微信',
                        state: '支付宝',
                        number: '2.00',
                        amount: '12.00',
                    },

                ],
                labelPosition: 'right',
                formLabelAlign: {
                    Data: '2019-03-02',
                    immediately: "003",
                    cashier: '张三',
                    time: "14:20:30",
                    terminal: "4646123168489",
                    singular: '1200',
                    money: '1512.00',
                    addMembers: '2',
                    membersNum: '10',
                    membersMoney: '122',
                    handover: '李四',

                },
                options: [{
                    value: '选项1',
                    label: '张三'
                }, {
                    value: '选项2',
                    label: '李四'
                }, {
                    value: '选项3',
                    label: '王五'
                }, {
                    value: '选项4',
                    label: '龙六'
                }],
                value: '选项1'
            }
        },

        methods: {
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
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
                    return 'text-align:center;height:40px;padding:0'
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

<style scoped>
    .clear {
        clear: both;
    }

    .WorkHandover-container {
        width: calc(100vw - 240px);
        margin: 10px 20px;
        height: calc(100vh - 30px);
    }

    .WorkHandover-container-content {
        width: calc(100vw - 240px);
        height: calc(100vh - 30px);

    }

    .WorkHandover-content-top {
        width: calc(100vw - 240px);
    }

    .tab-titles {
        text-align: left;
        margin: 0;
        padding: 0;
        color: white;
        font-size: 15px;
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
        background-color: #009999;
    }
    .myClass{
        width: 100%;
    }
    .el-footer .el-button{
        padding: 15px 20px;
        border-color: #ccc;
        color: #333333;
    }
    .Printing {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);

    }
    .determine {
        background: -webkit-linear-gradient(#2BFFFF, #009999); /* Safari 5.1 - 6.0 */

    }

 .cancel {
        background: -webkit-linear-gradient(#CCCCCC, #999999); /* Safari 5.1 - 6.0 */
    }
</style>



