import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { listCategories } from '../actions/categoryActions'

const VendorCreateScreen = () => {
  const dispatch = useDispatch()

  const categoryList = useSelector((state) => state.categoryList)
  const { loading: category_loading, categories } = categoryList

  const [category, setCategory] = useState('All')

  useEffect(() => {
    dispatch(listCategories())
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const test = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <FormContainer>
        <h2 className="mb-4">Add Vendor Details</h2>
        <Form onSubmit={submitHandler}>
          <Form.Text className="text-muted mb-3">
            Fields marked with * are mandatory
          </Form.Text>
          <Form.Group className="mt-2 mb-3">
            <Form.Label>Company *</Form.Label>
            <Form.Control required type="text" placeholder="Enter Company" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Person Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Person Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact Number 1</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Contact Number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact Number 2</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" placeholder="Enter Area" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Material *</Form.Label>
            <Form.Control required type="text" placeholder="Enter Material" />
          </Form.Group>

          <Form.Text className="text-muted mb-3">OR</Form.Text>

          <div className="mb-5 mt-3">
            {!category_loading && (
              <select value={category} onChange={test}>
                <option value="All">All</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Plant Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Plant Location" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Vendor Classification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Vendor Classification"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mail ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Mail ID" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default VendorCreateScreen
