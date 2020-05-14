import React from "react";
import TodoList from "./TodoList";
class Form extends React.Component {
  constructor(props) {
    super(props);
    const todos = [
      {
        id: 1,
        poster: "Jiro",
        receiver: "Taro",
        contents: "今日はいい天気ですね！",
        time: "2020/5/10 18:45",
        wrapcount: 0
      }
    ];

    this.state = {
      todos: JSON.parse(localStorage.getItem("todoList")) || todos,
      count: todos.length + 1,
      content: "",
      name: "Jiro",
      hasContentError: false
      /*JiroCount:0,
      TaroCount:0,
      MamikaCount:0*/
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  NameChange(event) {
    const newName = event.target.value;
    this.setState({ name: newName });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const frag = event.target.value.length >= 5;
    this.setState({
      content: inputValue,
      hasContentError: frag
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var today = new Date();
    var month = today.getMonth() + 1;
    var str =
      today.getFullYear() +
      "/" +
      month +
      "/" +
      today.getDate() +
      "/ " +
      today.getHours() +
      ":" +
      today.getMinutes();
    const poster = localStorage.getItem("poster");
    const receiver = localStorage.getItem("receiver");
    const contents = this.state.content;
    const time = str;
    const wrapcount = 0;
    const id = this.state.count;
    //this.setState({ count: this.state.count + 1 });

    this.state.todos.unshift({
      id: id,
      poster: poster,
      receiver: receiver,
      contents: contents,
      time: time,
      wrapcount: wrapcount
    });

    this.setState({ count: id + 1 });
    localStorage.setItem("todoList", JSON.stringify(this.state.todos));

    /*if (localStorage.getItem("todoList") !== undefined) {
      this.setState({
        todos: this.state.todos.concat(
          JSON.parse(localStorage.getItem("todoList"))
        )
      });
      localStorage.setItem("todoList", JSON.stringify(this.state.todos));
    }*/

    /*var obj1 = {
      id: id,
      poster: poster,
      receiver: receiver,
      contents: contents,
      time: time,
      wrapcount: wrapcount
    };
    var tmp = JSON.stringify(obj1);
    var key = String(id);
    var key2 = String(id);
    localStorage.setItem(key, tmp);
    localStorage.setItem("key",key2)
    */
  }

  render() {
    let user;
    var jsonObj = localStorage.getItem("Jiro");
    var Jiro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Taro");
    var Taro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Mamika");
    var Mamika = JSON.parse(jsonObj);
    localStorage.setItem("todoList", JSON.stringify(this.state.todos));

    if (this.state.name === "Jiro") {
      user = (
        <div class="info">
          <img src={Jiro.image} class="icon" />
        </div>
      );
      localStorage.setItem("receiver", "Jiro");
    }

    if (this.state.name === "Taro") {
      user = (
        <div class="info">
          <img src={Taro.image} class="icon" />
        </div>
      );
      localStorage.setItem("receiver", "Taro");
    }

    if (this.state.name === "Mamika") {
      user = (
        <div class="info">
          <img src={Mamika.image} class="icon" />
        </div>
      );
      localStorage.setItem("receiver", "Mamika");
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="contents">
            {user}
            <select
              class="classic"
              onChange={event => {
                this.NameChange(event);
              }}
            >
              <option>Jiro</option>
              <option>Taro</option>
              <option>Mamika</option>
            </select>
          </div>
          <textarea
            class="inputForm"
            value={this.state.content}
            onChange={event => {
              this.handleContentChange(event);
            }}
          />
          <input
            type="submit"
            value="投稿"
            class="submit"
            disabled={!this.state.hasContentError}
          />
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default Form;
