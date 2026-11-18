
const sampleWeather = {
  temperature: 24,
  condition: "Sample weather conditions",
  humidity: 65,
  wind: 12,
  unit: "°C",
  source: "Illustrative demonstration data"
};

export const weatherService = {
  async getWeather(location) {
    return {
      ...sampleWeather,
      location: location || "Rwanda"
    };
  }
};

export default weatherService;
