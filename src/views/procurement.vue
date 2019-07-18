<template>
    <div class="procurement-container">
        <div class="procurement-content">
            <div class="content-top"
                 style="height:calc(50vh - 70px);margin-bottom: 40px;">
                <el-row>
                    <el-col :span="8">
                        <div class="content-topLeft">
                            <div style="background-color: #B8E3E3;
                            display: flex;justify-content: space-between;
                            padding: 10px 20px">
                                <div>XXX总部</div>
                                <div>采购员：李晓霄</div>
                            </div>
                            <el-form :label-position="labelPosition" label-width="100px" size="small"
                                     style="padding-right: 10px; overflow: auto;">
                                <el-form-item label="采购单号:" style="margin: 5px 0px">
                                    <el-input v-model="formLabelAlign.procurementOdd" class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="供应商:" style="margin: 5px 0px">
                                    <el-select v-model="value" placeholder="请选择" class="myClases">
                                        <el-option
                                                v-for="item in optionSupplier"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="收货日期:" style="margin: 5px 0px">
                                    <el-input v-model="formLabelAlign.ReceivingDate" class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="结算金额:" style="margin: 5px 0px">
                                    <el-input v-model="formLabelAlign.settlementPrice" class="myClass"></el-input>
                                </el-form-item>
                                <el-form-item label="结算方式:" style="margin: 5px 0px">
                                    <el-select v-model="value1" placeholder="请选择" class="myClases">
                                        <el-option
                                                v-for="item in optionPayment"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="结算日期:" style="margin: 5px 0px" prop="region">
                                    <el-input v-model="formLabelAlign.settlementDate" class="myClass"></el-input>
                                </el-form-item>

                            </el-form>

                        </div>
                        <div style="clear:both;"></div>
                    </el-col>

                    <el-col :span="2"></el-col>
                    <el-col :span="14" style="float: right;display: inline-block">
                        <div class="content-topRight">
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
                    <div style="clear:both;"></div>
                </el-row>


            </div>
            <div class="content-bottom" style="height: calc(50vh - 10px);">
                <div class=" main-content">
                    <ul class="tab-titles" style="float: left;width: 100%">
                        <div @click="cur=0" :class="{active:cur===0}"><span>采购收货</span></div>
                        <div @click="cur=1" :class="{active:cur===1}"><span>采购退货</span></div>

                    </ul>
                    <div style="clear:both;"></div>
                    <div class="tab-content">

                        <div class="contentsTab-A" v-show="cur===0">
                            <div style="height: 225px;overflow: auto">
                                <el-table class="el-table"
                                          border
                                          style="width: 100%"
                                          ref="singleTable"
                                          :data="miGoList"
                                          :header-cell-style="getRowClass"
                                          :cell-style="cellStyle"
                                          @current-change="handleCurrentChange"
                                          @row-click="DialogConsumptionDetails = true"
                                >
                                    <el-table-column label="编号" prop="coding"></el-table-column>
                                    <el-table-column min-width="140px" label="商品条码" prop="barcode"></el-table-column>
                                    <el-table-column label="名称" prop="TradeName"></el-table-column>
                                    <el-table-column label="类别" prop="species"></el-table-column>
                                    <el-table-column label="单位" prop="unit"></el-table-column>
                                    <el-table-column label="采购价" prop="shippingUnitPrice"></el-table-column>
                                    <el-table-column max-width="10px" label="采购数量"
                                                     prop="shippingNumber"></el-table-column>
                                    <el-table-column label="采购金额" prop="shippingTotalPrice"></el-table-column>
                                    <el-table-column label="收货数量" prop="ReceivingNumber"></el-table-column>
                                </el-table>
                            </div>
                            <div style="color: #e6a23c;padding: 10px 0;text-align: left">
                            </div>
                            <div style="float: right;margin-top:5px;" class="footer-btn">
                                <el-button>生成收货单</el-button>
                                <el-button>审核</el-button>
                                <el-button>取消</el-button>
                            </div>
                            <div style="clear: both"></div>
                        </div>
                        <el-dialog
                                title="商品详情"
                                :visible.sync="DialogConsumptionDetails"
                                width="25%" style="text-align: left">
                                <el-form :model="formInline" class="demo-form-inline" abel-width="100px"
                                         label-width="100px"
                                         size="small" style="overflow: auto;">
                                    <el-row >
                                        <el-form-item label="单位" style="margin: 3px 0px;width: 100%">
                                                <input v-model="formInline.user" placeholder="" style="width: 55%"></input>
                                                <select v-model="value2" filterable placeholder="请选择" style="width: 21%;margin-left: 2px">
                                                    <option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                    </option>
                                                </select>

                                        </el-form-item>
                                    </el-row>
                                    <el-row>
                                        <el-form-item label="供应商名称" style="margin: 3px 0px;width: 100%">
                                            <el-col :span="23">
                                                <input v-model="formInline.user" placeholder="" ></input>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row>

                                            <el-form-item label="设置速记码" style="margin: 3px 0px">
                                                <el-col>
                                                <input v-model="formInline.user" placeholder=""></input>
                                                </el-col>
                                            </el-form-item>
                                    </el-row>
                                </el-form>

                            <div class="dialog-Modify">
                                <div style="margin-top: 4.166%"></div>
                                <el-row style="display: flex;justify-content: space-between;">
                                    <el-col :span="18">
                                        <el-row style="display: flex; justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>7</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>8</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>
                                                    9
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <div style="margin-top: 4.166%"></div>
                                        <el-row style="display: flex;
                    justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>4</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>5</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>
                                                    6
                                                </div>
                                            </el-col>

                                        </el-row>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="5">
                                        <div class="myCol" style="height:100%;text-align: center;line-height: 14vh">确定
                                        </div>
                                    </el-col>
                                </el-row>
                                <div style="margin-top: 4.166%"></div>
                                <el-row style="display: flex;
                    justify-content: space-between;">
                                    <el-col :span="18">
                                        <el-row style="display: flex; justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>1</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>2</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>3</div>
                                            </el-col>
                                        </el-row>
                                        <div style="margin-top: 4.166%"></div>
                                        <el-row style="display: flex;
                    justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>0</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>.</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>00</div>
                                            </el-col>

                                        </el-row>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="5">
                                        <div class="myCol" style="height:100%;text-align: center;line-height: 14vh;">
                                            取消
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-dialog>

                        <div class="contentsTab-B" v-show="cur===1">
                            <div style="height: 225px;overflow: auto">
                                <el-table class="el-table"
                                          border
                                          style="width: 100%"
                                          ref="singleTable"
                                          :data="storesReceiving"
                                          :header-cell-style="getRowClass"
                                          :cell-style="cellStyle"
                                          @current-change="handleCurrentChange"
                                          @row-click="DialogConsumptionDetails = true"
                                >
                                    <el-table-column label="编号" prop="coding"></el-table-column>
                                    <el-table-column min-width="140px" label="商品条码" prop="barcode"></el-table-column>
                                    <el-table-column label="名称" prop="TradeName"></el-table-column>
                                    <el-table-column label="类别" prop="species"></el-table-column>
                                    <el-table-column label="单位" prop="unit"></el-table-column>
                                    <el-table-column label="退货价" prop="salesReturnUnitPrice"></el-table-column>
                                    <el-table-column label="退货金额" prop="salesReturnTotalPrice"></el-table-column>
                                    <el-table-column label="退货数量" prop="salesReturnNumber"></el-table-column>

                                </el-table>
                            </div>
                            <!--                    <el-alert-->
                            <!--                            title=" 注意：确认收货单无误，则点击确认并生成收货单；如遇货品品类或数量不对时，点击退回，等待总部重新发货。"-->
                            <!--                            type="warning">-->
                            <!--                    </el-alert>-->
                            <div style="color: #e6a23c;padding: 10px 0;text-align: left">
                            </div>
                            <div style="float: right;margin-top:10px;" class="footer-btnS">
                                <el-button>删除</el-button>
                                <el-button>生成退货单</el-button>
                                <el-button>审核</el-button>
                                <el-button>取消</el-button>
                            </div>
                            <div style="clear: both"></div>
                        </div>
                        <el-dialog
                                title="商品详情"
                                :visible.sync="DialogConsumptionDetails"
                                width="25%" style="text-align: left">
                            <template>
                                <el-form :model="formInline" class="demo-form-inline" abel-width="100px"
                                         label-width="100px"
                                         size="small" style="overflow: auto;">
                                    <el-row >
                                        <el-form-item label="单位" style="margin: 3px 0px;width: 100%">
                                            <input v-model="formInline.user" placeholder="" style="width: 43%"></input>
                                            <select v-model="value2" filterable placeholder="请选择" style="width: 21%;margin-left: 2px;height: 23px">
                                                <option
                                                        v-for="item in options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </option>
                                            </select>

                                        </el-form-item>
                                    </el-row>
                                    <el-row>
                                        <el-form-item label="供应商名称" style="margin: 3px 0px;width: 100%">
                                            <el-col :span="23">
                                                <input v-model="formInline.user" placeholder="" ></input>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row>

                                        <el-form-item label="设置速记码" style="margin: 3px 0px">
                                            <el-col>
                                                <input v-model="formInline.user" placeholder=""></input>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                </el-form>

                            </template>
                            <div class="dialog-Modify">
                                <div style="margin-top: 4.166%"></div>
                                <el-row style="display: flex;justify-content: space-between;">
                                    <el-col :span="18">
                                        <el-row style="display: flex; justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>7</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>8</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>
                                                    9
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <div style="margin-top: 4.166%"></div>
                                        <el-row style="display: flex;
                    justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>4</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>5</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>
                                                    6
                                                </div>
                                            </el-col>

                                        </el-row>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="5">
                                        <div class="myCol" style="height:100%;text-align: center;line-height: 14vh">确定
                                        </div>
                                    </el-col>
                                </el-row>
                                <div style="margin-top: 4.166%"></div>
                                <el-row style="display: flex;
                    justify-content: space-between;">
                                    <el-col :span="18">
                                        <el-row style="display: flex; justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>1</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>2</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>3</div>
                                            </el-col>
                                        </el-row>
                                        <div style="margin-top: 4.166%"></div>
                                        <el-row style="display: flex;
                    justify-content: space-between;height: 7vh;line-height: 7vh;text-align: center">
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7" class="myCol">
                                                <div>0</div>
                                            </el-col>

                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>.</div>
                                            </el-col>
                                            <el-col :span="1"></el-col>

                                            <el-col :span="7" class="myCol">
                                                <div>00</div>
                                            </el-col>

                                        </el-row>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="5">
                                        <div class="myCol" style="height:100%;text-align: center;line-height: 14vh;">
                                            取消
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-dialog>
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
    .procurement-container {
        width: calc(100vw - 280px);
        margin: 10px 30px;
        height: calc(100vh - 30px);
        border: 1px solid #999999;
        background-color: white;
    }

    .procurement-content {
        width: calc(100vw - 320px);
        margin: 10px 20px;
        height: calc(100vh - 40px);
        /*background-color: red;*/
    }

    .content-topLeft {
        border: 1px solid #00CCCC;
        background: #E6F5F5;
        height: calc(50vh - 70px);
        overflow: hidden;
    }

    .content-topRight {
        text-align: left;
        height: calc(50vh - 50px);
        overflow: hidden;
        margin-bottom: 20px;
    }

    .el-input {
        max-width: 200px;
        margin-left: 0;
    }

    .el-input input {
        max-width: 180px;
        border-radius: 0;
        text-align: right;
        background-color: transparent;
    }
    .el-select {
        max-width: 200px;
    }

    .el-select input .el-input__inner {
        float: right;
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

    .footer-btn .el-button:nth-child(1) {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .footer-btn .el-button:nth-child(2) {
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .footer-btn .el-button:nth-child(3) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .footer-btnS .el-button:nth-child(1) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .footer-btnS .el-button:nth-child(2) {
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .footer-btnS .el-button:nth-child(3) {
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .footer-btnS .el-button:nth-child(4) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }
    .myCol {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .2) inset;

    }

</style>
<script>
    export default {
        data() {
            return {
                cur: 0,
                value: '商户筛选',
                value1: '微信支付',
                activeName: '1',
                name: 'first',
                value2: ' ',
                options: [{
                    value: '选项1',
                    label: '箱'
                }, {
                    value: '选项2',
                    label: '件'
                }, {
                    value: '选项3',
                    label: '袋'
                }, {
                    value: '选项4',
                    label: 'kg'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],

                labelPosition: 'right',
                formInline: {
                    user: '',
                    region: ''
                },
                DialogConsumptionDetails: false,
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
        created(){
            //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
            this.value2 = this.options[0].value;
        },
        methods: {
            // prev() {
            //     this.$router.go(-1)
            // },
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
                return 'text-align:center;height:35px;padding:0px 5px'
            }
        }
    }
</script>
