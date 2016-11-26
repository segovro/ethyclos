if (typeof web3 !== 'undefined')
	web3 = new Web3(web3.currentProvider);
else
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var ethyclosContract = web3.eth.contract([ {
	"constant" : false,
	"inputs" : [ {
		"name" : "_proposalNumber",
		"type" : "uint256"
	} ],
	"name" : "closeProposal",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_newMember",
		"type" : "address"
	}, {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "acceptAtCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityName",
		"type" : "string"
	}, {
		"name" : "_narrative",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_cImageLink",
		"type" : "string"
	}, {
		"name" : "_exchangeRate",
		"type" : "uint256"
	}, {
		"name" : "_transferTax",
		"type" : "uint256"
	}, {
		"name" : "_accumulationTax",
		"type" : "uint256"
	}, {
		"name" : "_importTax",
		"type" : "uint256"
	}, {
		"name" : "_creditRewardRate",
		"type" : "uint256"
	}, {
		"name" : "_defaultCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_defaultTrust",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	}, {
		"name" : "_quorum",
		"type" : "uint256"
	}, {
		"name" : "_bankCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_bankTrust",
		"type" : "uint256"
	} ],
	"name" : "createCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "notLike",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "sysAdmin",
	"outputs" : [ {
		"name" : "",
		"type" : "address",
		"value" : "0x931cd8a11adea607d690058458e49b55949927c7"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_transferTax",
		"type" : "uint256"
	}, {
		"name" : "_accumulationTax",
		"type" : "uint256"
	}, {
		"name" : "_importTax",
		"type" : "uint256"
	} ],
	"name" : "modifyCommunityTaxes",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_exchangeRate",
		"type" : "uint256"
	}, {
		"name" : "_creditRewardRate",
		"type" : "uint256"
	}, {
		"name" : "_defaultCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_defaultTrust",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	}, {
		"name" : "_quorum",
		"type" : "uint256"
	}, {
		"name" : "_bankCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_bankTrust",
		"type" : "uint256"
	} ],
	"name" : "modifyCommunityRates",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_newCommune",
		"type" : "address"
	} ],
	"name" : "transferCommunityCommune",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_alias",
		"type" : "string"
	}, {
		"name" : "_whisperID",
		"type" : "string"
	}, {
		"name" : "_narrative",
		"type" : "string"
	}, {
		"name" : "_imageLink",
		"type" : "string"
	} ],
	"name" : "modifyMemberInfo",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_proposalNumber",
		"type" : "uint256"
	} ],
	"name" : "getProposalVotes",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "int256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "bool",
		"value" : false
	}, {
		"name" : "",
		"type" : "bool",
		"value" : false
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_gIndex",
		"type" : "uint256"
	} ],
	"name" : "getCommunitybyIndex",
	"outputs" : [ {
		"name" : "_getCommunityID",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "newSysAdmin",
		"type" : "address"
	} ],
	"name" : "transferSysAdmin",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_mIndex",
		"type" : "uint256"
	} ],
	"name" : "getMPbyIndex",
	"outputs" : [ {
		"name" : "_getMemberID",
		"type" : "address",
		"value" : "0x"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getMemberInfo",
	"outputs" : [ {
		"name" : "",
		"type" : "bool",
		"value" : false
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_to",
		"type" : "address"
	}, {
		"name" : "_amount",
		"type" : "uint256"
	} ],
	"name" : "payment",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_newBank",
		"type" : "address"
	} ],
	"name" : "transferCommunityBank",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_borrower",
		"type" : "address"
	}, {
		"name" : "_credit",
		"type" : "uint256"
	}, {
		"name" : "_daysAfter",
		"type" : "uint256"
	} ],
	"name" : "endorseCredit",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "getTotals",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getMemberCredit",
	"outputs" : [ {
		"name" : "",
		"type" : "address",
		"value" : "0x0000000000000000000000000000000000000000"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "getCommunityRates",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_proposalCommunity",
		"type" : "uint256"
	}, {
		"name" : "_title",
		"type" : "string"
	}, {
		"name" : "_narrative",
		"type" : "string"
	}, {
		"name" : "_days",
		"type" : "uint256"
	}, {
		"name" : "_quorum",
		"type" : "uint256"
	} ],
	"name" : "newProposal",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_alias",
		"type" : "string"
	}, {
		"name" : "_whisperID",
		"type" : "string"
	}, {
		"name" : "_narrative",
		"type" : "string"
	}, {
		"name" : "_imageLink",
		"type" : "string"
	} ],
	"name" : "registerSystem",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "joinCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_communityName",
		"type" : "string"
	}, {
		"name" : "_narrative",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_cImageLink",
		"type" : "string"
	} ],
	"name" : "modifyCommunityInfo",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_candidateCommunity",
		"type" : "uint256"
	} ],
	"name" : "proposeAcceptanceAsMember",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_proposalNumber",
		"type" : "uint256"
	} ],
	"name" : "getProposal",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "address",
		"value" : "0x0000000000000000000000000000000000000000"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_proposalNumber",
		"type" : "uint256"
	}, {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getIfVoted",
	"outputs" : [ {
		"name" : "",
		"type" : "bool",
		"value" : false
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getMemberWallet",
	"outputs" : [ {
		"name" : "",
		"type" : "int256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "int256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getMemberStatus",
	"outputs" : [ {
		"name" : "",
		"type" : "bool",
		"value" : false
	}, {
		"name" : "",
		"type" : "bool",
		"value" : false
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "getCommunityManagement",
	"outputs" : [ {
		"name" : "",
		"type" : "address",
		"value" : "0x0000000000000000000000000000000000000000"
	}, {
		"name" : "",
		"type" : "address",
		"value" : "0x0000000000000000000000000000000000000000"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "like",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_proposalNumber",
		"type" : "uint256"
	}, {
		"name" : "_choice",
		"type" : "int8"
	} ],
	"name" : "vote",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_member",
		"type" : "address"
	} ],
	"name" : "getMemberLinks",
	"outputs" : [ {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_memberOfCommunity",
		"type" : "address"
	}, {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "kickOutCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [],
	"name" : "resignFromCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "getCommunityTaxes",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "getCommunityDescription",
	"outputs" : [ {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "string",
		"value" : ""
	}, {
		"name" : "",
		"type" : "bool",
		"value" : false
	}, {
		"name" : "",
		"type" : "uint256",
		"value" : "0"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"inputs" : [],
	"type" : "constructor"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_memberAddress",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_memberAlias",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_narrative",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "NewMember",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_creator",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_communityID",
		"type" : "uint256"
	} ],
	"name" : "NewCommunity",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_modifier",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "ModifyCommunity",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "_member",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_alias",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_communityName",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "JoinCommunity",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "_member",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_alias",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_communityName",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "ResignCommunity",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "_concept",
		"type" : "string"
	}, {
		"indexed" : true,
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"indexed" : true,
		"name" : "_sender",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_receiver",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_amount",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "Transfer",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_MoneyLender",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_borrowerAddress",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_cDealine",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_endorsedUoT",
		"type" : "uint256"
	} ],
	"name" : "Credit",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_moneyLender",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_borrower",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_creditCost",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_success",
		"type" : "bool"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "CreditExp",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "proposalNumber",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "community",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "narrative",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "creator",
		"type" : "address"
	} ],
	"name" : "ProposalAdded",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "voter",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "proposalNumber",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "vote",
		"type" : "int8"
	}, {
		"indexed" : false,
		"name" : "result",
		"type" : "int256"
	} ],
	"name" : "Voted",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "proposalNumber",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "result",
		"type" : "int256"
	}, {
		"indexed" : false,
		"name" : "quorum",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "active",
		"type" : "bool"
	} ],
	"name" : "ProposalResult",
	"type" : "event"
} ]);

var ethyclos = ethyclosContract
		.at("0x8df3A41F64fA7c019Bee1d1FB13b33D79062058d");

var accounts = web3.eth.accounts;
var nrAcc = accounts.length;

web3.eth.defaultAccount = accounts[0];
var myCoinbase = web3.eth.defaultAccount;

var totals = ethyclos.getTotals();
var nrMembers = totals[0];
var nrCommunities = totals[1];
var nrProposals = totals[2];
var nrGoods = totals[3];
var nrSells = totals[4];

var memberInfo = ethyclos.getMemberInfo(myCoinbase);
var myIsMember = memberInfo[0];
var myAlias = memberInfo[1];
var myDescription = memberInfo[2];
var myCommunity = memberInfo[3];

var wallet = ethyclos.getMemberWallet(myCoinbase);
var myBalance = wallet[0];
var myCreditLine = wallet[1];
var myTrust = wallet[2];
var myReputation = wallet[3];
var myLastTransaction = wallet[4];

var credit = ethyclos.getMemberCredit(myCoinbase);
var myMoneyLender = credit[0];
var myCreditTrust = credit[1];
var myCredit = credit[2];
var myCreditDeadline = credit[3];

var status = ethyclos.getMemberStatus(myCoinbase);
var isBank = ethyclos.getMemberStatus(myCoinbase)[0];
var isCommune = ethyclos.getMemberStatus(myCoinbase)[1];

var links = ethyclos.getMemberLinks(myCoinbase);
var myWhisper = links[0];
var myImage = links[1];

var myCommunityDescription = ethyclos.getCommunityDescription(myCommunity);
var myCommunityName = ethyclos.getCommunityDescription(myCommunity)[0];
var myCommunityDescription = ethyclos.getCommunityDescription(myCommunity)[1];
var myCurrencyName = ethyclos.getCommunityDescription(myCommunity)[2];
var myCommunityImage = ethyclos.getCommunityDescription(myCommunity)[3]
var myCommunityOpen = ethyclos.getCommunityDescription(myCommunity)[4];
var myCommunityNrM = ethyclos.getCommunityDescription(myCommunity)[5];

var myCommunityRates = ethyclos.getCommunityRates(myCommunity);
var myRate = myCommunityRates[0];
var mydefaultMemberCreditLine = myCommunityRates[1];
var mydefaultMemberTrust = myCommunityRates[2];

var myCommunityManagement = ethyclos.getCommunityManagement(myCommunity);
var myCommunityBankAccount = myCommunityManagement[0];
var myCommunityCommuneAccount = myCommunityManagement[1];
