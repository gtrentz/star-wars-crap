csx_opts = {
	'setupCallback': item => starwarsd6simple_setup(item),
	'uiContainer': function() { return document.querySelector('.uicontainer');},
	'defaultFieldValue':'&nbsp;',
};

function starwarsd6simple_dataPostLoad(options) {
        csx_opts.isEditable = options.isEditable;
        csx_opts.defaultContext = document.getElementById(options.containerId);
        csx_opts.uiContainer = csx_opts.defaultContext.querySelector('.uicontainer');

        var includes = document.createElement('script');
	includes.type = 'text/javascript';
	includes.src = 'https://github.com/gtrentz/star-wars-crap/blob/main/character-edit.js';
	includes.onload = function(){
		csx_opts.setupCallback();
	};
	document.body.appendChild(includes);
}
function starwarsd6simple_setup(context){
	csx_edit(csx_opts.defaultContext);
}
