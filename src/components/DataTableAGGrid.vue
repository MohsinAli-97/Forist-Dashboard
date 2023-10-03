<template>
  <div class="search-box">
    <input
      v-model="searchString"
      @input="applyFilter"
      placeholder="Search..."
    />
  </div>
  <button @click="deselectRows">deselect rows</button>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 500px"
    :columnDefs="columnDefs.value"
    :rowData="rowData.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    @cell-clicked="cellWasClicked"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../store/products";

const productStore = useProductStore();

const { products } = storeToRefs(productStore);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null);
    const searchString = ref("");

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const rowData = reactive([]);

    const columnDefs = reactive({
      value: [
        { field: "name", headerName: "Name" },
        { field: "description", headerName: "Description" },
        { field: "price", headerName: "Price" },
        { field: "quantity", headerName: "Units" },
        {
          headerName: "Edit",
          cellRenderer: (params) => {
            return `<v-btn small @click="editClicked(params) variant="outlined"">Edit</v-btn>`;
          },
        },
      ],
    });
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
    };

    onMounted(() => {
      rowData.value = products.value;
    });

    const applyFilter = () => {
      gridApi.value.setQuickFilter(searchString.value);
    };

    return {
      onGridReady,
      columnDefs,
      rowData,
      searchString,
      applyFilter,
      defaultColDef,
      cellWasClicked: (event) => {
        console.log("cell was clicked", event);
      },
      deselectRows: () => {
        gridApi.value.deselectAll();
      },
    };
  },
};
</script>
