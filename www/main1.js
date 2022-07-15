/* This file is included on all pages */

/*jslint browser: true, debug: true, undef: true, eqeqeq: true,
plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true,
immed: true */

"use strict";

(function($){

var $H = {
    // namespace for data model
    model: {}, 
    // namespace for DOM-related functions
    dom:  {},
    // space for ui and other configurations
    config: {},
    // UI and related state that can be affected by external processes
    // (such as request parameters)
    state: {},
    // data received from either the environment, the user, or external 
    // services
    data: {},
    // functions to apply if their `enabled` property is true.
    //
    // @access private
    loadstack: [],
    init: function () {
        for( var i=0; i < $H.loadstack.length; i++ )
        {
            var fn = $H.loadstack[i];
            if ( fn.enabled ) {
                fn.apply();
            }
        }
    },
    // add a function to be called on $H.init (if enabled)
    add_for_init: function(fn)
    {
        fn.enabled = true;
        $H.loadstack.push(fn);
        return fn;
    }
};

// setup to run $H.init on startup
$($H.init);

/*
 * A simple wrapper function which triggers the function given
 * to load on startup and returns it back.  Sets `enabled` to true.
 */
var $F = $H.add_for_init;

/*
 * Replace a div.button with a table.button with extra <td>s for
 * side images.
 *
 * @param btn_ctx the div.button DOM node
 */
/*
$H.dom.wrap_button = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        left   = $('<td class="left"></td>'),
        middle = $('<td class="middle"></td>'),
        right  = $('<td class="right"></td>'),
        // grab the <a> inside the btn_ctx and clone it including its events
        a      = $btn_ctx.children('a').clone(true);
    
    // build the resulting structure:
    struct.append(row.append(left)
                     .append(middle.append(a))
                     .append(right));
    
    left.bind('click',function(){
//        $('a',struct).trigger('click');
        document.location = "javascript:to_submit(document.forms[0])";
//        return true;
    });
    right.bind('click',function(){
//        $('a',struct).trigger('click');
        document.location = "javascript:to_submit(document.forms[0])";
//        return true;
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};
*/
$H.dom.wrap_button = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        pic   = $('<td class="button_pic" onmouseover=mouseover_continue() onmouseout=mouseout_continue()></td>');
    
    var imagetext_html = $('<span>'+sbutton.continue1+'</span>');
    // build the resulting structure:
    //struct.append(row.append(pic));
    struct.append(row.append(pic.append(imagetext_html)));
    
    pic.bind('click',function(){
        document.location = "javascript:to_submit(document.forms[0])";
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id','onmouseover','onmouseout'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};

$H.dom.wrap_disabled_button = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        pic   = $('<td class="disabled_button_pic"></td>');
    
    var imagetext_html = $('<span>'+sbutton.continue1+'</span>');
    // build the resulting structure:
    //struct.append(row.append(pic));
    struct.append(row.append(pic.append(imagetext_html)));
    
    pic.bind('click',function(){
        document.location = "javascript:to_submit(document.forms[0])";
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};

$H.dom.wrap_install_button_over = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        pic   = $('<td class="pic" onmouseover=mouseover_install() onmouseout=mouseout_install()></td>');
   
    var imagetext_html = $('<span id="install_image_text_hover">'+wlsecwarn.info14+'</span>'); 
    // build the resulting structure:
    //struct.append(row.append(pic));
    struct.append(row.append(pic.append(imagetext_html)));
    
    pic.bind('click',function(){
        document.location = "CC_Setup.asp";
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id','onmouseover','onmouseout'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};

$H.dom.wrap_install_button = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        pic   = $('<td class="pic" onmouseover=mouseover_install() onmouseout=mouseout_install()></td>');
    
    var imagetext_html = $('<span id="install_image_text">'+wlsecwarn.info14+'</span>'); 
    // build the resulting structure:
    //struct.append(row.append(pic));
    struct.append(row.append(pic.append(imagetext_html)));
    
    pic.bind('click',function(){
        document.location = "CC_Setup.asp";
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id','onmouseover','onmouseout'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};

$H.dom.wrap_checkbox = function(btn_ctx)
{
    var $btn_ctx = $(btn_ctx);
    
    // DOM elts to be snapped in in a moment
    var struct = $('<table></table>'),
        row    = $('<tr></tr>'),
        pic   = $('<td class="pic"></td>'),
        text   = $('<td class="text"></td>'),
        a      = $btn_ctx.children('a').clone(true);;
    
    // build the resulting structure:
    struct.append(row.append(pic)
                     .append(text.append(a)));
    
    pic.bind('click',function(){
        document.location = "javascript:enable_disable_checkbox(this.form)";
    });
    
    // add the original classes & styles from the btn_ctx to the struct
    $.each( ['class','style','id'], function(i,val){
        struct.attr(val, $btn_ctx.attr(val) || '' );
    });
        
    $btn_ctx.replaceWith(struct);
    
    // add the 'click' class to the <table> on click and
    // remove it after the click
    struct.bind('mousedown', function(){
        $(this).addClass('click');
    }).bind('mouseup', function(){
        $(this).removeClass('click');
    }).bind('mouseleave',function(){
        $(this).removeClass('click');
    });
};

/*
 * Replaces
 * 
 *     <form>
 *         [...]
 *         <div class="buttons">
 *             <input type="submit" value="SUBMIT" />
 *             <input type="reset"  value="RESET"  />
 *         </div>
 *         [...]
 *     </form>
 * 
 * with something the following pseudo-code:
 * 
 *     <form>
 *         [...]
 *         <div class="buttons">
 *             <div class="button">
 *                 <a href="#" onclick="submit_form()">SUBMIT</a>
 *             </div>
 *             <div class="button">
 *                 <a href="#" onclick="reset_form()">RESET</a>
 *             </div>
 *         </div>
 *     </form>
 * 
 * This is meant to be called *before* wrap_button().
 *
 * @param form_ctx the <form> DOM element
 */
$H.dom.replace_submit_reset_buttons = function(form_ctx)
{
    var initial_wrapper = $('div.buttons', form_ctx),
    // find the original submit and reset buttons and hide them.  It's
    // important to hide and not remove since we use the buttons later
    // to actually perform the clicks.
    buttons = { submit: initial_wrapper.find('input[type=submit]').hide(),
                reset:  initial_wrapper.find('input[type=reset]').hide() },
    // grab their visible text (`value` attributes)
    text = { submit: buttons.submit.val() || 'Submit',
             reset:  buttons.reset.val()  || 'Reset' };
    
    // create new buttons and append them to the initial_wrapper if they 
    // even existed in the first place.
    if ( buttons.submit.length > 0 ) {
        $H.dom.button_for({
            html: text.submit,
            classes: (buttons.submit.attr('class')||'').split(/\s+/),
            fn: function(){
                $('input:submit', form_ctx).click();
                return false;
            }}).appendTo(initial_wrapper);
    }
    
    if ( buttons.reset.length > 0 ) {
        $H.dom.button_for({ 
            html: text.reset,

            classes: (buttons.reset.attr('class')||'').split(/\s+/),
            fn: function(){
                $('input:reset', form_ctx).click();    
                return false;
            }}).appendTo(initial_wrapper);
    }
};


$H.dom.replace_all_submit_reset_buttons = $F(function()
{
    $('form').each(function(){
        $H.dom.replace_submit_reset_buttons(this);
    });
});

/**
 * Returns a DOM element representing a button to perform the operation
 * specified by the given options object.
 *
 * options params:
 *  -  html:  the inner html for the generated button.  Default ''
 *  -  href:  the `href` attribute of the generated link.  Default '#'
 *  -  fn:    the funciton to execute when clicked.  Default to return true.
 *  -  classes: an array of classes (or a single class) that should be
 *              applied to the generated element
 */
$H.dom.button_for = function(options)
{
    var wrapper = $('<div></div>')
        .addClass('button')
        .bind('click',function(){
            return $(this).children('a').click();
        }),
    link =  $('<a></a>')
        .append(options.html || '')
        .attr('href', options.href || '')
        .bind('click',
            options.fn || function(){return true;}
        );
    $.each($.makeArray(options.classes || []), function(i,cls){
        $(wrapper).addClass(cls);
    });
    return wrapper.append(link);
};

$H.dom.wrap_all_buttons = $F(function()
{
    $('div.install_button').each(function(){
        $H.dom.wrap_install_button(this);
    });
    $('div.install_button_hover').each(function(){
        $H.dom.wrap_install_button_over(this);
    });
    $('div.button').each(function(){
        $H.dom.wrap_button(this);
    });
    $('div.button_hover').each(function(){
        $H.dom.wrap_button(this);
    });
    $('div.disabled_button').each(function(){
        $H.dom.wrap_disabled_button(this);
    });
    $('div.checkbox').each(function(){
        $H.dom.wrap_checkbox(this);
    });
    $('div.checkbox_over').each(function(){
        $H.dom.wrap_checkbox(this);
    });
});


/*
 * Allows forms to be submitted via hitting enter with 
 * the keyboard.  Attaches an event to all keydowns of
 * inputs:  if event's keycode is enter keycode (13), will
 * submit parent <form>s.
 */
/*$H.dom.enter_to_submit = $F(function()
{
    $('input').keydown(function(evt){
        if ( evt.keyCode === 13 ) 
        {
            $(this).parents('form')
            return false;
        }
    });
});*/
	$H.dom.focus_first_input = $F(function()
	{
		$('input[type=password]:first').focus();
	});
})(jQuery);
