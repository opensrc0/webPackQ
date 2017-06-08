// require('./app.css')
require('./assets/sass/_premium.scss')
require('./assets/sass/_vap_postad.scss')

require('./assets/js/papMobileSecondPage')

console.log('index.js');

console.log('yo4');

const reloading = document.readyState === 'complete'
if(module.hot){
  module.hot.accept((err) => {
    console.log('HMR Error: ', err)
  })
  if(reloading){
    console.log('HRM Reloading.')
    // call onLoad
  }else{
    console.info('HMR Enabled.')
    // bootstrap
  }
}else{
  console.info(' HMR not supported')
}
