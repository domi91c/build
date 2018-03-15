var Main = new function() {
    
        // open/close right panel in mobile
        var toggleRightPanel = function(el) {
            var a = el.parent('.r-frame');
            a.toggleClass('open');
        }
    
        return {
            init: function() {
    
                $('.r_ctrl').on('click', function() {
                    console.log('press')
                    toggleRightPanel($(this));
                })
    
                $('.show_pass').on('mousedown touchstart', function() {
                    console.log( $(this).siblings('input[type=password]').attr('type'))
                    $(this).siblings('input[type=password]').attr('type', 'text');
                })
                $('.show_pass').on('mouseup', function() {
                    $(this).siblings('input[type=text]').attr('type', 'password');
                })
            }
        };
    };
    
    $(function() {
        Main.init();
    });