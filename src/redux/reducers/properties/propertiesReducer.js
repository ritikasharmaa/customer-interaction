import * as types from "../../actions/actionTypes";

const formInitValues = {
  type: "house",
  localisation: {
    address: {
      street: "",
      postcode: "",
      city: "",
      country: "",
    },
    lift: false,
    code: {
      exists: false,
      value: "",
    },
    intercom: {
      exists: false,
      value: "",
    },
    floor: {
      actual: 0,
      total: 0,
    },
    door: "",
    other: "",
  },
  attributes: {
    rooms: 0,
    bedrooms: 0,
    size: {
      m2: 0,
      carrez: false,
    },
    mainView: {
      clear: false,
      sunny: false,
      visavis: false,
      expo: "",
    },
    basement: {
      choice: Boolean,
    },
    heater: {
      agreement: "individual",
      energy: "electric",
      type: "header",
    },
    water: {
      agreement: "individual",
      type: "electric",
    },
    outdoorSpace: {
      choice: false,
      type: "garden",
      size: Number,
    },
    parking: {
      choice: false,
      type: "parking",
    },
    workTodo: {
      choice: false,
      type: "small",
      urgency: "needed",
      info: String,
    },
    workToPlan: {
      choice: false,
      type: "small",
      info: "",
    },
    recentImprovements: "",
    bigWorkDone: "",
  },
  copro: {
    accesses: {
      shops: Number,
      highway: {
        name: "",
        distance: Number,
      },
      publicTransports: [{
          name: "",
          type: "station",
        distance: Number,
      }],
    },
    syndic: "",
    coproHisto: "",
    coproNext: "",
    construction: {
      type: "old",
      year: Number,
    },
    state: {
      state: "medium",
      comment: "",
    },
    propertyTax: "",
    housingTax: "",
    caretaker: false,
    monthlyFees: "",
    other: "",
  },
  rooms: [
    {
      name: "",
      size: Number,
      floor: "",
      expo: "",
      windows: "",
      view: "",
      other: "",
    }
  ]
};
const intialState = {
  isShow: false,
  isSaving: false,
  propertiesForm: JSON.parse(JSON.stringify(formInitValues)),
  counter: 0,
  size: [],
  propertiesList: [],
};

const properties = (state = intialState, action) => {
  switch (action.type) {
    case types.TOGGLE_PROPERTIES_FORM:
      return {
        ...state,
        isShow: !state.isShow,
        propertiesForm: JSON.parse(JSON.stringify(formInitValues))
      };
    case types.SAVING_STATE:
      return { ...state, isSaving: true };
    case types.SAVED_PROPERTIES_DATA:
      return {
        ...state,
        isSaving: false,
        propertiesForm: JSON.parse(JSON.stringify(formInitValues)),
      };
    case types.ONCHANGE_FORM_PROPERTY:
      let formData = state.propertiesForm;
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
      return { ...state, propertiesForm: formData };
    case types.ADD_ROOMS:
      return {
        ...state,
        counter: state.counter + 1,
        size: [...state.size, state.counter + 1],
      };
      case types.REMOVE_ROOMS:
      return {
        ...state,
        counter: state.counter - 1,
        size: [...state.size.filter(item => item !== action.index)],
      };
      case types.GET_PROPERTIES:
        return {
          ...state,
          propertiesList: action.data,
          isFetching: false,
          };
    default: {
      return state;
    }
  }
};

export default properties;
