<template>
    <el-container style="height: 100%">
        <el-aside
                width="200px"
                height="100vh"
                class="el-aside"
                style="  background-color: rgba(151, 255, 255, 0.2);"
        >
            <el-menu :default-openeds="['1', '2']">
                <router-link to="/sale">
                    <el-menu-item index="sale" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/cashier.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                     <el-row>
                         收银
                     </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/work-handover">
                    <el-menu-item index="work-handover" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/WorkHandover.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            交班对账
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/data-synchronization">
                    <el-menu-item index="data-synchronization" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/data-synchronization.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            数据同步
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/leave-message">
                    <el-menu-item index="leave-message" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/addressee.png" alt="留言" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            留言
                        </el-row>
                    </el-menu-item>
                </router-link>
                <router-link to="/system-setting">
                    <el-menu-item index="system-setting" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/system-setting.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            系统设置
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/sale">
                    <el-menu-item index="sale" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/Practice-mode.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            练习模式
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/label-mode">
                    <el-menu-item index="label-mode" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/LabelMode.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            标签模式
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/pricing">
                    <el-menu-item index="pricing" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/pricing.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            商品调价
                        </el-row>
                    </el-menu-item>
                </router-link>
                <router-link to="/change-password">
                    <el-menu-item index="change-password" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/change-password.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            修改密码
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/voucher">
                    <el-menu-item index="voucher" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/voucher.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            收款缴款
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/inventory">
                    <el-menu-item index="inventory" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/inventory.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            库存管理
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/store-management">
                    <el-menu-item index="store-management" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/store-management.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            门店管理
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/procurement">
                    <el-menu-item index="procurement" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/Purchase.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            采购管理
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/wholesale">
                    <el-menu-item index="wholesale" class="el-menu-item"
                    >
                        <el-row>
                            <img src="../assets/wholesale.png" alt="收银" style="width: 35px;height: 35px">
                        </el-row>
                        <el-row>
                            批发销售单
                        </el-row>

                    </el-menu-item>
                </router-link>
                <router-link to="/">
                    <el-menu-item index="" class="el-menu-item"
                    >
                        <el-row style="line-height: 100px">
                            <img src="../assets/return.png" alt="收银"  style="width: 70px">
                        </el-row>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-aside>
        <el-container class="containeres">
            <router-view/>
        </el-container>
    </el-container>
</template>
<style scoped>
    body{
        margin: 0;
    }
    .el-aside {
        height: 100vh;
        color: white;
        text-align: center;
    }

    .containeres {
        height:100vh ;
    }

    .el-menu-item {
        text-align: center;
        height: 100px;
        font-size: 18px;
        line-height: 46px;
        text-decoration: none;
        color: white;
        background-color: #003E3E;
        border-bottom: 1px solid #999;
    }

    a {
        text-decoration: none;
    }

    .el-menu-item:hover, .el-menu-item:focus {
        background-color: #009999;
        color: white;
        text-decoration: none;
    }

    .el-menu-item.is-active {
        color: white;
    }

    .el-menu-item .el-icon-message {
        display: block;
        text-align: center;
        margin: 0 auto;
        position: relative;
        top: 5px;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
