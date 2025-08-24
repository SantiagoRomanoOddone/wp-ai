export default function Services() {
  const services = [
    { title: "Prediction", description: "Forecast trends and outcomes using AI models." },
    { title: "Forecasting", description: "Plan resources and sales with accurate forecasting." },
    { title: "Clustering", description: "Group data intelligently to understand patterns." },
    { title: "Insights & Analytics", description: "Transform raw data into actionable insights." },
  ];

  return (
    <section id="services" className="min-h-screen bg-white text-center p-10">
      <h2 className="text-4xl font-bold mb-8 text-blue-800">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">{s.title}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
