// estado interno
var _tp='cnpj',_us=0,_dl=false;

function _atuCont(){

  var badge=document.getElementById('counter-num');
  var barra=document.getElementById('progress-fill');
  var usados=document.getElementById('progress-used');

  var r=_dl?'∞':Math.max(0,_CFG.limite-_us);

  if(badge){
    badge.textContent=r;
  }

  var p=Math.min(
    100,
    (_us/_CFG.limite)*100
  );

  if(barra){
    barra.style.width=p+'%';
  }

  if(usados){
    usados.textContent=_us;
  }

}

(function(){
  try{
    _us=parseInt(localStorage.getItem('_psp_u')||'0')||0;
    var _k=localStorage.getItem('_psp_k');
    if(_k&&_CFG.senhas.indexOf(_k)>-1)_dl=true;
  }catch(e){}
  _atuCont();
  if(!_dl&&_us>=_CFG.limite)document.getElementById('bloqueio').classList.add('show');
  if(_dl){
    document.getElementById('wrap-progresso').style.display='none';
    var b=document.getElementById('badge-contador');
    b.innerHTML='<div class="pro-badge">PRO ∞</div>';
  }
})();

function _abrirCompra(){window.open(_CFG.linkCompra,'_blank')}

function _abrirSenha(){
  document.getElementById('bloqueio').classList.remove('show');
  document.getElementById('campo-senha').value='';
  document.getElementById('senha-erro').style.display='none';
  document.getElementById('tela-senha').classList.add('show');
  setTimeout(function(){document.getElementById('campo-senha').focus()},300);
}

function _fecharSenha(){
  document.getElementById('tela-senha').classList.remove('show');
  if(!_dl&&_us>=_CFG.limite)document.getElementById('bloqueio').classList.add('show');
}

function _ativarSenha(){
  var sv=document.getElementById('campo-senha').value.trim().toUpperCase();
  if(_CFG.senhas.indexOf(sv)>-1){
    _dl=true;
    try{localStorage.setItem('_psp_k',sv)}catch(e){}
    document.getElementById('tela-senha').classList.remove('show');
    document.getElementById('bloqueio').classList.remove('show');
    document.getElementById('tela-sucesso').classList.add('show');
    document.getElementById('wrap-progresso').style.display='none';
    var b=document.getElementById('badge-contador');
    b.innerHTML='<div class="pro-badge">PRO ∞</div>';
  } else {
    document.getElementById('senha-erro').style.display='block';
    document.getElementById('campo-senha').style.borderColor='#cc2200';
    setTimeout(function(){document.getElementById('campo-senha').style.borderColor=''},1500);
  }
}

function _fecharSucesso(){
  document.getElementById('tela-sucesso').classList.remove('show');
}


