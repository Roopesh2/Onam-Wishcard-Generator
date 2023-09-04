
import { Canvg, presets } from 'https://cdn.skypack.dev/canvg@^4.0.0'
/**
 * 
 * @param {SVGAElement} svg 
 * @param {*} callback 
 */
window.svgToPng = async function svgToPng (svg, size, callback) {
  let clone = svg.cloneNode(true);
  clone.setAttribute("width", size[0])
  clone.setAttribute("height", size[1])
  const preset = presets.offscreen()
  let {width, height} = clone.getBBox();
  const canvas = new OffscreenCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const v = await Canvg.from(ctx, clone.outerHTML, preset)

  // Render only first frame, ignoring animations and mouse.
  await v.render()

  const blob = await canvas.convertToBlob()
  const pngUrl = URL.createObjectURL(blob)
  console.log(pngUrl);
}