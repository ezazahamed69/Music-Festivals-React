import { FcGoogle} from "react-icons/fc";
import { FaGithub} from "react-icons/fa";
import { AiTwotoneMail} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { AiOutlineWhatsApp} from "react-icons/ai";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
            <h2 className="text-2xl mb-4">Login With</h2>
            <button className="btn btn-neutral w-full text-white">
            <FcGoogle></FcGoogle>
             Google
             </button>
             <button className="btn btn-neutral w-full text-white">
             <AiTwotoneMail></AiTwotoneMail>
             Email
             </button>
             
            <button className="btn btn-neutral w-full text-white">
            
            <FaGithub></FaGithub>
             Github
             </button>
            </div>

           {/* Follow us section */}
           <div className="p-4 space-y-2 mb-4">
            <h2 className="text-2xl mb-4 font-serif text-slate-950 ">Follow Us</h2>
            
             <a className="p-2 flex items-center text-lg border rounded-t-xl" href="#">

            <AiFillFacebook className="mr-3"></AiFillFacebook>
            Facebook
             </a>
             <a className="p-2 flex items-center text-lg border rounded-t-xl" href="#">

              <AiOutlineWhatsApp className="mr-3">
                
              </AiOutlineWhatsApp>
              Whatsapp
             </a>

             {/* Recent Music News */}
             <div className="p-4 space-y-3">
            <h2 className="text-base mb-4 font-extrabold">Recent Music News</h2>
            <ul role="list" className="space-y-1.5"></ul>
             <div className="card card-compact w-full bg-base-100 shadow-xl">
             <figure><img src="https://i.ibb.co/tJFxKcK/picture1.webp" alt="picture" /></figure>
                <div className="card-body">
                  <h2 className="card-title">এই হাওয়া, আমায় নেবে কতদূরে?</h2>
                   <p>"মেজবাউর রহমান সুমনের বহুল আলোচিত এই সিনেমার প্লটের সাথে মিল রেখে এই গানটিও শুট করা হয়েছে "</p>
                   <div className="card-actions justify-center">
                {/* <button className="btn btn-neutral">Read More</button> */}
                <a href="https://getsetrock.com/news/21" className="btn btn-neutral">Read More</a>
              </div>
             </div>
              </div>
            </div>

            {/* 2nd card */}

            <div className="p-4 space-y-3">
         
            <ul role="list" className="space-y-1.5"></ul>
             <div className="card card-compact w-full bg-base-100 shadow-xl">
             <figure><img src="https://i.ibb.co/vBfgR6K/picture2.webp" alt="picture2" /></figure>
                <div className="card-body">
                  <h2 className="card-title">অন্ধ আক্রোশ ভাঙবেই</h2>
                   <p>"যারা মাইলেসের ইকবাল আসিফ জুয়েল ভাইয়ের রক সিরিজের মিক্সড এ্যালবামগুলো শুনেছেন, ক্রিপটিক ফেইটের এই গানটি তাঁরা শুনেছেন হয়তো। "</p>
                   <div className="card-actions justify-center">
               
                <a href="https://getsetrock.com/news/29" className="btn btn-neutral">Read More</a>
              </div>
             </div>
              </div>
            </div>

             
            </div>
        </div>
    );
};

export default RightSideNav;