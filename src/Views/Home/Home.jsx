import { useState } from "react";

// Libs
import { InputField, TextField, Select } from "@hybris-software/ui-kit";

// Style
import Theme from "../../assets/Theme.module.css";
import Style from "./Home.module.css";
import { svg } from "./Home.module.scss";

function Home() {
  // Hooks
  const [selectedValue, setSelectedValue] = useState(null);
  const [checkedValue, setCheckedValue] = useState(false);
  const [switchToggle, setSwitchToggle] = useState(false);

  function generateBiago() {
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push(<div key={i} className={svg}></div>);
    }
    return elements;
  }

  return (
    <div className={Style.container}>
      {generateBiago()}
      <h1>The Inputs Odyssey</h1>
      <ul>
        <li>
          <h3>The InputField</h3>
          <InputField
            label={"Inputfield label"}
            placeholder="Please enter  your text"
          />
        </li>
        <li>
          <h3>The TextField</h3>
          <TextField
            label={"Textfield label"}
            placeholder="Please enter  your text"
          />
        </li>
        <li>
          <h3>The Select</h3>
          <Select
            label={"textfield Placeholder"}
            placeholder="Please select the  option"
            setValue={(value) => {
              setSelectedValue(value);
            }}
            value={selectedValue}
            items={[
              {
                label: "All",
                value: null,
              },
              {
                label: "Option 1",
                value: "option1",
              },
              {
                label: "Option 2",
                value: "option2",
              },
            ]}
          />
        </li>

        <li>
          <h3>The Check Box</h3>
          <div className={Theme.checkBox}>
            <input
              type="checkbox"
              id="check"
              defaultChecked={checkedValue}
              onChange={(e) => {
                setCheckedValue(e.target.checked);
              }}
            />
            <label htmlFor="check">Check Box</label>
          </div>
        </li>

        <li>
          <h3>The Toggle Switch</h3>
          <div className={Style.check}>
            <div className={Style.toggleContainer}>
              <h5>Toggle Switch:</h5>
              <ToggleSwitch
                onChange={(e) => setSwitchToggle(e.target.checked)}
                label="registration_airdrop"
                checked={switchToggle}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const ToggleSwitch = ({ checked, onChange, label, disabled }) => {
  return (
    <div className={Theme.mainContainer}>
      <div className={Theme.container}>
        <div className={Theme.toggleSwitch}>
          <input
            type="checkbox"
            checked={checked}
            className={Theme.checkbox}
            onChange={onChange}
            name={label}
            id={label}
            disabled={disabled}
          />
          <label className={Theme.wrapper} htmlFor={label}>
            <span className={Theme.inner} />
            <span className={Theme.switch} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
