import HeroBanner from "./Herobanner";
import Problem from "./Problemsection";
import Features from "./Features";
import Governmentscheme from "./Governmentschemes";
export default function Home() {
    return (
        <div className="w-[100%]">
            <HeroBanner />
            <Problem />
            <Features />
            <Governmentscheme />
        </div>
    )
}
