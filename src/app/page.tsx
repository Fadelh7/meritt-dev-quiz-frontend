import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-4 max-w-7xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          {/* All Contacts */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/all-contacts?page=1&limit=4"
            >
              All Contacts
            </Link>
          </div>

          {/* All Products */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/all-products?page=1&limit=4"
            >
              All Products
            </Link>
          </div>

          {/* Contact Us */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Title and Documentation */}
        <h1 className="text-3xl font-semibold">
          Refer to Readme to know more about project structure and requirements
        </h1>

        <iframe
          src="https://app.tango.us/app/embed/e60fe546-32aa-446d-ba7e-df9af9ffaddd"
          className="min-h-[640px]"
          sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
          security="restricted"
          title="Apollo Server: Querying Products with Pagination and Search"
          width="100%"
          height="100%"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
}
