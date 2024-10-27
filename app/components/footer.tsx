export default function Footer(){
    return (
        <footer className="bg-[#C3C0C0] pt-16 pb-11">
            <div className="flex justify-center items-center gap-10   ">
            <div><img className="h-[20px] w-[20px]"  src="images\fb.png" alt="fb" /></div>
             <div><img className="h-[20px] w-[20px]" src="images\insta.png" alt="insta" /></div>
             <div><img className="h-[20px] w-[20px]" src="images\Group.png" alt="group" /></div>
             <div><img className="h-[20px] w-[20px]" src="images\Linkedin.png" alt="Linkedin" /></div>
            </div>
             <div className=" ">
                <p className="text-sm font-bold flex justify-center items-center p-6  ">Copyright  @2020 All Rights Reserved</p>
                 
             </div>
        </footer>
    )
}