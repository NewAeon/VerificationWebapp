import React , {Component} from 'react'
import Web3 from 'web3';
import ethTx from 'ethereumjs-tx';

class Explore extends Component {
    web3 =  null;
    constructor(props){
        super(props);
        this.web3 =  new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
        this.state = {hash : "",url : "" , show : false,
        _age: "", _sex: "", _gpa :"",_major : "",_universityName :"",_nationalID:"",_dateOfBirth:"",_placeOfBirth:"",
        showInfo:false,txHash:""
    
    
    
    
    
    };
    
    }

    setHash = (y) =>{
        this.setState({hash:y.target.value});
        console.log(this.state.hash);
    }
    searchForHash= (_hash)=>{
        let abi=[
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    },
                    {
                        "name": "_firstName",
                        "type": "string"
                    },
                    {
                        "name": "_lastName",
                        "type": "string"
                    },
                    {
                        "name": "_age",
                        "type": "string"
                    },
                    {
                        "name": "_sex",
                        "type": "string"
                    },
                    {
                        "name": "_gpa",
                        "type": "string"
                    },
                    {
                        "name": "_major",
                        "type": "string"
                    },
                    {
                        "name": "_universityName",
                        "type": "string"
                    },
                    {
                        "name": "_nationalID",
                        "type": "string"
                    },
                    {
                        "name": "_dateOfBirth",
                        "type": "string"
                    },
                    {
                        "name": "_placeOfBirth",
                        "type": "string"
                    }
                ],
                "name": "addHash",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    },
                    {
                        "name": "_transaction",
                        "type": "string"
                    }
                ],
                "name": "saveTransaction",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_url",
                        "type": "string"
                    }
                ],
                "name": "setUrl",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hast",
                        "type": "string"
                    }
                ],
                "name": "checkHashExsist",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getAge",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getDateOfBirth",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getFirstName",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getGPA",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "getHash",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getHashLength",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getLastName",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getMajor",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getNationalID",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getPlaceOfBirth",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getSex",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getTransactions",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hash",
                        "type": "string"
                    }
                ],
                "name": "getUniversityName",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUrl",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
     const contract =  this.web3.eth.contract(abi);
const privateKey = "EEFD9B722FDB3186875E521C87745DC102ABE04A944BCC485DAB385D2949842F";
const publicKey ="0xaD3843ed864169D4e840651A49bD794F12095162";
        const smartInstance = contract.at("0xc520536515fd31aafe224f1da20da588495a74c6");

//let data = smartInstance.getTransactions.getData(_hash);
let txHash = smartInstance.getTransactions.call(this.state.hash);
let _dateOfBirth=smartInstance.getDateOfBirth.call(this.state.hash);
let _placeOfBirth=smartInstance.getPlaceOfBirth.call(this.state.hash);
let _nationalID=smartInstance.getNationalID.call(this.state.hash);
let _universityName=smartInstance.getFirstName.call(this.state.hash);
let _major=smartInstance.getMajor.call(this.state.hash);
let _gpa =smartInstance.getGPA.call(this.state.hash);
let _sex=smartInstance.getSex.call(this.state.hash);
let _firstName=smartInstance.getFirstName.call(this.state.hash);
let _lastName=smartInstance.getLastName.call(this.state.hash);
let _name=_firstName +" "+_lastName;
this.setState({
    txHash : txHash,
_dateOfBirth:_dateOfBirth,
_placeOfBirth:_placeOfBirth,
_nationalID:_nationalID,
_universityName:_universityName,
_major:_major,
_gpa:_gpa,
_sex:_sex,
_name:_name,
showInfo :true 



})




if(txHash){
   
   this.setState({hash:txHash, show:true});
   this.setState({})
    
}

    }

    render(){
        return (<div>
            <div className="container">
    <br/>
	<div className="row justify-content-center search-box">
                        <div className="col-12 col-md-10 col-lg-8">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                        <input onChange={this.setHash} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                    <div className="col-auto">
                                        <button onClick={this.searchForHash} className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                </div>
                                <a hidden={!this.state.show} href={`https://rinkeby.etherscan.io/tx/${this.state.txHash}`}>{this.state.hash}</a>
                        
                                <div  hidden={!this.state.showInfo}>
                      <p>Name : {this.state._name}</p>
                      
                      <p>Age : {this.state._age}</p>
                      <p>Sex : {this.state._sex}</p>
                      <p>GPA : {this.state._gpa}</p>
                      <p>Major :{this.state._major}</p>
                      <p>University Name; :{this.state._universityName}</p>
                      <p>National ID :{this.state._nationalID}</p>
                      <p>Date Of Birth :{this.state._dateOfBirth}</p>
                      <p>Place Of Birth :{this.state._placeOfBirth}</p>

                      
                          
                      
                      </div>
                        
                    </div>
                        </div>
                      
</div>
        </div>)
    }
}

export default Explore;