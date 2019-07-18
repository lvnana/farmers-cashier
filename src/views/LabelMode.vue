<template>
    <div class="LabelMode-container">
        <div class="LabelMode-container-content">
            <div style="height: 55vh">
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
                        <el-tab-pane label="干货" name="11" class="el-tab-pane" style="height: 100%;">
                            <div style="height: 100%;overflow: auto">
                                <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                    <div>大白菜</div>
                                    <div>0.98/斤</div>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="干货" name="12" class="el-tab-pane" style="height: 100%;">
                            <div style="height: 100%;overflow: auto">
                                <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                    <div>大白菜</div>
                                    <div>0.98/斤</div>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="干货" name="13" class="el-tab-pane" style="height: 100%;">
                            <div style="height: 100%;overflow: auto">
                                <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                    <div>大白菜</div>
                                    <div>0.98/斤</div>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="干货" name="14" class="el-tab-pane" style="height: 100%;">
                            <div style="height: 100%;overflow: auto">
                                <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                    <div>大白菜</div>
                                    <div>0.98/斤</div>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="干货" name="15" class="el-tab-pane" style="height: 100%;">
                            <div style="height: 100%;overflow: auto">
                                <div class="tab-item-content" @click="dialogTabItem= true" v-for="index of 60">
                                    <div>大白菜</div>
                                    <div>0.98/斤</div>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="干货" name="16" class="el-tab-pane" style="height: 100%;">
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
            <div style="height: 3vh"></div>
            <el-row style="height: 32vh;">
                <el-col :span="7" style="text-align: left;border: 1px solid #333;height: 100%">
                    <div style="background-color: #009999;height: 30px;line-height:30px;color: white;padding: 0px 5px">
                        标签选项
                    </div>
                    <div @click="cur=0" :class="{active:cur===0}"
                         style="padding: 0px 5px">
                        <div style="margin: 1vh 0">
                            <el-radio v-model="radio" label="1" style="width: 100%">
                                条码打印
                            </el-radio>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">重量</el-col>
                                <el-col :span="12">单价</el-col>
                            </el-row>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">金额</el-col>
                                <el-col :span="12">条码</el-col>
                            </el-row>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">商品名称</el-col>
                            </el-row>
                        </div>

                    </div>
                    <div @click="cur=1" :class="{active:cur===1}"
                         style="padding:0px 5px">
                        <div style="margin: 1vh 0">
                            <el-radio v-model="radio" label="2" style="width: 100%">
                                价签打印
                            </el-radio>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">商品名称</el-col>
                                <el-col :span="12">产地</el-col>
                            </el-row>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">单位</el-col>
                                <el-col :span="12">规格</el-col>
                            </el-row>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">型号</el-col>
                                <el-col :span="12">零售价</el-col>
                            </el-row>
                            <el-row style="margin-left: 27px;font-size: 14px;">
                                <el-col :span="12">店铺名称</el-col>
                            </el-row>

                        </div>

                    </div>
                </el-col>
                <el-col :span="16" style="border: 1px solid #333;float: right;height: 100%">
                    <div style="background-color: #009999;height: 30px;line-height:30px;color: white;padding: 0px 5px">
                        标签预览
                    </div>

                    <div class="contentsTab-O" v-show="cur===0" style="height: calc(32vh - 32px);">
                        <el-col class="dialog-contentsTab " :span="14"
                                style="height: 100%;margin-top: 2vh;text-align: center">
                            <div style="width: 90%;height: 85%;margin: 0 auto;border: 1px solid #ccc">
                                <el-row style="line-height: 3vh;height: 3vh; ">
                                    <el-col :span="4">重量</el-col>
                                    <el-col :span="4">0.485</el-col>
                                    <el-col :span="4">kg</el-col>
                                </el-row>
                                <el-row style="line-height:3vh;height: 3vh; ">
                                    <el-col :span="4">单价</el-col>
                                    <el-col :span="4">98</el-col>
                                    <el-col :span="4">元/kg</el-col>
                                </el-row>
                                <el-row style="line-height: 3vh;height: 3vh;">
                                    <el-col :span="4">金额</el-col>
                                    <el-col :span="4">7.60</el-col>
                                    <el-col :span="4">元</el-col>
                                </el-row>
                                <el-row v-for="(v,k) in list">

                                    <barcode :value="v.barcodes" :options="barcode_option" tag="svg"
                                             style="width: 100%"></barcode>

                                </el-row>
                                <el-row style="background-color: #99D6D6;font-size: 16px;font-weight: 600;padding: 5px">
                                    金胚芽苦荞(LY)
                                </el-row>
                            </div>
                        </el-col>

                        <el-col :span="8" style="height: 100%;float: right">
                            <el-row style="height: 7vh;margin-top: 14vh">
                                <el-button class="children-A" @click="dialogVisibleModify= true">打印</el-button>
                            </el-row>
                            <el-row>
                                <el-button class="children-B">取消</el-button>
                            </el-row>
                        </el-col>
                    </div>

                    <div class="contentsTab-O" v-show="cur===1" style="height: calc(32vh - 32px);">
                        <el-col class="dialog-contentsTab" :span="16" style="height: 100%;margin-top: 3vh">
                            <div style="width: 90%;height: 85%;margin: 0 auto;" class="barCodeBoxT"></div>
                        </el-col>
                        <el-col :span="8" style="height: 100%;">
                            <el-row style="height: 7vh;margin-top: 14vh">
                                <el-button class="children-A" @click="dialogVisibleModify= true">打印</el-button>
                            </el-row>
                            <el-row>
                                <el-button class="children-B">取消</el-button>
                            </el-row>
                        </el-col>
                    </div>


                </el-col>

            </el-row>
            <el-dialog title="打印份数" :visible.sync="dialogVisibleModify"
                       width="30%"
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

            <!--            <el-dialog title=""-->
            <!--                       :visible.sync="dialogTabItem"-->
            <!--                       width="30%"-->
            <!--                       :before-close="handleClose">-->
            <!--                <div @click="dialogTracingSource= true">-->
            <!--                    <el-input v-model="inputs" placeholder="请扫描商品上的防伪二维码或直接输入16位防伪码" style="width: 100%"></el-input>-->
            <!--                </div>-->

            <!--            </el-dialog>-->

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

    .LabelMode-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #ccc;
        background-color: white;
    }

    .LabelMode-container-content {
        padding: 10px 40px;
        height: calc(100vh - 70px);
        /*background-color: red;*/
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
        text-align: left;
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

    .children-A {
        color: #606266;
        background: -webkit-linear-gradient(#FFFFCC, #FF9966);
    }

    .children-B {
        color: #606266;
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }

    .myCol {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .2) inset;

    }

    .barCodeBox {
        background: url("../assets/barCode.png") no-repeat;
        z-index: -1;
        background-size: contain;
    }

    .barCodeBoxT {
        background: url("../assets/barCode.png") no-repeat;
        z-index: -1;
        background-size: contain;
    }
</style>


<script>
    export default {
        data() {
            return {
                cur: 0,
                activeName: '1',
                radio: '1',
                input1: '',
                inputs: '',
                dialogTabItem: false,
                dialogTracingSource: false,
                dialogVisibleModify: false,
                barcode_option: {

                    displayValue: false, //是否默认显示条形码数据

                    //textPosition  :'top', //条形码数据显示的位置

                    background: '#fff', //条形码背景颜色

                    valid: function (valid) {

                        console.log(valid)

                    },

                    width: '1px',//单个条形码的宽度

                    height: '55px',

                    fontSize: '15px' //字体大小

                },
                list: [{barcodes: '176868969'}]

            }

        },

        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
        }
    };
</script>
