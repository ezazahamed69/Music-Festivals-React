import { useLoaderData } from "react-router-dom";
import Marquee from "./Marqueee";
import Header from "./Shared/Header/Header";
import LiftSideNav from "./Shared/LiftSideNav/LiftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import Card from "./NewsCard";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>

            <Header></Header>
            <Marquee></Marquee>
            <Navbar></Navbar>
            {/* <div className="text-3xl font-poppins">This is Home XD</div> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LiftSideNav></LiftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    {/* <h2 className="text-4xl">Music fest coming soon...</h2> */}
                {
                    news.map(aNews => <NewsCard
                    key={aNews._id}
                    news={aNews}
                    ></NewsCard>
                    )
                }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;