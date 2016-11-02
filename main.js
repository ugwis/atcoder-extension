var pushUrl = "atcoder.ugwis.net";
var trs = document.getElementsByTagName('tr');
for(var i=1;i<trs.length;i++){
	var tr = trs[i].children;
	var date = tr[0].children[0].innerText;
	var problem = tr[1].children[0].innerText;
	var pid = tr[1].children[0].getAttribute('href');
	var user = tr[2].children[0].innerText;
	var uid = tr[2].children[0].getAttribute('href');
	var lang = tr[3].innerText;
	var score = tr[4].innerText;
	var code = tr[5].innerText;
	var state = tr[6].children[0].innerText;
	var time = state==='AC'?tr[7].innerText:0;
	var memory = state==='AC'?tr[8].innerText:0;
	var rid = (state==='AC'?tr[9]:tr[7]).children[0].getAttribute('href');
	console.log(date);
}