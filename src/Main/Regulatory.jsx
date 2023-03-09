import Shieldlock from "../assets/Shieldlock.png"

export default function Section2() {
    return (
        <div>
            <div className="regbg text-center py-20">
                <div className="flex justify-center">
                <img src={Shieldlock} />
                </div>
                <h1 className="text-5xl font-semibold mx-64 px-28 mt-12 gradient">Regulatory standards and
                <span> information security</span></h1>
                <p  className="text-2xl  mt-6 px-56 mx-56 gradient"> best practices are fully met by our systems and procedures.</p>
            </div>
        </div>
    )
}