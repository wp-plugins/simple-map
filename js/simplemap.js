(function(a){var b=function(c,e,d){this.base_url="https://maps.google.com/maps?";this.display(c,e,d)};b.prototype.display=function(g,j,h){var d=a(g).attr("data-breakpoint");if(d>640){d=640}if(a("html").width()>d){var i=new GMaps({div:g,lat:j.lat(),lng:j.lng(),mapTypeControl:false,zoom:parseFloat(h),streetViewControl:false,scrollwheel:false,mapTypeId:google.maps.MapTypeId.ROADMAP});i.addMarker({lat:j.lat(),lng:j.lng()})}else{var f=GMaps.staticMapURL({center:j.lat()+","+j.lng(),zoom:h,size:d+"x"+a(g).height(),markers:[{lat:j.lat(),lng:j.lng()}],sensor:"false"});var e=a("<img />");a(e).attr("src",f);a(e).attr("alt",a(g).text());var c=a("<a />");a(c).attr("href",this.base_url+"q="+j.lat()+","+j.lng()+"&z="+h+"&hl=ja");a(c).html(e);a(g).html(c);a(g).addClass("staticmap")}};a(".simplemap").each(function(){var d=a("div",this).get(0);var e=16;if(parseFloat(a(d).attr("data-zoom"))){e=a(d).attr("data-zoom")}if(a(d).text().length){GMaps.geocode({address:a(d).text(),callback:function(i,h){if(h=="OK"){var j=i[0].geometry.location;new b(d,j,e)}}})}else{if(a(d).attr("data-lat")&&a(d).attr("data-lng")){var f=a(d).attr("data-lat");var c=a(d).attr("data-lng");var g=new google.maps.LatLng(f,c);new b(d,g,e)}}})})(jQuery);