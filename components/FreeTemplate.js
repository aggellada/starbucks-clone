export default function FreeTemplate({ header, subText, img }) {
  return (
    <div className="w-full h-full md:flex">
      <div className="w-full h-1/2  md:h-full">
        <img src={img} className="w-full h-full object-contain" />
      </div>
      <div className="w-full h-1/2 text-center flex flex-col gap-4 pt-2 px-8 md:h-full md:justify-center">
        <h1 className="font-bold lg:text-3xl">{header}</h1>
        <p className="font-light lg:text-xl lg:font-base">{subText}</p>
      </div>
    </div>
  );
}
