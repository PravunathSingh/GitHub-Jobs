/* eslint-disable no-undef */
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';
import Footer from './components/layout/Footer';
import Job from './components/jobs/Job';
import JobsPagination from './components/jobs/JobsPagination';
import SearchForm from './components/jobs/SearchForm';
import useFetchJobs from './useFetchJobs';
import './App.css';


function App() {
  // eslint-disable-next-line no-undef
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

  function handleParamChange(e) {
    e.preventDefault();
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }

  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <SearchForm params={params} onParamChange={handleParamChange} />
            <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
            {loading && <Spinner />}
            {error && <h1 className="text-center mt-5">Error!! Try Refreshing.</h1>}
            {jobs.map(job => {
              return <Job key={job.id} job={job} />
            })}
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
            
          </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App;