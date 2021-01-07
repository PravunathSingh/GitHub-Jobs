import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {Collapse, Button} from 'react-bootstrap';

const Job = ({job}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">
                            {job.title} - <span className="text-secondary">{job.company}</span>
                        </h5>
                        <h6 className="card-subtitle text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </h6>
                        <span className="badge bg-info text-white mr-2 mb-2">{job.type}</span>
                        <span className="badge bg-secondary text-white mb-2">{job.location}</span>
                        <div style={{wordBreak: 'break-all'}}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>
                    <img src={job.company_logo} alt={job.company} className="d-none d-md-block" height="50"/>
                </div>

                <p className="card-text">
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">{open ? 'Hide Details' : 'View Details'}</Button>
                </p>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export  default Job;
