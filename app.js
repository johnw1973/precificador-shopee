function _fmt(v){return'R$ '+Math.abs(v).toFixed(2).replace('.',',')}
function _fmtP(v){return v.toFixed(1).replace('.',',')+'%'}
function _gf(p){var tb=_TB[_tp];for(var i=0;i<tb.length;i++)if(p<=tb[i].max)return tb[i];return tb[tb.length-1]}

function _st(t){
  _tp=t;
  ['cnpj','cpf0','cpf1'].forEach(function(k){document.getElementById('btn-'+k).className=k===t?'active':''});
  var info={cnpj:'18% comissÃ£o + 2% transaÃ§Ã£o + R$4 fixo + R$1 serviÃ§o',cpf0:'18% comissÃ£o + 2% transaÃ§Ã£o + R$4 fixo + R$1 serviÃ§o',cpf1:'18% comissÃ£o + 2% transaÃ§Ã£o + R$4 fixo + R$1 serviÃ§o + R$3 CPF'};
  document.getElementById('taxa-info').textContent=info[t];
}

function _calc(){
  if(!_dl&&_us>=_CFG.limite){document.getElementById('bloqueio').classList.add('show');return}
  var cu=parseFloat(document.getElementById('custo').value)||0;
  var ou=parseFloat(document.getElementById('outros').value)||0;
  var mg=parseFloat(document.getElementById('margem').value)||0;
  var ab=document.getElementById('alert-box');
  if(cu<=0){ab.style.display='block';ab.className='alert warn';ab.textContent='âš ï¸ Digite o custo do produto para calcular.';return}
  var ct=cu+ou;
  var ld=ct*(mg/100);
  var f=_gf((ct+ld)*1.5);
  var ft=f.f+f.s+f.x;
  var pt=(f.c+f.t)/100;
  var pr=(ct+ld+ft)/(1-pt);
  var fr=_gf(pr);
  if(fr.max!==f.max){f=fr;ft=f.f+f.s+f.x;pt=(f.c+f.t)/100;pr=(ct+ld+ft)/(1-pt)}
  var pm=(ct+ft)/(1-pt);
  var tC=pr*(f.c/100);
  var tT=pr*(f.t/100);
  var tF=f.f;
  var tS=f.s;
  var tX=f.x;
  var tTot=tC+tT+tF+tS+tX;
  var liq=pr-ct-tTot;
  var psh=(tTot/pr)*100;
  if(!_dl){_us++;try{localStorage.setItem('_psp_u',_us)}catch(e){}}
  _atuCont();
  document.getElementById('resultado').className='';
  document.getElementById('r-preco').textContent=_fmt(pr);
  document.getElementById('r-faixa').textContent='faixa: '+f.lb;
  document.getElementById('r-liquido').textContent=_fmt(liq);
  document.getElementById('r-minimo').textContent=_fmt(pm);
  document.getElementById('m-custo').textContent=_fmt(ct);
  document.getElementById('m-lucro').textContent=_fmt(liq);
  document.getElementById('m-lucro').className='mv '+(liq<0?'red':'green');
  document.getElementById('m-taxas').textContent=_fmt(tTot);
  document.getElementById('m-pct').textContent=_fmtP(psh);
  document.getElementById('e-venda').textContent=_fmt(pr);
  document.getElementById('e-total-taxas').textContent='âˆ’ '+_fmt(tTot);
  document.getElementById('e-comissao').textContent='âˆ’ '+_fmt(tC);
  document.getElementById('e-transacao').textContent='âˆ’ '+_fmt(tT);
  document.getElementById('e-fixo').textContent='âˆ’ '+_fmt(tF);
  document.getElementById('e-servico').textContent='âˆ’ '+_fmt(tS);
  document.getElementById('e-custo').textContent='âˆ’ '+_fmt(ct);
  document.getElementById('e-lucro').textContent=_fmt(liq);
  document.getElementById('e-lucro').className='ev '+(liq<0?'neg':'pos');
  document.getElementById('row-cpf').style.display=f.x>0?'flex':'none';
  if(liq<0){ab.style.display='block';ab.className='alert danger';ab.textContent='âš ï¸ PrejuÃ­zo! Aumente a margem ou reduza os custos.'}
  else if(!_dl&&_us>=25&&_us<_CFG.limite){ab.style.display='block';ab.className='alert warn';ab.textContent='âš ï¸ Restam apenas '+(_CFG.limite-_us)+' cÃ¡lculos gratuitos.'}
  else{ab.style.display='none'}
  if(!_dl&&_us>=_CFG.limite){setTimeout(function(){document.getElementById('bloqueio').classList.add('show')},1500)}
}


