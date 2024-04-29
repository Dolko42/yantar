import Link from "next/link";
import { FilterDropdown } from "../ui/FilterDropdown";
import DeveloperBanner from "../ui/DeveloperBanner";

export default function Page() {
  return (
    <div className="p-4 mt-2 lg:mt-8">
      <h1 className="text-skin-base text-5xl">Dashboard</h1>
      {/* <Link href="/">Back home</Link> */}
      <div className="flex justify-between items-end mt-6">
        <h2 className="text-skin-base">Analytics</h2>
        <FilterDropdown />
      </div>
      {/* DASHBOARD GRID  */}
      <div className="flex flex-col gap-2 mt-3 lg:grid lg:grid-cols-2 lg:grid-rows-6">
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0</span>
          <span className="text-sm text-skin-muted">Clicks generated</span>
        </div>
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0</span>
          <span className="text-sm text-skin-muted">Credits earned</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 border-skin-base border rounded-lg row-span-4">
          <div className="flex w-full justify-start">
            <h3 className="text-2xl text-skin-base">Traffic</h3>
          </div>
          <span className="flex items-center text-skin-base text-9xl font-bold h-full pb-8">
            0
          </span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 border-skin-base border rounded-lg row-span-4">
          <div className="flex w-full justify-start">
            <h3 className="text-2xl text-skin-base">Your ads</h3>
          </div>
          <div className="flex items-center pb-8 h-full">
            <Link href="/dashboard/create-ad">
              <button className="rounded-full leading-none bg-skin-subtle text-skin-base text-4xl font-medium p-6">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.68908H6.68907V0H9.31092V6.68908H16V9.31092H9.31092V16H6.68907V9.31092H0V6.68908Z"
                    fill="#000AFF"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0$</span>
          <span className="text-sm text-skin-muted">Spent</span>
        </div>
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0$</span>
          <span className="text-sm text-skin-muted">Avg. CPC</span>
        </div>
      </div>
      <DeveloperBanner />
    </div>
  );
}
