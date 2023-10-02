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
    salesRepresentaion: "Daily",
    sales: [],
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
        ,
      ];
      state.saledata.forEach((sale) => {
        const date = new Date(sale.saleTime);
        const dayName = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
        }).format(date);

        const dayObject = results.find((obj) => obj.xAxisLabel === dayName);

        if (dayObject) {
          dayObject.totalSales += sale.ItemsSold;
          dayObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
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
        const monthName = new Intl.DateTimeFormat("en-US", {
          month: "long",
        }).format(date);

        const monthObject = results.find((obj) => obj.xAxisLabel === monthName);

        if (monthObject) {
          monthObject.totalSales += 1;
          monthObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
        }
      });
      state.saleDataMonth = results;

      return;
    },

    getSaleDataPerHour: (state) => {
      const results = [];
      for (let i = 0; i < 24; i++) {
        results.push({ xAxisLabel: i, totalSales: 0, totalRevenue: 0 });
      }

      state.saledata.forEach((sale) => {
        const saleDate = new Date(sale.saleTime);
        const hour = saleDate.getHours();

        const hourObject = results[hour];
        hourObject.totalSales += 1;
        hourObject.totalRevenue += parseFloat(sale.revenue.replace("$", ""));
      });
      state.saleDataHour = results;
      return;
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

    // getTotalSalesRevenue: (state) => {
    //   state.totalRevenue = state.saledata.reduce(
    //     (acu, curr) => acu + curr.revenue,
    //     0
    //   );

    //   return;
    // },
    // getTotalItemsSold: (state) => {
    //   state.totalSales = state.saledata.reduce(
    //     (acu, curr) => acu + curr.ItemsSold,
    //     0
    //   );

    //   return;
    // },
  },
  actions: {
    increment() {
      this.count++;
    },
    // getSaleDataPerDay() {
    //   const results = {
    //     Sunday: { totalSales: 0, totalRevenue: 0 },
    //     Monday: { totalSales: 0, totalRevenue: 0 },
    //     Tuesday: { totalSales: 0, totalRevenue: 0 },
    //     Wednesday: { totalSales: 0, totalRevenue: 0 },
    //     Thursday: { totalSales: 0, totalRevenue: 0 },
    //     Friday: { totalSales: 0, totalRevenue: 0 },
    //     Saturday: { totalSales: 0, totalRevenue: 0 },
    //   };
    //   this.saledata.forEach((sale) => {
    //     const date = new Date(sale.saleTime);
    //     const day = new Intl.DateTimeFormat("en-US", {
    //       weekday: "long",
    //     }).format(date);

    //     results[day].totalSales += sale.ItemsSold;
    //     results[day].totalRevenue += parseFloat(sale.revenue.replace("$", ""));
    //   });
    //   //this.saleDataDay = results;
    //   return results
    // },
    getChartDataAction(val) {
      console.log(val);
      if (val == "Daily") {
        this.salesRepresentaion = val;

        this.sales = this.saleDataHour;
      } else if (val == "Weekly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataDay;
        console.log(this.sales);
      } else if (val == "Monthly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataMonth;
        console.log(this.sales);
      } else if (val == "Yearly") {
        this.salesRepresentaion = val;
        this.sales = this.saleDataYear;
        console.log(this.sales);
      }
    },
    // generateDays(days) {
    //   let result = {};
    //   for (let i = 1; i <= days; i++) {
    //     result[`Day ${i}`] = sales;
    //   }
    //   return result;
    // },
    // generateMonth() {
    //   const monthlySales = {
    //     January: generateDays(31),
    //     February: generateDays(28),
    //     March: generateDays(31),
    //     April: generateDays(30),
    //     May: generateDays(31),
    //     June: generateDays(30),
    //     July: generateDays(31),
    //     August: generateDays(31),
    //     September: generateDays(30),
    //     October: generateDays(31),
    //     November: generateDays(30),
    //     December: generateDays(31),
    //   };
    // },
  },
});
