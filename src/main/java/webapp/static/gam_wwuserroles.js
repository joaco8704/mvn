/*!   GeneXus Java 17_0_2-148375 on February 23, 2021 1:2:59.73
*/
gx.evt.autoSkip=!1;gx.define("gam_wwuserroles",!1,function(){var n,t;this.ServerClass="gam_wwuserroles";this.PackageName="genexus.security.backend";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV20UserId=gx.fn.getControlValue("vUSERID");this.AV20UserId=gx.fn.getControlValue("vUSERID");this.AV20UserId=gx.fn.getControlValue("vUSERID")};this.e110z1_client=function(){return this.clearMessages(),gx.text.compare(gx.fn.getCtrlProperty("FILTERSCONTAINER","Class"),"AdvancedContainer")==0?(gx.fn.setCtrlProperty("FILTERSCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("HIDE","Caption",gx.getMessage("HIDE FILTERS")),gx.fn.setCtrlProperty("HIDE","Class","HideFiltersButton"),gx.fn.setCtrlProperty("GRIDCELL","Class","WWGridCell")):(gx.fn.setCtrlProperty("FILTERSCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("HIDE","Caption",gx.getMessage("SHOW FILTERS")),gx.fn.setCtrlProperty("HIDE","Class","ShowFiltersButton"),gx.fn.setCtrlProperty("GRIDCELL","Class","WWGridCellExpanded")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("FILTERSCONTAINER","Class")',ctrl:"FILTERSCONTAINER",prop:"Class"},{ctrl:"HIDE",prop:"Caption"},{ctrl:"HIDE",prop:"Class"},{av:'gx.fn.getCtrlProperty("GRIDCELL","Class")',ctrl:"GRIDCELL",prop:"Class"},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e120z1_client=function(){return this.clearMessages(),this.call("genexus.security.backend.gam_userroleselect",[this.AV20UserId],null,["UserId"]),this.refreshOutputs([{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e160z2_client=function(){return this.executeServerEvent("VBTNDLT.CLICK",!0,arguments[0],!1,!1)};this.e170z2_client=function(){return this.executeServerEvent("VBTNMAINROLE.CLICK",!0,arguments[0],!1,!1)};this.e130z2_client=function(){return this.executeServerEvent("VDISPLAYINHERITROLES.ISVALID",!0,null,!1,!0)};this.e180z2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e190z1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,51,52,53,54,55];this.GXLastCtrlId=55;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",50,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_wwuserroles",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addSingleLineEdit("Btnmainrole",51,"vBTNMAINROLE","","","BtnMainRole","char",90,"px",10,10,"left","e170z2_client",[],"Btnmainrole","BtnMainRole",!0,0,!1,!1,"",1,"WWColumn");t.addSingleLineEdit("Name",52,"vNAME",gx.getMessage("Role name"),"","Name","char",0,"px",120,80,"left",null,[],"Name","Name",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit("Btndlt",53,"vBTNDLT","","","BtnDlt","char",0,"px",20,20,"left","e160z2_client",[],"Btndlt","BtnDlt",!0,0,!1,!1,"TextActionAttribute TextLikeLink",1,"WWTextActionColumn");t.addSingleLineEdit("Guid",54,"vGUID",gx.getMessage("GUID"),"","GUID","char",0,"px",40,40,"left",null,[],"Guid","GUID",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Id",55,"vID",gx.getMessage("Key Numeric Long"),"","Id","int",0,"px",12,12,"right",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");this.GridwwContainer.emptyText=gx.getMessage("");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE2",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLE4",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"HIDE",grid:0,evt:"e110z1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TEXTBLOCK3",format:0,grid:0,ctrltype:"textblock"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"TABLE3",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"CANCEL1",grid:0,evt:"e190z1_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNADD",grid:0,evt:"e120z1_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSEARCH",gxz:"ZV22Search",gxold:"OV22Search",gxvar:"AV22Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV22Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV22Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV22Search,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV22Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"CELLFILTERS",grid:0};n[27]={id:27,fld:"FILTERSCONTAINER",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"TABLE5",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"TEXTBLOCK2",format:0,grid:0,ctrltype:"textblock"};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e130z2_client",evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAYINHERITROLES",gxz:"ZV9DisplayInheritRoles",gxold:"OV9DisplayInheritRoles",gxvar:"AV9DisplayInheritRoles",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV9DisplayInheritRoles=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9DisplayInheritRoles=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vDISPLAYINHERITROLES",gx.O.AV9DisplayInheritRoles,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9DisplayInheritRoles=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vDISPLAYINHERITROLES")},nac:gx.falseFn,values:["true","false"]};n[38]={id:38,fld:"GRIDCELL",grid:0};n[39]={id:39,fld:"GRIDTABLE",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"char",len:120,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV21UserName",gxold:"OV21UserName",gxvar:"AV21UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV21UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV21UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[51]={id:51,lvl:2,type:"char",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:50,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNMAINROLE",gxz:"ZV8BtnMainRole",gxold:"OV8BtnMainRole",gxvar:"AV8BtnMainRole",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8BtnMainRole=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8BtnMainRole=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNMAINROLE",n||gx.fn.currentGridRowImpl(50),gx.O.AV8BtnMainRole,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8BtnMainRole=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNMAINROLE",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn,evt:"e170z2_client"};n[52]={id:52,lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:50,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(50),gx.O.AV18Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:50,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV7BtnDlt",gxold:"OV7BtnDlt",gxvar:"AV7BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV7BtnDlt=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7BtnDlt=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(50),gx.O.AV7BtnDlt,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV7BtnDlt=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn,evt:"e160z2_client"};n[54]={id:54,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:50,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV15GUID",gxold:"OV15GUID",gxvar:"AV15GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV15GUID=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15GUID=n)},v2c:function(n){gx.fn.setGridControlValue("vGUID",n||gx.fn.currentGridRowImpl(50),gx.O.AV15GUID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV15GUID=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vGUID",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV16Id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV16Id=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(50),gx.O.AV16Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV16Id=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vID",n||gx.fn.currentGridRowImpl(50),gx.thousandSeparator)},nac:gx.falseFn};this.AV22Search="";this.ZV22Search="";this.OV22Search="";this.AV9DisplayInheritRoles=!1;this.ZV9DisplayInheritRoles=!1;this.OV9DisplayInheritRoles=!1;this.AV21UserName="";this.ZV21UserName="";this.OV21UserName="";this.ZV8BtnMainRole="";this.OV8BtnMainRole="";this.ZV18Name="";this.OV18Name="";this.ZV7BtnDlt="";this.OV7BtnDlt="";this.ZV15GUID="";this.OV15GUID="";this.ZV16Id=0;this.OV16Id=0;this.AV22Search="";this.AV9DisplayInheritRoles=!1;this.AV21UserName="";this.AV20UserId="";this.AV8BtnMainRole="";this.AV18Name="";this.AV7BtnDlt="";this.AV15GUID="";this.AV16Id=0;this.Events={e160z2_client:["VBTNDLT.CLICK",!0],e170z2_client:["VBTNMAINROLE.CLICK",!0],e130z2_client:["VDISPLAYINHERITROLES.ISVALID",!0],e180z2_client:["ENTER",!0],e190z1_client:["CANCEL",!0],e110z1_client:["'HIDE'",!1],e120z1_client:["'ADDNEW'",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV22Search",fld:"vSEARCH",pic:""},{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV21UserName",fld:"vUSERNAME",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV22Search",fld:"vSEARCH",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV7BtnDlt",fld:"vBTNDLT",pic:""},{av:'gx.fn.getCtrlProperty("vBTNDLT","Visible")',ctrl:"vBTNDLT",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vBTNMAINROLE","Enabled")',ctrl:"vBTNMAINROLE",prop:"Enabled"},{av:"AV8BtnMainRole",fld:"vBTNMAINROLE",pic:""},{av:'gx.fn.getCtrlProperty("vBTNMAINROLE","Class")',ctrl:"vBTNMAINROLE",prop:"Class"},{av:"AV15GUID",fld:"vGUID",pic:""},{av:"AV16Id",fld:"vID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV18Name",fld:"vNAME",pic:""},{av:'gx.fn.getCtrlProperty("vBTNMAINROLE","Visible")',ctrl:"vBTNMAINROLE",prop:"Visible"},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["'HIDE'"]=[[{av:'gx.fn.getCtrlProperty("FILTERSCONTAINER","Class")',ctrl:"FILTERSCONTAINER",prop:"Class"},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:'gx.fn.getCtrlProperty("FILTERSCONTAINER","Class")',ctrl:"FILTERSCONTAINER",prop:"Class"},{ctrl:"HIDE",prop:"Caption"},{ctrl:"HIDE",prop:"Class"},{av:'gx.fn.getCtrlProperty("GRIDCELL","Class")',ctrl:"GRIDCELL",prop:"Class"},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["VBTNDLT.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV22Search",fld:"vSEARCH",pic:""},{av:"AV16Id",fld:"vID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV21UserName",fld:"vUSERNAME",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["'ADDNEW'"]=[[{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["VBTNMAINROLE.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV22Search",fld:"vSEARCH",pic:""},{av:"AV16Id",fld:"vID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV21UserName",fld:"vUSERNAME",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.EvtParms["VDISPLAYINHERITROLES.ISVALID"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV20UserId",fld:"vUSERID",pic:""},{av:"AV22Search",fld:"vSEARCH",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}],[{av:"AV21UserName",fld:"vUSERNAME",pic:""},{av:"AV9DisplayInheritRoles",fld:"vDISPLAYINHERITROLES",pic:""}]];this.setVCMap("AV20UserId","vUSERID",0,"char",40,0);this.setVCMap("AV20UserId","vUSERID",0,"char",40,0);this.setVCMap("AV20UserId","vUSERID",0,"char",40,0);this.setVCMap("AV20UserId","vUSERID",0,"char",40,0);t.addRefreshingVar({rfrVar:"AV20UserId"});t.addRefreshingVar(this.GXValidFnc[37]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingParm({rfrVar:"AV20UserId"});t.addRefreshingParm(this.GXValidFnc[37]);t.addRefreshingParm(this.GXValidFnc[24]);this.Initialize()});gx.wi(function(){gx.createParentObj(gam_wwuserroles)})