<template>

    <div class="Sale-container">
        <el-container class="Sale-container-content">
            <e-row class="Sale-content-top" style="height: 55vh;">
                <el-col :span="11">
                    <div class="el-asides" style="overflow: auto;height: 55vh">
                        <div class="el-aside-left">
                            <el-row style="color: #0081E4;padding: 5px">
                                <el-col :span="8">
                                    狮子山街道店
                                </el-col>
                                <el-col :span="8">
                                    收银员：XXX
                                </el-col>
                                <el-col :span="8">
                                    POS机号：003
                                </el-col>

                            </el-row>
                            <div style="height: 35vh;overflow: auto;">
                                <template>
                                    <el-table class="el-table" :xs="2" :sm="3" :md="3" :lg="3"
                                              border
                                              ref="singleTable"
                                              :data="tablesData"
                                              :header-cell-style="getRowClass"
                                              :cell-style="cellStyle"
                                              highlight-current-row
                                              @current-change="handleCurrentChange"
                                    >
                                        <el-table-column
                                                type="index"
                                                label="序号">
                                        </el-table-column>
                                        <el-table-column
                                                property="project"
                                                label="商品项目"
                                                min-width="140px">
                                        </el-table-column>
                                        <el-table-column
                                                property="number"
                                                label="数量"
                                                min-width="70px"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                property="price"
                                                label="单价"
                                                min-width="70px"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                property="money"
                                                label="金额">
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </div>
                            <div style="margin-top: 1vh">
                                <el-row style="margin-bottom: 1vh;">
                                    <el-col :span="12">数量：0.00</el-col>
                                    <el-col :span="12">金额：0.00</el-col>
                                </el-row>
                                <el-row style="margin-bottom: 1vh">
                                    <el-col :span="4">查询</el-col>
                                    <el-col :span="20">
                                        <input v-model="input" placeholder="请输入商品编号/条码查询" style="width: 90%;"></input>
                                    </el-col>

                                </el-row>
                                <el-row style="color: #0081E4;background-color: #99EBEB;margin: 0 10px">
                                    <el-col :span="8">合计：￥0.00</el-col>
                                    <el-col :span="8">优惠：0.00</el-col>
                                    <el-col :span="8">折扣：85%</el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="13">
                    <div class="el-mainS" style="text-align:left;height: 55vh ">
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
            </e-row>


            <el-footer class="el-footer" style="height: 35vh;padding:0px;color: #333">
                <el-col :span="20" class="el-footer-content">
                    <div>
                        <el-row :gutter="8" style="height: 17vh;display: flex;justify-content: space-between">
                            <el-col :span="3">
                                <router-link to="/SalesReturn">
                                    <div class="grid-content bg-purple-light">
                                        退货
                                    </div>
                                </router-link>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogVisibleModify= true">
                                    更改数量
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light">
                                    删除
                                </div>
                            </el-col>
                            <el-col :span="3">

                                <div class="grid-content bg-purple-light"
                                     @click="dialogVisibleModifyPrice = true">
                                    修改单价
                                </div>

                            </el-col>
                            <el-col :span="3">
                                <router-link to="/SalesReturn">
                                    <div class="grid-content bg-purple-light">
                                        赠送
                                    </div>
                                </router-link>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogUnitPriceWeigh= true">
                                    称重
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <router-link to="/SalesReturn">
                                    <div class="grid-content bg-purple-light">
                                        整单取消
                                    </div>
                                </router-link>
                            </el-col>


                        </el-row>
                        <el-row style="height: 0.5vh"></el-row>
                        <el-row :gutter="8" style="height: 17vh;display: flex;justify-content: space-between">

                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogMembershipCard= true">
                                    会员卡
                                </div>

                            </el-col>
                            <el-col :span="3">
                                <router-link to="/MerchandiseQuery">
                                    <div class="grid-content bg-purple-light">
                                        商品查询
                                    </div>
                                </router-link>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogVisible = true">
                                    挂单
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogFormVisible = true">
                                    线上结算
                                </div>
                            </el-col>
                            <el-col :span="3">

                                <div class="grid-content bg-purple-light" @click="dialogShipCard = true">
                                    卡结算
                                </div>

                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogIntegral= true">
                                    积分兑换
                                </div>
                            </el-col>

                            <el-col :span="3">
                                <div class="grid-content bg-purple-light" @click="dialogVisibleMore= true">
                                    更多
                                </div>
                            </el-col>

                        </el-row>

                    </div>


                    <!--                    <div v-for="btnArray in operationBtns">-->
                    <!--                        <el-row :gutter="20" class="el-row">-->
                    <!--                            <el-col class="el-col" v-for="(item,index) in operationBtns[0]" :key="index">-->

                    <!--                                <div class="grid-content bg-purple-light">{{item.name}}</div>-->

                    <!--                            </el-col>-->
                    <!--                            <el-col class="el-col" v-for="(item,index) in operationBtns[1]" :key="index">-->

                    <!--                                <div class="grid-content bg-purple-light">{{item.name}}</div>-->

                    <!--                            </el-col>-->
                    <!--                        </el-row>-->
                    <!--                    </div>-->
                </el-col>
                <el-col :span="4" class="el-footer-button"
                        style="font-size: 25px;font-weight: 600;line-height: 25vh;">
                    <div  @click="dialogSettlement= true">结算</div>
                </el-col>

            </el-footer>

            <div>
                <el-dialog title=""
                           :visible.sync="dialogTabItem"
                           width="30%"
                           :before-close="handleClose">
                    <div @click="dialogTracingSource= true">
                        <el-input v-model="inputs" placeholder="请扫描商品上的防伪二维码或直接输入16位防伪码" style="width: 100%"></el-input>
                    </div>

                </el-dialog>

                <el-dialog title="溯源信息"
                           :visible.sync="dialogTracingSource"
                           :before-close="handleClose"
                           style="text-align: left">
                    <div style="display: flex;margin-bottom: 2vh">
                        <el-col :span="5" style="background-color: #FF9966"></el-col>
                        <el-col :span="1"></el-col>
                        <el-col>
                            <el-row>当前追溯码：1223 4589 4156 1616</el-row>
                            <el-row>商品名称：苹果</el-row>
                            <el-row>单位：斤</el-row>
                        </el-col>

                    </div>
                    <div style="display: flex;">
                        <el-col :span="12" style="border-right: 2px solid #999;border-radius: 0">
                            <el-row style="height: 4vh;color: #FF9966;font-size: 15px">产品检测信息</el-row>
                            <el-row style="height: 4vh;">商品类别：水果类</el-row>
                            <el-row style="height: 4vh;">商品规格：500g/斤</el-row>
                            <el-row style="height: 4vh;">抽检日期：2019-05-28</el-row>
                            <el-row style="height: 4vh;">抽检项目：农药残留</el-row>
                            <el-row style="height: 4vh;">抽检结果：合格</el-row>
                            <el-row>
                                <div style="float: left">质检报告：</div>
                                <div style="width: 7vw;height: 16vh;background-color:gray;float: left">
                                </div>
                            </el-row>

                        </el-col>
                        <el-col :span="1"></el-col>
                        <!--                    <el-col :span="1"  style="border-left: 1px dashed coral;border-radius: 0" ></el-col>-->
                        <el-col>
                            <el-row style="height: 4vh;color: #FF9966;font-size: 15px">产品溯源信息</el-row>
                            <el-col :span="23"></el-col>

                            <el-row style="margin-bottom: 2vh;">
                                <el-col :span="5">上游信息</el-col>
                                <el-col :span="15">
                                    <el-row>产地：xxxx农产品生产基地水平坝B号梯田</el-row>
                                    <el-row>生产批次：20180526HT</el-row>
                                    <el-row>生产日期：2018年05月26日</el-row>
                                    <el-row>保质期：28天</el-row>
                                </el-col>
                            </el-row>
                            <el-row style="margin-bottom: 2vh;">
                                <el-col :span="5">加工包装</el-col>
                                <el-col :span="15">
                                    <el-row>包装基地：xxxx农产品生产基地1号包装基地</el-row>
                                    <el-row>生产车间：1号包装生产车间3号线</el-row>
                                    <el-row>生产班组：206组</el-row>
                                </el-col>
                            </el-row>
                            <el-row style="margin-bottom: 2vh;">
                                <el-col :span="5">进货来源</el-col>
                                <el-col :span="15">
                                    <el-row>xxxx农产品生产管理有限公司/散户名称</el-row>
                                    <el-row>进货时间：2019-05-28</el-row>

                                </el-col>
                            </el-row>
                            <el-row style="margin-bottom: 2vh;">
                                <el-col :span="5">售卖上架</el-col>
                                <el-col :span="15">
                                    <el-row>商超：xxxx农贸市场</el-row>
                                    <el-row>批次号：A01-A06-B01-B06</el-row>
                                    <el-row>上架时间：2019-05-28</el-row>
                                </el-col>
                            </el-row>

                        </el-col>


                    </div>
                    <div style="margin-top: 3vh">如对以上溯源信息有疑问请拨打防伪查询电话：0827-9895652</div>


                </el-dialog>

                <el-dialog title="当前挂单详情"
                           :visible.sync="dialogVisible"
                           width="80%"
                           :before-close="handleClose"
                           style="text-align: left;padding:0px;">
                    <!--                       :modal="false"-->
                    <el-row>
                        <el-col :span="11" style="height:45vh;float: left;border: 1px solid #ccc;padding: 10px;
                    background: white">
                            <div style="text-align: center;font-size: 20px">挂单列表</div>
                            <el-table
                                    :data="tableData"
                                    height="151"
                                    border
                                    :header-cell-style="getRowsClass"
                                    :cell-style="cellStyle"

                            >
                                <el-table-column
                                        prop="receiptsNum"
                                        label="单据号"
                                >
                                </el-table-column>
                                <el-table-column
                                        prop="price"
                                        label="金额"
                                        width="80px"
                                >
                                </el-table-column>
                                <el-table-column
                                        prop="dataTime"
                                        label="时间">
                                </el-table-column>
                            </el-table>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="11" style="height:45vh;float: right;background: white;
                    border: 1px solid #ccc;padding: 10px;overflow: hidden">
                            <el-form :inline="true" :model="formInline" class="demo-form-inline" abel-width="90px"
                                     label-width="90px"
                                     size="mini" style="overflow: auto;margin-bottom: 10px">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="单据号" style="margin: 3px 0px">
                                            <el-input v-model="formInline.user" placeholder=""></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="实际应收" style="margin: 3px 0px">
                                            <el-input v-model="formInline.user" placeholder=""></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="账单合计" style="margin: 3px 0px">
                                            <el-input v-model="formInline.user" placeholder=""></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="订单折扣" style="margin: 3px 0px">
                                            <el-input v-model="formInline.user" placeholder=""></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="操作员" style="margin: 3px 0px">
                                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="操作时间" style="margin: 5px 0px">
                                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>

                            <el-table
                                    :data="tableFormData"
                                    height="151"
                                    border
                                    :header-cell-style="getRowsClass"
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
                        </el-col>
                    </el-row>


                    <div slot="footer" class="dialog-footer">
                        <div>
                            <el-button class="children-A">删除/Delete</el-button>
                        </div>
                        <div>
                            <el-button type="primary" @click="dialogVisible = false" class="children-B">确 定</el-button>
                            <el-button @click="dialogVisible = false" class="children-C">取 消</el-button>
                        </div>


                    </div>
                </el-dialog>

                <el-dialog title="线上结算" :visible.sync="dialogTopVisible" style="text-align: left;">
                    <el-input v-model="input" placeholder="请扫描顾客屏幕上的付款码（微信、支付宝）" style="width: 100%"></el-input>
                    <div slot="footer" class="dialog-footer-btn">
                        <div>
                            结算金额
                            <span style="color: firebrick;font-size: 18px;font-weight: 600">￥117.98</span>
                        </div>
                        <div>
                            <el-button type="primary" @click="dialogFormVisible = false" class="children-D">确 定
                            </el-button>
                            <el-button @click="dialogFormVisible = false" class="children-E">取 消</el-button>
                        </div>
                    </div>
                </el-dialog>

                <el-dialog title="积分兑换" :visible.sync="dialogIntegral" style="text-align: left;">
                    <div style="height: 50vh" class="dialogIntegral">
                        <div style="display: flex;justify-content: space-between;text-align: center">
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>


                        </div>
                        <div style="margin: 5px auto"></div>
                        <div style="display: flex;justify-content: space-between;text-align: center">
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>
                            <div>
                                <div style="width: 150px;height: 150px;position: relative">
                                    <img src="../assets/logo-bgi.png" alt="">
                                    <div class="exchangeBox">兑 换</div>
                                </div>
                                <div>创意DIY桌面迷你盆栽</div>
                                <div>1100积分</div>
                            </div>


                        </div>
                    </div>
                </el-dialog>

                <el-dialog title="更多" :visible.sync="dialogVisibleMore" style="text-align: left;">
                    <div class="dialog-footerMore" style="height:45vh">
                        <el-row style="display: flex;
                    justify-content: space-between;height: 12vh;line-height: 12vh;text-align: center">

                            <el-col :span="3" class="myCol">
                                <router-link to="/ConsumerQueries">
                                    <div>消费查询</div>
                                </router-link>
                            </el-col>

                            <el-col :span="1"></el-col>

                            <el-col :span="3" class="myCol">
                                <router-link to="/newMembers">
                                    <div>新增会员卡</div>
                                </router-link>
                            </el-col>

                            <el-col :span="1"></el-col>

                            <el-col :span="3" class="myCol">
                                <router-link to="/salesMan">
                                    <div>
                                        销售员信息
                                    </div>
                                </router-link>
                            </el-col>

                            <el-col :span="1"></el-col>

                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>
                                        打开钱箱
                                    </div>
                                </router-link>
                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/ReportLoss">
                                    <div>挂失/换卡</div>
                                </router-link>

                            </el-col>

                            <el-col :span="1"></el-col>

                            <el-col :span="3" class="myCol">
                                <router-link to="/Recharge">
                                    <div>会员充值</div>
                                </router-link>

                            </el-col>

                        </el-row>
                        <div style="margin-top: 4.166%"></div>
                        <el-row style="display: flex;justify-content: space-between;height: 12vh;line-height: 12vh;text-align: center">

                            <el-col :span="3" class="myCol">
                                <router-link to="/modifyCardMessage">
                                    <div>修改卡信息</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/ElectronicCoupons">
                                    <div>电子券</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/BillInquiry">
                                    <div>账单查询</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/OnlineOrders">
                                    <div>在线订单</div>
                                </router-link>
                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>激活电子卡</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/CardQuery">
                                    <div>卡查询</div>

                                </router-link>

                            </el-col>
                        </el-row>
                        <div style="margin-top: 4.166%"></div>
                        <el-row style="display: flex;justify-content: space-between;height: 12vh;line-height: 12vh;text-align: center">

                            <el-col :span="3" class="myCol">
                                <router-link to="/CustomerList">
                                    <div>客户列表</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/SupplierList">
                                    <div>供应商列表</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>卡初始化</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>锁屏</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>最小化</div>
                                </router-link>

                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="3" class="myCol">
                                <router-link to="/Sale">
                                    <div>其他收支</div>
                                </router-link>

                            </el-col>
                        </el-row>
                    </div>
                </el-dialog>

                <el-dialog title="更改数量" :visible.sync="dialogVisibleModify"
                           width="35%"
                           style="text-align: left;">
                    <div class="dialog-Modify">
                        <el-row style="display: flex;justify-content: center">
                            <el-col :span="1"></el-col>
                            <el-col :span="24">
                                <el-input v-model="input1" placeholder="2.00"
                                          style="width: 100%;font-weight: 600;"></el-input>
                            </el-col>
                        </el-row>
                        <div style="margin-top: 4.166%"></div>
                        <el-row style="display: flex;
                    justify-content: space-between;">
                            <el-col :span="18">
                                <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">确定</div>
                            </el-col>
                        </el-row>
                        <div style="margin-top: 4.166%"></div>
                        <el-row style="display: flex;
                    justify-content: space-between;">
                            <el-col :span="18">
                                <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                    <el-col :span="1"></el-col>
                                    <el-col :span="15" class="myCol">
                                        <div>0</div>
                                    </el-col>

                                    <el-col :span="1"></el-col>

                                    <el-col :span="7" class="myCol">

                                        <div style="font-size: 19px">
                                            .
                                        </div>

                                    </el-col>

                                </el-row>
                            </el-col>
                            <el-col :span="1"></el-col>
                            <el-col :span="5">
                                <div class="myCol" style="height:100%;text-align: center;line-height: 20vh;">取消</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-dialog>

                <el-dialog title="修改单价" :visible.sync="dialogVisibleModifyPrice" style="text-align: left;">
                    <div style="display: flex;">
                        <el-col class="tab-titles" :span="7" style="text-align: center;">
                            <div @click="cur=0" :class="{active:cur===0}"><span>修改单价</span></div>
                            <div @click="cur=1" :class="{active:cur===1}"><span>设置折扣</span></div>
                            <div @click="cur=2" :class="{active:cur===2}"><span>单品折让</span></div>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col class="tab-content" :span="16">
                            <div class="contentsTab-O" v-show="cur===0">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="19">
                                            <el-input v-model="input1" placeholder="2.00"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="2">元</el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>0</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        .
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===1">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="11">
                                            <el-col :span="16">
                                                <el-input v-model="input2" placeholder="单品单价"
                                                          style="width: 100%;font-weight: 600;"></el-input>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7"
                                                    style="text-align: center;font-size: 16px;line-height: 40px">
                                                元
                                            </el-col>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="11" style="color: red">
                                            <el-col :span="16">
                                                <el-input v-model="input3" placeholder="单品折扣"
                                                          style="width: 100%;font-weight: 600;"></el-input>
                                            </el-col>
                                            <el-col :span="1"></el-col>
                                            <el-col :span="7"
                                                    style="text-align: center;font-size: 16px;line-height: 40px">
                                                %
                                            </el-col>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="14" class="myCol">
                                                    <div>0</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        .
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===2">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <!--                                    <el-col :span="2"></el-col>-->
                                        <el-col :span="19">
                                            <el-input v-model="input3" placeholder="2.00"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="2">元</el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="7" class="myCol">
                                                    <router-link to="/ConsumerQueries">
                                                        <div>7</div>
                                                    </router-link>
                                                </el-col>
                                                <el-col :span="1"></el-col>
                                                <el-col :span="7" class="myCol">
                                                    <router-link to="/newMembers">
                                                        <div>8</div>
                                                    </router-link>
                                                </el-col>
                                                <el-col :span="1"></el-col>
                                                <el-col :span="7" class="myCol">
                                                    <router-link to="/salesMan">
                                                        <div>
                                                            9
                                                        </div>
                                                    </router-link>
                                                </el-col>
                                            </el-row>
                                            <div style="margin-top: 4.166%"></div>
                                            <el-row style="display: flex;
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>0</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        .
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </div>
                </el-dialog>

                <el-dialog title="单价称重" :visible.sync="dialogUnitPriceWeigh" style="text-align: left;">
                    <div style="display: flex;">
                        <el-col :span="15"
                                style="text-align: center;border: 1px solid #999;background-color: white">
                            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
                                     style="margin: 10px 10px;" size="small">
                                <el-form-item label="商品编号" style="margin-top: 10px">
                                    <el-input v-model="formLabelAlign.name" placeholder="请输入商品编号"
                                              style="width: 100%;"></el-input>
                                </el-form-item>
                                <el-form-item label="商品名称" style="margin-top: 10px">
                                    <el-input v-model="formLabelAlign.region" style="width: 100%;"></el-input>
                                </el-form-item>
                                <el-form-item label="活动形式" style="margin-top: 10px">
                                    <el-input v-model="formLabelAlign.type" style="width: 100%;"></el-input>
                                </el-form-item>

                                <el-form-item label="单价" style="margin-top: 10px;text-align: left">
                                    <el-input v-model="formLabelAlign.type" style="width: 50%;"></el-input>
                                    <span style="margin-left: 5px">元/kg</span>
                                </el-form-item>
                                <el-form-item label="重量" style="margin-top: 10px;text-align: left">
                                    <el-input v-model="formLabelAlign.type" style="width: 50%;"></el-input>
                                    <span style="margin-left: 5px">kg</span>
                                </el-form-item>
                                <el-form-item label="金额" style="margin-top: 10px;text-align: left">
                                    <el-input v-model="formLabelAlign.type" style="width:50%;"></el-input>
                                    <span style="margin-left: 5px">元</span>
                                </el-form-item>

                                <el-row style="display: flex;justify-content: space-between;margin-top: 20px">
                                    <el-col :span="1"></el-col>
                                    <el-col :span="7">
                                        <el-button class="Peel" @click="dialogUnitPriceWeigh = false">去皮1</el-button>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="7">
                                        <el-button class="Peel" @click="dialogUnitPriceWeigh = false">去皮1</el-button>
                                    </el-col>
                                    <el-col :span="1"></el-col>
                                    <el-col :span="7">
                                        <el-button class="Peel" @click="dialogUnitPriceWeigh = false">置零</el-button>
                                    </el-col>

                                </el-row>


                            </el-form>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col class="tab-content" :span="10">

                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                    <div>9</div>
                                </el-col>
                            </el-row>
                            <div style="margin-top: 4.166%"></div>
                            <el-row style="display: flex;
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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

                            <div style="margin-top: 4.166%"></div>
                            <el-row style="display: flex;
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                    <div>
                                        3
                                    </div>
                                </el-col>

                            </el-row>
                            <div style="margin-top: 4.166%"></div>
                            <el-row style="display: flex;
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                <el-col :span="1"></el-col>
                                <el-col :span="15" class="myCol">
                                    <div>0</div>
                                </el-col>

                                <el-col :span="1"></el-col>

                                <el-col :span="7" class="myCol">
                                    <div>
                                        .
                                    </div>
                                </el-col>

                            </el-row>
                            <el-row style="display: flex;justify-content: space-between;margin-top: 10px">
                                <el-col :span="1"></el-col>
                                <el-col :span="7">
                                    <el-button class="children-A" @click="dialogUnitPriceWeigh = false">打印</el-button>
                                </el-col>
                                <el-col :span="1"></el-col>
                                <el-col :span="7">
                                    <el-button class="children-B" @click="dialogUnitPriceWeigh = false">确定</el-button>
                                </el-col>
                                <el-col :span="1"></el-col>
                                <el-col :span="7">
                                    <el-button class="children-C" @click="dialogUnitPriceWeigh = false">取消</el-button>
                                </el-col>

                            </el-row>


                        </el-col>
                        <el-col :span="1"></el-col>
                    </div>
                </el-dialog>

                <el-dialog title="会员卡" :visible.sync="dialogMembershipCard" style="text-align: left;">
                    <div style="display: flex;">
                        <el-col class="tab-titles" :span="7" style="text-align: center;">
                            <div @click="cur=0" :class="{active:cur===0}"><span>会员卡号</span></div>
                            <div @click="cur=1" :class="{active:cur===1}"><span>电话号码</span></div>
                            <div @click="cur=2" :class="{active:cur===2}"><span>付款码</span></div>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col class="tab-content" :span="16">
                            <div class="contentsTab-O" v-show="cur===0">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===1">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="23">
                                            <el-input v-model="input4" placeholder="请输入电话号码"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="14" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===2">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="23">
                                            <el-input v-model="input4" placeholder="请输入付款码"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>

                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </div>
                </el-dialog>

                <el-dialog title="卡结算" :visible.sync="dialogShipCard" style="text-align: left;">
                    <div style="display: flex;">
                        <el-col class="tab-titles" :span="7" style="text-align: center;">
                            <div @click="cur=0" :class="{active:cur===0}"><span>会员卡号</span></div>
                            <div @click="cur=1" :class="{active:cur===1}"><span>电话号码</span></div>
                            <div @click="cur=2" :class="{active:cur===2}"><span>付款码</span></div>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col class="tab-content" :span="16">
                            <div class="contentsTab-O" v-show="cur===0">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="23">
                                            <el-input v-model="input4" placeholder="请输入会员卡号"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>

                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===1">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="23">
                                            <el-input v-model="input4" placeholder="请输入电话号码"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="14" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="contentsTab-O" v-show="cur===2">
                                <div class="dialog-Modify">
                                    <el-row style="display: flex;justify-content: center">
                                        <el-col :span="1"></el-col>
                                        <el-col :span="23">
                                            <el-input v-model="input4" placeholder="请输入付款码"
                                                      style="width: 100%;height:100%;font-weight: 600;"></el-input>
                                        </el-col>

                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                                            <div class="myCol" style="height:100%;text-align: center;line-height: 20vh">
                                                确定
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div style="margin-top: 4.166%"></div>
                                    <el-row style="display: flex;
                    justify-content: space-between;">
                                        <el-col :span="18">
                                            <el-row style="display: flex; justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
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
                    justify-content: space-between;height: 10vh;line-height: 10vh;text-align: center">
                                                <el-col :span="1"></el-col>
                                                <el-col :span="15" class="myCol">
                                                    <div>Backspace</div>
                                                </el-col>

                                                <el-col :span="1"></el-col>

                                                <el-col :span="7" class="myCol">
                                                    <div>
                                                        0
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </el-col>
                                        <el-col :span="1"></el-col>
                                        <el-col :span="5">
                                            <div class="myCol"
                                                 style="height:100%;text-align: center;line-height: 20vh;">
                                                取消
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </div>
                </el-dialog>

                <el-dialog title="结算" :visible.sync="dialogSettlement"

                           style="text-align: left;">
                    <div style="display: flex;">
                        <el-col :span="14" style="border: 1px solid #ccc;background-color: white;">
                            <el-col class="tab-title" :span="8"
                                    style="text-align: center;border-right: 1px solid #ccc;border-radius: 0;">
                                <div @click="cur=0" :class="{active:cur===0}"
                                     style="border-bottom: 1px solid #ccc;border-radius: 0;height: 7vh;line-height: 7vh">
                                    <span>现金</span></div>
                                <div @click="cur=1" :class="{active:cur===1}"
                                     style="border-bottom: 1px solid #ccc;border-radius: 0;height: 7vh;line-height: 7vh">
                                    <span>微信</span></div>
                                <div @click="cur=2" :class="{active:cur===2}"
                                     style="border-bottom: 1px solid #ccc;border-radius: 0;height: 7vh;line-height: 7vh">
                                    <span>支付宝</span></div>
                                <div @click="cur=3" :class="{active:cur===3}"
                                     style="border-bottom: 1px solid #ccc;border-radius: 0;height: 7vh;line-height: 7vh">
                                    <span>会员卡</span></div>
                                <div @click="cur=4" :class="{active:cur===4}"
                                     style="border-radius: 0;height: 7vh;line-height: 7vh"><span>银行卡</span></div>
                            </el-col>
                            <!--                        <el-col style="margin-left: 4.166%"></el-col>-->
                            <el-col class="tab-contents" :span="16" style="text-align: center">
                                <div class="contentsTab-O" v-show="cur===0">
                                    <div class="dialog-contentsTab">
                                        <el-row style="height: 5vh;line-height: 5vh">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 5vh;line-height: 5vh">
                                            <el-col :span="12">优惠</el-col>
                                            <el-col :span="12">￥3.69</el-col>
                                        </el-row>
                                        <el-row style="height: 5vh;line-height: 5vh">
                                            <el-col :span="12">应收</el-col>
                                            <el-col :span="12">￥95</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;line-height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">
                                                <input style="width: 75%"></input>
                                            </el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;line-height: 6vh;">
                                            <el-col :span="12">找零</el-col>
                                            <el-col :span="12">
                                                <input style="width: 75%"></input>
                                            </el-col>
                                        </el-row>


                                    </div>
                                </div>
                                <div class="contentsTab-O" v-show="cur===1">
                                    <div class="dialog-contentsTab">
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>


                                    </div>
                                </div>
                                <div class="contentsTab-O" v-show="cur===2">
                                    <div class="dialog-contentsTab">
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>
                                        <el-row style="height: 6vh;">
                                            <el-col :span="12">结算金额</el-col>
                                            <el-col :span="12">￥98.69</el-col>
                                        </el-row>


                                    </div>

                                </div>
                            </el-col>

                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="9" style="border: 1px solid #ccc;padding: 5px">
                            <el-row style="height: 5vh;line-height: 5vh;">
                                <el-col :span="12">微信支付</el-col>
                                <el-col :span="12">28.30元</el-col>
                            </el-row>

                            <el-row style="height: 5vh;line-height: 5vh">
                                <el-col :span="12">支付宝支付</el-col>
                                <el-col :span="12">28.30元</el-col>
                            </el-row>
                            <el-row style="height: 5vh;line-height: 5vh">
                                <el-col :span="12">银行卡支付</el-col>
                                <el-col :span="12">28.30元</el-col>
                            </el-row>
                            <el-row style="height: 5vh;line-height: 5vh">
                                <el-col :span="12">会员卡支付</el-col>
                                <el-col :span="12">28.30元</el-col>
                            </el-row>
                            <el-row style="height: 5vh;line-height: 5vh;color: #FF9966;font-size: 18px">
                                <el-col :span="12">
                                    尚欠￥23.1元
                                </el-col>
                            </el-row>

                        </el-col>
                    </div>
                    <span slot="footer" style="text-align: right">
                    <el-button @click="dialogSettlement = false" class="children-A">清 除</el-button>
                    <el-button @click="dialogSettlement = false" class="children-B">确 定</el-button>
                    <el-button @click="dialogSettlement = false" class="children-C">取 消</el-button>

             </span>
                </el-dialog>
            </div>

        </el-container>


    </div>
</template>
<style scoped>
    .el-tabs /deep/ .el-tabs__content {
        height: 100%;
    }

    .dialogIntegral img {
        width: 150px;
        height: 150px;
    }

    .exchangeBox {
        width: 100%;
        height: 55px;
        line-height: 55px;
        top: 50px;
        font-size: 20px;
        color: #FD4000;
        position: absolute;
        text-align: center;
        background-color: rgba(0, 0, 0, .5);

    }

    .Sale-container {
        width: calc(100vw - 220px);
        height: calc(100vh - 50px);
        margin: auto;
        padding: 0px 10px;
    }

    .Sale-container-content {
        width: calc(100vw - 240px);
        height: calc(100vh - 30px);
        margin: auto;
        padding: 0px 10px;
    }

    .Sale-content-top {
        display: flex;
        justify-content: space-between;

    }

    .Sale-container-content .el-asides {
        border: 2px solid #00CCCC;
        border-radius: 20px;
        position: relative;
    }

    .el-mainS {
        overflow: auto
    }

    .el-table {
        overflow: auto;
        font-size: 10px;
        margin: 5px auto;
        border-bottom: none;
    }

    .el-input-container {
        height: 50px;
        line-height: 50px;
        margin: 0px 6px;
        color: dodgerblue;
    }

    .el-input-container div {
        display: inline-block;
    }

    .el-input {
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin-left: 0;
    }

    .el-input input {
        width: 150px;
        height: 30px;
        line-height: 30px;
        border-radius: 0;
        text-align: right;
        background-color: transparent;
    }

    .el-select {
        width: 150px;
    }

    .el-select input {
        text-align: right;
    }

    .el-select span .el-input__icon {
        height: 30px;
        line-height: 30px;
    }


    .el-main {
        display: flex;
        height: 100%;
        padding: 0;
        margin: 0 1% 0 1.5%;
        text-align: center;
        font-size: 15px;
    }

    .el-tabs {
        color: white;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    .el-tab-pane {
        padding: 0;
        margin: 0;
        font-size: 14px;
        overflow-y: auto;
    }

    .tab-item-content {
        /*width: 23%;*/
        display: flex;
        padding: 5px 15px;
        justify-content: space-between;
        margin: 12px 10px;
        display: inline-block;
        background-color: #00CCCC;
    }

    .el-footer {
        display: flex;
        text-align: center;
        padding: 1% 2% 1% 0%;
        /*background-color: red;*/
        margin-top: 30px;
    }

    .el-footer-content {
        /*width: 90%;*/
        /*height: 100%;*/
        position: relative;
        /*background-color: red;*/
        margin-right: 10px;
        /*padding: 0px 5px;*/
    }

    .el-footer-content .el-row {
        margin-right: 0;
        margin-left: 0;
        display: flex;
        position: relative;
    }

    .el-col {
        border-radius: 4px;
        padding: 0;
    }

    .grid-content {
        display: flex;
        justify-content: center;
        border-color: lightseagreen;
        border-radius: 10px;
        z-index: 1;
        height: 100%;
        line-height: 14vh;
        /*margin-left: 10px;*/
        background: url("../assets/Highlight.png") no-repeat;
        background-size: contain;
    }

    .el-footer-button {
        position: relative;
        margin-top: 2%;
        text-align: center;
        background: url("../assets/Settlement-btn.png") no-repeat;
        background-size: contain;
    }

    .dialog-footer {
        border-top: 1px solid #999;
        padding-top: 8px;
        display: flex;
        justify-content: space-between;
    }

    .dialog-footer .el-button {
        padding: 20px 25px;
        border-color: #F3E9E2;
        color: #F3E9E2;
    }

    .dialog-footer .children-A {
        color: #606266;
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .children-A {
        color: #606266;
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .Peel {
        background-color: #FF9966;
    }

    .dialog-footer .children-B {
        color: #606266;
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .children-B {
        color: #606266;
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .dialog-footer .children-C {
        color: #606266;
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .children-C {
        color: #606266;
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .dialog-footer-btn {
        display: flex;
        justify-content: space-between;
    }

    .dialog-footer-btn .el-button {
        padding: 10px 15px;
        border-color: #F3E9E2;
        color: #606266;
    }

    .dialog-footer-btn .children-D {
        color: #606266;
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .dialog-footer-btn .children-E {
        color: #606266;
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .myCol {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .2) inset;

    }

    a {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;
        color: #333;

    }

    .dialog-Modify {
        font-size: 20px;
    }

    .tab-titles div {
        width: 50%;
        margin: 30px auto 10px;
        padding: 15px 25px;
        color: white;
        border-radius: 15px;
        font-size: 17px;
        background-color: #009999;
    }

    .dialog-contentsTab {
        font-size: 16px;
    }

    .active {
        background: -webkit-linear-gradient(#FF9966, #FF9966);
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
</style>


<script>
    export default {
        data() {
            return {
                cur: 0,
                input: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                inputs: '',
                formInline: {
                    user: '',
                    region: ''
                },
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                dialogVisible: false,
                dialogTableVisible: false,
                dialogTopVisible: false,
                dialogIntegral: false,
                dialogVisibleMore: false,
                dialogVisibleModify: false,
                dialogVisibleModifyPrice: false,
                dialogUnitPriceWeigh: false,
                dialogMembershipCard: false,
                dialogShipCard: false,
                dialogTabItem: false,
                dialogSettlement: false,
                dialogTracingSource: false,
                tablesData: [
                    {
                        project: '可口可乐250ml',
                        number: '5.00',
                        price: '2.00',
                        money: '10.00'
                    },
                    {
                        project: '老坛酸菜牛肉面(袋装)',
                        number: '5.00',
                        price: '2.00',
                        money: '10.00'
                    }, {
                        project: '老坛酸菜牛肉面(袋装)',
                        number: '5.00',
                        price: '2.00',
                        money: '10.00'
                    }, {
                        project: '老坛酸菜牛肉面(袋装)',
                        number: '5.00',
                        price: '2.00',
                        money: '10.00'
                    }, {
                        project: '老坛酸菜牛肉面(袋装)',
                        number: '5.00',
                        price: '2.00',
                        money: '10.00'
                    }],
                currentRow: null,
                operationBtns: [
                    [
                        {name: '退货', id: '1'},
                        {name: '更改数量', id: "2"},
                        {name: '删除', id: "3"},
                        {name: '修改单价', id: "4"},
                        {name: '赠送', id: "5"},
                        {name: '称重', id: "6"},
                        {name: '整单取消', id: "7"}
                    ],
                    [
                        {name: '会员卡', id: "8"},
                        {name: '商品查询', id: "9"},
                        {name: '挂单', id: "10"},
                        {name: '线上结算', id: "11"},
                        {name: '卡结算', id: "12"},
                        {name: '积分兑换', id: "13"},
                        {name: '更多', id: "14"}
                    ]
                ],
                activeName: '2',
                tableData: [
                    {
                        receiptsNum: '2016-05-02',
                        price: '151',
                        dataTime: '2019-03-15 14:20:20'
                    }, {
                        receiptsNum: '2016-05-04',
                        price: '123',
                        dataTime: '2019-03-15 14:20:20'
                    }, {
                        receiptsNum: '2016-05-01',
                        price: '112',
                        dataTime: '2019-03-15 14:20:20'
                    }, {
                        receiptsNum: '2016-05-03',
                        price: '101',
                        dataTime: '2019-03-15 14:20:20'
                    },
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '100px',
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
                console.log(tab, event);
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row)
            },
            handleCurrentChange(val) {
                this.currentRow = val
            },
            getRowClass({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 0) {
                    return ' background: lightseagreen;color:white;text-align:center;height:30px;padding:0'
                } else {
                    return ''
                }
            },
            getRowsClass({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 0) {
                    return 'color:#606266;text-align:center;height:30px;padding:0'
                } else {
                    return ''
                }
            },
            cellStyle({row, column, rowIndex, columnIndex}) {
                return 'text-align:center;height:30px;padding:0'
            }
        }
    };
</script>


