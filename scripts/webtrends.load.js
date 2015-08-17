// WebTrends SmartSource Data Collector Tag v10.4.1
// Copyright (c) 2014 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.2
// Created: 2014.03.27
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid:"dcsxxxxxxxxxxxxxxxxxxxxxx_xxxx",
        domain:"statse.webtrendslive.com",
        timezone:-9,
        i18n:true,
        offsite:true,
        download:true,
        downloadtypes:"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
        anchor:true,
        javascript: true,
        onsitedoms:"example.com",
        fpcdom:".example.com",
        plugins:{
            hm:{src:"//s.webtrends.com/js/webtrends.hm.js"},
            facebook:{src:"//s.webtrends.com/js/webtrends.fb.js"},
            yt:{src:"//s.webtrends.com/js/webtrends.yt.js"}
        }
        }).track();
};
(function(){
    var s=document.createElement("script"); s.async=true; s.src="/scripts/webtrends.min.js";
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());
