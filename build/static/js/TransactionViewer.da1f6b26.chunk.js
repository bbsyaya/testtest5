(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1443:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1466:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(3),c=t(0),r=t.n(c),l=t(269);function s(e){var a=e.label,t=e.children,c=e.tip,s=void 0!==c&&c,m=e.text;return r.a.createElement("tr",null,r.a.createElement("th",null,Object(n.c)(a),s&&r.a.createElement("span",null,"\xa0",r.a.createElement(l.a,{text:m,className:"ml-2"}))),r.a.createElement("td",null,t))}},2512:function(e,a,t){"use strict";t.d(a,"a",function(){return N});var n=t(2),c=t.n(n),r=t(5),l=t(14),s=t(13),m=t(20),o=t(19),d=t(21),i=t(0),E=t.n(i),b=t(2720),u=t.n(b),_=t(9),f=t(3),N=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).initCameras=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.Camera.getCameras();case 3:if(0<(t=a.sent).length)return a.next=7,e.scanner.start(t[0]);a.next=9;break;case 7:a.next=10;break;case 9:e.setState({error:E.a.createElement(_.a,{color:"warning",className:"text-center"},Object(f.c)("no_webcam_found"))});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),e.setState({error:E.a.createElement(_.a,{color:"danger",className:"text-center"},Object(f.c)("trying_enable_webcam_message_0")," ",E.a.createElement("br",null),Object(f.c)("trying_enable_webcam_message_1"))});case 15:case"end":return a.stop()}},a,null,[[0,12]])})),e.state={error:null},e.ref=E.a.createRef(),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.onScan;this.scanner=new u.a.Scanner({video:this.ref.current,backgroundScan:!1}),this.scanner.addListener("scan",function(a){e({code:a})}),this.initCameras()}},{key:"componentWillUnmount",value:function(){this.scanner.stop()}},{key:"render",value:function(){return this.state.error||E.a.createElement("video",{className:"w-100",style:v.video,ref:this.ref})}}]),a}(E.a.Component),v={video:{}}},3503:function(e,a,t){"use strict";t.r(a);var n=t(39),c=t.n(n),r=t(2),l=t.n(r),s=t(5),m=t(14),o=t(13),d=t(20),i=t(19),E=t(21),b=t(0),u=t.n(b),_=t(3),f=t(11),N=t(16),v=t(389),O=t(51),h=t.n(O),p=t(4),x=t(23),T=t(1466),j=t(139),g=t(60),A=t(35),C=t(276);function y(e){var a=e.contract,n=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(a.parameters)for(var c in a.parameters)for(var r in n)c===r&&a.parameters[c];var l,s=[];if(s.push(a),s&&(l=Object(g.a)(s,"asset_name","amount")[0]),a.contractType)switch(a.contractType.toUpperCase()){case"TRANSFERCONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("transfer_contract"),u.a.createElement("small",null,Object(_.c)("TRX_transfer_between_addresses")))),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"from"},u.a.createElement(x.a,{address:a.owner_address},a.owner_address)),u.a.createElement(T.a,{label:"to"},u.a.createElement(x.a,{address:a.to_address},a.to_address)),u.a.createElement(T.a,{label:"amount"},u.a.createElement(j.b,{amount:a.amount/p.K})),a.contract_note&&u.a.createElement(T.a,{label:"note"},decodeURIComponent(a.contract_note))))));case"TRANSFERASSETCONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("transfer_asset_contract"),u.a.createElement("small",null,Object(_.c)("token_transfer_between_addresses")))),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"from"},u.a.createElement(x.a,{address:a.owner_address},a.owner_address)),u.a.createElement(T.a,{label:"to"},u.a.createElement(x.a,{address:a.to_address},a.to_address)),u.a.createElement(T.a,{label:"amount"},l.map_amount),u.a.createElement(T.a,{label:"token"},u.a.createElement(C.a,{value:a,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("participate_asset_issue_contract"),u.a.createElement("small",null,Object(_.c)("participate_token_between_addresses")))),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"to"},u.a.createElement(x.a,{address:a.owner_address},a.owner_address)),u.a.createElement(T.a,{label:"issuer"},u.a.createElement(x.a,{address:a.to_address},a.to_address)),u.a.createElement(T.a,{label:"amount"},a.amount/p.K),u.a.createElement(T.a,{label:"token"},u.a.createElement(C.a,{value:a,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("witness_update_contract"),u.a.createElement("small",null,Object(_.c)("updates_a_witness")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement(T.a,{label:"URL"},a.url))));case"WITNESSCREATECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("witness_create_contract"),u.a.createElement("small",null,Object(_.c)("create_a_witness")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement(T.a,{label:"URL"},a.url))));case"ACCOUNTUPDATECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("account_update_contract"),u.a.createElement("small",null,Object(_.c)("update_account_name")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement(T.a,{label:"account_name"},Object(A.toUtf8)(a.account_name)))));case"ACCOUNTCREATECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("account_create_contract"),u.a.createElement("small",null,Object(_.c)("account_create")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"create_from_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement(T.a,{label:"create_to_address"},u.a.createElement(x.a,{address:a.account_address})))));case"WITHDRAWBALANCECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("withdraw_balance_contract"),u.a.createElement("small",null,Object(_.c)("withdraw_balance")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})))));case"FREEZEBALANCECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("freeze_balance_contract"),u.a.createElement("small",null,Object(_.c)("freeze_TRX")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),a.receiver_address&&u.a.createElement(T.a,{label:"receive_list"},u.a.createElement(x.a,{address:a.receiver_address})),a.resource?u.a.createElement(T.a,{label:"type"},a.resource):u.a.createElement(T.a,{label:"type"},"Bandwidth"),u.a.createElement(T.a,{label:"frozen_balance"},a.frozen_balance/p.K),u.a.createElement(T.a,{label:"frozen_days"},a.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("unfreeze_balance_contract"),u.a.createElement("small",null,Object(_.c)("unfreeze_TRX")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),a.receiver_address&&u.a.createElement(T.a,{label:"receive_list"},u.a.createElement(x.a,{address:a.receiver_address})))));case"VOTEWITNESSCONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("vote_witness_contract"),u.a.createElement("small",null,Object(_.c)("vote_for_a_witness")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement("tr",null,u.a.createElement("th",null,Object(_.c)("votes")),u.a.createElement("td",null,u.a.createElement("ul",null,a.votes.map(function(e,a){return u.a.createElement("li",{key:a},u.a.createElement(x.a,{address:e.vote_address,truncate:!1}),Object(_.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("asset_issue_contract"),u.a.createElement("small",null,Object(_.c)("issue_a_new_asset")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})),u.a.createElement(T.a,{label:"token_name"},Object(A.toUtf8)(a.name)),u.a.createElement(T.a,{label:"total_supply"},u.a.createElement(f.c,{value:a.total_supply/(a.precision?Math.pow(10,a.precision):1)})),u.a.createElement(T.a,{label:"TRX_exchange_rate"},a.trx_num/p.K," : ",a.num),u.a.createElement(T.a,{label:"start_time"},1e3<a.end_time-a.start_time?u.a.createElement(f.a,{value:a.start_time}):"-"),u.a.createElement(T.a,{label:"end_time"},1e3<a.end_time-a.start_time?u.a.createElement(f.a,{value:a.end_time}):"-"),u.a.createElement(T.a,{label:"description"},Object(A.toUtf8)(a.description)),u.a.createElement(T.a,{label:"URL"},u.a.createElement(x.d,{url:Object(A.toUtf8)(a.url)})))));case"PROPOSALCREATECONTRACT":return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("proposal_create_contract"),u.a.createElement("small",null,Object(_.c)("proposal_create")))),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})))));case"TRIGGERSMARTCONTRACT":a.method;var m=t(1443);return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},function(e){var a=e.contract_address,t=e.method,n=Object(_.c)("trigger_smart_contract"),c=Object(_.c)("normal_address_trigger_smart_contract");return p.C&&a===p.O.SIDECHAIN&&t.includes(p.T.WITHDRAW)&&(n=Object(_.c)("sign_trigger_smart_contract"),c=Object(_.c)("sign_normal_trigger_smart_contract")),u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),n,u.a.createElement("small",null,c))}(a)),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content_pos"},u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Basic_info")),u.a.createElement("div",{className:"flex1"},u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("contract_triggers_owner_address"),":"),u.a.createElement("div",{className:"flex1"},u.a.createElement(x.a,{address:a.owner_address},a.owner_address))),u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("contract_address"),":"),u.a.createElement("div",{className:"flex1"},u.a.createElement(x.a,{address:a.contract_address,isContract:!0},a.contract_address))),u.a.createElement("div",{className:"d-flex content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("value"),":"),a.call_value?u.a.createElement(j.b,{amount:a.call_value/p.K}):u.a.createElement(j.b,{amount:0})))),a.tokenTransferInfo&&void 0!==a.tokenTransferInfo.decimals&&void 0!==a.tokenTransferInfo.symbol&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("TRC20_transfers")),u.a.createElement("div",{className:"flex1"},u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("from"),":"),u.a.createElement("div",{className:"flex1"},u.a.createElement(x.a,{address:a.tokenTransferInfo.from_address},a.tokenTransferInfo.from_address))),u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("to"),":"),u.a.createElement("div",{className:"flex1"},u.a.createElement(x.a,{address:a.tokenTransferInfo.to_address},a.tokenTransferInfo.to_address))),u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("amount"),":"),u.a.createElement("div",{className:"flex1"},Number(a.tokenTransferInfo.amount_str)/Math.pow(10,a.tokenTransferInfo.decimals))),u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("token_txs_info"),":"),u.a.createElement("div",{className:"flex1"},a.tokenTransferInfo.contract_address==p.p||a.tokenTransferInfo.contract_address==p.q||a.tokenTransferInfo.contract_address==p.j?u.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},u.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,onError:function(e){e.target.onerror=null,e.target.src=m}}),u.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):u.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,style:{marginRight:5},onError:function(e){e.target.onerror=null,e.target.src=m}}),u.a.createElement(x.g,{name:a.tokenTransferInfo.name,address:a.tokenTransferInfo.contract_address,namePlus:a.tokenTransferInfo.name+" ("+a.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(a.internal_transactions)&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Internal_txns")),u.a.createElement("div",{className:"flex1"},Object.keys(a.internal_transactions).map(function(e,t){var n=[];return a.internal_transactions[e].map(function(e,a){var t=Object(g.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];n.push(u.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},u.a.createElement("div",{className:"d-flex"},u.a.createElement("div",{className:"mr-1"},Object(_.c)("transfers")),u.a.createElement("div",{className:"mr-1"},t.map_amount+" "+t.map_token_name_abbr),u.a.createElement("div",{className:"mr-1"},Object(_.c)("from")),u.a.createElement("div",{className:"mr-1",style:{width:"150px"}},u.a.createElement(x.c,{address:e.caller_address},e.caller_address)),u.a.createElement("div",{className:"mr-1"},Object(_.c)("to")),u.a.createElement("div",{className:"mr-1",style:{width:"150px"}},u.a.createElement(x.c,{address:e.transfer_to_address},e.transfer_to_address)))))}),n}))),"{}"!=JSON.stringify(a.cost)&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Fee_Consumption")),u.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),u.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),u.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Method_calling")),u.a.createElement("div",{className:"flex1"},u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("contract_method"),":"),u.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name"},e,":"),u.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"UPDATEBROKERAGECONTRACT":return a.method,u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("trigger_smart_contract"),u.a.createElement("small",null,Object(_.c)("SR_set_brokerage_contract")))),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content_pos"},u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Basic_info")),u.a.createElement("div",{className:"flex1"},u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("contract_triggers_owner_address"),":"),u.a.createElement("div",{className:"flex1"},u.a.createElement(x.a,{address:a.owner_address},a.owner_address))),u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_voting"},Object(_.c)("SR_set_brokerage"),":"),u.a.createElement("div",{className:"flex1"},a.brokerage?100-a.brokerage:100," %")),u.a.createElement("div",{className:"d-flex content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("value"),":"),a.call_value?u.a.createElement(j.b,{amount:a.call_value/p.K}):u.a.createElement(j.b,{amount:0})))),"{}"!=JSON.stringify(a.cost)&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Fee_Consumption")),u.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),u.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),u.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&u.a.createElement("div",{className:"d-flex border-bottom pt-2"},u.a.createElement("div",{className:"content_box_name"},Object(_.c)("Method_calling")),u.a.createElement("div",{className:"flex1"},u.a.createElement("div",{className:"d-flex border-bottom content_item"},u.a.createElement("div",{className:"content_name"},Object(_.c)("contract_method"),":"),u.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return u.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},u.a.createElement("div",{className:"content_name"},e,":"),u.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));default:return u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card-body table-title"},u.a.createElement("h5",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",a.contractType)),u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,a.owner_address?u.a.createElement(T.a,{label:"owner_address"},u.a.createElement(x.a,{address:a.owner_address})):"")))}return u.a.createElement("div",null,a.contractType&&u.a.createElement("div",{className:"card-body"},JSON.stringify(a)))}function w(e){var a=e.signature;return u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"Signature"},a.bytes)))}var S=t(15),k=Object(S.a)(function(){return t.e(16).then(t.bind(null,3489))}),R=t(29),I=t(9),M=t(2512),U=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(i.a)(a).call(this))).hideModal=function(){var a=e.props.onClose;a&&a()},e.onCodeScan=function(a){var t=a.code,n=e.props.onConfirm;n&&n({code:t})},e.state={body:null},e}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({body:u.a.createElement("div",null,u.a.createElement(M.a,{onScan:this.onCodeScan}))})}},{key:"render",value:function(){var e=this.state.body;return u.a.createElement(I.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},u.a.createElement(I.f,{className:"text-center",toggle:this.hideModal},"Scan Transaction"),u.a.createElement(I.d,null,e))}}]),a}(u.a.Component),F=Object(R.connect)(function(e){return{account:e.app.account}},{})(U),L=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(i.a)(a).call(this,e))).hideModal=function(){t.setState({modal:null})},t.setHex=function(e){t.setState({hex:e})},t.loadTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.b.readTransactionNew(a);case 3:n=e.sent,(c=n.transaction)?t.setState({transactionData:c}):t.setState({modal:u.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({modal:u.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.scanTransaction=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({modal:u.a.createElement(F,{onClose:t.hideModal,onConfirm:function(e){var a=e.code;t.loadTransaction(a),t.hideModal(),t.setHex(a)}})});case 1:case"end":return e.stop()}},e)})),t.broadcastTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.b.sendTransactionRaw(a);case 2:n=e.sent,c=n.success,r=n.code,c?t.setState({modal:u.a.createElement(h.a,{success:!0,title:Object(_.c)("transaction_success"),onConfirm:t.hideModal},Object(_.c)("transaction_success_message"))}):t.setState({modal:u.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_error"),onConfirm:t.hideModal},Object(_.c)("transaction_error_message"),u.a.createElement("br",null),"Code: ",r)});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.broadcastTransactionModal=Object(s.a)(l.a.mark(function e(){var a,n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.hex,e.next=3,N.b.readTransactionNew(a);case 3:n=e.sent,c=n.transaction,t.setState({modal:u.a.createElement(h.a,{info:!0,showCancel:!0,confirmBtnText:Object(_.c)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:Object(_.c)("confirm_transaction_message"),onConfirm:function(){return t.broadcastTransaction(a)},onCancel:t.hideModal})}),t.setState({transactionData:c});case 7:case"end":return e.stop()}},e)})),t.addSignature=function(){var e=t.state.hex;t.setState({modal:u.a.createElement(k,{transaction:e,onClose:t.hideModal})})};var n=Object(v.a)(e.location,"hex","");return t.state={hex:n,showInput:""===n,transactionData:null,modal:null},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.hex;e&&this.loadTransaction(e)}},{key:"componentDidUpdate",value:function(e,a){var t=Object(v.a)(this.props.location,"hex","");""!==t&&a.hex!==t&&(this.loadTransaction(t),this.setState({hex:t}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.hex,n=a.transactionData,r=a.modal,l=a.showInput;return this.props.flags,u.a.createElement("main",{className:"container header-overlap _transactionViewer"},r,l&&u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("transaction")," HEX"),u.a.createElement("p",{className:"text-center"},Object(_.c)("info_tx_viewer")),u.a.createElement("textarea",{className:"w-100 form-control",rows:"6",value:t,onChange:function(a){return e.setState({hex:a.target.value})}}),u.a.createElement("div",{className:"text-center _load_tx"},u.a.createElement("button",{className:"btn btn-primary",disabled:""===c()(t),onClick:function(){return e.loadTransaction(t)}},Object(_.c)("load_tx"))),u.a.createElement("hr",null),u.a.createElement("div",{className:"text-center p-3 _qrcode"},u.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("tx_qrcode")),u.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.scanTransaction()}},Object(_.c)("load_tx_qrcode"),u.a.createElement("i",{className:"fa fa-qrcode ml-2"}))))),n&&u.a.createElement(b.Fragment,null,u.a.createElement("div",{className:"card mt-3"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h5",{className:"card-title text-center"},"Transaction")),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement(T.a,{label:"timestamp"},u.a.createElement(f.a,{value:n.timestamp}),"\xa0",u.a.createElement(f.e,{value:n.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),u.a.createElement(T.a,{label:"contracts"},n.contracts.length),u.a.createElement(T.a,{label:"signatures"},n.signatures.length))))),u.a.createElement("div",{className:"card mt-3"},u.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Contracts")),n.contracts.map(function(e,a){return u.a.createElement(y,{key:a,contract:e})})),u.a.createElement("div",{className:"card mt-3"},u.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Signatures")),n.signatures.map(function(e){return u.a.createElement(w,{signature:e})})),u.a.createElement("div",{className:"card mt-3 mb-5"},u.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.broadcastTransactionModal},Object(_.c)("broadcast_transaction_to_network")))))}}]),a}(b.Component);a.default=Object(R.connect)(function(e){return{flags:e.app.flags}},{})(L)}}]);