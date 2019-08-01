import React from 'react'
import { Link as NewWorkout } from 'react-router-dom'

import AddExercise from './editexerciseforms/AddExercise'
import EditExercise from './editexerciseforms/EditExercise'
import DeleteExercise from './editexerciseforms/DeleteExercise'

function EditExerciseForm(props) {

    return(
        <div>
            <AddExercise history={props.history} />
            <EditExercise history={props.history} />
            <DeleteExercise history={props.history} />
            
        </div>
    )
}

export default EditExerciseForm