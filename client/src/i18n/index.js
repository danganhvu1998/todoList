import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n);

const messages = {
    "vi":{
        register: "Đăng Kí",
        login: "Đăng Nhập",
        infoReload: "Thông Tin",
        logout: "Đăng Xuất",
        logoutAll: "Đăng Xuất Toàn Bộ",
        user: "Người Dùng",
    },
    "en":{
        register: "Register",
        login: "Login",
        infoReload: "Info Reload",
        logout: "Log Out",
        logoutAll: "Log Out All",
        user: "User",
    }
}

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
})

export default i18n;