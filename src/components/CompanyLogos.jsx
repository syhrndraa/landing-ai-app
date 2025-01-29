import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 tagline text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <div className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] trasform"
            key={index}
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
