/**
** user前端业务
*/

import $ from 'jquery'

const _dialog = require('../view/dialog')

var _user = {
	// @desc : 根据姓名查询信息
	queryByName : function(name) {
		if (name == "") {
			_dialog.show("提示", "输入框不能为空！");
			return;
		} else {
			$.ajax({
				url : "http://localhost:8081/user/findByName",
				type : "GET",
            	data : {
            		"name" : name
            	},
            	dataType: 'json',
            	success : function (info) {
                	if (info.code != 0) {
                		_dialog.show("提示", "请求失败 : " + info.msg);
                	} else {
                		var obj = info.data.result;
                		var data = "";
                		data += "编号 : " + obj["uid"] + "   ";
                		data += "姓名 : " + obj["uname"] + "   ";
                		data += "性别 : " + obj["usex"] + "   ";
                		data += "电话号码 : " + obj["uphone"];
                		_dialog.show("显示数据", data);
                	}
            	},
            	error : function (jqXHR, textStatus, errorThrown) {
            		_dialog.show("警告", "ajax出错 : " + textStatus);
            	}
			});

		}
	},
}

module.exports = _user;