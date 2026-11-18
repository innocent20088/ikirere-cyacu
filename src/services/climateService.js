
const climateService = {
  async getTemperature() {
    return [
      { month: "January", value: 24 },
      { month: "February", value: 25 },
      { month: "March", value: 23 },
      { month: "April", value: 22 },
      { month: "May", value: 21 },
      { month: "June", value: 20 }
    ];
  },

  async getRainfall() {
    return [
      { month: "January", value: 85 },
      { month: "February", value: 90 },
      { month: "March", value: 120 },
      { month: "April", value: 150 },
      { month: "May", value: 100 },
      { month: "June", value: 40 }
    ];
  }
};

export default climateService;
