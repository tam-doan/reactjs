import React, { Component } from 'react';

class VacancySign extends React.Component{

  render() {
    var msg;
    if (this.props.hasvacancy) {
      msg = 'Vacancy';
    } else {
      msg = 'No Vacancy';
    }
    return <div>{msg}</div>;
  }
  
}

export default VacancySign;
