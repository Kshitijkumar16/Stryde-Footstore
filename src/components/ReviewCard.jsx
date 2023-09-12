import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer Profile Image"
        width={120}
        height={120}
        className=" rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center info-text max-w-sm mt-6">
        {feedback}
      </p>
      <div className="mt-3 flex gap-2.5 justify-center items-center">
        <img
          src={star}
          alt="Star Icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-palanquin text-3xl font-bold text-center mt-1">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
