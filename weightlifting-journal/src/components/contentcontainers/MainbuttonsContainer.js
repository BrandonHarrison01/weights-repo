import React from "react";
import MainButton from "./Mainbuttons.js";
import { Jumbotron } from 'reactstrap';
import { Link as WorkoutLink } from "react-router-dom";
import "./MainButtonContainer.scss";

function MainButtonContainer() {
  return (
    <Jumbotron fluid>
    <div className="mainbtncontainer">
    <WorkoutLink className="mainBtn" to="/login">
    <MainButton 
      title = "Track Your Workout"
      content = "Track your workouts by weight, sets, reps, exercise, and much more"
      arrow = "→"
    />
    </WorkoutLink>
    <div className="mainBtn">
    <MainButton 
      title = "Crush Your Workout"
      content = "Making gains has become that much easier"
    />
    </div>
    <WorkoutLink className="mainBtn" to="/login">
    <MainButton 
      title = "Post Your Progress"
      content = "Upload your progress shots, see your body change in real-time"
      arrow = "→"
    />
    </WorkoutLink>
    </div>
    </Jumbotron>
  );
}

export default MainButtonContainer;