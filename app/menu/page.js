import Link from "next/link";

const DRINKS = [
  {
    name: "Hot Coffee",
    img: "https://images.herzindagi.info/image/2024/Aug/How-To-Make-Hot-Coffee-At-Home.jpg",
  },
  {
    name: "Cold Coffee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSepnkkmLxKc5hjWXXUVAEIDYjPxKV_RqATw&s",
  },
  {
    name: "Hot Tea",
    img: "https://media.post.rvohealth.io/wp-content/uploads/2022/01/hot-tea-steaming-steeping-1200-628-facebook-1200x628.jpg",
  },
  {
    name: "Cold Tea",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRih1fkHV52S93WihECkU7JY6AQe1cRs40YiA&s",
  },
  {
    name: "Refreshers",
    img: "https://www.foodandwine.com/thmb/uDcO7GMWP3NqyUy4fGQhTFmpdNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Starbucks-Spicy-Refreshers-FT-BLOG0424-2a27c6129e7948ff80f84126e9b13c83.jpg",
  },
  {
    name: "Frappuccino Blended Beverage",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdgdstHv5MJr2A-gsVWVO8gnXCIlGhfgbSQ&s",
  },
  {
    name: "Iced Energy",
    img: "https://globalassets.starbucks.com/digitalassets/products/bev/TropicalCitrusEnergyDrink.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Hot Chocolate, Lemonade & More",
    img: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Bottled Beverages",
    img: "https://c8.alamy.com/comp/M50RAD/bottles-of-assorted-global-soft-drinks-M50RAD.jpg",
  },
];

const FOOD = [
  {
    name: "Breakfast",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESGfyHJmKOf713JLP0QcTLvPkNHcLHUPUhw&s",
  },
  {
    name: "Bakery",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1-a160slZqvWSwYCUK7Tzi5ncUTrnNe3Ug&s",
  },
  {
    name: "Treats",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqD_0tmGxNsnUDcmUHrBwjZzccMUsz9kLG_Q&s",
  },
  {
    name: "Lunch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nnk-z8FxUSWAKrV6UF8XoALkikT_eGJCyw&s",
  },
  {
    name: "Snacks",
    img: "https://www.eatingwell.com/thmb/t963s-_JWzHMyPlxHUXM9EFjb_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1149135424-377d295fd8f24168ae2d1b818295a819.jpg",
  },
];

const AT_HOME = [
  {
    name: "Whole Bean",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG-Do7UQQ977ZI-QPNebkonqieBrZBlSFXg&s",
  },
  {
    name: "Via Instant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYPjffCiFVnzodlgZIYcrgBWQ6KZfyjvSOQ&s",
  },
  {
    name: "Shopping Bag",
    img: "https://globalassets.starbucks.com/digitalassets/products/merch/SBX20210405_SirenShopperBag.jpg?impolicy=1by1_medium_630",
  },
];

export default function MenuPage() {
  return (
    <>
      <nav className="w-full bg-gray-400 h-[50px]">
        <ul className="flex w-full h-full gap-4 items-center pl-4 md:pl-24">
          <li className="text-sm">Menu</li>
          <Link href="/menu/featured">
            <li className="text-sm">Featured</li>
          </Link>
        </ul>
      </nav>
      <div className="w-full pl-4 pb-4 md:pl-24 lg:flex">
        {/* MENU LIST */}
        <div className="hidden lg:block lg:w-[350px]">
          <div className="w-full h-[80px] flex items-center">
            <h1 className="font-semibold text-xl">Drinks</h1>
          </div>
          <div className="flex flex-col gap-4">
            {DRINKS.map((drink) => (
              <h1>{drink.name}</h1>
            ))}
          </div>
          <div className="w-full h-[80px] flex items-center">
            <h1 className="font-semibold text-xl">Food</h1>
          </div>
          <div className="flex flex-col gap-4">
            {FOOD.map((food) => (
              <h1>{food.name}</h1>
            ))}
          </div>
          <div className="w-full h-[80px] flex items-center">
            <h1 className="font-semibold text-xl">At Home Coffee</h1>
          </div>
          <div className="flex flex-col gap-4">
            {AT_HOME.map((atHome) => (
              <h1>{atHome.name}</h1>
            ))}
          </div>
        </div>
        {/* MENU ITEMS */}
        <div className="w-full h-full lg:w-3/4">
          <div className="w-full h-[60px] flex items-center">
            <h1 className="font-semibold text-xl">Drinks</h1>
          </div>
          <div className="h-max w-full grid grid-row-9 gap-4 md:grid-cols-2 lg:w-3/4">
            {DRINKS.map((drink) => (
              <div className="flex items-center gap-5">
                <img
                  src={drink.img}
                  className="w-[75px] h-[75px] object-cover rounded-full lg:w-[120px] lg:h-[120px]"
                />
                <h1 className="lg:text-xl">{drink.name}</h1>
              </div>
            ))}
          </div>
          <div>
            <div className="w-full h-[60px] flex items-center">
              <h1 className="font-semibold text-xl">Food</h1>
            </div>
            <div className="h-max w-full grid grid-row-5 gap-4 md:grid-cols-2 lg:w-3/4">
              {FOOD.map((food) => (
                <div className="flex items-center gap-5">
                  <img
                    src={food.img}
                    className="w-[75px] h-[75px] object-cover rounded-full lg:w-[120px] lg:h-[120px]"
                  />
                  <h1 className="lg:text-xl">{food.name}</h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full h-[60px] flex items-center">
              <h1 className="font-semibold text-xl">At Home Coffee</h1>
            </div>
            <div className="h-max w-full grid grid-row-3 gap-4 md:grid-cols-2 lg:w-3/4">
              {AT_HOME.map((home) => (
                <div className="flex items-center gap-5">
                  <img
                    src={home.img}
                    className="w-[75px] h-[75px] object-cover rounded-full lg:w-[120px] lg:h-[120px]"
                  />
                  <h1 className="lg:text-xl">{home.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
