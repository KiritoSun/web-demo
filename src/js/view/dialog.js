/**
** 封装提示框
*/

import $ from 'jquery'

var _dialog = {
	// 输入标题和信息显示提示框
	show : function(title, msg) {
		$("#exampleModalLabel").text(title);
		$("#msg").text(msg);
		$("#exampleModal").modal();
	},
}

module.exports = _dialog;