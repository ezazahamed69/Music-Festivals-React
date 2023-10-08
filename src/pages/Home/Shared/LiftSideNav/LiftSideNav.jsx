import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LiftSideNav = () => {
    const [services, setServices] = useState ([])
    useEffect (() =>{
        fetch ('services.json')
        .then (res => res.json())
        .then (data => setServices(data))
    }
    ,[])
    return (
        // <div className=" space-y-6">
        //     <p className=" font-extrabold ml-4">Our Services</p>
        //     {
        //        services.map(service  => <Link className="block ml-4"
        //        key={service.id}>
        //        to = {`/service/${catagory.id}`}
        //         {
        //         service.name}
        //         </Link>
        //         ) 
        //     }
        // </div>

//     );
// };

      <div className="space-y-6">
        <p className="font-bold ml-4 text-xl font-poppins text-center ">Our Services</p>
        {services.map((service) => (
          <div className="card card-compact w-full bg-base-100 shadow-xl" key={service.id}>
            <figure>
              <img src={`/images/${service.image}`} alt={service.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.description}</p>
              <p className=" font-bold">Price: {service.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">{service.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default LiftSideNav;