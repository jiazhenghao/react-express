import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetail = ({
  id,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskName,
  setTaskGroup
}) => (
  <div>
    <div>
      <input onChange={setTaskName} value={task.name} />
    </div>
    <div>
      <button onClick={() => setTaskCompletion(id, !isComplete)}>
        {isComplete ? "Reopen" : "Complete"}
      </button>
    </div>
    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {groups.map(group => {
          return (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          );
        })}
      </select>
    </div>
    <Link to="/dashboard">
      <button>Done</button>
    </Link>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;
  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let _id = ownProps.match.params.id;
  //console.log(id);
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(_id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(_id, e.target.value));
    }
  };
};

export const ConnectTaskDetail = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskDetail)
);
