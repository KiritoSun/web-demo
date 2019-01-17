/**
** 引入外部资源
*/
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/index.css'

import $ from 'jquery'

const _user = require('../service/user-service');

$(function() {
	$("input[name='query']").click(function() {
		var name = $("input[name='name']").val();
		_user.queryByName(name);
	});
});