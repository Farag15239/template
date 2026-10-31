
function toggleMenu(){
  const n=document.getElementById('navLinks');
  if(!n)return;
  n.style.display=n.style.display==='flex'?'none':'flex';
  if(n.style.display==='flex'){n.style.flexDirection='column';n.style.position='absolute';n.style.top='78px';n.style.right='4%';n.style.background='#07101f';n.style.padding='14px';n.style.borderRadius='14px';n.style.boxShadow='0 20px 50px rgba(0,0,0,.3)';}
}
function submitForm(e){
  e.preventDefault();
  const s=document.getElementById('successMessage');
  if(s){s.style.display='block';s.textContent='Mesajınız başarıyla alındı. Teşekkür ederiz.';}
  e.target.reset();
}
