/* ------------------------------------------------ *
                                       
	Name: J. Miguel Rivas

	Test 01: 2015 / 07 / 01
	Test 02: 2015 / 07 / 01

 * ------------------------------------------------ */

"use strict";

var  main =
{
	/* trim duplicated white space */
	cleanArray : function(s)
	{
		var newArray = [],
		end = s.length;

		for (var k = 0; k < end; k++)
		{
			if(s[k] != "")
			{
				newArray.push( s[k] );
			}
		}

		return newArray;
	},

	/* add node */
	addNode : function(obj)
	{
		var attr, node, text;
		obj.root = obj.root || document;
		obj.txt = obj.txt || "";
		obj.attribute = obj.attribute || "";
		obj.kind = obj.kind || "";
		node = document.createElement(obj.type);
		text = document.createTextNode(obj.txt);
		node.appendChild(text);
		if( ( obj.attribute != "" )
			|| ( obj.kind != "" ) )
		{
			attr = document.createAttribute(obj.kind);  
			attr.value = obj.attribute;
			node.setAttributeNode(attr);
		}
		obj.root.appendChild(node);
		return node;
	}

};

var test01 = (function()
{
	var strInput, intInput, str, exist, n, tmp;
	/* create an array of the characters that are inside */
	var onArray = function(s)
	{
		var newArray = [],
		end = s.length-1; 
		for (var k = 0; k <= end; k++)
		{
			if(( newArray.indexOf( s[k] ) == -1 ) && ( s[k] != " " ) )
			{
				newArray.push( s[k] );
			}
		}
		return main.cleanArray(newArray).join();
	}
	/* crate a similar string */
	var relativeStr = function(s)
	{
		var find, replace, rnd, result;
		rnd = Math.floor( ( Math.random() * ( exist.length - 1 ) ));
		find = exist[rnd];
		replace = find;
		while( replace == find )
		{
			rnd = Math.floor( ( Math.random() * 25 ) + 97 );
			replace = String.fromCharCode(rnd);
		}
		result = s.replace(find, replace);
		return result;
	}
	/* refresh values for globar vars */
	var update = function()
	{
		var nodeParent;
		intInput = document.querySelector("#test01 .int_input");
		strInput = document.querySelector("#test01 .str_input");
		if(isNaN(intInput.value))
		{
			intInput.value = 0;
		}
		n = intInput.value;		
		str = main.cleanArray(strInput.value.split(" ")).join(" ");
		exist = onArray(strInput.value).split(",");
		var output = document.querySelector("#test01 div");
		output.innerHTML = "";
		main.addNode(
		{
			root: output,
			type: "ol"
		});
		for(var k = 0; k < n; k++)
		{
			tmp = relativeStr(str);
			nodeParent = main.addNode(
			{
				root: document.querySelector("#test01 div ol"),
				type: "li"
			});
			main.addNode(
			{
				root: nodeParent,
				type: "span",
				txt: tmp
			});
		}
	};
	update();
	strInput.onkeyup = function(){ update(); };
	intInput.onkeyup = function(){ update(); };
})();

var test02 = (function()
{
	var strInput, intInput, str, exist, end, n;
	/* refresh values for globar vars */
	var refresh = function()
	{
		intInput = document.querySelector("#test02 .int_input");
		strInput = document.querySelector("#test02 .str_input");
		if(isNaN(intInput.value))
		{
			intInput.value = 0;
		}
		n = intInput.value;
		str = main.cleanArray(strInput.value.split(""));
		end = str.length;
		document.querySelector("#test02 div").innerHTML = "";
		for(var k = 0; k <= end; k++)
		{
			var tmpObj, tmp, rnd;
			tmp = str[k];
			rnd = Math.floor( ( Math.random() * 10 ) + 1 );
			main.addNode(
			{
				root: document.querySelector(".vanish"),
				type: "span",
				txt: tmp,
				kind: "class",
				attribute: "fade_" + rnd
			});
			tmpObj = document.querySelectorAll(".vanish span")[k].style;
			tmpObj.animationDuration = n + "ms";
			tmpObj.webkitTransitionDuration= n + "ms";
		}
	};
	refresh();
	strInput.onkeyup = function(){ refresh(); };
	intInput.onkeyup = function(){ refresh(); };
})();