import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray"></p>
        <h3 className="mt-2 text-xl leading-normal font-bold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;