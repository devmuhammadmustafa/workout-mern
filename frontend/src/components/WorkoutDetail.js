import React from "react";
import moment from "moment";

const WorkoutDetail = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p>{moment(workout.createdAt).format("MMM Do YY")}</p>
    </div>
  );
};

export default WorkoutDetail;
