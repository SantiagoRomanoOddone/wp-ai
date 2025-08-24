export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white text-center p-10">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Reach out today and let's see how SimpleCode can help your business grow with AI.
      </p>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
