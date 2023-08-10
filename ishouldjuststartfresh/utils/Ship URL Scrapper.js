var table = $("#standard");
var q = "";
table.children("div").each(function(e) {
	let v = $(table.children("div")[e]);
	let id = v.find("b")[0].innerHTML;
	console.log(id);
	if (!id.includes("red")) {
		try {
		q += "," + id + "|" + v.find("img")[1].currentSrc;
		} catch(e2) {console.log("failed");}
	}
});