<template>
    <div class="systemSetting-container">
        <div class="systemSetting-container-content">
            <ul class="tab-tilte">
                <div @click="cur=0" :class="{active:cur===0}"><span>硬件设置</span></div>
                <div @click="cur=1" :class="{active:cur===1}"><span>软件设置</span></div>
            </ul>
            <div class="tab-content">
                <div class="contentsTab-O" v-show="cur===0">
                    <el-form ref="form" :model="form" label-width="100px">
                        <div class="el-form-item-title">
                            <div>IC卡配置</div>
                            <div>></div>
                        </div>
                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">IC卡设置</div>
                            <el-radio-group v-model="form.resource" style="margin-left: -60px">
                                <el-radio label="接触式(SLE4442)"></el-radio>
                                <el-radio label="非接触式(Nifarel)"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="IC卡类型">
                            <el-select v-model="form.region" placeholder="类型101">
                                <el-option label="类型101" value="101"></el-option>
                                <el-option label="类型102" value="102"></el-option>
                                <el-option label="类型103" value="103"></el-option>
                                <el-option label="类型104" value="104"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="端口类型">
                            <el-input v-model="form.name" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="端口号">
                            <el-input v-model="form.name" :disabled="true"></el-input>
                        </el-form-item>

                        <div class="el-form-item-title">
                            <div>打印机配置</div>
                            <div>></div>
                        </div>
                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">启用小票打印机</div>
                            <el-checkbox v-model="checked" style="margin-left: -60px">启动消费后自动打印小票功能</el-checkbox>
                        </el-form-item>
                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">设置小票机和小票样式</div>
                            <el-form-item label="打印机类型" style="margin-left: -68px">
                                <el-select v-model="form.regions" placeholder="请选择活动区域">
                                    <el-option label="小票打印机" value="xiaopiao"></el-option>
                                    <el-option label="账单打印机" value="zhangdan"></el-option>
                                    <el-option label="标签打印机" value="biaoqian"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form-item>
                        <el-form-item label="" style="margin-left: -68px;">
                            <div style="padding: 5px 0 0px">设置小票机标题和结尾</div>

                            <el-form-item label="小票标题">
                                <el-input v-model="form.title" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="小票结尾">
                                <el-input v-model="form.ends" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label=" ">
                                <el-input v-model="form.address" :disabled="true"></el-input>
                            </el-form-item>

                            <el-form-item label=" ">
                                <el-input v-model="form.alert" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label=" ">
                                <el-input v-model="form.promotion" :disabled="true"></el-input>
                            </el-form-item>

                            <el-form-item label="小票尾部空行">
                                <el-select v-model="form.regions" placeholder="1">
                                    <el-option label="1" value="regionsO"></el-option>
                                    <el-option label="2" value="regionsT"></el-option>
                                    <el-option label="3" value="regionsF"></el-option>
                                    <el-option label="4" value="regionsOS"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form-item>
                        <div class="el-form-item-title">
                            <div>钱箱配置</div>
                            <div>></div>
                        </div>
                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">启用钱箱</div>
                            <el-checkbox v-model="checked" style="margin-left: -60px">系统登录后自动启用钱箱功能</el-checkbox>
                        </el-form-item>
                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">设置钱箱</div>
                            <el-form-item label="端口" style="margin-left: -68px">
                                <el-select v-model="form.port" placeholder="端口A">
                                    <el-option label="端口A" value="porta"></el-option>
                                    <el-option label="端口B" value="portb"></el-option>
                                    <el-option label="端口C" value="portc"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="触发命令" style="margin-left: -68px">
                                <el-select v-model="form.shortcuts" placeholder="快捷键打开">
                                    <el-option label="快捷键打开" value="shortcuts"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form-item>
                        <div class="el-form-item-title">
                            <div>客显配置</div>
                            <div>></div>
                        </div>
                        <el-form-item>
                            <el-checkbox v-model="checked" style="margin-left: -68px">启用客显</el-checkbox>
                        </el-form-item>
                        <el-form-item label="辅屏信息">
                            <el-input v-model="form.promotion" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item label="辅屏状态">
                            <el-radio-group v-model="form.resource" style="">
                                <el-radio label="滚动"></el-radio>
                                <el-radio label="固定"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="指定型号" style="">
                            <el-select v-model="form.port" placeholder="端口A">
                                <el-option label="端口A" value="porta"></el-option>
                                <el-option label="端口B" value="portb"></el-option>
                                <el-option label="端口C" value="portc"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-radio-group v-model="form.resource" style="">
                                <el-radio label="显示单品金额和单据总额" style="display: block;margin: 10px 0"></el-radio>
                                <el-radio label="显示单价和重分量" style="display: block;margin: 10px 0"></el-radio>
                                <el-radio label="显示重量和单品金额" style="display: block;margin: 10px 0"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <div class="el-form-item-title">
                            <div>电子秤配置</div>
                            <div>></div>
                        </div>

                        <el-form-item style="margin-left: -68px">
                            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="端口" style="">
                            <el-select v-model="form.port" placeholder="端口A">
                                <el-option label="端口A" value="porta"></el-option>
                                <el-option label="端口B" value="portb"></el-option>
                                <el-option label="端口C" value="portc"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="频率" style="">
                            <el-select v-model="form.port" placeholder="端口A">
                                <el-option label="端口A" value="porta"></el-option>
                                <el-option label="端口B" value="portb"></el-option>
                                <el-option label="端口C" value="portc"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="型号" style="">
                            <el-select v-model="form.port" placeholder="端口A">
                                <el-option label="端口A" value="porta"></el-option>
                                <el-option label="端口B" value="portb"></el-option>
                                <el-option label="端口C" value="portc"></el-option>
                            </el-select>
                        </el-form-item>

                        <div class="el-form-item-title">
                            <div>其他配置</div>
                            <div>></div>
                        </div>

                        <el-form-item label="" style="margin-top: 10px">
                            <el-checkbox v-model="checkeds" style="margin-left: -60px">启用银行卡联机支付</el-checkbox>
                            <el-select v-model="form.card" placeholder="银联卡">
                                <el-option label="银联卡" value="carda"></el-option>
                                <el-option label="商务卡" value="cardb"></el-option>
                                <el-option label="信用卡" value="cardc"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="" style="margin-top: 10px">
                            <el-checkbox v-model="checked" style="margin-left: -60px">启用线上扫码支付</el-checkbox>
                            <el-select v-model="form.pay" placeholder="支付宝">
                                <el-option label="支付宝" value="paya"></el-option>
                                <el-option label="微信" value="payb"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">密码小键盘</div>
                            <el-form-item label="型号" style="margin-left: -68px">
                                <el-select v-model="form.port" placeholder="端口A">
                                    <el-option label="端口A" value="porta"></el-option>
                                    <el-option label="端口B" value="portb"></el-option>
                                    <el-option label="端口C" value="portc"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form-item>


                        <el-form-item>
                            <div style="margin-left: -68px;padding: 5px 0 0px">连锁农贸市场通用卡</div>
                            <el-form-item label="商户号" style="margin-left: -68px;padding: 5px 0 0px">
                                <el-input v-model="form.promotion" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="终端号" style="margin-left: -68px;padding: 5px 0 0px">
                                <el-input v-model="form.promotion" :disabled="true"></el-input>
                            </el-form-item>
                        </el-form-item>

                    </el-form>
                    <div style="display: flex;justify-content: space-between;padding: 10px">
                        <div>
                            <button class="cancel" style="width: 110px;">系统设置检测</button>
                        </div>
                        <div>
                            <button class="determine">确定</button>
                            <button class="cancel"> 取消</button>
                        </div>

                    </div>
                </div>


                <div class="contentsTab-T" v-show="cur===1">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                        <el-form-item label="" prop="type">
                            <div style="margin-left: -80px;padding: 5px 0 0px">前台锁定</div>
                            <el-checkbox v-model="checked" style="margin-left: -60px">启用屏幕锁定，
                                当系统闲置时间超过
                                <el-select v-model="form.port" placeholder="3" style="width: 100px">
                                    <el-option label="3" value="porta"></el-option>
                                    <el-option label="5" value="portb"></el-option>
                                    <el-option label="10" value="portc"></el-option>
                                </el-select>
                                分钟
                            </el-checkbox>
                        </el-form-item>


                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">每日数据下载</div>
                            <el-radio-group v-model="form.resource" style="margin-left: -60px;">
                                <el-radio label="每日仅下载一次"></el-radio>
                                <el-radio label="每次都需要下载"></el-radio>
                            </el-radio-group>
                        </el-form-item>


                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">盘点库存设置</div>
                            <el-radio-group v-model="form.resource" style="margin-left: -68px;">
                                <el-radio label="管库"></el-radio>
                                <el-radio label="不管库"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">盘点方式</div>
                            <el-radio-group v-model="form.resource" style="margin-left: -60px;">
                                <el-radio label="逐个商品盘点"></el-radio>
                                <el-radio label="批量商品盘点"></el-radio>
                                <el-radio label="批量商品盘点"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">数据上传</div>
                            定时同步间隔分钟数
                            <el-select v-model="form.port" placeholder="3" style="width: 100px">
                            <el-option label="3" value="porta"></el-option>
                            <el-option label="5" value="portb"></el-option>
                            <el-option label="10" value="portc"></el-option>
                        </el-select>
                            分钟
                        </el-form-item>


                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">商品查询</div>
                            <el-radio-group v-model="form.resource" style="margin-left: -60px;">
                                <el-radio label="按速记码检索"></el-radio>
                                <el-radio label="按名称检索"></el-radio>
                                <el-radio label="按代码检索"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="">
                            <div style="margin-left: -80px;padding: 5px 0 0px">商品显示</div>
                            <el-checkbox-group style="margin-left: -60px;" v-model="checkedCities" @change="handleCheckedCitiesChange">
                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                    </el-form>
                    <div style="display: flex;justify-content: space-between;padding: 10px">
                        <div>
                            <button class="cancel" style="width: 110px;">系统设置检测</button>
                        </div>
                        <div>
                            <button class="determine">确定</button>
                            <button class="cancel"> 取消</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

    .systemSetting-container {
        width: calc(100vw - 300px);
        /*height: 100vh;*/
        margin: 10px 20px 20px;
        border: 1px solid #ccc;
        overflow: hidden;
        overflow-y: auto;
        background-color: white;
    }

    .systemSetting-container-content {
        min-height: 500px;
        text-align: left;
    }

    ul {
        text-align: left;
        width: 100%;
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

    .tab-content {
        width: calc(100vw - 370px);
        margin: 0px 50px;
        height: 100vh;
    }

    .contentsTab-O-main {
        width: calc(100vw - 410px);
        margin: 10px 20px;
    }

    .el-select {
        width: 400px;
        height: 35px;
        background-color: transparent;
    }

    .el-input__inner {
        height: 35px !important;
        line-height: 35px;
        background-color: transparent;
    }

    .el-input {
        width: 400px;
        height: 35px;
        line-height: 35px;
    }

    .el-form-item {
        margin-bottom: 10px !important
    }

    .el-form-item-title {
        border: 1px solid #fff;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        background: -webkit-linear-gradient(#F2F2F2, #E4E4E4); /* Safari 5.1 - 6.0 */
    }

    button {
        width: 90px;
        height: 60px;
        border: 0;
        border-radius: 5px;
        margin-left: 15px;
    }

    .determine {
        background: -webkit-linear-gradient(#2BFFFF, #009999); /* Safari 5.1 - 6.0 */
    }

    .cancel {
        background: -webkit-linear-gradient(#CCCCCC, #999999); /* Safari 5.1 - 6.0 */
    }

</style>
<script type="text/javascript">
    const cityOptions = ['启用电子秤', '启用条码秤'];
    export default {
        data() {
            return {
                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true,
                cur: 0,
                checked: false,
                checkeds: true,
                temp: true,
                form: {
                    name: '',
                    region: '',
                    regions: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    sport: '',
                    card:'',
                    pay:'',
                    title: 'XXX农贸市场',
                    ends: '联系电话：028-1545522',
                    address: '地址：锦江区静沙南路29号',
                    alert: '请妥善保存此购物凭证，如有遗失，本店概不负责！',
                    promotion: '本店将于6.6~6.9端午假日全场8折促销，欢迎您的光临！',
                    shortcuts: '',
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },

        methods: {
            qh: function (t) {
                console.log(t);
                this.temp = t
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    }

</script>
