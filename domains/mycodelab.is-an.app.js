addSubDomain({
  description: 'My personal projects', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'mycodelab', // desired subdomain name
  owner: {
    email: 'workspace.shadowgaming@gmail.com',
  },
  record: {
    NS: ['maceio.ns.porkbun.com', 'curitiba.ns.porkbun.com', 'salvador.ns.porkbun.com', 'fortaleza.ns.porkbun.com'],
  },
})
