if (!!!templates) var templates = {};
templates["berry__action"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<button data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"btn btn-");t.b(t.v(t.f("modifier",c,p,0)));if(!t.s(t.f("modifier",c,p,1),c,p,1,0,0,"")){t.b("default");};t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));if(!t.s(t.f("type",c,p,1),c,p,1,0,0,"")){t.b("button");};t.b("\">");if(t.s(t.f("icon",c,p,1),c,p,0,136,167,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<i class=\"fa fa-");t.b(t.v(t.f("icon",c,p,0)));t.b("\"></i> ");});c.pop();}t.b(t.t(t.f("label",c,p,0)));t.b("</button>");return t.fl(); },partials: {}, subs: {  }});
templates["berry__addons"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"help-inline\"> ");t.b(t.t(t.f("help",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("<span class=\"font-xs text-danger\" style=\"display:block;\"></span>");return t.fl(); },partials: {}, subs: {  }});
templates["berry__label"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("hideLabel",c,p,1),c,p,1,0,0,"")){t.b("	");if(t.s(t.f("label",c,p,1),c,p,0,26,209,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<label for=\"");t.b(t.v(t.f("guid",c,p,0)));t.b("\" class=\"control-label col-md-");if(t.s(t.f("inline",c,p,1),c,p,0,87,89,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("12");});c.pop();}if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("4");};t.b("\">");t.b("\n" + i);t.b("  ");t.b(t.t(t.f("label",c,p,0)));t.b(":");if(t.s(t.f("required",c,p,1),c,p,0,153,187,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"text-danger\">*</span>");});c.pop();}t.b("\n" + i);t.b("</label>");});c.pop();}t.b("\n" + i);};return t.fl(); },partials: {}, subs: {  }});
templates["berry_base_fieldset"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<fieldset data-type=\"fieldset\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,103,166,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" >");t.b("\n" + i);if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,216,423,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"btn-group actions\">");t.b("\n" + i);t.b("	<div class=\"duplicate add btn btn-white\"><i class=\"fa fa-plus text-success\"></i></div><div class=\"btn btn-white remove\"><i class=\"fa fa-minus text-danger\"></i></div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("item.legend",c,p,1),c,p,0,463,497,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<legend>");t.b(t.t(t.d("item.legend",c,p,0)));t.b("</legend>");});c.pop();}t.b("\n" + i);if(!t.s(t.d("item.legend",c,p,1),c,p,1,0,0,"")){if(t.s(t.d("item.label",c,p,1),c,p,0,546,579,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<legend>");t.b(t.t(t.d("item.label",c,p,0)));t.b("</legend>");});c.pop();}t.b("\n" + i);};t.b("<div style=\"position:relative;top:-20px\">");t.b(t.rp("<berry__addons0",c,p,""));t.b("</div>");t.b("\n" + i);t.b("</fieldset>");return t.fl(); },partials: {"<berry__addons0":{name:"berry__addons", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_base_form"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form id=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"berry ");if(!t.s(t.d("options.inline",c,p,1),c,p,1,0,0,"")){t.b(" smart-form-horizontal form-horizontal");};t.b(" ");t.b(t.v(t.f("modifiers",c,p,0)));t.b("\" ");if(t.s(t.f("action",c,p,1),c,p,0,152,171,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("action=\"");t.b(t.v(t.f("action",c,p,0)));t.b("\"");});c.pop();}t.b(" onsubmit=\"return false;\" ");if(t.s(t.f("method",c,p,1),c,p,0,219,238,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("method=\"");t.b(t.v(t.f("method",c,p,0)));t.b("\"");});c.pop();}t.b(">");if(!t.s(t.f("legendTarget",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("legend",c,p,1),c,p,0,278,307,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<legend>");t.b(t.t(t.f("legend",c,p,0)));t.b("</legend>");});c.pop();}};t.b("</form>");return t.fl(); },partials: {}, subs: {  }});
templates["berry_checkbox"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix ");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,62,125,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,231,381,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<div class=\"duplicate add btn btn-default\"><i class=\"fa fa-plus\"></i></div>");t.b("\n" + i);t.b("	<div class=\"btn btn-default remove\"><i class=\"fa fa-minus\"></i></div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("label",c,p,1),c,p,0,416,558,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,429,475,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\" style=\"margin:0 0 5px\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\" style=\"margin:0 0 15px\">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,593,646,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\" style=\"margin: -10px 0 5px;\"\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\" style=\"margin: -5px 0 10px\">");};t.b("\n" + i);};t.b("		<div class=\"checkbox\">");t.b("\n" + i);t.b("			<label>");t.b("\n" + i);t.b("				<input name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" type=\"checkbox\" ");if(t.s(t.f("value",c,p,1),c,p,0,833,848,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("checked=checked");});c.pop();}t.b(">");t.b(t.v(t.f("text",c,p,0)));t.b("&nbsp;");t.b("\n" + i);t.b("			</label>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	");if(t.s(t.f("post",c,p,1),c,p,0,905,960,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"input-group-addon\">");t.b(t.t(t.f("post",c,p,0)));t.b("</span></div>");});c.pop();}t.b("\n");t.b("\n" + i);t.b(t.rp("<berry__addons1",c,p,"		"));t.b("	</div>");t.b("\n" + i);t.b(t.rp("<berry__popins2",c,p,"		"));t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }},"<berry__addons1":{name:"berry__addons", partials: {}, subs: {  }},"<berry__popins2":{name:"berry__popins", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_radio"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix form-group ");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,73,136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,242,392,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<div class=\"duplicate add btn btn-default\"><i class=\"fa fa-plus\"></i></div>");t.b("\n" + i);t.b("	<div class=\"btn btn-default remove\"><i class=\"fa fa-minus\"></i></div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("label",c,p,1),c,p,0,427,522,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,440,463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"col-md-12\">");t.b("\n" + i);};t.b("		");if(t.s(t.f("pre",c,p,1),c,p,0,592,665,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group\"><span class=\"input-group-addon\">");t.b(t.t(t.f("pre",c,p,0)));t.b("</span>");});c.pop();}t.b("\n" + i);t.b("		");if(!t.s(t.f("pre",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("post",c,p,1),c,p,0,693,718,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group\">");});c.pop();}};t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,751,1043,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"radio\">");};t.b("\n" + i);t.b("				<label ");if(t.s(t.f("inline",c,p,1),c,p,0,819,839,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("class=\"radio-inline\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("					<input data-label=\"");t.b(t.v(t.f("label",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\" type=\"radio\" ");if(t.s(t.f("selected",c,p,1),c,p,0,947,962,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("checked=checked");});c.pop();}t.b(" >");t.b("\n" + i);t.b("					");t.b(t.t(t.f("label",c,p,0)));t.b("\n" + i);t.b("				</label>");t.b("\n" + i);t.b("			");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("</div>");};t.b("\n" + i);});c.pop();}t.b("		");if(t.s(t.f("post",c,p,1),c,p,0,1067,1122,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"input-group-addon\">");t.b(t.t(t.f("post",c,p,0)));t.b("</span></div>");});c.pop();}t.b("\n" + i);t.b("		");if(!t.s(t.f("post",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("pre",c,p,1),c,p,0,1151,1157,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");});c.pop();}};t.b("\n" + i);t.b(t.rp("<berry__addons1",c,p,"		"));t.b("	</div>");t.b("\n" + i);t.b(t.rp("<berry__popins2",c,p,"		"));t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }},"<berry__addons1":{name:"berry__addons", partials: {}, subs: {  }},"<berry__popins2":{name:"berry__popins", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_raw"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix ");t.b(t.v(t.f("modifiers",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.f("label",c,p,1),c,p,0,87,236,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,100,151,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\" style=\"margin:0px 0px 15px\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\" style=\"margin:6px 0 15px\">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"col-md-12\" style=\"margin:0px 0px 15px\">");t.b("\n" + i);};t.b("		<div ");if(t.s(t.f("alert",c,p,1),c,p,0,341,398,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("class=\"alert alert-");t.b(t.v(t.f("alert",c,p,0)));t.b("\" style=\"margin-bottom: 5px;\"");});c.pop();}t.b(">");t.b(t.t(t.f("value",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_row"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"></div>");return t.fl(); },partials: {}, subs: {  }});
templates["berry_select"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix form-group ");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,73,136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,242,392,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<div class=\"duplicate add btn btn-default\"><i class=\"fa fa-plus\"></i></div>");t.b("\n" + i);t.b("	<div class=\"btn btn-default remove\"><i class=\"fa fa-minus\"></i></div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("label",c,p,1),c,p,0,427,522,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,440,463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"col-md-12\">");t.b("\n" + i);};t.b("		");if(t.s(t.f("pre",c,p,1),c,p,0,592,665,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group\"><span class=\"input-group-addon\">");t.b(t.t(t.f("pre",c,p,0)));t.b("</span>");});c.pop();}t.b("\n" + i);t.b("		");if(!t.s(t.f("pre",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("post",c,p,1),c,p,0,693,718,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group\">");});c.pop();}};t.b("\n" + i);t.b("			<select class=\"form-control\"  name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" >");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,802,932,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("				<option ");if(t.s(t.f("selected",c,p,1),c,p,0,828,847,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("selected='selected'");});c.pop();}t.b(" ");if(t.s(t.f("value",c,p,1),c,p,0,871,888,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("					");t.b(t.v(t.f("label",c,p,0)));t.b("\n" + i);t.b("				</option>");t.b("\n" + i);});c.pop();}t.b("			</select>");t.b("\n" + i);t.b("		");if(t.s(t.f("post",c,p,1),c,p,0,969,1024,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"input-group-addon\">");t.b(t.t(t.f("post",c,p,0)));t.b("</span></div>");});c.pop();}t.b("\n" + i);t.b("		");if(!t.s(t.f("post",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("pre",c,p,1),c,p,0,1053,1059,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");});c.pop();}};t.b("\n" + i);t.b(t.rp("<berry__addons1",c,p,"		"));t.b("	</div>");t.b("\n" + i);t.b(t.rp("<berry__popins2",c,p,"		"));t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }},"<berry__addons1":{name:"berry__addons", partials: {}, subs: {  }},"<berry__popins2":{name:"berry__popins", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_text"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix form-group ");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,73,136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,242,392,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<div class=\"duplicate add btn btn-default\"><i class=\"fa fa-plus\"></i></div>");t.b("\n" + i);t.b("	<div class=\"btn btn-default remove\"><i class=\"fa fa-minus\"></i></div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("label",c,p,1),c,p,0,427,522,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,440,463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"col-md-12\">");t.b("\n" + i);};t.b("		");if(t.s(t.f("pre",c,p,1),c,p,0,592,675,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group col-xs-12\"><span class=\"input-group-addon\">");t.b(t.t(t.f("pre",c,p,0)));t.b("</span>");});c.pop();}t.b("\n" + i);t.b("    ");if(!t.s(t.f("pre",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("post",c,p,1),c,p,0,705,730,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"input-group\">");});c.pop();}};t.b("\n" + i);t.b("		<input autocomplete=\"off\" class=\"form-control\" ");if(t.s(t.f("readonly",c,p,1),c,p,0,810,818,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly");});c.pop();}t.b(" ");if(t.s(t.f("max",c,p,1),c,p,0,840,859,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("maxlength=\"");t.b(t.v(t.f("max",c,p,0)));t.b("\"");});c.pop();}t.b(" placeholder=\"");t.b(t.v(t.f("placeholder",c,p,0)));t.b("\" type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" id=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("    ");if(t.s(t.f("post",c,p,1),c,p,0,978,1033,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"input-group-addon\">");t.b(t.t(t.f("post",c,p,0)));t.b("</span></div>");});c.pop();}t.b("\n" + i);t.b("    ");if(!t.s(t.f("post",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("pre",c,p,1),c,p,0,1064,1070,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");});c.pop();}};t.b("\n" + i);t.b(t.rp("<berry__addons1",c,p,"		"));t.b("	</div>");t.b("\n" + i);t.b(t.rp("<berry__popins2",c,p,"		"));t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }},"<berry__addons1":{name:"berry__addons", partials: {}, subs: {  }},"<berry__popins2":{name:"berry__popins", partials: {}, subs: {  }}}, subs: {  }});
templates["berry_textarea"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"row clearfix form-group ");t.b(t.v(t.f("modifiers",c,p,0)));t.b(" ");if(t.s(t.d("multiple.duplicate",c,p,1),c,p,0,73,136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("dupable\" data-min=\"");t.b(t.v(t.d("multiple.min",c,p,0)));t.b("\" data-max=\"");t.b(t.v(t.d("multiple.max",c,p,0)));});c.pop();}t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<berry__label0",c,p,"	"));if(t.s(t.f("label",c,p,1),c,p,0,229,426,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	");if(t.s(t.f("inline",c,p,1),c,p,0,242,316,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"col-md-12\" ");if(t.s(t.f("advanced",c,p,1),c,p,0,278,302,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding:0px 13px\"");});c.pop();}t.b(">");});c.pop();}t.b("\n" + i);t.b("	");if(!t.s(t.f("inline",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"col-md-8\" ");if(t.s(t.f("advanced",c,p,1),c,p,0,375,399,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding:0px 13px\"");});c.pop();}t.b(">");};t.b("\n" + i);});c.pop();}if(!t.s(t.f("label",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"col-md-12\" ");if(t.s(t.f("advanced",c,p,1),c,p,0,486,510,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"padding:0px 13px\"");});c.pop();}t.b(">");t.b("\n" + i);};t.b("		<textarea class=\"form-control\" ");if(t.s(t.f("readonly",c,p,1),c,p,0,583,591,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("readonly");});c.pop();}t.b(" style=\"width:100%;height:auto;min-height:20px\" rows=\"");t.b(t.v(t.f("rows",c,p,0)));if(!t.s(t.f("rows",c,p,1),c,p,1,0,0,"")){t.b("3");};t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" id=\"");t.b(t.v(t.f("guid",c,p,0)));t.b("\" placeholder=\"");t.b(t.v(t.f("placeholder",c,p,0)));t.b("\">");t.b(t.v(t.f("content",c,p,0)));t.b(t.v(t.f("value",c,p,0)));t.b("</textarea>");t.b("\n" + i);t.b(t.rp("<berry__addons1",c,p,"			"));t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {"<berry__label0":{name:"berry__label", partials: {}, subs: {  }},"<berry__addons1":{name:"berry__addons", partials: {}, subs: {  }}}, subs: {  }});
