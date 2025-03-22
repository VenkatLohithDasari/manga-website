import { truncateText } from '@/lib/utils';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Manga Website</h1>
      <p className="mb-4">
        {truncateText(
          'This is a sample manga website built with Next.js, MongoDB, TailwindCSS, and TypeScript. We are currently setting up the project structure.',
          100
        )}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Sample cards that will be replaced with real content later */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-md">
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h2 className="font-bold text-lg">Sample Manga {i + 1}</h2>
            <p className="text-gray-600 text-sm">
              This is a placeholder for manga content.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
