import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="Subscribe"
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col "
    >
      <h3 className="font-bold text-4xl font-palanquin leading-[68px] lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletters
      </h3>
      <div className="w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full lg:max-w-[40%]">
        <input
          type="text"
          className="input placeholder:bg-tint-peach"
          placeholder="subscribe@stryde.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth shadow="none"/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
