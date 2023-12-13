import Web3, { providers } from "web3";

try {
    const Web3 = require("web3");
  
    const web3 = new Web3(
      new providers.HttpProvider(
        "http://localhost:8545"
      )
    );
  
    // Rest of your code...
  } catch (error) {
    console.error("An error occurred:", error);
  }
  
web3.eth.defaultAccount = web3.eth.accounts[0];

var abi = web3.eth.Contract([
	{
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_fName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
])

const Contractadd = abi.at('0x3a4c58542b5f1863d6bcf458ddfa469c03732b5a');

console.log(Contractadd);

Contractadd.getInstructor(function(error, result){
    if(!error){
        // console.log(result);
        $('#instructor').text(result[0]+ '('+result[1]+'years old)');
    }
    else{
        console.log(error);
    }
});

$("button").click(function(){
    var name = $('#name').val();
    var age = $('#age').val();
    Contractadd.setInstructor(name, age, {from: web3.eth.accounts[0]});
})






