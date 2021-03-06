// Simple State Manager
// Trigger javascript functions at various window sizes.
// Booleans used to limit functions to only run once.
// Adjust window sizes to match bootstrap sizes

/*
const _ssm_settings = { 
	tablet_min: 768,
	desktop_min: 992
};

let _bt_mobile_run = false;
let _bt_tablet_run = false;
let _bt_tablet_or_bigger_run = false;
let _bt_desktop_run = false;

(function(){
	ssm.addState({
		id: 'mobile',
		query: '(max-width: ' + (parseInt(_ssm_settings.tablet_min, 10) - 1) + 'px)',
		onEnter: function()
		{ 
			runMobile(); 
		} 
	});
	
	ssm.addState({
		id: 'tablet',
		query: '(min-width: ' + parseInt(_ssm_settings.tablet_min, 10) + 'px) and (max-width: ' + (parseInt(_ssm_settings.desktop_min, 10) - 1) + 'px)',
		onEnter: function() 
		{ 
			runTablet();
			runTabletOrBigger(); 
		}
	});
	
	ssm.addState({
		id: 'desktop',
		query: '(min-width: ' + parseInt(_ssm_settings.desktop_min, 10) + 'px)',
		onEnter: function() 
		{ 
			runDesktop();
			runTabletOrBigger(); 
		}
	});
}());

// Mobile
function runMobile() {
	if (!_bt_mobile_run) { 
		_bt_mobile_run = true;
	}
}

// Tablet
function runTablet() {
	if (!_bt_tablet_run) { 
		_bt_tablet_run = true;
	}
}

// Tablet or Desktop
function runTabletOrBigger() {
	if (!_bt_tablet_or_bigger_run) { 
		_bt_tablet_or_bigger_run = true;
	}	
}

// Desktop
function runDesktop() {
	if (!_bt_desktop_run) { 
		_bt_desktop_run = true;
		
		jQuery(document).ready(function($) { });
	}
}

// All sizes
jQuery(document).ready(function($) {
}); */