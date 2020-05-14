import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Number(localStorage.getItem(this.props.id + "c")) || 0,
      flag: false,
      JiroCount: Number(localStorage.getItem(this.props.id + "j")) || 0,
      TaroCount: Number(localStorage.getItem(this.props.id + "t")) || 0,
      MamikaCount: Number(localStorage.getItem(this.props.id + "m")) || 0,
      JiroClickedCount: 0,
      TaroClickedCount: 0,
      MamikaClickedCount: 0
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  flag() {
    this.setState({ flag: false });
  }

  handleClick() {
    localStorage.setItem(this.props.id + "c", this.state.count + 1);
    this.setState({ count: this.state.count + 1 });
    if (localStorage.getItem("poster") === "Jiro") {
      //localStorage.setItem("Jiroclap", 100);
      //localStorage.setItem("JiroCount", this.state.JiroCount + 1);
      localStorage.setItem(this.props.id + "j", this.state.JiroCount + 1);
      this.setState({ JiroCount: this.state.JiroCount + 1 });
      let sum = Number(localStorage.getItem("calcJiroclap")) + 1;
      localStorage.setItem("calcJiroclap", sum);
      //console.log(sum);
      localStorage.setItem("Jiroclap", 100 - sum * 2);
      //console.log(localStorage.getItem("Jiroclap"));|| localStorage.getItem("poster")===this.props.poster || localStorage.getItem("receiver")===this.props.receiver
      if (
        this.state.JiroCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        this.setState({ flag: true });
        //localStorage.setItem("flag", "true");
        localStorage.setItem("count", this.state.count);
        this.setState({ count: this.state.count });
        localStorage.setItem("JiroCount", this.state.JiroCount);
        this.setState({ JiroCount: this.state.JiroCount });
        localStorage.setItem("Jiroclap", 100 - (sum - 1) * 2);
        localStorage.setItem(this.props.id + "c", this.state.count);
        localStorage.setItem(this.props.id + "j", this.state.JiroCount);
      }
    } else if (localStorage.getItem("poster") === "Taro") {
      //localStorage.setItem("Taroclap", 100);
      //localStorage.setItem("TaroCount", this.state.TaroCount + 1);
      localStorage.setItem(this.props.id + "t", this.state.TaroCount + 1);
      this.setState({ TaroCount: this.state.TaroCount + 1 });
      let sum = Number(localStorage.getItem("calcTaroclap")) + 1;
      localStorage.setItem("calcTaroclap", sum);
      //console.log(sum);
      localStorage.setItem("Taroclap", 100 - sum * 2);
      //console.log(localStorage.getItem("Taroclap"));
      if (
        this.state.TaroCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        this.setState({ flag: true });
        //localStorage.setItem("flag", "true");
        localStorage.setItem("count", this.state.count);
        this.setState({ count: this.state.count });
        localStorage.setItem("TaroCount", this.state.TaroCount);
        this.setState({ TaroCount: this.state.TaroCount });
        localStorage.setItem("Taroclap", 100 - (sum - 1) * 2);
        localStorage.setItem(this.props.id + "c", this.state.count);
        localStorage.setItem(this.props.id + "t", this.state.TaroCount);
      }
    } else if (localStorage.getItem("poster") === "Mamika") {
      //localStorage.setItem("Mamikaclap", 100);
      //localStorage.setItem("MamikaCount", this.state.MamikaCount + 1);
      localStorage.setItem(this.props.id + "m", this.state.MamikaCount + 1);
      this.setState({ MamikaCount: this.state.MamikaCount + 1 });
      let sum = Number(localStorage.getItem("calcMamikaclap")) + 1;
      localStorage.setItem("calcMamikaclap", sum);
      ///console.log(sum);
      localStorage.setItem("Mamikaclap", 100 - sum * 2);
      console.log(localStorage.getItem("Mamikaclap"));
      if (
        this.state.MamikaCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        this.setState({ flag: true });
        //localStorage.setItem("flag", "true");
        localStorage.setItem("count", this.state.count);
        this.setState({ count: this.state.count });
        localStorage.setItem("MamikaCount", this.state.MamikaCount);
        this.setState({ MamikaCount: this.state.MamikaCount });
        localStorage.setItem("Mamikaclap", 100 - (sum - 1) * 2);
        localStorage.setItem(this.props.id + "c", this.state.count);
        localStorage.setItem(this.props.id + "m", this.state.MamikaCount);
      }
    }

    if (this.props.receiver === "Jiro") {
      this.setState({ JiroClickedCount: this.state.JiroClickedCount + 1 });
      let sum = Number(localStorage.getItem("Jiroclaped")) + 1;
      localStorage.setItem("Jiroclaped", sum);
      console.log(sum);
      if (
        this.state.TaroCount > 14 ||
        this.state.MamikaCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Jiroclaped", sum - 1);
      }
    } else if (this.props.receiver === "Taro") {
      this.setState({ TaroClickedCount: this.state.TaroClickedCount + 1 });
      let sum = Number(localStorage.getItem("Taroclaped")) + 1;
      localStorage.setItem("Taroclaped", sum);
      console.log(sum);
      if (
        this.state.JiroCount > 14 ||
        this.state.MamikaCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Taroclaped", sum - 1);
      }
    } else if (this.props.receiver === "Mamika") {
      this.setState({ MamikaClickedCount: this.state.MamikaClickedCount + 1 });
      let sum = Number(localStorage.getItem("Mamikaclaped")) + 1;
      localStorage.setItem("Mamikaclaped", sum);
      console.log(sum);
      if (
        this.state.TaroCount > 14 ||
        this.state.JiroCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Mamikaclaped", sum - 1);
      }
    }

    if (this.props.poster === "Jiro") {
      this.setState({ JiroClickedCount: this.state.JiroClickedCount + 1 });
      let sum = Number(localStorage.getItem("Jiroclaped")) + 1;
      localStorage.setItem("Jiroclaped", sum);
      console.log(sum);
      if (
        this.state.TaroCount > 14 ||
        this.state.MamikaCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Jiroclaped", sum - 1);
      }
    } else if (this.props.poster === "Taro") {
      this.setState({ TaroClickedCount: this.state.TaroClickedCount + 1 });
      let sum = Number(localStorage.getItem("Taroclaped")) + 1;
      localStorage.setItem("Taroclaped", sum);
      console.log(sum);
      if (
        this.state.JiroCount > 14 ||
        this.state.MamikaCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Taroclaped", sum - 1);
      }
    } else if (this.props.poster === "Mamika") {
      this.setState({ MamikaClickedCount: this.state.MamikaClickedCount + 1 });
      let sum = Number(localStorage.getItem("Mamikaclaped")) + 1;
      localStorage.setItem("Mamikaclaped", sum);
      console.log(sum);
      if (
        this.state.TaroCount > 14 ||
        this.state.JiroCount > 14 ||
        localStorage.getItem("poster") === this.props.poster ||
        localStorage.getItem("poster") === this.props.receiver
      ) {
        localStorage.setItem("Mamikaclaped", sum - 1);
      }
    }
  }

  onMouseEnter() {
    this.setState({ hovered: true });
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    let poster;
    let receiver;
    /*let key = localStorage.getItem("key")
    console.log(key);
    let jsonObj = localStorage.getItem(key);
    var content = JSON.parse(jsonObj);*/
    var jsonObj = localStorage.getItem("Jiro");
    var Jiro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Taro");
    var Taro = JSON.parse(jsonObj);
    jsonObj = localStorage.getItem("Mamika");
    var Mamika = JSON.parse(jsonObj);

    if (this.props.poster === "Jiro") {
      poster = (
        <div class="info">
          <img src={Jiro.image} class="icon" />
        </div>
      );
    } else if (this.props.poster === "Taro") {
      poster = (
        <div class="info">
          <img src={Taro.image} class="icon" />
        </div>
      );
    } else if (this.props.poster === "Mamika") {
      poster = (
        <div class="info">
          <img src={Mamika.image} class="icon" />
        </div>
      );
    }

    if (this.props.receiver === "Jiro") {
      receiver = (
        <div class="info">
          <img src={Jiro.image} class="icon" />
        </div>
      );
    } else if (this.props.receiver === "Taro") {
      receiver = (
        <div class="info">
          <img src={Taro.image} class="icon" />
        </div>
      );
    } else if (this.props.receiver === "Mamika") {
      receiver = (
        <div class="info">
          <img src={Mamika.image} class="icon" />
        </div>
      );
    }

    return (
      <div
        class="submitted"
        onMouseLeave={() => {
          this.setState({ flag: false });
          console.log(this.state.flag);
          if (document.getElementById("b1").disabled === true) {
            // disabled属性を削除
            document.getElementById("b1").removeAttribute("disabled");
          }
        }}
      >
        <div class="posted">
          {poster}
          <h1>→</h1>
          {receiver}
        </div>
        <div>
          <p>{this.props.contents}　</p>
          <h1 class="count">{this.state.count}</h1>
          {/* <button>タグ内でonClickイベントを追加してください */}
          <div>
            <button
              id="b1"
              /*onMouseLeave={() => {
               // console.log("a");
                this.setState({ flag: false });
              }}*/
              onClick={() => {
                this.handleClick();
              }}
              disabled={this.state.flag}
            >
              拍手
            </button>
            <p class="wrap">
              拍手一覧　Jiro:{this.state.JiroCount} Taro:{this.state.TaroCount}{" "}
              Mamika:{this.state.MamikaCount}
            </p>
          </div>
          <span class="time">{this.props.time}　</span>
          <div class="clear" />
        </div>
      </div>
    );
  }
}

export default Todo;
