export default function Team() {
  const members = [
    { name: "Santiago Romano", role: "Founder & AI Engineer" },
    // You can add more team members here
  ];

  return (
    <section className="min-h-screen bg-blue-50 text-center p-10">
      <h2 className="text-4xl font-bold mb-8 text-blue-800">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((m, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow w-72 hover:shadow-lg transition">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-700">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
