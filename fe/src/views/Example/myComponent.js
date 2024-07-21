import React from "react";
import ReactDOM from "react-dom/client";
import style from "./myComponent.css";

function Content({ input_value, id, onDelete }) {
  return (
    <div className="num" key={id}>
      {input_value}
      <button className="trash" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

class MyComponent extends React.Component {
  state = {
    input_value: "",
    id: 0,
    arr_rendering: [],
  };

  handeSubmit = () => {
    if (this.state.input_value != "") {
      var newArr = [
        ...this.state.arr_rendering,
        {
          input_value: this.state.input_value,
          id: this.state.id,
        },
      ];

      this.setState(
        {
          arr_rendering: newArr,
          input_value: "",
          id: this.state.id + 1,
        },
        () => {
          console.log(this.state.arr_rendering);
        }
      );
    } else alert("please type any content");
  };

  handleDelete = (id) => {
    const newArr = this.state.arr_rendering.filter((item) => item.id != id);
    this.setState({
      arr_rendering: newArr,
    });
  };

  render() {
    return (
      <div>
        <p className="title">CRUD Fake</p>
        <input
          type="text"
          id="input"
          value={this.state.input_value}
          onChange={(event) => {
            this.setState({
              input_value: event.target.value,
            });
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") this.handeSubmit();
          }}
        />

        <button
          type="submit"
          onClick={() => {
            this.handeSubmit();
          }}
        >
          submit
        </button>

        <div className="name_container" id="name_container">
          {this.state.arr_rendering.map((item) => (
            <Content
              key={item.id}
              id={item.id}
              input_value={item.input_value}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyComponent;
