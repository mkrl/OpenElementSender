<%@ page session="true" %>
<%@ page import="org.opencms.util.CmsStringUtil, org.opencms.jsp.*, org.opencms.file.*, java.io.*"%>
<%@ page import="java.util.*"%>
<%@ taglib prefix="cms" uri="http://www.opencms.org/taglib/cms" %>
<%@page import="org.jsoup.Jsoup, org.jsoup.nodes.Document, org.jsoup.nodes.Element"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%

org.opencms.jsp.CmsJspActionElement cms = new org.opencms.jsp.CmsJspActionElement(pageContext, request, response);
CmsObject cmsObj = cms.getCmsObject();

String url = request.getParameter("url");
String name = request.getParameter("name");
String number = request.getParameter("n");

%>

<style>
table{
	font-family: "Arial","sans-serif","Tahoma";
	margin-top: 10px;
	margin-bottom: 10px;
	border-collapse: collapse;
	border: 1px solid #bfbfbf;
	width: 100%;

}

table td, table th{
	border: 1px solid #bfbfbf;
	padding: 4px 7px 5px 7px;
	text-align: left;
}
</style>

<%

try {
	int n = Integer.parseInt(number);

	Document doc = Jsoup.connect(url).get();
	Element element = doc.getElementsByTag(name).eq(n).first();
	//Element element = doc.select("div.page_content table:nth-child(" + n + ")").first();
	
	
    out.println(element.toString());

} catch (IOException ioe) {
	out.print("Read/write error: " + ioe.getMessage());
} catch (Exception e) {
	out.print("An error has occurred: " + e.getMessage());
}

%>