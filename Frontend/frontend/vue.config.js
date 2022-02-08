module.exports = {
  //para corrigir caminhos ./ no momento de produção
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
