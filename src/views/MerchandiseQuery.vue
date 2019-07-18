<template>
    <div class="MerchandiseQuery-container">
        <div class="MerchandiseQuery-container-content">
            <div class="content-title">
                <div>
                    商品查询
                </div>
                <router-link to="/Sale">
                    <div style="color: black">
                        <i class="el-icon-close" style="font-size: 20px"></i>
                    </div>
                </router-link>

            </div>
            <el-row style="margin: 20px 0px">
                <el-form :inline="true" :model="formInline" class="demo-form-inline" size="medium"
                         style="padding: 10px 0px">
                    <el-col :span="12">
                        <el-form-item label="商品编号/条码">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="商品名称">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="onSubmit"
                                       style="background: -webkit-linear-gradient(#FECE76, #FF5C2D);">查询
                            </el-button>
                        </el-form-item>
                    </el-col>

                </el-form>
            </el-row>


            <el-table class="el-table"
                      border
                      height="380"
                      style="width: 100%"
                      ref="singleTable"
                      :data="storesReceiving"
                      :header-cell-style="getRowClass"
                      highlight-current-row
                      @current-change="handleCurrentChange"
                      :cell-style="cellStyle"
            >
                <el-table-column label="编号" prop="codingID"></el-table-column>
                <el-table-column min-width="140px" label="条码" prop="barcode"></el-table-column>
                <el-table-column label="名称" prop="TradeName"></el-table-column>
                <el-table-column label="单位" prop="unit"></el-table-column>
                <el-table-column label="型号" prop="species"></el-table-column>
                <el-table-column label="单价" prop="unitPrice"></el-table-column>
                <el-table-column max-width="10px" label="数量" prop="inventoryNumber"></el-table-column>
            </el-table>

            <div style="padding: 20px 0;text-align: left">

            </div>
            <div style="float: right;margin-top:10px;" class="footer-btn">
                    <el-button @click="prev">确认</el-button>
                <el-button style=" margin-left: 20px;" @click="prev">取消</el-button>
            </div>
        </div>

    </div>

</template>
<style scoped>
    .MerchandiseQuery-container {
        width: calc(100vw - 260px);
        margin: 20px 20px;
        height: calc(100vh - 50px);
        border: 1px solid #999999;
        background-color: white;
    }

    .MerchandiseQuery-container-content {
        padding: 10px 40px;
        height: calc(100vh - 70px);
        /*background-color: red;*/
    }

    .content-title {
        display: flex;
        padding: 10px 10px;
        font-size: 20px;
        justify-content: space-between;
    }

    .el-button {
        padding: 15px 25px;
    }

    .footer-btn .el-button:nth-child(1) {
        background: -webkit-linear-gradient(#2BFFFF, #009999);
    }

    .footer-btn .el-button:nth-child(2) {
        background: -webkit-linear-gradient(#D7D7D7, #A1A1A1);
    }
</style>

<script>
    export default {
        data() {
            return {
                dialogVisible:false,
                formInline: {
                    user: '',
                    region: ''
                },
                storesReceiving: [
                    {
                        id: '001',
                        codingID: '1101',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '6.00',
                        inventoryNumber: '154',
                    },
                    {
                        id: '002',
                        codingID: '1102',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'BJ212',
                        unitPrice: '5.00',
                        inventoryNumber: '173',
                    }, {
                        id: '003',
                        codingID: '1103',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '6.00',
                        inventoryNumber: '162',
                    },
                    {
                        id: '004',
                        codingID: '1104',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '6.00',
                        inventoryNumber: '153',
                    },
                    {
                        id: '005',
                        codingID: '1105',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '6.20',
                        inventoryNumber: '103',
                    },
                    {
                        id: '006',
                        codingID: '1106',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '5.00',
                        inventoryNumber: '153',
                    },
                    {
                        id: '007',
                        codingID: '1107',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '4.00',
                        inventoryNumber: '153',
                    },
                    {
                        id: '008',
                        codingID: '1107',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '4.00',
                        inventoryNumber: '153',
                    }, {
                        id: '009',
                        codingID: '1107',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '4.00',
                        inventoryNumber: '153',
                    }, {
                        id: '010',
                        codingID: '1107',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '4.00',
                        inventoryNumber: '153',
                    },
                    {
                        id: '011',
                        codingID: '1107',
                        barcode: '6912345678910',
                        TradeName: '紫甘蓝',
                        unit: 'kg',
                        species: 'EQ140',
                        unitPrice: '4.00',
                        inventoryNumber: '153',
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
