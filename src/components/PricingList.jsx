import { pricing } from "../constants/index";
import Button from "./Button";
import { check } from "../assets";
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className=" text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "" : "mailto:syahrindradr@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>
          <ul>
            {item.features.map((item, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6 gap-x-4"
              >
                <img src={check} alt="Checklist" width={24} height={24} />
                <p className="body-2">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
