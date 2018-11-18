import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomClicks: 1,
      roomShow: true,
      adultClicks: 1,
      adultShow: true,
      childrenClicks: 0,
      childrenShow: true
    };


  }

  increamentItem() {
    if (this.state.roomClicks) {
      this.setState({ roomClicks: this.state.roomClicks + 1 });
    }

  }

  decreaseItem() {
    if (this.state.roomClicks) {
      this.setState({ roomClicks: this.state.roomClicks - 1 });
    }

  }

  toggleClick() {
    this.setState({ roomShow: !this.state.roomShow })
  }


  adultsIncreamentItem() {
    if (this.state.adultClicks <= 10) {
      this.setState({ adultClicks: this.state.adultClicks + 1 });
    }

  }

  adultsDecreaseItem() {
    if (this.state.adultClicks) {
      this.setState({ adultClicks: this.state.adultClicks - 1 });
    }

  }

  adultsToggleClick() {
    this.setState({ adultShow: !this.state.adultShow })
  }


  childrenIncreamentItem() {
    if (this.state.childrenClicks <= 4) {
      this.setState({ childrenClicks: this.state.childrenClicks + 1 });
    }

  }

  childrenDecreaseItem() {
    if (this.state.childrenClicks >= 0) {
      this.setState({ childrenClicks: this.state.childrenClicks - 1 });
    }

  }

  childrenToggleClick() {
    this.setState({ childrenShow: !this.state.childrenShow })
  }

  results() {
    if (this.state.roomClicks + this.state.adultClicks) {
      this.setState({ res: this.state.res });
    }
  }

  render() {

    return (
      <div className="container">



        <table style={{ marginTop: "10px" }} className="table z-depth-1 table-responsive">

          <thead>
            <tr style={{ lineHeight: "5px" }}>
              <th scope="col"> </th>
              <th scope="col"> <i className="fa-lg fas fa-users" style={{ color: "DodgerBlue" }}></i> <span style={{ marginLeft: "10px", color: "DodgerBlue", fontSize: "15px", fontStretch: "10" }}> Choose number of <b>people</b> </span> </th>

              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>


            <tr style={{ lineHeight: "5px" }}>
              <th scope="row"></th>
              <td> <i className="fa-lg fas fa-bed" style={{ color: "DodgerBlue" }}></i> <span style={{ paddingLeft: "10px", color: "DodgerBlue", fontSize: "15px" }}> ROOMS</span></td>
              <td>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light blue" disabled={this.state.roomClicks <= 1} onClick={this.decreaseItem.bind(this)}> <i className="material-icons"> remove</i> </a>
              </td>
              <td>
                <span>
                  {this.state.roomShow ? <p style={{ marginBottom: "25px", fontSize: "20px", marginLeft: "10px" }}> {this.state.roomClicks}</p> : ""}
                </span>
              </td>
              <td>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light red" disabled={this.state.roomClicks >= 5} onClick={this.increamentItem.bind(this)}> <i className="material-icons">add</i> </a>
              </td>
            </tr>


            <tr style={{ lineHeight: "5px" }}>
              <th scope="row"></th>
              <td> <i className="fa-lg fas fa-user" style={{ color: "DodgerBlue" }}></i> <span style={{ paddingLeft: "10px", color: "DodgerBlue", fontSize: "15px" }}>ADULTS</span> </td>
              <td>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light blue" disabled={this.state.adultClicks <= 0} onClick={this.adultsDecreaseItem.bind(this)} ><i className="material-icons"> remove</i></a>



              </td>
              <td><span>


                {this.state.adultShow ? <p style={{ marginBottom: "25px", fontSize: "20px", marginLeft: "10px" }}> {this.state.adultClicks + this.state.roomClicks}</p> : ""}

              </span></td>
              <td>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light red" disabled={this.state.adultClicks >= 3} onClick={this.adultsIncreamentItem.bind(this)}> <i className="material-icons">add</i> </a>
              </td>
            </tr>



            <tr style={{ lineHeight: "5px" }}>
              <th scope="row"></th>
              <td> <i className="fa-lg fas fa-child" style={{ color: "DodgerBlue" }}></i><span style={{ paddingLeft: "10px", color: "DodgerBlue", fontSize: "15px" }}> CHILDREN</span></td>

              <td style={{ width: "40px" }}>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light blue" disabled={this.state.childrenClicks <= 0} onClick={this.childrenDecreaseItem.bind(this)}> <i className="material-icons">remove</i>
                </a>
              </td>

              <td style={{ paddingLeft: "10px", width: "40px" }}>
                <span>
                  {this.state.childrenShow ? <p style={{ marginBottom: "25px", fontSize: "20px", marginLeft: "8px" }}> {(this.state.childrenClicks) + (this.state.roomClicks - this.state.adultShow)}</p> : ""}
                </span>
              </td>

              <td>
                <a href="#!" className="btn-floating btn-small waves-effect waves-light red" disabled={this.state.childrenClicks >= 5} onClick={this.childrenIncreamentItem.bind(this)}> <i className="material-icons">add</i> </a>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
