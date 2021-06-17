import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
  requestData,
  dataSaved,
  fetchProject,
  setProjectList,
  receiveProjectData,
  updateProjectData,
  receiveProject,
} from "../actions/project";
import swal from "sweetalert";

export const apiSaveProjects = (project) => {
  var body = JSON.parse(JSON.stringify(project));
  var options = GenerateOptions("projects", "post", body);
  return (dispatch) => {
    dispatch(requestData());
    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(dataSaved(response.data));
        swal({
          text: "Saved Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: "Error!",
          icon: "warning",
        });
        return error.response;
       
      });
  };
};

export const apiGetProjects = (id) => {
  var options = GenerateOptions(`clients/${id}/projects`, "get");
  return (dispatch) => {
    dispatch(fetchProject());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(setProjectList(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};

export const apiGetProjectData = (id) => {
  var options = GenerateOptions(`projects/${id}`, "get");
  return (dispatch) => {
    dispatch(fetchProject());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(receiveProjectData(response.data));
      })

      .catch((error) => {
        console.log(error);
        
        return error.data;
      });
  };
};

export const apiUpdateProjects = (project, id) => {
  var body = JSON.parse(JSON.stringify(project));
  var options = GenerateOptions(`projects/${id}`, "patch", body);
  return (dispatch) => {
    dispatch(requestData());

    return MakeTheApiCall(options)
      .then((response) => {
        console.log(response, "res");
        dispatch(updateProjectData(response.data));
        swal({
          text: "Updated Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: "Error!",
          icon: "warning",
        });
        return error.data;
      });
  };
};
export const apiGetProject = () => {
  var options = GenerateOptions('projects');
  return (dispatch) => {
    dispatch(requestData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(setProjectList(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};
