import profileImage from '../../assets/profile_square_2.jpg'
import { FaLocationDot, FaGraduationCap, FaCode } from 'react-icons/fa6'

function ResumeHeader() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center mb-10 p-4 select-none">
            <img
                src={profileImage}
                alt="Andrew Boylan"
                className="rounded-full w-64"
                />
            <div className="text-gray-200 w-15">
                <h1 className="text-5xl md:text-5xl mb-4 text-center md:text-left">Andrew Boylan</h1>
                <div className='flex flex-col gap-3'>
                    <p className='flex items-center gap-3'><FaCode className="text-xl flex-shrink-0" /> Full Stack Developer</p>
                    <p className='flex items-center gap-3'><FaLocationDot className="text-xl flex-shrink-0" /> Currently based in Boston, MA </p>
                    <p className='flex items-center gap-3'><FaGraduationCap className="text-xl flex-shrink-0" /> MS in Computer Science, Northeastern University</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeHeader
