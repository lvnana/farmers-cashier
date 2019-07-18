import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        // {
        //     path: "/",
        //     name: "login",
        //     component: () =>
        //         import( "./views/Login.vue")
        // },
        {
            path: "/",
            name: "login",
            component: () =>
                import( "./components/Login.vue")
        },
        {
            path: "/login.",
            name: "Login",
            component: () =>
                import( "./components/Login.vue")
        },
        {
            path: "/home",
            name: "Home",
            component: () =>
                import( "./components/Home.vue"),
            redirect: '/sale',
            children: [
                {
                    path: "/sale",
                    name: "Sale",
                    component: () =>
                        import( "./views/Sale.vue")
                },
                {
                    path: "/SalesReturn",
                    name: "SalesReturn",
                    component: () =>
                        import("./views/SalesReturn.vue")
                },
                {
                    path: "/MerchandiseQuery",
                    name: "MerchandiseQuery",
                    component: () =>
                        import("./views/MerchandiseQuery.vue")
                },
                {
                    path: "/mount",
                    name: "mount",
                    component: () =>
                        import("./views/mount.vue")
                },
                {
                    path: "/work-handover",
                    name: "WorkHandover",
                    component: () =>
                        import("./views/WorkHandover.vue")
                },
                {
                    path: "/data-synchronization",
                    name: "DataSynchronization",
                    component: () =>
                        import("./views/DataSynchronization.vue"),
                },
                {
                    path: "/work-handover",
                    name: "WorkHandover",
                    component: () =>
                        import( "./views/WorkHandover.vue")
                },
                {
                    path: "/ConsumerQueries",
                    name: "ConsumerQueries",
                    component: () =>
                        import( "./views/ConsumerQueries.vue")
                },
                {
                    path: "/newMembers",
                    name: "newMembers",
                    component: () =>
                        import( "./views/newMembers.vue")
                },
                {
                    path: "/salesMan",
                    name: "salesMan",
                    component: () =>
                        import( "./views/salesMan.vue")
                },
                {
                    path: "/ReportLoss",
                    name: "ReportLoss",
                    component: () =>
                        import( "./views/ReportLoss.vue")
                },
                {
                    path: "/Recharge",
                    name: "Recharge",
                    component: () =>
                        import( "./views/Recharge.vue")
                },
                {
                    path: "/modifyCardMessage",
                    name: "modifyCardMessage",
                    component: () =>
                        import( "./views/modifyCardMessage.vue")
                },
                {
                    path: "/ElectronicCoupons",
                    name: "ElectronicCoupons",
                    component: () =>
                        import( "./views/ElectronicCoupons.vue")
                },
                {
                    path: "/BillInquiry",
                    name: "BillInquiry",
                    component: () =>
                        import( "./views/BillInquiry.vue")
                },
                {
                    path: "/OnlineOrders",
                    name: "OnlineOrders",
                    component: () =>
                        import( "./views/OnlineOrders.vue")
                },
                {
                    path: "/CardQuery",
                    name: "CardQuery",
                    component: () =>
                        import( "./views/CardQuery.vue")
                },
                {
                    path: "/CustomerList",
                    name: "CustomerList",
                    component: () =>
                        import( "./views/CustomerList.vue")
                },
                {
                    path: "/SupplierList",
                    name: "SupplierList",
                    component: () =>
                        import( "./views/SupplierList.vue")
                },
                {
                    path: "/label-mode",
                    name: "label-mode",
                    component: () =>
                        import( "./views/LabelMode.vue")
                },               {
                    path: "/SupplierList",
                    name: "SupplierList",
                    component: () =>
                        import( "./views/SupplierList.vue")
                },               {
                    path: "/SupplierList",
                    name: "SupplierList",
                    component: () =>
                        import( "./views/SupplierList.vue")
                },


                {
                    path: "/leave-message",
                    name: "LeaveMessage",
                    component: () =>
                        import( "./views/LeaveMessage.vue"),
                    redirect: '/addressee',
                    children: [
                        {
                            path: "/addressee",
                            name: "addressee",
                            component: () =>
                                import( "./views/addressee.vue")
                        },
                    ]
                },
                {
                    path: "/system-setting",
                    name: "systemSetting",
                    component: () =>
                        import( "./views/systemSetting.vue")
                },
                {
                    path: "/change-password",
                    name: "ChangePassword",
                    component: () =>
                        import( "./views/ChangePassword.vue")
                },
                {
                    path: "/pricing",
                    name: "pricing",
                    component: () =>
                        import( "./views/pricing.vue")
                },
                {
                    path: "/voucher",
                    name: "voucher",
                    component: () =>
                        import( "./views/voucher.vue")
                },
                {
                    path: "/inventory",
                    name: "inventory",
                    component: () =>
                        import( "./views/inventory.vue")
                },

                {
                    path: "/store-management",
                    name: "StoreManagement",
                    component: () =>
                        import( "./views/StoreManagement.vue")
                },
                {
                    path: "/procurement",
                    name: "procurement",
                    component: () =>
                        import( "./views/procurement.vue")
                },
                {
                    path: "/wholesale",
                    name: "wholesale",
                    component: () =>
                        import( "./views/wholesale.vue")
                },

            ]
        },
    ]
});
