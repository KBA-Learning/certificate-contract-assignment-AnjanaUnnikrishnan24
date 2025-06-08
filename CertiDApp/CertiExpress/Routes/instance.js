import { Contract,Wallet,WebSocketProvider } from "ethers";
import abi from './Assets/Cert.json' with {type:"json"} ;
import address from './Assets/deployed_addresses.json' with{type:"json"};

//const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
//const signer = await provider.getSigner();

const provider = new WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/xJprGc0d_CWJRFVnAwQbBWJaAMv-wlhA");

const wallet = new Wallet('87ebb9931fdbf242fe822d9efe428480026defe9a6b0c883029d6632882d1727', provider);

//console.log(signer);
//console.log(address);
//console.log(abi);

//export const contObject = new ethers.Contract(address['CertModule#Cert'],abi.abi,signer);

export const contObject = new Contract(address["CertModule#Cert"],  abi.abi, wallet);

