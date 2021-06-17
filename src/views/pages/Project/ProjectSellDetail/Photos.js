import React, { Component } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table,
  Badge,
  Button,
  Label,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import * as Icon from "react-feather";
import NoData from "../../../../components/Common/nodata";
import OwnModal from "../../../../components/OwnModal/OwnModal";
import DataTable from "react-data-table-component";
import "../../../../assets/scss/pages/data-list.scss";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { FormattedMessage, injectIntl } from "react-intl";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import photo from "../../../../assets/img/logo/photo.png";
import PhotoForm from "../../Photos/PhotoForm";
import { Active, config } from "../../../../redux/Constants";
import S3FileUpload from "react-s3";
import swal from "sweetalert";

const ActionsComponent = (props) => {
  return (
    <div className="data-list-action">
      <Icon.Trash
        className="cursor-pointer"
        size={20}
        onClick={() => {
          props.deleteRow(props.row);
        }}
      />
    </div>
  );
};

const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: "rgba(115,103,240,.05)",
      color: "#7367F0 !important",
      boxShadow: "0 0 1px 0 #7367F0 !important",
      "&:hover": {
        transform: "translateY(0px) !important",
      },
    },
  },
};
export class Photos extends Component {
  state = {
    filter: {
      active: "all",
      type: "",
    },
  };
  onChange(key, event) {
    let { filter } = this.state;
    filter[key] = event;
    if (key === "type") {
      filter["active"] = null;
    }
    this.setState({ filter });
  }
  componentDidMount() {
    this.props.apiGetPhoto();
  }
  togglePhotoModal() {
    this.props.togglePhotoModal();
  }
  onSavePhoto() {
    // if (this.props.photo.isEditing) {
    //   let photoId = this.props.photo.photoForm._id;
    //   this.props.apiUpdatePhotos(this.props.photo.photoForm, photoId).then((res)=> {
    //     this.props.apiGetPhoto()
    //   });
    // } else {
    const file = this.props.photo.photoForm.file;
    S3FileUpload.uploadFile(file, config)
      .then((res) => {
        console.log(res);
        let data = this.props.photo.photoForm;
        data.url = res.location;
        this.props.apiSavePhoto(data);
      })
      .catch((err) => console.error(err, "err"));
  }
  editPhoto(indexes) {
    this.props.editPhoto(indexes);
  }
  deletePhoto(row) {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.props.apiDeleteData(row._id);
        swal("Successfully deleted.", {
          icon: "success",
        }).then((res) => this.props.apiGetPhoto());
      } else {
        //swal("Your imaginary file is safe!");
      }
    });
    const file = row.url;
    S3FileUpload.deleteFile(file, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err, "err"));
  }
  columns = [
    {
      name: <FormattedMessage id="photo.image" />,
      selector: "img",
      minWidth: "220px",
      cell: (row) => <img src={row.url} height="100" row={row} />,
    },
    {
      name: <FormattedMessage id="photo.label" />,
      sortable: true,
      minWidth: "200px",
      selector: "category",
      cell: (row) => (
        <p title={row.label} className="text-truncate text-bold-500 mb-0">
          {row.label}
        </p>
      ),
    },
    {
      name: <FormattedMessage id="photo.type" />,
      sortable: true,
      minWidth: "100px",
      cell: (row) => (
        <p title={row.type} className="text-truncate text-bold-500 mb-0">
          {row.type}
        </p>
      ),
    },
    {
      name: <FormattedMessage id="photo.status" />,
      sortable: true,
      width: "200px",
      cell: (row) => (
        <p
          title={this.props.intl.formatMessage({ id: "photo." + row.active })}
          className="text-truncate text-bold-500 mb-0"
        >
          {this.props.intl.formatMessage({ id: "photo." + row.active })}
        </p>
      ),
    },

    {
      name: <FormattedMessage id="photo.Actions" />,
      sortable: true,
      cell: (row) => (
        <ActionsComponent row={row} deleteRow={this.deletePhoto.bind(this)} />
      ),
    },
  ];

  data() {
    let { photo } = this.props;
    let { filter } = this.state;
    let filterData;
    if (!photo.photoList.length) {
      return (filterData = []);
    }

    if (filter.active === "all") {
      return (filterData = photo.photoList);
    }
    if (filter.active === true) {
      return (filterData = photo.photoList.filter((i) => {
        return i.active === true;
      }));
    }
    if (filter.active === false) {
      return (filterData = photo.photoList.filter((i) => {
        return i.active === false;
      }));
    }

    if (filter.type) {
      return (filterData = photo.photoList.filter((i) => {
        return i.type === filter.type;
      }));
    }

    return filterData;
  }

  renderPhotoData() {
    let { project, clients, photo } = this.props;
    {
      return (
        <>
          <div className="actions-left d-flex flex-wrap">
            <UncontrolledDropdown className="data-list-dropdown mr-1">
              <DropdownToggle className="p-1" color="primary">
                <span className="align-middle mr-1">
                  {" "}
                  <FormattedMessage id="photo.status" />
                </span>
                <Icon.ChevronDown size={15} />
              </DropdownToggle>
              <DropdownMenu tag="div" right>
                <DropdownItem
                  tag="a"
                  onClick={this.onChange.bind(this, "active", false)}
                >
                  <div>
                    {" "}
                    <FormattedMessage id="photo.nonactive" />
                  </div>
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onClick={this.onChange.bind(this, "active", true)}
                >
                  <div>
                    {" "}
                    <FormattedMessage id="photo.active" />
                  </div>
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onClick={this.onChange.bind(this, "active", "all")}
                >
                  <div>
                    {" "}
                    <FormattedMessage id="photo.all" />
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="dropdown ml-1 mb-1 d-inline-block">
              <UncontrolledButtonDropdown className="data-list-dropdown mr-1">
                <DropdownToggle color="white" caret>
                  <FormattedMessage id="photo.filterByType" />
                  <Icon.ChevronDown size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    onClick={this.onChange.bind(this, "type", "pro")}
                  >
                    <span className="align-middle">
                      <FormattedMessage id="photo.pro" />
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={this.onChange.bind(this, "type", "agent")}
                  >
                    <span className="align-middle">
                      <FormattedMessage id="photo.agent" />
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={this.onChange.bind(this, "type", "client")}
                  >
                    <span className="align-middle">
                      <FormattedMessage id="photo.client" />
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={this.onChange.bind(this, "active", "all")}
                  >
                    <div>
                      {" "}
                      <FormattedMessage id="photo.all" />
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div className="addNew">
              <Button className="add-new-btn" color="primary" outline>
                <Icon.Plus size={15} />
                <span
                  className="align-middle"
                  onClick={this.togglePhotoModal.bind(this)}
                >
                  <FormattedMessage id="photo.addNew" />
                </span>
              </Button>
            </div>
          </div>

          <div className={`data-list list-view buyData`}>
            <DataTable
              columns={this.columns}
              noHeader
              responsive
              onRowClicked={this.editPhoto.bind(this)}
              data={this.data()}
              pointerOnHover
              customStyles={selectedStyle}
              selectableRowsHighlight
              sortIcon={<Icon.ChevronDown />}
              selectableRowsComponent={
                <Checkbox
                  color="primary"
                  icon={<Icon.Check className="vx-icon" size={16} />}
                />
              }
              selectableRowsComponentProps={{
                color: "primary",
                icon: <Icon.Check className="vx-icon" size={12} />,
                label: "",
                size: "sm",
              }}
            />
          </div>
        </>
      );
    }
  }
  render() {
    let { photo } = this.props;
    return (
      <div className="photoTab">
        {this.renderPhotoData()}
        <OwnModal
          isOpen={photo.isModalOpen}
          toggleModal={this.togglePhotoModal.bind(this)}
          heading={"Add Images"}
          onSave={this.onSavePhoto.bind(this)}
          isSaving={photo.isSaving}
        >
          <PhotoForm
            photo={photo}
            onChange={this.props.onChangePhoto}
            photoForm={photo.photoForm}
          />
        </OwnModal>
      </div>
    );
  }
}

export default injectIntl(Photos);
