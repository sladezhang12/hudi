"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[10274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22139:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Overview",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,l={unversionedId:"overview",id:"version-0.12.1/overview",title:"Overview",description:"Welcome to Apache Hudi! This overview will provide a high level summary of what Apache Hudi is and will orient you on",source:"@site/versioned_docs/version-0.12.1/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/0.12.1/overview",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/overview.md",tags:[],version:"0.12.1",frontMatter:{title:"Overview",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",next:{title:"Spark Guide",permalink:"/docs/0.12.1/quick-start-guide"}},c=[{value:"What is Apache Hudi",id:"what-is-apache-hudi",children:[],level:2},{value:"Core Concepts to Learn",id:"core-concepts-to-learn",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Connect With The Community",id:"connect-with-the-community",children:[{value:"Join in on discussions",id:"join-in-on-discussions",children:[],level:3},{value:"Come to Office Hours for help",id:"come-to-office-hours-for-help",children:[],level:3},{value:"Community Calls",id:"community-calls",children:[],level:3}],level:2},{value:"Contribute",id:"contribute",children:[],level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to Apache Hudi! This overview will provide a high level summary of what Apache Hudi is and will orient you on\nhow to learn more to get started."),(0,r.kt)("h2",{id:"what-is-apache-hudi"},"What is Apache Hudi"),(0,r.kt)("p",null,"Apache Hudi (pronounced \u201choodie\u201d) is the next generation ",(0,r.kt)("a",{parentName:"p",href:"/blog/2021/07/21/streaming-data-lake-platform"},"streaming data lake platform"),".\nApache Hudi brings core warehouse and database functionality directly to a data lake. Hudi provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/table_management"},"tables"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/next/timeline"},"transactions"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/write_operations"},"efficient upserts/deletes"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/indexing"},"advanced indexes"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/next/hoodie_streaming_ingestion"},"streaming ingestion services"),", data ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/clustering"},"clustering"),"/",(0,r.kt)("a",{parentName:"p",href:"/docs/next/compaction"},"compaction")," optimizations,\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concurrency_control"},"concurrency")," all while keeping your data in open source file formats."),(0,r.kt)("p",null,"Not only is Apache Hudi great for streaming workloads, but it also allows you to create efficient incremental batch pipelines.\nRead the docs for more ",(0,r.kt)("a",{parentName:"p",href:"/docs/use_cases"},"use case descriptions")," and check out ",(0,r.kt)("a",{parentName:"p",href:"/powered-by"},"who's using Hudi"),", to see how some of the\nlargest data lakes in the world including ",(0,r.kt)("a",{parentName:"p",href:"https://eng.uber.com/uber-big-data-platform/"},"Uber"),", ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/how-amazon-transportation-service-enabled-near-real-time-event-analytics-at-petabyte-scale-using-aws-glue-with-apache-hudi/"},"Amazon"),",\n",(0,r.kt)("a",{parentName:"p",href:"http://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},"ByteDance"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://s.apache.org/hudi-robinhood-talk"},"Robinhood")," and more are transforming their production data lakes with Hudi."),(0,r.kt)("p",null,"Apache Hudi can easily be used on any ",(0,r.kt)("a",{parentName:"p",href:"/docs/cloud"},"cloud storage platform"),".\nHudi\u2019s advanced performance optimizations, make analytical workloads faster with any of\nthe popular query engines including, Apache Spark, Flink, Presto, Trino, Hive, etc."),(0,r.kt)("h2",{id:"core-concepts-to-learn"},"Core Concepts to Learn"),(0,r.kt)("p",null,"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/timeline"},"Hudi Timeline")," \u2013 How Hudi manages transactions and other table services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/file_layouts"},"Hudi File Layout")," - How the files are laid out on storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/table_types"},"Hudi Table Types")," \u2013 ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY_ON_WRITE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MERGE_ON_READ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/table_types#query-types"},"Hudi Query Types")," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries")),(0,r.kt)("p",null,'See more in the "Concepts" section of the docs.'),(0,r.kt)("p",null,"Take a look at recent ",(0,r.kt)("a",{parentName:"p",href:"/blog"},"blog posts")," that go in depth on certain topics or use cases."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Sometimes the fastest way to learn is by doing. Try out these Quick Start resources to get up and running in minutes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/quick-start-guide"},"Spark Quick Start Guide")," \u2013 if you primarily use Apache Spark"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/flink-quick-start-guide"},"Flink Quick Start Guide")," \u2013 if you primarily use Apache Flink")),(0,r.kt)("p",null,"If you want to experience Apache Hudi integrated into an end to end demo with Kafka, Spark, Hive, Presto, etc, try out the Docker Demo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docker_demo"},"Docker Demo"))),(0,r.kt)("h2",{id:"connect-with-the-community"},"Connect With The Community"),(0,r.kt)("p",null,"Apache Hudi is community focused and community led and welcomes new-comers with open arms. Leverage the following\nresources to learn more, engage, and get help as you get started."),(0,r.kt)("h3",{id:"join-in-on-discussions"},"Join in on discussions"),(0,r.kt)("p",null,"See all the ways to ",(0,r.kt)("a",{parentName:"p",href:"/community/get-involved"},"engage with the community here"),". Two most popular methods include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-20r833rxh-627NWYDUyR8jRtMa2mZ~gg"},"Hudi Slack Channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:users-subscribe@hudi.apache.org"},"Hudi mailing list")," - (send any msg to subscribe)")),(0,r.kt)("h3",{id:"come-to-office-hours-for-help"},"Come to Office Hours for help"),(0,r.kt)("p",null,"Weekly office hours are ",(0,r.kt)("a",{parentName:"p",href:"/community/syncs#weekly-office-hours"},"posted here")),(0,r.kt)("h3",{id:"community-calls"},"Community Calls"),(0,r.kt)("p",null,"Attend ",(0,r.kt)("a",{parentName:"p",href:"/community/syncs#monthly-community-call"},"monthly community calls")," to learn best practices and see what others are building."),(0,r.kt)("h2",{id:"contribute"},"Contribute"),(0,r.kt)("p",null,"Apache Hudi welcomes you to join in on the fun and make a lasting impact on the industry as a whole. See our\n",(0,r.kt)("a",{parentName:"p",href:"/contribute/how-to-contribute"},"contributor guide")," to learn more, and don\u2019t hesitate to directly reach out to any of the\ncurrent committers to learn more."),(0,r.kt)("p",null,"Have an idea, an ask, or feedback about a pain-point, but don\u2019t have time to contribute? Join the ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-20r833rxh-627NWYDUyR8jRtMa2mZ~gg"},"Hudi Slack Channel"),"\nand share!"))}d.isMDXComponent=!0}}]);