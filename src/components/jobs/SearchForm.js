import React from 'react';
import {Form, Col} from 'react-bootstrap';

const SearchForm = ({params, onParamChange}) => {
    return (
       <Form className="mb-4">
           <Form.Row className="align-items-end">
               <Form.Group as={Col}>
                <Form.Label><h6>Description</h6></Form.Label>
                <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
               </Form.Group>
               <Form.Group as={Col}>
                <Form.Label><h6>Location</h6></Form.Label>
                <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
               </Form.Group>
               <Form.Group as={Col} xs="auto" className="ml-2">
                   <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
               </Form.Group>
           </Form.Row>
       </Form>
    )
}

export default SearchForm
