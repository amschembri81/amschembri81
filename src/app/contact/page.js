export default function ContactPage() {
    return (
      <main className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center justify-center pt-32">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
          I&apos;m open to implementation manager, customer success, and technical
          account management roles — and always happy to talk EdTech, automation, or
          AI-native workflows. Feel free to reach out!
        </p>
  
        <div className="space-y-4 text-center">
          <p>
            Email:{" "}
            <a
              href="mailto:amschembri81@gmail.com"
              className="text-blue-400 hover:underline"
            >
              amschembri81@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/amschembri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/amschembri
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/amschembri81"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/amschembri81
            </a>
          </p>
        </div>
      </main>
    );
  }
  