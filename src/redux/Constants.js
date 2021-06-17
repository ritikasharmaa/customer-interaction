import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

export const clientColumnDefs = [
  {
    headerName: "client.fullname",
    valueGetter: function sumField(params) {
      return params.data.name + " " + params.data.surname;
    },
    width: 290,
    filter: true,
    checkboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    headerCheckboxSelection: true,
    suppressSizeToFit: true,
    resizable: true
  },
  {
    headerName: "client.projects",
    field: "projects.length",
    filter: false,
    width: 220,
    sortable: false,
    resizable: true
  },
  {
    headerName: "client.origin",
    field: "origin",
    filter: "agNumberColumnFilter",
    width: 300,
    resizable: true
  },
  {
    headerName: "client.date",
    field: "updated",
    width: 260,
    filter: "agDateColumnFilter",
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toLocaleDateString("fr-FR") : "";
    },
    
  },

  {
    headerName: "client.action",
    field: "Icon",
    width: 201,
    cellRenderer: function (params) {
      return `<div class="actionIcons">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span>
          <span class="dotdot"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
        </div>`;
    },
  },
];

export const origins = [
  {
    value: "email",
    label: <FormattedMessage id="client.email" />,
  },
  {
    value: "call",
    label: <FormattedMessage id="client.call" />,
  },
  {
    value: "out",
    label: <FormattedMessage id="client.out" />,
  },
];

export const projectOrigins = [
  {
    value: "internet",
    label: <FormattedMessage id="project.internet" />,
  },
  {
    value: "recommendation",
    label: <FormattedMessage id="project.recommendation" />,
  },
  {
    value: "panels",
    label: <FormattedMessage id="project.panels" />,
  },
  {
    value: "agency",
    label: <FormattedMessage id="project.agency" />,
  },
  {
    value: "car",
    label: <FormattedMessage id="project.car" />,
  },
  {
    value: "campaign",
    label: <FormattedMessage id="project.campaign" />,
  },
];

export const projectTypes = [
  {
    value: "buy",
    label: <FormattedMessage id="project.buy" />,
  },
  {
    value: "sell",
    label: <FormattedMessage id="project.sell" />,
  },
  {
    value: "credit",
    label: <FormattedMessage id="client.credit" />,
  },
  {
    value: "works",
    label: <FormattedMessage id="client.works" />,
  },
];
export const constructions = [
  { value: "old", label: <FormattedMessage id="project.old" /> },
  { value: "semi", label: <FormattedMessage id="project.semi" /> },
  { value: "new", label: <FormattedMessage id="project.new" /> },
];
export const state = [
  {
    value: "medium",
    label: <FormattedMessage id="project.search.building.medium" />,
  },
  {
    value: "normal",
    label: <FormattedMessage id="project.search.building.normal" />,
  },
  {
    value: "good",
    label: <FormattedMessage id="project.search.building.good" />,
  },
  {
    value: "excelent",
    label: <FormattedMessage id="project.search.building.excelent" />,
  },
];
export const searchType = [
  {
    value: "flat",
    label: <FormattedMessage id="project.flat" />,
  },
  {
    value: "house",
    label: <FormattedMessage id="project.house" />,
  },
  {
    value: "offices",
    label: <FormattedMessage id="project.offices" />,
  },
  {
    value: "box",
    label: <FormattedMessage id="project.box" />,
  },
  {
    value: "house-copro",
    label: <FormattedMessage id="project.house-corpo" />,
  },
];

export const searchType2 = [
  {
    value: "test",
    label: "Test",
  },
  {
    value: "test",
    label: "Test",
  },
  {
    value: "test",
    label: "Test",
  },
  {
    value: "test",
    label: "Test",
  },
  {
    value: "test",
    label: "Test",
  },
];

export const buyType = [
  {
    value: "old",
    label: <FormattedMessage id="project.buyType.old" />,
  },
  {
    value: "Neuf",
    label: <FormattedMessage id="project.buyType.new" />,
  },
];

export const currentState = [
  {
    value: "landlord",
    label: <FormattedMessage id="project.currentState.landlord" />,
  },
  {
    value: "tenant",
    label: <FormattedMessage id="project.currentState.tenant" />,
  },
];
export const finance = [
  {
    value: true,
    label: <FormattedMessage id="project.true" />,
  },
  {
    value: false,
    label: <FormattedMessage id="project.false" />,
  },
];
export const copro = [
  {
    value: true,
    label: <FormattedMessage id="property.yes" />,
  },
  {
    value: false,
    label: <FormattedMessage id="property.no" />,
  },
];
export const outdoorSpace1 = [
  {
    value: 1,
    label: <FormattedMessage id="project.yes" />,
  },
  {
    value: 0,
    label: <FormattedMessage id="project.no" />,
  },
  {
    value: 2,
    label: <FormattedMessage id="project.doesn'tMatter" />,
  },
];
export const outdoorSpace = [
  { value: "garden", label: <FormattedMessage id="project.garden" /> },
  { value: "terrace", label: <FormattedMessage id="project.terrace" /> },
  { value: "balcony", label: <FormattedMessage id="project.balcony" /> },
  { value: "patio", label: <FormattedMessage id="project.patio" /> },
];
export const work = [
  { value: "small", label: <FormattedMessage id="project.small" /> },
  { value: "big", label: <FormattedMessage id="project.big" /> },
];
export const parking = [
  { value: "parking", label: <FormattedMessage id="project.parking" /> },
  { value: "box", label: <FormattedMessage id="project.box" /> },
];
export const views = [
  {
    value: "free",
    label: <FormattedMessage id="project.free" />,
  },
  {
    value: "sunny",
    label: <FormattedMessage id="project.sunny" />,
  },
];

export const GoodsColumnDefs = [
  {
    headerName: "Matching",
    field: "matching",
    filter: false,
    width: 200,
    sortable: false,
    checkboxSelection: true,
    headerCheckboxSelection: true,
  },
  {
    headerName: "Goods",
    field: "goods",
    filter: "agNumberColumnFilter",
    width: 250,
  },
  {
    headerName: "Goods Status",
    field: "goodsstatus",
    filter: "agNumberColumnFilter",
    width: 150,
    wordWrap: true,
    cellRenderer: function (params) {
      return `<span class="color layout">${params.data.goodsstatus}</span>`;
    },
  },
  {
    headerName: "Price",
    field: "price",
    filter: "agNumberColumnFilter",
    width: 148,
    cellRenderer: function (params) {
      return `<span>${params.data.price} €</span>`;
    },
  },
  {
    headerName: "Current Offers on the Property",
    field: "offer",
    filter: "agNumberColumnFilter",
    width: 150,
  },
  {
    headerName: "Actions",
    field: "Icon",
    width: 150,
    cellRenderer: function (params) {
      return `<div class="actionIcons"><span class="dotdot"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
        </div>`;
    },
  },
];

export const projectOffersColumnDefs = [
  {
    headerName: "Goods",
    field: "goods",
    filter: "agNumberColumnFilter",
    width: 300,
    checkboxSelection: true,
    headerCheckboxSelection: true,
  },
  {
    headerName: "Proposal Status",
    field: "proposalstatus",
    filter: "agNumberColumnFilter",
    width: 160,
    wordWrap: true,
    cellRenderer: function (params) {
      return `<span class="color layout">${params.data.proposalstatus}</span>`;
    },
  },
  {
    headerName: "Your Offer",
    field: "youroffer",
    filter: "agNumberColumnFilter",
    width: 160,
    cellRenderer: function (params) {
      return `<span class="color-red">${params.data.youroffer} €</span>`;
    },
  },
  {
    headerName: "Request from the Owner",
    field: "request",
    filter: "agNumberColumnFilter",
    width: 158,
    cellRenderer: function (params) {
      return `<span>${params.data.request} €</span>`;
    },
  },
  {
    headerName: "FAI Mandate Award",
    field: "award",
    filter: "agNumberColumnFilter",
    width: 150,
    cellRenderer: function (params) {
      return `<span>${params.data.award} €</span>`;
    },
  },
  {
    headerName: "Actions",
    field: "Icon",
    width: 120,
    cellRenderer: function (params) {
      return `<div class="actionIcons">
            <span class="dotdot"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
        </div>`;
    },
  },
];

export const projectMainColumnDefs = [
  {
    headerName: "Full Name",
    field: "",
    width: 260,
    filter: true,
    checkboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    headerCheckboxSelection: true,
  },
  {
    headerName: "Budget",
    field: "",
    filter: false,
    width: 120,
    sortable: false,
    cellRenderer: function (params) {
      return `<span>${params.data.budget} €</span>`;
    },
  },
  {
    headerName: "Type",
    field: "",
    filter: "agNumberColumnFilter",
    width: 150,
  },
  {
    headerName: "Project Purchase",
    field: "",
    width: 150,
    cellRenderer: function (params) {
      return `<span class="circle"></span>`;
    },
  },
  {
    headerName: "No of Prop.",
    field: "prop",
    filter: "agNumberColumnFilter",
    width: 130,
  },
  {
    headerName: "Status + Advance",
    field: "status",
    filter: "agNumberColumnFilter",
    width: 150,
    cellRenderer: function (params) {
      return `<span class="color layout">${params.data.status}</span>`;
    },
  },
  {
    headerName: "No of Visits",
    field: "visits",
    filter: "agNumberColumnFilter",
    width: 130,
  },
  // {
  //   headerName: "No of Offers",
  //   field: "offers",
  //   filter: "agNumberColumnFilter",
  //   width: 130,
  // },
  {
    headerName: "Date of creating Project",
    field: "date",
    width: 136,
    filter: "agDateColumnFilter",
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toLocaleDateString() : "";
    },
  },

  {
    headerName: "Actions",
    field: "Icon",
    width: 110,
    sortable: false,
    cellRenderer: function (params) {
      return `<div class="actionIcons">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
          <span class="dotdot"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
        </div>`;
    },
  },
];

//Properties
export const typesProperties = [
  {
    value: "house",
    label: <FormattedMessage id="property.house" />,
  },
  {
    value: "flat",
    label: <FormattedMessage id="property.flat" />,
  },
  {
    value: "offices",
    label: <FormattedMessage id="property.offices" />,
  },
  {
    value: "box",
    label: <FormattedMessage id="property.box" />,
  },
  {
    value: "land",
    label: <FormattedMessage id="property.land" />,
  },
  {
    value: "building",
    label: <FormattedMessage id="property.building" />,
  },
  {
    value: "house-copro",
    label: <FormattedMessage id="property.house-copro" />,
  },
];
export const heater = [
  {
    value: "individual",
    label: <FormattedMessage id="project.heater.individual" />,
  },
  { value: "shared", label: <FormattedMessage id="project.heater.shared" /> },
];
export const PropertiesColumnDefs = [
  {
    headerName: "property.type",
    field: "type",
    width: 150,
    filter: true,
   
  },
  {
    headerName: "property.property",
    filter: false,
    width: 350,
    sortable: false,
    cellRenderer: function (params) {
      return `${params.data.localisation?.address?.street} 
             
        <span class="propertyCity">${params.data.localisation?.address?.city}</span>`;
    },
  },
  {
    headerName: "property.owner",
    field: "",
    filter: "agNumberColumnFilter",
    width: 200,
  },
  {
    headerName: "property.price",
    field: "budget",
    width: 200,
    filter: "agDateColumnFilter",
    // cellRenderer: (data) => {
    //   return data.value ? new Date(data.value).toLocaleDateString() : "";
    // },
  },
  {
    headerName: "property.projectSell",
    field: "",
    width: 200,
    filter: "agDateColumnFilter",
    // cellRenderer: (data) => {
    //   return data.value ? new Date(data.value).toLocaleDateString() : "";
    // },
  },
  {
    headerName: "property.status",
    field: "status",
    width: 200,
    filter: "agDateColumnFilter",
    // cellRenderer: (data) => {
    //   return data.value ? new Date(data.value).toLocaleDateString() : "";
    // },
  },
  {
    headerName: "property.mandate",
    field: "",
    width: 150,
    filter: "agDateColumnFilter",
    // cellRenderer: (data) => {
    //   return data.value ? new Date(data.value).toLocaleDateString() : "";
    // },
  },
  
  {
    headerName: "property.action",
    field: "Icon",
    width: 213,
    cellRenderer: function (params) {
      return `<div class="actionIcons">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span>
          <span class="dotdot"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
        </div>`;
    },
  },
];

/* Proposal */
export const type = [
  { value: "oral", label: <FormattedMessage id="client.oral" /> },
  { value: "phone", label: <FormattedMessage id="client.phone" /> },
  { value: "sms", label: <FormattedMessage id="client.sms" /> },
  { value: "email", label: <FormattedMessage id="client.email" /> },
];

/*photo*/
export const config = {
  bucketName: process.env.REACT_APP_AWS_S3_PROPERTY_PHOTOS_BUCKET_NAME,
  dirName: process.env.REACT_APP_AWS_S3_PROPERTY_PHOTOS_BUCKET_FOLDER /* optional */,
  region: process.env.REACT_APP_AWS_S3_PROPERTY_PHOTOS_BUCKET_REGION,
  accessKeyId:  process.env.REACT_APP_AWS_S3_PROPERTY_PHOTOS_BUCKET_CLIENT_ID,
  secretAccessKey: process.env.REACT_APP_AWS_S3_PROPERTY_PHOTOS_BUCKET_SECRET_ID,
  };


export const Active = [
  {
    value: true,
    label: <FormattedMessage id="photo.active" />,
  },
  {
    value: false,
    label: <FormattedMessage id="photo.nonactive" />,
  },
];
// calendar

export const  GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export const  CALENDAR_ID = process.env.CALENDAR_ID;


//users
export const columns = [
  {
    name: <FormattedMessage id="user.fullname" />,
    selector: "full_name",
    sortable: true
  },
  {
    name: <FormattedMessage id="user.email" />,
    selector: "email",
    sortable: true
  },
  {
    name: <FormattedMessage id="user.agency" />,
    selector:"agency",
    sortable: true
  },
  {
    name: <FormattedMessage id="user.created" />,
    id: "created",
    selector: (d) => new Date(d.created).toLocaleDateString("fr-FR"),
    sortable: true
  },
];
//Agencies
export const Agencycolumns = [
  {
    name: <FormattedMessage id="agency.fullname" />,
    selector: "name",
    sortable: true
  },
  {
    name: <FormattedMessage id="agency.director" />,
    selector: (d) => d.director?.full_name,
    sortable: true
  },
  {
    name: <FormattedMessage id="agency.legalInfos" />,
    selector: "legalInfos",
    sortable: true
  },
  {
    name: <FormattedMessage id="agency.created" />,
    id: "created",
    selector: (d) => new Date(d.created).toLocaleDateString("fr-FR"),
    sortable: true
  },
];
//buy
export const buyColumns = [
  {
    Header: <FormattedMessage id="buy.clientInfo" />,
    columns: [
      {
        Header: <FormattedMessage id="client.firstname" />,
        id: "name",
        accessor: (d) => d.clients[0]?.name,
      },
      {
        Header: <FormattedMessage id="client.lastname" />,
        id: "surname",
        accessor: (d) => d.clients[0]?.surname,
      },
      {
        Header: <FormattedMessage id="client.email" />,
        id: "email",
        width: 200,
        accessor: (d) => d.clients[0]?.email,
      },
      {
        Header: <FormattedMessage id="client.phone" />,
        id: "phone",
        width: 200,
        accessor: (d) => d.clients[0]?.phone,
      },
    ],
  },
  {
    Header: <FormattedMessage id="buy.searchInfo" />,
    columns: [
      {
        Header: <FormattedMessage id="buy.clientInfo" />,
        id: "type",
        accessor: (d) => d.search?.property?.type,
      },
      {
        Header: <FormattedMessage id="project.search.finance.budget" />,
        id: "budget",
        accessor: (d) => d.search?.finance?.budget,
      },
      {
        Header: <FormattedMessage id="project.search.property.bedrooms" />,
        id: "bedrooms",
        accessor: (d) => d.search?.property?.bedrooms,
      },
      {
        Header: <FormattedMessage id="project.search.property.rooms" />,
        id: "rooms",
        accessor: (d) => d.search?.property?.rooms,
      },
      {
        Header: <FormattedMessage id="project.search.property.size" />,
        id: "size",
        accessor: (d) => d.search?.property?.size,
      },
      {
        Header: <FormattedMessage id="project.search.building.state" />,
        id: "state",
        accessor: (d) => d.search?.building?.state?.state,
      },
      {
        Header: <FormattedMessage id="project.search.building.heater" />,
        id: "heater",
        accessor: (d) => d.search?.building?.heater,
      },
      {
        Header: <FormattedMessage id="project.search.building.construction" />,
        id: "construction",
        accessor: (d) => d.search?.building?.construction,
      },
    ],
  },
  {
    Header: <FormattedMessage id="client.status" />,
    columns: [
      {
        Header: "Status",
        accessor: "status",
      },
    ],
  },
];

//sell
export const sellColumns = [
  {
    Header: <FormattedMessage id="buy.clientInfo" />,
    columns: [
      {
        Header: <FormattedMessage id="client.firstname" />,
        id: "name",
        accessor: (d) => d.clients[0]?.name,
      },
      {
        Header: <FormattedMessage id="client.lastname" />,
        id: "surname",
        accessor: (d) => d.clients[0]?.surname,
      },
      {
        Header: <FormattedMessage id="client.email" />,
        id: "email",
        width: 200,
        accessor: (d) => d.clients[0]?.email,
      },
      {
        Header: <FormattedMessage id="client.phone" />,
        id: "phone",
        width: 200,
        accessor: (d) => d.clients[0]?.phone,
      },
    ],
  },
  {
    Header: <FormattedMessage id="sell.propertyInfo" />,
    columns: [
      {
        Header: <FormattedMessage id="property.type" />,
        id: "type",
        accessor: (d) => d.property?.type,
      },
      {
        Header: <FormattedMessage id="project.sell.price" />,
        id: "budget",
        accessor: (d) => d.price,
      },
      {
        Header: <FormattedMessage id="property.address" />,
        id: "address",
        width: 200,
        accessor: (d) =>
          d.property?.localisation?.address?.street +
          "- " +
          d.property?.localisation?.address?.postcode +
          "- " +
          d.property?.localisation?.address?.city,
      },
      {
        Header: <FormattedMessage id="property.localisation.totalfloor" />,
        id: "floor",
        accessor: (d) => d.property?.localisation?.floor?.total,
      },
      {
        Header: <FormattedMessage id="property.copro.construction" />,
        id: "construction",
        accessor: (d) => d.property?.copro?.construction?.type,
      },
      {
        Header: <FormattedMessage id="property.attributes.bedrooms" />,
        id: "bedroom",
        accessor: (d) => d.property?.attributes?.bedrooms,
      },
      {
        Header: <FormattedMessage id="property.attributes.rooms" />,
        id: "rooms",
        accessor: (d) => d.property?.attributes?.rooms,
      },
      {
        Header: <FormattedMessage id="property.attributes.heater" />,
        id: "rooms",
        accessor: (d) => d.property?.attributes?.heater?.type,
      },
      {
        Header: <FormattedMessage id="property.attributes.size" />,
        id: "size",
        accessor: (d) => d.property?.attributes?.size?.m2,
      },
      {
        Header: <FormattedMessage id="property.attributes.water" />,
        id: "water",
        accessor: (d) => d.property?.attributes?.water?.type,
      },
    ],
  },
  {
    Header: "Status",
    columns: [
      {
        Header: "Status",
        accessor: "status",
      },
    ],
  },
];
