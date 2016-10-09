if (typeof web3 !== 'undefined')
	web3 = new Web3(web3.currentProvider);
else
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var creditcommonsContract = web3.eth.contract([ {
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
		"name" : "_communityJ",
		"type" : "uint256"
	} ],
	"name" : "acceptAtCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "sysAdmin",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_memberG",
		"type" : "address"
	} ],
	"name" : "getMember",
	"outputs" : [ {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "int256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
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
		"name" : "_description",
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
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "int256"
	}, {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "bool"
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
		"type" : "uint256"
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
		"type" : "address"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_memberG",
		"type" : "address"
	} ],
	"name" : "getMemberWhisper",
	"outputs" : [ {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "string"
	} ],
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
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [],
	"name" : "transfer",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityG",
		"type" : "uint256"
	} ],
	"name" : "getCommunityRates",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityName",
		"type" : "string"
	}, {
		"name" : "_description",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_creditLine",
		"type" : "uint256"
	}, {
		"name" : "_creditLimit",
		"type" : "uint256"
	}, {
		"name" : "_exchangeCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	} ],
	"name" : "createCommunity",
	"outputs" : [],
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
		"name" : "_description",
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
		"name" : "_buyer",
		"type" : "address"
	}, {
		"name" : "_description",
		"type" : "string"
	}, {
		"name" : "_sellAmount",
		"type" : "uint256"
	} ],
	"name" : "createsell",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_to",
		"type" : "address"
	}, {
		"name" : "_fromAmount",
		"type" : "uint256"
	} ],
	"name" : "transfer",
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
		"name" : "_description",
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
	}, {
		"name" : "_communityName",
		"type" : "string"
	}, {
		"name" : "_description",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_rate",
		"type" : "uint256"
	}, {
		"name" : "_creditLine",
		"type" : "uint256"
	}, {
		"name" : "_exchangeCreditLine",
		"type" : "uint256"
	}, {
		"name" : "_exchangeCreditLimit",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	}, {
		"name" : "_newQuorum",
		"type" : "uint256"
	} ],
	"name" : "modifyCommunity",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityJ",
		"type" : "uint256"
	} ],
	"name" : "joinCommunity",
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
		"name" : "_sellNumber",
		"type" : "uint256"
	} ],
	"name" : "getsell",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "bool"
	} ],
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
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "address"
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
		"type" : "bool"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [],
	"name" : "exchange",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_memberG",
		"type" : "address"
	} ],
	"name" : "getMemberStatus",
	"outputs" : [ {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "bool"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityG",
		"type" : "uint256"
	} ],
	"name" : "getCommunityManagement",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "address"
	} ],
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
	"constant" : false,
	"inputs" : [ {
		"name" : "_communityID",
		"type" : "uint256"
	}, {
		"name" : "_newExchange",
		"type" : "address"
	} ],
	"name" : "transferCommunityExchange",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_memberOfCommunity",
		"type" : "address"
	}, {
		"name" : "_communityD",
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
	"constant" : false,
	"inputs" : [ {
		"name" : "_sellNumber",
		"type" : "uint256"
	} ],
	"name" : "paysell",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_communityG",
		"type" : "uint256"
	} ],
	"name" : "getCommunityDescription",
	"outputs" : [ {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [],
	"name" : "ethyclos",
	"outputs" : [],
	"payable" : false,
	"type" : "function"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_creator",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_community",
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
		"name" : "_community",
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
	"name" : "ModifyCommunity",
	"type" : "event"
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
		"name" : "_description",
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
		"indexed" : false,
		"name" : "_member",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_alias",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_community",
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
		"name" : "_community",
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
		"indexed" : true,
		"name" : "_sender",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_senderAmount",
		"type" : "uint256"
	}, {
		"indexed" : true,
		"name" : "_receiver",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_receiverAmount",
		"type" : "int256"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "Transaction",
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
		"name" : "_sellNumber",
		"type" : "uint256"
	}, {
		"indexed" : true,
		"name" : "_seller",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_buyer",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_description",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_sellAmount",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_TimeStamp",
		"type" : "uint256"
	} ],
	"name" : "Sell",
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
		"name" : "description",
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

var creditCommons = creditcommonsContract
		.at("0xbfDdEAE75d5e0F97934691F017e968F0CD22c637");

var accounts = web3.eth.accounts;
var nrAcc = accounts.length;

web3.eth.defaultAccount = accounts[0];
var myCoinbase = web3.eth.defaultAccount;

var totals = creditCommons.getTotals();
var nrMembers = totals[0];
var nrGroups = totals[1];
var nrProposals = totals[2];

var myMembership = creditCommons.getMember(myCoinbase);
var myIsMember = myMembership[0];
var myAlias = myMembership[1];
var myDescription = myMembership[2];
var myGroupNr = myMembership[3];
var myBalance = myMembership[4];
var myCreditLine = myMembership[5];


var myStatus = creditCommons.getMemberStatus(myCoinbase);
var isIntertrade = myStatus[0];
var isCommune = myStatus[1];

var myWhisper = creditCommons.getMemberWhisper(myCoinbase);

var myGroup = creditCommons.getGroupDescription(myGroupNr);
var myGroupName = myGroup[0];
var myGroupDescription = myGroup[1];
var myCurrencyName = myGroup[2];
var myGroupOpen = myGroup[3];
var myGroupNrM = myGroup[4];

var myGroupRates = creditCommons.getGroupRates(myGroupNr);
var myRate = myGroupRates[0];
var myGroupDebitLimit = myGroupRates[1];
var myGroupCreditLimit = myGroupRates[2];

var groupManagement = creditCommons.getGroupManagement(myGroupNr);
var intertradeAccount = groupManagement[0];
var communeAccount = groupManagement[1];

var intertradeWallet = creditCommons.getMember(intertradeAccount);
var intertradeIsMember = intertradeWallet[0];
var intertradeAlias = intertradeWallet[1];
var intertradeDescription = intertradeWallet[2];
var intertradeGroup = intertradeWallet[3];
var intertradeBalance = intertradeWallet[4];
var intertradeDebitLimit = intertradeWallet[5];
var intertradeCreditLimit = intertradeWallet[6];

var intertradeWallet = creditCommons.getMember(intertradeAccount);
var intertradeIsMember = intertradeWallet[0];
var intertradeAlias = intertradeWallet[1];
var intertradeDescription = intertradeWallet[2];
var intertradeGroup = intertradeWallet[3];
var intertradeBalance = intertradeWallet[4];
var intertradeDebitLimit = intertradeWallet[5];
var intertradeCreditLimit = intertradeWallet[6];

var me = "ETH Account: <b>" + myCoinbase
		+ "<br></b> Credit Commons Member: <b>" + myIsMember
		+ "</b> Alias: <b>" + myAlias + "<br></b> Whisper Account: <b>"
		+ myWhisper + "<br></b>Group ID: <b>" + myGroup
		+ "</b> Group Name: <b>" + groupName + "<br></b> Is Intertrade: <b>"
		+ isIntertrade + "</b> Is Commune: <b>" + isCommune + "</b>";
