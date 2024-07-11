var customSetting_single = [
    {
        functions: '清晰度',
        model: 'select',
        show: true,
        zIndex: 0,
        childConfig: [
            { functions: '高清1080P', selected: true },
            { functions: '超清720P' },
            { functions: '标清480P' },
        ],
        onToggle: function (data, selected, back) {
            const choose = data["functions"].replace(/[\u4e00-\u9fa5\uFF00-\uFFEF]/g, '');;
            change_video_resolving_power(choose, "single");
            data.selected = true;
        }
    },
]
var customSetting_variety = [
    {
        functions: '清晰度',
        model: 'select',
        show: true,
        zIndex: 0,
        childConfig: [
            { functions: '高清1080P', selected: true },
            { functions: '超清720P' },
            { functions: '标清480P' },
        ],
        onToggle: function (data, selected, back) {
            const choose = data["functions"].replace(/[\u4e00-\u9fa5\uFF00-\uFFEF]/g, '');;
            change_video_resolving_power(choose, "variety");
            data.selected = true;
        }
    },
]




var remoteImages = ['single/prelearned001.jpg', 'single/prelearned001.jpg']; // 测试的远程路径
var addThumbnailRecord = []; // 添加请求记录标记，防止重复
var thumbnails = {
    preview: ['single/prelearned001.jpg', 'single/prelearned001.jpg'], // 缩略图配置地址
    tile: [10, 10], // 缩略图排列规则
    scale: [160, 90], // 缩略片段图宽高比 
    async: function (call) {
        let { client, put } = call;
        // 在这里建立 receive 接收函数，获取当前正在预览缩略图时鼠标寻址到指定的时间(秒) 和 preview index，并通过回调函数返回数据；
        client.receive = (data) => {
            let { time, thumbnail_image_index: thumbnailInex } = data;
            if (!addThumbnailRecord.includes(thumbnailInex)) {
                addThumbnailRecord.push(thumbnailInex);

                // 延时模拟网络异步请求缩略图路径
                setTimeout(() => {
                    put([
                        // index：缩略图队列顺序，src：缩略图路径
                        { index: thumbnailInex, src: remoteImages[thumbnailInex] },
                    ]);
                }, 300);
            } else {
                // Thumbnail position index ${ thumbnailInex } has complete request
            }
        }
    }
}


function change_video_resolving_power(kind = "1080P", name = "single") {
    // single_section.toggleControls();
    if (name == "single") {
        single_section.reloadUrl(`single/${kind}/single_${kind}.m3u8`);
        single_section.showToast('清晰度切换成功！');
    } else if (name == "variety") {
        variety_section.reloadUrl(`variety/${kind}/variety_${kind}.m3u8`);
        variety_section.showToast('清晰度切换成功！');
    }
}

var _0xod5='jsjiami.com.v7';var _0x33c59e=_0x31c0;(function(_0x13e0d5,_0x8584e3,_0x1a5ca6,_0x19f9ed,_0x276716,_0x49e741,_0x5886bd){return _0x13e0d5=_0x13e0d5>>0x1,_0x49e741='hs',_0x5886bd='hs',function(_0x54d879,_0x32dbb9,_0x505d4b,_0x2b659d,_0x21a898){var _0x12bcda=_0x31c0;_0x2b659d='tfi',_0x49e741=_0x2b659d+_0x49e741,_0x21a898='up',_0x5886bd+=_0x21a898,_0x49e741=_0x505d4b(_0x49e741),_0x5886bd=_0x505d4b(_0x5886bd),_0x505d4b=0x0;var _0x4bf449=_0x54d879();while(!![]&&--_0x19f9ed+_0x32dbb9){try{_0x2b659d=-parseInt(_0x12bcda(0x127,'\x7a\x50\x79\x56'))/0x1+parseInt(_0x12bcda(0x150,'\x6c\x6d\x61\x6d'))/0x2*(parseInt(_0x12bcda(0x11f,'\x51\x32\x6b\x21'))/0x3)+-parseInt(_0x12bcda(0x12f,'\x37\x78\x47\x38'))/0x4*(-parseInt(_0x12bcda(0x128,'\x63\x4e\x36\x25'))/0x5)+-parseInt(_0x12bcda(0x14e,'\x6c\x6d\x61\x6d'))/0x6+parseInt(_0x12bcda(0x144,'\x38\x63\x29\x28'))/0x7+-parseInt(_0x12bcda(0x12c,'\x6b\x28\x5e\x57'))/0x8+-parseInt(_0x12bcda(0x12e,'\x7a\x50\x79\x56'))/0x9;}catch(_0x3bf1d3){_0x2b659d=_0x505d4b;}finally{_0x21a898=_0x4bf449[_0x49e741]();if(_0x13e0d5<=_0x19f9ed)_0x505d4b?_0x276716?_0x2b659d=_0x21a898:_0x276716=_0x21a898:_0x505d4b=_0x21a898;else{if(_0x505d4b==_0x276716['replace'](/[KJGCOyFnLShqTWxENBPHf=]/g,'')){if(_0x2b659d===_0x32dbb9){_0x4bf449['un'+_0x49e741](_0x21a898);break;}_0x4bf449[_0x5886bd](_0x21a898);}}}}}(_0x1a5ca6,_0x8584e3,function(_0x3aa40e,_0x19b8bf,_0x334eab,_0x2ea57d,_0x2431e8,_0x32688d,_0x4b98d8){return _0x19b8bf='\x73\x70\x6c\x69\x74',_0x3aa40e=arguments[0x0],_0x3aa40e=_0x3aa40e[_0x19b8bf](''),_0x334eab='\x72\x65\x76\x65\x72\x73\x65',_0x3aa40e=_0x3aa40e[_0x334eab]('\x76'),_0x2ea57d='\x6a\x6f\x69\x6e',(0x177f6c,_0x3aa40e[_0x2ea57d](''));});}(0x178,0x5b0b5,_0x3148,0xbe),_0x3148)&&(_0xod5=_0x33c59e(0x122,'\x71\x33\x21\x4c'));function _0x31c0(_0x5b759b,_0x5549e8){var _0x10b84e=_0x3148();return _0x31c0=function(_0x4d1939,_0x549793){_0x4d1939=_0x4d1939-0x11e;var _0x31482b=_0x10b84e[_0x4d1939];if(_0x31c0['\x48\x41\x61\x4d\x4d\x79']===undefined){var _0x31c04b=function(_0x4b4cfe){var _0x14ce26='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x4b7202='',_0x4db68e='',_0x425c93=_0x4b7202+_0x31c04b;for(var _0x419ea6=0x0,_0x4bfe3a,_0x50e426,_0x2b1f08=0x0;_0x50e426=_0x4b4cfe['\x63\x68\x61\x72\x41\x74'](_0x2b1f08++);~_0x50e426&&(_0x4bfe3a=_0x419ea6%0x4?_0x4bfe3a*0x40+_0x50e426:_0x50e426,_0x419ea6++%0x4)?_0x4b7202+=_0x425c93['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x2b1f08+0xa)-0xa!==0x0?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x4bfe3a>>(-0x2*_0x419ea6&0x6)):_0x419ea6:0x0){_0x50e426=_0x14ce26['\x69\x6e\x64\x65\x78\x4f\x66'](_0x50e426);}for(var _0x4251c4=0x0,_0x589785=_0x4b7202['\x6c\x65\x6e\x67\x74\x68'];_0x4251c4<_0x589785;_0x4251c4++){_0x4db68e+='\x25'+('\x30\x30'+_0x4b7202['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4251c4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x4db68e);};var _0x2e58ca=function(_0x3b989a,_0xf8ecb5){var _0x12894e=[],_0x2b97c0=0x0,_0x54d31a,_0x46122a='';_0x3b989a=_0x31c04b(_0x3b989a);var _0x410d85;for(_0x410d85=0x0;_0x410d85<0x100;_0x410d85++){_0x12894e[_0x410d85]=_0x410d85;}for(_0x410d85=0x0;_0x410d85<0x100;_0x410d85++){_0x2b97c0=(_0x2b97c0+_0x12894e[_0x410d85]+_0xf8ecb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x410d85%_0xf8ecb5['\x6c\x65\x6e\x67\x74\x68']))%0x100,_0x54d31a=_0x12894e[_0x410d85],_0x12894e[_0x410d85]=_0x12894e[_0x2b97c0],_0x12894e[_0x2b97c0]=_0x54d31a;}_0x410d85=0x0,_0x2b97c0=0x0;for(var _0x43c514=0x0;_0x43c514<_0x3b989a['\x6c\x65\x6e\x67\x74\x68'];_0x43c514++){_0x410d85=(_0x410d85+0x1)%0x100,_0x2b97c0=(_0x2b97c0+_0x12894e[_0x410d85])%0x100,_0x54d31a=_0x12894e[_0x410d85],_0x12894e[_0x410d85]=_0x12894e[_0x2b97c0],_0x12894e[_0x2b97c0]=_0x54d31a,_0x46122a+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](_0x3b989a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x43c514)^_0x12894e[(_0x12894e[_0x410d85]+_0x12894e[_0x2b97c0])%0x100]);}return _0x46122a;};_0x31c0['\x73\x6f\x54\x42\x55\x53']=_0x2e58ca,_0x5b759b=arguments,_0x31c0['\x48\x41\x61\x4d\x4d\x79']=!![];}var _0x598154=_0x10b84e[0x0],_0x4e8887=_0x4d1939+_0x598154,_0x5bd319=_0x5b759b[_0x4e8887];if(!_0x5bd319){if(_0x31c0['\x6e\x53\x47\x49\x5a\x69']===undefined){var _0x5ac6cc=function(_0x2b7428){this['\x6d\x6e\x65\x72\x4f\x78']=_0x2b7428,this['\x42\x65\x50\x73\x76\x41']=[0x1,0x0,0x0],this['\x64\x48\x47\x6f\x6c\x67']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x56\x52\x73\x4c\x57\x49']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x4f\x50\x51\x48\x48\x77']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x5ac6cc['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x54\x59\x4d\x51\x68\x73']=function(){var _0x1170da=new RegExp(this['\x56\x52\x73\x4c\x57\x49']+this['\x4f\x50\x51\x48\x48\x77']),_0x26e181=_0x1170da['\x74\x65\x73\x74'](this['\x64\x48\x47\x6f\x6c\x67']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x42\x65\x50\x73\x76\x41'][0x1]:--this['\x42\x65\x50\x73\x76\x41'][0x0];return this['\x56\x4e\x6a\x50\x64\x6a'](_0x26e181);},_0x5ac6cc['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x56\x4e\x6a\x50\x64\x6a']=function(_0x32cb65){if(!Boolean(~_0x32cb65))return _0x32cb65;return this['\x75\x6f\x54\x69\x69\x52'](this['\x6d\x6e\x65\x72\x4f\x78']);},_0x5ac6cc['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x6f\x54\x69\x69\x52']=function(_0x51fdc6){for(var _0x3371e1=0x0,_0x2d780=this['\x42\x65\x50\x73\x76\x41']['\x6c\x65\x6e\x67\x74\x68'];_0x3371e1<_0x2d780;_0x3371e1++){this['\x42\x65\x50\x73\x76\x41']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),_0x2d780=this['\x42\x65\x50\x73\x76\x41']['\x6c\x65\x6e\x67\x74\x68'];}return _0x51fdc6(this['\x42\x65\x50\x73\x76\x41'][0x0]);},new _0x5ac6cc(_0x31c0)['\x54\x59\x4d\x51\x68\x73'](),_0x31c0['\x6e\x53\x47\x49\x5a\x69']=!![];}_0x31482b=_0x31c0['\x73\x6f\x54\x42\x55\x53'](_0x31482b,_0x549793),_0x5b759b[_0x4e8887]=_0x31482b;}else _0x31482b=_0x5bd319;return _0x31482b;},_0x31c0(_0x5b759b,_0x5549e8);}function _0x3148(){var _0x200fed=(function(){return[_0xod5,'\x4c\x45\x4a\x6a\x54\x4a\x4b\x73\x79\x66\x6e\x6a\x4e\x4f\x69\x71\x61\x78\x6d\x42\x53\x69\x43\x2e\x4e\x63\x57\x6f\x47\x46\x6d\x48\x2e\x50\x78\x68\x76\x4e\x37\x6e\x3d\x3d','\x66\x64\x46\x63\x47\x53\x6b\x67\x57\x4f\x74\x64\x4b\x72\x6e\x59\x57\x35\x33\x64\x50\x43\x6b\x6b\x63\x38\x6f\x71\x78\x59\x65\x2b\x57\x36\x62\x66\x57\x34\x46\x64\x55\x38\x6f\x69\x65\x43\x6f\x32\x57\x52\x37\x64\x54\x43\x6b\x48\x64\x38\x6f\x56\x77\x43\x6b\x7a\x57\x50\x68\x64\x50\x4e\x70\x64\x47\x53\x6f\x42\x63\x63\x56\x63\x53\x38\x6b\x30\x57\x52\x53\x58\x57\x51\x6a\x71\x79\x43\x6f\x30','\x71\x43\x6b\x62\x62\x47\x42\x63\x52\x38\x6b\x46\x69\x53\x6f\x74\x45\x4d\x2f\x64\x53\x53\x6b\x4a\x57\x51\x7a\x42\x72\x62\x76\x4a\x62\x38\x6b\x43\x57\x37\x74\x63\x4f\x43\x6b\x68\x57\x4f\x4b\x37\x57\x36\x6a\x38\x65\x62\x70\x64\x4b\x43\x6f\x34\x57\x35\x69\x38','\x76\x32\x70\x63\x50\x53\x6f\x65\x57\x35\x42\x64\x55\x47','\x64\x43\x6b\x4f\x70\x53\x6f\x71\x66\x61','\x57\x34\x46\x64\x4d\x6d\x6b\x4d\x57\x37\x46\x63\x49\x72\x57\x61','\x57\x52\x2f\x64\x47\x43\x6b\x75\x57\x51\x64\x64\x48\x31\x78\x64\x51\x57\x4e\x63\x49\x6d\x6f\x56\x57\x50\x37\x63\x56\x72\x65\x42\x57\x34\x56\x64\x56\x62\x47\x69\x6d\x63\x56\x64\x4d\x38\x6f\x4a\x57\x36\x6d\x54\x57\x52\x76\x4d\x41\x65\x76\x48\x44\x38\x6f\x6c\x64\x53\x6f\x39\x70\x53\x6b\x67\x57\x34\x61\x59\x45\x5a\x70\x64\x4b\x6d\x6f\x72\x74\x48\x71\x30\x46\x57','\x44\x77\x70\x64\x47\x33\x4e\x63\x53\x53\x6b\x37\x64\x43\x6f\x78\x57\x52\x57\x6e\x42\x62\x64\x64\x55\x38\x6b\x72\x57\x34\x4a\x64\x49\x38\x6b\x38\x57\x34\x74\x64\x48\x61\x78\x64\x51\x77\x74\x63\x51\x68\x79\x4e\x79\x58\x4e\x63\x4b\x43\x6f\x58\x77\x47','\x57\x52\x61\x50\x57\x4f\x37\x64\x54\x49\x38\x48','\x57\x50\x74\x63\x51\x53\x6f\x44\x57\x34\x5a\x64\x55\x71','\x77\x38\x6b\x70\x65\x57','\x57\x37\x61\x6e\x57\x50\x7a\x31\x57\x36\x30','\x57\x52\x6a\x47\x6a\x6d\x6f\x56\x57\x37\x33\x63\x55\x58\x6e\x64\x61\x77\x68\x64\x55\x43\x6f\x66\x57\x4f\x43','\x57\x37\x69\x43\x57\x50\x76\x54\x57\x52\x74\x64\x55\x53\x6f\x51\x57\x52\x6c\x63\x4b\x72\x68\x64\x4e\x6d\x6f\x68\x41\x43\x6f\x33\x77\x64\x2f\x64\x4b\x76\x64\x64\x53\x47\x31\x76\x63\x47\x64\x63\x54\x33\x48\x38\x62\x57','\x43\x64\x64\x64\x48\x38\x6b\x74\x6d\x6d\x6b\x74\x57\x35\x70\x63\x56\x57\x46\x63\x55\x6d\x6b\x45\x44\x71','\x57\x36\x61\x36\x57\x4f\x37\x64\x54\x49\x75\x53\x57\x4f\x70\x64\x50\x43\x6b\x72\x57\x35\x4a\x63\x50\x38\x6b\x67\x57\x52\x6a\x66\x57\x4f\x38','\x57\x52\x71\x34\x72\x38\x6b\x35\x57\x52\x64\x64\x49\x75\x4b'].concat((function(){return['\x35\x79\x59\x44\x36\x41\x67\x39\x35\x51\x55\x36\x35\x42\x2b\x72\x35\x50\x6f\x78\x35\x6c\x2b\x6f\x36\x6b\x73\x6c\x36\x41\x6f\x64','\x6f\x47\x6a\x47\x66\x43\x6f\x51\x57\x34\x53\x6b\x57\x4f\x68\x63\x54\x66\x64\x64\x55\x77\x4e\x63\x51\x4d\x78\x64\x47\x53\x6f\x56\x68\x77\x38\x31\x70\x43\x6f\x4e\x79\x53\x6f\x45\x68\x53\x6b\x61\x65\x6d\x6f\x64','\x57\x52\x6e\x46\x69\x47','\x71\x6d\x6b\x55\x57\x37\x74\x64\x4e\x53\x6b\x43\x7a\x4a\x68\x64\x56\x6d\x6f\x5a\x71\x57','\x44\x43\x6f\x6c\x65\x66\x37\x63\x54\x4b\x33\x63\x4b\x6d\x6b\x35','\x6d\x38\x6b\x76\x45\x58\x33\x64\x53\x62\x33\x64\x48\x53\x6b\x75\x57\x36\x66\x6e\x57\x52\x6c\x63\x51\x43\x6f\x7a','\x57\x35\x6d\x4e\x57\x37\x6a\x6e\x57\x34\x64\x64\x4b\x33\x57\x47\x68\x71\x70\x64\x47\x47','\x6d\x38\x6b\x77\x43\x62\x37\x63\x47\x65\x33\x63\x56\x38\x6b\x39\x57\x37\x31\x6b','\x46\x71\x42\x63\x53\x43\x6b\x4a\x76\x47','\x57\x50\x6e\x51\x62\x62\x6d\x65\x69\x48\x5a\x64\x4e\x38\x6f\x43\x57\x51\x79','\x72\x43\x6f\x75\x57\x37\x74\x63\x51\x53\x6b\x67\x57\x36\x76\x30\x45\x6d\x6f\x6f\x44\x78\x6d','\x57\x52\x56\x64\x55\x73\x6d','\x77\x53\x6f\x66\x57\x37\x4f\x38\x67\x6d\x6b\x75\x67\x4e\x69\x67\x46\x49\x7a\x46\x75\x76\x38','\x45\x61\x78\x63\x54\x57','\x57\x52\x78\x63\x47\x71\x46\x63\x48\x4b\x62\x56\x57\x34\x37\x64\x50\x43\x6f\x38\x6d\x43\x6b\x52','\x57\x36\x37\x64\x4e\x4c\x69','\x66\x4a\x42\x64\x54\x38\x6b\x61\x57\x4f\x46\x63\x51\x48\x4f\x4b\x57\x34\x42\x63\x48\x6d\x6f\x34\x62\x6d\x6b\x68','\x57\x52\x4f\x34\x73\x65\x70\x64\x4d\x4b\x4b\x55\x42\x6d\x6b\x78\x62\x4d\x74\x64\x47\x47'].concat((function(){return['\x6f\x66\x56\x63\x53\x38\x6f\x73\x57\x51\x70\x64\x55\x6d\x6f\x51','\x57\x51\x74\x64\x50\x5a\x66\x42\x71\x43\x6b\x5a','\x57\x35\x47\x4b\x57\x37\x65','\x57\x35\x5a\x64\x4e\x43\x6b\x32','\x57\x36\x74\x64\x4d\x65\x70\x64\x4a\x49\x43\x5a\x57\x50\x56\x64\x50\x53\x6f\x51\x6d\x43\x6b\x6d\x6b\x53\x6f\x4f','\x45\x63\x2f\x63\x50\x77\x71\x72','\x57\x52\x57\x39\x71\x65\x78\x64\x4b\x75\x66\x46\x42\x43\x6b\x35\x6f\x78\x6c\x64\x51\x43\x6f\x38','\x41\x31\x79\x4a\x76\x53\x6f\x39\x57\x4f\x54\x42\x57\x51\x70\x63\x50\x78\x46\x64\x55\x49\x5a\x63\x51\x47','\x63\x38\x6f\x46\x57\x34\x65\x2b\x57\x35\x50\x31\x57\x37\x68\x63\x4c\x6d\x6b\x73\x57\x4f\x6d','\x57\x51\x6a\x6a\x57\x35\x75\x54\x57\x51\x5a\x63\x55\x43\x6b\x37\x57\x52\x74\x63\x4c\x47\x42\x64\x47\x38\x6b\x6d\x74\x71','\x57\x34\x72\x4d\x67\x43\x6b\x43\x57\x35\x33\x63\x55\x4b\x2f\x64\x50\x71\x71\x52','\x35\x37\x49\x6b\x35\x7a\x67\x43\x35\x51\x49\x6c\x35\x42\x36\x4e\x35\x50\x67\x75\x35\x6c\x36\x70\x36\x6b\x45\x69\x36\x41\x63\x78','\x57\x4f\x65\x44\x66\x30\x38\x6c','\x45\x4a\x6c\x64\x52\x38\x6f\x56\x6c\x43\x6b\x49\x57\x37\x4b\x4f\x57\x37\x35\x48\x43\x38\x6b\x50\x57\x4f\x34','\x35\x41\x73\x36\x35\x79\x55\x77\x36\x6b\x41\x59\x36\x41\x6f\x2b\x36\x7a\x63\x30\x35\x4f\x32\x6f','\x65\x72\x58\x53\x57\x37\x52\x64\x56\x53\x6b\x33','\x41\x33\x46\x63\x53\x53\x6b\x57\x46\x43\x6f\x2b\x57\x51\x48\x2f\x57\x34\x31\x2f\x77\x43\x6b\x30\x57\x51\x4e\x63\x4b\x57'];}()));}()));}());_0x3148=function(){return _0x200fed;};return _0x3148();};var _0x106776=(function(){var _0x1af76a=_0x33c59e,_0x33fecb={'\x52\x6e\x65\x66\x51':_0x1af76a(0x11e,'\x63\x49\x29\x45')},_0x64b98d=!![];return function(_0x5858f9,_0x586d65){var _0x447506=_0x1af76a;if(_0x447506(0x12d,'\x71\x52\x56\x7a')!==_0x33fecb['\x52\x6e\x65\x66\x51'])_0x104b41[_0x447506(0x142,'\x77\x29\x6a\x4f')](_0x447506(0x145,'\x21\x6c\x6d\x65'));else{var _0x305e03=_0x64b98d?function(){var _0x283a58=_0x447506;if(_0x586d65){var _0x229f2d=_0x586d65[_0x283a58(0x143,'\x21\x6c\x6d\x65')](_0x5858f9,arguments);return _0x586d65=null,_0x229f2d;}}:function(){};return _0x64b98d=![],_0x305e03;}};}()),_0x7aa160=_0x106776(this,function(){var _0x384ee4=_0x33c59e,_0x5d155d={'\x6d\x54\x71\x79\x43':_0x384ee4(0x146,'\x43\x45\x72\x76')};return _0x7aa160[_0x384ee4(0x14d,'\x6c\x6d\x61\x6d')]()[_0x384ee4(0x13b,'\x39\x70\x38\x25')](_0x5d155d['\x6d\x54\x71\x79\x43'])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x384ee4(0x120,'\x59\x4b\x68\x50')](_0x7aa160)[_0x384ee4(0x140,'\x43\x34\x49\x79')](_0x5d155d[_0x384ee4(0x13c,'\x29\x21\x6e\x5d')]);});_0x7aa160();var _0x541cb0=_0x33c59e(0x139,'\x39\x70\x38\x25'),_0x164fa5=_0x33c59e(0x13e,'\x42\x77\x6f\x6e'),_0x5ae0f9=new MuiPlayer({'\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72':_0x33c59e(0x138,'\x75\x55\x24\x50'),'\x74\x69\x74\x6c\x65':_0x33c59e(0x149,'\x75\x55\x24\x50'),'\x73\x72\x63':_0x33c59e(0x13f,'\x56\x24\x68\x51'),'\x77\x69\x64\x74\x68':_0x33c59e(0x125,'\x6b\x28\x5e\x57'),'\x64\x72\x61\x67\x53\x70\x6f\x74\x53\x68\x61\x70\x65':_0x33c59e(0x137,'\x67\x23\x6c\x36'),'\x74\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72':'\x23\x35\x35\x63\x36\x31\x32','\x70\x6c\x75\x67\x69\x6e\x73':[new MuiPlayerDesktopPlugin({'\x6b\x65\x79':_0x541cb0,'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73':thumbnails,'\x63\x75\x73\x74\x6f\x6d\x53\x65\x74\x74\x69\x6e\x67\x5f\x73\x69\x6e\x67\x6c\x65':customSetting_single}),new MuiPlayerMobilePlugin({'\x6b\x65\x79':_0x164fa5,'\x73\x68\x6f\x77\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e':!![],'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73':thumbnails})],'\x70\x61\x72\x73\x65':{'\x74\x79\x70\x65':_0x33c59e(0x123,'\x47\x32\x35\x6c'),'\x6c\x6f\x61\x64\x65\x72':Hls,'\x63\x6f\x6e\x66\x69\x67':{'\x64\x65\x62\x75\x67':![]}},'\x63\x75\x73\x74\x6f\x6d':{'\x68\x65\x61\x64\x43\x6f\x6e\x74\x72\x6f\x6c\x73':[{'\x73\x6c\x6f\x74':_0x33c59e(0x130,'\x79\x66\x5d\x21'),'\x63\x6c\x69\x63\x6b':function(_0x5cde52){var _0xc42fea=_0x33c59e,_0x37cbc3={'\x70\x47\x4e\x58\x46':_0xc42fea(0x14a,'\x37\x78\x47\x38')};console[_0xc42fea(0x14b,'\x40\x72\x5d\x23')](_0x37cbc3[_0xc42fea(0x141,'\x66\x69\x36\x46')]);},'\x73\x74\x79\x6c\x65':{}}],'\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75':[{'\x6e\x61\x6d\x65':_0x33c59e(0x124,'\x6b\x28\x5e\x57'),'\x63\x6f\x6e\x74\x65\x78\x74':'\u590d\u5236\u89c6\u9891\u94fe\u63a5','\x7a\x49\x6e\x64\x65\x78':0x0,'\x73\x68\x6f\x77':!![],'\x63\x6c\x69\x63\x6b':function(_0x23a929){}}]}}),_0x1c3129=new MuiPlayer({'\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72':_0x33c59e(0x147,'\x43\x34\x49\x79'),'\x74\x69\x74\x6c\x65':_0x33c59e(0x133,'\x68\x4b\x21\x57'),'\x73\x72\x63':_0x33c59e(0x13a,'\x77\x29\x6a\x4f'),'\x77\x69\x64\x74\x68':_0x33c59e(0x12b,'\x66\x69\x36\x46'),'\x64\x72\x61\x67\x53\x70\x6f\x74\x53\x68\x61\x70\x65':_0x33c59e(0x129,'\x33\x49\x50\x6d'),'\x74\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72':_0x33c59e(0x13d,'\x66\x69\x36\x46'),'\x70\x6c\x75\x67\x69\x6e\x73':[new MuiPlayerDesktopPlugin({'\x6b\x65\x79':_0x541cb0,'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73':thumbnails,'\x63\x75\x73\x74\x6f\x6d\x53\x65\x74\x74\x69\x6e\x67\x5f\x76\x61\x72\x69\x65\x74\x79':customSetting_variety}),new MuiPlayerMobilePlugin({'\x6b\x65\x79':_0x164fa5,'\x73\x68\x6f\x77\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e':!![],'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73':thumbnails})],'\x70\x61\x72\x73\x65':{'\x74\x79\x70\x65':_0x33c59e(0x12a,'\x5d\x4c\x45\x5d'),'\x6c\x6f\x61\x64\x65\x72':Hls,'\x63\x6f\x6e\x66\x69\x67':{'\x64\x65\x62\x75\x67':![]}},'\x63\x75\x73\x74\x6f\x6d':{'\x68\x65\x61\x64\x43\x6f\x6e\x74\x72\x6f\x6c\x73':[{'\x73\x6c\x6f\x74':'\x63\x61\x73\x74\x53\x63\x72\x65\x65\x6e','\x63\x6c\x69\x63\x6b':function(_0x1096d4){var _0x58cd69=_0x33c59e,_0x1334e3={'\x59\x4c\x6e\x58\x65':'\x63\x61\x73\x74\x20\x73\x63\x72\x65\x65\x6e\x20\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x69\x63\x6b\x2e\x2e\x2e'};console[_0x58cd69(0x121,'\x33\x49\x50\x6d')](_0x1334e3[_0x58cd69(0x134,'\x50\x7a\x44\x30')]);},'\x73\x74\x79\x6c\x65':{}}],'\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75':[{'\x6e\x61\x6d\x65':_0x33c59e(0x14f,'\x5d\x4c\x45\x5d'),'\x63\x6f\x6e\x74\x65\x78\x74':_0x33c59e(0x136,'\x77\x29\x6a\x4f'),'\x7a\x49\x6e\x64\x65\x78':0x0,'\x73\x68\x6f\x77':!![],'\x63\x6c\x69\x63\x6b':function(_0x47113f){}}]}});var version_ = 'jsjiami.com.v7';