import * as types from "../../actions/actionTypes";

const formInitailValues = {
  source: "internet",
  type: ["buy"],
  proposal: "",
  currentState: "landlord",
  buyType: ["old"],
  reason: "",
  urgency: 1,
  start: new Date(),
  end: new Date(),
  search: {
    property: {
      type: ["flat"],
      zone: ["cities"],
      zoneRestriction: false,
      rooms: 0,
      bedrooms: 0,
      size: 0,
      basement: 0,
      groundfloor: 0,
      work: {
        choice: 0,
        type: ["small"],
      },
      outdoorSpace: {
        choice: 0,
        type: ["garden"],
        size: 0,
      },
      views: {
        free: false,
        sunny: Boolean,
      },
      parking: {
        choice: 0,
        type: ["parking"],
      },
    },
    building: {
      construction: ["old"],
      state: {
        state: ["medium"],
        comment: "",
      },
      floors: {
        lift: 0,
        maxWithoutLift: 0,
        last: 0,
      },
      heater: "individual",
      monthlyFees: 0,
    },
    finance: {
      budget: 0,
      mortgageNeeded: false,
      bankStudy: Boolean,
      useOurPartner: Boolean,
      comments: "",
    },
  },
  price: 0,
  goal: "",
  collaboration: "open",
  dateCallback: new Date(),
  property: "",
};

const intialState = {
  projectList: [],
  isFetching: false,
  projectForm: JSON.parse(JSON.stringify(formInitailValues)),
  isSaving: false,
  isModalOpen: false,
  isEditing: false,
  detailProject: {},
};
const project = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT:
      return { ...state, isFetching: true };
    case types.SAVING_STATE:
      return { ...state, isSaving: false };
    case types.SET_PROJECT_LIST:
      return { ...state, isFetching: false, projectList: action.data };
    case types.SAVED_PROJECT_DATA:
      return {
        ...state,
        isSaving: false,
        projectList: [action.data, ...state.projectList],
        projectForm: JSON.parse(JSON.stringify(formInitailValues)),
        isModalOpen: false,
      };
    case types.TOGGLE_PROJECT_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen, projectForm: JSON.parse(JSON.stringify(formInitailValues)) };
    case types.ONCHANGE_FORM_DATA:
      let formData = state.projectForm;
      if (action.key.length === 1 && action.key[0] == "type") {
        let typeIndex = formData.type.indexOf(action.value);
        if (typeIndex === -1) {
          formData.type.push(action.value);
        } else {
          formData.type.splice(typeIndex, 1);
        }
      } 
      else if (action.key.length === 1 && action.key[0] == "buyType") {
        let typeIndex = formData.buyType.indexOf(action.value);
        if (typeIndex === -1) {
          formData.buyType.push(action.value);
        } else {
          formData.buyType.splice(typeIndex, 1);
        }
      } else if (action.key.length === 4 && action.key[3] == "type") {
        let currentIndex = formData.search.property[
          action.key[2]
        ].type.findIndex((item) => item === action.value);
        if (currentIndex === -1) {
          formData.search.property[action.key[2]].type.push(action.value);
        } else {
          formData.search.property[action.key[2]].type.splice(currentIndex, 1);
        }
      } else if (action.key.length === 3 && action.key[2] == "construction") {
        let typeIndex = formData.search.building.construction.indexOf(
          action.value
        );
        if (typeIndex === -1) {
          formData.search.building.construction.push(action.value);
        } else {
          formData.search.building.construction.splice(typeIndex, 1);
        }
      } else if (action.key.length === 3 && action.key[2] == "type") {
        let typeIndex = formData.search.property.type.indexOf(action.value);
        if (typeIndex === -1) {
          formData.search.property.type.push(action.value);
        } else {
          formData.search.property.type.splice(typeIndex, 1);
        }
      } else if (action.key.length === 4 && action.key[3] == "state") {
        let typeIndex = formData.search.building.state.state.indexOf(
          action.value
        );
        if (typeIndex === -1) {
          formData.search.building.state.state.push(action.value);
        } else {
          formData.search.building.state.state.splice(typeIndex, 1);
        }
      } else {
        if (action.key.length === 1) {
          formData[action.key[0]] = action.value;
        } else if (action.key.length === 2) {
          formData[action.key[0]][action.key[1]] = action.value;
        } else if (action.key.length === 3) {
          formData[action.key[0]][action.key[1]][action.key[2]] = action.value;
        } else if (action.key.length === 4) {
          formData[action.key[0]][action.key[1]][action.key[2]][action.key[3]] =
            action.value;
        }
      }
      return {
        ...state,
        projectForm: formData,
      };
    case types.GET_PROJECT_DETAIL_SUCCESS:
      return { ...state, isFetching: false, detailProject: action.data };
    case types.UPDATE_PROJECT_DATA:
      return {
        ...state,
        isSaving: false,
        isModalOpen: false,
        projectForm: formInitailValues,
        detailProject: action.data,
      };
    case types.EDIT_PROJECT:
      let data = {
        source: "internet",
        search: {
          building: {
            construction: "old",
            state: {
              state: "medium",
              comment: "",
            },
            floors: {
              lift: 0,
              maxWithoutLift: 0,
              last: 0,
            },
            heater: "individual",
            monthlyFees: 0,
          },
          finance: {
            budget: 0,
            mortgageNeeded: Boolean,
            bankStudy: Boolean,
            useOurPartner: Boolean,
            comments: "",
          },
        },
        ...action.data,
      };
      return {
        ...state,
        isModalOpen: true,
        projectForm: data,
        isEditing: true,
      };
     
    default: {
      return state;
    }
  }
};
export default project;
