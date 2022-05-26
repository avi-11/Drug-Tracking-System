// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
contract Track is Ownable{
    enum profile{
        production,
        distributor,
        chemist,
        customer
    }
    struct med{
        uint stagecount;
        uint id;
        string name;
        string mfg;
        uint MRP;
        bool sold;
    }
    struct stage{
        uint time;
        address add;
    }
    uint n=0;
    string[] drugid;
    mapping(address => string) Profile; // profile for person at each stage
    mapping(string => med) drug; // drug details
    mapping(string => stage[]) track; // stage of drug with unique id
    function Addperson(address _address, string calldata pro) public onlyOwner {
        require(bytes(Profile[_address]).length==0,"Address already found");
        Profile[_address]=pro;
    }
    function AddDrug(string calldata _id, string  calldata _name, string  calldata _mfg, uint _MRP) public {
        require(keccak256(abi.encodePacked((Profile[msg.sender]))) ==keccak256(abi.encodePacked(("Production"))),"Only Production manager Add Product");//keccak256(abi.encodePacked((a)))
        require(drug[_id].id!=1,"Already Added");
        drug[_id]=med({
            stagecount:0,
            id:1,
            name:_name,
            mfg:_mfg,
            MRP:_MRP,
            sold: false
        });
        track[_id].push(stage({
            time : block.timestamp,
            add: msg.sender
        }));
        drugid[n]=_id;
        n++;
    }
    function transferdrug(string calldata _id,address _transferaddress) public {
        require(drug[_id].sold==false,"Drug already sold");
        require(track[_id][drug[_id].stagecount].add==msg.sender,"Only Current owner can teansfer");
        drug[_id].stagecount++;
        track[_id].push(stage({
            time : block.timestamp,
            add: _transferaddress
        }));
        if(keccak256(abi.encodePacked((Profile[_transferaddress]))) ==keccak256(abi.encodePacked(("customer"))) )
        {
           drug[_id].sold = true;
        }
    }
    function showDrug(string calldata _id) public view returns(med memory){
        return drug[_id];
    }
    function showDrugStage(string calldata _id) public view returns(stage[] memory){
        return track[_id];
    }
    function showmydrug() public view returns(string[] memory)
    {
        string[] memory owndrugid;
        uint j=0;
        for(uint i=0;i<drugid.length;i++)
        {
           if(track[drugid[i]][drug[drugid[i]].stagecount].add==msg.sender){
               owndrugid[j]=drugid[i];
               j++;
           }
        }
        return owndrugid;
    }
}
