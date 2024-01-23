import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import img4 from "../images/image4.png";
import img5 from "../images/image5.png";
import img6 from "../images/image6.png";
import img7 from "../images/image7.png";
import img8 from "../images/image8.png";
import img9 from "../images/image9.png";
import img10 from "../images/image10.png";
import img11 from "../images/image11.png";
import { Link } from "react-router-dom";

export function Foo(props: any): any {
  function openWebsite(url: string): any {
    window.open(url, "_blank");
  }
  return (
    <>
      <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      @import url(https://themes.googleusercontent.com/fonts/css?kit=GGSdX60RftK6aXtKOXIPy_Z4CV7xicsXCtasMCgHIGkcgcjVZGbECObXZXBpnQ62);\n      .lst-kix_qbpdvb4dyx7k-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-8 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-7 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-4 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-5 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_pk8olxm6ums8-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_pk8olxm6ums8-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_8mbdsr675ae6-3 {\n        list-style-type: none;\n      }\n      .lst-kix_ygh1l7bpw1t8-1 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_3vq6kco517dn-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_3vq6kco517dn-5 {\n        list-style-type: none;\n      }\n      .lst-kix_15p6puf0jf6d-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_15p6puf0jf6d-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_15p6puf0jf6d-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_15p6puf0jf6d-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_15p6puf0jf6d-0 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_15p6puf0jf6d-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_15p6puf0jf6d-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_15p6puf0jf6d-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_15p6puf0jf6d-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_gvc2icabz01d-5 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-4 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-7 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-1 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gvc2icabz01d-2 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_gvc2icabz01d-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gvc2icabz01d-1 {\n        list-style-type: none;\n      }\n      .lst-kix_gvc2icabz01d-8 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_gvc2icabz01d-8 {\n        list-style-type: none;\n      }\n      .lst-kix_ygh1l7bpw1t8-2 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_gvc2icabz01d-7 {\n        list-style-type: none;\n      }\n      .lst-kix_3vq6kco517dn-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-4 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-0 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_gbe3i6tmfra-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gbe3i6tmfra-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-5 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_3vq6kco517dn-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_3vq6kco517dn-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_gbe3i6tmfra-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_gbe3i6tmfra-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-7 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-8 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_gbe3i6tmfra-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_3vq6kco517dn-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_ygh1l7bpw1t8-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_3vq6kco517dn-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_gbe3i6tmfra-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_gbe3i6tmfra-0 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_3vq6kco517dn-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_gbe3i6tmfra-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_3vq6kco517dn-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_3vq6kco517dn-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_gbe3i6tmfra-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_ygh1l7bpw1t8-6 {\n        list-style-type: none;\n      }\n      .lst-kix_8mbdsr675ae6-0 > li:before {\n        content: "\\002756   ";\n      }\n      ul.lst-kix_ygh1l7bpw1t8-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-0 {\n        list-style-type: none;\n      }\n      .lst-kix_8mbdsr675ae6-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_15p6puf0jf6d-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_15p6puf0jf6d-0 {\n        list-style-type: none;\n      }\n      .lst-kix_8mbdsr675ae6-1 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_8mbdsr675ae6-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_15p6puf0jf6d-1 {\n        list-style-type: none;\n      }\n      li.li-bullet-0:before {\n        margin-left: -18pt;\n        white-space: nowrap;\n        display: inline-block;\n        min-width: 18pt;\n      }\n      ul.lst-kix_qbpdvb4dyx7k-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_qbpdvb4dyx7k-1 {\n        list-style-type: none;\n      }\n      .lst-kix_8mbdsr675ae6-7 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_8mbdsr675ae6-8 > li:before {\n        content: "\\0025c6   ";\n      }\n      ul.lst-kix_gbe3i6tmfra-7 {\n        list-style-type: none;\n      }\n      .lst-kix_qbpdvb4dyx7k-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_qbpdvb4dyx7k-4 {\n        list-style-type: none;\n      }\n      .lst-kix_pk8olxm6ums8-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_qbpdvb4dyx7k-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_qbpdvb4dyx7k-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_gbe3i6tmfra-6 {\n        list-style-type: none;\n      }\n      .lst-kix_pk8olxm6ums8-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      ul.lst-kix_gbe3i6tmfra-5 {\n        list-style-type: none;\n      }\n      .lst-kix_qbpdvb4dyx7k-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_3vq6kco517dn-0 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_8mbdsr675ae6-4 > li:before {\n        content: "\\0025c6   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-2 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_pk8olxm6ums8-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_qbpdvb4dyx7k-1 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_qbpdvb4dyx7k-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_qbpdvb4dyx7k-5 {\n        list-style-type: none;\n      }\n      .lst-kix_8mbdsr675ae6-5 > li:before {\n        content: "\\0027a2   ";\n      }\n      .lst-kix_8mbdsr675ae6-6 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_ygh1l7bpw1t8-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_qbpdvb4dyx7k-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_ygh1l7bpw1t8-0 {\n        list-style-type: none;\n      }\n      .lst-kix_pk8olxm6ums8-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_qbpdvb4dyx7k-7 {\n        list-style-type: none;\n      }\n      ol {\n        margin: 0;\n        padding: 0;\n      }\n      table td,\n      table th {\n        padding: 0;\n      }\n      .c10 {\n        margin-left: 36pt;\n        padding-top: 0pt;\n        padding-left: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c4 {\n        margin-left: 72pt;\n        padding-top: 0pt;\n        padding-left: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c1 {\n        margin-left: 72pt;\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n        height: 11pt;\n      }\n      .c19 {\n        background-color: #ffffff;\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 8pt;\n        font-family: "Comfortaa";\n        font-style: normal;\n      }\n      .c2 {\n        background-color: #ffffff;\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-family: "Arial";\n        font-style: normal;\n      }\n      .c7 {\n        color: #000000;\n        font-weight: 600;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-family: "Comfortaa";\n        font-style: normal;\n      }\n      .c8 {\n        margin-left: 72pt;\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c12 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: center;\n        height: 11pt;\n      }\n      .c18 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: center;\n      }\n      .c25 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c14 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c17 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 14pt;\n        font-style: normal;\n      }\n      .c16 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 11pt;\n        font-style: normal;\n      }\n      .c9 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-style: normal;\n      }\n      .c13 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 12pt;\n        font-style: normal;\n      }\n      .c5 {\n        -webkit-text-decoration-skip: none;\n        color: #1155cc;\n        text-decoration: underline;\n        text-decoration-skip-ink: none;\n      }\n      .c27 {\n        background-color: #ffffff;\n        font-weight: 400;\n        font-size: 9pt;\n        font-family: "Comfortaa";\n      }\n      .c26 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-style: normal;\n      }\n      .c20 {\n        background-color: #ffffff;\n        max-width: 468pt;\n        padding: 72pt 72pt 72pt 72pt;\n      }\n      .c11 {\n        font-size: 10pt;\n        font-family: "Comfortaa";\n        font-weight: 600;\n      }\n      .c6 {\n        padding: 0;\n        margin: 0;\n      }\n      .c23 {\n        font-weight: 400;\n        font-family: "Arial";\n      }\n      .c24 {\n        background-color: #ffffff;\n        font-size: 8pt;\n      }\n      .c15 {\n        margin-left: 36pt;\n        height: 11pt;\n      }\n      .c0 {\n        font-weight: 700;\n        font-family: "Comfortaa";\n      }\n      .c3 {\n        color: inherit;\n        text-decoration: inherit;\n      }\n      .c28 {\n        background-color: #ffffff;\n      }\n      .c22 {\n        height: 11pt;\n      }\n      .c21 {\n        font-size: 10pt;\n      }\n      .title {\n        padding-top: 0pt;\n        color: #000000;\n        font-size: 26pt;\n        padding-bottom: 3pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .subtitle {\n        padding-top: 0pt;\n        color: #666666;\n        font-size: 15pt;\n        padding-bottom: 16pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      li {\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Arial";\n      }\n      p {\n        margin: 0;\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Arial";\n      }\n      h1 {\n        padding-top: 20pt;\n        color: #000000;\n        font-size: 20pt;\n        padding-bottom: 6pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h2 {\n        padding-top: 18pt;\n        color: #000000;\n        font-size: 16pt;\n        padding-bottom: 6pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h3 {\n        padding-top: 16pt;\n        color: #434343;\n        font-size: 14pt;\n        padding-bottom: 4pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h4 {\n        padding-top: 14pt;\n        color: #666666;\n        font-size: 12pt;\n        padding-bottom: 4pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h5 {\n        padding-top: 12pt;\n        color: #666666;\n        font-size: 11pt;\n        padding-bottom: 4pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h6 {\n        padding-top: 12pt;\n        color: #666666;\n        font-size: 11pt;\n        padding-bottom: 4pt;\n        font-family: "Arial";\n        line-height: 1.15;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n    ',
        }}
      />
      <p className="c18">
        <span
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "124.5px",
            height: "124.5px",
          }}
        >
          <img
            alt=""
            src={img1}
            style={{
              width: "124.5px",
              height: "124.5px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
      </p>
      <p className="c18">
        <span className="c17 c0">GUNJAN SHARMA</span>
      </p>
      <p className="c18">
        <span className="c7">
          Typescript Full Stack Engineer | Self-Taught Programmer | Learning
          Freak
        </span>
      </p>
      <p className="c18">
        <span className="c7">
          [3 Year Exp with Typescript Frontend Ecosystem(ReactJS, VueJS, React
          Native, NodeJS | ExpressJS]
        </span>
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <p className="c18">
        <span className="c0 c21">Founder/Developer</span>
        <span className="c11">&nbsp;- </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://geekforce.in&sa=D&source=editors&ust=1706000068707679&usg=AOvVaw0UUfciDGgGmVpgj3Vp23ds"
          >
            GeekForce.in®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://appnor.co&sa=D&source=editors&ust=1706000068707948&usg=AOvVaw1kbWhH_T-NFhxbDrQ8iPs9"
          >
            Appnor.co®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://docbay.in/&sa=D&source=editors&ust=1706000068708172&usg=AOvVaw2t4BovcPdFamN1iDPniv-e"
          >
            Docbay.in®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://webparser.online&sa=D&source=editors&ust=1706000068708461&usg=AOvVaw3CSz21emt1UApEx_fb4fsK"
          >
            Webparser.online®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://escreenshotx.web.app&sa=D&source=editors&ust=1706000068708761&usg=AOvVaw07UX-2iBPkoZ9w2H7rlsz7"
          >
            EscreenshotX.web.app®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://profileo.me&sa=D&source=editors&ust=1706000068709023&usg=AOvVaw0kj5bRDyvEidAxRzbjHI32"
          >
            Profileo.me®
          </a>
        </span>
        <span className="c11">&nbsp;| </span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.Evokeup.technologies.capsuleNews&sa=D&source=editors&ust=1706000068709398&usg=AOvVaw1GZN06mzggX8c6kEFSGTKI"
          >
            MagadhTV®
          </a>
        </span>
        <span className="c11">|</span>
        <span className="c5 c11">
          <a
            className="c3"
            href="https://www.google.com/url?q=https://alyonafinance.in&sa=D&source=editors&ust=1706000068709710&usg=AOvVaw3DzZsKXzWLUPQFxd4CvVkg"
          >
            &nbsp;AlyonaFinance.in
          </a>
        </span>
        <span className="c11">&nbsp;+300 more SaaS tools..</span>
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <br />
      <p className="c18">
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() =>
              openWebsite(
                "https://www.facebook.com/profile.php?id=100017200444857&mibextid=2JQ9oc"
              )
            }
            alt=""
            src={img7}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() => openWebsite("http://www.twitter.com/@286gunjan")}
            alt=""
            src={img2}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() => openWebsite("http://www.instagram.com/gunjan_0y")}
            alt=""
            src={img8}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() => openWebsite("http://www.github.com/gunjan1sharma")}
            alt=""
            src={img9}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() =>
              openWebsite(
                "https://www.linkedin.com/in/gunjan-sharma-a74332251/"
              )
            }
            alt=""
            src={img4}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() => openWebsite("http://www.youtube.com/@gunjan.sharma")}
            alt=""
            src={img5}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() => openWebsite("tel:8434076005")}
            alt=""
            src={img3}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() =>
              openWebsite(
                "https://play.google.com/store/apps/dev?id=6895886327735853286"
              )
            }
            alt=""
            src={img11}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() =>
              openWebsite(
                "https://play.google.com/store/apps/developer?id=Amit+Aku"
              )
            }
            alt=""
            src={img6}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
        <span
          className="cursor-pointer"
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            WebkitTransform: "rotate(0rad) translateZ(0px)",
            width: "48.8px",
            height: "48.8px",
          }}
        >
          <img
            onClick={() =>
              openWebsite(
                "https://play.google.com/store/apps/developer?id=Amit+Aku"
              )
            }
            alt=""
            src={img10}
            style={{
              width: "28.8px",
              height: "28.8px",
              marginLeft: 0,
              marginTop: 0,
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span>
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <hr />
      <p className="c12">
        <span className="c7" />
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <p className="c12">
        <span className="c7" />
      </p>
      <ul className="c6 lst-kix_gvc2icabz01d-0 start">
        <li className="c10 li-bullet-0">
          <span className="c17 c0">EXPERIENCES</span>
        </li>
      </ul><br/>
      <ul className="c6 lst-kix_pk8olxm6ums8-0 start">
        <li className="c4 li-bullet-0">
          <span className="c0 c13">FREELANCE DEVELOPER [2023-PRESENT]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Post: ReactJS | NodeJS | Flutter Developer
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 1 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Bengaluru, Karnataka</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">TECHIEAID TECHNOLOGIES [2021-23]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Post: ReactJS | NodeJS | Flutter Developer
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 2 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Bengaluru, Karnataka</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">RKVIT SOLUTIONS PVT LTD [2020-21]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Post: Native Android | Java Swing Development (Intern)
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 5-9 Months</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Patna, Bihar</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">SELF-TAUGHT [2015-18]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Post: Native Android | Java Swing | Firebase | Parse Development
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration : 3 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Patna, Bihar</span>
      </p>
      <p className="c14 c22">
        <span className="c9 c0" />
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <hr />
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <p className="c14 c22">
        <span className="c9 c0" />
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_gvc2icabz01d-0">
        <li className="c10 li-bullet-0">
          <span className="c0 c17">EXPERTISE [2015-PRESENT]</span>
        </li>
      </ul><br/>
      <ul className="c6 lst-kix_15p6puf0jf6d-0 start">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">NETWORKING</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Stack: Axios | &nbsp;Apollo Client | Super Agent | SWR | React Query
        </span>
      </p>
      <p className="c8">
        <span className="c0 c9">
          Languages: Typescript | Javascript | ECMAscript
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Projects: 30+</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Experience: 3 Year</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_15p6puf0jf6d-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">UI COMPONENTS</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Stack: Material UI | Ant Design | React Bootstrap | Styled Components
          | Tailwind CSS
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">
          Languages: Typescript | Javascript | ECMAscript
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Projects: 40+</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Experience: 3 Year</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_15p6puf0jf6d-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">STATE MANAGEMENT</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Stack: Prop Drill | Context API | Reducers | MobX | Redux | Zustand |
          Recoil
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">
          Languages: Typescript | Javascript | ECMAscript
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Projects: 30+</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Experience: 3 Year</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_15p6puf0jf6d-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">TESTING &amp; DEBUGGING</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Stack: Enzyme | Jest | RTL | Mocha | Playwright
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">
          Languages: &nbsp;Typescript | Javascript | ECMAScript
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Projects: 20+</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Experience: 2 Year</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_15p6puf0jf6d-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">CORE FRAMEWORKS</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">
          Stack: ReactJS | VueJS | NextJS | React Native | Angular | NodeJs |
          ExpressJS
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">
          Languages: Typescript | Javascript | ECMAScript
        </span>
      </p>
      <p className="c8">
        <span className="c9 c0">Projects: 100+</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Experience: 3 Year</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <hr />
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <p className="c14 c22">
        <span className="c7" />
      </p>
      <ul className="c6 lst-kix_gvc2icabz01d-0">
        <li className="c10 li-bullet-0">
          <span className="c17 c0">EDUCATION</span>
        </li>
      </ul><br/>
      <ul className="c6 lst-kix_gbe3i6tmfra-0 start">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">GRADUATION DEGREE [2018-2021]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">Education: B.sc(Information Technology)</span>
      </p>
      <p className="c8">
        <span className="c9 c0">University: Patliputra University Patna</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 3 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Patna, Bihar</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">INTERMEDIATE [2016-2018]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">Education: Intermediate(STEM)</span>
      </p>
      <p className="c8">
        <span className="c9 c0">College: S.S College, Jehanabad</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 2 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Jehanabad, Bihar</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">MATRICULATION [2014-2016]</span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">Education: Matriculation(STEM)</span>
      </p>
      <p className="c8">
        <span className="c9 c0">College: High School Sonwan</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 2 Year</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Place: Sonwan, Jehanabad</span>
      </p>
      <p className="c1">
        <span className="c9 c0" />
      </p>
      <ul className="c6 lst-kix_pk8olxm6ums8-0">
        <li className="c4 li-bullet-0">
          <span className="c13 c0">
            PRE NC TO MATRICULATION
            [2004-2014]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </li>
      </ul>
      <p className="c8">
        <span className="c9 c0">Education: Pre-NC to Matriculation</span>
      </p>
      <p className="c8">
        <span className="c9 c0">School: Royal Convent Public School</span>
      </p>
      <p className="c8">
        <span className="c9 c0">Duration: 10 Year</span>
      </p>
      <p className="c8">
        <span className="c0 c21">Place: Jehanbad, Bihar</span>
      </p>
      <p className="c14 c15">
        <span className="c26 c27" />
      </p>
      <p className="c14 c15">
        <span className="c2" />
      </p>
      <p className="c14 c15">
        <span className="c2" />
      </p>
      <p className="c14 c15">
        <span className="c2" />
      </p>
      <hr />
      <p className="c14 c15">
        <span className="c2" />
      </p>
      <div className="m-10 p-5 leading-relaxed">
        {/* <ul className="c6 lst-kix_gvc2icabz01d-0"> */}
        <li>
          <span className="c17 c0">MY DEVELOPED PROJECTS</span>
        </li>
        {/* </ul> */}
        <p className="c14">
          <span className="c0 c21">&nbsp; &nbsp; &nbsp; </span>
          <span className="c16 c0">
            I have built more than 400+ websites, mobile apps and Backend
            Rest APIs. I have been building software products for the last 10
            years. I am a building freak, I love building backend and frontend
            systems. Listing my all projects is not possible due to spacing
            issues but I am listing my 100 recent SaaS project from which I am
            making some sorts of revenue.
          </span>
        </p>
        <p className="c14 c22">
          <span className="c0 c16" />
        </p>
        <p className="c14">
          <span className="c0">1. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://geekforce.in&sa=D&source=editors&ust=1706000068717411&usg=AOvVaw2Yqdiqzz3nHyS0xDfcpWQt"
            >
              https://Geekforce.in
            </a>
          </span>
          <span className="c0">&nbsp;| 2. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://appnor.co&sa=D&source=editors&ust=1706000068717748&usg=AOvVaw1hTrEgs27rwVnkdusD58Ic"
            >
              https://Appnor.co
            </a>
          </span>
          <span className="c0">&nbsp;| 3. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://docbay.co&sa=D&source=editors&ust=1706000068717936&usg=AOvVaw3HiwqHFhk-PEXbcCC_6QNR"
            >
              https://Docbay.co
            </a>
          </span>
          <span className="c0">&nbsp;| 4. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webparser.online&sa=D&source=editors&ust=1706000068718081&usg=AOvVaw2BdjY8DGGgV0t-23fk4TLI"
            >
              https://Webparser.online
            </a>
          </span>
          <span className="c0">&nbsp;| 5. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://escreenshotx.web.app&sa=D&source=editors&ust=1706000068718225&usg=AOvVaw2JctTUhLQfsQnYGLup79pW"
            >
              https://EscreenshotX.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 6. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://profileo.me&sa=D&source=editors&ust=1706000068718361&usg=AOvVaw30daX4QzV_8VtioWB7wTAy"
            >
              https://Profileo.me
            </a>
          </span>
          <span className="c0">&nbsp;| 7. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://magadhtv.in&sa=D&source=editors&ust=1706000068718491&usg=AOvVaw3hfJ5PoJymR_G-Tcy4LnGn"
            >
              https://MagadhTV.in
            </a>
          </span>
          <span className="c0">&nbsp;| 8. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://online-pad.netlify.app&sa=D&source=editors&ust=1706000068718652&usg=AOvVaw1tKJMEgei5uZAeIp4CJbsH"
            >
              https://Online-pad.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 9. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://ultimate-picker.web.app&sa=D&source=editors&ust=1706000068718799&usg=AOvVaw2t-fotRFL1KsxnvvitO_Os"
            >
              https://Ultimate-picker.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 10. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://myip-address.netlify.app&sa=D&source=editors&ust=1706000068718940&usg=AOvVaw1OiQCATs2ZoTpLvFLmfW6G"
            >
              https://Myip-address.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 11. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://trackmyip.netlify.app&sa=D&source=editors&ust=1706000068719075&usg=AOvVaw3_fv8N9NhFQm5oXmA3v-JA"
            >
              https://trackmyip.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 12. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://youtubevideo-downloader.netlify.app&sa=D&source=editors&ust=1706000068719228&usg=AOvVaw0s9Q1RZN-Rppfjm_Vo07FN"
            >
              https://Youtubevideo-downloader.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 13. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://youtubeaudio-downloader.netlify.app&sa=D&source=editors&ust=1706000068719430&usg=AOvVaw2vy8X0PIOzi1JUqzvNYQR6"
            >
              https://Youtubeaudio-downloader.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 14. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://youtubeshorts-downloader.netlify.app&sa=D&source=editors&ust=1706000068719599&usg=AOvVaw3ghnFMHRzWtvt89GGIKQzZ"
            >
              https://Youtubeshorts-downloader.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 15. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://links-scrapper.web.app&sa=D&source=editors&ust=1706000068719743&usg=AOvVaw1FVcF6tuAu-jAKeBxvFuYV"
            >
              https://Links-scrapper.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 16. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://images-scrapper.web.app&sa=D&source=editors&ust=1706000068719888&usg=AOvVaw374G6ijAOp94-lVe3v9CUD"
            >
              https://Images-scrapper.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 17. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://medias-scrapper.web.app&sa=D&source=editors&ust=1706000068720040&usg=AOvVaw288zNRTBNqCJFQoFQLugc9"
            >
              https://Medias-scrapper.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 18. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://semantic-scrapper.web.app&sa=D&source=editors&ust=1706000068720217&usg=AOvVaw0lFMBVDNx6Z650mmTq6VQs"
            >
              https://Semantic-scrapper.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 19. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://javascript-scrapper.web.app&sa=D&source=editors&ust=1706000068720396&usg=AOvVaw2hBkH_iJo5Uf-8TkEQTlWt"
            >
              https://Javascript-scrapper.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 20. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://seo-scrapers.web.app&sa=D&source=editors&ust=1706000068720569&usg=AOvVaw0xcEQJiy25uCgLHTalrDiD"
            >
              https://Seo-scrapers.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 21. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://keywords-lookup.web.app&sa=D&source=editors&ust=1706000068720732&usg=AOvVaw3EYMnnuA0ytTR5ujrycZ-b"
            >
              https://Keywords-lookup.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 22. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://website-scrappers.web.app&sa=D&source=editors&ust=1706000068720875&usg=AOvVaw072iRHNaNNg8Vgd76BkMUP"
            >
              https://Website-scrappers.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 23. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://site-screenshot.web.app&sa=D&source=editors&ust=1706000068721024&usg=AOvVaw096y1ykYZqLGrhfCWFWt7K"
            >
              https://Site-screenshot.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 24. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://geolocationq.web.app&sa=D&source=editors&ust=1706000068721180&usg=AOvVaw26NIgnRJOey_tOhVvD_avE"
            >
              https://Geolocationq.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 25. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://whois-lookups.web.app&sa=D&source=editors&ust=1706000068721325&usg=AOvVaw009NqzgjQAlcrMAAUNfgnz"
            >
              https://Whois-lookups.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 26. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://onlinevplayer.web.app&sa=D&source=editors&ust=1706000068721465&usg=AOvVaw0eZBKJDvDP1IrBnAOYL3Su"
            >
              https://Onlinevplayer.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 27. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://instagramreels-downloader.web.app&sa=D&source=editors&ust=1706000068721622&usg=AOvVaw2dq1PkqomHuDthFdHOF57j"
            >
              https://Instagramreels-downloader.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 28. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://instagram-thumbnail.web.app&sa=D&source=editors&ust=1706000068721776&usg=AOvVaw0iEKSOQJ1kejZy04pOcYDC"
            >
              https://Instagram-thumbnail.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 29. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://instagramvideo-downloader.web.app&sa=D&source=editors&ust=1706000068721925&usg=AOvVaw2A_LaNIaP7iM7xuq6Lixkv"
            >
              https://Instagramvideo-downloader.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 30. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://facebook-shorts.web.app&sa=D&source=editors&ust=1706000068722073&usg=AOvVaw2RqArvH0AU8xyPlX7VH7hV"
            >
              https://Facebook-shorts.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 31. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://facebook-thumbnail.web.app&sa=D&source=editors&ust=1706000068722219&usg=AOvVaw05F1GWUz-q_RmYLbE6_32f"
            >
              https://Facebook-thumbnail.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 32. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://facebookvideo-downloader.web.app&sa=D&source=editors&ust=1706000068722377&usg=AOvVaw3Ly1WQqDN2z9-hhaf8wNaM"
            >
              https://Facebookvideo-downloader.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 33. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://youtubethumbnails-downloader.netlify.app&sa=D&source=editors&ust=1706000068722560&usg=AOvVaw0ShYI93WJmwVjnL1SX8p6i"
            >
              https://Youtubethumbnails-downloader.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 34. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://youtube-scrapper.netlify.app&sa=D&source=editors&ust=1706000068722728&usg=AOvVaw0SL-FKeCxJPf-nP27spdO6"
            >
              https://Youtube-scrapper.netlify.app
            </a>
          </span>
          <span className="c0">&nbsp;| 35. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://urlto-image.web.app&sa=D&source=editors&ust=1706000068722899&usg=AOvVaw16ierWldrPsqTdG9VmHGa0"
            >
              https://Urlto-image.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 36. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://url-pdf.web.app&sa=D&source=editors&ust=1706000068723039&usg=AOvVaw0Df90VlFt7-hsVXdedfpS0"
            >
              https://Url-pdf.web.app
            </a>
          </span>
          <span className="c0">&nbsp;| 37. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://compressjpg.docbay.in&sa=D&source=editors&ust=1706000068723185&usg=AOvVaw3qpHx42uJmwSMlSas3JTD8"
            >
              https://CompressJpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 38. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://compresspng.docbay.in&sa=D&source=editors&ust=1706000068723330&usg=AOvVaw01JS_3dH099RSN4NmpoUH4"
            >
              https://Compresspng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 39. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://compresswebp.docbay.in&sa=D&source=editors&ust=1706000068723474&usg=AOvVaw0VfJFrH99lqZGk3xUshIvP"
            >
              https://Compresswebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 40. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://compressgif.docbay.in&sa=D&source=editors&ust=1706000068723625&usg=AOvVaw02C8CDeZax9PustqxyPxKM"
            >
              https://Compressgif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 41. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://compresstiff.docbay.in&sa=D&source=editors&ust=1706000068723765&usg=AOvVaw1lOlL2F9hnjLY3w9o00iQX"
            >
              https://Compresstiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 42. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtopng.docbay.in&sa=D&source=editors&ust=1706000068723900&usg=AOvVaw3iaZNmdAg2HHKteRi2opC0"
            >
              https://Jpgtopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 43. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtowebp.docbay.in&sa=D&source=editors&ust=1706000068724048&usg=AOvVaw2GSrfzgdJQJvhgr4Txz1re"
            >
              https://Jpgtowebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 44. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtogif.docbay.in&sa=D&source=editors&ust=1706000068724249&usg=AOvVaw3dHJ8MD8tr5fPbC97pRVCj"
            >
              https://Jpgtogif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 45.</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtoavif.docbay.co&sa=D&source=editors&ust=1706000068724400&usg=AOvVaw322NRu16_AGQVU3RMXtaSK"
            >
              &nbsp;
            </a>
          </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtoavif.docbay.in&sa=D&source=editors&ust=1706000068724514&usg=AOvVaw3m9tukGtVaj74hlxLVRkmS"
            >
              https://Jpgtoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 46.</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtotiff.docbay.co&sa=D&source=editors&ust=1706000068724653&usg=AOvVaw13c49wER1R6Md7W1xltI2N"
            >
              &nbsp;
            </a>
          </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtotiff.docbay.in&sa=D&source=editors&ust=1706000068724761&usg=AOvVaw2YEQsZI8bRa1rnrOLnjmNt"
            >
              https://Jpgtotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 47. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://jpgtoheic.docbay.in&sa=D&source=editors&ust=1706000068724894&usg=AOvVaw3BAppM5OPjQAezZsRFz-VR"
            >
              https://Jpgtoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 48. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtojpg.docbay.in&sa=D&source=editors&ust=1706000068725049&usg=AOvVaw0sevLU7OQeAT306omuDZel"
            >
              https://Pngtojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 49. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtowebp.docbay.in&sa=D&source=editors&ust=1706000068725184&usg=AOvVaw1iPl8V0LGMM3-BNMLt3LAN"
            >
              https://Pngtowebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 50. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtogif.docbay.in&sa=D&source=editors&ust=1706000068725313&usg=AOvVaw2XaGjFjgJ4fYdBQOIB5IPA"
            >
              https://Pngtogif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 51. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtoavif.docbay.in&sa=D&source=editors&ust=1706000068725444&usg=AOvVaw2de-n4KvpyRbbz_en3McLk"
            >
              https://Pngtoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 52. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtotiff.docbay.in&sa=D&source=editors&ust=1706000068725585&usg=AOvVaw1_RFT2JYYrqtb07kJ8pNOQ"
            >
              https://Pngtotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 53. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://pngtoheic.docbay.in&sa=D&source=editors&ust=1706000068725722&usg=AOvVaw1RBNVir_Ozk9Cv1jfnhkh9"
            >
              https://Pngtoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 54. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptojpg.docbay.in&sa=D&source=editors&ust=1706000068725855&usg=AOvVaw0-qBZ9ARzhB0Xq4gxWXjBQ"
            >
              https://Webptojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 55. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptopng.docbay.in&sa=D&source=editors&ust=1706000068725999&usg=AOvVaw2_eodZVjT_41oAVga46PiT"
            >
              https://Webptopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 56. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptogif.docbay.in&sa=D&source=editors&ust=1706000068726133&usg=AOvVaw3lMMC8SahnFUnhGmbHOqrt"
            >
              https://Webptogif.docbay.in
            </a>
          </span>
          <span className="c0">| 57. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptoavif.docbay.in&sa=D&source=editors&ust=1706000068726267&usg=AOvVaw1UyxfvG99herOxFgwRbfie"
            >
              https://Webptoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 58. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptotiff.docbay.in&sa=D&source=editors&ust=1706000068726403&usg=AOvVaw3k3IJ2ngKihdDnVm_0S9x5"
            >
              https://Webptotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 59. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://webptoheic.docbay.in&sa=D&source=editors&ust=1706000068726546&usg=AOvVaw3kWkmjQgNXgCVyfoKsa6UG"
            >
              https://Webptoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 60. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftojpg.docbay.in&sa=D&source=editors&ust=1706000068726679&usg=AOvVaw2q-KKD7X0P4DnKt2ZGCY8Y"
            >
              https://Giftojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 61. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftopng.docbay.in&sa=D&source=editors&ust=1706000068726809&usg=AOvVaw3OaEMOZoLNlDAiAm771CfU"
            >
              https://Giftopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 62. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftowebp.docbay.in&sa=D&source=editors&ust=1706000068726939&usg=AOvVaw33ieR4q2-7TQ-EkD-f_q50"
            >
              https://Giftowebp.docbay.in
            </a>
          </span>
          <span className="c0">| 63. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftoavif.docbay.in&sa=D&source=editors&ust=1706000068727082&usg=AOvVaw0WxkBTKdeFTMlJmRdxhoTF"
            >
              https://Giftoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 64. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftotiff.docbay.in&sa=D&source=editors&ust=1706000068727224&usg=AOvVaw2FtoWb6tqeR1_egFyWhLKF"
            >
              https://Giftotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 65. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://giftoheic.docbay.in&sa=D&source=editors&ust=1706000068727377&usg=AOvVaw3FNhGWpT2FY_oHtiK1q0ps"
            >
              https://Giftoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 66. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftojpg.docbay.in&sa=D&source=editors&ust=1706000068727511&usg=AOvVaw2Wqdc1oDGKVOPNJXtQZgkX"
            >
              https://Aviftojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 67. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftopng.docbay.in&sa=D&source=editors&ust=1706000068727670&usg=AOvVaw26DISll4m4AR8swBwwpLzK"
            >
              https://Aviftopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 68. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftowebp.docbay.in&sa=D&source=editors&ust=1706000068727808&usg=AOvVaw178Guzo7vFMy5rtnQWqPJf"
            >
              https://Aviftowebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 69. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftogif.docbay.in&sa=D&source=editors&ust=1706000068727960&usg=AOvVaw2GUipAixGPO7QVbrgGwTTT"
            >
              https://Aviftogif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 70. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftotiff.docbay.in&sa=D&source=editors&ust=1706000068728104&usg=AOvVaw2oQ1z0tcYNyUKiLzn21JeK"
            >
              https://Aviftotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 71. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://aviftoheic.docbay.in&sa=D&source=editors&ust=1706000068728246&usg=AOvVaw0ZgmT0tLAzAkFIlx0ca_d1"
            >
              https://Aviftoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 72. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftojpg.docbay.in&sa=D&source=editors&ust=1706000068728378&usg=AOvVaw2cFyVNNHH9eIStXUe_zu1p"
            >
              https://Tifftojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 72. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftopng.docbay.in&sa=D&source=editors&ust=1706000068728509&usg=AOvVaw1c7DsKRJVZIaJO9lVzkp7T"
            >
              https://Tifftopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 73. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftowebp.docbay.in&sa=D&source=editors&ust=1706000068728648&usg=AOvVaw0Z3ZUf5s3SkPY8u_IV6_1n"
            >
              https://Tifftowebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 74. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftogif.docbay.in&sa=D&source=editors&ust=1706000068728783&usg=AOvVaw0T6JCtPf7MJFEMYTVnbJ6U"
            >
              https://Tifftogif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 75. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftoavif.docbay.in&sa=D&source=editors&ust=1706000068728919&usg=AOvVaw02NlRNas0ID-ZcikFVA3Yd"
            >
              https://Tifftoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 76. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://tifftoheic.docbay.in&sa=D&source=editors&ust=1706000068729065&usg=AOvVaw200jHnG6s7LJ7CqOXEQ67O"
            >
              https://Tifftoheic.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 77. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictojpg.docbay.in&sa=D&source=editors&ust=1706000068729208&usg=AOvVaw3kNtmE3PSNGwmaf4JDlDdc"
            >
              https://Heictojpg.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 78. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictopng.docbay.in&sa=D&source=editors&ust=1706000068729361&usg=AOvVaw2SDBqJCUxymnn398XCW4YG"
            >
              https://Heictopng.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 79. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictowebp.docbay.in&sa=D&source=editors&ust=1706000068729501&usg=AOvVaw25IpJhnbLU_RBd3PqhpSBk"
            >
              https://Heictowebp.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 80. </span>
          <span className="c0 c5">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictogif.docbay.in&sa=D&source=editors&ust=1706000068729651&usg=AOvVaw32e-XNv3QX-OOi9c14-e5L"
            >
              https://Heictogif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 81. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictoavif.docbay.in&sa=D&source=editors&ust=1706000068729797&usg=AOvVaw3rm7PZRbyWCYbmO8CUXh2_"
            >
              https://Heictoavif.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 82. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://heictotiff.docbay.in&sa=D&source=editors&ust=1706000068729943&usg=AOvVaw0eoblbus-vjjlwlPag1JJz"
            >
              https://Heictotiff.docbay.in
            </a>
          </span>
          <span className="c0">&nbsp;| 83. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://alyonafinance.in&sa=D&source=editors&ust=1706000068730095&usg=AOvVaw3YmU1JWe70yt5AbPTr7zo3"
            >
              https://alyonafinance.in
            </a>
          </span>
          <span className="c0">&nbsp;| 84. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/koto-frontend&sa=D&source=editors&ust=1706000068730267&usg=AOvVaw30-vOM9Q2IAZcjka8oc0c_"
            >
              KodoGame Frontend
            </a>
          </span>
          <span className="c0">&nbsp;| 85. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/koto-backend&sa=D&source=editors&ust=1706000068730431&usg=AOvVaw3qUGKznucZ_g5RaLPGCAtw"
            >
              KodoGameBackend
            </a>
          </span>
          <span className="c0">&nbsp;| 86. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/reelview-admin&sa=D&source=editors&ust=1706000068730604&usg=AOvVaw06UwILan51NEoD1OJomgqS"
            >
              Reelview Admin
            </a>
          </span>
          <span className="c0">&nbsp;| 87. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/rydo-backend&sa=D&source=editors&ust=1706000068730771&usg=AOvVaw0BFBBUjEeERx2c4PKB1zMf"
            >
              Rydo Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 88. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.amf.alyonamicrofinance&sa=D&source=editors&ust=1706000068730955&usg=AOvVaw2PgvkHcX9aw0FQojXnG5Dh"
            >
              AlyonaFinance App
            </a>
          </span>
          <span className="c0">&nbsp;| 89. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.sakurasoftworks.reelview&sa=D&source=editors&ust=1706000068731156&usg=AOvVaw3xi7kBzji9O7SVS3kFyQPo"
            >
              Reelview Android
            </a>
          </span>
          <span className="c0">&nbsp;| 90. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.nandyrh.onlinehomejobs.jobs&sa=D&source=editors&ust=1706000068731348&usg=AOvVaw0bHXjMoWbyil_mi0DAKU63"
            >
              Online Home Jobs App
            </a>
          </span>
          <span className="c0">&nbsp;| 91.</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/tradinghelper&sa=D&source=editors&ust=1706000068731527&usg=AOvVaw0_wqdjxb9dhfcYwFnYrgub"
            >
              &nbsp;Trading Helper App
            </a>
          </span>
          <span className="c0">&nbsp;| 92. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/Appnor-Backend&sa=D&source=editors&ust=1706000068731699&usg=AOvVaw0mKLcQNRf55vTdx5M7VhdF"
            >
              Appnor Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 93.</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/Appnor-Backend&sa=D&source=editors&ust=1706000068731950&usg=AOvVaw0beJxvHNu5I9Bz652bup_0"
            >
              &nbsp;Docbay Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 94. &nbsp;</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/Appnor-Backend&sa=D&source=editors&ust=1706000068732191&usg=AOvVaw2cJpTHLHwaCdx75M6ukOTR"
            >
              Webparser Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 95. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/Appnor-Backend&sa=D&source=editors&ust=1706000068732395&usg=AOvVaw3KsbuqEiNtrO4ci5imWEdM"
            >
              EscreenshotX Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 96.</span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://github.com/gunjan1sharma/amazon-scrapper&sa=D&source=editors&ust=1706000068732686&usg=AOvVaw1U_3QDGt1NXm0RrY6Rl3Zq"
            >
              &nbsp;Amazon Scrapper Backend
            </a>
          </span>
          <span className="c0">&nbsp;| 97. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.Evokeup.Media.Agency&sa=D&source=editors&ust=1706000068732978&usg=AOvVaw3UKM6xqQwsrKZEocNFe5ks"
            >
              Evokeup Tech App
            </a>
          </span>
          <span className="c0">&nbsp;| 98. </span>
          <span className="c5 c0">
            <a
              className="c3"
              href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.Evokeup.technologies.capsuleNews&sa=D&source=editors&ust=1706000068733291&usg=AOvVaw18yOzvs6vYNQ2wNqFiT7fS"
            >
              MagadhTv Android App
            </a>
          </span>
        </p>
        <p className="c14 c22">
          <span className="c2" />
        </p>
        <p className="c14 c22">
          <span className="c2" />
        </p>
        <p className="c14">
          <span className="c0">
            These are SaaS tools founded and developed by me in pursuit of
            generating sources of revenue. These websites and apps I developed
            using various backend, frontend, development, testing, and
            deployment technologies. Mainly I used ReactJS | VueJS | NextJS |
            MUI | Tailwind CSS | Styled Component | Bootstrap for frontend and
            NodeJS | ExpressJS | NestJS | Mongoose | Sequelize | MongoDB Atlas
            for Backend.
          </span>
        </p>
        <p className="c14 c15">
          <span className="c2" />
        </p>
        <p className="c25 c22">
          <span className="c19" />
        </p>
        <p className="c25 c22">
          <span className="c19" />
        </p>
        <hr />
        <p className="c25 c22">
          <span className="c19" />
        </p>
        <p className="c22 c25">
          <span className="c24 c0 c26" />
        </p>
      </div>
     
    </>
  );
}
