(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open);
      btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){btn.click();btn.focus();}});
    nav.addEventListener('click',function(e){if(e.target.closest('a')&&nav.classList.contains('open'))btn.click();});
  }
  var grid=document.getElementById('grid');
  if(!grid)return;
  var items=(window.GALLERY_ITEMS||[]).slice(),filter='all',shown=[],cur=0;
  var empty=document.getElementById('empty'),lb=document.getElementById('lb'),lbi=document.getElementById('lb-img'),lbc=document.getElementById('lb-cap');
  var lastFocus=null;
  function render(){
    grid.innerHTML='';
    shown=items.filter(function(i){return filter==='all'||i.type===filter;});
    shown.forEach(function(it,idx){
      var b=document.createElement('button');b.type='button';b.className='g-item';
      b.setAttribute('aria-label','Open larger image: '+it.alt);
      var img=document.createElement('img');img.src=it.src;img.alt=it.alt;img.loading='lazy';
      var tag=document.createElement('span');tag.className='g-tag';tag.textContent=it.type==='photo'?'Photo':'Illustration';
      b.appendChild(img);b.appendChild(tag);
      if(it.caption){var c=document.createElement('span');c.className='g-cap';c.textContent=it.caption;b.appendChild(c);}
      b.addEventListener('click',function(){open(idx);});
      grid.appendChild(b);
    });
    var hasPhoto=items.some(function(i){return i.type==='photo';});
    empty.hidden=hasPhoto||filter==='illustration';
  }
  function show(i){cur=(i+shown.length)%shown.length;var it=shown[cur];lbi.src=it.src;lbi.alt=it.alt;lbc.textContent=it.caption||it.alt;}
  function open(i){lastFocus=document.activeElement;show(i);lb.hidden=false;lb.querySelector('.lb-close').focus();}
  function close(){lb.hidden=true;if(lastFocus)lastFocus.focus();}
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1);});
  lb.querySelector('.lb-next').addEventListener('click',function(){show(cur+1);});
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){
    if(lb.hidden)return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(cur-1);
    if(e.key==='ArrowRight')show(cur+1);
  });
  document.querySelectorAll('.chip').forEach(function(c){
    c.addEventListener('click',function(){
      document.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on');});
      c.classList.add('on');filter=c.getAttribute('data-f');render();
    });
  });
  render();
})();
