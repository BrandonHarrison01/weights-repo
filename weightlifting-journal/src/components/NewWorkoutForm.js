import React,{ useState, useEffect } from 'react'
import { Link as EditExercises } from 'react-router-dom'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import { withFormik, Form, Field } from 'formik'
import {axiosWithAuth }from '../axiosWithAuth'

import './NewWorkoutForm.scss'

function NewWorkoutForm() {

    const [userData, setUserData] = useState();
    const [workoutType, setWorkoutType] = useState('arms');

    console.log('USER DATA', userData)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token)
        console.log(token)
        axiosWithAuth()
            .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${workoutType}`)
            .then(res => {
                console.log(res)
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, [ workoutType ]);

    return(
      <>
      <TopNav />
      <div className="siteContainer">
        <div className='new-workout-page'>
            <h1 className='title'>New Workout</h1>
            <Form className='workout-form'>
                <label className='form-label'>
                    Sets: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='sets'
                    />
                </label>
                <label className='form-label'>
                    Reps: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='reps'
                    />
                </label>
                <label className='form-label'>
                    Weight: <br />
                    <Field 
                        className='number-input'
                        type='number'
                        name='weight'
                    />
                </label>
                <label className='form-label'>
                    Difficulty: <br />
                    <Field component='select' name='difficulty' className='difficulty'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Field>
                </label>
                <label className='form-label'>
                    Date: <br />
                    <Field 
                        className='date'
                        type='date'
                        name='date'
                    />
                </label>
                <label className='form-label'>
                    Type: <br />
                    <select onChange={(e) => setWorkoutType(e.target.value.toLowerCase())} component='select' name='type' className='type'>
                        <option>Arms</option>
                        <option>Shoulders</option>
                        <option>Back</option>
                        <option>Chest</option>
                        <option>Legs</option>
                        <option>Core</option>
                    </select>
                <label className='form-label'>
                    Exercise: <br />
                    <Field component='select' className='workout' type='text' name='exercise'>
                        {!userData ? null : userData.map(user => <option key={user.id}>{user.exerciseName}</option>)}
                    </Field>
                </label>
                <EditExercises to='edit-exercise'>
                    Edit Exercises
                </EditExercises>
                </label>
                <p className='buttons'>
                    <button type='reset' className='clear-btn'>Clear</button>
                    <button type='submit' className='add-btn'>Add</button>
                </p>
            </Form>
        </div>
        </div>
      <Footer />
      </>
    )
}

const FormikNewWorkoutForm = withFormik({
    mapPropsToValues() {
        return {
            sets: '',
            reps: '',
            weight: '',
            difficulty: '',
            date: '',
            exercise: '',
            type: '',
            id: ''
        }
    },

    handleSubmit(values) {
        console.log(values)
    }
})(NewWorkoutForm)

export default FormikNewWorkoutForm