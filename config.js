// ═══════════════════════════════════════════════════
//  CONFIGURAÇÕES — altere somente este bloco
// ═══════════════════════════════════════════════════
var _CFG={
  linkCompra:'https://SEU_LINK_HOTMART_OU_CAKTO_AQUI.com', // ← substitua pelo link real
  senhas:[
    'SHOP-2026',   // senha padrão de acesso
    'PRO-SHOPEE',  // você pode adicionar quantas quiser
    'ACESSO-PRO'   // cada senha desbloqueia um cliente
  ],
  limite:30
};

var _TB={
  cnpj:[
    {max:79.99,c:18,t:2,f:4,s:1,x:0,lb:'até R$79,99'},
    {max:99.99,c:12,t:2,f:16,s:1,x:0,lb:'R$80 a R$99,99'},
    {max:199.99,c:12,t:2,f:20,s:1,x:0,lb:'R$100 a R$199,99'},
    {max:499.99,c:12,t:2,f:26,s:1,x:0,lb:'R$200 a R$499,99'},
    {max:Infinity,c:12,t:2,f:26,s:1,x:0,lb:'acima de R$500'}
  ],
  cpf0:[
    {max:79.99,c:18,t:2,f:4,s:1,x:0,lb:'até R$79,99'},
    {max:99.99,c:12,t:2,f:16,s:1,x:0,lb:'R$80 a R$99,99'},
    {max:199.99,c:12,t:2,f:20,s:1,x:0,lb:'R$100 a R$199,99'},
    {max:499.99,c:12,t:2,f:26,s:1,x:0,lb:'R$200 a R$499,99'},
    {max:Infinity,c:12,t:2,f:26,s:1,x:0,lb:'acima de R$500'}
  ],
  cpf1:[
    {max:79.99,c:18,t:2,f:4,s:1,x:3,lb:'até R$79,99'},
    {max:99.99,c:12,t:2,f:16,s:1,x:3,lb:'R$80 a R$99,99'},
    {max:199.99,c:12,t:2,f:20,s:1,x:3,lb:'R$100 a R$199,99'},
    {max:499.99,c:12,t:2,f:26,s:1,x:3,lb:'R$200 a R$499,99'},
    {max:Infinity,c:12,t:2,f:26,s:1,x:3,lb:'acima de R$500'}
  ]
};

