import React from 'react';
import PropTypes from 'prop-types';

export const QuestionDetailAnswered =(props) => {

    let optionOneTotal=props.question.optionOne.votes.length;
    let optionTwoTotal=props.question.optionTwo.votes.length;
    let totalAnswered=optionOneTotal+optionTwoTotal;
    let optionOnePercent=parseInt((optionOneTotal/totalAnswered)*100);
    let optionTwoPercent=parseInt((optionTwoTotal/totalAnswered)*100);
    let optionOneIndicatorText, optionTwoIndicatorText;

    let optionOneActive;
    let optionTwoActive;
    if(props.question.optionOne.votes.includes(props.loggedinID)){
      optionOneActive="indicator active";
      optionTwoActive="indicator";
      optionOneIndicatorText=<span class='indicatorText'>YOUR CHOICE'</span>;
      optionTwoIndicatorText='';
    } else {
      optionOneActive="indicator";
      optionTwoActive="indicator active";
      optionOneIndicatorText='';
      optionTwoIndicatorText=<span className='indicatorText'>YOUR CHOICE'</span>;
    }

     return (
          <div className='QuestionDisplay answered'>
            <h3><span className={optionOneActive}>►</span> {props.question.optionOne.text}</h3>
            <p><strong className='votesLabel'>Votes: </strong>
              (
              {optionOneTotal} of
              {totalAnswered}) {optionOnePercent}%
              {optionOneIndicatorText}

            </p>

              <h3><span className={optionTwoActive}>►</span> {props.question.optionTwo.text}</h3>
              <p><strong className='votesLabel'>Votes: </strong>
                (
                {optionTwoTotal} of
                {totalAnswered}) {optionTwoPercent}%
                {optionTwoIndicatorText}
              </p>
         </div>
     );
  }

//default export  QuestionDetailAnswered
