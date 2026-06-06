import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sa-white font-sans">
      {/* Header */}
      <header className="bg-sa-dark-blue text-white py-4 px-8 flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Scottish Airways"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-bold">Scottish Airways eCrew Portal</h1>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-sa-blue to-sa-dark-blue text-white py-32 px-8">
        <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
          <h2 className="text-5xl font-bold">Welcome to eCrew Portal</h2>
          <p className="text-xl leading-8">
            Manage your crew scheduling, flight assignments, and applications all in one place.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-8">
            <a
              href="/login"
              className="px-8 py-3 bg-sa-white text-sa-dark-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Login
            </a>
            <a
              href="/applications"
              className="px-8 py-3 border-2 border-sa-white text-sa-white font-semibold rounded-lg hover:bg-sa-dark-blue transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sa-dark-blue text-white py-6 px-8 text-center">
        <p>&copy; 2026 Scottish Airways. All rights reserved.</p>
      </footer>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
