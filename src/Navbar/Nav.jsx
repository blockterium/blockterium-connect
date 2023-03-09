import Group2 from '../assets/Group2.png'
import Frame from '../assets/Frame.png'

export default function Nav() {
    return (
        <div>
            <div className='px-20 py-10 navbg'>
                <div className='flex justify-between'>
                    <div>
                        <img src={Group2} className='w-auto h-auto fixed'/>                    
                    </div>
                    <div>
                        <button className='border mx-3 text-white p-2 text-xs
                         font-normal w-40 fixed right-64 hover:bg-slate-200 hover:text-gray-800'>Become a Merchant</button>
                         <button className='mx-3 text-white p-2 text-xs
                          bg-blue font-normal w-32 fixed right-20 hover:bg-indigo-900'>Contact Us</button>
                    </div>
                </div>
                <div className='w-5/12'>
                    <h1 className='gradient text-5xl font-semibold mt-40'>Maximize your payment efficiency</h1>
                    <p className='text-gray-500 mt-4'>Stay ahead of the curve and embrace the benefits of 
                    decentralized finance with our On-Ramp & Off-Ramp Payment Solutions to Boost Your Business.</p>
                    <button className='m-3 text-white p-2
                            bg-blue font-normal w-64 mt-16 hover:bg-indigo-900'>Get Started as a Business</button>
                    <img src={Frame} className='my-16 w-auto h-auto' />
                </div>
            </div>
        </div>
    )
}