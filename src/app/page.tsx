import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Fetch content from Supabase
  const { data, error } = await supabase
    .from("aws-amplify")
    .select("content")
    .single();

  const content = data?.content || "Welcome to AWS Amplify!";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* AWS Amplify Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                AWS Amplify
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Build full-stack applications with ease
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-center text-lg md:text-xl">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
