function transpose(e){var t=e.length?e.length:0,a=e[0]instanceof Array?e[0].length:0;if(0===a||0===t)return[];var n,r,o=[];for(n=0;n<a;n++)for(o[n]=[],r=0;r<t;r++)o[n][r]=e[r][n];return o}function test_intersection(){Logger.log(arrayIntersection([1,2,3,"a"],[1,"a",2],["a",1])),Logger.log(arrayIntersection([1],[1,6,7,8]))}function arrayIntersection(){var e,t,a,n,r,o,i=[],s=Array.prototype.slice.call(arguments);if(a=s.pop())for(r=a.length,t=s.length;r--;){for(e=a[r],o=!1,n=t;!o&&n--;)arrayContains(s[n],e)||(o=!0);o||i.push(e)}return i}function test_getFilled2DArray(){Logger.log(getFilled2DArray("max",3,4))}function getFilled2DArray(e,t,a){for(var n=[],r=[],o=0;o<a;o++){r=[];for(var i=0;i<t;i++)r.push(e);n.push(r)}return n}function makeDvFromList(e,t,a){var n=SpreadsheetApp.newDataValidation();n.requireValueInList(t,!0),""!==a&&n.setHelpText(a),n.setAllowInvalid(!1),e.setDataValidation(n)}function getEditObject(e){return{user:Session.getActiveUser().getEmail(),source:SpreadsheetApp.getActiveSpreadsheet(),range:e,value:e.getValue(),authMode:"LIMITED"}}function ObjectOnEdit(e){var t=this,a=e.range,n=a.getWidth(),r=a.getHeight(),o=!0;(r>1||n>1)&&(o=!1);var i=a.getRow(),s=a.getColumn(),l=[];if(o)l.push(s);else for(var g=s;g<=s+n-1;g++)l.push(parseInt(g));t.range=a,t.numCols=n,t.numRows=r,t.numRow=i,t.numCol=s,t.boolCell=o,t.columns=l,t.getLastRow=a.getLastRow(),t.getLastCol=a.getLastColumn(),this.getValues=function(){if(!t.boolCell)return a.getValues();var n=e.value;return void 0!=n&&"object"!=typeof n||(n=a.getValue()),[[n]]};var u=e.oldValue;void 0==u&&(u=""),"object"==typeof u&&(u=""),t.oldValue=u;var S=a.getSheet(),c=S.getParent(),h=c.getId(),m=S.getName(),f=S.getSheetId();t.sheet=S,t.file=c,t.idFile=h,t.nameSheet=m,t.idSheet=f}function checkRowDv(e,t){return e<=t?0:1}function checkColDv(e,t,a){if("number"==typeof t)return t==e?1:0;var n=[];return Array.isArray(t)&&(n=t),"string"==typeof t&&(n=(n=t.split(a)).map(Number)),-1!=n.indexOf(e)?1:0}function setPropertyFromNamedRange(e,t,a){return a=a||t,setUserProperty((e=e||SpreadsheetApp.getActiveSpreadsheet()).getRangeByName(t).getValue(),a)}function setUserProperty(e,t){var a=PropertiesService.getUserProperties(),n=byteCount(e);if(n>NUM_MAX_BITE_SIZEOFPROPERTIES)return"Set Properties -- error. String size is more than "+NUM_MAX_BITE_SIZEOFPROPERTIES+" bites.";var r=Math.ceil(n/NUM_MAX_BITE_SIZEOFPROPERTY),o=chunkStringParts(e,r);a.setProperty(t+STR_PREFIX_NUMOFPARTS,r);for(var i=0;i<r;i++)e=o[i],a.setProperty(t+i,e);return"Set Properties -- ok!"}function getUserProperty(e){for(var t=PropertiesService.getUserProperties(),a="",n=t.getProperty(e+STR_PREFIX_NUMOFPARTS),r=0;r<n;r++)a+=t.getProperty(e+r);return a}function getPropertyAsArray(e){for(var t=PropertiesService.getUserProperties(),a="",n=t.getProperty(e+STR_PREFIX_NUMOFPARTS),r=0;r<n;r++)a+=t.getProperty(e+r);return JSON.parse(a)}function test_getRangeValuesMapR1C1(){var e=SpreadsheetApp.getActive().getActiveSheet().getRange("B2:C12");Logger.log(getRangeMapR1C1(e))}function getRangeMapR1C1(e,t){t=t||e.getValues();var a=e.getColumn(),n=e.getRow(),r=e.getWidth()+a-1,o=e.getHeight()+n-1,i={};i.rowNums=[];for(var s={},l=n;l<=o;l++){i.rowNums.push(l);for(var g=a;g<=r;g++)(s={}).value=t[l-n][g-a],s.range=e.offset(l-n,g-a,1,1),i["R"+l+"C"+g]=s}return i}function test_getSmartSort(){var e=getSmartSort([["Earth","Europe","Britain","London"],["Earth","Europe","Britain","Manchester"],["Earth","Europe","Britain","Liverpool"],["Earth","Europe","France","Paris"],["Earth","Europe","France","Lion"],["Earth","Europe","Italy","Rome"],["Earth","Europe","Italy","Milan"],["Earth","Europe","Greece","Athenes"],["Earth","Asia","China","Pekin"],["Earth","Africa","Algeria","Algiers"],["Earth","America","USA","Dallas"],["Earth","America","USA","New York"],["Earth","America","USA","Chicago"],["Tatooine","Yulab","Putesh","ASU"],["Tatooine","Yulab","Putesh","Niatirb"],["Tatooine","Yulab","Zalip","Duantan"],["Tatooine","Asia","Solo","Lion"],["Tatooine","Asia","Solo","To"],["Earth","America","USA","San Francisco"],["Tatooine","Yulab","Koko","Traiwau"],["Venus","Yoo","Van","Derzar"],["Tatooine","Chendoo","org","Eccel"]]);Logger.log(e)}function getSmartSort(e){var t=Object.create(null);return e.map(function(e,a){var n=t;return e.map(function(e){return n[e]=n[e]||{_:a},(n=n[e])._})}).sort(function(e,t){var a;return e.some(function(e,n){return a=e-t[n]}),a}).map(function(t){return e[t[t.length-1]]})}function chunkString(e,t){return e.match(new RegExp(".{1,"+t+"}","g"))}function TESTchunkString(){Logger.log(chunkString("12312312",2))}function chunkStringParts(e,t){var a=e.length;return chunkString(e,Math.ceil(a/t))}function TESTchunkStringParts(){Logger.log(chunkStringParts("12312312",3))}function byteCount(e){return encodeURI(e).split(/%..|./).length-1}function replaceAll(e,t,a){return e.replace(new RegExp(t,"g"),a)}function makeTasksClearContents(e){e.clear({contentsOnly:!0})}function makeTasksClearDataValidation(e){e.clear({validationsOnly:!0})}function makeTasksDataValidation(e,t,a){makeDvFromList(e,t,a)}function makeTasksSetValue(e,t,a){var n=e.getWidth(),r=e.getHeight();1===n&&1===r?e.setValue(a):e.setValues(getFilled2DArray(a,n,r))}function test_addTask(){var e="clearContents",t="",a=[4,5,7];addTask(e,t,3,a),Logger.log(JSON.stringify(OBJ_TASKS_DV)),addTask(e="makeBaby",t="Lu-Max",3,a,["ooo","oah","aaah"]),Logger.log(JSON.stringify(OBJ_TASKS_DV))}function addTask(e,t,a,n,r){OBJ_TASKS_DV[e]||(OBJ_TASKS_DV[e]={}),OBJ_TASKS_DV[e][t]||(OBJ_TASKS_DV[e][t]={}),OBJ_TASKS_DV[e][t].numRows||(OBJ_TASKS_DV[e][t].numRows=[]),OBJ_TASKS_DV[e][t].numColumnss||(OBJ_TASKS_DV[e][t].numColumnss=[]),OBJ_TASKS_DV[e][t].numRows.push(a),OBJ_TASKS_DV[e][t].numColumnss.push(n),r&&(OBJ_TASKS_DV[e][t].data||(OBJ_TASKS_DV[e][t].data=r))}function makeTasks(e){for(var t,a=getTaskMaker(OBJ_TASKS_DV),n=Object.keys(a),r="",o={},i=[],s={},l="",g=0,u=n.length;g<u;g++){r=n[g],t=C_TASKS_FUNCTIONS[r],o=a[r];for(var S=0,c=(i=Object.keys(o)).length;S<c;S++)makeTasksFunctions(t,e,(s=o[l=i[S]]).rangesA1,s.data,l)}return OBJ_TASKS_DV={},0}function makeTasksFunctions(e,t,a,n,r){for(var o={},i=0,s=a.length;i<s;i++)o=a[i],e(t.getRange(o.numRow,o.numCol,o.numRows,o.numCols),n,r)}function getTaskMaker(e){for(var t={},a=Object.keys(e),n="",r={},o="",i={},s={},l=[],g=0,u=a.length;g<u;g++){r=e[n=a[g]],i={};for(var S=0,c=(l=Object.keys(r)).length;S<c;S++)s=getSubTask(r[o=l[S]]),i[o]=s;t[n]=i}return t}function getSubTask(e){var t={};e.data&&(t.data=e.data);var a=getSubTaskA1Ranges(getSubTaskRows({numRows:e.numRows,numColumnss:e.numColumnss}));return t.rangesA1=a,t}function getSubTaskRows(e){for(var t={},a={},n={},r=e.numRows,o=0,i=e.numColumnss,s=[],l=[],g=0,u=r.length;g<u;g++)s=(n=a[o=r[g]]||{}).listCols||[],l=i[g],s=getUniqueLine(s=s.concat(l)).sort(function(e,t){return e-t}),n.listCols=s,a[o]=n;return t.rows=a,t}function test_getSubTaskA1Ranges(){var e={rows:{11:{listCols:[2]},12:{listCols:[2]},13:{listCols:[2]},6:{listCols:[2]},7:{listCols:[2]},8:{listCols:[2]},9:{listCols:[2]},10:{listCols:[2]}}};Logger.log(getSubTaskA1Ranges(e))}function getSubTaskA1Ranges(e){var t={},a=null,n="",r=[],o=[],i=-1,s=0,l=0,g={},u=Object.keys(e.rows);(u=u.map(function(e){return parseInt(e)})).sort(function(e,t){return e-t});for(var S=0,c=u.length;S<c;S++){l=u[S];for(var h=0,m=(o=(g=e.rows[l]).listCols).length;h<m;h++)(s=o[h])-i!=1?(a&&(t[n]=a),n="R"+l+"C"+s,r.push(n),(a={}).numRow=l,a.numCol=s,a.numCols=1):a.numCols=a.numCols+1,t[n]=a,i=s;a=null}for(var f={},v={},d="",S=0,c=r.length;S<c;S++)(v=f[d="C"+(a=t[n=r[S]]).numCol+"W"+a.numCols]||{}).numCol=a.numCol,v.numCols=a.numCols,v.rows=v.rows||[],v.rows.push(a.numRow),f[d]=v;for(var p=[],E=null,R=Object.keys(f),_=[],D=-1,l=0,S=0,c=R.length;S<c;S++){(_=(v=f[d=R[S]]).rows).sort(function(e,t){return e-t}),D=-1,E=null;for(var h=0,m=_.length;h<m;h++)(l=_[h])-D!=1?(E&&p.push(E),(E=E||{}).numRow=l,E.numCol=v.numCol,E.numCols=v.numCols,E.numRows=E.numRows||1):E.numRows=E.numRows+1,D=l;p.push(E)}return p}function setTriggerOnEdit(e){if(checkTriggerExists(e,C_SOURCE_TRIGGER))return-1;var t=SpreadsheetApp.getActive();ScriptApp.newTrigger(e).forSpreadsheet(t).onEdit().create()}function checkTriggerExists(e,t){for(var a=ScriptApp.getProjectTriggers(),n={},r=0;r<a.length;r++)if((n=a[r]).getHandlerFunction()==e&&n.getTriggerSource()==t)return!0;return!1}function test_uniqueArray(){var e=["boo","1",1,"true",!0];Logger.log(getUniqueLine(e)),e=[[5],[3,5],[5],[3,5],[5],[3,5]],Logger.log(getUniqueLine(e))}function getUniqueLine(e){var t={};return e.forEach(function(e){t[e+"::"+typeof e]=e}),Object.keys(t).map(function(e){return t[e]})}function test_getUniquePairs(){var e=[["one","two","fri","fri"],[1,2,3,3]];Logger.log(getUniquePairs(e))}function getUniquePairs(e){return getUniqueLine(transpose(e))}function test_getDvSettings(){Logger.log(getDvSettings())}function getDvSettings(){var e=SpreadsheetApp.getActiveSpreadsheet(),t=this;t.values={},t.values.file=e;var a=getSettingsSheet(C_USER_SETTINGS_SHEET,C_USER_SETTINGS_KEYS,C_USER_SETTINGS_HIDDEN,C_USER_SETTINGS_NOTES),n=a.getDataRange().getValues();1==n.length&&(n=getSampleSheetsIni(C_SAMPLE_WORK_SHEET,C_SAMPLE_DATA_SHEET,a));for(var r=[],o=[],i=[],s=[],l=[],g=[],u=1,S=n.length;u<S;u++)g=n[u],r.push(g[0]),o.push(g[1]),i.push(g[2]),s.push(g[3]),l.push(g[4]);t.values.namesWork=r,t.values.namesData=o,t.values.idsSource=""!==i&&i,t.values.rowsHeader=""!==s&&s,t.values.columns=""!==l&&l;for(var c=[],u=0,S=l.length;u<S;u++)if(l){c=l[u].split(C_NUMBER_DELIMETER);for(var h=0;h<c.length;h++)c[h]=+c[h];l[u]=c}return t.values}function test_getSettingsSheet(){Logger.log(getSettingsSheet(C_USER_SETTINGS_SHEET,C_USER_SETTINGS_KEYS,C_USER_SETTINGS_HIDDEN,C_USER_SETTINGS_NOTES))}function getSampleSheetsIni(e,t,a){var n=getSampleDataSheet(t);getSampleWorkSheet(e);a.getRange(2,1).setValue(e),a.getRange(2,2).setValue(t),a.getRange(2,3).setValue(a.getParent().getId());var r=getConnection(e,n.getDataRange().getValues()[0]);return a.getRange(2,4).setValue(r.r),a.getRange(2,5).setValue(r.c.join(",")),a.getDataRange().getValues()}function getSettingsSheet(e,t,a,n){var r=SpreadsheetApp.getActive(),o=r.getSheetByName(e);if(null!=o)return o;r.insertSheet(e),o=r.getSheetByName(e);for(var i=0,s=a.length;i<s;i++)1==a[i]&&o.hideColumns(i+1);var l=s+1,g=o.getMaxColumns()-s-1;o.deleteColumns(l,g),o.appendRow(t),o.setFrozenRows(1),o.getRange(1,1,1,s).setFontWeight("bold").setNotes([n]),g=o.getMaxRows()-30;return o.deleteRows(31,g),o}function test_getSampleWorkSheet(){Logger.log(getSampleWorkSheet(C_SAMPLE_WORK_SHEET))}function getSampleDataSheet(e){var t=SpreadsheetApp.getActive(),a=t.getSheetByName(e);if(null!=a)return a;t.insertSheet(e),a=t.getSheetByName(e);var n=[["Planet","Mainland","Country","City"],["Earth","Europe","Britain","London"],["Earth","Europe","Britain","Manchester"],["Earth","Europe","Britain","Liverpool"],["Earth","Europe","France","Paris"],["Earth","Europe","France","Lion"],["Earth","Europe","Italy","Rome"],["Earth","Europe","Italy","Milan"],["Earth","Europe","Greece","Athenes"],["Earth","Asia","China","Pekin"],["Earth","Africa","Algeria","Algiers"],["Earth","America","USA","Dallas"],["Earth","America","USA","New York"],["Earth","America","USA","San Francisco"],["Earth","America","USA","Chicago"],["Tatooine","Yulab","Putesh","ASU"],["Tatooine","Yulab","Putesh","Niatirb"],["Tatooine","Yulab","Zalip","Duantan"],["Tatooine","Asia","Solo","Lion"],["Tatooine","Asia","Solo","To"]],r=n[0].length,o=n.length;a.getRange(1,1,o,r).setValues(n),a.setFrozenRows(1),a.getRange(1,1,1,r).setFontWeight("bold");var i=r+1,s=a.getMaxColumns()-r-1;a.deleteColumns(i,s),s=a.getMaxRows()-o-30;var l=o+31;return a.deleteRows(l,s),a}function getSampleWorkSheet(e){var t=SpreadsheetApp.getActive(),a=t.getSheetByName(e);if(null!=a)return a;t.insertSheet(e),a=t.getSheetByName(e);var n=[["Dependent Drop-Down Lists","","","",""],["Please try entering the following:","","","",""],["Planet → Mainland → Country → City","","","",""],["","","","",""],["Planet","Mainland","Country","Code","City"]],r=n[0].length,o=n.length;a.getRange(1,1,o,r).setValues(n),a.setFrozenRows(5),a.getRange(5,1,1,r).setFontWeight("bold"),a.getRange(1,1).setFontSize(14).setFontWeight("bold"),howMany=a.getMaxRows()-o-300;var i=o+301;return a.deleteRows(i,howMany),a}function getDvObject(e){var t=getPropertyAsArray(C_USER_PROPERTY_DV),a=Object.keys(t.w),n=e.nameSheet;if(-1===a.indexOf(n))return null;var r={},o=getListDvConnections(e,t.w[n]);if(null===o)return null;(r={}).connections=o;var i=getDvDataSets(o,t.d);return r.dataSets=i,r}function getListDvConnections(e,t){for(var a=Object.keys(t),n=[],r="",o=0,i=a.length;o<i;o++){var s=getDvConnection(t[r=a[o]],e);null!==s&&(s.name=r,n.push(s))}return 0===n.length?null:n}function getDvConnection(e,t){if(t.getLastRow<=e.r)return null;var a=[];return 0===(a=arrayIntersection(e.c,t.columns).sort(function(e,t){return e-t})).length?null:(Logger.log(1e3),e.columnsChanged=a,e)}function getDvDataSets(e,t){for(var a={},n="",r=0,o=e.length;r<o;r++)a[n=e[r].name]=t[n];return a}function makeFirstDvRules(e){for(var t=e.w,a=Object.keys(t),n="",r={},o={},i={},s=[],l="",g=0,u=a.length;g<u;g++){o=t[n=a[g]];for(var S=0,c=(s=Object.keys(o)).length;S<c;S++){i=o[l=s[S]],r=e.d[l];makeDvFromList(getFirstDvRuleRange(n,i),getDvRuleList(r,""),"")}}}function getFirstDvRuleRange(e,t){var a=SpreadsheetApp.getActive().getSheetByName(e),n=a.getMaxRows(),r=t.r+1,o=t.c[0],i=n-r+1;return a.getRange(r,o,i)}function test_getDvRuleList(){var e={n:"data",d:{Earth:{Europe:{Britain:["London","Manchester","Liverpool"],France:["Paris","Lion"],Italy:["Rome","Milan"],Greece:["Athenes"]},Asia:{China:["Pekin"]},Africa:{Algeria:["Algiers"]},America:{USA:["Dallas","New York","San Francisco","Chicago"]}},Tatooine:{Yulab:{Putesh:["ASU","Niatirb"],Zalip:["Duantan"]},Asia:{Solo:["Lion","To"]}}},h:["Planet","Mainland","Country","City"],l:4,s:">",f:0},t="Earth>Europe>France>Paris";Logger.log(getDvRuleList(e,t));t="Earth>Europe>France";Logger.log(getDvRuleList(e,t));t="Earth";Logger.log(getDvRuleList(e,t));t="Earth>Europe";Logger.log(getDvRuleList(e,t));t="";Logger.log(getDvRuleList(e,t));t="Booooooo";Logger.log(getDvRuleList(e,t));t="Earth>Boooooooooo";Logger.log(getDvRuleList(e,t));t="Earth>Europe>France>Paris>Rue";Logger.log(getDvRuleList(e,t));t=">>>>>>>>>>>>>>>>>>>>>>>>";Logger.log(getDvRuleList(e,t))}function getDvRuleList(e,t){if(""===t)return Object.keys(e.d);var a=t.split(e.s),n=a.length;if(n>e.l)return null;n===e.l&&n--;var r=e.d;if(void 0===r)return null;for(var o=0;o<n;o++)r=r[a[o]];return Array.isArray(r)?r:void 0===r?null:Object.keys(r)}function makeSmartDataValidation(e,t,a){for(var n=e.connections,r={},o=0,i=n.length;o<i;o++)makeSmartDVConnection(t,r=n[o],e.dataSets[r.name]);makeTasks(a)}function makeSmartDVConnection(e,t,a){for(var n=t.columnsChanged,r=n[n.length-1],o=e.rowNums,i=0,s=o.length;i<s;i++)o[i]>t.r&&makeSmartDVRow(getObjDvChange(r,o[i],t.c,n,e),a,e)}function getObjDvChange(e,t,a,n,r){var o={};o.numRow=t,o.numCol=e,o.addR1C1="R"+t+"C"+e,o.columns=a,o.columnsChanged=n;var i=r[o.addR1C1];return o.value=i.value,o.range=i.range,o}function makeSmartDVRow(e,t,a){var n=!1;n=e.columns.indexOf(e.numCol)===t.l-1;var r=!1;""===e.value&&(r=!0);var o=a[e.addR1C1],i=o.range.getDataValidation();if(i)var s=i.getHelpText(),l=s+t.s+e.value;else r=!0;s||(l=o.value);var g=getDvRuleList(t,l);if(g||(r=!0),r)return dealWithBadValue(e,a,t),0;if(n)return 0;var u=e.columns,S=u.indexOf(e.numCol)+1;if(S===t.l)return 0;var c=u[S];addTask("makeDv",l,e.numRow,[c],g),1===g.length&&dealWithOnlyValue(g[0],l,t.s,e.numRow,c,u,t)}function dealWithOnlyValue(e,t,a,n,r,o,i){var s=!1,l=o.indexOf(r);s=l===i.l-1;var g="setVal";if(addTask(g,e,n,[r]),!s){g="makeDv";var u=getDvRuleList(i,t=t+a+e);addTask(g,t,n,[r=o[l+1]],u),1===u.length&&dealWithOnlyValue(e=u[0],t,a,n,r,o,i)}}function dealWithBadValue(e,t,a){var n=e.columns.filter(function(t){return t>e.numCol});n&&n.length&&addTask("clearDv","",e.numRow,n);var r=e.columns.filter(function(t){return t>=e.numCol});r&&r.length&&addTask("clearContents","",e.numRow,r);var o=e.columns.indexOf(e.numCol),i=e.columnsChanged.indexOf(e.numCol);if(0===o){var s=getDvRuleList(a,"");return addTask("makeDv","",e.numRow,[e.numCol],s),0}if(0===i)return 0;makeSmartDVRow(getObjDvChange(e.columnsChanged[i-1],e.numRow,e.columns,e.columnsChanged,t),a,t)}function setDv(){var e=new SetsDV(getDvSettings());setUserProperty(JSON.stringify(e),C_USER_PROPERTY_DV),makeFirstDvRules(e),Logger.log(e),setTriggerOnEdit("dvOnEdit")}function SetsDV(e,t){namesWork=e.namesWork,namesData=e.namesData,idsFileData=e.idsSource,rowsHeader=e.rowsHeader,columnsList=e.columns;var a=namesWork.length;idsFileData||(idsFileData=getFilledArray(!1,a)),rowsHeader||(rowsHeader=getFilledArray(!1,a)),columnsList||(columnsList=getFilledArray(!1,a));for(var n={},r={},o={},i={},s="",l="",g="",u="",S=0;S<a;S++)(s=namesWork[S])in n||(n[s]={}),o=n[s],(u=idsFileData[S]||"0")==SpreadsheetApp.getActive().getId()&&(u="0"),(l=u+(g=namesData[S])+"-"+columnsList[S].join(";"))in r||("0"==u?SpreadsheetApp.getActive():SpreadsheetApp.openById(u),r[l]=new SheetData(g,idsFileData[S],rowsHeader[S],columnsList[S])),i=r[l],l in o||(o[l]=getConnection(s,i.h,rowsHeader[S],columnsList[S]));this.w=n,this.d=r}function getFilledArray(e,t){for(var a=[],n=0;n<t;n++)a.push(e);return a}function test_getConnection(){var e={},t=["Planet","Mainland","Country","City"];e["0data"]=getConnection("Work Sample",t),Logger.log(JSON.stringify(e))}function getConnection(e,t,a,n){var r={};if(a&&n)return r.r=a,r.c=n,r;for(var o=SpreadsheetApp.getActiveSpreadsheet().getSheetByName(e).getDataRange().getValues(),i=[],s=t.length,l=0,g=[],u=0,S=0,c=o.length;S<c;S++){i=o[S],g=[];for(var h=0;h<s&&0!=(l=i.indexOf(t[h])+1);h++)if(g.push(l),h==s-1)return u=S+1,r.r=u,r.c=g,r}return-1}function test_sheetData(){var e=new SheetData("Data Sample","1W2M_SardPuzP...0Z2fhL18");Logger.log(JSON.stringify(e))}function SheetData(e,t){var a=this;a.n=e,t=t||SpreadsheetApp.getActiveSpreadsheet().getId();var n=SpreadsheetApp.openById(t).getSheetByName(a.n);if(null===n)throw C_CUSTOM_ERROR_KEY+": No sheet called '"+a.n+"'. Please review your settings. ... You may find this in a script by key: '"+C_CUSTOM_ERROR_KEY+". Error #1'";var r=n.getDataRange(),o=getSmartSort(r.getDisplayValues());return r.setValues(o),a.d=getDvData(o),a.h=o[0],a.l=o[0].length,a.s=getDelimeter(o,C_DELIMETERS),t==SpreadsheetApp.getActiveSpreadsheet().getId()&&(t=0),a.f=t,0}function test_getDelimeter(){var e=C_DELIMETERS,t=[["One","Two","Fri"]];Logger.log(getDelimeter(t,C_DELIMETERS)),t[0].push(e[0]),Logger.log(getDelimeter(t,C_DELIMETERS)),t[0].push(e.join("")),Logger.log(getDelimeter(t,C_DELIMETERS)),t[0].push("(1)"),t[0].push("(2)"),Logger.log(getDelimeter(t,C_DELIMETERS))}function getDelimeter(e,t,a){var n=JSON.parse(JSON.stringify(t)),r=[],o="",i="";a>=0&&(n.push("("+a+")"),a++);for(var s=0,l=e.length;s<l;s++)for(var g=0,u=(r=e[s]).length;g<u;g++){o=r[g];for(var S=n.length-1;S>=0;S--)i=n[S],o.indexOf(i)>-1&&n.splice(S,1)}return n&&n.length?n[0]:(a||(a=1),getDelimeter(e,n,a))}function test_getDvData(){var e=getDvData(SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sample").getDataRange().getValues());Logger.log(JSON.stringify(e))}function getDvData(e){for(var t,a={},n={},r={},o="",i=e[0].length,s="",l=1,g=e.length;l<g;l++){if(o=e[l][0],s=e[l][i-1],i>2){r=n=a[o]||{};for(var u=1;u<i-2;u++)n[t=e[l][u]]=n[t]||{},n=n[t];n[t=e[l][i-2]]=n[t]||[],(n=n[t]).push(s)}else(r=a[o]||[]).push(s);a[o]=r}return a}function test_dvOnEdit(){testOnEditTwice_(SpreadsheetApp.getActive().getActiveCell())}function test_dvOnEdit_Script(){testOnEditTwice_(SpreadsheetApp.getActive().getSheetByName(C_SAMPLE_WORK_SHEET).getRange("A6"))}function testOnEditTwice_(e){dvOnEdit(getEditObject(e)),dvOnEdit(getEditObject(e.offset(0,0,3,5)))}function dvOnEdit(e){var t=new ObjectOnEdit(e),a=getDvObject(t);if(null===a)return-1;makeSmartDataValidation(a,getRangeMapR1C1(t.range,t.getValues()),t.sheet)}function onOpen(){SpreadsheetApp.getUi().createMenu("Smart Data Validation").addItem("Set/Update","setDv").addToUi()}var arrayContains=Array.prototype.indexOf?function(e,t){return e.indexOf(t)>-1}:function(e,t){for(var a=e.length;a--;)if(e[a]===t)return!0;return!1},NUM_MAX_BITE_SIZEOFPROPERTY=9e3,NUM_MAX_BITE_SIZEOFPROPERTIES=25e3,STR_PREFIX_NUMOFPARTS="NUM_OF_PARTS",OBJ_TASKS_DV={},C_TASKS_FUNCTIONS={clearContents:makeTasksClearContents,clearDv:makeTasksClearDataValidation,makeDv:makeTasksDataValidation,setVal:makeTasksSetValue},C_SOURCE_TRIGGER="SPREADSHEETS",C_USER_SETTINGS_SHEET="_Dv_Ini_",C_SORT_DV_DATA=!0,C_DELIMETERS=[">","=>","->",">>","|"," |","--\x3e",">>>"],C_USER_PROPERTY_DV="Dv_my_property_1984",C_SAMPLE_DATA_SHEET="Data Sample",C_SAMPLE_WORK_SHEET="Work Sample",C_USER_SETTINGS_KEYS=["Work Sheet","Data Sheet","Source File Id","Header Row","Columns"],C_USER_SETTINGS_HIDDEN=[0,0,1,1,1],C_NUMBER_DELIMETER=",",C_USER_SETTINGS_NOTES=["Name of sheet to make dependent drop-downs","Name of sheet with data relating to the Work Sheet","[Optional] Id of file with data. Please omit if Data Sheet is in current file","[Optional] Header row of Work Sheet. Data Validations come after this row. Leave this field blank to make trigger automatically find matching headers from Data Sheet in Work Sheet.","[Optional] Column numbers for Data Validation, [ "+C_NUMBER_DELIMETER+" ] separated list. Data Validations come after this row. Leave this field blank to make trigger automatically find matching headers from Data Sheet in Work Sheet."],C_CUSTOM_ERROR_KEY="Oh, Boy!";