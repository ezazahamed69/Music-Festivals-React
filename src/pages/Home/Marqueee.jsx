import Marquee from "react-fast-marquee";

const Marqueee = () => {
    return (
        <div className="flex">
            <button className="btn btn-neutral text-slate-100 mr-2">Upcoming Events</button>
            <Marquee speed={180} className="text-sm text-red-400">
            30 bands to perform at Dhaka Summer Con from 10-12 October!
            </Marquee>
            <Marquee speed={240} className="text-sm">
            BAMBA-Channel-i Band Music Fest-23 on Dec 2. 
            </Marquee>
        </div>
    );
};

export default Marqueee;