import * as main from "../../main";
import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
  updateProposalData,
    requestProposalData,
    receiveListOfProposal,
    prepProposeTableForData,
    dataSavedProposal
} from "../actions/proposal";
import swal from "sweetalert";

import { store } from "../storeConfig/store";

const { dispatch } = store;

export const apiGetProposals = (id) => {
    var options = GenerateOptions(`projects/${id}/proposals`, "get");
    return (dispatch) => {
      dispatch(prepProposeTableForData());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(receiveListOfProposal(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };
  
  export const apiSaveProposals = (proposal) => {
    var body = JSON.parse(JSON.stringify(proposal));
    var options = GenerateOptions("proposals", "post", body);
    return (dispatch) => {
      dispatch(requestProposalData());
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(dataSavedProposal(response.data));
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
  export const apiUpdateProposals = (action, id) => {
    console.log(action, id , "action id")
    var options = GenerateOptions(`proposals/${id}`, "patch", {status: action});
    return (dispatch) => {
      dispatch(requestProposalData());
  
      return MakeTheApiCall(options)
        .then((response) => {
          console.log(response, "res");
          response.data.status = action;
          dispatch(updateProposalData(response.data));
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