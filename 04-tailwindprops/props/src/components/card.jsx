function ClaimIcon() {
  return (
    <svg
      className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
    </svg>
  );
}

function Card({
  name,
  info,
  title = "Need help in Claim?",
  description = "Follow this step-by-step guide to certify your weekly benefits.",
  linkText = "See our guideline",
  linkHref = "#",
  image,
  location,
  email,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900">
      <div
        className={`max-w-sm p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out ${
          image
            ? "bg-gray-100 dark:bg-gray-700"
            : "bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
        }`}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 dark:border-gray-600"
            />
            <h2 className="text-xl font-semibold dark:text-white">{name}</h2>
            {location && <p className="text-gray-600 dark:text-gray-300 mb-2">📍 {location}</p>}
            {email && <p className="text-gray-600 dark:text-gray-300">📧 {email}</p>}
          </>
        ) : (
          <>
            <ClaimIcon />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <div className="space-y-2 mb-4">
              <p className="font-bold font-mono bg-amber-300 p-2 rounded shadow">{name}</p>
              <p className="font-bold font-mono bg-amber-300 p-2 rounded shadow">{info}</p>
            </div>
          </>
        )}

        {linkText && (
          <a
            href={linkHref}
            className="inline-flex items-center text-blue-600 hover:underline font-medium mt-4"
          >
            {linkText}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
