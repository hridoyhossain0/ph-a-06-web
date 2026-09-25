import Link from 'next/link';

const ValueDefault = () => {
    return (
        <div className='flex flex-col space-y-2.5 tabs-box p-5 rounded-2xl my-5 items-center'>
            <h1>NOTHING HERE YET</h1>
            <p>Browse the library and add a lift to get today moving.</p>
            <Link href='/'>
                <button className="btn btn-active btn-success bg-amber-200 rounded-full border-0">Go to workouts</button>

            </Link>
        </div>
    );
};

export default ValueDefault;