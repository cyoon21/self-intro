var Links = {
    setColor: function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i=i+1;
    //   }
    $('a').css('color', color);
    }
  }
  var Body = {
    setColor: function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBackgroundColor: function(color){
        $('body').css('backgroundColor',color);
    },
    setTitleColor: function(color){
        $('h1').css('backgroundColor',color);
    },
    setTitleBorderColor: function(color){
        $('h1').css('borderColor',color);
    },
    setTitlefontColor: function(color){
        $('h1').css('color',color);
    },
    setfooter: function(color){
        $('.panel-footer').css('backgroundColor', color);
    },
    setbutton: function(color){
        $('#night_day').css('backgroundColor', color);
    },
    setborderbutton: function(color){
        $('#night_day').css('borderColor', color);
    },
    setprogress: function(color){
        $('.progress').css('background', color);
    },

  }
  
  function nightDayHnadler(self){
  var target = document.querySelector('body');
  if(self.value === 'night Mode'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Body.setTitleColor('rgb(50, 50, 50)');
    Body.setTitleBorderColor('rgb(50, 50, 50)');
    Body.setTitlefontColor('Black');
    Body.setfooter('rgb(50, 50, 50)');
    Body.setbutton('rgb(50, 50, 50)');
    Body.setborderbutton('rgb(60, 60, 60)');
    Body.setprogress('rgb(50, 50, 50)');
    self.value = 'day Mode';
    Links.setColor('white');

    
 } else{
     location.reload();
}
}
