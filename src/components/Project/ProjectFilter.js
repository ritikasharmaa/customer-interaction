import React from "react"
import Radio from "../@vuexy/radio/RadioVuexy"
import Checkbox from "../@vuexy/checkbox/CheckboxesVuexy.js";
import * as Icon from "react-feather";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";

const userOptions = [
  { value: "Test1", label: "Test1" },
  { value: "Test2", label: "Test2" },
  ];
              
class ProjectFilter extends React.Component{
  onSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render(){
    let { ProjectForm, selectedOption } = this.props;

    return(
      <div className="projectFilter commonCustomizer">
        <div className="selectBox">
          <h5>Loaction</h5>
          <Select
            defaultValue={[userOptions[1], userOptions[3]]}
            isMulti
            name="colors"
            options={userOptions}
            className="React customeChip"
            classNamePrefix="select"
            value={selectedOption}
            placeholder= "town, district, region"
            // onChange={this.onSelect.bind(this, "zone")}
          />
        </div>
        <div className="divider">
          <h5 className="divider-text">SEARCH CRITERIA</h5>
          
        </div>
        <div className="theme-layout">
          <h5 className="mt-1">Filter Category 1</h5>
          <div className="d-inline-block">
            <Radio
              label="Test"
              color="primary"
              name="themeMode"
            />
          </div>
          <div className="d-inline-block">
            <Radio
              label="Test"
              color="primary"
              name="themeMode"
            />
          </div>
          <div className="d-inline-block">
            <Radio
              label="Test"
              color="primary"
              name="themeMode"
            />
          </div>
          <div className="d-inline-block">
            <Radio
              label="Test"
              color="primary"
              name="themeMode"
            />
          </div>
        </div>
        <div className="theme-mode">
          <h5 className="mt-1">Filter Category 2</h5>
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Test"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Test"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Test"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Test"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Test"
              defaultChecked={false}
            />
          </div>
        </div>
        <div className="slider">
          <div className="heading">
            <h5>Slider</h5>
            <span>60-120</span>
          </div>
          <Range
            min={0}
            max={20}
            defaultValue={[3, 10]}
            tipFormatter={(value) => `${value}`}
          />
        </div>
      </div>
    )
  }
} 

export default ProjectFilter;        
                
