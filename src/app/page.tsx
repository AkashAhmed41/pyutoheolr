import { fetchHomepageData } from "@/lib/services/HomeService";

export default async function Home() {
  const homepageData = await fetchHomepageData();
  console.log("Homepage Data:", homepageData);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Movie App</h1>
        <p>Check the server console for data.</p>
      </main>
    </div>
  );
}
