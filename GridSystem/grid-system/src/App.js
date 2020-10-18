import { Button, Grid, Typography } from '@material-ui/core'
import { wait } from '@testing-library/react'
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Button, Grid, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'
// function App() {
//   return (
//     <Grid container space={2}>
//       <Grid xs={12} sm={12} md={4} lg={3} xl={4} style={{ backgroundColor: 'red' }}> 
//                 <div style={{padding: 24}}>
//                     <Button style={{
//                         height: '100%', width: '100%', backgroundColor: 'yellow',
//                         padding: 50,
//                       }}>
//                       thieen
//                     </Button>  
//                 </div>
//         </Grid>
//         <Grid xs={12} sm={6} md={4} lg={3} xl={4} style={{backgroundColor: 'red'}}> 
//           <Button style={{height: '100%', width: '100%', backgroundColor: 'green'}}>
//           thieen
//         </Button>
//         </Grid>
//           <Grid xs={12} sm={6} md={4} lg={6} xl={4} style={{backgroundColor: 'red'}}> 
//         <Table>
//           <TableHead>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>
                
//               </TableCell>
//             </TableRow>
//             {/* {data.map(e=>row)} */}
//           </TableBody>
//           <TablePagination>
//           </TablePagination>
//           </Table>
//         </Grid>
//     </Grid>
//   );
// }

// export default App;


import React, { Component } from 'react'
import GridButton from './components/GridButton'

export default class App extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      left: 10,
      top: 10,
      loading: true,
      queue: [] // load old queue
    }
    setInterval(() => {
      const current = new Date().getMilliseconds();
      // 9h 10 10 - 10h
      // duyệt xem thằng nào nhỏ hơn tức là nó đã xảy ra
      this.state.queue.forEach((e) => {
        if (e.time < current) {
          alert(e.noti)
          const oldQueue = [...this.state.queue ]
        }
      })
      // loại bỏ những thằng đã xảy ra
      this.setState({
            queue: oldQueue.filter( e2 => e2.time < current)
          })
    }, 1000)
  }

  componentDidMount = () => {
    
  }

  click = () => {
    const newAlarm = {
      year: 2020,
      month: 12,
      day: 1,
      hms: 1,
      noti: this.state.noti
    }
    this.setState({
      queue: [...this.state.queue, newAlarm]
    })
    
  }

  render() {
    
    return (
      <Grid>
        <input onChange={(event) => {
          this.setState({
            noti: event.target.value
          })
        }} />
        <input onChange={(event) => {
          this.setState({
            min: event.target.value
          })
        }} />
          <GridButton onClick={this.click}>
            <Typography>Add</Typography>
          </GridButton>  
        </Grid>
    )
  }
}


