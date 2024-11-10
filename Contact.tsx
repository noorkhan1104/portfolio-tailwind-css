

// import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-6">Contact Me</h1>
        
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Id Love to Hear From You!</h2>
          <form
            action="#"
            method="POST"
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
              
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          {/* <Link href="/">
            <a className="text-blue-600 hover:underline text-lg">Back to Home</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
