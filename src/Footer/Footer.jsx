import Group2 from '../assets/Group2.png'
import Frame1 from '../assets/Frame1.png'

export default function Footer() {
    return (
        <div>
            <div className='p-20 footer'>
                <div>
                    <img src={Group2} />
                    <p className='text-gray-500 text-xs mt-2'>This is a blockchain infrastructure 
                        company that allows businesses or enterprises to access secured blockchain 
                        node protocols to establish, run and scale their digital assets activities seamlessly.</p>
                </div>
                <div></div>
                <div className='text-right'>
                    <img src={Frame1} className='foot mt-9' />
                    <p className='text-gray-500 text-xs'>Ⓒ Blockterium 2023- All Rights Reserved <a href='' className='text-blue font-semibold'>Terms and Policy</a></p>
                </div>
            </div>
        </div>
    )
}