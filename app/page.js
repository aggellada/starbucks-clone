import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-8 w-full h-[75vh] md:flex md:px-8">
        <div className="w-full h-1/2 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96799.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 sb-green text-center justify-center items-center gap-3 lg:gap-12 p-12 text-white md:h-full">
          <h1 className="text-xl lg:text-3xl">More reasons to stay awhile</h1>
          <h3 className="text-sm lg:text-xl">
            Mugs, glasses and the condiment bar are back—and all for-here orders
            include freshly brewed refills on coffee and tea.
          </h3>
          <div>
            <button className="text-md font-bold border px-4 py-1 rounded-full">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full h-[75vh] md:flex md:flex-row-reverse md:px-8">
        <div className="w-full h-1/2 bg-slate-200 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96803.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 sb-green text-center gap-4 p-12 lg:gap-12 text-white md:h-full justify-center items-center">
          <h1 className="text-xl lg:text-3xl">Shaken to perfection</h1>
          <h3 className="text-sm lg:text-xl">
            Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
            Iced Hazelnut Oatmilk Shaken Espresso—made with Starbucks® Blonde
            Espresso, and just 150 calories for a grande.
          </h3>
          <div>
            <button className="text-lg font-bold border px-6 py-1 rounded-full">
              Add to order
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 w-full h-[75vh] md:flex md:px-8 pb-8">
        <div className="w-full h-1/2 bg-slate-200 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96854.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 sb-green text-center justify-center items-center gap-4 lg:gap-12 p-12 text-white md:h-full">
          <h1 className="text-lg lg:text-3xl">More reasons to stay awhile</h1>
          <h3 className="text-sm lg:text-xl">
            Mugs, glasses and the condiment bar are back—and all for-here orders
            include freshly brewed refills on coffee and tea.
          </h3>
          <div>
            <button className="text-lg font-bold border px-6 py-1 rounded-full">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
