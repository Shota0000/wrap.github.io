import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Jiro" };
  }

  NameChange(event) {
    const newName = event.target.value;
    this.setState({ name: newName });
    localStorage.setItem("flag", "");
  }

  render() {
    let user;
    var jsonObj = localStorage.getItem("Jiro");
    var Jiro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Taro");
    var Taro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Mamika");
    var Mamika = JSON.parse(jsonObj);
    let p1;
    let p2;
    //localStorage.clear()
    //localStorage.setItem("Jiroclap", 100);
    //localStorage.setItem("Jiroclaped", 0);
    //localStorage.setItem("Taroclap", 100);
    //localStorage.setItem("Taroclaped", 0);
    //localStorage.setItem("Mamikaclap", 100);
    //localStorage.setItem("Mamikaclaped", 0);

    localStorage.setItem("calcJiroclap", 0);
    localStorage.setItem("calcTaroclap", 0);
    localStorage.setItem("calcMamikaclap", 0);

    if (this.state.name === "Jiro") {
      if (localStorage.getItem("Jiroclap") == null) {
        p1 = <p>拍手できる：100</p>;
      } else {
        p1 = <p>拍手できる：{localStorage.getItem("Jiroclap")}</p>;
      }

      if (localStorage.getItem("Jiroclaped") == null) {
        p2 = <p> 拍手された：0</p>;
      } else {
        p2 = <p>　拍手された：{localStorage.getItem("Jiroclaped")}</p>;
      }

      user = (
        <div class="info">
          <img src={Jiro.image} class="icon" />
          {p1}
          {p2}
        </div>
      );
      localStorage.setItem("poster", "Jiro");
    }

    if (this.state.name === "Taro") {
      if (localStorage.getItem("Taroclap") == null) {
        p1 = <p>拍手できる：100</p>;
      } else {
        p1 = <p>拍手できる：{localStorage.getItem("Taroclap")}</p>;
      }

      if (localStorage.getItem("Taroclaped") == null) {
        p2 = <p> 拍手された：0</p>;
      } else {
        p2 = <p>　拍手された：{localStorage.getItem("Taroclaped")}</p>;
      }

      user = (
        <div class="info">
          <img src={Taro.image} class="icon" />
          {p1}
          {p2}
        </div>
      );
      localStorage.setItem("poster", "Taro");
    }

    if (this.state.name === "Mamika") {
      if (localStorage.getItem("Mamikaclap") == null) {
        p1 = <p>拍手できる：100</p>;
      } else {
        p1 = <p>拍手できる：{localStorage.getItem("Mamikaclap")}</p>;
      }

      if (localStorage.getItem("Mamikaclaped") == null) {
        p2 = <p> 拍手された：0</p>;
      } else {
        p2 = <p>　拍手された：{localStorage.getItem("Mamikaclaped")}</p>;
      }

      user = (
        <div class="info">
          <img src={Mamika.image} class="icon" />
          {p1}
          {p2}
        </div>
      );
      localStorage.setItem("poster", "Mamika");
    }

    return (
      <div className="header">
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
    );
  }
}

export default Header;
