const _0x542787=_0x1761;(function(_0x5ea85b,_0x268925){const _0x2d591f=_0x1761,_0xb2d31d=_0x5ea85b();while(!![]){try{const _0x50efae=-parseInt(_0x2d591f(0x1e7))/0x1*(-parseInt(_0x2d591f(0x1b9))/0x2)+parseInt(_0x2d591f(0x1d2))/0x3*(parseInt(_0x2d591f(0x1df))/0x4)+parseInt(_0x2d591f(0x1e8))/0x5+-parseInt(_0x2d591f(0x1f6))/0x6*(-parseInt(_0x2d591f(0x1e1))/0x7)+parseInt(_0x2d591f(0x194))/0x8*(parseInt(_0x2d591f(0x1d3))/0x9)+parseInt(_0x2d591f(0x1c8))/0xa+parseInt(_0x2d591f(0x1a2))/0xb*(-parseInt(_0x2d591f(0x174))/0xc);if(_0x50efae===_0x268925)break;else _0xb2d31d['push'](_0xb2d31d['shift']());}catch(_0x56ac84){_0xb2d31d['push'](_0xb2d31d['shift']());}}}(_0x2bae,0x5adc6),require(_0x542787(0x16c)));const Config=require(_0x542787(0x20c));function _0x1761(_0x3e1cec,_0x3c525a){const _0x2bae4b=_0x2bae();return _0x1761=function(_0x176115,_0x10fb40){_0x176115=_0x176115-0x167;let _0x9c9bd6=_0x2bae4b[_0x176115];return _0x9c9bd6;},_0x1761(_0x3e1cec,_0x3c525a);}if(Config[_0x542787(0x17b)]===_0x542787(0x19c))return console['log']('⚠️\x20Invalid\x20MongoDB\x20url');if(Config[_0x542787(0x17f)]===_0x542787(0x1c0))return console[_0x542787(0x209)](_0x542787(0x1a3));const {default:anyaV2Connect,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@queenanya/baileys'),{createQueenAnyaSession}=require(_0x542787(0x173)),{eventListner,eventListner2}=require(_0x542787(0x191)),{insertMongoDBdata}=require('./lib/database/mongoDB/mongoCore'),{get}=require(_0x542787(0x206)),pino=require(_0x542787(0x196)),fs=require('fs'),fs_extra=require(_0x542787(0x1d8)),chalk=require(_0x542787(0x200)),FileType=require(_0x542787(0x204)),path=require('path'),moment=require(_0x542787(0x1bb)),PhoneNumber=require(_0x542787(0x1db)),express=require(_0x542787(0x168)),app=express(),port='10000',{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,await,sleep,writeWORKTYPE}=require('./lib/lib/myfunc'),{exec,spawn,execSync}=require(_0x542787(0x1d6));createQueenAnyaSession(),setTimeout(()=>{const _0x5c88b8=_0x542787,_0x12cfd3=makeInMemoryStore({'logger':pino()['child']({'level':_0x5c88b8(0x1b3),'stream':'storage'})}),_0x5c33d3=()=>{const _0x4a9827=_0x5c88b8;let _0x38398c;try{let _0x2b2b93=fetchJson(_0x4a9827(0x1eb));_0x38398c=[_0x2b2b93[_0x4a9827(0x1e5)][_0x4a9827(0x1e3)](/[.]/g,',\x20')];}catch{_0x38398c=[0x2,0x925,0x12];}return _0x38398c;};async function _0x125330(){const _0x14a407=_0x5c88b8,{state:_0x320eb7,saveCreds:_0x2ca2fb}=await useMultiFileAuthState(__dirname+'/lib/database/session_Queen-Anya/'),_0x2d94c7=anyaV2Connect({'logger':pino({'level':_0x14a407(0x1d7)}),'printQRInTerminal':!![],'browser':[botname+'\x20(Queen\x20Anya\x20v2)\x20✅',_0x14a407(0x197),_0x14a407(0x20e)],'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![],'generateHighQualityLinkPreview':!![],'auth':_0x320eb7,'version':_0x5c33d3()||[0x2,0x925,0x12],'getMessage':async _0x3d5e21=>{const _0x483acf=_0x14a407;if(_0x12cfd3){const _0x5e57fe=await _0x12cfd3[_0x483acf(0x18b)](_0x3d5e21[_0x483acf(0x169)],_0x3d5e21['id'],undefined);return _0x5e57fe[_0x483acf(0x1c3)]||undefined;}return{'conversation':_0x483acf(0x17a)};}});_0x12cfd3[_0x14a407(0x1fb)](_0x2d94c7['ev']),_0x2d94c7['ws']['on'](_0x14a407(0x16a),async _0x46a621=>{const _0x2dea04=_0x14a407,_0x1b7724=_0x46a621[_0x2dea04(0x193)][0x0][_0x2dea04(0x212)][_0x2dea04(0x1a6)];if(_0x46a621[_0x2dea04(0x193)][0x0]['tag']=='offer'){const {findSwitch:_0x3c46e9}=require(_0x2dea04(0x18d)),_0x5f0da0=await _0x3c46e9();if(_0x5f0da0['anticall']){let _0x36cc99=await _0x2d94c7[_0x2dea04(0x1e4)](_0x1b7724,[ownernumber]);await sleep(0x1f4),await _0x2d94c7['sendMessage'](_0x1b7724,{'text':_0x2dea04(0x1f0)+_0x1b7724[_0x2dea04(0x219)]('@')[0x0]+'\x20but\x20my\x20owner\x20told\x20me\x20to\x20block\x20everyone\x20who\x20calls\x20me...\x20if\x20it\x27s\x20a\x20mistake\x20then\x20please\x20contact\x20to\x20my\x20owner\x20respectively.','mentions':[_0x1b7724]},{'quoted':_0x36cc99}),await sleep(0x1388),await _0x2d94c7[_0x2dea04(0x1dd)](_0x1b7724,'block'),await sleep(0x3e8),await _0x2d94c7[_0x2dea04(0x213)](ownernumber+_0x2dea04(0x16e),{'text':_0x2dea04(0x1a1)+_0x1b7724['split']('@')[0x0]+_0x2dea04(0x1b5),'mentions':[_0x1b7724]});}}}),_0x2d94c7['ev']['on'](_0x14a407(0x1ab),async _0x4e6605=>{const _0x2f2d66=_0x14a407;try{const _0x275e0a=_0x4e6605[_0x2f2d66(0x1f8)][0x0];if(!_0x275e0a['message'])return;_0x275e0a[_0x2f2d66(0x1c3)]=Object[_0x2f2d66(0x201)](_0x275e0a[_0x2f2d66(0x1c3)])[0x0]===_0x2f2d66(0x1b4)?_0x275e0a[_0x2f2d66(0x1c3)][_0x2f2d66(0x1b4)]['message']:_0x275e0a[_0x2f2d66(0x1c3)];if(!_0x275e0a['message'])return;if(_0x275e0a[_0x2f2d66(0x1c3)][_0x2f2d66(0x21d)])return;_0x275e0a[_0x2f2d66(0x1c3)]=Object[_0x2f2d66(0x201)](_0x275e0a[_0x2f2d66(0x1c3)])[0x0]===_0x2f2d66(0x1b4)?_0x275e0a[_0x2f2d66(0x1c3)]['ephemeralMessage'][_0x2f2d66(0x1c3)]:_0x275e0a[_0x2f2d66(0x1c3)];_0x275e0a[_0x2f2d66(0x1b7)]&&_0x275e0a[_0x2f2d66(0x1b7)][_0x2f2d66(0x169)]===_0x2f2d66(0x16f)&&Config[_0x2f2d66(0x205)]===_0x2f2d66(0x1b2)&&await _0x2d94c7['readMessages']([_0x275e0a[_0x2f2d66(0x1b7)]]);if(!_0x2d94c7[_0x2f2d66(0x1dc)]&&!_0x275e0a[_0x2f2d66(0x1b7)][_0x2f2d66(0x1ec)]&&_0x4e6605[_0x2f2d66(0x1c4)]===_0x2f2d66(0x1ee))return;if(_0x275e0a[_0x2f2d66(0x1b7)]['id']['startsWith'](_0x2f2d66(0x216))&&_0x275e0a['key']['id'][_0x2f2d66(0x1aa)]===0x10)return;pika=smsg(_0x2d94c7,_0x275e0a,_0x12cfd3),require(_0x2f2d66(0x19e))(_0x2d94c7,pika,_0x4e6605,_0x12cfd3);}catch(_0x1501b5){console[_0x2f2d66(0x209)](_0x1501b5);}});async function _0x586d56(_0xff7948){await eventListner(_0xff7948,_0x2d94c7);}async function _0xa5ea72(_0x2eccb1){const _0x47279d=_0x14a407;console[_0x47279d(0x209)](_0x47279d(0x1e2)+_0x2eccb1[_0x47279d(0x1de)]+_0x47279d(0x1cf)),await eventListner2(_0x2eccb1,_0x2d94c7);}return _0x2d94c7['ev']['on'](_0x14a407(0x167),_0x586d56),_0x2d94c7['ev']['on'](_0x14a407(0x177),_0xa5ea72),_0x2d94c7[_0x14a407(0x1c7)]=_0x38a243=>{const _0x46b271=_0x14a407;if(!_0x38a243)return _0x38a243;if(/:\d+@/gi['test'](_0x38a243)){let _0x7acbb6=jidDecode(_0x38a243)||{};return _0x7acbb6[_0x46b271(0x1c9)]&&_0x7acbb6[_0x46b271(0x1f9)]&&_0x7acbb6['user']+'@'+_0x7acbb6[_0x46b271(0x1f9)]||_0x38a243;}else return _0x38a243;},_0x2d94c7['ev']['on'](_0x14a407(0x1bd),_0x2a8c6f=>{const _0x24f82f=_0x14a407;for(let _0x2a1c58 of _0x2a8c6f){let _0x97b4a=_0x2d94c7[_0x24f82f(0x1c7)](_0x2a1c58['id']);if(_0x12cfd3&&_0x12cfd3[_0x24f82f(0x1f2)])_0x12cfd3[_0x24f82f(0x1f2)][_0x97b4a]={'id':_0x97b4a,'name':_0x2a1c58['notify']};}}),_0x2d94c7['getName']=(_0x15a73d,_0x108379=![])=>{const _0x133177=_0x14a407;id=_0x2d94c7['decodeJid'](_0x15a73d),_0x108379=_0x2d94c7['withoutContact']||_0x108379;let _0x30699d;if(id[_0x133177(0x1f1)](_0x133177(0x1a4)))return new Promise(async _0x1575ee=>{const _0x4c26e0=_0x133177;_0x30699d=_0x12cfd3[_0x4c26e0(0x1f2)][id]||{};if(!(_0x30699d['name']||_0x30699d[_0x4c26e0(0x1a0)]))_0x30699d=_0x2d94c7[_0x4c26e0(0x17c)](id)||{};_0x1575ee(_0x30699d[_0x4c26e0(0x185)]||_0x30699d[_0x4c26e0(0x1a0)]||PhoneNumber('+'+id[_0x4c26e0(0x1e3)](_0x4c26e0(0x16e),''))[_0x4c26e0(0x1a5)]('international'));});else _0x30699d=id==='0@s.whatsapp.net'?{'id':id,'name':_0x133177(0x1a9)}:id===_0x2d94c7[_0x133177(0x1c7)](_0x2d94c7[_0x133177(0x1c9)]['id'])?_0x2d94c7[_0x133177(0x1c9)]:_0x12cfd3[_0x133177(0x1f2)][id]||{};return(_0x108379?'':_0x30699d[_0x133177(0x185)])||_0x30699d[_0x133177(0x1a0)]||_0x30699d['verifiedName']||PhoneNumber('+'+_0x15a73d[_0x133177(0x1e3)](_0x133177(0x16e),''))[_0x133177(0x1a5)]('international');},_0x2d94c7[_0x14a407(0x1e4)]=async(_0x18927d,_0xf05815,_0x335675='',_0x3e14b7={})=>{const _0x3c25fd=_0x14a407;let _0x2ba19a=[];for(const _0x36cb86 of _0xf05815){_0x2ba19a['push']({'displayName':await _0x2d94c7[_0x3c25fd(0x1c1)](_0x36cb86+_0x3c25fd(0x16e)),'vcard':_0x3c25fd(0x1fa)+await _0x2d94c7[_0x3c25fd(0x1c1)](_0x36cb86+'@s.whatsapp.net')+_0x3c25fd(0x1ac)+global[_0x3c25fd(0x186)]+_0x3c25fd(0x1e9)+_0x36cb86+':'+_0x36cb86+_0x3c25fd(0x222)+global[_0x3c25fd(0x19d)]+_0x3c25fd(0x1c6)+ownername+_0x3c25fd(0x182)+global[_0x3c25fd(0x21f)]+_0x3c25fd(0x21c)+ownername+_0x3c25fd(0x207)+global[_0x3c25fd(0x20d)]+_0x3c25fd(0x171)+ownername+'\x27s\x20Location\x0aEND:VCARD'});}_0x2d94c7[_0x3c25fd(0x213)](_0x18927d,{'contacts':{'displayName':_0x2ba19a['length']+_0x3c25fd(0x1ea),'contacts':_0x2ba19a},..._0x3e14b7},{'quoted':_0x335675});},_0x2d94c7[_0x14a407(0x1af)]=_0x1cdf88=>{const _0x598008=_0x14a407;return _0x2d94c7[_0x598008(0x1cd)]({'tag':'iq','attrs':{'to':_0x598008(0x16e),'type':_0x598008(0x1f7),'xmlns':_0x598008(0x198)},'content':[{'tag':_0x598008(0x198),'attrs':{},'content':Buffer[_0x598008(0x181)](_0x1cdf88,_0x598008(0x1a8))}]}),_0x1cdf88;},_0x2d94c7[_0x14a407(0x1dc)]=!![],_0x2d94c7['ev']['on'](_0x14a407(0x1ae),async _0x3a5b68=>{const _0x5006d9=_0x14a407,{connection:_0x2ee2ce,lastDisconnect:_0x5d3ace}=_0x3a5b68;_0x2ee2ce===_0x5006d9(0x1be)&&(console['clear'](),console[_0x5006d9(0x209)](_0x5006d9(0x1f5)));if(_0x2ee2ce==='open'){console[_0x5006d9(0x209)](_0x5006d9(0x19f)),console['log'](_0x5006d9(0x170));const _0x2eb3a1=await _0x2d94c7['sendMessage'](ownernumber+_0x5006d9(0x16e),{'text':_0x5006d9(0x1ad)});insertMongoDBdata(),await _0x2d94c7[_0x5006d9(0x213)](ownernumber+_0x5006d9(0x16e),{'text':'✅\x20Connected!','edit':_0x2eb3a1[_0x5006d9(0x1b7)]});}if(_0x2ee2ce===_0x5006d9(0x221)){let _0x13aa92=_0x5d3ace[_0x5006d9(0x1e6)]?_0x5d3ace?.[_0x5006d9(0x1e6)]?.[_0x5006d9(0x1ff)][_0x5006d9(0x1cb)]:0x0;if(_0x13aa92===DisconnectReason[_0x5006d9(0x184)])console[_0x5006d9(0x209)](_0x5006d9(0x1ef)),process[_0x5006d9(0x20f)]();else{if(_0x13aa92===DisconnectReason[_0x5006d9(0x21e)])console[_0x5006d9(0x209)](_0x5006d9(0x21b)),_0x125330();else{if(_0x13aa92===DisconnectReason[_0x5006d9(0x187)])console[_0x5006d9(0x209)](_0x5006d9(0x195)),_0x125330();else{if(_0x13aa92===DisconnectReason[_0x5006d9(0x1d1)])console[_0x5006d9(0x209)](_0x5006d9(0x211)),process[_0x5006d9(0x20f)]();else{if(_0x13aa92===DisconnectReason[_0x5006d9(0x190)])console[_0x5006d9(0x209)]('Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.'),process[_0x5006d9(0x20f)]();else{if(_0x13aa92===DisconnectReason['restartRequired'])console[_0x5006d9(0x209)]('Restart\x20Required,\x20Restarting...'),_0x125330();else _0x13aa92===DisconnectReason[_0x5006d9(0x16d)]?(console['log']('Connection\x20TimedOut,\x20Reconnecting...'),_0x125330()):console['log'](_0x5006d9(0x180)+_0x13aa92+'|'+_0x2ee2ce);}}}}}}}),_0x2d94c7['ev']['on'](_0x14a407(0x217),_0x2ca2fb),_0x2d94c7[_0x14a407(0x223)]=async(_0x249731,_0x53e02d,_0x1549fb,_0x37c63f={})=>{const _0x43f0f8=_0x14a407;let _0x4acc3c=Buffer['isBuffer'](_0x53e02d)?_0x53e02d:/^data:.*?\/.*?;base64,/i[_0x43f0f8(0x1ed)](_0x53e02d)?Buffer[_0x43f0f8(0x181)](_0x53e02d[_0x43f0f8(0x219)]`,`[0x1],_0x43f0f8(0x21a)):/^https?:\/\//[_0x43f0f8(0x1ed)](_0x53e02d)?await await getBuffer(_0x53e02d):fs[_0x43f0f8(0x1d5)](_0x53e02d)?fs[_0x43f0f8(0x202)](_0x53e02d):Buffer[_0x43f0f8(0x179)](0x0),_0x261bf8;return _0x37c63f&&(_0x37c63f['packname']||_0x37c63f[_0x43f0f8(0x1da)])?_0x261bf8=await writeExifImg(_0x4acc3c,_0x37c63f):_0x261bf8=await imageToWebp(_0x4acc3c),await _0x2d94c7[_0x43f0f8(0x213)](_0x249731,{'sticker':{'url':_0x261bf8},..._0x37c63f},{'quoted':_0x1549fb}),_0x261bf8;},_0x2d94c7['sendVideoAsSticker']=async(_0x42bbce,_0x4c2189,_0x155285,_0x413413={})=>{const _0xf217ab=_0x14a407;let _0x462b94=Buffer[_0xf217ab(0x1bf)](_0x4c2189)?_0x4c2189:/^data:.*?\/.*?;base64,/i[_0xf217ab(0x1ed)](_0x4c2189)?Buffer[_0xf217ab(0x181)](_0x4c2189[_0xf217ab(0x219)]`,`[0x1],_0xf217ab(0x21a)):/^https?:\/\//[_0xf217ab(0x1ed)](_0x4c2189)?await await getBuffer(_0x4c2189):fs[_0xf217ab(0x1d5)](_0x4c2189)?fs[_0xf217ab(0x202)](_0x4c2189):Buffer[_0xf217ab(0x179)](0x0),_0x4cc12e;return _0x413413&&(_0x413413[_0xf217ab(0x214)]||_0x413413[_0xf217ab(0x1da)])?_0x4cc12e=await writeExifVid(_0x462b94,_0x413413):_0x4cc12e=await videoToWebp(_0x462b94),await _0x2d94c7[_0xf217ab(0x213)](_0x42bbce,{'sticker':{'url':_0x4cc12e},..._0x413413},{'quoted':_0x155285}),_0x4cc12e;},_0x2d94c7[_0x14a407(0x172)]=async(_0x5202bc,_0x4e3e3a,_0x54d717='',_0x46a057='',_0x5c516a='',_0x380b5b={})=>{const _0x26c01d=_0x14a407;let _0x306feb=await _0x2d94c7[_0x26c01d(0x189)](_0x4e3e3a,!![]),{mime:_0xf36fa9,ext:_0xde92cd,res:_0x4c3238,data:_0x5288ce,filename:_0x302944}=_0x306feb;if(_0x4c3238&&_0x4c3238[_0x26c01d(0x198)]!==0xc8||file[_0x26c01d(0x1aa)]<=0x10000)try{throw{'json':JSON[_0x26c01d(0x1bc)](file[_0x26c01d(0x208)]())};}catch(_0x560433){if(_0x560433[_0x26c01d(0x1ba)])throw _0x560433[_0x26c01d(0x1ba)];}let _0xea744='',_0x4f9d83=_0xf36fa9,_0x3fb6f2=_0x302944;if(_0x380b5b['asDocument'])_0xea744='document';if(_0x380b5b[_0x26c01d(0x1fe)]||/webp/['test'](_0xf36fa9)){let {writeExif:_0x5ae293}=require('./lib/lib/exif'),_0x4720fc={'mimetype':_0xf36fa9,'data':_0x5288ce};_0x3fb6f2=await _0x5ae293(_0x4720fc,{'packname':_0x380b5b[_0x26c01d(0x214)]?_0x380b5b[_0x26c01d(0x214)]:global[_0x26c01d(0x214)],'author':_0x380b5b['author']?_0x380b5b[_0x26c01d(0x1da)]:global[_0x26c01d(0x1da)],'categories':_0x380b5b[_0x26c01d(0x18f)]?_0x380b5b[_0x26c01d(0x18f)]:[]}),await fs[_0x26c01d(0x218)][_0x26c01d(0x19b)](_0x302944),_0xea744=_0x26c01d(0x1ca),_0x4f9d83=_0x26c01d(0x18e);}else{if(/image/[_0x26c01d(0x1ed)](_0xf36fa9))_0xea744=_0x26c01d(0x1f3);else{if(/video/[_0x26c01d(0x1ed)](_0xf36fa9))_0xea744=_0x26c01d(0x1fd);else{if(/audio/[_0x26c01d(0x1ed)](_0xf36fa9))_0xea744=_0x26c01d(0x1b6);else _0xea744=_0x26c01d(0x210);}}}return await _0x2d94c7[_0x26c01d(0x213)](_0x5202bc,{[_0xea744]:{'url':_0x3fb6f2},'caption':_0x46a057,'mimetype':_0x4f9d83,'fileName':_0x54d717,..._0x380b5b},{'quoted':_0x5c516a,..._0x380b5b}),fs[_0x26c01d(0x218)]['unlink'](_0x3fb6f2);},_0x2d94c7[_0x14a407(0x19a)]=async(_0x2c3205,_0x641249,_0x263dd4=!![])=>{const _0x3e61cb=_0x14a407;let _0x57e2f5=_0x2c3205[_0x3e61cb(0x20a)]?_0x2c3205['msg']:_0x2c3205,_0x34b971=(_0x2c3205[_0x3e61cb(0x20a)]||_0x2c3205)[_0x3e61cb(0x176)]||'',_0xbff60a=_0x2c3205[_0x3e61cb(0x220)]?_0x2c3205[_0x3e61cb(0x220)]['replace'](/Message/gi,''):_0x34b971[_0x3e61cb(0x219)]('/')[0x0];const _0x4ca475=await downloadContentFromMessage(_0x57e2f5,_0xbff60a);let _0x4f4a32=Buffer[_0x3e61cb(0x181)]([]);for await(const _0x28f2b7 of _0x4ca475){_0x4f4a32=Buffer[_0x3e61cb(0x1d9)]([_0x4f4a32,_0x28f2b7]);}let _0x26a3ec=await FileType[_0x3e61cb(0x178)](_0x4f4a32);return trueFileName=_0x263dd4?_0x641249+'.'+_0x26a3ec[_0x3e61cb(0x1b8)]:_0x641249,await fs[_0x3e61cb(0x1b0)](trueFileName,_0x4f4a32),trueFileName;},_0x2d94c7[_0x14a407(0x188)]=async _0x4317d9=>{const _0x16e0f0=_0x14a407;let _0x5901fe=(_0x4317d9[_0x16e0f0(0x20a)]||_0x4317d9)[_0x16e0f0(0x176)]||'',_0x4a6432=_0x4317d9[_0x16e0f0(0x220)]?_0x4317d9[_0x16e0f0(0x220)][_0x16e0f0(0x1e3)](/Message/gi,''):_0x5901fe['split']('/')[0x0];const _0x1f5c91=await downloadContentFromMessage(_0x4317d9,_0x4a6432);let _0x16dfa3=Buffer[_0x16e0f0(0x181)]([]);for await(const _0x59a857 of _0x1f5c91){_0x16dfa3=Buffer['concat']([_0x16dfa3,_0x59a857]);}return _0x16dfa3;},_0x2d94c7[_0x14a407(0x1fc)]=async(_0x2aa6f4,_0x1712b9,_0x30eb3a=![],_0x170bfb={})=>{const _0x389b86=_0x14a407;let _0x5c6f61;_0x170bfb[_0x389b86(0x199)]&&(_0x1712b9[_0x389b86(0x1c3)]=_0x1712b9[_0x389b86(0x1c3)]&&_0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x1b4)]&&_0x1712b9['message'][_0x389b86(0x1b4)][_0x389b86(0x1c3)]?_0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x1b4)][_0x389b86(0x1c3)]:_0x1712b9['message']||undefined,_0x5c6f61=Object[_0x389b86(0x201)](_0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x203)][_0x389b86(0x1c3)])[0x0],delete(_0x1712b9['message']&&_0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x1cc)]?_0x1712b9[_0x389b86(0x1c3)]['ignore']:_0x1712b9[_0x389b86(0x1c3)]||undefined),delete _0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x203)][_0x389b86(0x1c3)][_0x5c6f61][_0x389b86(0x175)],_0x1712b9['message']={..._0x1712b9[_0x389b86(0x1c3)][_0x389b86(0x203)][_0x389b86(0x1c3)]});let _0xf0dfae=Object[_0x389b86(0x201)](_0x1712b9[_0x389b86(0x1c3)])[0x0],_0x48313e=await generateForwardMessageContent(_0x1712b9,_0x30eb3a),_0x3c1f60=Object['keys'](_0x48313e)[0x0],_0x3c86ef={};if(_0xf0dfae!='conversation')_0x3c86ef=_0x1712b9[_0x389b86(0x1c3)][_0xf0dfae]['contextInfo'];_0x48313e[_0x3c1f60]['contextInfo']={..._0x3c86ef,..._0x48313e[_0x3c1f60][_0x389b86(0x20b)]};const _0x3c67e1=await generateWAMessageFromContent(_0x2aa6f4,_0x48313e,_0x170bfb?{..._0x48313e[_0x3c1f60],..._0x170bfb,..._0x170bfb[_0x389b86(0x20b)]?{'contextInfo':{..._0x48313e[_0x3c1f60][_0x389b86(0x20b)],..._0x170bfb[_0x389b86(0x20b)]}}:{}}:{});return await _0x2d94c7[_0x389b86(0x215)](_0x2aa6f4,_0x3c67e1['message'],{'messageId':_0x3c67e1[_0x389b86(0x1b7)]['id']}),_0x3c67e1;},_0x2d94c7[_0x14a407(0x189)]=async(_0x2fb719,_0x45fc45)=>{const _0x17028f=_0x14a407;let _0x58af43,_0x5e838a=Buffer['isBuffer'](_0x2fb719)?_0x2fb719:/^data:.*?\/.*?;base64,/i[_0x17028f(0x1ed)](_0x2fb719)?Buffer['from'](_0x2fb719['split']`,`[0x1],_0x17028f(0x21a)):/^https?:\/\//['test'](_0x2fb719)?await(_0x58af43=await getBuffer(_0x2fb719)):fs[_0x17028f(0x1d5)](_0x2fb719)?(filename=_0x2fb719,fs[_0x17028f(0x202)](_0x2fb719)):typeof _0x2fb719===_0x17028f(0x18c)?_0x2fb719:Buffer[_0x17028f(0x179)](0x0),_0x38c011=await FileType[_0x17028f(0x178)](_0x5e838a)||{'mime':_0x17028f(0x1e0),'ext':_0x17028f(0x18a)};filename=path[_0x17028f(0x1b1)](__filename,'../src/'+new Date()*0x1+'.'+_0x38c011['ext']);if(_0x5e838a&&_0x45fc45)fs[_0x17028f(0x218)][_0x17028f(0x1c5)](filename,_0x5e838a);return{'res':_0x58af43,'filename':filename,'size':await getSizeMedia(_0x5e838a),..._0x38c011,'data':_0x5e838a};},_0x2d94c7;}_0x125330()[_0x5c88b8(0x183)](_0x16c821=>console[_0x5c88b8(0x209)](_0x16c821));const _0x24a7ee=_0x5c88b8(0x1f4);app[_0x5c88b8(0x1a7)]('/',(_0x29f128,_0x1e6999)=>_0x1e6999[_0x5c88b8(0x1c4)](_0x5c88b8(0x1c2))['send'](_0x24a7ee)),app['listen'](port,()=>console[_0x5c88b8(0x209)](_0x5c88b8(0x1d4)));},0xbb8);let file=require[_0x542787(0x1ce)](__filename);function _0x2bae(){const _0x55c9e8=['json','moment-timezone','parse','contacts.update','connecting','isBuffer','Queen\x20Anya','getName','html','message','type','writeFile','\x0aitem2.X-ABLabel:','decodeJid','4629160bkDvxT','user','sticker','statusCode','ignore','query','resolve','\x27ed\x20in\x20a\x20group\x20chat.','redBright','connectionReplaced','472083ikaXka','2074977HNnUna','Queen\x20Anya\x20Server\x20listening\x20on\x20port\x20http://localhost','existsSync','child_process','fatal','fs-extra','concat','author','awesome-phonenumber','public','updateBlockStatus','action','4DPxrZy','application/octet-stream','14273FGncqb','🔔\x20Someone\x20got\x20','replace','sendContact','currentVersion','error','1ItlqmO','562495bCdsIY','\x0aitem1.TEL;waid=','\x20Contact','https://web.whatsapp.com/check-update?version=1&platform=web','fromMe','test','notify','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','```⚠️\x20Attention!!```\x0a\x0aSorry\x20@','endsWith','contacts','image','\x0a<!DOCTYPE\x20html>\x0a<html>\x0a\x20\x20<head>\x0a\x20\x20\x20\x20<title>\x20Queen\x20Anya\x20</title>\x0a\x20\x20\x20\x20<script\x20src=\x22https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\x22></script>\x0a\x20\x20\x20\x20<script>\x0a\x20\x20\x20\x20\x20\x20setTimeout(()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20confetti({\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20particleCount:\x20100,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20spread:\x2070,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20origin:\x20{\x20y:\x200.6\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20disableForReducedMotion:\x20true\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20},\x20500);\x0a\x20\x20\x20\x20</script>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20@import\x20url(\x22https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\x22);\x0a\x20\x20\x20\x20\x20\x20@font-face\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x22neo-sans\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20src:\x20url(\x22https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\x22)\x20format(\x22woff2\x22),\x20url(\x22https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\x22)\x20format(\x22woff\x22),\x20url(\x22https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\x22)\x20format(\x22opentype\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-style:\x20normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20html\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20neo-sans;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x20calc(62rem\x20/\x2016);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20section\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x20-50%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20</head>\x0a\x20\x20<body>\x0a\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20This\x20is\x20QueenAnya\x20Bot\x20Web\x20Interface\x20And\x20If\x20Need\x20To\x20Visit\x20Queen\x20Anya\x20Website\x20then\x20<a\x20href=\x22\x22\x20>\x20Click\x20Here\x20<a/>\x0a\x20\x20\x20\x20</section>\x0a\x20\x20</body>\x0a</html>\x0a','🔄\x20Queen\x20Anya\x20is\x20logging\x20in...\x20Please\x20Wait.','1662MXMEDP','set','messages','server','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','bind','copyNForward','video','asSticker','output','chalk','keys','readFileSync','viewOnceMessage','file-type','auto_read_status','axios','\x27s\x20Email\x0aitem4.ADR:;;','toString','log','msg','contextInfo','./config','adress','1.0.0','exit','document','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','attrs','sendMessage','packname','relayMessage','BAE5','creds.update','promises','split','base64','Connection\x20closed,\x20reconnecting....','\x0aitem3.X-ABLabel:','viewOnceMessageV2','connectionClosed','myweb','mtype','close','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x20to\x20this\x20bot\x27s\x20dev.\x0aitem2.EMAIL;type=INTERNET:','sendImageAsSticker','groups.update','express','remoteJid','CB:call','unwatchFile','./config.js','timedOut','@s.whatsapp.net','status@broadcast','📶\x20Requiring\x20initial\x20resources...',';;;;\x0aitem4.X-ABLabel:','sendMedia','./lib/lib/session','10347276HyQvAI','viewOnce','mimetype','group-participants.update','fromBuffer','alloc','An\x20Error\x20Occurred,\x20Repeat\x20Command!','mongoUrl','groupMetadata','watchFile','cache','sessionId','Unknown\x20DisconnectReason:\x20','from','\x27s\x20Email\x0aitem3.URL:','catch','badSession','name','ownername','connectionLost','downloadMediaMessage','getFile','.bin','loadMessage','string','./lib/lib/mongoDB','image/webp','categories','loggedOut','./lib/lib/events','\x20Updated','content','8AzGmOu','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','pino','safari','status','readViewOnce','downloadAndSaveMediaMessage','unlink','Enter','email','./AnyaCore','✅\x20Login\x20Successful!','subject','```✨\x20Master...```\x0a\x0aI\x20just\x20recently\x20blocked\x20@','22SIlrdG','⚠️\x20Invalid\x20Session\x20Code','@g.us','getNumber','call-creator','get','utf-8','WhatsApp','length','messages.upsert','\x0aFN:','🔄\x20Attempting\x20to\x20push...','connection.update','setStatus','writeFileSync','join','true','silent','ephemeralMessage','\x20because\x20that\x20user\x20were\x20calling\x20me...','audio','key','ext','1137160piwAeB'];_0x2bae=function(){return _0x55c9e8;};return _0x2bae();}fs[_0x542787(0x17d)](file,()=>{const _0x216122=_0x542787;fs[_0x216122(0x16b)](file),console['log'](chalk[_0x216122(0x1d0)](__filename+_0x216122(0x192))),delete require[_0x216122(0x17e)][file],require(file);});