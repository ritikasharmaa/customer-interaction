import * as types from "./actionTypes";

export function toggleProposalModal() {
    return {type: types.TOOGLE_PROPOSAL_MODAL};
  }
  export function requestProposalData() {
    return { type: types.SAVING_STATE_PROPOSAL };
  }
  export function dataSavedProposal(json) {
    return {
      type: types.SAVED_PROPOSAL_DATA,
      data: json,
    };
  }
  export function receiveListOfProposal(json) {
    return {
      type: types.RECEIVE_PROPOSALS,
      data: json,
    };
  }
  export function fetchDataProposal() {
    return {
      type: types.FETCHING_PROPOSAL,
    };
  }
  export function onChangeProposalForm(key, value) {
    return {
      type: types.ONCHANGE_PROPOSAL_FORM,
      key,
      value,
    };
  }
  export function prepProposeTableForData() {
    return { type: types.PREP_PROPOSAL_TABLE_FOR_DATA};
  }
  export function updateProposalData(json) {
    return {
      type: types.UPDATE_PROPOSAL_DATA,
      data: json,
    };
  }