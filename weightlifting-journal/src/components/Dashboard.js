import React,{ useState, useEffect } from 'react'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import { Link as WorkoutLink } from "react-router-dom";
import './Dashboard.scss'
import { axiosWithAuth } from '../axiosWithAuth';

function Dashboard() {

    // const [userData, setUserData] = useState();
    // const [workoutType, setWorkoutType] = useState('arms');

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token)
    //     console.log(token)
    //     axiosWithAuth()
    //         .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${workoutType}`)
    //         .then(res => {
    //             console.log(res)
    //             setUserData(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    return(
      <>
      <TopNav />
      <div className="siteContainer">
        <div className='dashboard-page'>
            <h1 className='title' >Welcome!</h1>
            <section className='dashboard'>
                <div className='mapped-workouts'>
                    <h2 className='workouts'>Monday, July 29</h2>
                    <h2 className='workouts'>Push Day</h2>
                </div>
                <div className='btn-container'>
                    <button className='new-workout-btn'>
                    <WorkoutLink className='new-workout-text'to="/enterworkout">
                    New Workout
                    </WorkoutLink>
                    </button>
                </div>
            </section>
        </div>
        </div>
      <Footer />
      </>
    )
}

export default Dashboard