import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';

const JobListings = ({ isHome = false }) => {
  const [loading, setLoading] = useState(true);
  
  const jobs = useSelector((state) => state.jobs.list);

  useEffect(() => {
    if (jobs.length) {
      setLoading(false);
    }
  }, [jobs]);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job, idx) => (
              <JobListing key={idx} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;
