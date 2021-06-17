import React, { Component } from "react";
import { Button, Form, Col, Row, FormGroup, Input, Label } from "reactstrap";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class AgenciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: "",
    };
  }

  userList() {
    return this.props.user.userList.map((suggestion) => ({
      value: suggestion._id,
      label: suggestion.full_name,
    }));
  }
  onChange(key, event) {
    console.log(event);
    if (event.value) {
      this.props.onChange(key, event.value);
    } else if (event.blocks) {
      this.props.onChange(key, event.blocks[0].text);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount(){
    if(this.props.editAgencies){
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(`<p>${this.props.agenciesForm.legalInfos}</p>`)
          )
        ),
      }) 
    }
  }
  componentWillUnmount(){
    this.setState({ editorState: "" })
  }
  render() {
    const { agenciesForm } = this.props;
    return (
      <div className="agenciesForm">
        <Form>
          <FormGroup row>
            <Col md="3" className="heading">
              <span>
                <h5 className="headings">
                  <FormattedMessage id="agency.name" />
                </h5>
              </span>
            </Col>
            <Col md="7">
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={agenciesForm?.name}
                onChange={this.onChange.bind(this, "name")}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="heading">
              <span>
                <h5 className="headings">
                  <FormattedMessage id="agency.director" />
                </h5>
              </span>
            </Col>
            <Col md="7">
              <div className="">
                <Select
                defaultValue={{label: agenciesForm.director.full_name}}
                  name="colors"
                  options={this.userList()}
                  className="React"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, "director")}
                />
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="heading">
              <span>
                <h5 className="headings">
                  <FormattedMessage id="agency.legalInfo" />
                </h5>
              </span>
            </Col>
            <Col md="7">
              <div className="">
                <Editor
                  editorState={this.state.editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  value={agenciesForm.legalInfos}
                  onEditorStateChange={this.onEditorStateChange}
                  onChange={this.onChange.bind(this, "legalInfos")}
                />
              </div>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AgenciesForm;
