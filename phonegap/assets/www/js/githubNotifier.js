
function get_git_user(){

	var url = 'https://api.github.com/notifications';
	var url_foo = 'https://api.github.com/user/repos'
	//url = url_foo;
	var username = 'daithi-coombes';
	var password = '*******************'
	var data = false;

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status==200){
			document.getElementById('debug').innerHTML = xhr.responseText
		}
	}
	xhr.dataType = 'json';
	xhr.open('GET', url);
	xhr.setRequestHeader('Accept','application/vnd.github.raw');
	xhr.setRequestHeader('Content-Type','application/json');
	var sig = Base64.encode(username + ':' + password);
	xhr.setRequestHeader('Authorization', 'Basic ' + sig);
	document.getElementById('debug').innerHTML = "sending request...\n" + url;
	data ? xhr.send(JSON.stringify(data)) : xhr.send();
}