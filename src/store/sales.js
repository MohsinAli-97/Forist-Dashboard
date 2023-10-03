import { defineStore } from "pinia";
import saleData from "../data/SaleData.json";
export const useSalesStore = defineStore("sales", {
  state: () => ({
    saledata: saleData,
    saleDataDay: [],
    saleDataMonth: [],
    saleDataHour: [],
    saleDataYear: [],
    totalSales: 0,
    totalRevenue: 0,
    salesRepresentaion: "Monthly",
    sales: [],
    rejectedSales: [
      { saleId: "TX100231", saleAmount: "$11.90" },
      { saleId: "TX101231", saleAmount: "$178" },
      { saleId: "TX120875", saleAmount: "$39" },
    ],
  }),
  getters: {
    getSaleDataPerDay: (state) => {
      const results = [
        { xAxisLabel: "Sunday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Monday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Tuesday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Wednesday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Thursday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Friday", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "Saturday", totalSales: 0, totalRevenue: 0 },
      ];

      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);

      state.saledata.forEach((sale) => {
        const saleDate = new Date(sale.saleTime);

        if (saleDate >= oneWeekAgo && saleDate <= today) {
          const dayName = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
          }).format(saleDate);

          const dayObject = results.find((obj) => obj.xAxisLabel === dayName);

          if (dayObject) {
            dayObject.totalSales += sale.ItemsSold;
            dayObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
          }
        }
      });

      state.saleDataDay = results;
      return results;
    },

    getSaleDataPerMonth: (state) => {
      const results = [
        { xAxisLabel: "January", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "February", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "March", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "April", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "May", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "June", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "July", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "August", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "September", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "October", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "November", totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: "December", totalSales: 0, totalRevenue: 0 },
      ];

      state.saledata.forEach((sale) => {
        const date = new Date(sale.saleTime);
        const year = date.getFullYear();

        if (year === 2023) {
          const monthName = new Intl.DateTimeFormat("en-US", {
            month: "long",
          }).format(date);

          const monthObject = results.find(
            (obj) => obj.xAxisLabel === monthName
          );

          if (monthObject) {
            monthObject.totalSales += 1;
            monthObject.totalRevenue += parseFloat(
              sale.revenue.replace("$", "")
            );
          }
        }
      });

      state.saleDataMonth = results;

      return results;
    },

    getSaleDataPerHour: (state) => {
      const results = [];
      for (let i = 0; i < 24; i++) {
        results.push({ xAxisLabel: i, totalSales: 0, totalRevenue: 0 });
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      state.saledata.forEach((sale) => {
        const saleDate = new Date(sale.saleTime);

        if (saleDate >= yesterday && saleDate < today) {
          const hour = saleDate.getHours();
          const hourObject = results[hour];
          hourObject.totalSales += sale.ItemsSold;
          hourObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
        }
      });

      state.saleDataHour = results;

      return results;
    },

    getSaleDataPerYear: (state) => {
      const results = [
        { xAxisLabel: 2017, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2018, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2019, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2020, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2021, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2022, totalSales: 0, totalRevenue: 0 },
        { xAxisLabel: 2023, totalSales: 0, totalRevenue: 0 },
      ];

      state.saledata.forEach((sale) => {
        const saleDate = new Date(sale.saleTime);
        const yearValue = saleDate.getFullYear();

        const yearObject = results.find((obj) => obj.xAxisLabel === yearValue);

        if (yearObject) {
          yearObject.totalSales += 1;
          yearObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
        }
      });
      state.saleDataYear = results;
      return;
    },

    getTotalRevenueCount: (state) => {
      const initialValue = 0;
      state.totalRevenue = state.sales.reduce((acu, curr) => {
        return acu + curr.totalRevenue;
      }, initialValue);
    },
    getTotalSaleCount: (state) => {
      const initialValue = 0;
      state.totalSales = state.sales.reduce((acu, curr) => {
        return acu + curr.totalSales;
      }, initialValue);
    },
  },
  actions: {
    getChartDataAction(val) {
      if (val == "Daily") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataHour;
      } else if (val == "Weekly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataDay;
      } else if (val == "Monthly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataMonth;
      } else if (val == "Yearly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataYear;
      }
    },

    orderCompleteAction(val) {
      this.saledata.push(val);
    },
    orderRejectAction(val) {
      this.rejectedSales.push(val);
    },
  },
});
