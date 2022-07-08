"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4012],{62770:(e,t,r)=>{let a,n,i,_;var s,o;let c;r.d(t,{TW:()=>a,tt:()=>n,is:()=>i,Uf:()=>_,hP:()=>c,N2:()=>d,TA:()=>l,kM:()=>v,e4:()=>u,Fy:()=>p,OV:()=>y,aK:()=>w,rs:()=>S,pr:()=>g,wz:()=>f,PE:()=>m,tY:()=>b,xK:()=>W,Qf:()=>z,JT:()=>j,BP:()=>k,f$:()=>I,vS:()=>h,mZ:()=>E,B7:()=>D,Mb:()=>A,cH:()=>M,kL:()=>F,yD:()=>T,vN:()=>Z,uq:()=>N,Hr:()=>O,OF:()=>R,Ir:()=>H,EW:()=>L,kV:()=>x,lo:()=>K,se:()=>q,u0:()=>C,zn:()=>P,IG:()=>U,JL:()=>B,LD:()=>V,Db:()=>J,xw:()=>$}),function(e){e[e.Idle=0]="Idle",e[e.Including=1]="Including",e[e.Excluding=2]="Excluding",e[e.Busy=3]="Busy",e[e.SmartStart=4]="SmartStart"}(a||(a={})),function(e){e[e.Default=0]="Default",e[e.SmartStart=1]="SmartStart",e[e.Insecure=2]="Insecure",e[e.Security_S0=3]="Security_S0",e[e.Security_S2=4]="Security_S2"}(n||(n={})),function(e){e[e.Temporary=-2]="Temporary",e[e.None=-1]="None",e[e.S2_Unauthenticated=0]="S2_Unauthenticated",e[e.S2_Authenticated=1]="S2_Authenticated",e[e.S2_AccessControl=2]="S2_AccessControl",e[e.S0_Legacy=7]="S0_Legacy"}(i||(i={})),function(e){e[e.SmartStart=0]="SmartStart"}(_||(_={})),function(e){e[e.S2=0]="S2",e[e.SmartStart=1]="SmartStart"}(s||(s={})),function(e){e[e.ZWave=0]="ZWave",e[e.ZWaveLongRange=1]="ZWaveLongRange"}(o||(o={})),function(e){e[e.Error_Timeout=-1]="Error_Timeout",e[e.Error_Checksum=0]="Error_Checksum",e[e.Error_TransmissionFailed=1]="Error_TransmissionFailed",e[e.Error_InvalidManufacturerID=2]="Error_InvalidManufacturerID",e[e.Error_InvalidFirmwareID=3]="Error_InvalidFirmwareID",e[e.Error_InvalidFirmwareTarget=4]="Error_InvalidFirmwareTarget",e[e.Error_InvalidHeaderInformation=5]="Error_InvalidHeaderInformation",e[e.Error_InvalidHeaderFormat=6]="Error_InvalidHeaderFormat",e[e.Error_InsufficientMemory=7]="Error_InsufficientMemory",e[e.Error_InvalidHardwareVersion=8]="Error_InvalidHardwareVersion",e[e.OK_WaitingForActivation=253]="OK_WaitingForActivation",e[e.OK_NoRestart=254]="OK_NoRestart",e[e.OK_RestartPending=255]="OK_RestartPending"}(c||(c={}));const d=52;let l,v,u;!function(e){e[e.NotAvailable=127]="NotAvailable",e[e.ReceiverSaturated=126]="ReceiverSaturated",e[e.NoSignalDetected=125]="NoSignalDetected"}(l||(l={})),function(e){e[e.ZWave_9k6=1]="ZWave_9k6",e[e.ZWave_40k=2]="ZWave_40k",e[e.ZWave_100k=3]="ZWave_100k",e[e.LongRange_100k=4]="LongRange_100k"}(v||(v={})),function(e){e[e.Unknown=0]="Unknown",e[e.Asleep=1]="Asleep",e[e.Awake=2]="Awake",e[e.Dead=3]="Dead",e[e.Alive=4]="Alive"}(u||(u={}));const p=["unknown","asleep","awake","dead","alive"],y=(e,t)=>{if(t.device_id&&t.entry_id)throw new Error("Only one of device or entry ID should be supplied.");if(!t.device_id&&!t.entry_id)throw new Error("Either device or entry ID should be supplied.");return e.callWS({type:"zwave_js/network_status",device_id:t.device_id,entry_id:t.entry_id})},w=(e,t)=>e.callWS({type:"zwave_js/data_collection_status",entry_id:t}),S=(e,t,r)=>e.callWS({type:"zwave_js/update_data_collection_preference",entry_id:t,opted_in:r}),g=(e,t)=>e.callWS({type:"zwave_js/get_provisioning_entries",entry_id:t}),f=(e,t,r,a=n.Default,i,_,s)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/add_node",entry_id:t,inclusion_strategy:a,qr_code_string:_,qr_provisioning_information:i,planned_provisioning_entry:s}),m=(e,t)=>e.callWS({type:"zwave_js/stop_inclusion",entry_id:t}),b=(e,t)=>e.callWS({type:"zwave_js/stop_exclusion",entry_id:t}),W=(e,t,r,a)=>e.callWS({type:"zwave_js/grant_security_classes",entry_id:t,security_classes:r,client_side_auth:a}),z=(e,t,r)=>e.callWS({type:"zwave_js/validate_dsk_and_enter_pin",entry_id:t,pin:r}),j=(e,t,r)=>e.callWS({type:"zwave_js/supports_feature",entry_id:t,feature:r}),k=(e,t,r)=>e.callWS({type:"zwave_js/parse_qr_code_string",entry_id:t,qr_code_string:r}),I=(e,t,r,a,n)=>e.callWS({type:"zwave_js/provision_smart_start_node",entry_id:t,qr_code_string:a,qr_provisioning_information:r,planned_provisioning_entry:n}),h=(e,t,r,a)=>e.callWS({type:"zwave_js/unprovision_smart_start_node",entry_id:t,dsk:r,node_id:a}),E=(e,t)=>e.callWS({type:"zwave_js/node_status",device_id:t}),D=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/subscribe_node_status",device_id:t}),A=(e,t)=>e.callWS({type:"zwave_js/node_metadata",device_id:t}),M=(e,t)=>e.callWS({type:"zwave_js/node_comments",device_id:t}),F=(e,t)=>e.callWS({type:"zwave_js/get_config_parameters",device_id:t}),T=(e,t,r,a,n)=>{const i={type:"zwave_js/set_config_parameter",device_id:t,property:r,value:a,property_key:n};return e.callWS(i)},Z=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/refresh_node_info",device_id:t}),N=(e,t)=>e.callWS({type:"zwave_js/heal_node",device_id:t}),O=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/remove_failed_node",device_id:t}),R=(e,t)=>e.callWS({type:"zwave_js/begin_healing_network",entry_id:t}),H=(e,t)=>e.callWS({type:"zwave_js/stop_healing_network",entry_id:t}),L=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/subscribe_heal_network_progress",entry_id:t}),x=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/subscribe_controller_statistics",entry_id:t}),K=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/subscribe_node_statistics",device_id:t}),q=(e,t)=>e.callWS({type:"zwave_js/get_firmware_update_progress",device_id:t}),C=(e,t)=>e.callWS({type:"zwave_js/get_any_firmware_update_progress",entry_id:t}),P=async(e,t,r,a)=>{const n=new FormData;n.append("file",r),void 0!==a&&n.append("target",a.toString());const i=await e.fetchWithAuth(`/api/zwave_js/firmware/upload/${t}`,{method:"POST",body:n});if(200!==i.status)throw new Error(i.statusText)},U=(e,t,r)=>e.connection.subscribeMessage((e=>r(e)),{type:"zwave_js/subscribe_firmware_update_status",device_id:t}),B=(e,t)=>e.callWS({type:"zwave_js/abort_firmware_update",device_id:t}),V=(e,t,r)=>e.connection.subscribeMessage(r,{type:"zwave_js/subscribe_log_updates",entry_id:t}),J=(e,t)=>e.callWS({type:"zwave_js/get_log_config",entry_id:t}),$=(e,t,r)=>e.callWS({type:"zwave_js/update_log_config",entry_id:t,config:{level:r}})},4012:(e,t,r)=>{r.r(t),r.d(t,{getZwaveDeviceAlerts:()=>n});var a=r(62770);const n=async(e,t)=>{var r;const n=await(0,a.cH)(e,t.id);return null!=n&&null!==(r=n.comments)&&void 0!==r&&r.length?n.comments.map((e=>({level:e.level,text:e.text}))):[]}}}]);