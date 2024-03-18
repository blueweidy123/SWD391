<template>
    <div class="appointform">
        <el-form :model="appointModel" label-width="120px">
            <el-form-item label="Doctor">
                <el-select v-model="appointModel.doctorId">
                    <el-option v-for="d in docsList.data" :key="d.id" :value="d.id" :label="d.fullName">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Service">
                <el-select v-model="appointModel.serviceId">
                    <el-option v-for="s in serviceList.data" :key="s.id" :value="s.id" :label="s.serviceTitle">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Time">
                <el-select v-model="appointModel.timeId">
                    <el-option v-for="t in  timeSlots.data " :key="t.id" :value="t.id"
                        :label="t.startAt + ' - ' + t.endAt">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Note">
                <el-input type="textarea" v-model="appointModel.note"></el-input>
            </el-form-item>
            <el-button type="primary" style="align-self: flex-end;" @click="makeApppoint">
                Make Appointment
            </el-button>
        </el-form>
    </div>
</template>

<script>
import { useAppointStore } from '@/stores/appoint';
import { onMounted } from 'vue';

export default {
    setup() {
        const appointStore = useAppointStore();
        const {
            docsList,
            getDocsList,
            serviceList,
            getServiceList,
            appointModel,
            makeApppoint,
            timeSlots,
            getTimeSlots,
        } = appointStore;

        onMounted(async () => {
            await getServiceList();
            await getDocsList();
            await getTimeSlots();
        });

        return {
            docsList,
            serviceList,
            appointModel,
            makeApppoint,
            timeSlots,
        };
    },
};
</script>

<style lang="scss">
.appointform {
    form {
        background-color: #f5f5ff;

        border-radius: 1rem;
        width: 60dvw;
        margin: 0rem 4rem;
        padding: 2rem 6rem 2rem 0rem;
        display: flex;
        flex-direction: column;
    }
}
</style>