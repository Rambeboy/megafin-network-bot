(function(_0x431766,_0x5e4a83){const _0x4a1a5e=_0x349c,_0x2bb84c=_0x431766();while(!![]){try{const _0x391d7e=-parseInt(_0x4a1a5e(0xfd))/0x1*(parseInt(_0x4a1a5e(0xf8))/0x2)+parseInt(_0x4a1a5e(0x10f))/0x3+-parseInt(_0x4a1a5e(0x11a))/0x4+-parseInt(_0x4a1a5e(0x112))/0x5*(-parseInt(_0x4a1a5e(0x113))/0x6)+-parseInt(_0x4a1a5e(0xef))/0x7+-parseInt(_0x4a1a5e(0xf3))/0x8*(-parseInt(_0x4a1a5e(0x105))/0x9)+parseInt(_0x4a1a5e(0xfb))/0xa;if(_0x391d7e===_0x5e4a83)break;else _0x2bb84c['push'](_0x2bb84c['shift']());}catch(_0x6dec1c){_0x2bb84c['push'](_0x2bb84c['shift']());}}}(_0x421d,0x2a1fe));import*as _0x39c0c6 from'./src/core/coffee.js';async function createMultipleWallets(_0x387b39,_0xa33bce){const _0x151ca3=_0x349c,_0x5527ec=[],_0x19b212={'Accept':'*/*'};await _0x39c0c6[_0x151ca3(0x109)](_0x19b212);for(let _0xed70a2=0x0;_0xed70a2<_0x387b39;_0xed70a2++){_0x39c0c6[_0x151ca3(0x110)](_0x151ca3(0xed)+(_0xed70a2+0x1)+'\x20of\x20'+_0x387b39);const _0x2e5c06=_0x39c0c6[_0x151ca3(0x103)](),_0x1de1d5={'Accept':_0x151ca3(0xf7),'x-recaptcha-response':await _0x39c0c6[_0x151ca3(0xfa)](_0xa33bce)};try{let _0x258756=await _0x39c0c6[_0x151ca3(0x11c)](_0x2e5c06,_0x1de1d5);!_0x258756[_0x151ca3(0x102)]&&(_0x39c0c6[_0x151ca3(0x110)](_0x151ca3(0x116)+(_0xed70a2+0x1)+',\x20retrying...'),_0x258756=await _0x39c0c6[_0x151ca3(0x11c)](_0x2e5c06,_0x1de1d5)),_0x258756[_0x151ca3(0x102)]?_0x5527ec[_0x151ca3(0xf4)](_0x258756):_0x39c0c6[_0x151ca3(0x110)](_0x151ca3(0xff)+(_0xed70a2+0x1)+'\x20after\x20retrying.',_0x151ca3(0xfe));}catch(_0x100877){_0x39c0c6['logger'](_0x151ca3(0x116)+(_0xed70a2+0x1)+':',_0x151ca3(0xfe),_0x100877);}}_0x39c0c6[_0x151ca3(0x10a)](_0x5527ec);}function _0x349c(_0x503878,_0x32ac0c){const _0x421d5e=_0x421d();return _0x349c=function(_0x349c2c,_0x9cc73c){_0x349c2c=_0x349c2c-0xea;let _0x24d863=_0x421d5e[_0x349c2c];return _0x24d863;},_0x349c(_0x503878,_0x32ac0c);}async function main(_0x2ad829){const _0x11d10b=_0x349c,_0x92e407=_0x39c0c6[_0x11d10b(0x115)]();if(!_0x92e407)return;for(const [_0xfd2ad6,_0xe2b845]of _0x92e407[_0x11d10b(0x118)]()){_0x39c0c6[_0x11d10b(0x110)]('Processing\x20Token\x20#'+(_0xfd2ad6+0x1)+_0x11d10b(0xeb)+_0xe2b845[_0x11d10b(0x11e)]);const _0x2630b0={'Content-Type':_0x11d10b(0xf0),'Authorization':_0x11d10b(0x108)+_0xe2b845['token']};try{const _0x2d485c=await _0x39c0c6[_0x11d10b(0xfc)](_0x2630b0);await new Promise(_0x5204ab=>setTimeout(_0x5204ab,0x3e8));!_0x2d485c[_0x11d10b(0xfe)]||_0x2d485c[_0x11d10b(0xf9)]!==undefined?_0x39c0c6[_0x11d10b(0x110)](JSON[_0x11d10b(0x10d)](_0x2d485c['result']),'success'):_0x39c0c6[_0x11d10b(0x110)](_0x11d10b(0x100),_0x11d10b(0xfe));if(_0x2d485c['status']===0x191||_0x2d485c[_0x11d10b(0xf6)]===0x193){_0x39c0c6[_0x11d10b(0x110)](_0x11d10b(0x114)+_0xe2b845[_0x11d10b(0x11e)]+_0x11d10b(0x11f),_0x11d10b(0xfe));const _0x9f0ffd={'Accept':_0x11d10b(0xf7),'x-recaptcha-response':await _0x39c0c6[_0x11d10b(0xfa)](_0x2ad829)};await _0x39c0c6[_0x11d10b(0x109)](_0x2630b0);const _0x416a85=await _0x39c0c6[_0x11d10b(0x11c)](_0xe2b845,_0x9f0ffd);_0x416a85['token']&&(_0xe2b845[_0x11d10b(0x102)]=_0x416a85[_0x11d10b(0x102)],_0x39c0c6[_0x11d10b(0x10a)](_0x92e407));}else _0x2d485c[_0x11d10b(0xf6)]===0x1ad&&_0x39c0c6['logger'](_0x2d485c['data'],_0x11d10b(0xfe));;}catch(_0x2a84c0){_0x39c0c6['logger'](_0x11d10b(0xec)+(_0xfd2ad6+0x1)+':',_0x11d10b(0xfe),_0x2a84c0);}}}function _0x421d(){const _0xd2fd8f=['token','generateWallet','createInterface','2637594HhfycJ','Enter\x20your\x20API\x20key\x20for\x20captcha\x20solving:\x20','debug','Bearer\x20','profileRequest','saveToTokenFile','Invalid\x20choice.\x20Please\x20enter\x201\x20or\x202.','An\x20error\x20occurred:','stringify','banner','367104OkQuYz','logger','\x20wallets...','7065hpRKUy','342LQPLSs','Token\x20for\x20','loadTokens','Error\x20creating\x20wallet\x20','Creating\x20','entries','Invalid\x20number\x20of\x20wallets.\x20Please\x20enter\x20a\x20positive\x20integer.','171420iadfqq','log','createWalletAndRequest','Choose\x20an\x20option:\x0a1.\x20Create\x20and\x20Register\x20Wallets\x0a2.\x20Load\x20Existing\x20Tokens\x20and\x20Run','address','\x20is\x20expired.\x20Re-authenticating...','Cooldowns\x205\x20minute...',':\x20Address:\x20','Error\x20processing\x20token\x20#','Creating\x20wallet\x20','stdout','2286585jwLqGP','application/json','stdin','question','8WuBvaR','push','\x1b[31mFile\x20accounts.json\x20will\x20be\x20overwritten,\x20make\x20sure\x20You\x20Backup\x20your\x20accounts\x20if\x20it\x20exists\x1b[0m','status','*/*','22zXqNdg','result','solve2Captcha','3161600WBlROg','connectRequest','24553lspIWB','error','Failed\x20to\x20create\x20wallet\x20','Failed\x20to\x20connect\x20to\x20wallet.','How\x20many\x20wallets\x20do\x20you\x20want\x20to\x20create?\x20'];_0x421d=function(){return _0xd2fd8f;};return _0x421d();}((async()=>{const _0x26c8d6=_0x349c,_0x5a6fb9=_0x39c0c6['readline'][_0x26c8d6(0x104)]({'input':process[_0x26c8d6(0xf1)],'output':process[_0x26c8d6(0xee)]});_0x39c0c6['logger'](_0x39c0c6[_0x26c8d6(0x10e)],_0x26c8d6(0x107));try{_0x39c0c6[_0x26c8d6(0x110)](_0x26c8d6(0x11d));const _0x45c074=await _0x5a6fb9[_0x26c8d6(0xf2)]('Enter\x20your\x20choice\x20(1\x20or\x202):\x20');if(_0x45c074==='1'){console[_0x26c8d6(0x11b)](_0x26c8d6(0xf5));const _0x53d2b2=await _0x5a6fb9[_0x26c8d6(0xf2)](_0x26c8d6(0x101)),_0x57b1f2=await _0x5a6fb9['question']('Enter\x20your\x20API\x20key\x20for\x20captcha\x20solving:\x20'),_0x575ac4=parseInt(_0x53d2b2,0xa);if(isNaN(_0x575ac4)||_0x575ac4<=0x0){_0x39c0c6[_0x26c8d6(0x110)](_0x26c8d6(0x119),_0x26c8d6(0xfe));return;}_0x39c0c6[_0x26c8d6(0x110)](_0x26c8d6(0x117)+_0x575ac4+_0x26c8d6(0x111)),await createMultipleWallets(_0x575ac4,_0x57b1f2);}else{if(_0x45c074==='2'){const _0x18a130=await _0x5a6fb9[_0x26c8d6(0xf2)](_0x26c8d6(0x106));while(!![]){await main(_0x18a130),_0x39c0c6[_0x26c8d6(0x110)](_0x26c8d6(0xea)),await new Promise(_0x32dc8b=>setTimeout(_0x32dc8b,0x493e0));}}else _0x39c0c6[_0x26c8d6(0x110)](_0x26c8d6(0x10b),'error');}}catch(_0x4f2b7a){_0x39c0c6['logger'](_0x26c8d6(0x10c),'error',_0x4f2b7a);}finally{_0x5a6fb9['close']();}})());
