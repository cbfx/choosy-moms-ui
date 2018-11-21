import BaseModel from './../../../BaseModel';

export function getDefaultSchema() {
  return {
    fixed_height: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif',
      width: '568',
      height: '200',
      size: '460622',
      mp4: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.mp4',
      mp4_size: '13866',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.webp',
      webp_size: '367786'
    },
    fixed_height_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_s.gif',
      width: '568',
      height: '200'
    },
    fixed_height_downsampled: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.gif',
      width: '568',
      height: '200',
      size: '476276',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.webp',
      webp_size: '100890'
    },
    fixed_width: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.gif',
      width: '200',
      height: '70',
      size: '90483',
      mp4: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.mp4',
      mp4_size: '14238',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.webp',
      webp_size: '47302'
    },
    fixed_width_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_s.gif',
      width: '200',
      height: '70'
    },
    fixed_width_downsampled: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif',
      width: '200',
      height: '70',
      size: '71069',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.webp',
      webp_size: '13186'
    },
    fixed_height_small: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100.gif',
      width: '284',
      height: '100',
      size: '460622',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100.webp',
      webp_size: '72748'
    },
    fixed_height_small_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100_s.gif',
      width: '284',
      height: '100'
    },
    fixed_width_small: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif',
      width: '100',
      height: '35',
      size: '90483',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w.webp',
      webp_size: '18298'
    },
    fixed_width_small_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/100w_s.gif',
      width: '100',
      height: '35'
    },
    downsized: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif',
      width: '500',
      height: '176',
      size: '426811'
    },
    downsized_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif',
      width: '500',
      height: '176'
    },
    downsized_large: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif',
      width: '500',
      height: '176',
      size: '426811'
    },
    original: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif',
      width: '500',
      height: '176',
      size: '426811',
      frames: '22',
      mp4: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.mp4',
      mp4_size: '51432',
      webp: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.webp',
      webp_size: '291616'
    },
    original_still: {
      url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif',
      width: '500',
      height: '176'
    };
};

export default class Model extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
