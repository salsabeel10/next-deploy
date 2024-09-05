"use client"

import {useState} from 'react'

interface User {
  username: string
  email: string
  password: string
}

interface Employee {
  employee_id: string
  name: string
  start_date: string
  designation: string
  salary: number
  div_id: string
  dept_id: string
  business_unit_id: string
  location_id: string
}

export const AddEmployee = () => {

  const [user, setUser] = useState<User>({
    username: 'Yello',
    email: 'employee@gmail.com',
    password: '123',
  })

  const [employee, setEmployee] = useState<Employee>({
    employee_id: '',
    name: '',
    start_date: '',
    designation: '',
    salary: 0,
    div_id: '',
    dept_id: '',
    business_unit_id: '',
    location_id: '',
  })

  const handleEmployeeChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      user,
      employee,
    }

    try {
      const response = await fetch('/api/v1/employee', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      
      console.log(await response.json())

      if (response.ok) {
        alert('Employee added successfully!')
        // Clear the form
        setUser({
          username: '',
          email: '',
          password: '',
        })
        setEmployee({
          employee_id: '',
          name: '',
          start_date: '',
          designation: '',
          salary: 0,
          div_id: '',
          dept_id: '',
          business_unit_id: '',
          location_id: '',
        })
      } else {
        alert('Failed to add employee')
      }
    } catch (error) {
      console.error('Error adding employee:', error)
    }
  }

  return {
    employee,
    handleEmployeeChange,
    handleSubmit,
  }
}
