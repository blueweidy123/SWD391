<template>
    <div class="dark">
        <table>
            <tr>
                <td>
                    <span>CCCD</span>
                </td>
                <td>
                    <el-input v-model="credential.email" size="small" />
                </td>
            </tr>
            <tr>
                <td>
                    <span>Password</span>
                </td>
                <td>
                    <el-input type="Password" v-model="credential.password" size="small" />
                </td>
            </tr>
            <tr>
                <td></td>
                <td><el-button @click="authLogin" type="primary">Login</el-button></td>
            </tr>
        </table>
    </div>
</template>
<script>
import { useAuthStore } from "../stores/auth";
export default {
    setup() {
        const authStore = useAuthStore();

        const {
            credential,
            authLogin
        } = authStore;

        return {
            credential,
            authLogin,
        }
    }
}
</script>
<style lang="scss" scoped>
table {
    position: fixed;
    inset: 50% 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: rgb(244, 244, 255);
    border-radius: .5rem;

    td {
        padding: 4px 8px;
    }

    .el-input {
        width: 250px;
        border-radius: 8px !important;
        padding: 0;
        height: 36px;

    }
}
</style>