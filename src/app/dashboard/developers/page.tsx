import APIKey from "@/app/ui/APIKey";

export default function Page() {
  return (
    <div className="p-4 mt-2 lg:mt-8">
      <h1 className="text-skin-base text-5xl">Developers</h1>
      <h3 className="text-skin-base text-2xl mt-6">1. Copy your API key</h3>
      <div className="md:grid md:grid-cols-4 text-skin-base border-b pb-1 border-skin-base mt-6 hidden">
        <span className="uppercase col-span-1">Name</span>
        <span className="uppercase col-span-2">Key</span>
        <span className="uppercase col-span-1 text-right">Created at</span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 text-skin-base border-b pb-1 border-skin-base mt-6">
        <span className="col-span-1 font-semibold">Publishable key</span>
        <div className="col-span-2 font-mono cursor-pointer text-skin-base py-6 px-2 rounded-lg my-2 bg-white md:py-0 md:px-0 md:rounded-none md:bg-transparent md:my-0">
          <APIKey apiKey="bfielabFIAhf328fgO326G8263gf8263G2g3f" />
        </div>
        <span className="uppercase col-span-1 md:text-right md:hidden">
          Created at
        </span>
        <span className="col-span-1 md:text-right font-semibold">Feb 7</span>
      </div>
    </div>
  );
}
