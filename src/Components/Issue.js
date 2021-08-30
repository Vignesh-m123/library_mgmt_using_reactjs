import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'reactstrap';

class Issue extends Component {
	constructor(props) {
		super(props)
	this.state = {
		data:[],
    //         bookid: '',
    //         bookname: '',
    //         bookstatus:true,
            
		}
	}
    componentDidMount() {
        fetch('/book')
          .then(res => res)
          .then(book => this.setState({data:book}, () => console.log('book fetched...', book)));
      
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/api/tregpost', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	// function Item(props){
	// 	return( 
	// 		<li>{props.value}</li>
	// 		);
	//  }
	
	render()
{
	 	const {data}= this.state
		return (
		<ul>
		  {data.map((item) =><li>{item}</li>
			) }
		</ul>
	  )
	}
}


export default Issue;

				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		// 			<form onSubmit={this.submitHandler}>
					
		// 			<div className="form-group">
		// 			<label for="tid">Enter ISBN:</label>
		// 				<input
		// 				className="form-control"
		// 					type="text"
		// 					name="book"
		// 					value={isbn}
		// 					onChange={this.changeHandler}
		// 				/>
		// 			</div>
        //             {this.state.book.map(book =>{
        //                  if(this.state.isbn === book.ISBN)
        //                  return(
        //                  <h4>Book: {book.Name} Is Available</h4>
        //                  )
        //             })}
                    
		// 			<div className="form-group">  <label for="reader_id">Enter Reader Id:</label>
		// 				<input className="form-control"
		// 					type="text"
		// 					name="reader_id"
		// 					value={reader_id}
		// 					onChange={this.changeHandler}
		// 				/>
		// 			</div>
        //             {this.state.reader.map(re =>{
        //                  if(this.state.reader_id === re.id)
        //                  return(
        //                  <h4>Name: {re.name} Is Verified</h4>
        //                  )
        //             })}
		// 			<button type="submit" class="btn btn-primary">SUBMIT</button>
		// 		</form> </div>
		// 		</div>
		// 	</div>
		// )

