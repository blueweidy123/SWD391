<template>
  <main>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Arranged Date</th>
            <th>Status</th>
            <th>Note</th>
            <th>Time Slot</th>
            <th>Selected Service</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in appointList.data" :key="a.id">
            <td>{{ a.id ?? '-' }}</td>
            <td>{{ a.arragedDate || "Not yet arranged" }}</td>
            <td>{{ a.status }}</td>
            <td>{{ a.note }}</td>
            <td>{{ a.timeSlot?.startAt }} - {{ a.timeSlot?.endAt }}</td>
            <td>{{ a.selectedService?.serviceTitle }} - {{ a.selectedService?.serviceDetails }}</td>
            <td style="white-space: nowrap;">
              <el-button type="primary" style="display: inline-block; margin-right: 10px;">Edit</el-button>
              <el-button type="danger" style="display: inline-block;">Delete</el-button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { useAppointStore } from '@/stores/appoint';
import { onMounted } from 'vue';

export default {
  components: {},
  setup() {
    const appointStore = useAppointStore();
    const {
      appointList,
      getAppointList,
      docsList,
      getDocsList,
      serviceList,
      getServiceList,
    } = appointStore;

    onMounted(async () => {
      await getAppointList();
      await getServiceList();
      await getDocsList();
    });

    return {
      appointList,
      docsList,
      serviceList,
    };
  },
};
</script>

<style scoped lang="scss">
table {
  margin: .5rem 2rem;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 1rem !important;
  width: 80dvw;

  thead {
    border-bottom-left-radius: 1rem;
    background-color: #409eff;
    border-radius: 1rem !important;


    th {
      padding: 1rem;
      color: white;
      font-size: 1.2rem;
    }

    th:first-child {
      border-bottom-left-radius: 1rem;
    }

    th:last-child {
      border-bottom-right-radius: 1rem;
    }
  }

  tbody {
    tr {
      button {
        border-radius: 8px;
      }

      td {
        background-color: rgb(247, 247, 253);
        padding: 1rem 2rem;
        margin: 10rem 0 !important;
      }
    }

  }
}
</style>
