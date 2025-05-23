import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-8 w-full h-[75vh] md:flex md:px-8">
        <div className="w-full h-1/2 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96827.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 bg-green-100 text-center justify-center items-center gap-3 lg:gap-12 p-12 md:h-full text-black">
          <h1 className="text-xl lg:text-3xl">
            New Blackberry Sage Refreshers
          </h1>
          <h3 className="text-sm lg:text-xl">
            Sweet blackberry flavors and notes of sage are shaken with real
            blackberry pieces—enjoyed alone or with lemonade or coconutmilk.
          </h3>
          <div>
            <button className="text-md font-bold border border-black px-4 py-1 rounded-full">
              See our Seasonal Refreshers
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 w-full h-[75vh] md:flex md:flex-row-reverse md:px-8">
        <div className="w-full h-1/2 bg-slate-200 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96868.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 bg-green-50 text-center gap-4 p-12 lg:gap-12 text-black md:h-full justify-center items-center">
          <h1 className="text-xl lg:text-3xl">Valentine’s classics are back</h1>
          <h3 className="text-sm lg:text-xl">
            Embrace the season with a Chocolate Hazelnut Cookie Cold Brew and
            Chocolate-Covered Strawberry Crème Frappuccino® blended beverage.
          </h3>
        </div>
      </div>
      <div className="pt-8 w-full h-[75vh] md:flex md:px-8 pb-8">
        <div className="w-full h-1/2 bg-slate-200 md:h-full">
          <img
            className="w-full h-full object-cover"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96805.jpg"
          />
        </div>
        <div className="w-full flex flex-col h-1/2 bg-green-100 text-center justify-center items-center gap-4 lg:gap-12 p-12 text-black md:h-full">
          <h1 className="text-lg lg:text-3xl">Iced Shaken Espressos</h1>
          <h3 className="text-sm lg:text-xl">
            Starbucks® Blonde espresso combined with hazelnut, brown sugar or
            classic syrup, shaken with ice, then finished with milk or oatmilk.
          </h3>
          <div>
            <button className="text-sm font-bold border border-black px-6 py-1 rounded-full">
              See our Shaken Expressos
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex gap-4">
        <div className="pt-8 w-full h-[75vh] md:pl-8 pb-8 md:pt-2">
          <div className="w-full h-1/2 bg-slate-200 ">
            <img
              className="w-full h-full object-cover"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96783.jpg"
            />
          </div>
          <div className="w-full flex flex-col h-1/2 bg-yellow-900 text-center justify-center items-center gap-4 lg:gap-12 p-12 text-white ">
            <h1 className="text-lg lg:text-3xl">New Cortado</h1>
            <h3 className="text-sm lg:text-xl">
              Three ristretto shots of Starbucks® Blonde Espresso combined with
              steamed whole milk and served in an 8 fl oz short cup.
            </h3>
            <div>
              <button className="text-sm font-bold border border-white px-6 py-1 rounded-full">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full h-[75vh] md:pr-8 pb-8 md:pt-2">
          <div className="w-full h-1/2 bg-slate-200 ">
            <img
              className="w-full h-full object-cover"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96783.jpg"
            />
          </div>
          <div className="w-full flex flex-col h-1/2 bg-yellow-900 text-center justify-center items-center gap-4 md:p-4 lg:gap-12 p-12 text-white ">
            <h1 className="text-lg lg:text-3xl">
              New Brown Sugar Oatmilk Cortado
            </h1>
            <h3 className="text-sm lg:text-xl">
              Three ristretto shots of Starbucks® Blonde Espresso, brown sugar
              syrup, cinnamon and steamed oatmilk in an 8 fl oz short cup.
            </h3>
            <div>
              <button className="text-sm font-bold border border-white px-6 py-1 rounded-full">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex gap-4">
        <div className="pt-8 w-full h-[75vh] md:pl-8 pb-8 md:pt-2">
          <div className="w-full h-1/2 bg-slate-200 ">
            <img
              className="w-full h-full object-cover"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96805.jpg"
            />
          </div>
          <div className="w-full flex flex-col h-1/2 bg-lime-100 text-center justify-center items-center gap-4 lg:gap-12 p-12 text-black ">
            <h1 className="text-lg lg:text-3xl">Pistachio Latte</h1>
            <h3 className="text-sm lg:text-xl">
              The sweet flavor of pistachio is combined with espresso and
              steamed milk, then finished with a brown-buttery topping.
            </h3>
            <div>
              <button className="text-sm font-bold border border-black px-6 py-1 rounded-full">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full h-[75vh] md:pr-8 pb-8 md:pt-2">
          <div className="w-full h-1/2 bg-slate-200 ">
            <img
              className="w-full h-full object-cover"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96805.jpg"
            />
          </div>
          <div className="w-full flex flex-col h-1/2 bg-lime-100 md:p-4 text-center justify-center items-center gap-4 lg:gap-12 p-12 text-black ">
            <h1 className="text-lg lg:text-3xl">Pistachio Cream Cold Brew</h1>
            <h3 className="text-sm lg:text-xl">
              Starbucks® Cold Brew sweetened with vanilla syrup, then layered
              with pistachio cream cold foam and topped with brown-buttery
              sprinkles.
            </h3>
            <div>
              <button className="text-sm font-bold border border-black px-6 py-1 rounded-full">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
