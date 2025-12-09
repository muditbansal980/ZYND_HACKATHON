
export default function HeroBanner(){
    return(
    <div className="herobanner w-[100%] bg-[oklch(0.21_0.06_258.54)] text-white p-[20px] flex flex-col gap-[40px]">
            <div>
                <h1 className="text-[50px] font-[bold] bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent font-extrabold">Your AI Government<br/> Benefits Assistant</h1>
            </div>
            <div className="">
                <button className="transform hover:scale-110 transition-all duration-200 cursor-pointer bg-[oklch(0.76_0.07_260.19)] p-[20px] rounded-[20px]">START ELEGIBILITY CHECK</button>
            </div>
        </div>
    )
}