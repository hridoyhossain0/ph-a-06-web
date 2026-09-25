import Image from 'next/image';

import HeroImage from '../../../public/banner.png';

const HeroSection = () => {
    return (
        <div className='container my-15 mt-32 mx-auto'>
            <div className="hero bg-base-100 rounded-2xl  py-10">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div >
                        <Image
                            className='w-45 h-50 lg:w-100 lg:h-112'
                            alt="Tailwind CSS hero component"
                            src={HeroImage}
                            height={600}
                            width={400}
                        />
                    </div>
                    <div>
                        <p className='text-yellow-300 text-xl'>WORKOUT LIBRARY</p>

                        <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h1>
                        <p className="py-6 text-[rgba(275,275,275,.7)]">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                            into today's plan, and watch the week's work add up.
                        </p>
                        <button className="btn bg-yellow-400 text-black font-semibold">BROWSE WORKOUTS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;