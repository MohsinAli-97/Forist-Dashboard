<template>
  <ag-grid-vue
    class="ag-theme-alpine mt-4"
    style="height: 500px"
    :columnDefs="columnDefs.value"
    :rowData="products"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>
<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store/products";

import ButtonRenderer from "./buttonComponent.vue";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default {
  name: "App",
  components: {
    AgGridVue,
    btnCellRenderer: ButtonRenderer,
  },
  setup() {
    const productStore = useProductStore();

    const { products } = storeToRefs(productStore);
    const gridApi = ref(null);
    const rowData = reactive([]);

    const columnDefs = reactive({
      value: [
        { field: "name", headerName: "Name", floatingFilter: true },
        {
          field: "description",
          headerName: "Description",
          floatingFilter: true,
        },
        { field: "price", headerName: "Price", floatingFilter: true },
        { field: "quantity", headerName: "Units", floatingFilter: true },
        {
          headerName: "Edit",
          cellRenderer: "btnCellRenderer",
          cellRendererParams: {
            clicked: function (field) {
              alert(`Row with id ${field} was clicked`);
            },
          },
        },
      ],
    });
    const editClicked = (params) => {
      console.log("Edit button clicked for:", params.data);
    };
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
    };

    onMounted(() => {
      rowData.value = products.value;
    });

    watch(products.value, (newProducts) => {
      if (gridApi.value) {
        gridApi.value.setRowData(newProducts);
      }
    });
    const onGridReady = (params) => {
      gridApi.value = params.api;
      gridApi.value.setRowData(products.value);
    };

    return {
      onGridReady,
      editClicked,
      products,
      columnDefs,
      rowData,

      defaultColDef,
    };
  },
};
</script>
