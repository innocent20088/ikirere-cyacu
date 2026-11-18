
const sampleAlerts = [
  {
    id: 1,
    title: "Demonstration climate notice",
    description: "This is an example notification for frontend testing.",
    location: "Rwanda",
    severity: "info",
    date: "Demo"
  }
];

export const alertService = {
  async getAlerts() {
    return sampleAlerts;
  }
};

export default alertService;
