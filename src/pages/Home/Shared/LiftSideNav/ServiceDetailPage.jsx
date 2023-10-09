import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import Navbar from "../Navbar";



const ServiceDetailPage = () => {

    const {id} = useParams();
    return (
        <div>
            
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">

             <h2 className="text-4xl">Details</h2>
                </div>
                <p>{id}</p>

            </div>
            <RightSideNav></RightSideNav>
        </div>
    );
};

export default ServiceDetailPage;