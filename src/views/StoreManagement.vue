<template>
    <div class="StoreManagement-container">
        <div class="StoreManagement-content">
            <div class="content-top"
                 style="height:45vh;">
                <el-row>
                    <el-col :span="7" style="height: 100%">
                        <div class="content-topLeft" style="color:#009999;font-size: 20px">
                            <el-row>
                                <el-col :span="11">
                                    <template>
                                        <el-select v-model="value" placeholder="请选择" class="miClass">
                                            <el-option
                                                    v-for="item in option"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>

                                </el-col>

                                <el-col :span="11" style="float: right">
                                    <template>
                                        <el-select v-model="value2" placeholder="请选择" class="miClass" >
                                            <el-option
                                                    v-for="item in optionPerson"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>

                                </el-col>
                            </el-row>

                            <el-row style="height: 5vh;line-height: 5vh;padding: 0 5px">
                                <e-col :span="11" style="float: left">
                                    重量(kg)
                                </e-col>

                                <e-col :span="11" style="float: right;color: #FF6666">
                                    0.000
                                </e-col>
                            </el-row>
                            <el-row style="height: 6vh;line-height: 6vh;padding: 0 8px">
                                <e-col :span="11" style="float: left">
                                    单价(元kg)
                                </e-col>



                                <e-col :span="11" style="float: right;color: #FF6666">
                                    0.000
                                </e-col>
                            </el-row>
                            <el-row style="height: 6vh;line-height: 6vh;padding: 0 8px">
                                <e-col :span="11" style="float: left">
                                    金额(元)
                                </e-col>

                                <e-col :span="11" style="float: right;color: #FF6666">
                                    0.000
                                </e-col>
                            </el-row>
                            <el-row style="height: 6vh;line-height: 6vh;padding: 0 8px">
                                <e-col :span="11" style="float: left">
                                    总额(元)
                                </e-col>

                                <e-col :span="11" style="float: right;color: #FF6666">
                                    0.000
                                </e-col>
                            </el-row>

                        </div>
                        <div style="clear:both;height: 2vh"></div>
                        <div class="content-topLeft-buttom">
                            <div style="padding: 5px;text-align: left;color:#009999;font-size: 20px">
                                请输入要货数量
                            </div>
                            <div>
                                <el-row style="padding: 5px">
                                    <el-col :span="16">
                                        <el-input v-model="input" style="margin-left: 5px"></el-input>
                                    </el-col>
                                    <el-col :span="2"></el-col>
                                    <el-col :span="6" style="float: right">
                                        <el-select v-model="value4" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>

                            </div>
                        </div>
                    </el-col>
                    <el-col :span="15" style="float: right;height:45vh">
                        <div class="content-topRight" >
                            <template>
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el-tabs"
                                         style="padding: 0px;height: 100%;font-size: 21px;">
                                    <el-tab-pane label="蔬菜类" name="1" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="水果类" name="2" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>苹果</div>
                                                <div>9.8/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="粮油" name="3" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>调和油</div>
                                                <div>78/桶</div>
                                            </div>
                                        </div>


                                    </el-tab-pane>
                                    <el-tab-pane label="肉食" name="4" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>


                                    </el-tab-pane>
                                    <el-tab-pane label="干货" name="5" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="蔬菜类" name="6" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="水果类" name="7" class="el-tab-pane" style="height: 100%;">


                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>苹果</div>
                                                <div>9.8/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="粮油" name="8" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>调和油</div>
                                                <div>78/桶</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                    <el-tab-pane label="肉食" name="9" class="el-tab-pane" style="height: 100%;">

                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="干货" name="10" class="el-tab-pane" style="height: 100%;">
                                        <div style="height: 100%;overflow: auto">
                                            <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                                <div>大白菜</div>
                                                <div>0.98/斤</div>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                                </el-tabs>
                            </template>
                        </div>
                    </el-col>

                </el-row>
                <div style="clear:both;"></div>

            </div>
            <div style="height: 3vh"></div>
            <div class="content-bottom" style="height: 45vh;">
                <div class=" main-content">
                    <ul class="tab-titles" style="float: left;width: 100%;clear:both;">
                        <div @click="cur=0" :class="{active:cur===0}"><span>门店要货</span></div>
                        <div @click="cur=1" :class="{active:cur===1}"><span>门店收货</span></div>
                        <div @click="cur=2" :class="{active:cur===2}"><span>门店退货</span></div>
                        <div @click="cur=3" :class="{active:cur===3}"><span>耗损报废</span></div>

                    </ul>
                    <div style="clear:both;"></div>
                    <div class="tab-content">
                        <div class="contentsTab-A" v-show="cur===0">
                            <el-table class="el-table"
                                      border
                                      height="200"
                                      style="width: 100%"
                                      ref="singleTable"
                                      :data="storesEnquiry"
                                      :header-cell-style="getRowClass"
                                      :cell-style="cellStyle"
                                      @current-change="handleCurrentChange"
                            >
                                <el-table-column label="商品编码" prop="coding"></el-table-column>
                                <el-table-column min-width="140px" label="商品条码" prop="barcode"></el-table-column>
                                <el-table-column label="商品名称" prop="TradeName"></el-table-column>
                                <el-table-column label="商品品类" prop="species"></el-table-column>
                                <el-table-column label="单位" prop="unit"></el-table-column>
                                <el-table-column max-width="10px" label="要货数量" prop="enquiryNumber"></el-table-column>
                                <el-table-column label="配送价" prop="shippingPrice"></el-table-column>
                            </el-table>
                            <!--                    <el-alert-->
                            <!--                            title="注意：填写期间点击暂存按钮，可进行保存，此时表单还可修改；点击生成要货单，则表示要货单填写无误，不可更改。"-->
                            <!--                            type="warning">-->
                            <!--                    </el-alert>-->
                            <div style="color: #e6a23c;padding: 10px 0;text-align: left">
                                注意：填写期间点击暂存按钮，可进行保存，此时表单还可修改；点击生成要货单，则表示要货单填写无误，不可更改
                            </div>
                            <div style="float: right;margin-top:10px;" class="footer-btns">
                                <el-button>生成要货单</el-button>
                                <el-button>暂存</el-button>
                                <el-button>取消</el-button>
                            </div>
                        </div>

                        <div class="contentsTab-B" v-show="cur===1">
                            <el-table class="el-table"
                                      border
                                      height="200"
                                      style="width: 100%"
                                      ref="singleTable"
                                      :data="storesReceiving"
                                      :header-cell-style="getRowClass"
                                      :cell-style="cellStyle"
                                      @current-change="handleCurrentChange"
                            >
                                <el-table-column label="商品编码" prop="coding"></el-table-column>
                                <el-table-column label="商品条码" prop="barcode" min-width="140px"></el-table-column>
                                <el-table-column label="商品名称" prop="TradeName"></el-table-column>
                                <el-table-column label="商品品类" prop="species"></el-table-column>
                                <el-table-column label="单位" prop="unit"></el-table-column>
                                <el-table-column label="收货数量" prop="ReceivingNumber"></el-table-column>
                                <el-table-column label="进货价" prop="stockPrice"></el-table-column>

                            </el-table>
                            <!--                    <el-alert-->
                            <!--                            title=" 注意：确认收货单无误，则点击确认并生成收货单；如遇货品品类或数量不对时，点击退回，等待总部重新发货。"-->
                            <!--                            type="warning">-->
                            <!--                    </el-alert>-->
                            <div style="color: #e6a23c;padding: 10px 0;text-align: left">
                                注意：确认收货单无误，则点击确认并生成收货单；如遇货品品类或数量不对时，点击退回，等待总部重新发货。
                            </div>
                            <div style="float: right;margin-top:10px;" class="footer-btns">
                                <el-button>生成收货单</el-button>
                                <el-button>审核</el-button>
                                <el-button>退回</el-button>
                            </div>
                        </div>
                        <div class="contentsTab-C" v-show="cur===2">
                            <el-table class="el-table"
                                      border
                                      height="200"
                                      ref="singleTable"
                                      :data="storesSalesReturn"
                                      :header-cell-style="getRowClass"
                                      :cell-style="cellStyle"
                                      @current-change="handleCurrentChange"
                            >
                                <el-table-column label="商品编码" prop="coding"></el-table-column>
                                <el-table-column label="商品条码" prop="barcode" min-width="140px"></el-table-column>
                                <el-table-column label="商品名称" prop="TradeName"></el-table-column>
                                <el-table-column label="商品品类" prop="species"></el-table-column>
                                <el-table-column label="单位" prop="unit"></el-table-column>
                                <el-table-column label="退货数量" prop="salesReturnNumber"></el-table-column>
                                <el-table-column label="退货价" prop="salesReturnPrice"></el-table-column>

                            </el-table>
                            <div style="padding: 20px 0;text-align: left">

                            </div>
                            <div style="float: right;margin-top:10px;" class="footer-btns">
                                <el-button>生成退货单</el-button>
                                <el-button>确认</el-button>
                                <el-button>取消</el-button>
                            </div>

                        </div>
                        <div class="contentsTab-D" v-show="cur===3">
                            <el-table class="el-table"
                                      border
                                      style="width: 100%"
                                      height="200"
                                      ref="singleTable"
                                      :data="lossScrap"
                                      :header-cell-style="getRowClass"
                                      :cell-style="cellStyle"
                                      @current-change="handleCurrentChange"
                            >
                                <el-table-column label="商品编码" prop="coding"></el-table-column>
                                <el-table-column label="商品条码" prop="barcode" min-width="140px"></el-table-column>
                                <el-table-column label="商品名称" prop="TradeName"></el-table-column>
                                <el-table-column label="商品品类" prop="species"></el-table-column>
                                <el-table-column label="单位" prop="unit"></el-table-column>
                                <el-table-column label="损耗数量" prop="lossNumber"></el-table-column>
                                <el-table-column label="损耗金额" prop="lossPrice"></el-table-column>

                            </el-table>
                            <div style="padding: 20px 0;text-align: left">

                            </div>
                            <div style="float: right;margin-top:10px;" class="footer-btns">
                                <el-button>生成损耗单</el-button>
                                <el-button>确认</el-button>
                                <el-button>取消</el-button>
                            </div>
                        </div>


                    </div>

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
        background-color: #7AE4E4; /*滚动条的背景颜色*/

    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #7AE4E4;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #7AE4E4;
        cursor: pointer;
    }
    .StoreManagement-container {
        width: calc(100vw - 280px);
        margin: 10px 30px;
        height: calc(100vh - 30px);
        border: 1px solid #ccc;
        background-color: white;
    }

    .StoreManagement-content {
        width: calc(100vw - 320px);
        margin: 10px 20px;
        height: calc(100vh - 40px);
    }

    .content-topLeft {
        border: 1px solid #00CCCC;
        background-color: #E6F5F5;
        border-radius: 0px 0px 5px 5px;
    }

    .content-topLeft-buttom {
        border: 1px solid #00CCCC;
        background-color: #E6F5F5;
        border-radius: 5px;
        margin: 15px 0px 10px;
    }

    .content-topRight {
        text-align: left;
        height: calc(50vh - 50px);
        overflow-y: auto;
        margin-bottom: 20px;
    }

.miClass input.el-input__inner{
    border-radius: 0;
    background-color: #A1DADA;
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

    div .el-tabs__content {
        height: calc(50vh - 50px);
        overflow-y: auto;
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

    .footer-btns .el-button:nth-child(1) {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .footer-btns .el-button:nth-child(2) {
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .footer-btns .el-button:nth-child(3) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }
    /*.el-input input{*/
    /*    background-color: white;*/
    /*}*/

</style>
<script>
    export default {
        data() {
            return {
                input: '',
                value4: '箱',
                cur: 3,
                value: '锦江区(直营)',
                value2: '李晓霞',
                activeName: '1',
                // name: 'first',
                optionPerson: [
                    {
                    value: '选项1',
                    label: '李晓霞'
                }, {
                    value: '选项2',
                    label: '张帆'
                }, {
                    value: '选项3',
                    label: '王菲'
                }, {
                    value: '选项4',
                    label: '伍德'
                }],
                option: [
                    {
                    value: '选项1',
                    label: '武侯区'
                }, {
                    value: '选项2',
                    label: '成华区'
                }, {
                    value: '选项3',
                    label: '锦江区(直营)'
                }, {
                    value: '选项4',
                    label: '郫都区'
                }],
                options: [
                    {
                    value: '选项1',
                    label: '箱'
                }, {
                    value: '选项2',
                    label: '件'
                }, {
                    value: '选项3',
                    label: '瓶'
                }, {
                    value: '选项4',
                    label: '盒'
                }, {
                    value: '选项5',
                    label: '瓶'
                }],
                storesEnquiry: [
                    {
                        id: '001',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    }, {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
                    },
                    {
                        id: '007',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        enquiryNumber: '--',
                        shippingPrice: '20.00',
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
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },
                    {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        ReceivingNumber: '--',
                        stockPrice: '20.00',
                    },

                ],
                storesSalesReturn: [
                    {
                        id: '001',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnNumber: '12',
                        salesReturnPrice: '20.60',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        salesReturnNumber: '15',
                        salesReturnPrice: '20.60',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        salesReturnNumber: '12',
                        salesReturnPrice: '20.60',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnNumber: '20',
                        salesReturnPrice: '20.60',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        salesReturnNumber: '15',
                        salesReturnPrice: '20.60',
                    },
                    {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        salesReturnNumber: '15',
                        salesReturnPrice: '20.60',
                    },

                ],
                lossScrap: [
                    {
                        id: '001',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        lossNumber: '--',
                        lossPrice: '--',
                    },
                    {
                        id: '002',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        lossNumber: '--',
                        lossPrice: '--',
                    },
                    {
                        id: '003',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '袋',
                        lossNumber: '--',
                        lossPrice: '--',
                    },
                    {
                        id: '004',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        lossNumber: '--',
                        lossPrice: '--',
                    },
                    {
                        id: '005',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '箱',
                        lossNumber: '--',
                        lossPrice: '--',
                    },
                    {
                        id: '006',
                        coding: '652536',
                        barcode: '6912345678910',
                        TradeName: '空心菜',
                        species: '蔬菜',
                        unit: '件',
                        lossNumber: '--',
                        lossPrice: '--',
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
            }
        }
    }
</script>
