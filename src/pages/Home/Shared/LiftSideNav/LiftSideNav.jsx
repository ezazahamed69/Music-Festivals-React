import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LiftSideNav = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="space-y-6">
      <p className="font-bold ml-4 text-xl font-poppins text-center">
        Our Services
      </p>
      {services.map((service) => (
        <div
          className="card card-compact w-full bg-base-100 shadow-xl"
          key={service.id}
        >
          <figure>
            <img src={`/images/${service.image}`} alt={service.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.name}</h2>
            <p>{service.description}</p>
            <p className="font-bold">Price: {service.price}</p>
            <div className="card-actions justify-end">
              {/* Use Link to navigate to the service detail page */}
              <Link to={`/service/${service.id}`} className="btn btn-neutral">
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiftSideNav;
