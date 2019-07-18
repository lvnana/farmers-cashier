<template>
    <el-container style="height: 100%">
        <el-aside
                width="200px"
                height="100%"
                class="el-aside"
                style="  background-color: rgba(151, 255, 255, 0.2);"
        >
            <el-menu :default-openeds="['1', '2']">

                <router-link to="/addressee">
                    <el-menu-item index="addressee" class="el-menu-item"
                    ><i class="el-icon-message"></i>
                        留言
                    </el-menu-item>
                </router-link>
                <router-link to="/sale">
                    <el-menu-item index="sale" class="el-menu-item"
                    ><i class="el-icon-message"></i>
                        收件
                    </el-menu-item>
                </router-link>
                <router-link to="/sale">
                    <el-menu-item index="sale" class="el-menu-item"
                    ><i class="el-icon-message"></i>
                        联系人
                    </el-menu-item>
                </router-link>



            </el-menu>
        </el-aside>
        <el-container class="containeres" style="height: 100%">
            <router-view/>
        </el-container>
    </el-container>
</template>
