import * as types from "../../actions/actionTypes";

const formInitailValues = {
  type: "oral",
  client: "",
  buyingProject: "",
  sellingProject: "",
};
const intialState = {
  proposalList: [],
  isFetching: false,
  isModalOpen: false,
  proposalForm: JSON.parse(JSON.stringify(formInitailValues)),
  isSaving: false,
};

const proposal = (state = intialState, action) => {
  switch (action.type) {
    case types.TOOGLE_PROPOSAL_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case types.FETCHING_PROPOSAL:
      return { ...state, isFetching: true };
    case types.RECEIVE_PROPOSALS:
      return {
        ...state,
        proposalList: action.data,
        isFetching: false,
      };
      case types.SAVING_STATE_PROPOSAL:
        return { ...state, isSaving: true };
      case types.ONCHANGE_PROPOSAL_FORM:
        let formData = state.proposalForm;
        formData[action.key] = action.value;
        return { ...state, proposalForm: formData };
      case types.SAVED_PROPOSAL_DATA:
        return {
          ...state,
          isSaving: false,
          proposalList: [action.data, ...state.proposalList],
          isModalOpen: false,
          proposalForm: JSON.parse(JSON.stringify(formInitailValues)),
        };
        case types.UPDATE_PROPOSAL_DATA:
          let listData = JSON.parse(JSON.stringify(state.proposalList));
          let proposalIndex = listData.findIndex(item=>item._id === action.data._id)
          listData[proposalIndex].status = action.data.status;
          console.log(listData,"listData")
          return {
            ...state,
            proposalForm: formInitailValues,
            proposalList: listData,
          };
        case types.PREP_PROPOSAL_TABLE_FOR_DATA:
        return  {...state,  isFetching: true };
    default: {
      return state;
    }
  }
};
export default proposal;
