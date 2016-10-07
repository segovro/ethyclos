contract ehtyclos {

        // @title ethyclos
        // @author Rogelio SEGOVIA
		// @param sysAdmin is the system administrator address, the creator of
		// the contract

		address public sysAdmin;   
		uint nrMembers;
		uint nrCommunities;
		uint nrProposals;
		uint nrSells;
	
	// @notice at creating the contract we declare the general variables
	function ethyclos() {
				// @param the initial sysAdmin is the address from which the
				// contract is created
				sysAdmin = msg.sender;
			    nrMembers = 0;
			    nrCommunities = 0;
			    nrProposals = 0;
			    nrSells = 0;
        }
	
    function getTotals () constant returns (uint, uint, uint, uint) {
    	return (nrMembers, nrCommunities, nrProposals, nrSells);
    }
	
	event NewCommunity(address indexed _creator, uint indexed _community, string _communityName, uint _TimeStamp);
	event ModifyCommunity (address indexed _modifier, uint indexed _community, string _communityName, uint _TimeStamp);
	event NewMember (address indexed _memberAddress, string _memberAlias, string _description, uint _TimeStamp);
	event JoinCommunity (address _member, string _alias, uint _community, string _communityName, uint _TimeStamp);
	event ResignCommunity (address _member, string _alias, uint _community, string _communityName, uint _TimeStamp);

	// @notice function to name a new sysAdmin
    function transferSysAdmin(address newSysAdmin) {
		if (msg.sender == sysAdmin) {
        sysAdmin = newSysAdmin;
		}
    }
	
	// @notice create a structure to file all members
	struct members {
		// @parameter key ID parameters
		bool isMember;
		string alias;
		string whisperID;
		string memberDescription;
		string mImagelink;
		uint memberCommunity;	
		bool isExchange;
		bool isCommune;
		// @parameter balance is expressed in the member currency. Can only be
		// modified by system operations
		int balance;
		uint trust;
		int reputation;
		address moneyLender; 
		uint creditTrust;
		uint creditLine;
		uint creditDeadline;
	}
	
	// @notice map the members structure into an array indexed by the members
	// ethereum address
	mapping(address => members) member;
	
	// @notice create an index of members for listing purposes
	address[] memberIndex;
	
	// @notice anybody with an ethereum account can register in the system
	function registerSystem (string _alias, string _whisperID, string _description, string _imageLink) {
		// @notice the caller provides a valid alias
		if (bytes(_alias).length != 0) {
		// @notice the caller is not already the system
			if (member[msg.sender].isMember != true) {
			member[msg.sender].isMember = true;
			member[msg.sender].alias = _alias;
			member[msg.sender].whisperID = _whisperID;
			member[msg.sender].memberDescription = _description;
			member[msg.sender].imageLink = _imageLink;
			member[msg.sender].memberCommunity = 0;
			member[msg.sender].isExchange = false;
			member[msg.sender].isCommune = false;
			member[msg.sender].balance = 0;
			member[msg.sender].creditLine = 0;
			member[msg.sender].creditDeadline = 0;			
		NewMember (msg.sender, _alias, _description, now);
		memberIndex[memberIndex.length ++] = msg.sender;
		nrMembers = nrMembers + 1;
				} 
			} 
		}
	
	function modifyMemberInfo (string _alias, string _whisperID, string _description, string _imageLink) {
		if (bytes(_alias).length != 0) {member[msg.sender].alias = _alias;}
		if (bytes(_whisperID).length != 0) {member[msg.sender].whisperID = _whisperID;}
		if (bytes(_description).length != 0) {member[msg.sender].memberDescription = _description;}
		if (bytes(_imageLink).length != 0) {member[msg.sender].imageLink = _imageLink;}
		}
	
	// @notice anybody in the system can join a community if the community is
	// open
	function joinCommunity (uint _communityJ) {
					// @notice if the community is open
					if (community[_communityJ].open = true) {
						makeMemberOfCommunity (msg.sender, _communityJ);
					} 
					// @notice if the community is not open "proposeNewMember"
	}
	
	function acceptAtCommunity ( address _newMember, uint _communityJ) {
		// @notice the commune can accept a new member in the community
		if (community[_communityJ].commune == msg.sender) {
			makeMemberOfCommunity (_newMember, _communityJ);	
		}
	}
	
	function makeMemberOfCommunity (address _newMember, uint _communityJ) internal {
		// @notice the member is in the system
		// @notice the member is not in a community
		if ((member[_newMember].isMember = true) && (member[_newMember].memberCommunity == 0)) {
		member[_newMember].memberCommunity = _communityJ;
		member[_newMember].balance = 0;
		member[_newMember].creditLine = community[_communityJ].defaultMemberCreditLine;
		community[_communityJ].nrMembers = community[_communityJ].nrMembers + 1;
		JoinCommunity (_newMember, member[_newMember].alias, _communityJ, community[_communityJ].communityName, now);
		}
	}
	
	function resignFromCommunity () {
				uint _communityD = member[msg.sender].memberCommunity; 
				// @notice balance cannot be negative
				if (member[msg.sender].balance >= 0) {
					deleteMemberOfCommunity (msg.sender, _communityD);
				}
			}	
	
	function kickOutCommunity (address _memberOfCommunity, uint _communityD) {
		// @notice the commune can delete a new member in the community
		if (community[_communityD].commune == msg.sender) {
			deleteMemberOfCommunity (_memberOfCommunity, _communityD);
		}
	}
	
	function deleteMemberOfCommunity (address _memberOfCommunity, uint _communityD) internal {
		// @notice the account is not a community account and the member is not
		// commune of the community
		if ((member[_memberOfCommunity].isCommune == false) && (member[msg.sender].isCommune == false)) {
		member[community[_communityD].commune].balance += member[_memberOfCommunity].balance;
		member[_memberOfCommunity].balance = 0;
		member[_memberOfCommunity].memberCommunity = 0;
		member[_memberOfCommunity].creditLine = 0;
		member[_memberOfCommunity].creditLimit = 0;
		community[_communityD].nrMembers = community[_communityD].nrMembers - 1;
		ResignCommunity (_memberOfCommunity, member[_memberOfCommunity].alias, _communityD, community[_communityD].communityName, now);		
		}
	}

	function getMember (address _memberG) constant returns (bool, string, string, uint, int, uint, uint) {
	    return (member[_memberG].isMember, member[_memberG].alias, member[_memberG].memberDescription, member[_memberG].memberCommunity, member[_memberG].balance, member[_memberG].creditLine, member[_memberG].creditLimit);
	}
	
	function getMemberStatus (address _memberG) constant returns (bool, bool) {
	   return (member[_memberG].isExchange, member[_memberG].isCommune);
	}
	
	function getMemberWhisper (address _memberG) constant returns (string, string) {
	   return (member[_memberG].whisperID, member[_memberG].imageLink);
	}
			
	function getMPbyIndex (uint _mIndex) constant returns (address _getMemberID) {
		_getMemberID = memberIndex[_mIndex];
	}

    // @notice create a structure to file all communities and their parameters
    struct communities {
    	string communityName;
    	string communityDescription;
    	string currencyName;
    	string gImageLink;
    	address commune;
    	address exchangeAccount;
    	// @parameter the exchange rate against the base currency is given in
		// percentage (100 = 1/1)
    	uint rate;
    	uint transferTax;
    	uint accumulationTax;
    	unit rewardRate;
    	uint defaultMemberCreditLine;
    	uint defaultMemberCreditLimit;	
    	bool open;
    	uint nrMembers;
    	uint quorum;
    	uint goalDemurrage;
    	uint goalCrowdFunding;
    	uint goalCommunityHours;
    	uint goalExpenses;
    	int realDemurrage;
    	uint realCrowdFunding;
    	int realCommunityHours;
    	uint realExpenses; 	
    	int totalMinted;
    	uint totalCredit;
    	uint totalTrustCost;
    	uint totalTrustAvailable;    	
    }

    // @notice map the exchanges structure into an array indexed by a string
	// (the string we use is the CES Exchange ID)
    mapping(uint => communities) community;
    
    // @notice create an index of exchanges for listing purposes
    uint[] communityIndex;
    
    // @notice A community can be created by any account in the system that is
	// not in a community.
    // @notice A community is also an account and is identified by its account
	// number.
    // @notice A community has two special members:
    // @notice the exchange account holding the external balance against other
	// communities
    // @notice the commune account holding the community common moneys, such as
	// taxes
    function createCommunity (string _communityName, string _description, string _currencyName, uint _creditLine, uint _creditLimit, uint _exchangecreditLine, uint _exchangeCreditLimit, bool _open) {
    	// @notice the member exists in the system and the member is not in a
		// community and the name is valid
    	if (member[msg.sender].isMember = true) {
    		if (member[msg.sender].memberCommunity == 0) { 
    				if (bytes(_communityName).length != 0) {
    					uint communityID = now;	
    					community[communityID].communityName = _communityName;
    					community[communityID].currencyName = _currencyName;
    					community[communityID].exchangeAccount = msg.sender;
    					community[communityID].commune = msg.sender;
    					community[communityID].rate = 100;
    			    	community[communityID].transferTax = 0;
    			    	community[communityID].accumulationTax = 0;
    			    	community[communityID].rewardRate = 0;
    					community[communityID].defaultMemberCreditLine = _creditLine;
    					community[communityID].defaultMemberCreditLimit = _creditLimit;
    					community[communityID].open = _open;
    					community[communityID].nrMembers = 1;
    					community[communityID].quorum = 3;
    					community[communityID].goalDemurrage;
    			    	community[communityID].goalCrowdFunding;
    			    	community[communityID].goalCommunityHours;
    			    	community[communityID].goalExpenses;
    			    	community[communityID].realDemurrage;
    			    	community[communityID].realCrowdFunding;
    			    	community[communityID].realCommunityHours;
    			    	community[communityID].realExpenses = 0;	
    			    	community[communityID].totalMinted;
    			    	community[communityID].totalCredit;
    			    	community[communityID].totalTrustCost;
    			    	community[communityID].totalTrustAvailable = 0; 
    						NewCommunity(msg.sender, communityID, _communityName, now);
    						// @notice make the creator member of the community
							// and set the community exchange limits
    						member[msg.sender].memberCommunity = communityID;
    						member[msg.sender].isExchange = true;
    						member[msg.sender].isCommune = true;
    						member[msg.sender].balance = 0;
    						member[msg.sender].creditLine = _exchangecreditLine;
    						member[msg.sender].creditLimit = _exchangeCreditLimit;
    					communityIndex[communityIndex.length ++] = communityID;
    					nrCommunities = nrCommunities +1;
    				} 
    			}
    	    } 
    	} 

    // @notice transfer community exchange account. Old exchange or sysAdmin can
	// transfer community exchange to another member of the community
    // @notice the reason to include sysAdmin is for the case the old commune
	// disappears
    function transferCommunityExchange (uint _communityID, address _newExchange) {
    	if ((msg.sender == community[_communityID].exchangeAccount) || (msg.sender == sysAdmin)) {
    		if (member[_newExchange].memberCommunity == _communityID) {
        		member[community[_communityID].exchangeAccount].isExchange = false;
        		community[_communityID].exchangeAccount = _newExchange;
        		member[_newExchange].isExchange = true;
    			string _communityName = community[_communityID].communityName;
    			ModifyCommunity (msg.sender, _communityID, _communityName, now);
    	} 
    	} 
    }
    
    // @notice transfer community commune. Old commune or sysAdmin can transfer
	// community commune to another member of the community
    // @notice the reason to include sysAdmin is for the case the old commune
	// disappears
    function transferCommunityCommune (uint _communityID, address _newCommune) {
    	if ((msg.sender == community[_communityID].commune) || (msg.sender == sysAdmin)) {
    		if (member[_newCommune].memberCommunity == _communityID) {
        		member[community[_communityID].commune].isCommune = false;
        		community[_communityID].commune = _newCommune;
        		member[_newCommune].isCommune = true;
    			string _communityName = community[_communityID].communityName;
    			ModifyCommunity (msg.sender, _communityID, _communityName, now);
    	} 
    	} 
    }
    	
    // @notice the commune can modify one, several or all parameters of a
	// community. If one parameter is left empty, it remains the same. Only the
	// exchange commune can change its parameters
    function modifyCommunity (uint _communityID, string _communityName, string _description, string _currencyName, uint _rate, uint _creditLine, uint _creditLimit, uint _exchangecreditLine, uint _exchangeCreditLimit, bool _open, uint _newQuorum) {
    	        if (msg.sender == community[_communityID].commune) {
    			// @notice if a value for a parameter is given, change the
				// parameter, if empty retain old value
    			if (bytes(_communityName).length != 0) {community[_communityID].communityName = _communityName;}
    			if (bytes(_description).length != 0) {community[_communityID].communityDescription = _description;}
    			if (bytes(_currencyName).length != 0) {community[_communityID].currencyName = _currencyName;}
    			if (_rate != 0) {community[_communityID].rate = _rate;}	
    			if (_creditLine != 0) {community[_communityID].defaultMemberCreditLine = _creditLine;}
    			if (_creditLimit != 0) {community[_communityID].defaultMemberCreditLimit = _creditLimit;}
    			if (_exchangecreditLine != 0) {member[community[_communityID].exchangeAccount].creditLine = _exchangecreditLine;}
    			if (_exchangeCreditLimit != 0) {member[community[_communityID].exchangeAccount].creditLimit = _exchangeCreditLimit;}
    			if (_open == true) {community[_communityID].open = true;}	
    			if (_newQuorum != 0) {community[_communityID].quorum = _newQuorum;}	
    			ModifyCommunity (msg.sender, _communityID, _communityName, now);				
    				}     					
    }
    
    function getCommunityDescription (uint _communityG) constant returns (string, string, string, bool, uint) {
    return (community[_communityG].communityName, community[_communityG].communityDescription, community[_communityG].currencyName, community[_communityG].open, community[_communityG].nrMembers);
    }
    
    function getCommunityRates (uint _communityG) constant returns (uint, uint, uint) {
    return (community[_communityG].rate, community[_communityG].defaultMemberCreditLine, community[_communityG].defaultMemberCreditLimit);
    }
    
    function getCommunityManagement (uint _communityG) constant returns (address, address) {
    return (community[_communityG].exchangeAccount, community[_communityG].commune);
    }    
   
    function getCommunitybyIndex (uint _gIndex) constant returns (uint _getCommunityID) {
    	_getCommunityID = communityIndex[_gIndex];
    }
    
    event Transaction (address indexed _sender, uint _senderAmount, address indexed _receiver, int _receiverAmount, uint _TimeStamp);
    event Credit(address indexed _MoneyLender, address indexed _borrowerAddress, uint _cDealine, uint _endorsedUoT);
    event CreditExp(address indexed _moneyLender, address indexed _borrower, uint _creditCost, bool _success, uint _TimeStamp);
    event Sell (uint _sellNumber, address indexed _seller, address indexed _buyer, string _description, uint _sellAmount, uint _TimeStamp);

	// @notice function transfer from the member of the same exchange or to the
	// member of another exchange. The amount is expressed in the sender
	// currency
	function transfer (address _to, uint _fromAmount) {		
		// @notice the given amount is converted to integer in order to work
		// with only integers
		int _intFromAmount = int (_fromAmount);
		int _intFromDLimit = - int(member[msg.sender].creditLine);
		int _intToCLimit = int(member[msg.sender].creditLimit);
		int _toAmount = 0;
		// @notice check if both accounts are in the same community
		if (member[msg.sender].memberCommunity == member[_to].memberCommunity) {
			_toAmount = _intFromAmount;
		} else {
			// @notice conversions if the transaction is accross communities
			address _fromCommunityAccount = community[member[msg.sender].memberCommunity].exchangeAccount;
			address _toCommunityAccount = community[member[_to].memberCommunity].exchangeAccount;
			// @the amount is converted to the receiver currency
			uint _rateSenderU = community[member[msg.sender].memberCommunity].rate;
			uint _rateReceiverU = community[member[_to].memberCommunity].rate;
			int _rateSender = int(_rateSenderU);
			int _rateReceiver = int(_rateReceiverU);
			_toAmount = _intFromAmount * _rateSender/ _rateReceiver;
			// @notice if the community limits are not surpassed, we proceed
			// with the transfer
			if (((member[_fromCommunityAccount].balance - _intFromAmount) > - int(member[_fromCommunityAccount].creditLine)) 
				&& ((member[_toCommunityAccount].balance + _toAmount) < int(member[_toCommunityAccount].creditLimit))) {
				} 
		} 
		// @notice if the member limits are not surpassed, we proceed with the
		// transfer
			if (((member[msg.sender].balance - _intFromAmount) > _intFromDLimit) 
				&& ((member[_to].balance + _toAmount) < _intToCLimit)) { 
				member[msg.sender].balance -= _intFromAmount;
				member[_to].balance += _toAmount;
				// @notice adjust exchange accounts
				if (member[msg.sender].memberCommunity != member[_to].memberCommunity) {			
					member[_fromCommunityAccount].balance -= _intFromAmount;
					member[_toCommunityAccount].balance += _toAmount;
					} 
			} 
 			Transaction (msg.sender, _fromAmount, _to, _toAmount, now);
		}
	
	// @notice function authorize a credit
	// @notice only members of a group can authorize or get a credit to a member
	// of the same group
	// @param _borrower is the address of the credit borrower
	// @param _credit is the amount of the credit line
	// @param _daysAfter is the deadline of the credit line in number of days
	// from today
	function endorseCredit (address _borrower, uint _credit, uint _daysAfter)  {
		if (member[msg.sender].memberCommunity == member[_borrower].memberCommunity) {
			updateCredit (_borrower); 	
		if (member[_borrower].creditLine > 0) {cancelCredit (_borrower)};
			uint _unitsOfTrust = _credit * _daysAfter;
			if (member[msg.sender].trust > _unitsOfTrust) {
				member[msg.sender].trust -= _unitsOfTrust;
				member[_borrower].creditLine += _credit;
				member[_borrower].moneyLender = msg.sender;
				// @notice the _deadline is established as a number of days
				// ahead
				uint _creditDeadline = now + _daysAfter * 1 days; 
				member[_borrower].deadline = _creditDeadline; 
				member[_borrower].creditTrust = _unitsOfTrust;
				community[_borrower].totalCredit += _credit;
				community[_borrower].totalTrustCost += _unitsOfTrust;
				community[_borrower].totalTrustAvailable -= _unitsOfTrust;
				Credit(msg.sender, _borrower, _creditDeadline, _unitsOfTrust);		
			}
		}}
	}
	
	function cancelCredit internal (address _borrower) {
		address _moneyLender = member[_borrower].moneyLender;
		uint _unitsOfTrust = member[_borrower].creditTrust;
		member[_moneyLender].trust += _unitsOfTrust;
		member[_borrower].creditLine = 0;
		member[_borrower].creditDeadline = 0;	
		community[msg.sender].totalCredit -= _credit;
		community[msg.sender].totalTrustCost -= _unitsOfTrust;
		community[msg.sender].totalTrustAvailable += _unitsOfTrust;
	}
	
	function updateCredit internal (address _borrower) {
		// @notice update the credit status
		if (member[_borrower].creditLine > 0) {
		// @notice check if deadline is over
			if (now >= member[_borrower].deadline) {
				bool _success = false;
				uint _credit = member[_borrower].creditLine;
				uint _creditTrust = member[_borrower].creditTrust;
				int _reward = _creditTrust * community[_borrower].rewardRate/100;
				address _moneyLender = member[_borrower].moneyLender;
			// @notice if time is over reset credit to zero, deadline to zero
				member[_borrower].deadline = 0;
				community[_borrower].totalCredit -= _credit;
				member[_borrower].creditLine = 0;				
				community[_borrower].totalTrustCost -= _creditTrust;
				// @notice if balance is negative the credit was not returned, the money lender balanceReputation is not restored and is penalized with a 20%
				// @notice as regards the borrower will not be able to make any new transfer until future incomes cover the debts
				// @return money lender reputation penalized
				if (member[_borrower].balance < 0) {					
					member[_moneyLender].trust += _creditTrust - _reward;
					community[_borrower].totalTrustAvailable += _creditTrust - _reward;
				}
				// @notice if balance is not negative the credit was returned, the money lender balanceReputation is restored and is rewardRateed with a 20%
				// @return money lender reputation rewarded
				else {
					_success = true;
					member[_moneyLender].trust += _creditTrust + _reward;
					community[_borrower].totalTrustAvailable += _creditTrust + _reward;
				}
				// @notice reset money lender information
				// @return money lender information deleted
				// @notice close access to monitor the account to money lender
				member[_borrower].moneyLender = _borrower; 
				member[_borrower].creditTrust = 0;
				CreditExp(_moneyLender, _borrower, _creditTrust , _success, now);
				} 
			}
		}
	
	function transfer () {}
	function exchange () {}
	function payAccTax () {}
	function payTrnsTax () {}
		
		struct sells {
		address seller;
		address buyer;
		string description;
		string sImageLink;
		uint = unitPrice; 
		uint sellAmount;
		unit sellTax;
		uint sellDateTime;
		bool paid;
	    }

	mapping(uint => sells) sell;    

	function createsell (address _buyer, string _description, uint _sellAmount) {
	    nrsells ++;
		uint sellNumber = nrsells;
		sell[sellNumber].seller = msg.sender;
		sell[sellNumber].buyer = _buyer;
		sell[sellNumber].description = _description;
		sell[sellNumber].sellAmount = _sellAmount;
		sell[sellNumber].sellDateTime = now;
		sell[sellNumber].paid = false;	
		sell (nrsells, msg.sender, _buyer, _description, _sellAmount, now)
	}

	function paysell (uint _sellNumber) {
		if (sell[_sellNumber].buyer == msg.sender) {
			transfer (sell[_sellNumber].seller, sell[_sellNumber].sellAmount);
			sell[_sellNumber].paid = true;
			}    	
	}	
	
	function getsell (uint _sellNumber) constant returns (address, address, string, uint, uint, bool) {
		return (sell[_sellNumber].seller, sell[_sellNumber].buyer, sell[_sellNumber].description, sell[_sellNumber].sellAmount, sell[sellNumber].sellDateTime, sell[_sellNumber].paid);
	}
    
    event ProposalAdded(uint proposalNumber, uint community, string description, address creator);
    event Voted(address voter, uint proposalNumber, int8 vote, int result);
    event ProposalResult(uint proposalNumber, int result, uint quorum, bool active);
	
    struct Proposals {
		address creator;
    	uint proposalCommunity;
    	string title;
        string description;
        uint votingDeadline;
        uint quorumProposal;
        bool closed;
        bool proposalPassed;
        uint numberOfVotes;
        int currentResult;
		mapping (address => Voters) voters;
    }	
	
	struct Voters {
		bool alreadyVoted;		
	}
 
	mapping (uint => Proposals) proposal;
	
	// @ notice Function to create a new proposal
    function newProposal (uint _proposalCommunity, string _title, string _description, uint _days, uint _quorum) {   
        nrProposals ++;
        uint proposalNumber = nrProposals;
		proposal[proposalNumber].creator = msg.sender;
        proposal[proposalNumber].proposalCommunity = _proposalCommunity;
        proposal[proposalNumber].title = _title;
        proposal[proposalNumber].description = _description;
        proposal[proposalNumber].votingDeadline = now + _days * 1 days;
        proposal[proposalNumber].quorumProposal = _quorum;
        proposal[proposalNumber].closed = false;
        proposal[proposalNumber].proposalPassed = false;
        proposal[proposalNumber].numberOfVotes = 0;
        proposal[proposalNumber].currentResult = 0;
		proposal[proposalNumber].voters[msg.sender].alreadyVoted = false; 		
        ProposalAdded(proposalNumber, _proposalCommunity, _description, msg.sender);
    }
	
	function proposeAcceptanceAsMember (uint _candidateCommunity) {
		if (member[msg.sender].isMember = true) {
		newProposal (_candidateCommunity, "Accept Member", member[msg.sender].memberDescription, 10, community[_candidateCommunity].quorum);
		}
	}
	
    function vote(uint _proposalNumber, int8 _choice) {
		if (now > proposal[_proposalNumber].votingDeadline) {closeProposal(_proposalNumber);}	
		if (proposal[_proposalNumber].closed == false) {
		if (member[msg.sender].memberCommunity == proposal[_proposalNumber].proposalCommunity) {
					if (proposal[_proposalNumber].voters[msg.sender].alreadyVoted == false) {                
        				proposal[_proposalNumber].numberOfVotes += 1;    
						proposal[_proposalNumber].voters[msg.sender].alreadyVoted = true;  
			if (_choice == 1) {proposal[_proposalNumber].currentResult += 1; } 
			if (_choice == -1) {proposal[_proposalNumber].currentResult -= 1; }
        // Create a log of this event
        Voted(msg.sender, _proposalNumber, _choice, proposal[_proposalNumber].currentResult);
					}
					}
				}
			}

    function closeProposal(uint _proposalNumber) {           
        /* If difference between support and opposition is larger than margin */
		if (now > proposal[_proposalNumber].votingDeadline) {
		if (proposal[_proposalNumber].closed == false) {
        if ((proposal[_proposalNumber].numberOfVotes > proposal[_proposalNumber].quorumProposal) 
        		|| (proposal[_proposalNumber].currentResult > 0))
        {
            proposal[_proposalNumber].proposalPassed = true;
        } else {
            proposal[_proposalNumber].proposalPassed = false;
        }
        // Fire Events
        ProposalResult(_proposalNumber, proposal[_proposalNumber].currentResult, proposal[_proposalNumber].numberOfVotes, proposal[_proposalNumber].proposalPassed);
			}}}    
  
    function getProposal (uint _proposalNumber) constant returns (uint, string, uint, uint, address) {
		if (now > proposal[_proposalNumber].votingDeadline) {closeProposal(_proposalNumber);}	
    	return (proposal[_proposalNumber].proposalCommunity, 
    			proposal[_proposalNumber].description, 
    			proposal[_proposalNumber].quorumProposal,
    			proposal[_proposalNumber].votingDeadline,
				proposal[_proposalNumber].creator
    			);
    }
	
	function getIfVoted (uint _proposalNumber, address _member) constant returns (bool) {
		return (proposal[_proposalNumber].voters[msg.sender].alreadyVoted);
	}
    
    function getProposalVotes (uint _proposalNumber) constant returns (uint, int, bool, bool) {
    	return (proposal[_proposalNumber].numberOfVotes, 
    			proposal[_proposalNumber].currentResult,
    			proposal[_proposalNumber].closed,
    			proposal[_proposalNumber].proposalPassed    			
    			);
    }	
	
}
