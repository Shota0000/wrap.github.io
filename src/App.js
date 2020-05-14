import React from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // handleClickメソッドを定義してください
  render() {
    var obj1 = {
      name: "Jiro",
      image:
        "https://1.bp.blogspot.com/-09DZ043oLyY/W7WbO-LuNuI/AAAAAAABPPo/1hmEGG8j6BI_T09wsJH72psLBQSOSfbwgCLcBGAs/s400/halloween_chara4_ookamiotoko.png",
      clap: 100,
      claped: 0
    };

    var obj2 = {
      name: "Taro",
      image:
        "https://3.bp.blogspot.com/-i-FxBmcAJg4/UT10Kvl0MJI/AAAAAAAAOsk/knkH22IM-DQ/s400/fantasy_wolfman.png",
      clap: 100,
      claped: 0
    };

    var obj3 = {
      name: "Mamika",
      image:
        "https://2.bp.blogspot.com/-Bicy3o-MJU0/Vw5KYL1FwCI/AAAAAAAA5rY/0_bwrJCWRQ0XwncZ3o_sw7kQjob45pnzACLcB/s450/christian_syuudoujo.png",
      clap: 100,
      claped: 0
    };

    var tmp = JSON.stringify(obj1);
    localStorage.setItem("Jiro", tmp);
    tmp = JSON.stringify(obj2);
    localStorage.setItem("Taro", tmp);
    tmp = JSON.stringify(obj3);
    localStorage.setItem("Mamika", tmp);

    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
