const path = require('path')
const fs = require("fs")
const withLess = require("next-with-less")
const lessToJS = require('less-vars-to-js');

// module.exports = {
//   reactStrictMode: true,
//   // basePath: '/adapt',
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//     prependData: `
//       $base: black
//       $colorGrey: #252638
//       $colorLightGrey: #787994
//       $colorPink: #f30069
//     `, // Green, Yello, Brown, Red, Grey
//   },
//   // exportPathMap: async function (
//   //   defaultPathMap,
//   //   { dev, dir, outDir, distDir, buildId }
//   // ) {
//   //   return {
//   //     '/': { page: '/' },
//   //     '/adminpanel': { page: '/adminpanel' }
//   //   }
//   // },
//   images: {
//     loader: 'imgix', // defined but not used (pictures in presale, header and foot adopt inline custom loader with google photo image)
//     path: '',
//   },
//   // images: {
//   //   domains: ['example.com'],
//   // },
// }


const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './styles/custom.less'),
    'utf8'
  )
);

module.exports = withLess({
  lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
    images: {
      loader: 'imgix', // defined but not used (pictures in presale, header and foot adopt inline custom loader with google photo image)
      path: '',
    },
  })