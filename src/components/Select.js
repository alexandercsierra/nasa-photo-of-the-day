// import React from 'react';
// import styled from 'styled-components';

// const FormDiv = styled.div`
//     margin: 2%;

// `;



// const Select = (props) => {
//     const {date, setDate, setIsClickedState} = props;

//     return(
//         <FormDiv>
//             <form>
//                 <input type="date" onChange = {e => {
//                     setDate(`&date=${e.target.value}`)
                       
//                 }}></input>
//                 <button onClick = {e => {
//                     e.preventDefault();
//                     console.log(date); 
//                     setIsClickedState(false);
//                 }}>Close</button>
//             </form>
//         </FormDiv>
//     )
// }

// export default Select



import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components';




const DateDiv = styled.div`
    margin: 2%;

`;

const Button = styled.button`
  padding: .5%;
`;



export default function Select(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const {date, setDate, setIsClickedState, classState} = props


//   "2019-12-10"
const formatDate = (selectedDate) => {
  setDate("&date=" + selectedDate.getFullYear() + "-" + (selectedDate.getMonth()+1) + "-" + selectedDate.getDate());
  
};


  const handleDateChange = currentDate => {
    setSelectedDate(currentDate);
    formatDate(selectedDate);
  };

  

  return (
      <DateDiv >
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="center" alignItems="center">
        <KeyboardDatePicker color="white"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Choose a Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <Button className = "submit" onClick = {e => {e.preventDefault(); handleDateChange(selectedDate)}}>Submit</Button>
      </Grid>
      
     </MuiPickersUtilsProvider>
     </DateDiv>
  );
}