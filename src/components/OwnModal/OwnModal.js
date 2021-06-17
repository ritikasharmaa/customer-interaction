import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";


class OwnModal extends React.PureComponent {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggleModal}
        className={'modal-dialog-centered modal-xl' }
      >
        <ModalHeader className="headerModalClient" toggle={this.props.toggleModal}>
          {this.props.heading}
        </ModalHeader>
        <ModalBody className="modalBodyClient">
          {this.props.children}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={this.props.onSave}
            outline
            // disabled={this.props.isSaving}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default OwnModal;
